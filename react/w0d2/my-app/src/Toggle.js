import React from 'react';
import style from './Paragraf.module.css';

const Paragraf = ({text})=> (
    <p className={style.text}>{text}</p>;
);
export default Paragraf;
)