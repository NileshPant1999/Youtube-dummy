import React from 'react'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import { Avatar } from '@material-ui/core';
import "./Header.css"

function Header() {
    return (
        <div class="header">
            <div className="header__left">
                <MenuIcon />
                <img
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/200px-Logo_of_YouTube_%282015-2017%29.svg.png"
                    alt='youtube logo'
                />
            </div>

            <div className="header__input">
                <input placeholder="Search" type='text' />
                <SearchIcon className="header__inputButton" />
            </div>

            <div className="header__icons">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar
                    src="https://avatars0.githubusercontent.com/u/58652823?s=460&u=cedb73f3b5bdab9d851457607b3185f21b9905d1&v=4"
                    alt="Nilesh Pant"
                />
            </div>

        </div>
    )
}

export default Header
