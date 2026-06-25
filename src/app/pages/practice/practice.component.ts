import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRACTICE_INFO } from '../../data/practice-data';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  practiceInfo = PRACTICE_INFO;

  constructor() {
    console.log('PRACTICE_INFO:', PRACTICE_INFO); 
    console.log('internships:', PRACTICE_INFO.internships); 
    console.log('practiceTasks:', PRACTICE_INFO.practiceTasks); 
  }
}