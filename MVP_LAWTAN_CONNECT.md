# GIE LAWTAN · CLUSTER DE MBOUNDOUM-BARRAGE
## Programme RIZAO — Pilier 2 (Sénégal)

# DOCUMENT DE SPÉCIFICATION & CADRAGE DU MVP
### Système de Gestion Intégré du Cluster : LAWTAN Connect (Jalon 1)

---

| **Document** | Spécifications Fonctionnelles et Techniques du MVP (Jalon 1) |
|:---|:---|
| **Projet** | LAWTAN Connect |
| **Organisation** | GIE LAWTAN (Mboundoum-Barrage, Département de Dagana, Région de Saint-Louis) |
| **Cadre Institutionnel** | Programme RIZAO – Pilier 2 (Partenaires : MEDA, SAED, SENAD, PMO mLouma) |
| **Version** | 1.0 — Version Officielle de Cadrage |
| **Date** | Septembre 2026 |
| **Statut** | Prêt pour validation & développement |

---


## 1. Contexte Stratégique & Capitalisation de la Phase 1

### 1.1 Cadre du Projet
Le **GIE LAWTAN**, situé à Mboundoum-Barrage dans le département de Dagana (delta du fleuve Sénégal), est un acteur agro-industriel et coopératif majeur de la filière rizicole. Dans le cadre du **Programme RIZAO (Pilier 2)** soutenu par **MEDA**, le GIE LAWTAN fédère un cluster de producteurs partenaires pour sécuriser les approvisionnements en paddy, diffuser les Bonnes Pratiques Agricoles (BPA) et générer des emplois décents pour les jeunes et les femmes.

Pour piloter ce réseau paysan, la plateforme **LAWTAN Connect** est conçue pour remplacer les formulaires manuels et unifier le suivi technique, social et géographique du cluster.

### 1.2 Leçons Apprises de la Phase 1 (Bilan PMO mLouma)
La mise en œuvre de la Phase 1 du Programme RIZAO (2025–2026) par le PMO mLouma sur 11 clusters a permis d'enrôler 4 051 producteurs et de former 45 relais numériques. Cependant, le bilan stratégique a mis en exergue des contraintes majeures de terrain qui dictent directement la conception de ce MVP :

1. **Faiblesse structurelle de la connectivité Internet :** Les applications dépendantes du réseau mobile ont échoué sur les parcelles ou ralenti les opérations.  
   ➔ *Réponse LAWTAN Connect :* **Architecture 100 % "Offline-First"**. L'application terrain fonctionne sans aucun réseau et synchronise ses données ultérieurement.
2. **Hétérogénéité et précarité des équipements :** Les téléphones personnels des relais manquent de puissance et de mémoire.  
   ➔ *Réponse LAWTAN Connect :* Application Android ultra-légère, optimisée pour les terminaux d'entrée de gamme, sans composants gourmands.
3. **Erreurs de collecte et doublons :** Le réenrôlement involontaire d'une même personne sous différents statuts a faussé certains comptages du bailleur.  
   ➔ *Réponse LAWTAN Connect :* Règle absolue **« Une personne = Une fiche unique »** avec détection active phonétique et contrôle du numéro de téléphone.
4. **Contraintes de littératie :** Certains membres et relais rencontrent des difficultés avec la lecture du français écrit.  
   ➔ *Réponse LAWTAN Connect :* Ergonomie visuelle, saisie assistée par listes fermées, temps de saisie < 90 secondes, transition par QR code.
5. **Cibles contractuelles d'inclusion strictes (MEDA / GESI / YIW) :** Exigence d'atteindre 70 % de jeunes (18–35 ans) et de femmes, et 5 % de personnes en situation de handicap.  
   ➔ *Réponse LAWTAN Connect :* Intégration native des métriques GESI dès le formulaire d'adhésion, interdisant les valeurs manquantes ou masquées par des zéros.
6. **Passage à l'échelle Phase 2 :** Le GIE LAWTAN est explicitement mandaté (Recommandation 5 du Bilan mLouma) pour accueillir la duplication du modèle digitalisé en 2026–2027.

---

## 2. Vision, Principes Directeurs & Périmètre du MVP

### 2.1 La Frontière Infranchissable : Cluster vs Entreprise
Une règle fondatrice régit LAWTAN Connect :
- **LAWTAN Connect gère le CLUSTER :** Les adhérents, leurs parcelles, les champs écoles, l'adoption des conseils techniques et les indicateurs d'impact du programme.
- **L'ERP LAWTAN gère l'ENTREPRISE :** L'usinage du paddy, les stocks physiques, la balance de pesée, le parc de machines agricoles, la facturation, la trésorerie et la paie restent intégralement dans l'**ERP LAWTAN**.
- **Règle d'or :** *LAWTAN Connect ne facture jamais et n'émet aucun bon de paiement direct.*

