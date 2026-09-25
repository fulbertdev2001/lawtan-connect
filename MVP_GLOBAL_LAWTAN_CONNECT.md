# GIE LAWTAN · CLUSTER DE MBOUNDOUM-BARRAGE
## Programme RIZAO — Pilier 2 (Sénégal)

# DOCUMENT DE CADRAGE & SPÉCIFICATION DU MVP GLOBAL
### Système Intégré de Gestion du Cluster : LAWTAN Connect (Périmètre Complet)

---

| **Document** | Spécifications Fonctionnelles et Techniques Complètes — MVP Global |
|:---|:---|
| **Projet** | LAWTAN Connect (Système Complet) |
| **Organisation** | GIE LAWTAN (Mboundoum-Barrage, Département de Dagana, Sénégal) |
| **Cadre Institutionnel** | Programme RIZAO – Pilier 2 (Bailleurs & Partenaires : MEDA, SAED, SENAD, PMO mLouma) |
| **Couverture** | 12 Rubriques Fonctionnelles · 10 Modules (C-1 à C-10) · 13 Fiches de Terrain (F1 à F13) · 4 Flux ERP |
| **Version** | 2.0 — Spécification Globale Intégrée |
| **Date** | Septembre 2026 |

---


## 1. Vision Globale & Architecture d'Ensemble

Le projet **LAWTAN Connect** est la plateforme numérique intégrée conçue pour piloter l'ensemble des activités du cluster agricole du GIE LAWTAN dans le delta du fleuve Sénégal (département de Dagana).

L'application répond aux impératifs stratégiques validés lors de la capitalisation de la Phase 1 du Programme RIZAO (Pilier 2) :
1. **Zéro perte de données en zone rurale blanche :** Fonctionnement intégral déconnecté (Offline-first) sur le terrain, synchronisation différée avec détection et arbitrage humain des conflits.
2. **Conformité totale avec les bailleurs de fonds (MEDA / RIZAO) :** Traçabilité irréprochable de chaque indicateur jusqu'à la fiche de terrain d'origine, respect des cibles d'inclusion des jeunes et des femmes (Youth in Work - YIW) et des personnes en situation de handicap.
3. **Double environnement opérationnel :**
   - **Application Mobile Android (Module C-3)** : Outil tout-terrain dédié aux agents collecteurs et relais numériques pour numériser instantanément les 13 fiches du carnet de terrain.
   - **Plateforme Web de Bureau** : Outil d'administration, de cartographie SIG, de calcul d'impact, de pilotage stratégique et de restitution institutionnelle.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        PLATEFORME WEB CENTRALE (BUREAU DU GIE)                         │
│  ┌───────────────────────┐  ┌───────────────────────┐  ┌────────────────────────────┐  │
│  │ 1. Pilotage & ÉGIS    │  │ 2. Membres (C-1)      │  │ 3. Parcelles & SIG (C-2)   │  │
│  ├───────────────────────┤  ├───────────────────────┤  ├────────────────────────────┤  │
│  │ 4. Champs Écoles (C-4)│  │ 5. Campagne (C-6/C-7) │  │ 6. Emplois & GESI (C-5)    │  │
│  ├───────────────────────┤  ├───────────────────────┤  ├────────────────────────────┤  │
│  │ 7. Services (C-9)     │  │ 8. Prestataires (C-10)│  │ 9. Communication (C-8)     │  │
│  ├───────────────────────┤  ├───────────────────────┤  ├────────────────────────────┤  │
│  │ 10. Restitution & M&E │  │ 12. Config & Audit    │  │ 4 Flux ERP (F-1 à F-4)     │  │
│  └───────────────────────┘  └───────────────────────┘  └────────────────────────────┘  │
└───────────────────────────────────────────▲────────────────────────────────────────────┘
                                            │ Synchronisation Sécurisée
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│               APPLICATION MOBILE ANDROID 100 % HORS-LIGNE (MODULE C-3)                 │
│      Formulaires express (< 90s) · Tracé GPS · Pointage présence · Photos compressées  │
│   [F1 Adhésion] [F2 Parcelle] [F3-F6 CEP] [F7 Itinéraire] [F8 Récolte] [F9 Adoption]   │
│   [F10 Emplois] [F11 Services/Kits] [F12 Prestataires] [F13 Diffusion SMS/Vocal]       │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Frontière Système : Cluster (Connect) vs Entreprise (ERP LAWTAN)

Pour garantir l'intégrité comptable et éviter les doublons fonctionnels, une démarcation absolue est établie entre **LAWTAN Connect** et l'**ERP LAWTAN** (`agro-erp`) :

| Domaine de Gestion | Système Responsable | Règle Opérationnelle & Traitement |
|:---|:---:|:---|
| **Vie du Cluster Agricole** | **LAWTAN Connect** | Adhésion des membres, fiches parcelles, GPS, présences aux cours CEP, visites d'adoption, calcul des ETP/emplois, diffusion des alertes climatiques. |
| **Facturation & Encaissements** | **ERP LAWTAN** | **LAWTAN Connect ne facture jamais.** Les prestations de services mécanisés sont demandées dans Connect mais facturées dans l'ERP. |
| **Usinage, Pesée & Stocks** | **ERP LAWTAN** | La réception du paddy à l'usine de Mboundoum, la pesée officielle, le contrôle d'humidité et les bons de livraison sont émis par l'ERP. |
| **Parc Matériel & Moissonneuses**| **ERP LAWTAN** | La maintenance des machines, les bons de travaux et le planning d'atelier sont gérés dans l'ERP. Connect émet uniquement le besoin du producteur. |
| **Paie & Trésorerie** | **ERP LAWTAN** | Les salaires, règlements fournisseurs et avances financières sont enregistrés dans l'ERP. Connect enregistre les jours travaillés sans émettre de chèque. |

