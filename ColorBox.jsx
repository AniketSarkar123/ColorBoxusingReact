import { useState } from "react";
import './ColorBox.css';

function randomchoice(arr){
    const idx=Math.floor(Math.random()*arr.length);
    return arr[idx];
}
export default function ColorBox({colors}){
    const [color,setColor]=useState(randomchoice(colors));

    const changecolor=()=>{
        const randomcolor=randomchoice(colors);
        setColor(randomcolor);
    };
    return (<div className="Colorbox" onClick={changecolor} style={{backgroundColor:color}}></div>)
}