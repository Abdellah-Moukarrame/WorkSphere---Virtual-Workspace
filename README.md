# 🏢 Worksphere - Espace de Gestion du Personnel

Worksphere est une application web simple conçue pour gérer et visualiser le personnel au sein de différentes zones de travail (bureaux, sécurité, réception, etc.). Elle permet d'ajouter des employés, de consulter leurs détails, de les éditer, de les supprimer, et de les assigner à des zones spécifiques sur une représentation de plan.

## ✨ Fonctionnalités

* **Ajout de Personnel** : Formulaire pour enregistrer de nouveaux employés avec leur nom, rôle, téléphone, email et URL d'image.
* **Affichage du Tableau de Bord** : Liste des personnels ajoutés dans une barre latérale.
* **Actions sur le Personnel** : Possibilité de **supprimer**, **éditer** et afficher les **détails** de chaque employé depuis le tableau de bord.
* **Gestion des Zones** :
    * Affichage d'un plan de travail divisé en zones thématiques (IT, Security, Reception, Cleaning, Manager, Autres).
    * Bouton **`+`** dans chaque zone pour ouvrir un modal listant le personnel disponible.
    * **Affectation du Personnel** : Possibilité d'assigner un employé à une zone, le retirant de la liste du tableau de bord.
* **Modaux (Pop-ups)** : Utilisation de modaux pour l'ajout, l'édition, les détails du personnel, et l'affectation aux zones.
* **Persistance des Données** : Les données du personnel sont stockées localement en utilisant **`localStorage`**.

## 💻 Technologies Utilisées

* **HTML5** : Structure du contenu de l'application.
* **CSS3** : Style et mise en page (y compris l'utilisation de **Flexbox** et **Grid** pour le plan de travail).
* **JavaScript (Vanilla JS)** : Logique et interactivité de l'application.

## 🚀 Démarrage Rapide

Pour exécuter ce projet localement :

1.  **Clonez le dépôt** (ou téléchargez les fichiers `index.html`, `style.css`, et `script.js`).
2.  Assurez-vous d'avoir une image nommée `plan.jpg` dans un dossier `/img` ou ajustez l'URL de l'image de fond dans `style.css`.
3.  Ouvrez le fichier **`index.html`** dans votre navigateur web.

L'application est entièrement front-end et ne nécessite pas de serveur backend pour fonctionner.
