import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
{path:'home',component: HomeComponent},

{path:'contact' , component:ContactComponent},
{path:'education', component:EducationComponent},
{path:'experience',component:ExperienceComponent},
{path:'portfolio', component:PortfolioComponent},
{path:'services', component:ServicesComponent},
{path:'skills', component:SkillsComponent},
{path:'testimonials', component:TestimonialsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
