import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public user: string="Patient";

  public doctor_dashboard:String="C:/Users/Sarath/Desktop/Petzey/PetzeyUI/src/app/Components/dashboard/dashboard.component.html"
  public patient_dashboard:String="C:/Users/Sarath/Desktop/Petzey/PetzeyUI/src/app/Components/dashboard/dashboard.component.html"


}