```
┌─────────────────────────────────────────────────────────────┐
│                    LAWTAN CONNECT (Cluster)                 │
│  • Registre des Membres (LWT-XXXXX) & Organisations         │
│  • Parcelles (PAR-LWT-XXXXX-A) & SIG PostGIS                │
│  • Application Mobile Android Hors-Ligne (Terrain)          │
│  • Configuration territoriale & Piste d'audit immuable      │
└──────────────────────────────┬──────────────────────────────┘
                               │  Flux F-1 / F-2
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                     ERP LAWTAN (Entreprise)                 │
│  • Gestion Commerciale & Facturation                        │
│  • Suivi Réception Usine (Paddy, Humidité, Pesée)           │
│  • Parc Matériel, Moissonneuses & Ateliers                  │
│  • Comptabilité, Stocks et Trésorerie                       │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Périmètre Sélectionné pour le MVP (Jalon 1)
Le MVP regroupe l'ensemble des modules du **Jalon 1** de la cartographie fonctionnelle, indispensables pour lancer la campagne d'enrôlement 2026–2027 et numériser les fiches papier **F1** (Adhésion) et **F2** (Levée de parcelle) du Carnet de Collecte :

| Réf. Module | Intitulé | Cible Utilisateur | Environnement | Écrans couverts |
|:---:|:---|:---|:---:|:---:|
| **C-1** | **Membres du cluster** | Agents, Superviseurs, Direction | Web (Bureau) | 8 écrans |
| **C-2** | **Parcelles et territoire** | Géomètres, Agents, Agronomes | Web & SIG | 7 écrans |
| **C-3** | **Application de terrain** | Relais numériques, Agents terrain | Mobile Android Offline | 6 flux |
| **C-12**| **Configuration & Sécurité** | Administrateur, Auditeur | Web (Bureau) | 7 écrans |

Les modules ultérieurs (Champs écoles C-4, Emplois C-5, Conseil C-7, Communication C-8, Services C-9, Prestataires C-10) seront greffés sur ce socle lors des Jalons 2, 3 et 4.

---

## 3. Spécifications Fonctionnelles Détaillées (Jalon 1)

### 3.1 Module C-1 : Registre Central des Membres du Cluster

Le module C-1 est le garant de la vérité sur les bénéficiaires.

#### Règle Fondatrice : L'Unicité de la Personne
- Une personne physique ne possède qu'**une seule fiche** dans toute la base.
- Si une personne est à la fois productrice, participante à un champ école et salariée saisonnière du GIE, elle conserve sa fiche unique et cumule plusieurs **rôles datés**.
- Un identifiant pérenne unique est attribué au format : **`LWT-00001`**. Cet identifiant n'est jamais réattribué ni supprimé.

#### Spécification des Champs (Calqués sur la Fiche Terrain F1)
1. **Identification :**
   - Matricule `LWT-XXXXX`
   - Date d'adhésion officielle
   - Nom de l'agent collecteur et lieu de l'entretien
2. **État Civil & Inclusion (GESI) :**
   - Nom et Prénom
   - Sexe (Femme / Homme)
   - Date de naissance exacte (avec calcul dynamique de l'âge) OU Âge déclaré (si la date est inconnue)
   - Indicateur automatique : Jeune (18–35 ans inclus au premier jour de la campagne)
   - Situation de handicap : `Non` / `Oui` (avec champ précision obligatoire) / `Ne souhaite pas répondre`. *Ce champ ne peut jamais rester vide.*
3. **Coordonnées & Territoire :**
   - Téléphone principal (normalisé automatiquement en `+221 XX XXX XX XX`)
   - Titulaire de la ligne : `La personne elle-même` / `Un proche (avec précision)`
   - Téléphone secondaire (optionnel)
   - Département : `Dagana` (par défaut)
   - Commune et Village de rattachement (issus du référentiel fermé)
   - Quartier / Lieu-dit
4. **Rôles dans le Cluster (Multi-sélection datée) :**
   - Producteur membre
   - Producteur non membre
   - Participant champ école
   - Prestataire de services
   - Salarié du GIE
   - Transformateur
   - Commerçant
5. **Situation Agricole Déclarée :**
   - Superficie totale exploitée (ha)
   - Nombre de parcelles détenues
   - Identifiant mLouma (si existant, assurant la continuité Phase 1 / Phase 2)
   - Organisation paysanne ou groupement de rattachement
6. **Conformité & Pièce d'Identité :**
   - Numéro de CNI / CEDEAO
   - Date de délivrance
   - Photographie de la CNI (recto-verso) horodatée et géolocalisée
   - Consentement formel signé (case à cocher et photo de la signature) pour le traitement des données dans le cadre de RIZAO

#### Algorithme de Détection des Doublons
Pour prévenir la pollution de la base constatée en Phase 1, le système déclenche une alerte de doublon potentiel dès qu'une concordance est détectée selon l'un des critères :
- Numéro de téléphone normalisé identique.
- Score de similarité phonétique supérieur à 85 % (Double Metaphone / Levenshtein adapté aux patronymes sénégalais : Ba, Sall, Niang, Diop, Fall, etc.) combiné à la même année de naissance et au même village.
- En cas de suspicion, la fiche passe au statut `DOUBLON_SUSPECT`. Un écran d'arbitrage dédié permet à un superviseur de comparer les deux profils et de valider ou rejeter la fusion.

#### Cartes de Membres & QR Code
- Génération d'une carte de membre avec photo, nom, code `LWT-XXXXX`, village et QR code sécurisé.
- Le QR code contient une signature numérique permettant à l'application mobile terrain de lire et d'authentifier le membre en 1 seconde sans réseau Internet.

---

### 3.2 Module C-2 : Parcelles et Territoire (SIG & Foncier)

Le module C-2 ancre physiquement le cluster dans les cuvettes rizicoles de Dagana.

#### Règle Fondatrice : La Dissociation Mesuré vs Déclaré
Les déclarations paysannes d'emblavures présentent fréquemment un écart de 10 % à 25 % par rapport à la réalité topographique. LAWTAN Connect enregistre et affiche systématiquement les deux valeurs :
- **Superficie Déclarée :** Valeur annoncée par le producteur lors de l'adhésion.
- **Superficie Mesurée :** Aire surfacique exacte calculée automatiquement par le moteur SIG PostGIS à partir du polygone fermé relevé sur le terrain.
- **Écart (%) :** Calculé automatiquement : `((Mesurée - Déclarée) / Déclarée) * 100`. Une alerte visuelle se déclenche si l'écart dépasse 10 %.

#### Spécification des Champs (Calqués sur la Fiche Terrain F2)
1. **Identification de la Parcelle :**
   - Code Parcelle normé : **`PAR-LWT-00001-A`** (Index alphabétique incrémental lié au membre).
   - Membre exploitant rattaché (`LWT-XXXXX`).
   - Campagne agricole (ex. `Hivernage 2026–2027`).
2. **Localisation & Aménagement SAED :**
   - Cuvette ou Aménagement (ex. Mboundoum-Barrage, Thiagar, Kassack, etc.).
   - Référence cadastrale SAED (si existante).
   - Casier ou Maille d'irrigation.
   - Village d'attache.
3. **Statut Foncier & Pratiques :**
   - Régime foncier : `Propriété`, `Affectation`, `Location`, `Prêt`, `Autre`.
   - Variété de riz installée (Sahel 108, Sahel 134, Sahel 201, Sahel 202, etc.).
   - Date de semis prévue et Date de récolte prévue.
4. **Données Géométriques de Levée :**
   - Méthode de levée : `Contour marché à pied` (recommandé) ou `Quatre coins relevés`.
   - Liste ordonnée des coordonnées GPS (Latitude, Longitude en degrés décimaux WGS84, Précision en mètres).
   - Précision moyenne affichée par le récepteur GPS (ex. 2,5 m).
   - Horodatage de début et fin de levée, modèle d'appareil et nom de l'opérateur.
   - Photo du croquis manuel de la parcelle (repères : canaux d'irrigation, pistes, parcelles mitoyennes).

#### Contrôles Topologiques Automatiques (PostGIS)
À chaque enregistrement ou synchronisation de parcelle, le serveur exécute trois contrôles de cohérence :
1. **Détection de Chevauchement :** Alerte immédiate si le polygone intersecte une parcelle existante à plus de 2 % de sa surface.
2. **Contrôle de Continuité Temporelle :** Si la parcelle a déjà été levée lors d'une campagne précédente, alerte si la nouvelle superficie varie de plus de 5 % par rapport à la levée historique.
3. **Contrôle d'Isolement :** Alerte si une parcelle est enregistrée sans exploitant rattaché valide.

#### Passerelle d'Importation SIG
Pour éviter toute double saisie des données déjà collectées par les partenaires :
- Module d'import direct de fichiers **GeoJSON**, **KML**, **GPX**, et tables attributaires **CSV/Excel**.
- Compatibilité native avec les exports **KoboCollect** et **QField** utilisés par la SAED et les équipes MEDA.

---

### 3.3 Module C-3 : Application Mobile Terrain (Android Offline)

L'application mobile est l'instrument de travail quotidien des agents de terrain et des relais numériques.

#### Contraintes Techniques Impératives
- **Fonctionnement 100 % Autonome :** Aucune requête réseau n'est bloquante pour l'utilisation de l'application.
- **Vitesse d'Exécution :** La saisie complète d'une adhésion F1 doit être exécutée en **moins de 90 secondes**.
- **Consommation d'Énergie Réduite :** Optimisation de l'usage de la puce GPS (mode haute précision activé uniquement pendant la levée de la parcelle).
- **Compression d'Images Embarquée :** Réduction automatique des photos de CNI et signatures (formats JPEG compressés < 250 Ko) pour ne pas saturer la mémoire de l'appareil ni la bande passante lors de la synchronisation.

#### Fonctionnalités Embarquées du MVP
1. **Adhésion Hors-Ligne (Fiche F1) :**
   - Formulaire en 3 étapes avec masques de saisie.
   - Capture photo de la CNI avec détection de cadrage.
   - Signature tactile sur écran du consentement éclairé.
   - Attribution d'un **matricule provisoire local** (ex. `TEMP-LWT-8721`), transformé en `LWT-XXXXX` définitif lors de la synchronisation serveur.
2. **Levée de Parcelle GPS (Fiche F2) :**
   - Interface de guidage pour le contour marché : affichage en temps réel de la trace sur fond de carte vectoriel hors-ligne.
   - Calcul instantané de la superficie en hectares sur l'écran du mobile.
   - Alerte visuelle si la précision GPS se dégrade au-delà de 5 mètres (signalant à l'agent de ralentir).
3. **Consultation & Scanner QR :**
   - Recherche locale instantanée dans le registre des membres préchargé sur l'appareil.
   - Scanner de carte de membre via caméra pour afficher immédiatement le profil et les parcelles associées.
4. **Moteur de Synchronisation Différée :**
   - File d'attente locale stockant chaque transaction avec son horodatage d'origine.
   - Déclenchement automatique dès détection d'une connexion Wi-Fi ou 4G stable, ou déclenchement manuel par l'agent.
   - En cas de conflit (ex. modification simultanée d'un profil sur le serveur et sur le mobile), **la donnée n'est jamais écrasée en silence** : un événement de divergence est créé pour arbitrage humain au bureau.

---

### 3.4 Module C-12 / Transverse : Configuration, Sécurité & Audit

Ce module assure la gouvernance technique et la pérennité institutionnelle du système.

#### Référentiels Métier Fermés et Versionnés
Aucun terme structurant n'est saisi en texte libre. L'application s'appuie sur des tables de référence administrables au bureau :
- **Territoire :** Départements (Dagana), Communes (Ross Béthio, Ronkh, Ngnith, Diama, Bokhol, Dagana), Liste officielle des villages.
- **Hydro-agricole :** Liste des cuvettes, périmètres d'aménagement et références SAED.
- **Variétés culturales :** Catalogue homologué des variétés de riz (Sahel 108, Sahel 134, etc.) avec cycles végétatifs théoriques.
- **Règle absolue :** *Une valeur de référentiel déjà liée à une fiche de membre ou à une parcelle ne peut jamais être supprimée.* Elle peut uniquement être marquée comme "archivée" pour les futures saisies.

#### Sécurité et Contrôle d'Accès Basé sur les Rôles (RBAC)
Quatre profils d'utilisateurs stricts sont définis :
1. **Agent Collecteur (Mobile) :** Saisie terrain, levée de parcelle, consultation locale, envoi de paquets de synchronisation.
2. **Superviseur / Agronome (Web) :** Validation des fiches terrain, arbitrage des doublons, consultation des cartes SIG, export des listes.
3. **Administrateur Cluster (Web) :** Gestion des comptes, configuration des référentiels, paramétrage des campagnes, audit système.
4. **Bailleur / Auditeur (Web - Lecture Seule) :** Consultation des tableaux de bord agrégés, indicateurs d'inclusion GESI, traçabilité des pièces justificatives sans accès nominatif non motivé.

#### Piste d'Audit Immuable (Audit Trail)
- Toute opération de création, mise à jour, fusion ou tentative de suppression fait l'objet d'une écriture immédiate dans la table `audit_logs`.
- L'enregistrement comprend : Identifiant de l'entité, type d'action, utilisateur responsable, date et heure au millième de seconde, adresse IP/identifiant terminal, état JSON avant modification et état JSON après modification.
- **Suppression Physique Interdite :** Les fiches de membres ou parcelles ne subissent jamais de commande SQL `DELETE`. Une suppression demandée (droit à l'oubli) passe par un `SOFT_DELETE` avec motif obligatoire, validation par un administrateur et traçabilité indélébile.

---

## 4. Interfaces et Flux d'Échange avec l'ERP LAWTAN

Conformément à la cartographie fonctionnelle, le MVP initialise les deux premiers flux d'échange avec le système de gestion de l'entreprise (`agro-erp`) :

```
                  ┌──────────────────────┐
                  │    LAWTAN CONNECT    │
                  └──────────┬───────────┘
                             │
            FLUX F-1         │         FLUX F-2
     Synchronisation Tiers   │   Contrôle d'Éligibilité
   (Membres <-> Fournisseurs)│   & Historique Livraisons
                             ▼
                  ┌──────────────────────┐
                  │      ERP LAWTAN      │
                  │   (com.agrolawtan)   │
                  └──────────────────────┘
