import { Component, Injector } from '@angular/core';
import { ContentLayoutGenerated } from './content-layout-generated.component';

@Component({
  selector: 'page-content-layout',
  templateUrl: './content-layout.component.html'
})
export class ContentLayoutComponent extends ContentLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
