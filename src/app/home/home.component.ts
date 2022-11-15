import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    testData:any;
    testArray=['angularJs', 'javascript','nodeJs'];

    constructor(private http: HttpService) { }
  
    ngOnInit(): void {

      localStorage.clear();

      this.http.get().subscribe({next :(data)=>{
        console.log(data);
        this.testData= data;
      }})
    }
  }
