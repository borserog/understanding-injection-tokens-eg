import { Component, VERSION, Inject } from '@angular/core';
import { EnvironmentConfig, ENV_CONFIG_TOKEN, APP_ENV_CONFIG } from './config';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  construtor() {}
}
