// ANIMATION TYPE SCRIPT

const textAnim = document.querySelector('.annonce');

let typewriter = new Typewriter(textAnim, {
    loop: false, 
    deleteSpeed: 10
})

typewriter
.pauseFor(9000)
.changeDelay(50)
.typeString('À déguster <span style ="color: #00b894;">en famille...')
.pauseFor(2800)
.deleteChars(14)
.typeString(' <span style ="color: #e84393;">à toutes occasions !')
.start()

// END ANIMATION TYPE SCRIPT

// SHOW FORM

const showFrom = document.querySelector('.passezCommande');
const formCommande = document.querySelector('.formulaire-commande');
const backdrop = document.querySelector('.backdrop');
const closeForm = document.querySelector('.closeForm');

showFrom.addEventListener('click', appearForm);

function appearForm() {
    formCommande.style.display = 'block';
    backdrop.style.display = 'block';
    // formCommande.style.zIndex = '10';
}

closeForm.addEventListener('click', hideForm);

function hideForm() {
    formCommande.style.display = 'none';
    backdrop.style.display = 'none';
}

backdrop.addEventListener('click', hideForm);

// END SHOW FORM