```

1. **Flux F-1 : Synchronisation du Référentiel Tiers (Sens Connect ➔ ERP)**
   - *Finalité :* Dès qu'un membre du cluster est validé avec le rôle `PRODUCTEUR_MEMBRE`, son identifiant `LWT-XXXXX`, son nom, son numéro de téléphone et son village sont transmis à l'ERP pour créer ou lier le compte "Fournisseur de paddy / Client usinage".
   - *Fréquence :* Quotidienne ou sur événement de validation.
2. **Flux F-2 : Lecture des Livraisons d'Usine (Sens ERP ➔ Connect)**
   - *Finalité :* LAWTAN Connect ne gère pas la pesée usine. Pour évaluer la fidélité du membre et préparer les indicateurs de campagne, Connect interroge l'ERP en lecture seule pour récupérer le volume de paddy réellement livré à l'usine par le producteur `LWT-XXXXX`.
   - *Fréquence :* Consultation asynchrone lors de l'ouverture du dossier membre.

---

## 5. Architecture Technique & Modèle de Données (PostGIS)

### 5.1 Architecture Applicative Recommandée

```
┌────────────────────────────────────────────────────────────────────────┐
│                        POSTE BUREAU (Navigateur Web)                   │
│         Single Page Application : Angular 18+ / Leaflet GIS            │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ HTTPS / REST JSON
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                      SERVEUR D'APPLICATION BACKEND                     │
│               Java Spring Boot 3.x (Spring Security, JPA)              │
│               Module Métier Cluster + Moteur de Sync Offline           │
└───────────────────┬────────────────────────────────┬───────────────────┘
                    │                                │
                    ▼ SQL / PostGIS                  ▼ S3 API
