import React from 'react'
import { BiMale, BiNetworkChart } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { BsWhatsapp, BsInstagram, BsGithub, BsFacebook } from "react-icons/bs";
import './SobreMim.css'

export default function SobreMIm() {
  return (
    <div className='sobre'>
      <div className='sobre-mim'>
        <div className='icone'>
          <BiMale className='icons' />
        </div>
        <div className='texto'> ME CHAMO PAULO VICTOR ARRUDA, TENHO 36 ANOS RESIDENTE EM CUIABÁ MT. SOU CASADO E TENHO UM CASAL DE FILHOS. </div>
      </div>
      <div className='sobre-mim'>
        <div className='icone'>
          <MdWork className='icons' />
        </div>
        <div className='texto'> Técnico de campo, com conhecimento em informatica e eletrônica. Mais de 15 anos de experiência em atendimento em campo, sei como trabalhar em ambientes desafiadores com ritmo acelerado. </div>
      </div>
      <div className='sobre-mim'>
        <div className='icone'>
          <FaInfo className='icons' />
        </div>
        <div className='texto'> EXPERIENCIA PROFISSIONAL: <br/>
        Diebold Nixdorf: Técnico Eletronico de Campo
        Sensormatic Eletronica do Brasil: Técnico de campo<br/>
        Perto Automação Bancaria: Técnico Eletronico<br/>
        Toledo Balança: Técnico de Balança
         </div>
      </div>
      <div className='sobre-mim links'>
        <div className='icone'>
          <BiNetworkChart className='icons' />
        </div>
        <div className='redes'>
          <a href='https://google.com' target='_blank' className='icon-link'>
            <BsWhatsapp className='icon-link wpp' />
          </a>
          <a href='https://www.instagram.com/sensorseg1/' target='_blank' className='icon-link'>
            <BsInstagram className='icon-link ins' />
          </a>
          <a href='https://github.com/parrudacba' target='_blank' className='icon-link'>
            <BsGithub className='icon-link git' />
          </a>
          <a href='https://google.com' target='_blank' className='icon-link'>
            <BsFacebook className='icon-link fac' />
          </a>
        </div>
      </div>
    </div>
  )
}