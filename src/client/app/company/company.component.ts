import { Component } from '@angular/core';

import { BaseComponent } from '~/app/framework/core/core.module';
import { routeAnimation } from '~/app/app.animations';

@Component({
  templateUrl: './company.component.html',
  styleUrls: [],
  animations: [routeAnimation]
})
export class CompanyComponent extends BaseComponent {
}