┌───────────────────────────────────┐    ┌───────────────────────────────┐
│     BASE DE DONNÉES CENTRALE      │    │    STOCKAGE OBJETS (MINIO)    │
│  PostgreSQL 16 + Extension PostGIS│    │  Photos CNI, signatures,     │
│  Tables relationnelles & Spatiales│    │  croquis parcellaires         │
└───────────────────────────────────┘    └───────────────────────────────┘
                    ▲
                    │ Sync Asynchrone (JSON chiffré)
┌───────────────────┴────────────────────────────────────────────────────┐
│                    TERMINAL TERRAIN (Smartphone Android)               │
│          Application Native Flutter (ou React Native SQLite)           │
│          Base Embarquée SQLite / Chiffrement SQLCipher                 │
└────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Schéma Physique des Données du MVP (Script SQL DDL)

```sql
-- =====================================================================
-- SCHEMA DE BASE DE DONNEES POSTGRESQL / POSTGIS - MVP LAWTAN CONNECT
-- =====================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";
CREATE EXTENSION IF NOT EXISTS "fuzzystrmatch"; -- Pour détection de doublons Soundex

-- 1. REFERENTIEL : VILLAGES
CREATE TABLE ref_villages (
    id SERIAL PRIMARY KEY,
    code_village VARCHAR(20) UNIQUE NOT NULL,
    nom_village VARCHAR(100) NOT NULL,
    commune VARCHAR(100) NOT NULL,
    departement VARCHAR(100) NOT NULL DEFAULT 'Dagana',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. REFERENTIEL : CUVETTES & AMENAGEMENTS
CREATE TABLE ref_cuvettes (
    id SERIAL PRIMARY KEY,
    code_cuvette VARCHAR(30) UNIQUE NOT NULL,
    nom_cuvette VARCHAR(150) NOT NULL,
    reference_saed VARCHAR(50),
    superficie_totale_ha NUMERIC(10, 2),
    responsable_cuvette VARCHAR(150),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. TABLE PRINCIPALE : MEMBRES DU CLUSTER
CREATE TABLE membres (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code_lwt VARCHAR(20) UNIQUE NOT NULL, -- Format LWT-00001
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    nom_phonetique VARCHAR(100), -- Clé phonétique calculée
    sexe CHAR(1) NOT NULL CHECK (sexe IN ('F', 'M')),
    date_naissance DATE,
    age_declare INTEGER,
    est_jeune BOOLEAN GENERATED ALWAYS AS (
        CASE 
            WHEN date_naissance IS NOT NULL THEN 
                (EXTRACT(YEAR FROM CURRENT_DATE) - EXTRACT(YEAR FROM date_naissance)) BETWEEN 18 AND 35
            WHEN age_declare IS NOT NULL THEN 
                age_declare BETWEEN 18 AND 35
            ELSE FALSE
        END
    ) STORED,
    telephone_1 VARCHAR(25) NOT NULL, -- Format +221XXXXXXXXX
    telephone_2 VARCHAR(25),
    titulaire_tel_1 VARCHAR(50) DEFAULT 'La personne elle-même',
    village_id INTEGER REFERENCES ref_villages(id),
    quartier_lieu_dit VARCHAR(150),
    organisation VARCHAR(150),
    identifiant_mlouma VARCHAR(50),
    situation_handicap VARCHAR(30) NOT NULL CHECK (situation_handicap IN ('Non', 'Oui', 'Ne souhaite pas répondre')),
    precision_handicap TEXT,
    num_cni VARCHAR(50),
    date_delivrance_cni DATE,
    cni_photo_url TEXT,
    consentement_signe BOOLEAN NOT NULL DEFAULT FALSE,
    signature_photo_url TEXT,
    statut_validation VARCHAR(25) NOT NULL DEFAULT 'A_VALIDER' CHECK (statut_validation IN ('A_VALIDER', 'VALIDE', 'DOUBLON_SUSPECT', 'ARCHIVE')),
    agent_collecteur_nom VARCHAR(120),
    date_adhesion DATE NOT NULL DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. TABLE HISTORIQUE DES ROLES DU MEMBRE
CREATE TABLE membre_roles (
    id SERIAL PRIMARY KEY,
    membre_id UUID NOT NULL REFERENCES membres(id) ON DELETE CASCADE,
    role VARCHAR(50) NOT NULL CHECK (role IN (
        'PRODUCTEUR_MEMBRE', 
        'PRODUCTEUR_NON_MEMBRE', 
        'PARTICIPANT_CEP', 
        'SALARIE_GIE', 
        'PRESTATAIRE_SERVICE', 
        'TRANSFORMATEUR', 
        'COMMERCANT', 
        'AUTRE'
    )),
    date_debut DATE NOT NULL DEFAULT CURRENT_DATE,
    date_fin DATE,
    est_actif BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. TABLE DES PARCELLES (AVEC GEOMETRIE SPATIALE POSTGIS)
CREATE TABLE parcelles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code_parcelle VARCHAR(30) UNIQUE NOT NULL, -- Format PAR-LWT-00001-A
    membre_id UUID NOT NULL REFERENCES membres(id),
    cuvette_id INTEGER REFERENCES ref_cuvettes(id),
    casier_maille VARCHAR(50),
    reference_saed VARCHAR(50),
    campagne VARCHAR(50) NOT NULL,
    statut_foncier VARCHAR(30) NOT NULL CHECK (statut_foncier IN ('PROPRIETE', 'AFFECTATION', 'LOCATION', 'PRET', 'AUTRE')),
    variete_installee VARCHAR(50),
    date_semis_prevue DATE,
    date_recolte_prevue DATE,
    methode_levee VARCHAR(30) NOT NULL CHECK (methode_levee IN ('CONTOUR_MARCHE', 'QUATRE_COINS', 'IMPORT_SIG')),
    superficie_declaree_ha NUMERIC(8, 4) NOT NULL,
    superficie_mesuree_ha NUMERIC(8, 4),
    ecart_superficie_pourcent NUMERIC(6, 2),
    precision_gps_m NUMERIC(5, 2),
    operateur_nom VARCHAR(120),
    date_levee DATE NOT NULL DEFAULT CURRENT_DATE,
    geometrie GEOMETRY(Polygon, 4326), -- Polygone WGS84
    croquis_photo_url TEXT,
    statut_coherence VARCHAR(30) DEFAULT 'VALIDE' CHECK (statut_coherence IN ('VALIDE', 'CHEVAUCHEMENT', 'DIVERGENCE_SURFACE', 'A_VERIFIER')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index spatial pour les requêtes SIG rapides
CREATE INDEX idx_parcelles_geometrie ON parcelles USING GIST (geometrie);

-- 6. PISTE D'AUDIT IMMUABLE
CREATE TABLE audit_logs (
    id BIGSERIAL PRIMARY KEY,
    entite VARCHAR(50) NOT NULL,
    entite_id VARCHAR(100) NOT NULL,
    action VARCHAR(20) NOT NULL CHECK (action IN ('INSERT', 'UPDATE', 'SOFT_DELETE', 'MERGE', 'SYNC_PUSH')),
    utilisateur VARCHAR(100) NOT NULL,
    valeurs_precedentes JSONB,
    valeurs_nouvelles JSONB,
    motif_action TEXT,
    ip_source VARCHAR(45),
    terminal_info TEXT,
    timestamp_action TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. JOURNAL DES SYNCHRONISATIONS TERRAIN
CREATE TABLE sync_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    terminal_id VARCHAR(100) NOT NULL,
    agent_nom VARCHAR(120) NOT NULL,
    date_sync_debut TIMESTAMP WITH TIME ZONE NOT NULL,
    date_sync_fin TIMESTAMP WITH TIME ZONE,
    nb_membres_recus INTEGER DEFAULT 0,
    nb_parcelles_recues INTEGER DEFAULT 0,
    nb_conflits_detectes INTEGER DEFAULT 0,
    statut_session VARCHAR(25) NOT NULL CHECK (statut_session IN ('EN_COURS', 'SUCCES', 'AVEC_CONFLITS', 'ECHEC')),
    details_erreur TEXT
);
```