---

## 3. Spécifications Détaillées des 12 Rubriques Fonctionnelles

### 3.1 Rubrique 1 : Pilotage du Cluster (Tableau de Bord & Indicateurs ÉGIS)
- **Tableau de Bord de la Direction :** Vue consolidée en temps réel ouvrant la semaine de la présidente du GIE :
  - Nombre total de membres actifs et superficie totale encadrée (ha).
  - Taux de complétude des levées parcellaires GPS.
  - Taux d'adoption global des Bonnes Pratiques Agricoles (BPA).
  - Emplois générés (jours-personnes et ETP cumulés).
  - File des alertes opérationnelles ouvertes.
  - *Règle d'or de traçabilité :* Tout chiffre affiché est cliquable jusqu'à la ligne de saisie de terrain d'origine.
- **Indicateurs d'Inclusion ÉGIS (Bailleur MEDA) :**
  - Jauge de conformité Jeunes Femmes (JF) et Jeunes Hommes (JH) avec calcul de l'écart à la cible contractuelle de 70 %.
  - Suivi des personnes en situation de handicap (cible contractuelle de 5 %).
  - Algorithme de projection indiquant en permanence le nombre exact de personnes ciblées à recruter pour combler les écarts.
- **Contrôle Qualité des Données :**
  - Détection automatique des fiches incomplètes (dates de naissance manquantes, parcelles sans géométrie fermée, numéros de CNI absents).
  - File d'attente des doublons suspects en attente d'arbitrage.
- **Comparaison Inter-Campagnes :**
  - Analyse comparative des superficies, rendements moyens et effectifs d'une campagne à l'autre.

---

### 3.2 Rubrique 2 : Membres du Cluster (Module C-1)
- **Règle Fondatrice d'Unicité :** Une personne physique = une fiche unique, identifiant immuable non réattribuable au format **`LWT-00001`**.
- **Gestion des Rôles Multiples Cumulés et Datés :**
  - Un membre peut cumuler dans le temps les statuts de *Producteur*, *Participant CEP*, *Salarié du GIE*, *Prestataire de services*, *Transformateur*.
  - Les rôles sont historisés avec date de début et date de fin sur la même fiche.
- **État Civil & Profil Social :**
  - Nom, prénom, sexe, date de naissance exacte (avec calcul dynamique de l'âge) ou âge déclaré.
  - Statut handicap : `Non`, `Oui (avec précision obligatoire)`, `Ne souhaite pas répondre`.
  - Téléphone principal normalisé (+221...), titulaire de la ligne (la personne ou un proche), téléphone secondaire.
  - Village et commune rattachés au référentiel officiel.
- **Gestion du Consentement & CNI :**
  - Photographie de la CNI horodatée et géolocalisée.
  - Consentement formel signé numériquement pour les exigences du programme RIZAO.
- **Algorithme de Détection des Doublons :**
  - Détection croisée : téléphone identique OR (similarité phonétique du nom/prénom > 85 % AND même année de naissance AND même village).
  - Écran d'arbitrage permettant la fusion validée par un superviseur avec conservation de l'historique complet.
- **Cartes de Membre avec QR Code :**
  - Impression et génération numérique de cartes avec QR Code sécurisé permettant l'identification hors-ligne en 1 seconde.

---

### 3.3 Rubrique 3 : Parcelles et Territoire (Module C-2)
- **Identifiant Parcellaire Normé :** Format **`PAR-LWT-00001-A`** (Index alphabétique incrémental rattaché au membre).
- **Règle de la Double Superficie :**
  - Conservation séparée de la *Superficie Déclarée* par le producteur et de la *Superficie Mesurée* par le moteur géomatique PostGIS.
  - Calcul et affichage permanent du pourcentage d'écart : `((Mesurée - Déclarée) / Déclarée) * 100`. Alerte si l'écart dépasse 10 %.
- **Méthodes de Relevé GPS :**
  - Mode 1 : Contour marché à pied (polygone fermé géodésique).
  - Mode 2 : Quatre sommets relevés.
  - Enregistrement de l'opérateur, de la précision moyenne GPS (en mètres) et de la date.
- **Cartographie Interactive SIG :**
  - Visualisation des parcelles sur fond satellite, découpées par cuvette rizicole et casier/maille SAED.
  - Filtres dynamiques : par campagne, variété, statut d'adoption, village.
- **Contrôles Topologiques Automatisés :**
  - Détection immédiate des chevauchements de parcelles (> 2 % de surface commune).
  - Alerte si deux relevés consécutifs de la même parcelle divergent de plus de 5 %.
  - Détection des parcelles orphelines (sans exploitant).
- **Passerelle d'Imports/Exports SIG :**
  - Import et export natif des formats **GeoJSON**, **KML**, **GPX**, et tables attributaires.
  - Compatibilité directe sans retraitement avec les exports de **KoboCollect**, **QField** et les plans cadastraux de la **SAED**.

---

### 3.4 Rubrique 4 : Champs Écoles Paysans - CEP (Module C-4)
- **Rattachement Institutionnel & Convention SENAD :**
  - Enregistrement des sites de CEP avec animateurs agréés (internes, SENAD, APS).
  - Cohortes de participants rattachés directement au registre central des membres (aucune fiche parallèle).
- **Catalogue des 13 Thèmes de Formation Homologués :**
  1. Choix et traitement des semences
  2. Préparation du sol
  3. Semis et repiquage
  4. Irrigation et gestion rationnelle de l'eau
  5. Fertilisation raisonnée
  6. Outil d'aide à la décision RiceAdvice
  7. Identification et écologie des adventices
  8. Désherbage manuel et chimique raisonné
  9. Usage sécurisé et stockage des pesticides
  10. Suivi phytosanitaire et ravageurs
  11. Récolte et conservation post-récolte
  12. Leadership, genre et responsabilisation
  13. Économie circulaire, sous-produits et climat
- **Feuille de Présence Numérique (Fiche F4) :**
  - Pointage obligatoire par séance : `Présent`, `Absent`, ou `Excusé`.
  - *Règle stricte :* Une absence se note explicitement, elle ne se laisse jamais vide.
  - Calcul automatique des taux d'assiduité par participant et par cohorte.
- **Essais Agronomiques Comparatifs (Fiche F5) :**
  - Suivi des placettes d'essais (ex. Pratiques paysannes vs Bonnes Pratiques Agricoles, comparaison de variétés, tests d'engrais TSP vs DAP).
  - Mesures de densité au m², hauteur de tige aux stades clés (levée, tallage, montaison, épiaison, maturité) et pesée des rendements à la récolte.
