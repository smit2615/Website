import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    new Project('Poetry RNN', 'A recurrent neural net built with Tensorflow that is capable of generating poetry.',
      '../../assets/tensorflow.png',
    'We trained the RNN on a data set of thousands of famous poems. Once given a prompt, the \
      network assigns values to the alphabet that rate the letters based on their likelihood of occurring next.',
    null),
    new Project('Unity Truck Loader', 'Training/planning tool used by Siskin Steel in Louisville, KY \
      to help their truck loaders complete their task.',
    '../../assets/unity.png',
    'This truck loading solution allows loaders to simulate their work in a 3D environment \
    while providing feedback for adherence to shipping regulations including axle weight, balance, and even load conflicts based upon the order of upcoming stops.',
    null),
    new Project('Raspberry Pi Television Remote', 'NodeJS web API running on a raspberry pi that sends CEC commands \
    to a TV over an HDMI cable.',
    '../../assets/pi.png',
    null,
    null),
    new Project('NativeScript Mobile App (In Progress)', 'Android and iOS application for maintaining character \
    sheets for the game DnD.',
    '../../assets/nativescript.svg',
    null,
    null),
    new Project('Hopper Polling System', 'Angular site that provides a forum for voting on and communicating \
    new ideas within a company.',
    '../../assets/angular.png',
    null,
    null)
  ]

  constructor() { 
  }

  ngOnInit() {
  }

}
