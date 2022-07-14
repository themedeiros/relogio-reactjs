import React from "react";


setInterval( ()=>{
    let date = new Date();
    let h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
    document.querySelector('#h').innerHTML=h
    document.querySelector('#m').innerHTML=m
    document.querySelector('#s').innerHTML=s
},1000)

function Clock() {
    return (
        <React.Fragment>
<div className='border'>
    <div className='clock'>
    <div id="h">00</div>
    <h4>Horas</h4>
    </div>
   
    <div className='clock'>
    <div id="m">00</div>
    <h4>Minutos</h4>
    </div>

    <div className='clock'>
    <div id="s">00</div>
    <h4>Segundos</h4>
    </div>
</div>
    </React.Fragment>
    )
}

export default Clock;