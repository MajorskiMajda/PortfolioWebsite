import React, {useState} from 'react';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';



export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header>
            <img alt='majdalogo' src='https://i.ibb.co/0Vv2h3m/majda.png'></img>
            <h6>Majda Majorski</h6>
            <div className="hamburger-menu" onClick={toggleMenu}>
               <MenuRoundedIcon />
            </div>
            <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                <a href="https://github.com/MajorskiMajda" target="_blank" rel="noopener noreferrer"><img alt='dd' src="https://i.ibb.co/1dcVcqw/github-mark.png"></img></a>
            </ul>
        </header>
    )
}