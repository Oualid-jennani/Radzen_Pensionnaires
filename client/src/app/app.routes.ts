import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AddQuestionnaireComponent } from './add-questionnaire/add-questionnaire.component';
import { EditQuestionnaireComponent } from './edit-questionnaire/edit-questionnaire.component';
import { PensionnaireComponent } from './pensionnaire/pensionnaire.component';
import { AddPensionnaireComponent } from './add-pensionnaire/add-pensionnaire.component';
import { EditPensionnaireComponent } from './edit-pensionnaire/edit-pensionnaire.component';
import { DemmarerQuestionnaireComponent } from './démmarer-questionnaire/démmarer-questionnaire.component';
import { AddReponseComponent } from './add-reponse/add-reponse.component';

export const routes: Routes = [
  { path: '', redirectTo: '/questionnaire', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'questionnaire',
        component: QuestionnaireComponent
      },
      {
        path: 'add-questionnaire',
        component: AddQuestionnaireComponent
      },
      {
        path: 'edit-questionnaire/:id',
        component: EditQuestionnaireComponent
      },
      {
        path: 'pensionnaire',
        component: PensionnaireComponent
      },
      {
        path: 'add-pensionnaire',
        component: AddPensionnaireComponent
      },
      {
        path: 'edit-pensionnaire/:id',
        component: EditPensionnaireComponent
      },
    ]
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'démmarer-questionnaire',
        component: DemmarerQuestionnaireComponent
      },
      {
        path: 'add-reponse',
        component: AddReponseComponent
      },
    ]
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
