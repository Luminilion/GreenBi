import React from 'react';
import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonButtons,
  IonBackButton,
  IonCheckbox,
  IonLabel,
  IonItem,
  IonButton,
} from '@ionic/react';


import { RouteComponentProps} from 'react-router-dom';
import './Contract.css';


interface ContractProps extends RouteComponentProps<{
  projectType: string;
  projectId: string;
  amount: string;
}> {}


const PaymentSuccess: React.FC<ContractProps> = ({match}) => {
  const [signature, setSignature] = React.useState(false);
  const [connaissance, setConnaissance] = React.useState(false);
  const nexturl = '/payment/' +
    match.params.projectType + '/' +
    match.params.projectId + '/' +
    match.params.amount;
  return (
    <IonPage>
      <IonHeader>

        <IonToolbar>

          <IonTitle>Contrat</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent class="contract-content">
        <h2 style={{marginLeft:30, marginRight:30}}>Contrat d'achat du produit financier : {(match.params.projectType == "stocks") ? "action" : "royalties"}</h2>
        <IonCard>

<p>
En investissant sur ce projet, je souscris à une contrepartie financière : une redevance indexée sur le chiffre d’affaires de la société SAS Carbios sur 5 ans à compter du 01/06/2020, à proportion de mon investissement 1,4% (UN VIRGULE QUATRE POURCENTS) en échange de 45 000 €. Cette redevance est plafonnée à x3 fois le montant de mon investissement. Je ne deviens pas associé de la société, il ne s’agit pas d’un investissement en capital. Je risque de perdre intégralement mon investissement.
</p>

<h2>
Contrat de cession de revenus futurs SAS Carbios
</h2>


<p>
<h3> ENTRE LES SOUSSIGNÉS </h3> <br />
<b>MONSIEUR Adrien MARTIN </b>
né le 26 JUIN 1998 à Paris 16
de nationalité FRANCE
demeurant 1 rue des cocotiers 75001 Paris 16
Adresse e-mail : adrien.martin@gmail.com

</p>

<p>
qui paie la somme de 1000 € (MILLE EUROS) ci-après désignée la « Souscription »,
</p>

<p>
ci-après désigné le « Souscripteur »,
D'UNE PART
« SAS Carbios », SAS (au capital de 10,000 Euros),
dont le siège social est situé 18 Rue du Débarcadère , 75017 Paris,
immatriculée sous le numéro SIREN 850 895 996 au RCS de Paris,
représentée par M Jacques PERROT,
Président, ayant tous pouvoirs à l’effet des présentes,
ci-après désigné le « <b>Porteur de Projet</b> »,

</p>
<b>D’AUTRE PART</b>

<p>
Ci-après collectivement les « Parties » ou individuellement une « Partie ».

</p>

<h3>
IL A ÉTÉ PRÉALABLEMENT EXPOSÉ CE QUI SUIT :
</h3>

<p>
Le Porteur de Projet a conclu un contrat de service avec la société GREENBI en vue d’utiliser le Site Internet de cette dernière pour réaliser pendant une période limitée une opération de financement participatif de son Projet, ouverte à plusieurs souscripteurs, en échange d’une Redevance (royalties) sur les revenus engendrés par ledit Projet. Il est précisé que ces revenus ne sont pas garantis.
Après avoir pris connaissance de la description du projet et des modalités de réalisation de l’opération de financement participatif proposée par le Porteur de Projet, le Souscripteur a émis le souhait d’y contribuer. 
Dans ce contexte, le Porteur de Projet a émis le présent contrat d’adhésion auquel le Souscripteur choisit d’adhérer.
Les Parties ont recours à la société GREENBI pour la conclusion et l’exécution des clauses du présent contrat, notamment sans que cette liste soit limitative : 
<ul>
  <li>
  recevoir les déclarations périodiques de Revenus et les Informations Détaillées,

  </li>
  <li>
  contrôler la cohérence entre les déclarations périodiques et les Informations Détaillées,

  </li>
  <li>
  prélever la Redevance auprès du Porteur de Projet via les services de paiements distribués sur le Site,

  </li>
  <li>
  assurer la transmission d’informations au Souscripteur,

  </li>
  <li>
  réaliser les déclarations nécessaires auprès de l’administration fiscale pour le Souscripteur et payer les cotisations et impôts applicables sur les produits du Souscripteur issus du présent contrat,

  </li>
  <li>
  servir d’intermédiaire privilégié pour toute opération modifiant les obligations issues des présentes, notamment en cas de renonciation unilatérale ou de résiliation anticipée par le Porteur de projet, ou de cession des droits issus du contrat par le Souscripteur,

  </li>
    <li>
    représenter le Souscripteur en tant que mandataire pour l’exécution des présentes.

    </li>
</ul>
Le recours à cet intermédiaire implique pour les Parties de créer un compte personnel sur le Site de l’Intermédiaire, d’en accepter les conditions générales d’utilisations accessibles à l’URL https://www.greenbi.co/cgu/ et d’utiliser les services de paiement et de signature électronique distribués sur le Site. L’utilisation des services de paiement nécessite pour les Parties de transmettre des documents permettant d’attester de leur identité, en vertu des textes réglementaires relatifs aux obligations de vigilance en matière de services de paiement en ligne.
La société GREENBI est une SAS à capital variable au capital minimum de 10 000 €, immatriculée sous le numéro SIREN 753 137 142, Intermédiaire en Financement Participatif immatriculé à l’ORIAS sous le numéro 17003145, dont le siège est au 3 rue des Cacahouètes, 75001, et dont le courriel est serviceclient@greenbi.co.

</p>


<h3>

IL A ÉTÉ CONVENU CE QUI SUIT :
</h3>
<h3>

1/ Objet du contrat
</h3>
<p>
En contrepartie de la Souscription, le Souscripteur acquiert un droit de redevance sur les Revenus.
Il est expressément convenu que les présentes ne pourront en aucun cas être considérées comme une société entre les Parties, la responsabilité de chacune étant limitée aux engagements pris par elle dans les présentes. Il est également expressément convenu que les présentes ne constituent pas un transfert de propriété ou de garde au Souscripteur. Ces dispositions sont essentielles et déterminantes du présent contrat d’adhésion sans lesquelles celui-ci n’aurait pas été conclu.
 
</p>
<h3>

2/ Déclarations des Parties
</h3>
<p>
Le Porteur de Projet déclare sur l’honneur :
<ul>
  <li>
  disposer de tous les droits nécessaires pour exercer librement son Activité, et notamment les obligations administratives liés à cette Activité ;

  </li>
  <li>
  avoir accompli toutes les diligences nécessaires pour se prémunir contre les risques graves pouvant menacer l'Activité, notamment en souscrivant aux assurances nécessaires à son activité.

    </li>

</ul>
Le Souscripteur, déclare sur l’honneur : 
<ul>
  <li>être majeur ;
</li>
  <li>être parfaitement conscient des risques liés à la Souscription effectuée au bénéfice du Porteur de Projet, dont le risque de perte intégrale, ainsi que du régime applicable à la perception de revenus issus du droit de Redevance ;
</li>
  <li>disposer de la pleine capacité juridique à contracter et de la pleine propriété des fonds versés au Porteur de Projet lors de l’Opération de Financement Participatif ;
</li>
  <li>que les sommes versées à l’appui de la Souscription ne proviennent pas d’activités illégales et ne permettront pas de participer à une opération de blanchiment de capitaux ;
</li>
  <li>savoir que les fonds versés au Porteur de Projet sont définitivement acquis par ce dernier, sauf a) Non atteinte du Seuil Plancher prévu à l’article 14 des présentes ; b) Rétractation dans les délais légaux prévus à l’article 10 des présentes ; c) Réalisation des conditions résolutoires prévues à l’article 15 des présentes.
