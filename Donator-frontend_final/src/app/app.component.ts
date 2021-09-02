import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShown: boolean = true ; // hidden by default


toggleShow() {

this.isShown = ! this.isShown;

}
  title = 'Donator-frontend';
  myimage:string="assets/images/donation-1.jpg";
}
