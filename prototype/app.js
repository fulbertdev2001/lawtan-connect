/**
 * ==========================================================================
 * LAWTAN CONNECT - LOGIQUE INTERACTIVE DU PROTOTYPE (MVP GLOBAL)
 * ==========================================================================
 */

// 1. BASE DE DONNÉES LOCALE RÉACTIVE (SIMULATION COMPLETE)
const DB = {
  campagne: "2026-2027",
  cluster: {
    nom: "Cluster LAWTAN",
    site: "Mboundoum-Barrage",
    commune: "Commune de Diama",
    programme: "Programme RIZAO, pilier 2",
    superficieTotaleHa: 176.4,
    superficieDeclareeHa: 194.0,
    parcellesRelevees: 142,
    tauxAdoption: 62,
    emploisJoursPersonnes: 1340,
    emploisETP: 6.1,
    alertesOuvertes: 7
  },
  
  membres: [
    { code: "LWT-00042", nom: "SOW", prenom: "Aminata", sexe: "F", age: 27, village: "Ross-Béthio", roles: ["Productrice", "Participante CEP"], parcelles: 2, cni: true, statut: "complet", tel: "+221 77 645 12 08", handicap: "Non", dateAdhesion: "12/07/2026" },
    { code: "LWT-00043", nom: "BA", prenom: "Ousmane", sexe: "M", age: 34, village: "Mboundoum-Barrage", roles: ["Producteur", "Prestataire"], parcelles: 1, cni: true, statut: "complet", tel: "+221 78 312 90 44", handicap: "Non", dateAdhesion: "14/07/2026" },
    { code: "LWT-00044", nom: "NDIAYE", prenom: "Fatou", sexe: "F", age: 22, village: "Thilène", roles: ["Participante CEP"], parcelles: 1, cni: true, statut: "complet", tel: "+221 70 890 11 22", handicap: "Non", dateAdhesion: "18/07/2026" },
    { code: "LWT-00045", nom: "GAYE", prenom: "Mariama", sexe: "F", age: null, village: "Pont-Gendarme", roles: ["Participante CEP"], parcelles: 0, cni: false, statut: "incomplet", tel: "+221 77 200 45 78", handicap: "Oui (moteur)", dateAdhesion: "22/07/2026", motifIncomplet: "Date de naissance manquante" },
    { code: "LWT-00046", nom: "DIOP", prenom: "Alioune", sexe: "M", age: 41, village: "Ndombo", roles: ["Producteur"], parcelles: 3, cni: true, statut: "complet", tel: "+221 76 541 33 90", handicap: "Non", dateAdhesion: "25/07/2026" },
    { code: "LWT-00047", nom: "SY", prenom: "Khadija", sexe: "F", age: 29, village: "Ross-Béthio", roles: ["Productrice", "Salariée saisonnière"], parcelles: 1, cni: true, statut: "complet", tel: "+221 77 912 60 14", handicap: "Non", dateAdhesion: "28/07/2026" },
    { code: "LWT-00048", nom: "KANE", prenom: "Ibrahima", sexe: "M", age: 31, village: "Thilène", roles: ["Prestataire de services"], parcelles: 0, cni: true, statut: "doublon", tel: "+221 77 645 12 08", handicap: "Non", dateAdhesion: "02/08/2026", motifDoublon: "Même téléphone que LWT-00042" }
  ],

  parcelles: [
    { code: "PAR-LWT-00042-A", membre: "SOW Aminata", cuvette: "Boundoum", refSaed: "BD-14-207", mesurée: 1.24, déclarée: 1.50, ecart: -17.3, variete: "Sahel 108", levee: "04/09 · contour", controle: "ok" },
    { code: "PAR-LWT-00043-A", membre: "BA Ousmane", cuvette: "Boundoum", refSaed: "BD-14-211", mesurée: 2.08, déclarée: 2.00, ecart: 4.0, variete: "ISRIZ 15", levee: "04/09 · contour", controle: "ok" },
    { code: "PAR-LWT-00046-B", membre: "DIOP Alioune", cuvette: "Ndombo", refSaed: "—", mesurée: 0.86, déclarée: 1.00, ecart: -14.0, variete: "Sahel 108", levee: "05/09 · 4 coins", controle: "ecart" },
    { code: "PAR-LWT-00051-A", membre: "FALL Seynabou", cuvette: "Thilène", refSaed: "TH-06-044", mesurée: 1.42, déclarée: 1.40, ecart: 1.4, variete: "Sahel 108", levee: "06/09 · contour", controle: "chevauchement" }
  ],

  seancesCEP: [
    { num: "07", date: "09/09/2026", theme: "Fertilisation raisonnée", cohorte: "A", animateur: "Animateur interne", duree: "2 h 30", presents: 17, effectif: 20, absents: 3, taux: 85 },
    { num: "06", date: "02/09/2026", theme: "Désherbage manuel et chimique", cohorte: "A", animateur: "Agent SENAD", duree: "3 h 00", presents: 15, effectif: 20, absents: 5, taux: 75 },
    { num: "05", date: "26/08/2026", theme: "Irrigation et gestion de l'eau", cohorte: "B", animateur: "Animateur interne", duree: "2 h 00", presents: 16, effectif: 19, absents: 3, taux: 84 },
    { num: "04", date: "19/08/2026", theme: "Semis et repiquage", cohorte: "B", animateur: "Animateur interne", duree: "3 h 30", presents: 18, effectif: 19, absents: 1, taux: 95 },
    { num: "03", date: "12/08/2026", theme: "Préparation du sol", cohorte: "A", animateur: "Agent SENAD", duree: "2 h 30", presents: 14, effectif: 20, absents: 6, taux: 70 }
  ],

  services: [
    { date: "09/09", membre: "SOW Aminata", nature: "Moissonnage", detail: "1,24 ha · PAR-LWT-00042-A", flux: "F-4 · envoyé", montant: "lu depuis l'ERP", statut: "planifie" },
    { date: "08/09", membre: "BA Ousmane", nature: "Usinage", detail: "42 sacs de paddy", flux: "F-4 · envoyé", montant: "lu depuis l'ERP", statut: "execute" },
    { date: "05/09", membre: "NDIAYE Fatou", nature: "Kit d'intrants", detail: "Semences + DAP + urée", flux: "—", montant: "dotation programme", statut: "remis" },
    { date: "05/09", membre: "GAYE Mariama", nature: "Kit d'intrants", detail: "Semences + DAP + urée", flux: "—", montant: "dotation programme", statut: "non-retenu" },
    { date: "02/09", membre: "DIOP Alioune", nature: "Avance de campagne", detail: "2 sacs d'urée", flux: "—", montant: "remboursable à la livraison", statut: "planifie" }
  ],

  prestataires: [
    { code: "LWT-00048", nom: "KANE Ibrahima", age: 31, spe: "Conseil agronomique", hab: "RiceAdvice · valide", suivis: 62, actes: 118, ca: "438 000 F" },
    { code: "LWT-00071", nom: "SECK Astou", age: 26, spe: "Conseil agronomique", hab: "RiceAdvice · valide", suivis: 54, actes: 96, ca: "372 000 F" },
    { code: "LWT-00093", nom: "THIAM Moussa", age: 29, spe: "Mécanisation", hab: "Conducteur · valide", suivis: 41, actes: 62, ca: "286 000 F" },
    { code: "LWT-00104", nom: "DIOUF Ndèye", age: 24, spe: "Appui à la collecte", hab: "Formation en cours", suivis: 29, actes: 36, ca: "152 000 F" }
  ],

  messagesJournal: [
    { date: "09/09", objet: "Rappel fumure", canal: "Vocal wolof", vises: 42, delivres: 40, cout: "6 720 F" },
    { date: "07/09", objet: "Convocation séance 7", canal: "SMS + vocal", vises: 39, delivres: 37, cout: "4 290 F" },
    { date: "02/09", objet: "Journée démonstration", canal: "Vocal wolof", vises: 214, delivres: 191, cout: "34 240 F" },
    { date: "28/08", objet: "Rappel désherbage", canal: "Vocal pulaar", vises: 63, delivres: 61, cout: "10 080 F" }
  ],

  offlineQueue: [
    { type: "adhésion", code: "TEMP-LWT-8721", nom: "DIAGNE Khady", village: "Ross-Béthio", sync: false },
    { type: "parcelle", code: "TEMP-PAR-042B", membre: "SOW Aminata", sup: "0.85 ha", sync: false }
  ]
};

