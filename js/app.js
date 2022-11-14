const carre = document.getElementById('carre')

const carrebleu = document.getElementById('carrebleu')

carrebleu.addEventListener('click', event => {
    console.log('tu est sur le carre bleu');
})


carre.addEventListener('mouseenter', event => {
    console.log('Tu est dans le carre rouge')
})


carre.addEventListener('mouseleave', event => {
    console.log("Je suis sorti du carre rouge")
})

const p = document.getElementById('paragraph')

const p2 = document.getElementById('p2')

p.addEventListener('click', () => {
    // p2.style.display = 'block'
    if (p2.style.display === 'block') {
        p2.style.display = 'none'   
    } else {
        p2.style.display = 'block'
    }
})

const number = document.getElementById('number');
const plus = document.getElementById('plus');
const moins = document.getElementById('moins');
const reset = document.getElementById('reset');
let cpt = 0;
const Min = document.getElementById('Min');
const Max = document.getElementById('Max');




plus.addEventListener('click', () => {
   if (cpt < 300) {
    moins.disabled = false;
    cpt++;
    number.textContent = cpt
   } else {
    plus.disabled = true
   }
});


moins.addEventListener('click', () => {
   if ( cpt > -1000) {
    plus.disabled = false;
    cpt--;
    number.textContent = cpt;
   } else {
    moins.disabled = true
   }
});

reset.addEventListener('click', () => {
    cpt = 0;
    number.textContent = cpt;
    plus.disabled = false;
    moins.disabled = false;    
})

Max.addEventListener('click', () => {
    cpt = 300;
    number.textContent = cpt;
})

Min.addEventListener('click', () => {
    cpt = -1000;
    number.textContent = cpt;
})

