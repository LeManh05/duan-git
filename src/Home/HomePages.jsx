import React from 'react'
import Header from "./components/Header/Header.jsx"
import Banner from "./components/Banner/Banner.jsx"
import Main from "./components/Main/Main.jsx"
import Menu from "./components/Menu/Menu.jsx"
import Button from "./components/Button/Button.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Fixed from "./components/Fixed/Fixed.jsx"
const HomePages = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Main/>
        <Button/>
        <Menu/>
        <Footer/>
        <Fixed/>
    </div>
  )
}

export default HomePages