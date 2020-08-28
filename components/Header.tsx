import React from 'react'
import TopHeader from './TopHeader'
import Link from 'next/link'

interface HeaderProps {
    restaurantName: string;
    phoneNumber: string,
    hours: string
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <div className="header container" style={headerStyle}>
            <TopHeader phoneNumber={props.phoneNumber} hours={props.hours} />

            <nav className="navbar navbar-expand-lg ftco-navbar-light" style={navbarStyle}>
                <div className="container">
                    <a className="navbar-brand" href="/">{props.restaurantName}</a>
                    <Link href='/menu'>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="oi oi-menu"></span> Menu
                        </button>
                    </Link>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link href="/">
                                    <a className="nav-link">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about">
                                    <a className="nav-link">About</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/menu">
                                    <a className="nav-link">Menu</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a className="nav-link">Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const headerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    background: "gray",
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "14px",
    width: "100%",
    maxWidth: "960px"
} as React.CSSProperties

const navbarStyle = {
    background: "transparent",
    padding: 0,
} as React.CSSProperties

export default Header