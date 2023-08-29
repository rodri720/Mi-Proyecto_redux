import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Link  } from 'react-router-dom';
import Button from 'react-bootstrap/Button'; 
import Uno from './componentes/Uno';
import Dos from './componentes/Dos';

const MiRouter = () => {
    return (
       <>
       <Router>
        <Link to="/uno">Uno<Button>Ir al Uno</Button></Link>
        <Link to="/uno">Dos<Button>Ir al Dos</Button></Link>
        <Routes>
           
            <Route path="/uno" element={<Uno/>} />
            <Route path="/dos" element={<Dos/>} />
        </Routes>

       </Router>
       </>
    );
}
export default MiRouter;