</li>

</ul>

</p>
<h3>

3/ Droit de redevance
</h3>
<p>
<b>3.1</b> Par les présentes, le Souscripteur consent à payer au Porteur de Projet, à la signature, la somme désignée comme la « Souscription ».

  </p>
  <p>
  <b>3.2</b> Par les présentes, le Porteur de Projet consent à céder au Souscripteur une part de ses Revenus à proportion de la Souscription, ci-après désignée la « Redevance ». La Redevance est ainsi calculée de la manière suivante :
Redevance = (Souscription / Budget) × (Pourcentage x Revenus)

  </p>
  <p>
  <b>3.3</b> Le montant total de la Redevance ne pourra excéder le montant de la Redevance Maximum.

  </p>
  <p>
  <b>3.4</b> La Redevance est cédée sur la Durée définie dans l’exposé préalable et sera payée au Souscripteur avec la Périodicité définie préalablement.

  </p>
  <p>
  <b>3.5</b> Le Porteur de Projet pourra déclarer les Revenus périodiques servant de référence au calcul de la Redevance s’il estime que ceux-ci diffèrent du Prévisionnel mentionné dans l’exposé préalable des présentes. Le jour de déclaration des revenus périodiques est au plus tard le quinze du mois suivant la fin de la période du contrat échue. Le paiement devra s’effectuer sous cinq jours calendaires. 

  </p>
  <p>
  <b>3.6</b> A défaut de déclaration des Revenus trimestriels par le Porteur de Projet, les Revenus périodiques servant de base au calcul de la Redevance suivront la répartition mentionnée dans la définition du Prévisionnel.

  </p>
 <p>
 <b>3.7</b>Le paiement de la Redevance sera effectué en euros via les services de paiement en ligne distribués sur le Site de l’Intermédiaire. Les frais techniques et de gestion liés à ce paiement seront à la charge du Porteur de Projet. 

