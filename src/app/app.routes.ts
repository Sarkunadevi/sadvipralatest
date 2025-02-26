import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { PartnersComponent } from './components/partners/partners.component';
import { VolunteersComponent } from './components/volunteers/volunteers.component';
import { EventsComponent } from './components/events/events.component';
import { NavComponent } from './components/nav/nav.component';
import { OurMissionComponent } from './components/ourmission/ourmission.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [

    {title: "Sadvipra | Home", path:'' , component: HeaderComponent},
    {title: "Sadvipra | Home", path:'home' , component: HeaderComponent},
    {title: "Sadvipra | About", path:'about' , component: AboutComponent},
    {title: "Sadvipra | Partner", path:'partners' , component: PartnersComponent},
    {title: "Sadvipra | Volunteers", path:'volunteers' , component: VolunteersComponent},
    {title: "Sadvipra | Events", path:'events' , component: EventsComponent},
    {title: "Sadvipra | Our Mission", path:'ourmission' , component: OurMissionComponent},
    {title: "Sadvipra | Not Found", path:'**' , component: NotfoundComponent},

];
