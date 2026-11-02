# Portfolio d'Abderazzak Fathallah
Site statique pour GitHub Pages (branche `main`). Aucun backend.

## Ajouter un document
1. Sur GitHub : dossier `assets/documents/<categorie>/` → **Add file → Upload files** → déposer le PDF → **Commit changes**.
   Nom conseillé, sans espaces ni accents : `huawei-python.pdf`.
2. Ouvrir `assets/js/documents-data.js` (icône crayon) et, sur la ligne du document, remplacer `fichier:null` par
   `fichier:"assets/documents/certifications/huawei-python.pdf"`. Pour un nouveau document, copier une ligne existante.
3. Commit, attendre 1 à 2 minutes, puis ouvrir `https://abderazzak-fathallah.github.io/documents.html`
   (Ctrl+F5) et cliquer **Consulter** et **Télécharger** pour vérifier.

## Confidentialité : ne jamais déposer
Fichiers Excel internes, données d'opérateurs, rapports de stage, documents confidentiels ou signés.
`publie:false` cache une carte mais **le fichier reste accessible par son URL s'il est dans le dépôt** :
ne déposez que ce que vous acceptez de rendre public.

## Ajouter ou modifier un projet
Modifier `assets/js/projets-data.js` et ajouter une carte dans la section `#projets` de `index.html`.