// 2. INITIALISATION AU CHARGEMENT DE LA PAGE
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupFilterPills();
  setupSearch();
  setupMapInteraction();
  setupTimelineNodes();
  setupMobileToggles();
  setupAudioWolof();
  
  // Render tables
  renderMembersTable();
  renderParcellesTable();
  renderSessionsTable();
  renderServicesTable();
  renderProvidersTable();
  renderMessagesTable();

  // Populate dynamic member selects in modals
  populateMemberSelects();
});

// NAVIGATION (DESKTOP & MOBILE RESPONSIVE)
function setupNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  const bottomTabs = document.querySelectorAll(".mobile-tab-item[data-view]");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const closeBtn = document.getElementById("sidebar-close-btn");
  const moreBtn = document.getElementById("mobile-more-btn");
  const contentArea = document.querySelector(".content-area");

  function closeMobileSidebar() {
    if (sidebar) sidebar.classList.remove("mobile-open");
    if (overlay) overlay.classList.remove("active");
  }

  function openMobileSidebar() {
    if (sidebar) sidebar.classList.add("mobile-open");
    if (overlay) overlay.classList.add("active");
  }

  if (menuToggle) menuToggle.addEventListener("click", openMobileSidebar);
  if (closeBtn) closeBtn.addEventListener("click", closeMobileSidebar);
  if (overlay) overlay.addEventListener("click", closeMobileSidebar);
  if (moreBtn) moreBtn.addEventListener("click", openMobileSidebar);

  function activateView(targetView) {
    if (!targetView) return;

    // Sidebar items
    navItems.forEach(n => {
      if (n.getAttribute("data-view") === targetView) {
        n.classList.add("active");
      } else {
        n.classList.remove("active");
      }
    });

    // Bottom tab items
    bottomTabs.forEach(t => {
      if (t.getAttribute("data-view") === targetView) {
        t.classList.add("active");
      } else {
        t.classList.remove("active");
      }
    });

    // Pages
    const pages = document.querySelectorAll(".view-page");
    pages.forEach(p => p.classList.remove("active"));

    const activePage = document.getElementById(`view-${targetView}`);
    if (activePage) {
      activePage.classList.add("active");
    }

    // Scroll to top
    if (contentArea) contentArea.scrollTop = 0;

    // Close sidebar drawer if open
    closeMobileSidebar();
  }

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetView = item.getAttribute("data-view");
      activateView(targetView);
    });
  });

  bottomTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetView = tab.getAttribute("data-view");
      activateView(targetView);
    });
  });

  const switcher = document.getElementById("mode-switcher");
  if (switcher) {
    switcher.addEventListener("click", () => {
      activateView("mobile");
    });
  }

  // Initialize mobile simulation frame tabs
  switchMobileSimScreen(0);
}

