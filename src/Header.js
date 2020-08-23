import React, { useState } from 'react'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import { Avatar } from '@material-ui/core';
import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div class="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/200px-Logo_of_YouTube_%282015-2017%29.svg.png"
                        alt='youtube logo'
                    />
                </Link>

            </div>

            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type='text' />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar
                    src="https://avatars0.githubusercontent.com/u/58652823?s=460&u=cedb73f3b5bdab9d851457607b3185f21b9905d1&v=4"
                    alt="Nilesh Pant"
                />
            </div>

        </div>
    )
}

export default Header
