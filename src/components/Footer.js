import './Footer.css'
import {FaGithub } from 'react-icons/fa'
function Footer(){
    return(
        <div>
            <nav className='footer-landing-page'>
                <ul>
                    <li>Storm</li>
                    <li>Storm 2023</li>
                    <li><FaGithub/></li>
                </ul>
            </nav>
        </div>
    )
}

export default Footer