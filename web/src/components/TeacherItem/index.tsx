import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {

    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/68646116?s=460&v=4" alt="Silas Pereira"/>
            <div>
                <strong>Silas Pereira</strong>
                <span>Arqueologia</span>
            </div>
        </header>

        <p>
            Apaixonado pelas melhores histórias e descobertas do passsado.
            <br></br>
             Fissurado em desenhos, fósseis, artefatos e lugares que remetem ao Período Cretáceo, Idade da Pedra, Egito e as Guerras Mundiais. São mais de 5 mil alunos que passaram pela "viagem no tempo" que eu proporciono.
        </p>

        <footer>
            <p>
                Preço/Hora
                <strong>R$ 50,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );

}

export default TeacherItem;