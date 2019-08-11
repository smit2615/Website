import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    new Project('Poetry RNN', 'A recurrent neural net capable of generating poetry.',
      '../../assets/tensorflow.png',
      'More info'),
    new Project('Unity Truck Loader', 'Training/planning tool used by Siskin Steel in Louisville, KY \
    to help their truck loaders complete their task.',
    '../../assets/unity.png',
    'More info'),
    new Project('Raspberry Pi Television Remote', 'NodeJS web API running on a raspberry pi that sends CEC commands \
    to a TV over an HDMI cable.',
    '../../assets/pi.png',
    'More info'),
    new Project('NativeScript Mobile App', 'Android and iOS application for maintaining character \
    sheets for the game DnD.',
    '../../assets/nativescript.svg',
    'More info'),
    new Project('Hopper Polling System', 'Angular site that provides a forum for voting on and communicating \
    new ideas within a company.',
    '../../assets/angular.png',
    'More info')
  ]

  constructor() { 
  }

  ngOnInit() {
  }

}
