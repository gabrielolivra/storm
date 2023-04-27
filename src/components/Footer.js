import './Footer.css'
import {FaGithub } from 'react-icons/fa'
const url ='https://www.github.com/gabrielolivra'
function Footer(){
    return(
        <div>
            <nav className='footer-landing-page'>
                <ul>
                    <li>Storm</li>
                    <li>Storm 2023</li>
                    <a href={url}><li><FaGithub/></li></a>
                </ul>
            </nav>
        </div>
    )
}

export default Footer