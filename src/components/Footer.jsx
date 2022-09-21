import React from "react"
import TwitterIcon from '../assets/twitter-icon.png';
import FacebookIcon from '../assets/facebook-icon.png';
import InstagramIcon from '../assets/instagram-icon.png';
import GithubIcon from '../assets/github-icon.png';
export default function Footer() {
    return <footer >
    <ul className="footer__links">
        <li>
            <a href="www.twitter.com" alt="Twitter Icon">
            <img src={TwitterIcon} alt="Profile Picture" />
            </a>
        </li>  
        <li>
            <a href="www.twitter.com" alt="Facebook Icon">
            <img src={FacebookIcon} alt="Profile Picture" />
            </a>
        </li>  
        <li>
            <a href="www.twitter.com" alt="Instagram Icon">
            <img src={InstagramIcon} alt="Profile Picture" />
            </a>
        </li>  
        <li>
            <a href="www.twitter.com" alt="Github Icon">
            <img src={GithubIcon} alt="Profile Picture" />
            </a>
        </li>  
    </ul>
    </footer>
}