</p>
<h3>

4/ Résiliation anticipée
</h3>
<p>
<b>4.1</b> Le Porteur de Projet pourra résilier unilatéralement le présent contrat au terme d’une période du contrat pendant la Durée du contrat de façon anticipée s’il réunit les conditions suivantes :
<ul>
  <li>si la résiliation est appliquée également à l’ensemble des souscripteurs ayant pris part à l’Opération de Financement Participatif,
</li>
  <li>s’il a notifié sa volonté de résiliation à l’Intermédiaire au moins trois mois avant la fin de la période du contrat concernée par lettre recommandée avec accusé de réception ou par courrier électronique dont  l’Intermédiaire aura accusé réception,
</li>
  <li>s’il procède au paiement de la Prime définie préalablement ou d'une quote-part de celle-ci selon le montant total de Redevance déjà payé au Souscripteur, selon les modalités décrites à l’article 3.7 des présentes au plus tard le 20 du mois suivant la fin de la période du contrat échue. Le montant total payé au Souscripteur depuis le début du présent contrat, consistant en l’addition de la Prime et de la Redevance, ne pourra excéder le montant de la Redevance Maximum. Si le montant de la Prime n’est pas déterminable, le Porteur de Projet ne pourra résilier le présent contrat de manière anticipée qu’aux termes de l’article 4.2 ci-dessous.
</li>
</ul>
</p>
<p>
<b>4.2</b> Le Porteur de Projet et le Souscripteur pourront s’accorder pour résilier le présent contrat de façon anticipée au terme d’une période du contrat s’ils réunissent les conditions suivantes :
<ul>
  <li>
  si la résiliation est proposée aux mêmes conditions à l’ensemble des souscripteurs ayant pris part à l’Opération de Financement Participatif,

  </li>
  <li>si le Porteur de Projet a notifié à l’Intermédiaire sa volonté de résiliation précisant le montant qu’il consent à payer à l’ensemble des souscripteurs au moins trois mois avant la fin de la période du contrat concernée par lettre recommandée avec accusé de réception ou par courrier électronique dont  l’Intermédiaire aura accusé réception,
</li>
  <li>si le Porteur de Projet a transmis ses Informations Détaillées à l’Intermédiaire au moins trois mois avant la fin de la période du contrat concernée par lettre recommandée avec accusé de réception ou par courrier électronique dont  l’Intermédiaire aura accusé réception,
</li>
  <li>si le Souscripteur a notifié son accord à l’Intermédiaire par écrit, y compris par courrier électronique,
</li>
  <li>le cas échéant, si le Porteur de Projet a procédé à son dernier paiement aux modalités mentionnées à l’article 3.7 des présentes au plus tard le 20 du mois suivant la fin de la période du contrat échue.
</li>
</ul>
</p>
<p>
<b>4.3</b>  Le Souscripteur pourra résilier le présent contrat de façon anticipée et avec effet immédiat en présence de l’une des conditions suivantes :

<ul>
  <li>a) Si le Porteur de Projet n’a pas honoré son obligation de payer la Redevance au plus tard dans les trois mois suivant la dernière échéance.
</li>
  <li>b) Si le Porteur de Projet n’a pas honoré son obligation de payer la Redevance au plus tard dans les dix jours suivant la dernière échéance et qu’il avait payé avec un retard supérieur à un mois une précédente échéance qu’il s’agisse de la précédente ou d’une échéance plus ancienne.
</li>
</ul>
Le Souscripteur devra alors notifier par écrit à l'Intermédiaire et au Porteur de Projet sa décision de résiliation anticipée du présent contrat. Le Porteur de Projet sera alors tenu de rembourser au Souscripteur dans les 30 jours calendaires l’intégralité de la Souscription, aucune déduction n’étant faite de la Redevance déjà versée.
Dans le cas mentionné en “b)”, le Porteur de Projet sera également redevable de frais forfaitaires de mise en recouvrement égaux à un cinquième de la somme due. Ce frais est dû, nonobstant les dispositions de l’article 12.3 des présentes.

