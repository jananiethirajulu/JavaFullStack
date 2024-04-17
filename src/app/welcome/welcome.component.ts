import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message : string = 'Some welcome message'
  welcomeMessageFromService:string
  constructor(
    private service:WelcomeDataService
  ) { }

  ngOnInit() {
    console.log(this.message)
  }
  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );  
  }
  handleSuccessfulResponse(response){
    console.log(response.message);
    this.welcomeMessageFromService = response.message
  }

}
