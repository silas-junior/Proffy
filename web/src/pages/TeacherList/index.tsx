import React from'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
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
            </main>
        </div>
    );

}

export default TeacherList;