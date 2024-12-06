export const increaseCookies = (cookies, setCookies, multiplier) => {
    setCookies(cookies + multiplier); // Incrémente le nombre de cookies
  };
  
  export const purchaseUpgrade = (cookies, setCookies, cost) => {
    if (cookies >= cost) {
      setCookies(cookies - cost); // Déduit le coût des cookies
      return true; // Retourne vrai si l'achat est réussi
    }
    return false; // Retourne faux si pas assez de cookies
  };
  
  export const moveFish = (setFishPosition) => {
    const newLeft = Math.random() * 200; // Position aléatoire à gauche
    const newTop = Math.random() * 256; // Position aléatoire en hauteur
    setFishPosition({ left: newLeft, top: newTop }); // Met à jour la position du poisson
  };
  


  export const handleFishEvents = (cookies, setFishSize, setSpin) => {
    // Vérifie si le nombre de cookies atteint un multiple de 25
    if (cookies % 25 === 0 && cookies > 0) {
      const randomEvent = Math.floor(Math.random() * 3); // Génère un nombre aléatoire entre 0 et 2
  
      switch (randomEvent) {
        case 0:
          // Agrandir le poisson
          setFishSize(prevSize => prevSize + 20); // Augmente la taille du poisson
          break;
        case 1:
          // Rétrécir le poisson
          setFishSize(prevSize => Math.max(50, prevSize - 20)); // Réduit la taille mais ne descend pas en dessous de 50
          break;
        case 2:
          // Animation inédite (par exemple, faire tourner le poisson)
          setSpin(true); // Ajoute la classe pour l'animation de rotation
          setTimeout(() => setSpin(false), 500); // Réinitialise après 0.5 secondes
          break;
        default:
          break;
      }
    }
  };
  
  
  
  
  
  
  