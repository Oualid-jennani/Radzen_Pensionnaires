export interface Pensionnaire {
  id: number;
  nom: string;
  prenom: string;
  matricule: string;
  numero_identite: string;
  type_identite: number;
  date_naissance: string;
  date_entree: string;
  date_sortie: string;
}

export interface Questionnaire {
  id: number;
  code: string;
  libelle: string;
  description: string;
  active: boolean;
  date_creation: string;
  json: string;
}

export interface Referentiel {
  id: number;
  cat: string;
  code: string;
  libelle_fr: string;
  libelle_ar: string;
}

export interface Reponse {
  id: number;
  date_debut: string;
  date_fin: string;
  questionnare: number;
  pensionnaire: number;
  interviewer: number;
  json: string;
}

export interface User {
  id: number;
  user_name: string;
}
