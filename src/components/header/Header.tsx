import { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import { HeaderContainer } from './style'

export default function Header() {

  return (
    <HeaderContainer>
         {/* <div className='background-dio'></div> */}
          
          <object data='https://hermes.digitalinnovation.one/assets/diome/logo.svg' width={60}></object>

          <nav>

            <ul>
            <Link  to="/"><li translate='no' className='active'>Home</li></Link>
            <Link  to="/login"><li>Entrar</li></Link>
            <Link  to="/register"><li>Cadastrar</li></Link>
            </ul>
              
          </nav>

    </HeaderContainer>
  )
}