// Sélecteur d'écrans dans la page App Terrain sur Smartphone
function switchMobileSimScreen(index) {
  const frames = document.querySelectorAll(".smartphone-frame");
  const tabs = document.querySelectorAll(".mobile-screen-tab");

  frames.forEach((f, i) => {
    if (i === index) {
      f.classList.add("mobile-active-frame");
    } else {
      f.classList.remove("mobile-active-frame");
    }
  });

  tabs.forEach((t, i) => {
    if (i === index) {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });
}

// 3. TABLE DES MEMBRES (FILTRES & RECHERCHE)
let currentFilter = "all";
function setupFilterPills() {
  const pills = document.querySelectorAll(".filter-pill[data-filter]");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.getAttribute("data-filter");
      renderMembersTable();
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById("search-members-input");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderMembersTable();
    });
  }
}

function renderMembersTable() {
  const tbody = document.getElementById("members-table-body");
  if (!tbody) return;

  const searchQuery = (document.getElementById("search-members-input")?.value || "").toLowerCase().trim();

  const filtered = DB.membres.filter(m => {
    if (currentFilter === "producteurs" && !m.roles.some(r => r.includes("Product"))) return false;
    if (currentFilter === "cep" && !m.roles.some(r => r.includes("CEP"))) return false;
    if (currentFilter === "prestataires" && !m.roles.some(r => r.includes("Prestataire"))) return false;
    if (currentFilter === "incomplets" && m.statut !== "incomplet") return false;
    if (currentFilter === "doublons" && m.statut !== "doublon") return false;

    if (searchQuery) {
      const fullText = `${m.code} ${m.nom} ${m.prenom} ${m.village} ${m.tel} ${m.roles.join(" ")}`.toLowerCase();
      if (!fullText.includes(searchQuery)) return false;
    }
    return true;
  });

  tbody.innerHTML = "";
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:30px; color:var(--text-muted)">Aucun membre trouvé pour ces critères.</td></tr>`;
    return;
  }

  filtered.forEach(m => {
    const tr = document.createElement("tr");
    tr.style.cursor = "pointer";
    tr.innerHTML = `
      <td><span class="code-badge">${m.code}</span></td>
      <td><strong>${m.nom}</strong> ${m.prenom}</td>
      <td>${m.sexe}</td>
      <td>${m.age !== null ? m.age : '<span style="color:#d97706; font-weight:700">—</span>'}</td>
      <td>${m.village}</td>
      <td>${m.roles.join(" · ")}</td>
      <td style="text-align:center">${m.parcelles}</td>
      <td style="text-align:center">${m.cni ? '✓' : '<span style="color:#dc2626">—</span>'}</td>
      <td>
        <span class="status-pill ${m.statut}">
          ${m.statut === 'complet' ? 'Complet' : m.statut === 'incomplet' ? 'Date manquante' : 'Doublon possible'}
        </span>
      </td>
    `;
    tr.addEventListener("click", () => inspectMember(m.code));
    tbody.appendChild(tr);
  });
}

