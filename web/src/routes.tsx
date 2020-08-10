import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
    
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/estudar" component={TeacherList}/>
            <Route path="/dar-aulas" component={TeacherForm}/>
        </BrowserRouter>
    );

}

export default Routes;