import { Component, Injector } from '@angular/core';
import { PensionnaireGenerated } from './pensionnaire-generated.component';

@Component({
  selector: 'page-pensionnaire',
  templateUrl: './pensionnaire.component.html'
})
export class PensionnaireComponent extends PensionnaireGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
