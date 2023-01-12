import React from 'react'
import ReactDOM from 'react-dom'
import { Heder } from './Components/Heder'
import { Imagenes } from './Components/Imagenes'
import './index.css'

////////////////////////////////////////////////////////
// desarrollado por keyner de la hoz 
////////////////////////////////////////////////////////

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <Heder />
    <Imagenes />
</>
);