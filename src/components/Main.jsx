import React from "react";

const Main = () => {
    return (
        <main className="main">
            <div className="other">
                <div className="languages">
                    <h2>LANGUAGES</h2>
                    <div className="languages__wrapper">
                        <div className="languages__item">
                            <h3>ENGLISH</h3>
                            <p>A2+</p>
                        </div>
                        <div className="languages__item">
                            <h3>GERMAN</h3>
                            <p>A2</p>
                        </div>
                        <div className="languages__item">
                            <h3>BELARUSSIAN</h3>
                            <p>Native</p>
                        </div>
                        <div className="languages__item">
                            <h3>RUSSIAN</h3>
                            <p>Native</p>
                        </div>
                    </div>
                </div>
                <div className="education">
                    <h2>EDUCATION</h2>
                    <div>
                        <h3>Belarusian National Technical University.</h3>
                        <h3>Energy Engineer.</h3>
                        <p>2013-2018.</p>
                    </div>
                </div>
            </div>
            <div className="about__me">
                <h2>ABOUT ME</h2>
                <p>Let me introduce myself. I am twenty six years old. I was born in Postawy, but now live in Minsk.</p>
                <p>I do not have commercial experience, but I hope that I can compensate for this with my desire  for work. Now I am developing my skills in working with <span>ECMAScript 6, React.</span></p>
                <p>I also study <span>English</span>. I did not know English before. I studied German at School. I am going to improve my skills not only in English, but also in an IT sphere.</p>
            </div>
            <div className="projects">
                <h2>MY PROJECTS</h2>
                <ul className="projects__wrapper">
                    <li className="projects__item">
                        <a target="_blank" href="https://moviesearch-peach.vercel.app/">Movie Search</a>
                        <p>Description: Implemented registration, dynamic search, favorites and history tabs work</p>
                        <p>Stack: React, Redux, RTK Query, Custom Middleware, Custom Hooks.</p>
                    </li>
                    <li className="projects__item">
                        <a target="_blank" href="https://rolling-scopes-school.github.io/mishalapa-JSFEPRESCHOOL/memory-game/">Memory Game</a>
                        <p>Description: A game for the development of memory. Everyone must make their choice! Marvel or DC!</p>
                        <p>Stack: DOM Events, CSS Animations, Adaptive, Algorithms, localStorage.</p>
                    </li>
                    <li className="projects__item">
                        <a target="_blank" href="https://rolling-scopes-school.github.io/mishalapa-JSFEPRESCHOOL/portfolio/">Landing Page</a>
                        <p>Description: An example of a landing page made by me from the rs-school course</p>
                        <p>Stack: DOM Events, CSS Animations, Adaptive markup,  localStorage, pixelPerfect markup.</p>
                    </li>
                    <li className="projects__item">
                        <a target="_blank" href="https://mishalapa.github.io/game/">Executioner</a>
                        <p>Description: A children's game in which you have to guess the word faster than the executioner hangs his victim</p>
                        <p>Stack: React, Hooks</p>
                    </li>
                    <li className="projects__item">
                        <a target="_blank" href="https://mishalapa.github.io/Calculator/">Calculator</a>
                        <p>Description: You can do your calculations here. You can also use the keyboard.</p>
                        <p>Stack: DOM Events, Adaptive.</p>
                    </li>
                    <li className="projects__item">
                        <a target="_blank" href="https://rolling-scopes-school.github.io/mishalapa-JSFEPRESCHOOL/image-galery/">Image Galery</a>
                        <p>Description: Enter a request and enjoy the photos.</p>
                        <p>Stack:  DOM Events, CSS Animations, Adaptive markup, Web Photo API.</p>
                    </li>
                    
                    <li className="projects__item">
                        <a target="_blank" href="https://rolling-scopes-school.github.io/mishalapa-JSFEPRESCHOOL/custom-video/">Video Player</a>
                        <p>Description: Custom video player with videos about my pets</p>
                        <p>Stack: DOM Events, CSS Animations.</p>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Main;

