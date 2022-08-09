import { Component, Injector } from '@angular/core';
import { AddQuestionnaireGenerated } from './add-questionnaire-generated.component';

@Component({
  selector: 'page-add-questionnaire',
  templateUrl: './add-questionnaire.component.html'
})
export class AddQuestionnaireComponent extends AddQuestionnaireGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