- **Journées de Démonstration (Fiche F6) :**
  - Enregistrement des événements collectifs, thèmes présentés, photo de la liste d'émargement.
  - Fréquentation désagrégée avec contrôle de cohérence bloquant : `Total = Femmes + Hommes`.
- **Visites d'Adoption Post-Formation (Fiche F9) :**
  - Visite sur la parcelle personnelle de l'apprenant une campagne après la formation.
  - Constat de mise en œuvre pratique par pratique : `Totalement`, `Partiellement`, `Non appliquée (avec motif documenté)`.
  - Mesure de l'impact sur le rendement obtenu par rapport à la campagne témoin antérieure.

---

### 3.5 Rubrique 5 : Campagne et Conseil Agronomique (Modules C-6 & C-7)
- **Cloisonnement Temporel des Campagnes :**
  - Gestion des saisons culturales (Hivernage, Contre-Saison Chaude). Cloisonnement strict des données avec affichage permanent de la campagne active.
- **Calendrier Cultural Dynamique :**
  - Calcul automatisé des dates théoriques des opérations culturales par parcelle à partir de la variété et de la date réelle de semis : préparation, fumure de fond, désherbage, fumure de couverture, tallage, épiaison, assec, récolte.
- **Conseil Agronomique & RiceAdvice (Fiche F7) :**
  - Enregistrement de la recommandation externe : source (RiceAdvice/APS/interne), conseiller, doses d'azote, phosphore, potassium (NPK, Urée).
  - Rapprochement avec les opérations réellement effectuées : comparaison dose recommandée vs dose réellement appliquée et calcul de l'écart.
- **Récolte et Rendements Pesés (Fiche F8) :**
  - Date de récolte, mode (moissonneuse LAWTAN, prestataire extérieur, manuelle).
  - Pesée totale, nombre de sacs, humidité mesurée (%), méthode (pesée intégrale, échantillonnage, déclarative).
  - *Calcul automatique :* Rendement en t/ha = `Poids total récolté / Superficie mesurée au GPS`.
- **Tours d'Eau & Gestion des Casiers :**
  - Information collective et calendrier de distribution de l'eau à l'échelle du casier/maille.
- **Analyse d'Impact : Adoptants vs Non-Adoptants :**
  - Comparaison statistique des rendements obtenus à variété et cuvette égales entre les producteurs ayant adopté les BPA et les témoins.

---

### 3.6 Rubrique 6 : Emplois et Inclusion (Module C-5)
- **Typologie d'Emplois Alignée sur le Programme RIZAO :**
  - Type : `Primaire` (activité directe de production) ou `Secondaire` (transformation, prestation, logistique).
  - Régime : `Permanent`, `Saisonnier`, `Journalier`.
- **Feuilles de Présence et Pointages (Fiche F10) :**
  - Saisie des présences des journaliers et saisonniers chez les partenaires et sur les chantiers du GIE.
  - Intégration des pointages usine via le Flux F-3 de l'ERP.
- **Moteur de Calcul Jours-Personnes et ETP :**
  - Conversion automatisée des journées de travail en Équivalents Temps Plein (ETP).
  - Formule et méthode de calcul affichées en clair à côté du résultat pour validation par les auditeurs.
- **Désagrégation Rigoureuse GESI :**
  - Décompte instantané des parts de Femmes, Jeunes (18–35 ans calculés sur date de naissance) et personnes en situation de handicap.
  - Justificatif contractuel obligatoire : photo de la liste d'émargement signée ou du contrat de travail attachée à chaque déclaration d'emploi.

---

### 3.7 Rubrique 7 : Services aux Membres (Module C-9)
- **Demandes de Prestations Mécanisées (Fiche F11) :**
  - Recueil des besoins des producteurs : Moissonnage-battage, Ballotage de paille, Façons culturales (labour, billonnage), Usinage de paddy.
  - Transmission immédiate à l'ERP LAWTAN via le **Flux F-4** pour planification machine et facturation.
- **Dotations et Kits d'Intrants :**
  - Enregistrement du circuit : Quantité demandée ➔ Quantité approuvée ➔ Dotation obtenue ➔ Remise physique signée par le membre.
  - Traçabilité publique des écarts entre demandé et obtenu pour prévenir les litiges au sein du cluster.
- **Avances de Campagne (Sans Intérêt) :**
  - Suivi des avances en semences certifiées ou engrais remboursables en nature (paddy) lors de la récolte.
  - *Règle stricte :* Zéro calcul d'intérêts financiers (le cluster n'est pas une banque).
