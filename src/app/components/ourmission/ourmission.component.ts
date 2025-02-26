import { Component } from '@angular/core';

@Component({
  selector: 'app-ourmission',
  standalone: true,
  imports: [],
  templateUrl: './ourmission.component.html',
  styleUrl: './ourmission.component.css'
})
export class OurMissionComponent {
  ourmission= {
    title: 'BELIEVING',
    description: 'Focusing On What Matters Most',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
}
}
