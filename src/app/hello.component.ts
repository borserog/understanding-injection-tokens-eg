import { Component, Inject, Input } from '@angular/core';
import { APP_ENV_CONFIG, EnvironmentConfig, ENV_CONFIG_TOKEN } from './config';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  providers: [
    {
      provide: ENV_CONFIG_TOKEN,
      useValue: APP_ENV_CONFIG
    }
  ]
})
export class HelloComponent  {
  @Input() name: string;

  constructor(
    @Inject(ENV_CONFIG_TOKEN) private config: EnvironmentConfig
  ) { }

  ngOnInit() {
    console.log(this.config);
  }  
}