---

## 6. Parcours Utilisateurs Clés & Scénarios Opérationnels

### Scénario 1 : Enrôlement Terrain d'un Membre par un Agent (Mode Déconnecté)
1. **Démarrage :** L'agent arrive dans le village de Mboundoum. L'application mobile est active en mode hors-ligne.
2. **Saisie guidée :** L'agent ouvre le formulaire F1. Il renseigne l'état civil, sélectionne le village dans la liste locale, saisit le numéro de téléphone portable et coche la situation de handicap.
3. **Capture CNI & Consentement :** L'application active la caméra, cadre la CNI et la compresse automatiquement à 180 Ko. Le producteur appose sa signature du doigt sur l'écran tactile.
4. **Validation instantanée :** En 75 secondes, l'adhésion est enregistrée localement avec le code temporaire `TEMP-LWT-0142`.

### Scénario 2 : Levée Géométrique d'une Parcelle au Contour Marché
1. **Positionnement :** L'agent se place à l'angle Nord-Est de la parcelle dans le casier SAED.
2. **Initialisation GPS :** L'agent clique sur "Démarrer levée contour". L'application vérifie la précision du signal GPS (2,3 mètres, signal vert).
3. **Parcours :** L'agent marche le long des diguettes entourant la rizière. L'application capture un point géodésique tous les 3 mètres ou lors de chaque changement d'angle.
4. **Bouclage & Mesure :** Dès retour au point de départ, l'agent clique sur "Clôturer le polygone". L'écran affiche instantanément : *Superficie mesurée = 1,42 ha*.
5. **Comparaison :** Le producteur ayant déclaré 1,25 ha, l'application affiche un écart de +13,6 % et invite l'agent à noter une observation rapide avant enregistrement.

