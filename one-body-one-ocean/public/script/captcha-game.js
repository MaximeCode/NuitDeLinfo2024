const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const checkbox = document.getElementById("checkbox");
const successMessage = document.getElementById("captchaSuccessMessage");
const failureMessage = document.getElementById("captchaFailureMessage");
const retryButton = document.getElementById("retryButton");

let fish = { x: 50, y: 300, width: 50, height: 30, velocity: 0 };
let gravity = 0.2;
let jumpStrength = -6;
let isGameRunning = false;
let isCaptchaValidated = false;
let seaweeds = [];
let seaweedWidth = 50;
let seaweedGap = 150;
let seaweedSpeed = 2;
let survivalTime = 0;
let pipesPassed = 0;

const fishImage = new Image();
fishImage.src = "/images/PixelFish.png";

// Fonction pour dessiner le poisson
function drawFish() {
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(fishImage, -fish.x - fish.width, fish.y, fish.width, fish.height);
    ctx.restore();
}

// Fonction pour mettre à jour la position du poisson
function updateFish() {
    fish.velocity += gravity;
    fish.y += fish.velocity;

    if (fish.y + fish.height > canvas.height) {
        fish.y = canvas.height - fish.height;
        endGame(false, "Le poisson a touché le sol");
    }

    if (fish.y < 0) {
        fish.y = 0;  // Empêche le poisson de sortir du haut du canvas
        fish.velocity = 0;  // Arrête toute vitesse verticale
        endGame(false, "Le poisson a touché le plafond");
    }
}

// Fonction pour dessiner les algues (obstacles)
function drawSeaweeds() {
    seaweeds.forEach((seaweed) => {
        ctx.fillStyle = "#28a745";
        ctx.fillRect(seaweed.x, 0, seaweedWidth, seaweed.top);
        ctx.fillRect(seaweed.x, canvas.height - seaweed.bottom, seaweedWidth, seaweed.bottom);
    });
}

// Fonction pour vérifier la collision avec les algues
function checkCollisions() {
    for (let i = 0; i < seaweeds.length; i++) {
        let seaweed = seaweeds[i];

        // Vérifie la collision avec le haut des algues
        if (fish.x + fish.width > seaweed.x && fish.x < seaweed.x + seaweedWidth) {
            if (fish.y < seaweed.top || fish.y + fish.height > canvas.height - seaweed.bottom) {
                endGame(false, "Collision avec les algues");
                return;
            }
        }
    }
}

// Fonction pour mettre à jour les obstacles
function updateSeaweeds() {
    seaweeds.forEach((seaweed) => {
        seaweed.x -= seaweedSpeed;  // Les obstacles se déplacent vers la gauche
        if (seaweed.x + seaweedWidth < 0) {
            seaweeds.shift();  // Si l'obstacle est hors de l'écran, on le supprime
            pipesPassed++;
        }
    });

    if (seaweeds.length === 0 || seaweeds[seaweeds.length - 1].x < canvas.width - 200) {
        const topHeight = Math.random() * (canvas.height - seaweedGap - 100) + 50;
        const bottomHeight = canvas.height - topHeight - seaweedGap;
        seaweeds.push({ x: canvas.width, top: topHeight, bottom: bottomHeight });
    }
}