function populateMemberSelects() {
  const memberSelects = ["parcel-member", "service-member", "provider-member"];
  memberSelects.forEach(id => {
    const select = document.getElementById(id);
    if (!select) return;
    select.innerHTML = "";
    DB.membres.forEach(m => {
      const opt = document.createElement("option");
      opt.value = `${m.nom} ${m.prenom}`;
      opt.textContent = `${m.code} — ${m.nom} ${m.prenom} (${m.village})`;
      select.appendChild(opt);
    });
  });
}

// 4. RENDU DE LA TABLE DES PARCELLES (MODULE C-2)
function renderParcellesTable() {
  const tbody = document.getElementById("parcelles-table-body");
  if (!tbody) return;

  tbody.innerHTML = "";
  DB.parcelles.forEach(p => {
    const tr = document.createElement("tr");
    const statusLabel = p.controle === 'ok' ? 'OK' : p.controle === 'ecart' ? 'Réf. SAED absente' : 'Chevauchement';
    tr.innerHTML = `
      <td><span class="code-badge">${p.code}</span></td>
      <td><strong>${p.membre}</strong></td>
      <td>${p.cuvette}</td>
      <td>${p.refSaed || '—'}</td>
      <td><strong>${p.mesurée.toFixed(2)} ha</strong></td>
      <td>${p.déclarée.toFixed(2)} ha</td>
      <td>${p.variete}</td>
      <td>${p.levee}</td>
      <td><span class="status-pill ${p.controle}">${statusLabel}</span></td>
    `;
    tbody.appendChild(tr);
  });

  // Met à jour les KPIs de parcelles
  const totalMes = DB.parcelles.reduce((acc, curr) => acc + curr.mesurée, 0);
  const totalDec = DB.parcelles.reduce((acc, curr) => acc + curr.déclarée, 0);
  const avgEcart = totalDec > 0 ? (((totalMes - totalDec) / totalDec) * 100).toFixed(1) : 0;

  const kpiRelevees = document.getElementById("kpi-parcelles-count");
  if (kpiRelevees) kpiRelevees.textContent = DB.parcelles.length;
  const kpiMesuree = document.getElementById("kpi-superficie-mesuree");
  if (kpiMesuree) kpiMesuree.innerHTML = `${totalMes.toFixed(1)} <span>ha</span>`;
  const kpiEcart = document.getElementById("kpi-ecart-moyen");
  if (kpiEcart) kpiEcart.innerHTML = `${avgEcart > 0 ? '+' : ''}${avgEcart} <span>%</span>`;
}

