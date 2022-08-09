import { Component, Injector } from '@angular/core';
import { QuestionnaireGenerated } from './questionnaire-generated.component';

@Component({
  selector: 'page-questionnaire',
  templateUrl: './questionnaire.component.html'
})
export class QuestionnaireComponent extends QuestionnaireGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
