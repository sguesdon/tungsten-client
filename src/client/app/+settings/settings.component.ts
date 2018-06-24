// angular
import { Component } from '@angular/core';
// framework
import { BaseComponent } from '~/app/framework/core/core.module';
// app
import { routeAnimation } from '~/app/app.animations';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: [],
  animations: [routeAnimation]
})
export class SettingsComponent extends BaseComponent {
}
