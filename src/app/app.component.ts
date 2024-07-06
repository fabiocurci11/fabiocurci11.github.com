import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'faby-FE';

  appName = environment.appName;
  apiUrl = environment.url_fabyBE + '/helloFaby'; // URL dell'API

  data: any


  constructor(
    private http: HttpClient
  ){

    this.getStudent()
  }

  getStudent(){
     this.http.get(this.apiUrl, {responseType: 'text'}).subscribe((data: string) => {
      this.data = data;
      console.log(this.data)
    }, (error) => {
      console.error('Error fetching data:', error);
    });
  }


}
