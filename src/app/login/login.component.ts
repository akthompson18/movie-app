import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginInfo = {
   email : '',
   password : ''
  }

  constructor(private _search: ApiService) { }
  onclick(){
    this._search.loginUser(this.loginInfo)
  }

  ngOnInit() {
  }

}
