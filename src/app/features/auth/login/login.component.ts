import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'; 
import { CommonService } from '../../core/helper/common.service';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {


  constructor( private commonservice: CommonService,){}

  logInCode(){
      this.commonservice.showLoader()
  }
}
