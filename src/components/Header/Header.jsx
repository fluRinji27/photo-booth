import React from 'react'
import { ReactComponent as LogoSVG } from '../../assets/img/logo.svg'

import './Header.scss'

const Header = () => {
  console.log('header')
  return (
    <header className="header wrapper">
      <LogoSVG className="logo"/>
    </header>
  )
}

export default React.memo(Header)