// 5. RENDU DE LA TABLE DES SÉANCES CEP (MODULE C-4)
function renderSessionsTable() {
  const tbody = document.getElementById("sessions-table-body");
  if (!tbody) return;

  tbody.innerHTML = "";
  DB.seancesCEP.forEach(s => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="code-badge">${s.num}</span></td>
      <td>${s.date}</td>
      <td><strong>${s.theme}</strong></td>
      <td>${s.cohorte}</td>
      <td>${s.animateur}</td>
      <td>${s.duree}</td>
      <td>${s.presents} / ${s.effectif}</td>
      <td>${s.absents}</td>
      <td><span class="status-pill ${s.taux >= 75 ? 'ok' : 'warn'}">${s.taux} %</span></td>
    `;
    tbody.appendChild(tr);
  });

  const kpiSeances = document.getElementById("kpi-seances-count");
  if (kpiSeances) kpiSeances.textContent = DB.seancesCEP.length;
}

// 6. RENDU DE LA TABLE DES SERVICES AUX MEMBRES (MODULE C-9)
function renderServicesTable() {
  const tbody = document.getElementById("services-table-body");
  if (!tbody) return;

  tbody.innerHTML = "";
  DB.services.forEach(s => {
    const tr = document.createElement("tr");
    const etatLabel = s.statut === 'execute' ? 'Exécuté' : s.statut === 'remis' ? 'Remis · signé' : s.statut === 'non-retenu' ? 'Non retenu' : 'Planifié';
    tr.innerHTML = `
      <td>${s.date}</td>
      <td><strong>${s.membre}</strong></td>
      <td>${s.nature}</td>
      <td>${s.detail}</td>
      <td><span class="status-pill ${s.flux.includes('F-4') ? 'ok' : ''}">${s.flux}</span></td>
      <td>${s.montant}</td>
      <td><span class="status-pill ${s.statut}">${etatLabel}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// 7. RENDU DE LA TABLE DES PRESTATAIRES (MODULE C-10)
function renderProvidersTable() {
  const tbody = document.getElementById("providers-table-body");
  if (!tbody) return;

  tbody.innerHTML = "";
  DB.prestataires.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="code-badge">${p.code}</span></td>
      <td><strong>${p.nom}</strong></td>
      <td>${p.age}</td>
      <td>${p.spe}</td>
      <td><span class="status-pill ${p.hab.includes('valide') ? 'ok' : 'warn'}">${p.hab}</span></td>
      <td>${p.suivis}</td>
      <td>${p.actes}</td>
      <td><strong>${p.ca}</strong></td>
    `;
    tbody.appendChild(tr);
  });
}

// 8. RENDU DU JOURNAL DES MESSAGES (MODULE C-8)
function renderMessagesTable() {
  const tbody = document.getElementById("messages-table-body");
  if (!tbody) return;

  tbody.innerHTML = "";
  DB.messagesJournal.forEach(m => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${m.date}</td>
      <td><strong>${m.objet}</strong></td>
      <td>${m.canal}</td>
      <td>${m.vises}</td>
      <td><strong style="color:#15803d">${m.delivres}</strong></td>
      <td>${m.cout}</td>
    `;
    tbody.appendChild(tr);
  });
}

// 9. MODALS GESTIONNAIRES COMPLETS
// A. Modal Nouvelle Parcelle (Fiche F2)
function openNewParcelModal() {
  populateMemberSelects();
  calculateParcelDelta();
  document.getElementById("new-parcel-modal").classList.add("active");
}

function closeNewParcelModal() {
  document.getElementById("new-parcel-modal").classList.remove("active");
}

function calculateParcelDelta() {
  const decInput = parseFloat(document.getElementById("parcel-sup-declaree")?.value) || 0;
  const mesInput = parseFloat(document.getElementById("parcel-sup-mesuree")?.value) || 0;
  const deltaBadge = document.getElementById("parcel-delta-display");
  const alertText = document.getElementById("parcel-delta-alert");

  if (decInput > 0 && mesInput > 0) {
    const delta = (((mesInput - decInput) / decInput) * 100).toFixed(1);
    deltaBadge.textContent = `${delta > 0 ? '+' : ''}${delta} %`;
    
    if (Math.abs(delta) > 10) {
      deltaBadge.className = "status-pill bloquant";
      alertText.style.display = "block";
      alertText.textContent = `⚠️ Écart élevé (> 10%) : Vérifier le contour géodésique ou la déclaration du membre.`;
    } else {
      deltaBadge.className = "status-pill ok";
      alertText.style.display = "none";
    }
  }
}

function submitNewParcel() {
  const membre = document.getElementById("parcel-member")?.value || "SOW Aminata";
  const cuvette = document.getElementById("parcel-cuvette")?.value || "Boundoum";
  const refSaed = document.getElementById("parcel-ref-saed")?.value || "BD-14-" + Math.floor(200 + Math.random() * 50);
  const declaree = parseFloat(document.getElementById("parcel-sup-declaree")?.value) || 1.5;
  const mesuree = parseFloat(document.getElementById("parcel-sup-mesuree")?.value) || 1.35;
  const variete = document.getElementById("parcel-variete")?.value || "Sahel 108";
  const methode = document.getElementById("parcel-methode")?.value || "Contour marché";

  const nextCode = `PAR-LWT-000${DB.parcelles.length + 42}-A`;
  const ecart = (((mesuree - declaree) / declaree) * 100).toFixed(1);

  DB.parcelles.unshift({
    code: nextCode,
    membre: membre,
    cuvette: cuvette,
    refSaed: refSaed,
    mesurée: mesuree,
    déclarée: declaree,
    ecart: parseFloat(ecart),
    variete: variete,
    levee: "24/09 · " + (methode.includes("Contour") ? "contour" : "4 coins"),
    controle: Math.abs(ecart) > 10 ? "ecart" : "ok"
  });

  renderParcellesTable();
  closeNewParcelModal();
  showToast(`✅ Parcelle ${nextCode} enregistrée avec succès (${mesuree} ha) !`);
}

