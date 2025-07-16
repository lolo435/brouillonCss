class GestionnaireThemes {
  constructor() {
    console.log("Initialisation du gestionnaire de theme");

    // état initial

    this.themeActuel = "clair";
    this.compteurChangements = 0;

    // Initialisé l'affichage

    this.mettreAJourAffichage();
  }

  changerTheme(nouveauTheme) {
    console.log(`Changement de thème : ${this.themeActuel} -> ${nouveauTheme}`);

    // Supprimer l'ancien thème
    document.body.classList.remove(`theme-${this.themeActuel}`);
    console.log(`Ancien thème supprimée : thème-${this.themeActuel}`);

    //ajouter le nouveau thème
    document.body.classList.add(`theme-${nouveauTheme}`);
    console.log(`Nouveau thème appliqué : theme-${nouveauTheme}`);

    // Mettre à jour l'état
    this.themeActuel = nouveauTheme;
    this.compteurChangements++;

    // Mettre à jour l'affichage
    this.mettreAJourAffichage();

    // Sauvegardé les préférences
    this.sauvegarderPreferences();
  }

  // mettre à jour l'interface

  mettreAJourAffichage() {
    // afficher thème actuel
    const elementTheme = document.getElementById("theme-actuel");
    if (elementTheme) {
      elementTheme.textContent = `Thème ${this.themeActuel}`;
    }

    // Afficher le compteur
    const elementCompteur = document.getElementById("compteur");
    if (elementCompteur) {
      elementCompteur.textContent = this.compteurChangements;
    }
  }

  sauvegarderPreferences() {
    console.log(`Sauvegarde es préférences : ${this.themeActuel}`);
    this.afficherNotification(`Thème "${this.themeActuel}" sauvegardé !`);
  }

  afficherNotification(message) {
    console.log("${message}");

    const notification = document.createElement("div");
    notification.textContent = message;
    notification.style.cssText = `
       
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--couleur-principale);
        color: white;
        padding: 1rem;
        border-radius: 5px;
        z-index: 1000;
        transition: all 0.3s ease;
        `;

    document.body.appendChild(notification);

    //supprimer après 2 secondes

    setTimeout(() => {
      notification.style.opacity = "0";
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 2000);
  }

  obtenirThemeActuel() {
    return this.themeActuel;
  }

  obtenirStatistiques() {
    return {
      themeActuel: this.themeActuel,
      changements: this.compteurChangements,
    };
  }
}

// Initialisation
console.log("Démarage de l'application");

const gestionnaireThemes = new GestionnaireThemes();
