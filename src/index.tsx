import React from 'react';
import {render} from 'react-dom';
import App from './App';
import styled from "styled-components";

render(
    <React.StrictMode>
       <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