// B. Modal Nouvelle Séance Champ École (Fiche F3/F4)
function openNewSessionModal() {
  document.getElementById("new-session-modal").classList.add("active");
}

function closeNewSessionModal() {
  document.getElementById("new-session-modal").classList.remove("active");
}

function submitNewSession() {
  const num = document.getElementById("session-num")?.value || "08";
  const theme = document.getElementById("session-theme")?.value || "Outil d'aide à la décision RiceAdvice";
  const cohorte = document.getElementById("session-cohorte")?.value || "A";
  const animateur = document.getElementById("session-animateur")?.value || "Agent SENAD";
  const duree = document.getElementById("session-duree")?.value || "2 h 30";
  const presents = parseInt(document.getElementById("session-presents")?.value) || 18;
  const effectif = 20;
  const absents = effectif - presents;
  const taux = Math.round((presents / effectif) * 100);

  DB.seancesCEP.unshift({
    num: num.padStart(2, "0"),
    date: "24/09/2026",
    theme: theme,
    cohorte: cohorte,
    animateur: animateur,
    duree: duree,
    presents: presents,
    effectif: effectif,
    absents: absents,
    taux: taux
  });

  renderSessionsTable();
  closeNewSessionModal();
  showToast(`✅ Séance n°${num} « ${theme} » enregistrée (Taux de présence : ${taux}%) !`);
}

// C. Modal Fiche Recommandation Complète RiceAdvice
function openRecommendationModal() {
  document.getElementById("recommendation-detail-modal").classList.add("active");
}

function closeRecommendationModal() {
  document.getElementById("recommendation-detail-modal").classList.remove("active");
}

// D. Modal Demande de Prestation de Service (Fiche F11 & Flux F-4)
function openNewServiceModal() {
  populateMemberSelects();
  document.getElementById("new-service-modal").classList.add("active");
}

function closeNewServiceModal() {
  document.getElementById("new-service-modal").classList.remove("active");
}

function submitNewService() {
  const membre = document.getElementById("service-member")?.value || "SOW Aminata";
  const nature = document.getElementById("service-nature")?.value || "Moissonnage";
  const detail = document.getElementById("service-detail")?.value || "1,24 ha · PAR-LWT-00042-A";

  DB.services.unshift({
    date: "24/09",
    membre: membre,
    nature: nature,
    detail: detail,
    flux: "F-4 · envoyé",
    montant: "lu depuis l'ERP",
    statut: "planifie"
  });

  renderServicesTable();
  closeNewServiceModal();
  showToast(`✅ Demande transmise à l'ERP LAWTAN via le Flux F-4 !`);
}

// E. Modal Nouveau Prestataire de Services (Fiche F12)
function openNewProviderModal() {
  populateMemberSelects();
  document.getElementById("new-provider-modal").classList.add("active");
}

function closeNewProviderModal() {
  document.getElementById("new-provider-modal").classList.remove("active");
}

function submitNewProvider() {
  const membre = document.getElementById("provider-member")?.value || "FALL Babacar";
  const spe = document.getElementById("provider-spe")?.value || "Conseil agronomique";
  const hab = document.getElementById("provider-hab")?.value || "RiceAdvice · valide";
  const code = "LWT-00" + (DB.prestataires.length + 110);

  DB.prestataires.unshift({
    code: code,
    nom: membre,
    age: 27,
    spe: spe,
    hab: hab,
    suivis: 15,
    actes: 22,
    ca: "95 000 F"
  });

  renderProvidersTable();
  closeNewProviderModal();
  showToast(`✅ Prestataire jeune ${membre} enregistré et habilité !`);
}

// F. Modal Nouvelle Diffusion Message (Fiche F13)
function openNewMessageModal() {
  document.getElementById("new-message-modal").classList.add("active");
}

function closeNewMessageModal() {
  document.getElementById("new-message-modal").classList.remove("active");
}

function submitNewMessage() {
  const dest = document.getElementById("msg-dest")?.value || "Cohorte A CEP";
  const canal = document.getElementById("msg-canal")?.value || "Vocal wolof";
  const objet = document.getElementById("msg-objet")?.value || "Rappel calendrier";
  const vises = parseInt(document.getElementById("msg-vises")?.value) || 20;
  const cout = (vises * 160).toLocaleString('fr-FR') + " F";

  DB.messagesJournal.unshift({
    date: "24/09",
    objet: objet,
    canal: canal,
    vises: vises,
    delivres: vises - 1,
    cout: cout
  });

  renderMessagesTable();
  closeNewMessageModal();
  showToast(`✅ Message « ${objet} » envoyé via ${canal} (${vises} destinataires).`);
}

