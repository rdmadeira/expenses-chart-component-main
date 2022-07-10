async function amountAsign(){
    let dataAmount = fetch('./data.json');
    dataAmount.then(res=>{return res.json()})
              .then(data=> {bucleAsign(data);})
              .catch(err=>console.error(`${err}`));  
    let fecha = Date.now(); // genera un numero
    let hoy = new Date(fecha).getDay(); // genera numero de 0 a 6
    hoy == 0 ? hoy = 7 : hoy;
    let style = document.styleSheets.item(0);
    const barrasVerticales = document.getElementsByClassName('barra_vertical');
    barrasVerticales[hoy - 1].classList.replace('soft-red', 'cyan');
    /* let dataAmount1 = await dataAmount;
    console.log(dataAmount1); */
    function bucleAsign(data){
        for(let i=0; i<barrasVerticales.length; i++) {   
            barrasVerticales[i].style.height = 
                data[i].amount * 3 + 'px';
            barrasVerticales[i].setAttribute('id', 'bv' + i);

            // funcionó declarando let al i, para que se mantenga en el scopo de la funcion.
            barrasVerticales[i].addEventListener('mouseover', ()=> appearValue(i));
            barrasVerticales[i].addEventListener('mouseout', disappearValue);
        }
        function appearValue(el) {
            console.log(data[el].amount);
            style.insertRule(`#bv${el}::before {content: "${data[el].amount}";  background-color: var(--Dark_brown); color: var(--Very_pale_orange);  font-size: 0.5em; font-weight: 700; position: absolute; top: -30px;  left: -10px; padding: 5px 10px; border-radius: 5px;}`,  style.cssRules.length);
        }
        function disappearValue() {
            style.deleteRule(style.cssRules.length -1);
        }
    }
    //barrasVerticales[0].addEventListener('mouseover', ()=> appearValue(0));
    //// barrasVerticales[0].addEventListener('mouseout', ()=> disappearValue(0));
    //barrasVerticales[1].addEventListener('mouseover', ()=> appearValue(1));
    //// barrasVerticales[1].addEventListener('mouseout', ()=> disappearValue(1));
    //barrasVerticales[2].addEventListener('mouseover', ()=> appearValue(2));
    //// barrasVerticales[2].addEventListener('mouseout', ()=> disappearValue(2));
    //barrasVerticales[3].addEventListener('mouseover', ()=> appearValue(3));
    //// barrasVerticales[3].addEventListener('mouseout', ()=> disappearValue(3));
    //barrasVerticales[4].addEventListener('mouseover', ()=> appearValue(4));
    //// barrasVerticales[4].addEventListener('mouseout', ()=> disappearValue(4));
    //barrasVerticales[5].addEventListener('mouseover', ()=> appearValue(5));
    //// barrasVerticales[5].addEventListener('mouseout', ()=> disappearValue(5));
    //barrasVerticales[6].addEventListener('mouseover', ()=> appearValue(6));
    //// barrasVerticales[6].addEventListener('mouseout', ()=> disappearValue(6));
    
    
    console.log(style);
}
amountAsign();
