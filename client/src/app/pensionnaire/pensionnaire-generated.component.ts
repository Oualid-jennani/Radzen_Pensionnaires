/*
  This file is automatically generated. Any changes will be overwritten.
  Modify pensionnaire.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { GridComponent } from '@radzen/angular/dist/grid';

import { ConfigService } from '../config.service';
import { AddPensionnaireComponent } from '../add-pensionnaire/add-pensionnaire.component';
import { EditPensionnaireComponent } from '../edit-pensionnaire/edit-pensionnaire.component';

import { PensionnairesDbService } from '../pensionnaires-db.service';

export class PensionnaireGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('pageTitle') pageTitle: HeadingComponent;
  @ViewChild('grid0') grid0: GridComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  configService: ConfigService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  httpClient: HttpClient;

  locale: string;

  _location: Location;

  _subscription: Subscription;

  pensionnairesDb: PensionnairesDbService;
  parameters: any;
  getPensionnairesResult: any;
  getPensionnairesCount: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.configService = this.injector.get(ConfigService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.locale = this.injector.get(LOCALE_ID);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.httpClient = this.injector.get(HttpClient);

    this.pensionnairesDb = this.injector.get(PensionnairesDbService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }


  load() {
    this.grid0.load();
  }

  grid0LoadData(event: any) {
    this.pensionnairesDb.getPensionnaires(`${event.filter}`, event.top, event.skip, `${event.orderby}`, event.top != null && event.skip != null, null, null, null)
    .subscribe((result: any) => {
      this.getPensionnairesResult = result.value;

      this.getPensionnairesCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to load Pensionnaires` });
    });
  }

  grid0Delete(event: any) {
    this.pensionnairesDb.deletePensionnaire(event.id)
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "success", summary: `Success`, detail: `Pensionnaire deleted!` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to delete Pensionnaire` });
    });
  }

  grid0Add(event: any) {
    this.dialogService.open(AddPensionnaireComponent, { parameters: {}, title: 'Add Pensionnaire' });
  }

  grid0RowSelect(event: any) {
    this.dialogService.open(EditPensionnaireComponent, { parameters: {id: event.id}, title: 'Edit Pensionnaire' });
  }
}