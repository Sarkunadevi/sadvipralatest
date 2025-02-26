import { Component } from '@angular/core';

@Component({
  selector: 'app-volunteers',
  standalone: true,
  imports: [],
  templateUrl: './volunteers.component.html',
  styleUrl: './volunteers.component.css'
})
export class VolunteersComponent {
  volunteers= {
    title: 'FEEDBACK',
    description: 'What our volunteers are saying',
    detail: '',
    feedbacks : [
        {name: 'Volunteer Name1', userimage: '../assets/images/user-images/user-1.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'ABC'},
        {name: 'Volunteer Name2', userimage: '../assets/images/user-images/user-1.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'XYZ'},
        {name: 'Volunteer Name3', userimage: '../assets/images/user-images/user-1.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'PQR'},
    ]
}
}
