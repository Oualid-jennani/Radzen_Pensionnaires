import { Component, Injector } from '@angular/core';
import { AddPensionnaireGenerated } from './add-pensionnaire-generated.component';

@Component({
  selector: 'page-add-pensionnaire',
  templateUrl: './add-pensionnaire.component.html'
})
export class AddPensionnaireComponent extends AddPensionnaireGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
