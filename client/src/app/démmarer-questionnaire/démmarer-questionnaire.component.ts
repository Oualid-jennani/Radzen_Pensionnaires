import { Component, Injector } from '@angular/core';
import { DemmarerQuestionnaireGenerated } from './démmarer-questionnaire-generated.component';

@Component({
  selector: 'page-démmarer-questionnaire',
  templateUrl: './démmarer-questionnaire.component.html'
})
export class DemmarerQuestionnaireComponent extends DemmarerQuestionnaireGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
