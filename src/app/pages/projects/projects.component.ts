import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { PROJECTS } from '../../data/projects-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  allProjects: Project[] = PROJECTS;
  olympiadProjects: Project[] = [];
  caseProjects: Project[] = [];
  internshipProjects: Project[] = [];
  practiceProjects: Project[] = [];
  courseworkProjects: Project[] = [];

  constructor() {
    console.log('PROJECTS:', PROJECTS); // ← ДОБАВЬ ЭТО
    console.log('allProjects:', this.allProjects); // ← ДОБАВЬ ЭТО
  }

  ngOnInit(): void {
    this.olympiadProjects = this.allProjects.filter(p => p.category === 'olympiad');
    this.caseProjects = this.allProjects.filter(p => p.category === 'case');
    this.internshipProjects = this.allProjects.filter(p => p.category === 'internship');
    this.practiceProjects = this.allProjects.filter(p => p.category === 'practice');
    this.courseworkProjects = this.allProjects.filter(p => p.category === 'coursework');
    
    console.log('olympiadProjects:', this.olympiadProjects); // ← ДОБАВЬ ЭТО
  }
}