</p>
<p>
<b>4.4</b>  Le présent Contrat prendra fin automatiquement et de plein droit à l’issue d’une opération de liquidation du Porteur de Projet. Dans le cadre d’une procédure de liquidation, la Redevance calculée selon les modalités de l’article 3.5 et non payée fera l’objet d’une déclaration de créance adressée au liquidateur. A l’issue de la procédure, aucune Redevance ne sera plus due au Souscripteur et son droit sur la Souscription sera définitivement perdu.
 
</p>
<h3>

5/ Garantie ou absence de garantie
</h3>
<p>
Les Parties acceptent la Clause de Garantie telle que définie dans l’exposé préalable.
 
</p>
<h3>

6/ Obligations du Porteur de Projet
</h3>
<p>
Le Porteur de Projet exécutera les obligations des présentes de bonne foi et ne pourra s’y soustraire notamment par le transfert de son Activité à une filiale ou par la cession -même partielle- de celle-ci dès lors que ces actes auraient notamment pour objectif ou auraient pour effet principal de léser le Souscripteur ou de rendre insignifiant le poids des obligations nées des présentes. En outre, le Porteur de Projet reconnaît et accepte d'être soumis envers le Souscripteur à une obligation d'informations sur ses Revenus.
Pour assurer le respect de ses obligations découlant du présent contrat, le Porteur de Projet, s’engage :
<ul>
  <li>à effectuer toutes démarches nécessaires à l’exercice licite de l'Activité et notamment à obtenir les éventuels agréments, assurances, certifications ou visas,
</li>
  <li>à transmettre au Souscripteur les Informations Courantes telles que définies dans l’exposé préalable,
</li>
  <li>à tenir à disposition du Souscripteur tout document attestant des déclarations et assurances mentionnées à l’article 2 des présentes, et tous contrats de Revenus liés à l’Activité,
</li>
  <li>	à permettre à l’Intermédiaire, via les services de paiements distribués sur le Site, de prélever la Redevance calculée en fonction des conditions posées par l’article 3 des présentes,
</li>
  <li>à respecter son obligation éventuelle de publication des comptes, ou le cas échéant à tenir une comptabilité analytique qui distingue les Revenus relatifs à l’Activité et à conserver tous les documents et pièces comptables, ainsi que les Informations Détaillées, en ses bureaux pour les tenir à disposition du Souscripteur et de l’Intermédiaire ;
</li>
  <li>à transmettre à l’Intermédiaire les Informations Détaillées telles que définies dans l’exposé préalable ou à donner à l’Intermédiaire un accès direct aux sources d’information, pour que l’Intermédiaire puisse vérifier les Revenus.
</li>
<li>	En cas de différence constatée entre les chiffres retenus par le Porteur de Projet pour le calcul de la Redevance et les chiffres constatés par l’Intermédiaire, cette différence servira de base au calcul d’un surcroît ou d’une réduction de Redevance pour la période du contrat suivant la transmission des Informations Détaillées à l’Intermédiaire. En cas de réduction excédant la Redevance due pour la période du contrat concernée, la Redevance de cette période du contrat sera égale à zéro, et le solde de la réduction sera de même déduit des Redevances de toutes les périodes du contrat suivantes jusqu’à épuisement dudit solde. Si la différence est constatée après la dernière période du contrat, l’Intermédiaire en avertira le Porteur de Projet, qui disposera d’un délai de 30 jours calendaires pour y répondre. Au delà de ce délai, l’Intermédiaire aura la faculté d’en avertir directement le Souscripteur et de prélever la Redevance aux conditions posées par l’article 3 des présentes.
 </li>
</ul>
</p>

<h3>
    
7/ Recours à un expert pour contrôler les Revenus
</h3>
<p>
Le Souscripteur se réserve le droit de faire contrôler les comptes du Porteur de Projet par huissier, expert-comptable ou commissaire aux comptes au maximum une fois par an.
Le coût de l’intervention de cet expert sera imputable au Porteur de Projet si le contrôle décèle une  irrégularité ayant pour résultat d’imputer la Redevance de 5 % ou plus, et sera laissée à la charge du Souscripteur si l’irrégularité impute la Redevance de moins de 5 %.
 
