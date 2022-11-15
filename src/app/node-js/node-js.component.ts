import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-node-js',
  templateUrl: './node-js.component.html',
  styleUrls: ['./node-js.component.css']
})
export class NodeJsComponent implements OnInit {
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
      this.testData = this.testData?.tests[2];
      
      console.log(this.testData);
      console.log(this.testData.questions.length);
      
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

    console.log(this.questionForm.value);
    this.i++;
    this.questionForm.reset();
    console.log(this.form.value);
  }

  finishTest(){
    this.log();
    console.log(this.form.value.questions);
    this.i=0;
    localStorage.setItem('Test', JSON.stringify(this.form.value.questions));
    this.route.navigateByUrl('/result');
  }
}

