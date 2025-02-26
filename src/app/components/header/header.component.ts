import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  header = {
    title: "A SIMPLE LANDING PAGE",
    description: "A SIMPLE LANDING PAGE",
    url:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam error vitae dolorum molestias eligendi mollitia in fuga adipisci dicta.",
    buttontext:"START DONATING TODAY"
  }

}