</p>
<h3>
8/ Confidentialité

</h3>
<p>
Chacune des Parties accepte de traiter de façon strictement confidentielle les informations mises à disposition par l’autre Partie tant que cette dernière n’en aura pas accepté par écrit la libre communication ou l'usage, notamment les Revenus et les Informations Détaillées transmises par le Porteur de Projet.
 
</p>

<h3>

9/ Entrée en vigueur du contrat
</h3>
<p>
Le présent Contrat de cession de revenus futurs entre en vigueur à la date de son acceptation électronique par le Souscripteur. 
En cas de conclusion en face à face ou par courrier postal, il entre en vigueur lorsque le Porteur de Projet le contresigne après signature du Souscripteur.
 
</p>
<h3>

10/ Droit de rétractation
</h3>
<p>
Le Souscripteur bénéficie d’un délai de rétractation de 14 jours calendaires révolus à compter de la conclusion du Contrat de cession de revenus futurs.
Pour l’exercice de ce droit, le Souscripteur doit compléter, signer et renvoyer par courrier électronique avec accusé de réception à l'Intermédiaire le formulaire de rétractation disponible à l’url suivante : https://www.greenbi.co/retractation
Le compte bancaire du Souscripteur sera alors crédité de la somme versée lors de la Souscription, via les services de paiement en ligne distribués sur le Site de l’Intermédiaire, dans un délai de 30 jours. 
 
</p>
<h3>

11/ Preuve du contrat
</h3>
<p><b>11.1</b>En application de l’article 1366 du Code civil, les Parties reconnaissent à l’écrit sur support électronique la même force probante que l’écrit sur support papier. 
</p>
<p><b> 11.2 </b>Les Parties reconnaissent et acceptent expressément que toute personne, porteuse des présentes signées ou ayant fait l’objet d’une offre de la part du Porteur de Projet sur le Site et conservées sur support durable, pourra se prévaloir des obligations constatées dans le Contrat. 
 </p>

<h3>

12/ Droit applicable - Litige
</h3>
<p><b>12.1 </b>De convention expresse entre les Parties, le présent contrat est régi et soumis au droit français.
</p>
<p><b>12.2 </b>En cas de litige né de la validité, de l’exécution ou de l’interprétation des présentes, les Parties conviennent de se rapprocher pour tenter de trouver une solution amiable. En cas d’échec dans un délai d’un mois après réception de la lettre adressée en recommandé avec accusé de réception par la Partie qui invoque le différend, le litige relèvera de la compétence exclusive du tribunal de commerce de Nantes. En outre, le Souscripteur mandate l’Intermédiaire pour mener toute action nécessaire à l'exécution du contrat, notamment les versements périodiques de la Redevance.
</p>
<p><b>12.3 </b>Toute dépense engagée visant au recouvrement de sommes dues par le Porteur de Projet au Souscripteur en vertu des présentes, sera intégralement à la charge du Porteur de Projet, et devra donc être remboursée par lui au Souscripteur. Seront déduits de ces dépenses, le cas échéant, les frais mentionnés à l’article 4.3 si celui-ci a été déjà versé par le Porteur de Projet.
 </p>

<h3>

13/ Nullité partielle
</h3>
<p>
L’annulation de l’une des stipulations des présentes n’entraînerait l’annulation du présent contrat dans son ensemble que pour autant que la stipulation litigieuse puisse être considérée, dans l’esprit des Parties, comme substantielle et déterminante, et que son annulation remette en cause l’équilibre général de la convention.
En cas d’annulation d’une des stipulations des présentes, considérée comme non substantielle, les Parties s’efforceront de négocier une clause économiquement équivalente.
 
</p>
<h3>

14/ Conditions suspensives
</h3>
<p><b>14.1 </b>Les obligations nées du présent contrat s’appliquent sous réserve que le Montant Collecté atteigne le Seuil Plancher pendant la période de souscription. La période de souscription de la présente Opération de Financement Participatif court depuis la date de signature du premier contrat de cession de revenus futurs et prend fin quinze jours francs après la clôture de la campagne sur le Site de l’Intermédiaire.
</p>
<p><b>14.2 </b>Les obligations nées du présent contrat s’appliquent sous réserve que le montant total des sommes payées au Porteur de Projet pendant l’Opération de Financement Participatif soit inférieur ou égal au Plafond, sauf accord exprès du Porteur de Projet de dépasser le Plafond.
 </p>
<h3>

