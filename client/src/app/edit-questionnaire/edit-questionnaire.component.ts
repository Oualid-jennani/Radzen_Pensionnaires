import { Component, Injector } from '@angular/core';
import { EditQuestionnaireGenerated } from './edit-questionnaire-generated.component';

@Component({
  selector: 'page-edit-questionnaire',
  templateUrl: './edit-questionnaire.component.html'
})
export class EditQuestionnaireComponent extends EditQuestionnaireGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
