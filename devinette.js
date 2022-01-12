alert('BIENVENU !');

let nbr1 = Math.random();

let nbr100 = nbr1 * 100;

let nbr2 = Math.floor(nbr100);

let tentative = parseInt(prompt(`Saisissez un nombre  compris entre 1 et 100 et vous avez droit à 6 tentatives`));

for (let compteur = 1; compteur < 6; compteur++) {

    if (!isNaN(tentative)) {
        if (nbr2 === tentative) {
            alert('BRAVO !');
            compteur = 6;
        } else {
            if (nbr2 < tentative) {
                alert(`Votre nombre entré est inferieur, tentez encore  ${compteur}`);
            } else {
                alert(`Votre nombre est supérieur, tentez encore  ${compteur}`);
            }
        }



    } else {
        prompt('Veuillez entrer un autre nombre');
    }
}

alert(`Le bon resutal était ${nbr2}`);

document.getElementById('p1').innerHTML = `Le bon chiffre était ${nbr2}`;

alert('Réessayez plus tard et MERCI !');