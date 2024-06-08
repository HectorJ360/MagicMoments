'use strict'

const grande = document.querySelector('.big')
const punto = document.querySelectorAll('.punto')

punto.forEach( (Puntito, i)=>{
    punto[i].addEventListener('click',()=>{
        
        let posicion = i
        let operacion = posicion * -30

        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach (( Puntito, i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})