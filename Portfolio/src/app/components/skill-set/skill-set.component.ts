import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  imageUrls: string[] = [
    'assets/img/skills/angular.png',
    'assets/img/skills/typescript.png',
    'assets/img/skills/javascript.png',
    'assets/img/skills/html.png',
    'assets/img/skills/css.png',
    'assets/img/skills/api.png',
    'assets/img/skills/git.png',
    'assets/img/skills/django.png',
    'assets/img/skills/python.png',
    'assets/img/skills/sql.png',
    'assets/img/skills/postgresql.png',
    'assets/img/skills/firebase.png',
    'assets/img/skills/material_design.png',
    'assets/img/skills/scrum.png',
    'assets/img/skills/redis.png',
  ];

  titles: string[] = [
    'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Rest-Api', 'GIT', 'Django', 'Python', 'SQL', 'PostgreSQL', 'Firebase', 'Material design', 'Scrum', 'Redis'
  ]
}
