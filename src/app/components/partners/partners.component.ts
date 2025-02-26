import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
  partner = {
    title: "TRUST",
    description: "Companies who sponsors for our ourmission",
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
    companyBlocks: [
      {id: 1 , Image:"../assets/images/company-images/company-logo1.png" , name:"Dummy Text"},
      {id: 2 , Image:"../assets/images/company-images/company-logo1.png", name:"Dummy Text"},
      {id: 3 , Image:"../assets/images/company-images/company-logo1.png" , name:"Dummy Text"},
      {id: 4 , Image:"../assets/images/company-images/company-logo1.png" , name:"Dummy Text"},
      {id: 5 , Image:"../assets/images/company-images/company-logo1.png" , name:"Dummy Text"},
      {id: 6 , Image:"../assets/images/company-images/company-logo1.png" , name:"Dummy Text"},
      {id: 7 , Image:"../assets/images/company-images/company-logo1.png" , name:"Dummy Text"},
      {id: 8 , Image:"../assets/images/company-images/company-logo1.png" , name:"Dummy Text"},
      {id: 9 , Image:"../assets/images/company-images/company-logo1.png" , name:"Dummy Text"},
    ]
  }
}
