import React from 'react'
import foto from './assets/foto.jpg'
import './Perfil.css'

export default function Perfil() {
  return (
    <div className='perfil'>
      <img src={foto} alt='foto' className='foto-perfil'/>
      <h2 className='nome'> PAULO VICTOR </h2>
      <div className='h3'>
        <h3 className='curso'>Estudante </h3>
        <h3 className='curso'> Análise e Desenvolvimento de Sistemas </h3>
        <h3 className='curso'>Faculdade Invest </h3>
      </div>
      <p className='contato'> Email: parrudacba@gmail.com | Telefone: (65)98475-2307</p>
    </div>
  )
}
