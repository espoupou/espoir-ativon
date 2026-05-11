# Kokou Espoir ATIVON — Portfolio

Portfolio bilingue (FR/EN) axé sur le Génie Industriel et le Développement Logiciel, construit avec Next.js 15, Tailwind CSS v4, et Framer Motion.

## 🚀 Comment lancer le projet localement

Assurez-vous d'avoir Node.js installé sur votre machine.

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🛠️ Comment modifier le contenu

### Ajouter ou modifier une image
1. Placez votre image dans le dossier correspondant sous `public/assets/...`
   - Par exemple pour un projet : `public/assets/projects/super-cerame/mon-image.png`
2. Assurez-vous que le chemin dans `src/data/projects.ts` pointe bien vers cette image.

### Modifier un projet
1. Ouvrez `src/data/projects.ts`.
2. Trouvez le projet correspondant dans la liste `projects` et modifiez les textes (attention à bien modifier à la fois la version `fr` et `en`).
3. Si vous ajoutez un nouveau projet, renseignez toutes les propriétés demandées.

### Modifier une expérience
1. Ouvrez `src/data/experiences.ts`.
2. Modifiez le contenu de la même façon que pour les projets.

### Modifier les traductions globales (textes d'interface)
1. Ouvrez `src/i18n/fr.ts` pour le français.
2. Ouvrez `src/i18n/en.ts` pour l'anglais.
3. Modifiez les textes directement dans ces fichiers.

### Mettre à jour le CV
1. Placez votre CV en français sous `public/cv/cv-fr.pdf`.
2. Placez votre CV en anglais sous `public/cv/cv-en.pdf`.
3. Le site liera automatiquement le bon fichier selon la langue sélectionnée.

## 📦 Comment déployer sur Vercel

Le projet est conçu pour être déployé facilement sur Vercel (les créateurs de Next.js).

1. Poussez ce code sur un dépôt GitHub.
2. Connectez-vous sur [Vercel.com](https://vercel.com/).
3. Cliquez sur **Add New Project** et importez votre dépôt GitHub.
4. Laissez les paramètres par défaut (Framework Preset: Next.js) et cliquez sur **Deploy**.
5. Votre site sera en ligne en quelques minutes.

## 🎨 Technologies utilisées

- **Next.js** (App Router, React 19)
- **Tailwind CSS v4** (Utility-first CSS)
- **Framer Motion** (Animations fluides)
- **Lucide React** (Icônes SVG)
- **Next-Themes** (Mode clair/sombre)
