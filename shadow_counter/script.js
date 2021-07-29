// Recuperation des zones

const chiffre = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const dernierMessage = document.querySelector('.final')
const rejouer = document.querySelector('#rejouer')


// Lancement du compteur
LancerLeCompte()



function Reinitialiser() {
  counter.classList.remove('hide')
  dernierMessage.classList.remove('show')

  chiffre.forEach((num) => {
    num.classList.value = ''
  })

  chiffre[0].classList.add('in')
}

function LancerLeCompte() {
  chiffre.forEach((num, idx) => {
    const nextToLast = chiffre.length - 1

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide')
        dernierMessage.classList.add('show')
      }
    })
  })
}

rejouer.addEventListener('click', () => {
  Reinitialiser()
  LancerLeCompte()
})
