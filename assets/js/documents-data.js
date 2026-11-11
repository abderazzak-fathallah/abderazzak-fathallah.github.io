/* ============================================================
   BIBLIOTHÈQUE DE DOCUMENTS
   Seul fichier à modifier pour ajouter un document.

   fichier   : chemin du document ou null si indisponible
   publie    : true = affiché sur le site public
   format    : PDF, PNG, JPG...
   categorie : une des valeurs de CATEGORIES
   ============================================================ */

const CATEGORIES = [
    "CV",
    "Rapports de projets",
    "Attestations",
    "Certifications",
    "Présentations"
];

const DOCUMENTS = [

    /* =========================
       CV
       ========================= */

    {
        titre: "CV — Abderazzak Fathallah",
        categorie: "CV",
        desc: "Parcours, expériences professionnelles, compétences et certifications.",
        format: "PDF",
        fichier: "assets/documents/cv/CV_Fathallah_Abderazzak.pdf",
        publie: true
    },

    /* =========================
       RAPPORTS DE PROJETS
       ========================= */

    {
        titre: "Rapport — Smart Classroom & SCADA",
        categorie: "Rapports de projets",
        desc: "Projet IoT primé : capteurs, MQTT, Node-RED et supervision.",
        format: "PDF",
        fichier: "assets/documents/rapports/rapport-smart-classroom.pdf",
        publie: true
    },

    {
        titre: "Rapport — Bras Pro Max",
        categorie: "Rapports de projets",
        desc: "Conception 3D SolidWorks, ESP32 et contrôle via Blynk.",
        format: "PDF",
        fichier: "assets/documents/rapports/rapport-bras-pro-max.pdf",
        publie: true
    },

    {
        titre: "Rapport — Robot autonome de transport de granulés",
        categorie: "Rapports de projets",
        desc: "Conception et réalisation d'un robot mobile autonome de transport de granulés.",
        format: "PDF",
        fichier: "assets/documents/rapports/rapport-robot-autonome.pdf",
        publie: true
    },

    {
        titre: "Rapport — CityWind",
        categorie: "Rapports de projets",
        desc: "Étude et conception d'une éolienne adaptée au potentiel éolien du Maroc.",
        format: "PDF",
        fichier: "assets/documents/rapports/rapport-citywind.pdf",
        publie: true
    },

    /* =========================
       ATTESTATIONS
       ========================= */

    {
        titre: "Attestation de stage — LEONI",
        categorie: "Attestations",
        desc: "Attestation de stage effectué chez LEONI à Bouskoura.",
        format: "PDF",
        fichier: "assets/documents/attestations/attestation-leoni.pdf",
        publie: true
    },

    {
        titre: "Attestation de stage — ROCA",
        categorie: "Attestations",
        desc: "Attestation de stage de fin de formation chez ROCA S.A.",
        format: "PDF",
        fichier: "assets/documents/attestations/attestation-roca.pdf",
        publie: true
    },

    {
        titre: "Attestation de stage — EVLOX",
        categorie: "Attestations",
        desc: "Attestation de stage de fin d'année BTS chez EVLOX.",
        format: "PDF",
        fichier: "assets/documents/attestations/attestation-evlox.pdf",
        publie: true
    },

    {
        titre: "Attestation de stage — Safran Nacelles",
        categorie: "Attestations",
        desc: "Attestation de stage PFE chez Safran Nacelles.",
        format: "PDF",
        fichier: null,
        publie: true
    },

    /* =========================
       CERTIFICATIONS
       ========================= */

    {
        titre: "Python Programming Basics — Huawei",
        categorie: "Certifications",
        desc: "Bases de la programmation Python, décembre 2025.",
        format: "PDF",
        fichier: "assets/documents/certifications/certificat-python.pdf",
        publie: true
    },

    {
        titre: "Business Analysis & Process Management",
        categorie: "Certifications",
        desc: "Analyse métier et gestion des processus, novembre 2025.",
        format: "PDF",
        fichier: "assets/documents/certifications/certificat-business-analysis.pdf",
        publie: true
    },

    {
        titre: "HiveMQ Certified MQTT Associate",
        categorie: "Certifications",
        desc: "Certification MQTT pour l'IoT, novembre 2025.",
        format: "PDF",
        fichier: "assets/documents/certifications/certificate-hivemq.pdf",
        publie: true
    },

    {
        titre: "TCF — niveau B2",
        categorie: "Certifications",
        desc: "Test de connaissance du français, août 2026.",
        format: "PDF",
        fichier: "assets/documents/certifications/certificat-tcf.pdf",
        publie: true
    },

    {
        titre: "Awareness Module on the Aviation Safety Management System (SMS)",
        categorie: "Certifications",
        desc: "Formation de sensibilisation au système de management de la sécurité aérienne (SMS), délivrée par Safran University le 22 octobre 2026.",
        format: "PDF",
        fichier: "assets/documents/certifications/certificat-safran-sms.pdf",
        publie: true
    },

    {
        titre: "E-learning Evacuation-Confinement (partie théorique)",
        categorie: "Certifications",
        desc: "Validation de l'épreuve théorique de la formation Evacuation-Confinement, délivrée par Safran Nacelles Le Havre le 22 octobre 2026.",
        format: "PDF",
        fichier: "assets/documents/certifications/E-learning-Evacuation-Confinement.pdf",
        publie: true
    },

];