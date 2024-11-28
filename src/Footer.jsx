import React from 'react';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer>
            <div className='info'>
                <p> <MailOutlineOutlinedIcon className='ico'/>majorskimajda98@gmail.com</p>
                <p><PhoneIphoneOutlinedIcon className='ico' />+381601305588</p>
                <a href="https://github.com/MajorskiMajda" target="_blank" rel="noopener noreferrer"><img className='ico' alt='dd' src="https://i.ibb.co/1dcVcqw/github-mark.png"></img>Majda Majorski</a>
            </div>
            <p className='footerTxt'><span>{year} © Majda Majorski</span></p>
        </footer>
    )
}