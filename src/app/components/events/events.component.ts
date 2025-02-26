import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  Events = {
    title: "Events",
    description: "Project images",
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
    EventsImages: [
      {id: 1 , url:"../assets/images/events-images/events-image-1.jpg" , name:"Tree"},
      {id: 2 , url:"../assets/images/events-images/events-image-1.jpg", name:"Fingerprint"},
      {id: 3 , url:"../assets/images/events-images/events-image-1.jpg" , name:"The Man"},
      {id: 4 , url:"../assets/images/events-images/events-image-1.jpg" , name:"Mustache"},
      {id: 5 , url:"../assets/images/events-images/events-image-1.jpg" , name:"Moose"},
      {id: 6 , url:"../assets/images/events-images/events-image-1.jpg" , name:"Justice"},
    ]
  }
}