### Scénario 3 : Synchronisation au Bureau et Détection de Doublon
1. **Connexion :** En fin de journée, l'agent rentre au siège du GIE à Mboundoum et se connecte au Wi-Fi.
2. **Transmission sécurisée :** L'application vide sa file d'attente locale vers le serveur central en un unique paquet chiffré.
3. **Vérification automatique :** Le serveur convertit `TEMP-LWT-0142` en matricule officiel `LWT-00384`. L'algorithme de détection constate qu'un producteur portant un nom similaire et le même numéro de téléphone existe déjà sous un statut non membre.
4. **Alerte superviseur :** Le dossier n'est pas publié directement : il apparaît dans l'écran "Doublons en attente d'arbitrage". Le superviseur valide la fusion des deux fiches en conservant l'antériorité de l'identifiant initial.

---

## 7. Indicateurs de Performance et Cibles d'Inclusion (GESI / YIW)

Le MVP intègre dès le premier écran de pilotage le suivi des cibles contractuelles du Programme RIZAO :

| Indicateur | Définition & Règle de Calcul | Cible Programme RIZAO | Seuil d'Alerte MVP |
|:---|:---|:---:|:---:|
| **Part des Jeunes Femmes (JF)** | (Nombre de membres femmes de 18 à 35 ans / Effectif total) * 100 | **≥ 50 %** | < 45 % (Alerte Orange) |
| **Part Globale Jeunes (YIW)** | (Membres hommes et femmes de 18 à 35 ans / Effectif total) * 100 | **≥ 70 %** | < 65 % (Alerte Rouge) |
| **Inclusion Handicap** | (Membres déclarant une situation de handicap / Effectif total) * 100 | **≥ 5 %** | < 3 % (Alerte Rouge) |
| **Taux de Données Manquantes** | Fiches sans date de naissance, sans téléphone valide ou sans CNI | **0 %** | > 2 % (Blocage export) |
| **Écart Moyen Superficies** | Moyenne de la valeur absolue des écarts (Mesurée vs Déclarée) | Information | > 15 % (Re-contrôle parcelle) |

