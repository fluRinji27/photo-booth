import React, { useState } from 'react'
import { ModalContext } from './context'
import Header from './components/Header/Header'
import Video from './components/Video/Video'

import './App.scss'
import Advantages from './components/Advantages/Advantages'
import Catalog from './components/Catalog/Catalog'

function App () {
  const [isModalActive, setIsModalActive] = useState(false)

  const modalHandler = () => {
    setIsModalActive(!isModalActive)
  }

  return (
    <ModalContext.Provider value={{
      isModalActive,
      modalHandler,
    }}>
      <div
        className={isModalActive ? 'App_theme_overflow_hidden' : 'App'}>
        <Header/>
        <main className="main">
          <Video  id="qHmB8mZdWBA"/>
          <Advantages />
          <Catalog/>
          <div className="faq"></div>
          <div className="events"></div>
        </main>
        <footer className="footer">
          <div className="contacts"></div>
        </footer>
      </div>
    </ModalContext.Provider>
  )
}

export default App
