let count = 0; // Initialisation du compteur

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // Met à jour l'affichage du compteur
}

function increaseCount() {
    count++; // Incrémente le compteur
    displayCount(); // Met à jour l'affichage
    checkCountValue(); // Vérifie si un message doit être affiché
}

function decreaseCount() {
    count = 0; // Réinitialise le compteur à zéro
    displayCount(); // Met à jour l'affichage
    alert("Vous avez réinitialisé votre nombre d'abonnés");
}

function checkCountValue() {
    if (count === 10) {
        alert("Votre publication Instagram a gagné 10 abonnés ! Félicitations !");
    } else if (count === 20) {
        alert("Votre publication Instagram a gagné 20 abonnés ! Continuez comme ça !");
    }
}
