import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';

import { ConfigService } from './config.service';
import { ODataClient } from './odata-client';
import * as models from './pensionnaires-db.model';

@Injectable()
export class PensionnairesDbService {
  odata: ODataClient;
  basePath: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.basePath = config.get('pensionnairesDb');
    this.odata = new ODataClient(this.http, this.basePath, { legacy: false, withCredentials: true });
  }

  getPensionnaires(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Pensionnaires`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createPensionnaire(expand: string | null, pensionnaire: models.Pensionnaire | null) : Observable<any> {
    return this.odata.post(`/Pensionnaires`, pensionnaire, { expand }, ['Referentiel']);
  }

  deletePensionnaire(id: number | null) : Observable<any> {
    return this.odata.delete(`/Pensionnaires(${id})`, item => !(item.id == id));
  }

  getPensionnaireByid(expand: string | null, id: number | null) : Observable<any> {
    return this.odata.getById(`/Pensionnaires(${id})`, { expand });
  }

  updatePensionnaire(expand: string | null, id: number | null, pensionnaire: models.Pensionnaire | null) : Observable<any> {
    return this.odata.patch(`/Pensionnaires(${id})`, pensionnaire, item => item.id == id, { expand }, ['Referentiel']);
  }

  getQuestionnaires(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Questionnaires`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createQuestionnaire(expand: string | null, questionnaire: models.Questionnaire | null) : Observable<any> {
    return this.odata.post(`/Questionnaires`, questionnaire, { expand }, []);
  }

  deleteQuestionnaire(id: number | null) : Observable<any> {
    return this.odata.delete(`/Questionnaires(${id})`, item => !(item.id == id));
  }

  getQuestionnaireByid(expand: string | null, id: number | null) : Observable<any> {
    return this.odata.getById(`/Questionnaires(${id})`, { expand });
  }

  updateQuestionnaire(expand: string | null, id: number | null, questionnaire: models.Questionnaire | null) : Observable<any> {
    return this.odata.patch(`/Questionnaires(${id})`, questionnaire, item => item.id == id, { expand }, []);
  }

  getReferentiels(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Referentiels`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createReferentiel(expand: string | null, referentiel: models.Referentiel | null) : Observable<any> {
    return this.odata.post(`/Referentiels`, referentiel, { expand }, []);
  }

  deleteReferentiel(id: number | null) : Observable<any> {
    return this.odata.delete(`/Referentiels(${id})`, item => !(item.id == id));
  }

  getReferentielByid(expand: string | null, id: number | null) : Observable<any> {
    return this.odata.getById(`/Referentiels(${id})`, { expand });
  }

  updateReferentiel(expand: string | null, id: number | null, referentiel: models.Referentiel | null) : Observable<any> {
    return this.odata.patch(`/Referentiels(${id})`, referentiel, item => item.id == id, { expand }, []);
  }

  getReponses(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Reponses`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createReponse(expand: string | null, reponse: models.Reponse | null) : Observable<any> {
    return this.odata.post(`/Reponses`, reponse, { expand }, ['Questionnaire', 'Pensionnaire1', 'User']);
  }

  deleteReponse(id: number | null) : Observable<any> {
    return this.odata.delete(`/Reponses(${id})`, item => !(item.id == id));
  }

  getReponseByid(expand: string | null, id: number | null) : Observable<any> {
    return this.odata.getById(`/Reponses(${id})`, { expand });
  }

  updateReponse(expand: string | null, id: number | null, reponse: models.Reponse | null) : Observable<any> {
    return this.odata.patch(`/Reponses(${id})`, reponse, item => item.id == id, { expand }, ['Questionnaire','Pensionnaire1','User']);
  }

  getUsers(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Users`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createUser(expand: string | null, user: models.User | null) : Observable<any> {
    return this.odata.post(`/Users`, user, { expand }, []);
  }

  deleteUser(id: number | null) : Observable<any> {
    return this.odata.delete(`/Users(${id})`, item => !(item.id == id));
  }

  getUserByid(expand: string | null, id: number | null) : Observable<any> {
    return this.odata.getById(`/Users(${id})`, { expand });
  }

  updateUser(expand: string | null, id: number | null, user: models.User | null) : Observable<any> {
    return this.odata.patch(`/Users(${id})`, user, item => item.id == id, { expand }, []);
  }
}