// G. Modal Nouveau Référentiel Fermé
function openNewReferentialModal() {
  document.getElementById("new-referential-modal").classList.add("active");
}

function closeNewReferentialModal() {
  document.getElementById("new-referential-modal").classList.remove("active");
}

function submitNewReferential() {
  const type = document.getElementById("ref-type")?.value || "Villages";
  const val = document.getElementById("ref-val")?.value || "Nouveau village";

  closeNewReferentialModal();
  showToast(`✅ Valeur « ${val} » ajoutée au référentiel immuable ${type} !`);
}

// 10. INSPECTION D'UN MEMBRE (MODAL & CARTE QR)
function inspectMember(code) {
  const m = DB.membres.find(x => x.code === code);
  if (!m) return;

  const modal = document.getElementById("member-detail-modal");
  if (!modal) return;

  document.getElementById("modal-member-fullname").textContent = `${m.nom} ${m.prenom}`;
  document.getElementById("modal-member-code").textContent = m.code;
  document.getElementById("modal-member-village").textContent = `${m.village} · Commune de Diama`;
  document.getElementById("modal-member-tel").textContent = m.tel;
  document.getElementById("modal-member-roles").textContent = m.roles.join(", ");
  document.getElementById("modal-member-handicap").textContent = m.handicap;
  document.getElementById("modal-member-parcelles").textContent = `${m.parcelles} parcelle(s) enregistrée(s)`;

  if (m.statut === "doublon") {
    document.getElementById("doublon-alert-box").style.display = "block";
    document.getElementById("doublon-alert-desc").textContent = m.motifDoublon;
  } else {
    document.getElementById("doublon-alert-box").style.display = "none";
  }

  modal.classList.add("active");
}

function closeMemberModal() {
  const modal = document.getElementById("member-detail-modal");
  if (modal) modal.classList.remove("active");
}

// 11. CARTE SIG INTERACTIVE (PARCELLES CLUSTER)
function setupMapInteraction() {
  const polygons = document.querySelectorAll(".parcel-polygon");
  polygons.forEach(p => {
    p.addEventListener("click", () => {
      const code = p.getAttribute("data-code") || "PAR-LWT-00042-A";
      const owner = p.getAttribute("data-owner") || "SOW Aminata";
      const area = p.getAttribute("data-area") || "1,24 ha";
      const variety = p.getAttribute("data-variety") || "Sahel 108";
      
      showToast(`📍 Parcelle sélectionnée : ${code} (${owner}) — ${area} (${variety})`);
    });
  });
}

// 12. TIMELINE DU CALENDRIER CULTURAL
function setupTimelineNodes() {
  const nodes = document.querySelectorAll(".timeline-node");
  nodes.forEach(n => {
    n.addEventListener("click", () => {
      nodes.forEach(item => item.classList.remove("active"));
      n.classList.add("active");
      const stepName = n.querySelector(".node-label").textContent;
      showToast(`Étape affichée : ${stepName}`);
    });
  });
}

// 13. INTERACTION MOBILE TERRAIN ANDROID (MODULE C-3 HORS-CONNEXION)
function setupMobileToggles() {
  const presenceButtons = document.querySelectorAll(".presence-toggle-btn");
  presenceButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".presence-btn-group");
      parent.querySelectorAll(".presence-toggle-btn").forEach(b => b.classList.remove("active", "p", "a", "e"));
      
      const type = btn.getAttribute("data-type");
      btn.classList.add("active", type);
      
      const personName = btn.closest(".presence-item").querySelector(".presence-name").textContent;
      showToast(`Pointage mis à jour : ${personName} -> ${btn.textContent}`);
    });
  });
}

function submitMobileAdhesion() {
  const nom = document.getElementById("mob-nom")?.value || "DIALLO";
  const prenom = document.getElementById("mob-prenom")?.value || "Mamadou";
  const village = document.getElementById("mob-village")?.value || "Ross-Béthio";
  const tel = document.getElementById("mob-tel")?.value || "+221 77 123 45 67";

  const tempCode = `TEMP-LWT-${Math.floor(1000 + Math.random() * 9000)}`;
  
  DB.offlineQueue.push({
    type: "adhésion",
    code: tempCode,
    nom: `${nom} ${prenom}`,
    village: village,
    tel: tel,
    sync: false
  });

  updateOfflineQueueBadge();
  showToast(`⚡ Fiche enregistrée hors-ligne (${tempCode}) ! En attente de sync.`);

  if (document.getElementById("mob-nom")) document.getElementById("mob-nom").value = "";
  if (document.getElementById("mob-prenom")) document.getElementById("mob-prenom").value = "";
}

