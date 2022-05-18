import React from "react";
import avatar from  "../image/avatar1.jpg"
import git from '../image/github.svg'
import letter from '../image/letter.png'
import phone from '../image/phone.png'
import map from  '../image/map.png'
import telegram from "../image/telegram.svg"
import discord from '../image/discord.svg'
import boardgame from '../image/boardgame.png'
import hiking from '../image/hiking.png'
import detector from '../image/detector.png'



const Header = () => {
    return (
        <header className="header">
        <div className='avatar'>
          <img className='avatar__image' src={avatar}/>
          <div className='avatar__title'>
            <p>Mikhail</p>
            <p>Lapushynski</p>
            <h4>Front-end developer</h4>
          </div>
        </div>
        <div className="skills__interest">
            <div className='skills'>
                <h2>SKILLS</h2>
                <ul className="skills__wrapper">
                <li className="skills__item">
                    <p>JavaScript</p>
                </li>
                <li className="skills__item">
                    <p>React</p>
                </li>
                <li className="skills__item">
                    <p>Redux</p>
                </li>
                <li className="skills__item">
                    <p>TypeScript</p>
                </li>
                <li className="skills__item">
                    <p>HTML/CSS/SCSS</p>
                </li>
                <li className="skills__item">
                    <p>Git</p>
                </li>
                <li className="skills__item">
                    <p>Webpack</p>
                </li>
                <li className="skills__item">
                    <p>Figma</p>
                </li>
            </ul>
            </div>
            <div className="interest">
                <h2>INTERESTS</h2>
                <div className="interest__wrapper">
                    <div className="interest__item">
                        <img src={boardgame}/>
                        <p>Board Games</p>
                    </div>
                    <div className="interest__item">
                        <img src={hiking}/>
                        <p>Hiking</p>
                    </div>
                    <div className="interest__item">
                        <img src={detector}/>
                        <p>Metal Detector</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact">
            <h2>CONTACTS</h2>
          <ul className="contact__wrapper">
            <li className="contact__item">
                <img src={letter}/>
                <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox">mishamedme@gmail.com</a>
            </li>
            <li className="contact__item">
                <img src={telegram}/>
                <a target="_blank" href="https://telegram.me/Misha_lapa">@Misha_lapa</a>
            </li>
            <li className="contact__item">
                <img src={phone}/>
                <a target="_blank" href="tel:+375339133961">+375339133961</a>
            </li>
            <li className="contact__item">
                <img src={discord}/>
                <a>mishalapa#6203</a>
            </li>
            <li className="contact__item">
                <img src={map}/>
                <a target="_blank" href="https://www.google.com/maps/place/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.6704045,26.7069003,8.14z/data=!4m5!3m4!1s0x46dbcfd35b1e6ad3:0xb61b853ddb570d9!8m2!3d53.9006011!4d27.558972?hl=ru">Minsk</a>
            </li>
            <li className="contact__item">
                <img src={git}/>
                <a target="_blank" href="https://github.com/mishalapa">github.com/mishalapa</a>
            </li>
          </ul>
        </div>
    </header>
    )
}

export default Header;