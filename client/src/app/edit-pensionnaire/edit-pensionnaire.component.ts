import { Component, Injector } from '@angular/core';
import { EditPensionnaireGenerated } from './edit-pensionnaire-generated.component';

@Component({
  selector: 'page-edit-pensionnaire',
  templateUrl: './edit-pensionnaire.component.html'
})
export class EditPensionnaireComponent extends EditPensionnaireGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
