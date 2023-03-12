import React from "react";

import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer-element">
            <a href="https://www.google.com/" target="_blank">{<FaFacebookF />}</a>
            <a href="https://www.google.com/" target="_blank">{<FaGoogle />}</a>
            <a href="https://www.google.com/" target="_blank">{<FaInstagram />}</a>
            <a href="https://www.google.com/" target="_blank">{<FaGithub />}</a>
            <a href="https://www.google.com/" target="_blank">{<FaTwitter />}</a>
        </footer>
    )
}