import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
about = {
  title: "SUCCESS STORY",
  description: "How We Help The Needy",
  detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
  buttontext:"START DONATING TODAY",
  IconBlocks: [
    {id: 1, icon:"fa-html5" , title:"Dummy Heading 1", description:"Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\nnemore vivendum"},
    {id: 2, icon:"fa-bolt" , title:"Dummy Heading 2", description:"Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\nnemore vivendum"},
    {id: 3, icon:"fa-tablet" , title:"Dummy Heading 3", description:"Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\nnemore vivendum"},
    {id: 4, icon:"fa-rocket" , title:"Dummy Heading 4", description:"Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\nnemore vivendum"}
  ]
}
}
