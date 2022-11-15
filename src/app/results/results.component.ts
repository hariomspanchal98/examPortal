import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  answers: any;
  correctAns = 0;
  wrongAns = 0;

  ngOnInit(): void {

    this.answers = JSON.parse(localStorage.getItem("Test")!);

    console.log(this.answers);

    this.checkScore();

  }

  checkScore() {
    for (let i = 0; i < this.answers.length; i++) {
      if(this.answers[i].ans==this.answers[i].correctAns)
        this.correctAns++;
      else
        this.wrongAns++;
    }
  }
}
