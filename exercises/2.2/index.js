const btn = document.querySelector('button');
const p = document.querySelector('p');
const span = document.querySelector('span');
let compteur = 0;

btn.addEventListener('click', () => {
    compteur ++;
    if(compteur >= 5 ){
        span.innerHTML=`Bravo, bel échauffement !`
    }
    if( compteur >= 10 ){
        span.innerHTML=`Vous êtes passé maître en l'art du clic`;
    }
    p.innerHTML = `Le nombre de click est de ` + compteur;
    console.log("Nombre de click" + compteur);
  });






