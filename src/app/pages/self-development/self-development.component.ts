import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Activity } from '../../models/activity.model';
import { ACTIVITIES } from '../../data/activities-data';

@Component({
  selector: 'app-self-development',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './self-development.component.html',
  styleUrls: ['./self-development.component.css']
})
export class SelfDevelopmentComponent implements OnInit {
  activities: Activity[] = ACTIVITIES;
  conferences: Activity[] = [];
  socialActivities: Activity[] = [];
  notes: Activity[] = [];

  constructor() {
    console.log('ACTIVITIES:', ACTIVITIES); // ← ДОБАВЬ
  }

  ngOnInit(): void {
    this.conferences = this.activities.filter(a => a.type === 'conference');
    this.socialActivities = this.activities.filter(a => a.type === 'social');
    this.notes = this.activities.filter(a => a.type === 'note');
    
    console.log('conferences:', this.conferences); // ← ДОБАВЬ
    console.log('socialActivities:', this.socialActivities); // ← ДОБАВЬ
    console.log('notes:', this.notes); // ← ДОБАВЬ
  }
}