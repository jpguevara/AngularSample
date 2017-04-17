import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'module-a',
  templateUrl: 'module-a.component.html',
  styleUrls: ['module-a.component.scss'],
})

export class ModuleAComponent {
  title = 'ModuleA';

  constructor(public route: ActivatedRoute) {
  }



}
