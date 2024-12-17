import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
interface ExperienceItem {
  name: string;
  src: string;
  index?: number;
}

@Component({
  selector: 'app-experience',
  imports: [NgOptimizedImage],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  private experienceItems: ExperienceItem[] = [
    {name: "MySQL", src: "/skills/mysql.png"},
    {name: "Javascript", src: "skills/js.png"},
    {name: "Typescript", src: "skills/ts.png"},
    {name: "Angular", src: "skills/angular.png"},
    {name: "HTML", src: "skills/html.png"},
    {name: "CSS", src: "skills/css.png"},
    {name: "Bootstrap", src: "skills/bootstrap.png"},
    {name: "Docker", src: "skills/docker.png"},
    {name: "GIT", src: "skills/git.png"},
  ];

  // needed to create an infinite-like scroll effect
  get getExperience(): ExperienceItem[] {
    return Array.from({ length: 10 }, (_, i: number) =>
      this.experienceItems.map((item: ExperienceItem, index: number) => ({
        ...item, index: i * this.experienceItems.length + index
      }))
    ).flat();
  }
}