// Boucle du jeu
function gameLoop() {
    if (!isGameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFish();
    drawSeaweeds();
    updateFish();
    updateSeaweeds();
    checkCollisions();

    // Chronomètre de survie
    if (survivalTime < 5) {
        survivalTime += 1 / 60;  // Augmente le temps en secondes (60 FPS)
    }

    // Vérifier les conditions de victoire
    if (survivalTime >= 5) {
        endGame(true, "Survie de 5 secondes");  // Le joueur a survécu pendant 5 secondes
    }
    if (pipesPassed >= 3) {
        endGame(true, "3 tuyaux passés");  // Le joueur a passé 3 tuyaux
    }

    requestAnimationFrame(gameLoop);  // Appelle la fonction de la boucle de jeu à chaque image
}

// Fonction pour démarrer le jeu
function startGame() {
    fish = { x: 50, y: 300, width: 50, height: 30, velocity: 0 };
    seaweeds = [];
    survivalTime = 0;  // Réinitialiser le temps de survie
    pipesPassed = 0;   // Réinitialiser le compteur de tuyaux passés
    isGameRunning = true;
    canvas.style.display = "block";  // Affiche le canvas
    gameLoop();  // Lance la boucle du jeu
}

function endGame(victory, reason) {
  isGameRunning = false;  // Arrête le jeu
  console.log(reason);  // Affiche la raison de la victoire ou de la défaite

  // Afficher le message de succès si victoire
  if (victory) {
      successMessage.style.display = "flex";
      const successText = successMessage.querySelector("p");
      successText.textContent = "Captcha validé";  // Change uniquement le texte du message
      // Modifier le texte du label pour afficher "Captcha validé"
      const captchaText = document.getElementById("captchaText");
      captchaText.textContent = "Captcha validé";  // Change le texte de la case à cocher

      setTimeout(() => {
          successMessage.style.display = "none";  // Cache le message après 3 secondes
          resetCaptcha();  // Réinitialiser l'affichage du captcha après la victoire
      }, 3000);  // Affiche le message de succès pendant 3 secondes
      canvas.style.display = "none";  // Cache le canvas après la victoire
      checkbox.style.display = "block";  // Affiche la case CAPTCHA
      checkbox.checked = false;  // Décocher la case CAPTCHA après la victoire
  } else {
      failureMessage.style.display = "flex";
      showRetryButton();  // Afficher le bouton "Réessayer"
  }
}


// Réinitialiser le CAPTCHA après la victoire
function resetCaptcha() {
  checkbox.style.display = "block";  // Réafficher la case CAPTCHA
  checkbox.checked = false;  // Décocher la case
  failureMessage.style.display = "none";  // Cacher le message d'échec
  retryButton.style.display = "none";  // Cacher le bouton de réessayer
}

// Affiche le bouton "Réessayer" au centre du canvas
function showRetryButton() {
  retryButton.style.display = "block";  // Affiche le bouton au centre du canvas
}

// Relance le jeu après un échec
retryButton.addEventListener("click", () => {
    failureMessage.style.display = "none";
    retryButton.style.display = "none";  // Masquer le bouton après le clic
    startGame();
});

// Fonction pour gérer le saut
function jump() {
  console.log("Saut demandé");
  // Le poisson peut sauter à tout moment, sauf s'il est déjà au sol
  if (fish.y >= canvas.height - fish.height) {
      console.log("Poisson au sol, saut effectué");
      fish.velocity = jumpStrength;  // Applique une vitesse négative pour faire monter le poisson
  } else {
      console.log("Poisson en l'air, saut effectué");
      fish.velocity = jumpStrength;  // Permet au poisson de sauter même en l'air
  }
}

// Fonction qui désactive la case CAPTCHA lorsque le jeu est en cours
function disableCaptchaOnGame() {
    if (isGameRunning) {
        checkbox.disabled = true;
    } else {
        checkbox.disabled = false;
    }
}

// Écouteur d'événement pour détecter la barre d'espace (saut)
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        console.log("Barre d'espace pressée");  // Débogage pour vérifier la détection de la barre d'espace
        if (isGameRunning) {
            event.preventDefault();  // Empêche l'action par défaut de la barre d'espace si le jeu est en cours
            jump();  // Appelle la fonction jump lorsque la barre d'espace est enfoncée
        }
    }
});

// Démarre le jeu lorsque la case est cochée
checkbox.addEventListener("change", (e) => {
    if (e.target.checked && !isCaptchaValidated) {
        startGame();  // Démarre le jeu si la case est cochée
        isCaptchaValidated = true;  // Marque le captcha comme validé
    }

    disableCaptchaOnGame();  // Désactive la case CAPTCHA une fois le jeu démarré
});