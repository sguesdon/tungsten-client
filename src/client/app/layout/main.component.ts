// angular
import { Component } from '@angular/core';
// framework
import { BaseComponent } from '~/app/framework/core/core.module';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['main.component.scss']
})
export class MainComponent extends BaseComponent {
    opened: boolean = true;
  onActivate(event$: any, scrollContainer: any): void {
    scrollContainer.scrollTop = 0;
  }
  onMenuButtonClick() {
      this.opened = !this.opened;
  }
}
