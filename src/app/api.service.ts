import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  key: string = '90d0e600c5b1579daa5b6752251e6545';
  baseUrl: string = 'https://api.themoviedb.org/3/movie/550?api_key=90d0e600c5b1579daa5b6752251e6545';
  maxResults: number = 50;
  films = [];
  user = {
   firstName : '',
   lastName : '',
   email : '',
   password : ''
  }


  constructor(private _http: HttpClient) { }
  returnSearch(q){
    return this._http.get(`https://api.themoviedb.org/3/search/movie?api_key=90d0e600c5b1579daa5b6752251e6545&query=${q}`).subscribe((data:any) => {
      console.log(data);
      this.films = data.results;
  });
}
  loginUser(loginInfo){
    this._http.post('http://meanstack-2019-ali-phortonssf.c9users.io:8080/api/appUsers/login', loginInfo)
    .subscribe((userInfo: any) => {
      console.log(`Welcome ${userInfo.firstName}!`);

    });
  }
  createUser(){
    this._http.post('http://meanstack-2019-ali-phortonssf.c9users.io:8080/api/appUsers', this.user)
    .subscribe( (res: any) => {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
    })
  }
  saveFavs(){
    this._http.post('http://meanstack-2019-ali-phortonssf.c9users.io:8080/api/appUsers/5d0859f40750e161961b569d/Favorites?', )
    .subscribe((res2: any)) => {
      console.log({res2});
  }
}