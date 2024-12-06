function checkAdPopup(fishCount) {
    if (fishCount % 120 === 0) {
        const randomNum = Math.random();
        if (randomNum < 0.3) { // 30% de chance
            const message = "Saviez-vous qu'être pêcheur est l'un des métiers les plus anciens et respectés ? Le métier de pêcheur, pratiqué depuis des millénaires, combine tradition et durabilité. De l'utilisation de techniques ancestrales à la modernisation des pratiques, les pêcheurs jouent un rôle crucial dans la préservation des écosystèmes marins. Découvrez la beauté de la mer et l'importance de sa conservation à travers le travail acharné des pêcheurs du monde entier.";
            showAd(message);
        }
    }
}

function showAd(message) {
    const adPopup = document.createElement('div');
    adPopup.style.position = 'fixed';
    adPopup.style.top = '50%';
    adPopup.style.left = '50%';
    adPopup.style.transform = 'translate(-50%, -50%)';
    adPopup.style.width = '70%';
    adPopup.style.height = '70%';
    adPopup.style.backgroundColor = '#003366'; // Couleur de fond bleu foncé
    adPopup.style.color = '#FFFFFF'; // Couleur du texte blanc
    adPopup.style.border = '2px solid #007BFF'; // Bordure pour le style
    adPopup.style.padding = '20px';
    adPopup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Ombre pour le style
    adPopup.style.zIndex = '1000';

    // Utilisation de Flexbox pour centrer le contenu
    adPopup.style.display = 'flex';
    adPopup.style.flexDirection = 'column';
    adPopup.style.justifyContent = 'space-between'; // Espace entre le texte et le bouton
    adPopup.style.height = '100%'; // Utiliser toute la hauteur disponible

    // Créer la balise <img>
    const image = document.createElement('img');
    image.src = '/images/fishing.png'; // Remplacez par le chemin de votre image
    image.alt = 'Image de la pêche !'; // Ajoutez une description pour l'accessibilité
    image.style.width = '300px'; // Augmenter la taille de l'image
    image.style.height = 'auto'; // Conserver le ratio d'aspect
    image.style.display = 'block'; // Centrer l'image
    image.style.margin = '0 auto 20px'; // Marges pour espacer l'image et le texte

    // Ajouter l'image au popup
    adPopup.appendChild(image);

    // Créer un conteneur pour le texte
    const textContainer = document.createElement('div');
    textContainer.style.flexGrow = '1'; // Permet au conteneur de prendre l'espace restant
    textContainer.style.display = 'flex';
    textContainer.style.alignItems = 'center'; // Centrer verticalement
    textContainer.style.justifyContent = 'center'; // Centrer horizontalement
    textContainer.appendChild(document.createTextNode(message)); // Ajouter le message

    // Ajouter le conteneur de texte au popup
    adPopup.appendChild(textContainer);

    // Bouton de fermeture
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fermer';
    closeButton.style.marginTop = '10px';
    closeButton.onclick = () => adPopup.remove(); // Ferme la pop-up lorsqu'on clique sur le bouton
    closeButton.style.color = '#FFFFFF'; // Couleur du texte du bouton
    closeButton.style.backgroundColor = '#007BFF'; // Couleur de fond du bouton
    closeButton.style.border = 'none'; // Enlever la bordure
    closeButton.style.padding = '10px 20px'; // Ajouter du rembourrage
    closeButton.style.cursor = 'pointer'; // Curseur pointer pour l'interaction

    // Ajouter le bouton au bas de la pop-up
    adPopup.appendChild(closeButton);
    document.body.appendChild(adPopup);

    setTimeout(() => {
        adPopup.remove();
    }, 10000); // La pop-up disparaît après 10 secondes
}







export { checkAdPopup };
