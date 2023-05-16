import React from 'react'
import "./Styles/Header.css"

const Header = ({handleChangeFont}) => {
    return (
        <header className='header'>
            <img className='header__logo' src="/logo.svg" alt="" />
            <div className='header__settings'>
                <div>
                    <select className='font-select' onChange={handleChangeFont} name='fonts' id='fonts'>
                    <option value="Roboto">Roboto</option>
                    <option value="serif">Serif</option>
                    <option value="Quicksand">Quicksand</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Lato">Lato</option>
                </select>
                <div className='arrow'></div>
                </div>
                
                <button className='theme-btn'></button>
            </div>
        </header>
    )
}

export default Header