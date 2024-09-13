/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./header.css";
import NetflixLogo from "../../assets/images/NetflixLogo.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
    const [showTransparent, setShowTransparent] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowTransparent(true);
            } else {
                setShowTransparent(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`header_outer_container ${showTransparent && "transparent"}`}>
            <div className='header_container'>
                <div className='header_left'>
                    <ul>
                        <li><img src={NetflixLogo} alt="Netflix Logo" width="100" /></li>
                        <li>Netflix</li>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>Latest</li>
                        <li>My List</li>
                        <li>Browse by Languages</li>
                    </ul>
                </div>
                <div className='header_right'>
                    <ul>
                        <li><SearchIcon /></li>
                        <li><NotificationsNoneIcon /></li>
                        <li><AccountBoxIcon /></li>
                        <li><ArrowDropDownIcon /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
