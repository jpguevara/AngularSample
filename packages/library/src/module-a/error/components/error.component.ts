import { Component } from '@angular/core';

@Component({
  selector: 'error-message',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})

export class ErrorComponent {
  constructor() { }

  // TODO: get the issue tracking number from the logging service
  get trackingNumber() {
    return '6S3DE582-1170130';
  }
}
