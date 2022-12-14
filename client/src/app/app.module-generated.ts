/*
  This file is automatically generated. Any changes will be overwritten.
  Modify app.module.ts instead.
*/
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BodyModule } from '@radzen/angular/dist/body';
import { CardModule } from '@radzen/angular/dist/card';
import { ContentContainerModule } from '@radzen/angular/dist/content-container';
import { HeaderModule } from '@radzen/angular/dist/header';
import { SidebarToggleModule } from '@radzen/angular/dist/sidebar-toggle';
import { LabelModule } from '@radzen/angular/dist/label';
import { SidebarModule } from '@radzen/angular/dist/sidebar';
import { PanelMenuModule } from '@radzen/angular/dist/panelmenu';
import { FooterModule } from '@radzen/angular/dist/footer';
import { ContentModule } from '@radzen/angular/dist/content';
import { HeadingModule } from '@radzen/angular/dist/heading';
import { GridModule } from '@radzen/angular/dist/grid';
import { FormModule } from '@radzen/angular/dist/form';
import { ButtonModule } from '@radzen/angular/dist/button';
import { HtmlModule } from '@radzen/angular/dist/html';
import { SharedModule } from '@radzen/angular/dist/shared';
import { NotificationModule } from '@radzen/angular/dist/notification';
import { DialogModule } from '@radzen/angular/dist/dialog';

import { ConfigService, configServiceFactory } from './config.service';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { CacheInterceptor } from './cache.interceptor';
export { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AddQuestionnaireComponent } from './add-questionnaire/add-questionnaire.component';
import { EditQuestionnaireComponent } from './edit-questionnaire/edit-questionnaire.component';
import { PensionnaireComponent } from './pensionnaire/pensionnaire.component';
import { AddPensionnaireComponent } from './add-pensionnaire/add-pensionnaire.component';
import { EditPensionnaireComponent } from './edit-pensionnaire/edit-pensionnaire.component';
import { DemmarerQuestionnaireComponent } from './d??mmarer-questionnaire/d??mmarer-questionnaire.component';
import { AddReponseComponent } from './add-reponse/add-reponse.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';

import { PensionnairesDbService } from './pensionnaires-db.service';

export const PageDeclarations = [
  QuestionnaireComponent,
  AddQuestionnaireComponent,
  EditQuestionnaireComponent,
  PensionnaireComponent,
  AddPensionnaireComponent,
  EditPensionnaireComponent,
  DemmarerQuestionnaireComponent,
  AddReponseComponent,
];

export const LayoutDeclarations = [
  LoginLayoutComponent,
  MainLayoutComponent,
  ContentLayoutComponent,
];

export const AppDeclarations = [
  ...PageDeclarations,
  ...LayoutDeclarations,
  AppComponent
];

export const AppProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CacheInterceptor,
    multi: true
  },
  PensionnairesDbService,
  ConfigService,
  {
    provide: APP_INITIALIZER,
    useFactory: configServiceFactory,
    deps: [ConfigService],
    multi: true
  }
];

export const AppImports = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  BodyModule,
  CardModule,
  ContentContainerModule,
  HeaderModule,
  SidebarToggleModule,
  LabelModule,
  SidebarModule,
  PanelMenuModule,
  FooterModule,
  ContentModule,
  HeadingModule,
  GridModule,
  FormModule,
  ButtonModule,
  HtmlModule,
  SharedModule,
  NotificationModule,
  DialogModule,
  AppRoutes
];