function simulateGpsWalk() {
  const canvas = document.getElementById("mobile-gps-canvas");
  if (!canvas) return;

  canvas.innerHTML = `
    <div style="font-size:12px; font-weight:700; color:#16a34a; text-align:center;">
      <div style="font-size:18px; margin-bottom:4px;">🚶‍♂️ Tracé en cours...</div>
      Précision GPS : 3.8m (Haute) · 8 points relevés<br>
      <span style="font-size:14px; color:#0b3b24;">Superficie instantanée : 1,48 ha</span>
    </div>
  `;

  setTimeout(() => {
    showToast("✅ Polygone géodésique WGS84 fermé avec succès (1,48 ha) !");
  }, 1200);
}

function triggerSync() {
  const count = DB.offlineQueue.filter(x => !x.sync).length;
  if (count === 0) {
    showToast("ℹ️ Aucune fiche en attente de synchronisation.");
    return;
  }

  showToast(`🔄 Synchronisation sécurisée de ${count} fiche(s) en cours...`);

  setTimeout(() => {
    DB.offlineQueue.forEach(item => {
      item.sync = true;
      if (item.type === "adhésion") {
        const newCode = `LWT-000${DB.membres.length + 43}`;
        const parts = item.nom.split(" ");
        DB.membres.unshift({
          code: newCode,
          nom: parts[0] || "DIALLO",
          prenom: parts[1] || "Mamadou",
          sexe: "M",
          age: 26,
          village: item.village || "Ross-Béthio",
          roles: ["Producteur"],
          parcelles: 1,
          cni: true,
          statut: "complet",
          tel: item.tel || "+221 77 123 45 67",
          handicap: "Non",
          dateAdhesion: "Aujourd'hui"
        });
      }
    });

    DB.cluster.superficieTotaleHa += 1.48;
    DB.cluster.parcellesRelevees += 1;
    updateOfflineQueueBadge();
    renderMembersTable();
    populateMemberSelects();
    
    document.querySelectorAll(".stat-value-members").forEach(el => el.textContent = DB.membres.length + 207);
    showToast("✅ Synchronisation réussie ! Données déversées au bureau.");
  }, 1500);
}

function updateOfflineQueueBadge() {
  const pending = DB.offlineQueue.filter(x => !x.sync).length;
  const badges = document.querySelectorAll(".pending-sync-count");
  badges.forEach(b => {
    b.textContent = pending;
  });
}

// 14. LECTURE AUDIO EN WOLOF (SIMULATION C-8)
function setupAudioWolof() {
  const playBtn = document.getElementById("play-wolof-btn");
  if (!playBtn) return;

  let isPlaying = false;
  playBtn.addEventListener("click", () => {
    if (isPlaying) return;
    isPlaying = true;
    playBtn.innerHTML = `❚❚`;

    try {
      if ('speechSynthesis' in window) {
        const text = "Aminata Sow, sa tool bi dafa war a am engrais bi tey. Ñëwal ci boutique bi.";
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'fr-FR';
        utter.rate = 0.9;
        utter.onend = () => {
          isPlaying = false;
          playBtn.innerHTML = `▶`;
          showToast("🔊 Fin du message vocal Wolof.");
        };
        speechSynthesis.speak(utter);
      } else {
        setTimeout(() => {
          isPlaying = false;
          playBtn.innerHTML = `▶`;
        }, 3000);
      }
    } catch(e) {
      setTimeout(() => {
        isPlaying = false;
        playBtn.innerHTML = `▶`;
      }, 3000);
    }
  });
}

// 15. FLUX ERP & RAPPORTS
function replayFlux(fluxCode) {
  showToast(`🔄 Rejeu du flux ${fluxCode} avec l'ERP LAWTAN...`);
  setTimeout(() => {
    showToast(`✅ Flux ${fluxCode} synchronisé avec succès avec l'ERP !`);
  }, 1000);
}

function generateReport(format, title) {
  showToast(`📄 Génération du ${title} (${format.toUpperCase()})...`);
  setTimeout(() => {
    const blob = new Blob([`RAPPORT LAWTAN CONNECT - ${title}\nCampagne: 2026-2027\nCluster: Mboundoum-Barrage\nDate: 24/09/2026\nSuperficie: 176.4 ha\nTaux Jeunes Femmes: 58%\nTaux Handicap: 3.2%\nEmplois générés: 1340 j-p (6.1 ETP)` ], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `LAWTAN_CONNECT_${title.replace(/\s+/g, '_')}.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`✅ Rapport téléchargé avec succès !`);
  }, 800);
}

function showToast(message) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
