import React from 'react'
//import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { signOut } from 'next-auth/react';
//import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'



const handleSignout = (e) => {
    e.preventDefault()
    signOut();
}
const Navbar = () => {
  
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark" disableDynamicMediaQueries>
                <div className="container-fluid px-3">

                    <a className="navbar-brand p " href="#">
                        <img src="https://easetemplate.com/free-website-templates/cointrade/images/logo.png" alt="loading" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-0">
                            <li className="nav-item">
                                <a className="nav-link navbar-brand text-uppercase  active" aria-current="page" href="/">UnStitch</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navbar-brand text-uppercase  active" aria-current="page" href="#">Lawn</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link navbar-brand text-uppercase " href="#">Women</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navbar-brand text-uppercase " href="#">Shoes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navbar-brand text-uppercase " href="#">Bags</a>
                            </li>  <li className="nav-item">
                                <a className="nav-link navbar-brand text-uppercase " href="#">Fragnance</a>
                            </li>
                        </ul>
                        <a onClick={() => signOut()} href="/" className="nav-link navbar-brand text-uppercase ">SignOut</a>
                        <a className="nav-link navbar-brand text-uppercase " href="/login">Signup</a>

                        <div className={styles.container}>
                            <div className={styles.cartbutton}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-cart4 text-white" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                </svg>
                                <span class={styles.cartqty}></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar