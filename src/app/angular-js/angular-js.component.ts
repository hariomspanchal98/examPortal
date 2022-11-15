import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-angular-js',
  templateUrl: './angular-js.component.html',
  styleUrls: ['./angular-js.component.css']
})
export class AngularJsComponent implements OnInit {

  testData:any;
  i=0;
  
  constructor(private http: HttpService,private fb:FormBuilder, private route:Router) { }

  form = this.fb.group({
    questions: this.fb.array([])
});

  questionForm = new FormGroup({
    que: new FormControl('', Validators.required),
    ans: new FormControl(''),
  })

  ngOnInit(): void {

    this.http.get().subscribe({next :(data)=>{
      this.testData= data;
      this.testData = this.testData?.tests[0];
      
      // console.log(this.testData);
      // console.log(this.testData.questions.length);
      
    }})
  }

  get questions() {
    return this.form.controls["questions"] as FormArray;
  }

  log(){
    this.questionForm.patchValue({
      que:  this.testData.questions[this.i].questionText,
    })

    const ques = this.fb.group({
      que: [this.questionForm.value.que, Validators.required],
      ans: [this.questionForm.value.ans, Validators.required],
      correctAns: [this.testData.questions[this.i].correctOptionIndex]
    });
    this.questions.push(ques);

    // console.log(this.questionForm.value);
    this.i++;
    this.questionForm.reset();
    // console.log(this.form.value);
  }

  finishTest(){
    this.log();
    console.log(this.form.value.questions);
    this.i=4;
    localStorage.setItem('Test', JSON.stringify(this.form.value.questions));
    this.route.navigateByUrl('/result');
  }

  getSelected(e:any){
    console.log(e.target.value);
    
  }
}
