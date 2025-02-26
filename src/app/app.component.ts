import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router'
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { PartnersComponent } from './components/partners/partners.component';
import { VolunteersComponent } from './components/volunteers/volunteers.component';
import { EventsComponent } from './components/events/events.component';
import { NavComponent } from './components/nav/nav.component';
import { OurMissionComponent } from './components/ourmission/ourmission.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, AboutComponent,
  PartnersComponent, VolunteersComponent,
  EventsComponent, NavComponent, OurMissionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sadvipra';
}