*Règle de gestion des rapports :* Une donnée non renseignée s'affiche explicitement comme `NON RENSEIGNÉ` et ne doit **jamais** être assimilée à un 0 % qui masquerait un défaut de collecte.

---

## 8. Trajectoire de Déploiement et Planning du MVP (25 Jours)

Le développement et la validation du MVP sont calibrés sur **25 jours ouvrés dédiés** (5 semaines pleines de développement) :

```
S1 (J1-J5)   : [Lot 1 : Socle BDD, PostGIS & Référentiels C-12] ────────►
S2 (J6-J10)  : [Lot 2 : Registre Membres C-1 & Détection Doublons] ────►
S3 (J11-J15) : [Lot 3 : Parcelles C-2 & Moteur SIG PostGIS / Web] ────►
S4 (J16-J20) : [Lot 4 : Application Android Offline C-3 & Moteur Sync] ─►
S5 (J21-J25) : [Lot Transverse : Recette Terrain, Passerelle ERP & Livrables]
```

### Détail des Lots et Critères d'Acceptation (DoD)

#### Semaine 1 (J1 à J5) : Lot 1 — Socle Technique, PostGIS & Référentiels
- Mise en place de PostgreSQL 16 avec PostGIS activé.
- Scripts de migration Flyway créant les tables `ref_villages`, `ref_cuvettes`, `audit_logs`.
- Implémentation du système d'authentification RBAC et journalisation systématique des requêtes.
- *Critère d'acceptation :* Les référentiels de Dagana et Mboundoum sont chargés et non supprimables.

