import React from'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import sutdyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div className="page-landing-content">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img 
                    src={landingImg}
                    alt="Plataforma de Estudos" 
                    className="hero-image"
                />
                
                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={sutdyIcon} alt="Estudar"/>
                        Estudar
                    </a>

                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar"/>
                        Estudar
                    </a>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já reaizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>

            </div>
        </div>
    );
}

export default Landing;