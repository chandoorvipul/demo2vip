import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-last-page',
  templateUrl: './last-page.component.html',
  styleUrls: ['./last-page.component.css']
})
export class LastPageComponent implements OnInit {
  
  formData = {}
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.formData = this.http.getForm()
    console.log(this.formData)
  }

}
