# Site « That Sounds Stupid »

Site statique (HTML, CSS, un peu de JS). Aucun serveur, aucun domaine payant requis.

## Structure

- `index.html` : accueil et liste des billets
- `articles/` : un fichier HTML par billet (ajouter un `<li class="card">` dans `index.html` pour chaque nouveau billet)
- `css/style.css` : charte (encre `#0B0B0C`, papier `#F3EEE6`, jaune signal `#FFD400`)
- `js/main.js` : temps de lecture estimé et barre de progression (rien n'est stocké)
- `assets/img/` : images NASA (domaine public), réduites à 1400 px

## Prévisualiser en local

```bash
cd site
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Mettre en ligne (gratuit)

**Netlify (le plus simple)** : sur app.netlify.com, « Add new site » → « Deploy manually », puis glisser le dossier `site/`. L'URL `*.netlify.app` est fournie. Un domaine personnalisé se branche plus tard, sans rien changer au site.

**GitHub Pages** : créer un dépôt, pousser le contenu de `site/` à la racine, puis Settings → Pages → « Deploy from a branch » (branche `main`, dossier `/`).

Les polices viennent de Google Fonts (chargées par le navigateur), rien d'autre n'est externe.