- **Historique et Passeport du Membre (Warrantage) :**
  - Consolidation par campagne des volumes livrés, services honorés et remboursements effectués, formant le dossier d'évaluation pour les banques agricoles et les programmes de warrantage.

---

### 3.8 Rubrique 8 : Prestataires de Services (Module C-10)
- **Gestion des Relais et Jeunes Prestataires (Fiche F12) :**
  - Fiche prestataire rattachée au registre des membres, habilitation technique, matériel détenu (pulvérisateurs, semoirs, batteuses, kits d'analyse).
  - Spécialités : Conseil agronomique, Mécanisation, Traitements phytosanitaires, Appui à la collecte de données.
- **Portefeuille de Producteurs Suivis :**
  - Affectation des producteurs et parcelles suivis par chaque prestataire sur la campagne.
- **Suivi des Actes de Service :**
  - Date, producteur servi, nature de l'acte, temps passé, tarif appliqué et statut d'encaissement.
- **Mesure de Viabilité Économique :**
  - Tableau de bord du revenu net généré par chaque prestataire (indicateur d'auto-suffisance de l'emploi jeune créé).
  - Comptabilisation au titre des emplois secondaires du programme RIZAO avec désagrégation GESI.

---

### 3.9 Rubrique 9 : Communication Multilingue (Module C-8)
- **Modèles de Messages Trilingues :**
  - Bibliothèque de messages paramétrables en **Français**, **Wolof** et **Pulaar**.
  - Formats doubles : SMS textuels ET Messages Vocaux préenregistrés (indispensables pour surmonter l'analphabétisme constaté en Phase 1).
  - Variables de personnalisation dynamiques : `{Nom_Membre}`, `{Code_Parcelle}`, `{Dose_Engrais}`, `{Date_Semis}`.
- **Campagnes de Diffusion Ciblées (Fiche F13) :**
  - Rappels avant les stades clés du calendrier cultural (date limite d'épandage d'urée, fermeture des vannes).
  - Convocations aux séances de champs écoles et alertes météo d'hivernage.
  - Groupes de diffusion par cuvette, par village, par cohorte CEP ou par statut d'adoption.
- **Gestion des Retours & Contrôle Télécom :**
  - Journal de réception : suivi des messages reçus, des non-réponses et détection des numéros erronés (avec alerte immédiate pour corriger la fiche F1 du membre).
  - Plafond budgétaire mensuel configurable pour encadrer les dépenses d'envoi d'appels et SMS.

---

### 3.10 Rubrique 10 : Restitution, Exports & Partage
- **Générateur Automatique de Rapports Programme (Suivi-Évaluation) :**
  - Production en 1 clic des matrices officielles attendues par le suivi-évaluation de MEDA et du Programme RIZAO, avec explicitation de la formule de calcul de chaque indicateur.
- **Exports Sécurisés :**
  - Exports aux formats **CSV**, **Excel** et **GeoJSON** disponibles sur l'ensemble des listes.
  - Masquage automatique des données sensibles (numéros de CNI, photos personnelles) sur les exports standards non administrateurs.
- **Portail Partenaire (Accès Restreint) :**
  - Vue sécurisée en lecture seule dédiée aux bailleurs et institutions partenaires (MEDA, SAED, Ministère), présentant les données d'impact agrégées sans divulgation nominative injustifiée.
- **Espace Producteur :**
  - Consultation par le producteur de son dossier : parcelles enregistrées, formations suivies, kits reçus et historique de ses livraisons.

---

### 3.11 Rubrique 11 : Application Mobile Terrain Android Offline (Module C-3)
L'application mobile est le cœur battant de la saisie terrain :
- **Prise en charge intégrale des 13 Fiches de Terrain (F1 à F13)** :
  1. `F1` : Adhésion d'un membre avec photo de CNI et signature tactile.
  2. `F2` : Levée GPS de parcelle (contour marché ou 4 coins).
  3. `F3` : Compte-rendu de séance CEP.
  4. `F4` : Feuille de présence CEP (P/A/E).
  5. `F5` : Mesures sur essai agronomique.
  6. `F6` : Émargement de journée de démonstration.
  7. `F7` : Itinéraire cultural et écart de fumure.
  8. `F8` : Constat de récolte et pesée du rendement.
  9. `F9` : Visite d'évaluation de l'adoption.
  10. `F10` : Pointage journalier des emplois créés.
  11. `F11` : Remise de kits d'intrants et demandes de service.
  12. `F12` : Actes de service des prestataires.
  13. `F13` : Émargement de réception des diffusions orales/SMS.
- **Ergonomie & Performance :**
  - Saisie d'une fiche complète en moins de 90 secondes.
  - Fonctionnement sur Android 8.0+ d'entrée de gamme sans dépendance au réseau Internet.
  - Compression locale des photos avant enregistrement SQLite (< 250 Ko par image).
- **Synchronisation Différée Résiliente :**
  - File d'attente locale idempotente avec attribution de codes temporaires (`TEMP-LWT-XXXX`).
  - Déversement sécurisé lors du retour en zone connectée sans écrasement aveugle en cas de conflit.

---

### 3.12 Rubrique 12 : Configuration, Sécurité & Traçabilité
- **Référentiels Immuables :** Gestion stricte des listes d'autorité : Villages de Dagana, Cuvettes d'irrigation, Variétés homologuées, 13 Thèmes CEP.
- **Gouvernance des Données & Droit à l'Oubli :** Registre des consentements, accès journalisé aux pièces d'identité, politique de conservation.
- **Piste d'Audit Complète (Audit Trail) :**
  - Table `audit_logs` consignant l'utilisateur, l'horodatage, le terminal, l'ancienne valeur et la nouvelle valeur pour chaque action.
  - Interdiction absolue des requêtes SQL `DELETE` sur les données métier. Seuls les `SOFT_DELETE` motivés sont autorisés.

---

## 4. Interfaçage Complet avec l'ERP LAWTAN (Les 4 Flux F-1 à F-4)

L'architecture prévoit 4 flux d'échange asynchrones et sécurisés avec l'ERP LAWTAN (`agro-erp`, package `com.agrolawtan.erp`) :

```
       ┌────────────────────────────────────────────────────────┐
       │                     LAWTAN CONNECT                     │
       └───────┬──────────────▲──────────────────┬──────────────┘
               │              │                  │
      FLUX F-1 │     FLUX F-2 │         FLUX F-3 │     FLUX F-4
   Référentiel │  Historique  │        Pointages │  Demandes de
   des Membres │   Livraisons │    Main-d'Œuvre  │  Prestations
               │   de Paddy   │     du GIE       │  Mécanisées
               ▼              │                  │              │
       ┌──────────────────────┴──────────────────▼──────────────▼┐
       │                       ERP LAWTAN                        │
       │   Gestion Usine · Stocks · Facturation · Matériel       │
       └─────────────────────────────────────────────────────────┘
```

1. **Flux F-1 : Synchronisation des Membres (Connect ➔ ERP)**
   - *Données :* Matricule `LWT-XXXXX`, nom, prénom, téléphone, village, organisation.
   - *Effet ERP :* Création ou mise à jour automatique du compte "Fournisseur de Paddy / Client Usinage".
2. **Flux F-2 : Rapprochement des Livraisons Réelles de Paddy (ERP ➔ Connect)**
   - *Données :* Poids net livré au pont-bascule, date de pesée, taux d'humidité mesuré en rizerie, réfraction.
   - *Effet Connect :* Consolidation du rendement réel par parcelle sans ressaisie.
3. **Flux F-3 : Pointages et Présences de la Main-d'Œuvre (ERP ➔ Connect)**
   - *Données :* Feuilles de pointage des ouvriers agricoles et journaliers employés directement par le GIE LAWTAN.
   - *Effet Connect :* Agrégation dans le module C-5 pour le calcul global des jours-personnes et ETP à transmettre au bailleur.
4. **Flux F-4 : Demandes de Services Mécanisés (Connect ➔ ERP)**
   - *Données :* Demande de moissonneuse, de ballotage ou d'usinage (superficie, date souhaitée, parcelle `PAR-LWT-XXXXX-A`).
   - *Effet ERP :* Inscription au planning d'atelier, émission de l'ordre de travail et facturation officielle.

---

## 5. Correspondance Directe avec le Carnet de Collecte Terrain (Fiches F1 à F13)

Chaque écran de saisie de l'application mobile et du web correspond trait pour trait à une fiche papier du carnet :

| Réf. Fiche | Nom de la Fiche Terrain | Rubrique Associée | Destination dans le Système |
|:---:|:---|:---:|:---|
| **F1** | Adhésion au cluster | Rubrique 2 (Membres) | Table `membres` & `membre_roles` · Génération du matricule `LWT-XXXXX`. |
| **F2** | Levée de parcelle | Rubrique 3 (Parcelles) | Table `parcelles` · Tracé géodésique WGS84 & calcul de surface PostGIS. |
| **F3** | Séance de champ école | Rubrique 4 (Champs Écoles) | Table `cep_seances` · 13 thèmes officiels, objectif et observations. |
| **F4** | Feuille de présence | Rubrique 4 (Champs Écoles) | Table `cep_presences` · Pointage individuel Présent / Absent / Excusé. |
| **F5** | Essai agronomique | Rubrique 4 (Champs Écoles) | Table `cep_essais` · Comparaison placettes, densités et pesées récolte. |
| **F6** | Journée de démonstration | Rubrique 4 (Champs Écoles) | Table `demonstrations` · Fréquentation désagrégée & photo émargement. |
| **F7** | Itinéraire technique & conseil | Rubrique 5 (Campagne & Conseil) | Table `itineraires_techniques` · Doses recommandées vs appliquées. |
| **F8** | Récolte et rendement | Rubrique 5 (Campagne & Conseil) | Table `recoltes_rendements` · Calcul du rendement t/ha sur surface mesurée. |
| **F9** | Visite d'adoption | Rubriques 4 & 5 (Adoption) | Table `visites_adoption` · Constat de report des pratiques et écart rendement. |
| **F10**| Emplois et présences | Rubrique 6 (Emplois & Inclusion)| Table `emplois_presences` · Décompte jours-personnes, ETP et justificatifs. |
| **F11**| Service rendu & kit remis | Rubrique 7 (Services Membres) | Table `services_demandes` · Envoi flux F-4 ERP & suivi kits reçus. |
| **F12**| Prestataire & actes de service | Rubrique 8 (Prestataires) | Table `prestataires` & `actes_service` · Facturation & viabilité modèle. |
| **F13**| Diffusion & accusés de réception | Rubrique 9 (Communication) | Table `messages_diffusion` · Suivi d'écoute vocale/SMS & numéros faux. |

---

## 6. Modèle de Données Global PostGIS (Schéma Physique Intégré)

Le schéma ci-dessous structure l'ensemble des 12 rubriques en base de données relationnelle et spatiale :

```sql
-- =====================================================================
-- SCHEMA DE BASE DE DONNEES POSTGRESQL / POSTGIS - LAWTAN CONNECT GLOBAL
-- =====================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";
CREATE EXTENSION IF NOT EXISTS "fuzzystrmatch";

-- 1. REFERENTIELS TERRITORIAUX
CREATE TABLE ref_villages (
    id SERIAL PRIMARY KEY,
    code_village VARCHAR(20) UNIQUE NOT NULL,
    nom_village VARCHAR(100) NOT NULL,
    commune VARCHAR(100) NOT NULL,
    departement VARCHAR(100) DEFAULT 'Dagana'
);

CREATE TABLE ref_cuvettes (
    id SERIAL PRIMARY KEY,
    code_cuvette VARCHAR(30) UNIQUE NOT NULL,
    nom_cuvette VARCHAR(150) NOT NULL,
    reference_saed VARCHAR(50),
    superficie_totale_ha NUMERIC(10, 2),
    responsable_nom VARCHAR(150)
);

-- 2. MEMBRES DU CLUSTER (FICHE F1)
CREATE TABLE membres (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code_lwt VARCHAR(20) UNIQUE NOT NULL, -- LWT-00001
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    nom_phonetique VARCHAR(100),
    sexe CHAR(1) NOT NULL CHECK (sexe IN ('F', 'M')),
    date_naissance DATE,
    age_declare INTEGER,
    est_jeune BOOLEAN GENERATED ALWAYS AS (
        CASE 
            WHEN date_naissance IS NOT NULL THEN (EXTRACT(YEAR FROM CURRENT_DATE) - EXTRACT(YEAR FROM date_naissance)) BETWEEN 18 AND 35
            WHEN age_declare IS NOT NULL THEN age_declare BETWEEN 18 AND 35
            ELSE FALSE
        END
    ) STORED,
    telephone_1 VARCHAR(25) NOT NULL,
    telephone_2 VARCHAR(25),
    titulaire_tel_1 VARCHAR(50) DEFAULT 'La personne elle-même',
    village_id INTEGER REFERENCES ref_villages(id),
    quartier VARCHAR(150),
    organisation VARCHAR(150),
    identifiant_mlouma VARCHAR(50),
    situation_handicap VARCHAR(30) NOT NULL CHECK (situation_handicap IN ('Non', 'Oui', 'Ne souhaite pas répondre')),
    precision_handicap TEXT,
    num_cni VARCHAR(50),
    date_delivrance_cni DATE,
    cni_photo_url TEXT,
    consentement_signe BOOLEAN NOT NULL DEFAULT FALSE,
    signature_photo_url TEXT,
    statut_validation VARCHAR(25) DEFAULT 'VALIDE' CHECK (statut_validation IN ('A_VALIDER', 'VALIDE', 'DOUBLON_SUSPECT', 'ARCHIVE')),
    agent_collecteur VARCHAR(120),
    date_adhesion DATE NOT NULL DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE membre_roles (
    id SERIAL PRIMARY KEY,
    membre_id UUID NOT NULL REFERENCES membres(id) ON DELETE CASCADE,
    role VARCHAR(50) NOT NULL,
    date_debut DATE NOT NULL DEFAULT CURRENT_DATE,
    date_fin DATE,
    est_actif BOOLEAN DEFAULT TRUE
);

-- 3. PARCELLES ET TERRITOIRE (FICHE F2)
CREATE TABLE parcelles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code_parcelle VARCHAR(30) UNIQUE NOT NULL, -- PAR-LWT-00001-A
    membre_id UUID NOT NULL REFERENCES membres(id),
    cuvette_id INTEGER REFERENCES ref_cuvettes(id),
    casier_maille VARCHAR(50),
    reference_saed VARCHAR(50),
    campagne VARCHAR(50) NOT NULL,
    statut_foncier VARCHAR(30) NOT NULL,
    variete_installee VARCHAR(50),
    date_semis_prevue DATE,
    date_recolte_prevue DATE,
    methode_levee VARCHAR(30) NOT NULL,
    superficie_declaree_ha NUMERIC(8, 4) NOT NULL,
    superficie_mesuree_ha NUMERIC(8, 4),
    ecart_superficie_pourcent NUMERIC(6, 2),
    precision_gps_m NUMERIC(5, 2),
    operateur_nom VARCHAR(120),
    geometrie GEOMETRY(Polygon, 4326),
    croquis_photo_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_parcelles_geom ON parcelles USING GIST (geometrie);

-- 4. CHAMPS ECOLES PAYSANS - CEP (FICHES F3, F4, F5, F6)
CREATE TABLE champs_ecoles (
    id SERIAL PRIMARY KEY,
    code_cep VARCHAR(30) UNIQUE NOT NULL, -- CEP-LWT-01
    nom_site VARCHAR(150) NOT NULL,
    campagne VARCHAR(50) NOT NULL,
    cuvette_id INTEGER REFERENCES ref_cuvettes(id),
    animateur_nom VARCHAR(150) NOT NULL,
    animateur_statut VARCHAR(30) CHECK (animateur_statut IN ('INTERNE', 'SENAD', 'APS')),
    superficie_m2 NUMERIC(10, 2),
    varietes_installees TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cep_cohortes (
    id SERIAL PRIMARY KEY,
    champ_ecole_id INTEGER REFERENCES champs_ecoles(id),
    code_cohorte CHAR(1) NOT NULL, -- 'A', 'B'
    nom_cohorte VARCHAR(100)
);

CREATE TABLE cep_participants (
    id SERIAL PRIMARY KEY,
    cohorte_id INTEGER REFERENCES cep_cohortes(id),
    membre_id UUID REFERENCES membres(id),
    date_inscription DATE DEFAULT CURRENT_DATE,
    UNIQUE(cohorte_id, membre_id)
);

CREATE TABLE cep_seances (
    id SERIAL PRIMARY KEY,
    champ_ecole_id INTEGER REFERENCES champs_ecoles(id),
    cohorte_id INTEGER REFERENCES cep_cohortes(id),
    num_seance INTEGER NOT NULL CHECK (num_seance BETWEEN 1 AND 14),
    date_seance DATE NOT NULL,
    theme_nom VARCHAR(150) NOT NULL,
    stade_cultural VARCHAR(50),
    objectif_seance TEXT,
    observations_terrain TEXT,
    decisions_prises TEXT,
    animateur_nom VARCHAR(150)
);

CREATE TABLE cep_presences (
    id SERIAL PRIMARY KEY,
    seance_id INTEGER REFERENCES cep_seances(id) ON DELETE CASCADE,
    membre_id UUID REFERENCES membres(id),
    statut_presence VARCHAR(10) NOT NULL CHECK (statut_presence IN ('PRESENT', 'ABSENT', 'EXCUSE')),
    signature_url TEXT,
    UNIQUE(seance_id, membre_id)
);

CREATE TABLE cep_essais (
    id SERIAL PRIMARY KEY,
    champ_ecole_id INTEGER REFERENCES champs_ecoles(id),
    code_essai VARCHAR(30) NOT NULL,
    type_essai VARCHAR(100) NOT NULL,
    modalite_num INTEGER NOT NULL,
    traitement_applique TEXT NOT NULL,
    variete VARCHAR(50),
    surface_m2 NUMERIC(8, 2),
    hauteur_cm NUMERIC(6, 2),
    rendement_t_ha NUMERIC(5, 2),
    ecart_vs_temoin NUMERIC(5, 2)
);

-- 5. CAMPAGNE & CONSEIL AGRONOMIQUE (FICHES F7, F8, F9)
CREATE TABLE itineraires_techniques (
    id SERIAL PRIMARY KEY,
    parcelle_id UUID REFERENCES parcelles(id),
    source_recommandation VARCHAR(100) NOT NULL,
    date_recommandation DATE NOT NULL,
    conseiller_nom VARCHAR(120),
    objectif_rendement_t_ha NUMERIC(5, 2),
    element_chimique VARCHAR(50),
    dose_recommandee_kg_ha NUMERIC(8, 2),
    dose_appliquee_kg_ha NUMERIC(8, 2),
    date_application DATE,
    ecart_constate TEXT
);

CREATE TABLE recoltes_rendements (
    id SERIAL PRIMARY KEY,
    parcelle_id UUID REFERENCES parcelles(id),
    date_debut_recolte DATE,
    date_fin_recolte DATE,
    mode_recolte VARCHAR(50),
    superficie_recoltee_ha NUMERIC(8, 4) NOT NULL,
    poids_total_kg NUMERIC(10, 2) NOT NULL,
    humidite_pourcent NUMERIC(4, 2),
    methode_pesee VARCHAR(50),
    rendement_calcule_t_ha NUMERIC(5, 2) NOT NULL, -- Poids / Superficie mesurée
    rendement_campagne_precedente_t_ha NUMERIC(5, 2)
);

CREATE TABLE visites_adoption (
    id SERIAL PRIMARY KEY,
    membre_id UUID REFERENCES membres(id),
    parcelle_id UUID REFERENCES parcelles(id),
    champ_ecole_suivi_id INTEGER REFERENCES champs_ecoles(id),
    date_visite DATE NOT NULL,
    visiteur_nom VARCHAR(120),
    pratique_evaluee VARCHAR(150) NOT NULL,
    niveau_adoption VARCHAR(20) NOT NULL CHECK (niveau_adoption IN ('TOTALEMENT', 'PARTIELLEMENT', 'PAS_APPLIQUEE')),
    motif_non_adoption TEXT,
    rendement_cette_campagne_t_ha NUMERIC(5, 2),
    rendement_precedent_t_ha NUMERIC(5, 2),
    pratique_diffusee_a_tiers VARCHAR(50),
    photo_parcelle_url TEXT,
    observations TEXT
);

-- 6. EMPLOIS ET INCLUSION (FICHE F10)
CREATE TABLE emplois_presences (
    id SERIAL PRIMARY KEY,
    employeur VARCHAR(150) NOT NULL,
    site_lieu VARCHAR(150) NOT NULL,
    periode_du DATE NOT NULL,
    periode_au DATE NOT NULL,
    nature_activite VARCHAR(150),
    type_emploi VARCHAR(30) CHECK (type_emploi IN ('PRIMAIRE', 'SECONDAIRE')),
    regime VARCHAR(30) CHECK (regime IN ('PERMANENT', 'SAISONNIER', 'JOURNALIER')),
    membre_id UUID REFERENCES membres(id),
    nb_jours_travailles NUMERIC(5, 2) NOT NULL,
    justificatif_type VARCHAR(30) CHECK (justificatif_type IN ('LISTE_EMARGEMENT', 'CONTRAT', 'PHOTO', 'MANQUANT')),
    justificatif_photo_url TEXT
);

-- 7. SERVICES AUX MEMBRES & ERP (FICHE F11)
CREATE TABLE services_demandes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    membre_id UUID REFERENCES membres(id),
    parcelle_id UUID REFERENCES parcelles(id),
    nature_operation VARCHAR(50) NOT NULL, -- 'DEMANDE_SERVICE', 'KIT_INTRANTS', 'AVANCE'
    service_demande VARCHAR(100), -- 'MOISSONNAGE', 'BALLOTAGE', 'FACON', 'USINAGE'
    date_souhaitee DATE,
    statut_erp VARCHAR(30) DEFAULT 'EN_ATTENTE_SYNC', -- F-4
    article_kit VARCHAR(100),
    quantite_demandee NUMERIC(10, 2),
    quantite_obtenue NUMERIC(10, 2),
    date_remise DATE,
    echeance_remboursement DATE,
    signature_reception_url TEXT
);

-- 8. PRESTATAIRES DE SERVICES (FICHE F12)
CREATE TABLE prestataires (
    id SERIAL PRIMARY KEY,
    membre_id UUID UNIQUE REFERENCES membres(id),
    formation_suivie VARCHAR(150),
    date_formation DATE,
    habilitation_validite DATE,
    specialite VARCHAR(100),
    equipement_detenu TEXT
);

CREATE TABLE actes_service (
    id SERIAL PRIMARY KEY,
    prestataire_id INTEGER REFERENCES prestataires(id),
    producteur_servi_id UUID REFERENCES membres(id),
    date_acte DATE NOT NULL,
    nature_acte VARCHAR(150) NOT NULL,
    duree_heures NUMERIC(4, 2),
    tarif_fcfa NUMERIC(10, 2),
    est_encaisse BOOLEAN DEFAULT FALSE
);

-- 9. COMMUNICATION MULTILINGUE (FICHE F13)
CREATE TABLE messages_diffusion (
    id SERIAL PRIMARY KEY,
    date_envoi TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    objet VARCHAR(150) NOT NULL,
    canal VARCHAR(30) CHECK (canal IN ('SMS', 'VOCAL', 'APPEL', 'REUNION')),
    langue VARCHAR(20) CHECK (langue IN ('FRANCAIS', 'WOLOF', 'PULAAR')),
    contenu_texte TEXT,
    fichier_audio_url TEXT,
    nb_destinataires_vises INTEGER DEFAULT 0,
    nb_reçus INTEGER DEFAULT 0,
    nb_sans_reponse INTEGER DEFAULT 0,
    nb_numeros_errones INTEGER DEFAULT 0
);

-- 10. AUDIT ET PISTE DE CONFORMITE
CREATE TABLE audit_logs (
    id BIGSERIAL PRIMARY KEY,
    entite VARCHAR(50) NOT NULL,
    entite_id VARCHAR(100) NOT NULL,
    action VARCHAR(20) NOT NULL CHECK (action IN ('INSERT', 'UPDATE', 'SOFT_DELETE', 'MERGE', 'SYNC')),
    utilisateur VARCHAR(100) NOT NULL,
    valeurs_precedentes JSONB,
    valeurs_nouvelles JSONB,
    motif_action TEXT,
    ip_source VARCHAR(45),
    timestamp_action TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

---

## 7. Matrice des Cibles Contractuelles d'Impact (MEDA / GESI / YIW)

Le système calcule en temps réel la conformité aux objectifs fixés dans la convention de subvention :

```
                                  CIBLES CONTRACTUELLES RIZAO
┌───────────────────────────────────────┬────────────┬────────────────────────────┐
│ Indicateur de Performance             │ Cible      │ Mécanisme de Suivi Connect │
├───────────────────────────────────────┼────────────┼────────────────────────────┤
│ Part de Jeunes Femmes (JF)            │ ≥ 50 %     │ Calculé sur Date Naissance │
│ Part Totale Jeunes 18–35 ans (YIW)    │ ≥ 70 %     │ Bloquant si non documenté  │
│ Inclusion Personnes avec Handicap     │ ≥ 5 %      │ Fiche F1 (Oui/Non/Détail)  │
│ Superficies Mesurées vs Déclarées     │ Écart < 10%│ Moteur SIG PostGIS         │
│ Adoption des Pratiques après CEP      │ ≥ 60 %     │ Fiche F9 Visite Adoption   │
│ Rapprochement Usine (Paddy livré)     │ 100 %      │ Flux F-2 avec ERP LAWTAN   │
└───────────────────────────────────────┴────────────┴────────────────────────────┘
```

---

## 8. Plan Global de Déploiement et Recette Terrain

Pour déployer la totalité des 12 rubriques sans perturber le cycle agricole, l'implémentation est séquencée selon le calendrier cultural :

```
CAMPAGNE HIVERNAGE 2026-2027
Mois 1 (J1-J25)    : Socle & Terres (Membres C-1, Parcelles C-2, Mobile Offline C-3, Config C-12)
Mois 2             : Pédagogie & Formation (Champs Écoles C-4, Présences F4, Essais F5)
Mois 3             : Suivi Cultural & Climat (Itinéraires C-6/C-7, Diffusion SMS/Vocal C-8)
Mois 4             : Récolte & Impact (Rendements F8, Adoption F9, Emplois GESI C-5, Restitution C-10)
Mois 5             : Économie & Services (Services C-9, Prestataires C-10, Flux complets ERP F-1 à F-4)
```

### Jalons de Recette Fonctionnelle
1. **Recette Terrain 1 :** Campagne d'enrôlement test de 200 membres et 150 parcelles à Mboundoum-Barrage avec l'application mobile hors-ligne.
2. **Recette Terrain 2 :** Cycle complet d'un Champ École Paysan (14 séances pointées avec la fiche F4 et transmission des présences).
3. **Recette Données & Audit :** Édition du rapport consolidé de suivi-évaluation pour la revue trimestrielle de MEDA, avec vérification de la non-altération des pistes d'audit.
4. **Recette Inter-Systèmes :** Test de bout en bout des 4 flux d'échange avec l'ERP LAWTAN (référentiel tiers, historique de pesée usine et demandes de moissonneuse).

---

*Ce document constitue le référentiel complet et exhaustif du MVP Global de LAWTAN Connect.*