#### Semaine 2 (J6 à J10) : Lot 2 — Registre Central des Membres (Module C-1)
- Formulaire Web d'enrôlement et consultation des fiches membres.
- Algorithme de détection phonétique des doublons avec écran d'arbitrage.
- Générateur de cartes de membres avec QR code sécurisé.
- *Critère d'acceptation :* L'insertion d'un doublon phonétique déclenche automatiquement la mise en attente de la fiche.

#### Semaine 3 (J11 à J15) : Lot 3 — Parcelles et Cartographie SIG (Module C-2)
- Module de gestion des parcelles avec stockage des polygones WGS84.
- Intégration de la carte interactive (Leaflet) avec découpage par cuvette.
- Calcul automatique des superficies mesurées et vérification des chevauchements.
- Importation d'un jeu de test GeoJSON / KoboCollect de la SAED.
- *Critère d'acceptation :* Le tracé d'un polygone calcule la surface exacte en ha et signale tout chevauchement > 2 %.

#### Semaine 4 (J16 à J20) : Lot 4 — Application Mobile Terrain Hors-Ligne (Module C-3)
- Développement de l'interface mobile Android avec formulaires F1 et F2.
- Intégration de la capture photo CNI compressée et signature tactile.
- Module de tracé de contour GPS en continu.
- Moteur de synchronisation asynchrone par paquets et réconciliation des matricules temporaires.
- *Critère d'acceptation :* Une saisie complète d'adhésion hors-connexion se synchronise sans perte dès rétablissement du réseau.

#### Semaine 5 (J21 à J25) : Recette Globale, Passerelle ERP & Clôture
- Test terrain en conditions réelles à Mboundoum-Barrage (sur 20 parcelles tests et 50 membres).
- Implémentation du flux F-1 vers la base de données de l'ERP LAWTAN.
- Validation des calculs des indicateurs d'inclusion GESI (cibles 70 % / 5 %).
- Rédaction du guide utilisateur synthétique (1 page plastifiée pour les agents de terrain).
- *Critère d'acceptation :* Rapport de conformité validé sans régression, prêt pour le démarrage officiel de la campagne 2026–2027.

---

*Document de cadrage officiel du MVP LAWTAN Connect validé pour exécution.*
