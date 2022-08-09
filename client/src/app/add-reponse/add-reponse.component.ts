import { Component, Injector } from '@angular/core';
import { AddReponseGenerated } from './add-reponse-generated.component';


import { Model, SurveyNG, StylesManager } from "survey-angular";

StylesManager.applyTheme("modern");

const surveyJson = {
  "logoPosition": "right",
  "completedHtml": "<h3>Thank you for your feedback.</h3><h5>Your thoughts and ideas will help us to create a great product!</h5>",
  "completedHtmlOnCondition": [
   {
    "expression": "{nps_score} > 8",
    "html": "<h3>Thank you for your feedback.</h3><h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>"
   },
   {
    "expression": "{nps_score} < 7",
    "html": "<h3>Thank you for your feedback.</h3><h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br />"
   }
  ],
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "text",
      "name": "nps_score",
      "title": "Nom , prénom :"
     },
     {
      "type": "text",
      "name": "question15",
      "title": "Numéro de dossier  :  "
     },
     {
      "type": "boolean",
      "name": "question16",
      "title": "Sexe : ",
      "labelTrue": "Féminin",
      "labelFalse": "Masculin "
     },
     {
      "type": "text",
      "name": "question17",
      "title": "Date de naissance : ",
      "inputType": "date"
     }
    ],
    "title": "Informations sur la personne ",
    "description": "Les questions suivantes portent sur la personne Admise, elles doivent être remplies avant la rencontre avec la personne Admise à l'aide du dossier physique"
   },
   {
    "name": "page2",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question1",
      "title": "Services professionnels :",
      "choices": [
       {
        "value": "item1",
        "text": "Patient"
       },
       {
        "value": "item2",
        "text": "Admis  "
       }
      ]
     },
     {
      "type": "text",
      "name": "question2",
      "title": "Nom de l'intervieweur : "
     },
     {
      "type": "text",
      "name": "question3"
     },
     {
      "type": "text",
      "name": "question5",
      "title": "Date de l'interview : ",
      "inputType": "date"
     },
     {
      "type": "text",
      "name": "question4",
      "title": "Heure du début de l'interview : ",
      "inputType": "time"
     }
    ],
    "title": "Informations sur l'interview ",
    "description": "Les questions suivantes portent sur l'interview, elles doivent être remplies avant la rencontre avec la personne Admise"
   },
   {
    "name": "page3",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question6",
      "title": "Est-ce que vous savez lire ?",
      "choices": [
       {
        "value": "item",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question12",
      "title": "Est-ce que vous savez écrire ?",
      "choices": [
       {
        "value": "item",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question13",
      "title": "Est-ce que vous savez compter ?",
      "choices": [
       {
        "value": "item",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question14",
      "title": "L'année précédant votre arrivée en Hospitalisation, étiez-vous encore aux études ?",
      "choices": [
       {
        "value": "item",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "matrixdynamic",
      "name": "question7",
      "title": "Quel est votre dernier niveau scolaire atteint ?",
      "columns": [
       {
        "name": "Column 1",
        "title": "Niveau scolaire :",
        "cellType": "dropdown",
        "choices": [
         {
          "value": "item1",
          "text": "Primaire"
         },
         {
          "value": "item2",
          "text": "Secondaire"
         },
         {
          "value": "item3",
          "text": "Formation professionnelle"
         },
         {
          "value": "item4",
          "text": "Baccalauréat"
         },
         {
          "value": "item5",
          "text": "Université"
         },
         {
          "value": "item6",
          "text": "Refus de répondre"
         }
        ],
        "storeOthersAsComment": true
       },
       {
        "name": "Column 2",
        "title": "Quel certificats et diplômes avez-vous obtenu ?",
        "cellType": "text",
        "visibleIf": "{row.Column 1} = 'item1' or {row.Column 1} = 'item2' or {question7[0].Column 1} = 'item3' or {question7[0].Column 1} = 'item4' or {question7[0].Column 1} = 'item5'"
       }
      ],
      "choices": [
       {
        "value": "item1",
        "text": "Primaire"
       },
       {
        "value": "item2",
        "text": "Secondaire"
       },
       {
        "value": "item3",
        "text": "Formation professionnelle"
       },
       {
        "value": "item4",
        "text": "Baccalauréat"
       },
       {
        "value": "item5",
        "text": "Université"
       },
       {
        "value": "item6",
        "text": "Refus de répondre"
       }
      ],
      "allowAddRows": false,
      "allowRemoveRows": false,
      "rowCount": 1
     },
     {
      "type": "matrixdynamic",
      "name": "question8",
      "title": "Avez-vous déjà décroché de l'école ?",
      "columns": [
       {
        "name": "Column 1",
        "cellType": "dropdown",
        "choices": [
         {
          "value": 1,
          "text": "Oui"
         },
         {
          "value": 2,
          "text": "Non"
         },
         {
          "value": 3,
          "text": "Ne s'applique pas"
         },
         {
          "value": 4,
          "text": "Refus de répondre"
         }
        ],
        "storeOthersAsComment": true
       },
       {
        "name": "Column 2",
        "title": "pourquoi ?",
        "visibleIf": "{question8[0].Column 1} = 1"
       }
      ],
      "choices": [
       1,
       2,
       3,
       4,
       5
      ],
      "cellType": "comment",
      "allowAddRows": false,
      "allowRemoveRows": false,
      "rowCount": 1
     },
     {
      "type": "text",
      "name": "question9",
      "title": "À quel âge avez-vous décroché ? ",
      "inputType": "number"
     },
     {
      "type": "radiogroup",
      "name": "question10",
      "title": "Suite à ce dernier décrochage, avez-vous suivi des cours ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question18",
      "title": "Vous considérez-vous apte au travail ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "comment",
      "name": "question19",
      "title": "Quel type d'emploi avez-vous le plus souvent occupé ?"
     },
     {
      "type": "dropdown",
      "name": "question20",
      "title": "Depuis que vous avez quitté l'école, de quelle façon avez-vous travaillé ?",
      "choices": [
       {
        "value": "item1",
        "text": "Continuellement (100 %)"
       },
       {
        "value": "item2",
        "text": "Régulièrement (75 à 100 %)"
       },
       {
        "value": "item3",
        "text": "Plutôt régulièrement (50 à 75 %)"
       },
       {
        "value": "item4",
        "text": "Occasionnellement (25 à 50 %)"
       },
       {
        "value": "item5",
        "text": "Peu travaillé (0 à 25 %)"
       },
       {
        "value": "item6",
        "text": "Jamais travaillé (0 %)"
       },
       {
        "value": "item7",
        "text": "Ne sait pas"
       },
       {
        "value": "item8",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "dropdown",
      "name": "question21",
      "title": "Comment expliquez-vous que vous n'ayez pas travaillé de façon continuelle (100 % du temps) depuis que vous êtes sur le marché du travail ?",
      "choices": [
       {
        "value": "item1",
        "text": "Manque de formation"
       },
       {
        "value": "item2",
        "text": "Aucun emploi disponible"
       },
       {
        "value": "item3",
        "text": "Manque d'intérêt "
       },
       {
        "value": "item4",
        "text": "Problème avec la justice"
       },
       {
        "value": "item5",
        "text": "Manque d'expérience"
       },
       {
        "value": "item6",
        "text": "Retour à l'école"
       },
       {
        "value": "item7",
        "text": "Problèmes de santé"
       },
       {
        "value": "item8",
        "text": "Problèmes de consommation"
       },
       {
        "value": "item9",
        "text": "Fait des études"
       },
       {
        "value": "item10",
        "text": "Autre"
       },
       {
        "value": "item11",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item12",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "dropdown",
      "name": "question22",
      "title": "Quelle était, de façon habituelle, votre principale source de revenu pendant la période où vous étiez disponible pour un emploi ?",
      "choices": [
       {
        "value": "item1",
        "text": "Travail rémunéré"
       },
       {
        "value": "item2",
        "text": "Retraite"
       },
       {
        "value": "item3",
        "text": "Travail illicite (vol, recel...)"
       },
       {
        "value": "item4",
        "text": "Aucun revenu"
       },
       {
        "value": "item5",
        "text": "Assurance-chômage"
       },
       {
        "value": "item6",
        "text": "Travail au noir"
       },
       {
        "value": "item7",
        "text": "Aide sociale"
       },
       {
        "value": "item8",
        "text": "Ne sait pas"
       },
       {
        "value": "item9",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item10",
        "text": "Refus de répondre"
       }
      ],
      "hasOther": true,
      "otherText": "Autre "
     },
     {
      "type": "radiogroup",
      "name": "question11",
      "title": "De façon générale, quel était le niveau de satisfaction des gens qui vous ont employédurant cette période ? ",
      "choices": [
       {
        "value": "item1",
        "text": "Très satisfait"
       },
       {
        "value": "item2",
        "text": "Satisfait"
       },
       {
        "value": "item3",
        "text": "Peu satisfait"
       },
       {
        "value": "item4",
        "text": "Insatisfait"
       },
       {
        "value": "item5",
        "text": "Très insatisfait"
       },
       {
        "value": "item6",
        "text": "Ne sait pas"
       },
       {
        "value": "item7",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item8",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "text",
      "name": "question24"
     },
     {
      "type": "text",
      "name": "question25"
     },
     {
      "type": "text",
      "name": "question26"
     },
     {
      "type": "text",
      "name": "question27"
     },
     {
      "type": "text",
      "name": "question28"
     },
     {
      "type": "text",
      "name": "question29"
     },
     {
      "type": "text",
      "name": "question30"
     },
     {
      "type": "text",
      "name": "question31"
     },
     {
      "type": "text",
      "name": "question32"
     }
    ],
    "title": " Scolarité, formation et travail",
    "description": "La première partie de ce questionnaire consiste à connaître votre cheminement scolaire ainsi que votre expérience sur le marché du travail."
   },
   {
    "name": "page4",
    "elements": [
     {
      "type": "dropdown",
      "name": "question23",
      "title": "De façon générale, dans la période de votre adolescence, entre 10 et 18 ans, viviez-vous dans une famille : ",
      "choices": [
       {
        "value": "item1",
        "text": "Avec deux parents"
       },
       {
        "value": "item2",
        "text": "Avec votre mère seulement"
       },
       {
        "value": "item3",
        "text": "Avec votre père seulement"
       },
       {
        "value": "item4",
        "text": "Aucun parent"
       },
       {
        "value": "item5",
        "text": "Refus de répondre"
       }
      ],
      "hasOther": true,
      "otherText": "Autre"
     },
     {
      "type": "dropdown",
      "name": "question34",
      "title": "Quel était, dans la période de votre adolescence, le niveau de satisfaction de votre relation avec votre père ?",
      "choices": [
       {
        "value": "item1",
        "text": "Très satisfaisant"
       },
       {
        "value": "item2",
        "text": "Satisfaisant"
       },
       {
        "value": "item3",
        "text": "Peu satisfaisant"
       },
       {
        "value": "item4",
        "text": "Insatisfaisant"
       },
       {
        "value": "item5",
        "text": "Très insatisfaisant"
       },
       {
        "value": "item6",
        "text": "Ne sait pas"
       },
       {
        "value": "item7",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item8",
        "text": "Refus de répondre"
       }
      ],
      "otherText": "Autre"
     },
     {
      "type": "dropdown",
      "name": "question33",
      "title": "Quel était, dans la période de votre adolescence, le niveau de satisfaction de votre relation \navec votre mère ?\n",
      "choices": [
       {
        "value": "item1",
        "text": "Très satisfaisant"
       },
       {
        "value": "item2",
        "text": "Satisfaisant"
       },
       {
        "value": "item3",
        "text": "Peu satisfaisant"
       },
       {
        "value": "item4",
        "text": "Insatisfaisant"
       },
       {
        "value": "item5",
        "text": "Très insatisfaisant"
       },
       {
        "value": "item6",
        "text": "Ne sait pas"
       },
       {
        "value": "item7",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item8",
        "text": "Refus de répondre"
       }
      ],
      "otherText": "Autre"
     },
     {
      "type": "radiogroup",
      "name": "question35",
      "title": "Pendant votre adolescence, dans votre famille, à quelle fréquence avez-vous déjà été témoin d'actes de violence produits entre Vos parents ?",
      "choices": [
       {
        "value": "item1",
        "text": "Souvent"
       },
       {
        "value": "item2",
        "text": "Occasionnellement"
       },
       {
        "value": "item3",
        "text": "Rarement"
       },
       {
        "value": "item4",
        "text": "Jamais"
       },
       {
        "value": "item5",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item6",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question36",
      "title": "Pendant votre adolescence, dans votre famille, à quelle fréquence avez-vous déjà été témoin d'actes de violence produits entre : Parent et enfant ?",
      "choices": [
       {
        "value": "item1",
        "text": "Souvent"
       },
       {
        "value": "item2",
        "text": "Occasionnellement"
       },
       {
        "value": "item3",
        "text": "Rarement"
       },
       {
        "value": "item4",
        "text": "Jamais"
       },
       {
        "value": "item5",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item6",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question38",
      "title": "Pendant votre adolescence, dans votre famille, à quelle fréquence avez-vous déjà été victime d'actes de violence produits par : Vos parents ?",
      "choices": [
       {
        "value": "item1",
        "text": "Souvent"
       },
       {
        "value": "item2",
        "text": "Occasionnellement"
       },
       {
        "value": "item3",
        "text": "Rarement"
       },
       {
        "value": "item4",
        "text": "Jamais"
       },
       {
        "value": "item5",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item6",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question39",
      "title": "Pendant votre adolescence, dans votre famille, à quelle fréquence avez-vous déjà été victime d'actes de violence produits par : Vos frères/sœurs ?",
      "choices": [
       {
        "value": "item1",
        "text": "Souvent"
       },
       {
        "value": "item2",
        "text": "Occasionnellement"
       },
       {
        "value": "item3",
        "text": "Rarement"
       },
       {
        "value": "item4",
        "text": "Jamais"
       },
       {
        "value": "item5",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item6",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question40",
      "title": "Pendant votre adolescence, dans votre famille, à quelle fréquence avez-vous déjà fait des actes de violence envers : Votre père (biologique, tuteur légal, père adoptif, beau-père) ?",
      "choices": [
       {
        "value": "item1",
        "text": "Souvent"
       },
       {
        "value": "item2",
        "text": "Occasionnellement"
       },
       {
        "value": "item3",
        "text": "Rarement"
       },
       {
        "value": "item4",
        "text": "Jamais"
       },
       {
        "value": "item5",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item6",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question41",
      "title": "Pendant votre adolescence, dans votre famille, à quelle fréquence avez-vous déjà fait des actes de violence envers : Votre mère (biologique, tutrice légale, mère adoptive, belle-mère) ?",
      "choices": [
       {
        "value": "item1",
        "text": "Souvent"
       },
       {
        "value": "item2",
        "text": "Occasionnellement"
       },
       {
        "value": "item3",
        "text": "Rarement"
       },
       {
        "value": "item4",
        "text": "Jamais"
       },
       {
        "value": "item5",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item6",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question42",
      "title": "Pendant votre adolescence, dans votre famille, à quelle fréquence avez-vous déjà fait des actes de violence envers : Vos frères/sœurs ?",
      "choices": [
       {
        "value": "item1",
        "text": "Souvent"
       },
       {
        "value": "item2",
        "text": "Occasionnellement"
       },
       {
        "value": "item3",
        "text": "Rarement"
       },
       {
        "value": "item4",
        "text": "Jamais"
       },
       {
        "value": "item5",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item6",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question37",
      "title": "Quelle était la principale source de revenu de votre famille, pendant votre adolescence ?",
      "choices": [
       {
        "value": "item1",
        "text": "Travail rémunéré"
       },
       {
        "value": "item2",
        "text": "Retraite"
       },
       {
        "value": "item3",
        "text": "Travail illicite (vol, recel...)"
       },
       {
        "value": "item4",
        "text": "Aucun revenu"
       },
       {
        "value": "item5",
        "text": "Assurance-chômage"
       },
       {
        "value": "item6",
        "text": "Travail au noir"
       },
       {
        "value": "item7",
        "text": "Aide sociale"
       },
       {
        "value": "item8",
        "text": "Ne sait pas"
       },
       {
        "value": "item9",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item10",
        "text": "Refus de répondre"
       }
      ],
      "hasOther": true,
      "otherText": "Autre"
     },
     {
      "type": "matrixdynamic",
      "name": "question44",
      "title": "Durant la période de votre adolescence, avez-vous déjà fait des fugues ?",
      "enableIf": "{question44[0].Column 1} = 1",
      "columns": [
       {
        "name": "Column 1",
        "cellType": "dropdown",
        "choices": [
         {
          "value": 1,
          "text": "Oui"
         },
         {
          "value": 2,
          "text": "Non"
         },
         {
          "value": 3,
          "text": "Refus de répondre"
         }
        ],
        "storeOthersAsComment": true
       },
       {
        "name": "Column 2",
        "title": "à combien de reprise(s) et pourquoi ? ",
        "cellType": "comment"
       }
      ],
      "choices": [
       1,
       2,
       3,
       4,
       5
      ],
      "allowAddRows": false,
      "allowRemoveRows": false,
      "rowCount": 1
     },
     {
      "type": "matrixdynamic",
      "name": "question43",
      "title": "Durant la période de votre adolescence, avez-vous vécu certains moments à l'extérieur de vos parents ?",
      "columns": [
       {
        "name": "Column 1",
        "cellType": "dropdown",
        "choices": [
         {
          "value": 1,
          "text": "Oui"
         },
         {
          "value": 2,
          "text": "Non"
         },
         {
          "value": 3,
          "text": "Ne s'applique pas"
         },
         {
          "value": 4,
          "text": "Refus de répondre"
         }
        ],
        "storeOthersAsComment": true
       },
       {
        "name": "Column 2",
        "title": "avez-vous vécu ces moments :",
        "cellType": "dropdown",
        "colCount": 0,
        "visibleIf": "{question43[0].Column 1} = 1",
        "choices": [
         {
          "value": 1,
          "text": "Chez un autre membre de votre famille "
         },
         {
          "value": 2,
          "text": "En famille d'accueil "
         },
         {
          "value": 3,
          "text": "En foyer de groupe "
         },
         {
          "value": 4,
          "text": "En centre d'accueil "
         },
         {
          "value": 5,
          "text": "En appartement "
         },
         {
          "value": 6,
          "text": "Refus de répondre "
         }
        ],
        "hasOther": true,
        "otherText": "Autre",
        "storeOthersAsComment": true
       }
      ],
      "choices": [
       1,
       2,
       3,
       4,
       5
      ],
      "allowAddRows": false,
      "allowRemoveRows": false,
      "rowCount": 1
     },
     {
      "type": "comment",
      "name": "question45",
      "title": "Au total, combien de fois diriez-vous que vous avez vécu des moments à l'extérieurde chez vos parents ? "
     },
     {
      "type": "comment",
      "name": "question46",
      "title": "Pendant combien de mois avez-vous vécu à l'extérieur de chez-vous ?"
     },
     {
      "type": "matrixdynamic",
      "name": "question47",
      "title": "Dans votre famille immédiate (père, mère, frère, sœur, enfant) ",
      "columns": [
       {
        "name": "Column 1",
        "title": "Est-ce qu'il y a quelqu'un qui a un dossier judiciaire ?",
        "cellType": "dropdown",
        "choices": [
         {
          "value": 1,
          "text": "Oui"
         },
         {
          "value": 2,
          "text": "Non"
         },
         {
          "value": 3,
          "text": "Ne s'applique pas"
         },
         {
          "value": 4,
          "text": "Refus de répondre"
         }
        ],
        "storeOthersAsComment": true
       },
       {
        "name": "Column 2",
        "title": "qui ?",
        "cellType": "comment",
        "visibleIf": "{row.Column 1} = 1"
       }
      ],
      "choices": [
       1,
       2,
       3,
       4,
       5
      ],
      "allowAddRows": false,
      "allowRemoveRows": false,
      "rowCount": 1
     }
    ],
    "title": "Relations avec la famille ",
    "description": "Avant mariage"
   },
   {
    "name": "page5",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question48",
      "title": "Au moment de votre arrivée en Hospitalisation, quel était votre état civil ?",
      "choices": [
       {
        "value": "item1",
        "text": "Marié(e)"
       },
       {
        "value": "item2",
        "text": "Célibataire"
       },
       {
        "value": "item3",
        "text": "Conjoint(e) de fait"
       },
       {
        "value": "item4",
        "text": "Divorcé(e) ou séparé(e)"
       },
       {
        "value": "item5",
        "text": "Veuf(ve)"
       },
       {
        "value": "item6",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question49",
      "title": "Au moment de votre arrivée en Hospitalisation, aviez-vous une relation conjugale?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "dropdown",
      "name": "question50",
      "title": "Quel était votre niveau de satisfaction concernant cette relation ?",
      "choices": [
       {
        "value": "item1",
        "text": "Très satisfaisant1"
       },
       {
        "value": "item2",
        "text": "Satisfaisant"
       },
       {
        "value": "item3",
        "text": "Peu satisfaisant"
       },
       {
        "value": "item4",
        "text": "Insatisfaisant"
       },
       {
        "value": "item5",
        "text": "Très insatisfaisant"
       },
       {
        "value": "item6",
        "text": "Ne sait pas"
       },
       {
        "value": "item7",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item8",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question51",
      "title": "Actuellement, poursuivez-vous toujours cette relation ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "matrixdynamic",
      "name": "question52",
      "title": ". Dans le cadre d'une relation conjugale ou amoureuse, avez-vous déjà cohabité avec un(e) conjoint(e) ?",
      "columns": [
       {
        "name": "Column 1",
        "cellType": "dropdown",
        "choices": [
         {
          "value": 1,
          "text": "Oui"
         },
         {
          "value": 2,
          "text": "Non"
         },
         {
          "value": 3,
          "text": "Ne s'applique pas"
         },
         {
          "value": 4,
          "text": "Refus de répondre"
         }
        ],
        "storeOthersAsComment": true
       },
       {
        "name": "Column 2",
        "title": "pendant combien de mois a duré la plus longue cohabitation ? ",
        "cellType": "comment",
        "visibleIf": "{question52[0].Column 1} = 1"
       }
      ],
      "choices": [
       1,
       2,
       3,
       4,
       5
      ],
      "allowAddRows": false,
      "allowRemoveRows": false,
      "rowCount": 1
     },
     {
      "type": "matrixdynamic",
      "name": "question53",
      "title": "Vous est-il déjà arrivé de faire preuve de violence verbale ou physique envers un(e) conjoint(e) ?",
      "columns": [
       {
        "name": "Column 1",
        "cellType": "dropdown",
        "choices": [
         {
          "value": 1,
          "text": "Oui"
         },
         {
          "value": 2,
          "text": "Non"
         },
         {
          "value": 3,
          "text": "Ne s'applique pas"
         },
         {
          "value": 4,
          "text": "Refus de répondre9"
         }
        ],
        "storeOthersAsComment": true
       },
       {
        "name": "Column 2",
        "title": "Quel type ?",
        "cellType": "dropdown",
        "visibleIf": "{row.Column 1} = 1",
        "choices": [
         {
          "value": 1,
          "text": "Physique"
         },
         {
          "value": 2,
          "text": "Physique et verbale"
         },
         {
          "value": 3,
          "text": "Verbale"
         },
         {
          "value": 4,
          "text": "Refus de répondre"
         }
        ],
        "storeOthersAsComment": true
       }
      ],
      "choices": [
       1,
       2,
       3,
       4,
       5
      ],
      "rowCount": 1
     },
     {
      "type": "matrixdynamic",
      "name": "question54",
      "title": "Votre conjoint(e) a t-il(elle) déjà fait preuve de violence envers vous ?",
      "columns": [
       {
        "name": "Column 1",
        "cellType": "dropdown",
        "choices": [
         {
          "value": 1,
          "text": "Oui"
         },
         {
          "value": 2,
          "text": "Non"
         },
         {
          "value": 3,
          "text": "Ne s'applique pas"
         },
         {
          "value": 4,
          "text": "Refus de répondre9"
         }
        ],
        "storeOthersAsComment": true
       },
       {
        "name": "Column 2",
        "title": "Quel type ?",
        "cellType": "dropdown",
        "visibleIf": "{row.Column 1} = 1",
        "choices": [
         {
          "value": 1,
          "text": "Physique"
         },
         {
          "value": 2,
          "text": "Physique et verbale"
         },
         {
          "value": 3,
          "text": "Verbale"
         },
         {
          "value": 4,
          "text": "Refus de répondre"
         }
        ],
        "storeOthersAsComment": true
       }
      ],
      "choices": [
       1,
       2,
       3,
       4,
       5
      ],
      "rowCount": 1
     },
     {
      "type": "radiogroup",
      "name": "question55",
      "title": "Avez-vous des enfants ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "comment",
      "name": "question56",
      "title": "Combien en avez-vous ? "
     },
     {
      "type": "comment",
      "name": "question57",
      "title": "Combien en avez-vous à votre charge ? "
     },
     {
      "type": "matrixdynamic",
      "name": "question58",
      "title": "Vous est-il déjà arrivé de faire preuve de violence verbale ou physique envers votre(vos) enfant(s) ?",
      "columns": [
       {
        "name": "Column 1",
        "cellType": "dropdown",
        "choices": [
         {
          "value": 1,
          "text": "Oui"
         },
         {
          "value": 2,
          "text": "Non"
         },
         {
          "value": 3,
          "text": "Ne s'applique pas"
         },
         {
          "value": 4,
          "text": "Refus de répondre9"
         }
        ],
        "storeOthersAsComment": true
       },
       {
        "name": "Column 2",
        "title": "Quel type ?",
        "cellType": "dropdown",
        "visibleIf": "{row.Column 1} = 1",
        "choices": [
         {
          "value": 1,
          "text": "Physique"
         },
         {
          "value": 2,
          "text": "Physique et verbale"
         },
         {
          "value": 3,
          "text": "Verbale"
         },
         {
          "value": 4,
          "text": "Refus de répondre"
         }
        ],
        "storeOthersAsComment": true
       }
      ],
      "choices": [
       1,
       2,
       3,
       4,
       5
      ],
      "rowCount": 1
     }
    ],
    "title": "Vie conjugale et familiale ",
    "description": "Après mariage"
   },
   {
    "name": "page6",
    "elements": [
     {
      "type": "matrixdynamic",
      "name": "question59",
      "title": "Dans quel pays êtes-vous né ?",
      "columns": [
       {
        "name": "Column 1",
        "cellType": "dropdown",
        "choices": [
         {
          "value": 1,
          "text": "Maroc"
         },
         {
          "value": 2,
          "text": "Refus de répondre"
         }
        ],
        "hasOther": true,
        "otherText": "Autre (describe)",
        "storeOthersAsComment": true
       },
       {
        "name": "Column 2",
        "title": "En quelle année êtes-vous arrivé au Maroc ?",
        "cellType": "text",
        "visibleIf": "{question59[0].Column 1} = 'other'"
       }
      ],
      "choices": [
       1,
       2,
       3,
       4,
       5
      ],
      "allowAddRows": false,
      "allowRemoveRows": false,
      "rowCount": 1
     },
     {
      "type": "matrixdynamic",
      "name": "question61",
      "title": "Avez-vous la citoyenneté marocaine ?",
      "columns": [
       {
        "name": "Column 1",
        "title": "a.",
        "cellType": "dropdown",
        "choices": [
         {
          "value": 1,
          "text": "Oui"
         },
         {
          "value": 2,
          "text": "Non"
         },
         {
          "value": 3,
          "text": "Ne s'applique pas"
         },
         {
          "value": 4,
          "text": "Refus de répondre"
         }
        ],
        "hasOther": true,
        "otherText": "Autre (describe)",
        "storeOthersAsComment": true
       },
       {
        "name": "Column 2",
        "title": "Est-ce par :",
        "cellType": "dropdown",
        "visibleIf": "{question61[0].Column 1} = 'other'",
        "visible": false,
        "choices": [
         {
          "value": 1,
          "text": "Naissance"
         },
         {
          "value": 2,
          "text": "Naturalisation"
         },
         {
          "value": 3,
          "text": "Refus de répondre"
         }
        ],
        "storeOthersAsComment": true
       },
       {
        "name": "Column 3",
        "title": "b.Est-ce par :",
        "cellType": "dropdown",
        "visibleIf": "{question61[0].Column 1} = 1",
        "choices": [
         {
          "value": 1,
          "text": "Naissance"
         },
         {
          "value": 2,
          "text": "Naturalisation"
         },
         {
          "value": 3,
          "text": "Refus de répondre"
         }
        ],
        "storeOthersAsComment": true
       },
       {
        "name": "Column 4",
        "title": "quel est votre statut d'immigrant ?",
        "cellType": "dropdown",
        "enableIf": "{question61[0].Column 1} = 2",
        "choices": [
         {
          "value": 1,
          "text": "Revendication du statut de réfugié"
         },
         {
          "value": 2,
          "text": "Réfugié au sens de la convention de Genève"
         },
         {
          "value": 3,
          "text": "Résident permanent (immigrant reçu)"
         }
        ],
        "hasOther": true,
        "otherText": "Autre ",
        "storeOthersAsComment": true
       }
      ],
      "choices": [
       1,
       2,
       3,
       4,
       5
      ],
      "allowAddRows": false,
      "allowRemoveRows": false,
      "rowCount": 1
     },
     {
      "type": "radiogroup",
      "name": "question60",
      "title": "Quelle est votre langue maternelle (première langue apprise et encore comprise) ?  ",
      "choices": [
       {
        "value": "item1",
        "text": "Arabe"
       },
       {
        "value": "item2",
        "text": "Français"
       },
       {
        "value": "item3",
        "text": "Refus de répondre"
       }
      ],
      "hasOther": true,
      "otherText": "Autre"
     }
    ],
    "title": "Citoyenneté"
   },
   {
    "name": "page7",
    "elements": [
     {
      "type": "matrixdynamic",
      "name": "question62",
      "title": "Avez-vous un domicile fixe ?",
      "columns": [
       {
        "name": "Column 1",
        "cellType": "dropdown",
        "choices": [
         {
          "value": 1,
          "text": "Oui"
         },
         {
          "value": 2,
          "text": "Non"
         },
         {
          "value": 3,
          "text": "Ne s'applique pas"
         },
         {
          "value": 4,
          "text": "Refus de répondre"
         }
        ],
        "storeOthersAsComment": true
       },
       {
        "name": "Column 2",
        "title": "depuis combien de mois habitez-vous à cet endroit ?",
        "cellType": "comment"
       }
      ],
      "choices": [
       1,
       2,
       3,
       4,
       5
      ],
      "allowAddRows": false,
      "allowRemoveRows": false,
      "rowCount": 1
     },
     {
      "type": "radiogroup",
      "name": "question63",
      "title": "Vous considérez-vous comme un sans-abri ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question64",
      "title": "Aimeriez-vous vous en sortir seul ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question65",
      "title": "Aimeriez-vous avoir de l'aide ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question66",
      "title": "Connaissez-vous les ressources disponibles concernant les possibilités d´hébergement ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     }
    ],
    "title": "Logement"
   },
   {
    "name": "page8",
    "elements": [
     {
      "type": "matrixdynamic",
      "name": "question67",
      "title": "Avant votre arrivée en Hospitalisation, aviez-vous des ami(e)s ?",
      "columns": [
       {
        "name": "Column 1",
        "cellType": "dropdown",
        "choices": [
         {
          "value": 1,
          "text": "Oui"
         },
         {
          "value": 2,
          "text": "Non"
         },
         {
          "value": 3,
          "text": "Ne s'applique pas"
         },
         {
          "value": 4,
          "text": "Refus de répondre"
         }
        ],
        "storeOthersAsComment": true
       },
       {
        "name": "Column 2",
        "title": "pourquoi ? ",
        "cellType": "comment"
       }
      ],
      "choices": [
       1,
       2,
       3,
       4,
       5
      ],
      "allowAddRows": false,
      "allowRemoveRows": false,
      "rowCount": 1
     },
     {
      "type": "radiogroup",
      "name": "question68",
      "title": "Certains de vos amis vous influencent-ils positivement ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question69",
      "title": "Certains de vos amis vous influencent-ils négativement ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question70",
      "title": "Vos amis font partie de gang, de réseau organisé ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question71",
      "title": "En général, votre conjoint(e) trouve vos amis corrects ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question72",
      "title": "Certains de vos amis ont eu affaire à la justice ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     }
    ],
    "title": "Relations sociales"
   },
   {
    "name": "page9",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question73",
      "title": "Aviez-vous déjà commis des délits avant l'âge de 18 ans entraînant une condamnationde la part du juge des mineurs ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question74",
      "title": "Aviez-vous des antécédents judiciaires (dossier criminel) à votre arrivée en Hospitalisation ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question75",
      "title": "Aviez-vous déjà purgé une peine de hopital ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     }
    ],
    "title": "Antécédents judiciaires"
   },
   {
    "name": "page10",
    "elements": [
     {
      "type": "rating",
      "name": "question76",
      "title": "Sur une échelle de 1 à 5, 1 étant « mauvaise » santé et 5 « excellente santé », à combien vous évaluez votre santé physique ?  (Ne pas lire les réponses)",
      "rateValues": [
       1,
       2,
       3,
       4,
       5,
       {
        "value": 6,
        "text": "Refuse de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question77",
      "title": "Vous est-il déjà arrivé, avant votre arrivée en Hospitalisation, de vous faire conseiller par votre entourage de rencontrer un professionnel pour un problème d'ordre émotionnel ou psychologique ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non "
       },
       {
        "value": "item3",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question78",
      "title": "Étiez-vous d'accord avec l'opinion du professionnel ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non "
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question79",
      "title": "Selon ce professionnel, ces problèmes d'ordre émotionnel ou psychologique étaient-ils reliés à la prise d'alcool, de drogues ou de médicaments ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non "
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question81",
      "title": "Vous a-t-on déjà prescrit des médicaments pour des problèmes émotionnels ou psychologiques ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non "
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question82",
      "title": "Avez-vous déjà pensé au suicide ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non "
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question80",
      "title": "Avez-vous déjà tenté de vous suicider ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non "
       },
       {
        "value": "item4",
        "text": "Refus de répondre"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question83",
      "title": "L'année précédant votre arrivée en Hospitalisation, est-ce que vous consommiez de l'alcool ?",
      "choices": [
       {
        "value": "item1",
        "text": "Oui"
       },
       {
        "value": "item2",
        "text": "Non"
       },
       {
        "value": "item3",
        "text": "Interdiction de consommer"
       },
       {
        "value": "item4",
        "text": "Ne s'applique pas"
       },
       {
        "value": "item5",
        "text": "Refus de répondre"
       }
      ]
     }
    ],
    "title": "Santé, psychologie et toxicomanie"
   }
  ],
  "triggers": [
   {
    "type": "skip",
    "expression": "{question8[0].Column 1} = 2",
    "gotoName": "question11"
   }
  ],
  "showPageNumbers": true
 };


@Component({
  selector: 'page-add-reponse',
  templateUrl: './add-reponse.component.html'
})
export class AddReponseComponent extends AddReponseGenerated {
  constructor(injector: Injector) {
    super(injector);
  }

  alertResults(sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
  }
  ngOnInit() {
    const survey = new Model(surveyJson);
    survey.focusFirstQuestionAutomatic = false;

    survey.onComplete.add(this.alertResults);
    SurveyNG.render("surveyContainer", { model: survey });
  }
}