15/ Conditions résolutoires
</h3>
<p>
Le présent contrat sera réputé nul de plein droit si la somme correspondant à la Souscription est employée à une destination manifestement différente de l'activité du Porteur de Projet, sans qu’il soit besoin d’aucun préavis et d’aucune formalité judiciaire.
La somme versée à la Souscription devra alors être restituée en totalité au Souscripteur par le Porteur de Projet.
 
</p>
<h3>

16/ Droit de cession
</h3>
<p><b>16.1 </b>Le Souscripteur peut à tout moment céder sa qualité de partie au présent contrat, sous réserve d’acceptation du cessionnaire par le Porteur de Projet et par l’Intermédiaire. La cession ne vaudra que pour les effets des présentes ultérieurs à la signature de la cession et à sa notification par toutes les Parties à la cession à l’Intermédiaire par tout moyen écrit démontrant le consentement du cédant à la transmission de ces droits ainsi que l’identité du cessionnaire, notamment en transmettant une copie de l’acte de cession.
</p>
<p><b>16.2 </b>Le Souscripteur et le Porteur de Projet conviennent que la cession ne pourra porter que sur des périodes du contrat entières et qu’aucune fraction de Redevance ne pourra être cédée indépendamment du reste de la Redevance d’une période du contrat. A défaut de convention expressément contraire des Parties, la cession concernera la totalité de la période du contrat en cours à la date d’entrée en vigueur du contrat de cession excluant ainsi les effets de la précédente période du contrat même si la Redevance fondée sur celui-ci n’a pas encore été versée. Le prix de la cession sera fixé librement par les Parties tant en ce qui concerne le montant que la nature de ce prix.
</p>
<p><b>16.3 </b>Le Porteur de Projet pourra se porter acquéreur par préemption, dans le cadre d’une cession entre le Souscripteur et un cessionnaire. Le Porteur de Projet aura jusqu’à la fin de la période du contrat en cours pour notifier son intention de se porter acquéreur. Cette notification devra être faite par écrit.
</p>
<p><b>16.4 </b>La cession sera nulle dans le cas où la préemption ne serait qu’une apparence visant à contourner l'obligation de traitement égal mentionné aux articles 4.1 et 4.2 des présentes.
</p>
<p><b>16.5 </b>La cession entraînera la fin du contrat immédiate et de plein droit du contrat si le cessionnaire, après préemption ou directement, est le Porteur de Projet.
 </p>
<h3>
17/ Données Personnelles
</h3>
<p>
Le Porteur de Projet s'engage à respecter les obligations mises à sa charge dans le cadre de la législation sur la collecte et le traitement des données personnelles du Souscripteur.
Le Souscripteur accepte ainsi la saisie, la conservation et la gestion de ses données personnelles dans le cadre du présent Contrat. Il accepte expressément la communication de tout ou partie des données le concernant en interne au sein du Porteur de Projet à la stricte condition que toute communication réponde à un besoin légitime de gestion du Contrat et soit destinée exclusivement aux personnes chargées de cette gestion.
Les données personnelles du Souscripteur seront conservées aussi longtemps que nécessaire à l'exécution du Contrat, à l'accomplissement par le Porteur de Projet de ses obligations légales et réglementaires. Pendant toute cette durée de conservation, le Porteur de Projet met en place tous les moyens aptes à assurer leur confidentialité et leur sécurité, de manière à empêcher leur endommagement, effacement ou accès par des tiers non autorisés.
Conformément au Règlement Général sur la Protection des Données, le Souscripteur dispose d’un droit d’accès, de rectification, d’effacement, de limitation du traitement, à la portabilité de ses données et de définir le sort de ses données après son décès. Il bénéficie également d’un droit d'opposition, pour motifs légitimes, au traitement de ses données, sauf dans les cas où le traitement répondrait à une obligation légale. Le Souscripteur peut exercer ses droits via son compte personnel sur le Site de l’Intermédiaire ou en contactant par écrit l’Intermédiaire.

</p>


          <IonItem>
            <IonCheckbox checked={connaissance} onIonChange={e => setConnaissance(!connaissance)} />
            <IonLabel style={{margin:30}}>J'ai pris connaissance du contrat</IonLabel>
          </IonItem>

          <IonItem>
            <IonCheckbox checked={signature} onIonChange={e => setSignature(!signature)} />
            <IonLabel style={{margin:30}}>J'appose ma signature</IonLabel>
          </IonItem>
      </IonCard>
      <IonButton routerLink={nexturl} disabled={!signature||!connaissance} size="small">Accepter</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default PaymentSuccess;
