import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { COURSES } from '../../data/courses-data';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = COURSES;
  groupedCourses: { [platform: string]: Course[] } = {};
  platforms: string[] = [];

  constructor() {
    console.log('COURSES:', COURSES); 
    console.log('courses:', this.courses); 
  }

  ngOnInit(): void {
    this.groupCoursesByPlatform();
    console.log('groupedCourses:', this.groupedCourses);
    console.log('platforms:', this.platforms);
  }

  groupCoursesByPlatform(): void {
    this.groupedCourses = this.courses.reduce((groups, course) => {
      const platform = course.platform;
      if (!groups[platform]) {
        groups[platform] = [];
      }
      groups[platform].push(course);
      return groups;
    }, {} as { [platform: string]: Course[] });
    
    this.platforms = Object.keys(this.groupedCourses).sort();
  }
}