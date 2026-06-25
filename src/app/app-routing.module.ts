import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { PracticeComponent } from './pages/practice/practice.component';
import { SelfDevelopmentComponent } from './pages/self-development/self-development.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'self-development', component: SelfDevelopmentComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }