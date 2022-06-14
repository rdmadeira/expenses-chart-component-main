function amountAsign(){
    let dataAmount = [
        {
        "day": "mon",
        "amount": 17.45
        },
        {
        "day": "tue",
        "amount": 34.91
        },
        {
        "day": "wed",
        "amount": 52.36
        },
        {
        "day": "thu",
        "amount": 31.07
        },
        {
        "day": "fri",
        "amount": 23.39
        },
        {
        "day": "sat",
        "amount": 43.28
        },
        {
        "day": "sun",
        "amount": 25.48
        }
    ]
    let fecha = Date.now(); // genera un numero
    let hoy = new Date(fecha).getDay(); // genera y¿numero de 0 a 6
    hoy == 0 ? hoy = 7 : hoy;
    let style = document.styleSheets.item(0);
    const barrasVerticales = document.getElementsByClassName('barra_vertical');
    barrasVerticales[hoy - 1].style.backgroundColor = 'var(--Cyan)';
    barrasVerticales[hoy - 1].addEventListener('mouseover',()=> barrasVerticales[hoy - 1].style.backgroundColor = 'hsla(186, 34%, 60%, 0.59)');
    barrasVerticales[hoy - 1].addEventListener('mouseout',()=> barrasVerticales[hoy - 1].style.backgroundColor = 'var(--Cyan');
    for(i=0, j=0; i<barrasVerticales.length; i++, j++) {
        barrasVerticales[i].style.height = dataAmount[i].amount * 3 + 'px';
        barrasVerticales[i].setAttribute('id', 'bv' + i);
        // barrasVerticales[i].addEventListener('mouseover', ()=> appearValue(j));  --- No funcionó en el bucle
        // barrasVerticales[i].addEventListener('mouseout', ()=> // disappearValue());    --- No funcionó en el bucle
    }
    barrasVerticales[0].addEventListener('mouseover', ()=> appearValue(0));
    barrasVerticales[0].addEventListener('mouseout', ()=> disappearValue(0));
    barrasVerticales[1].addEventListener('mouseover', ()=> appearValue(1));
    barrasVerticales[1].addEventListener('mouseout', ()=> disappearValue(1));
    barrasVerticales[2].addEventListener('mouseover', ()=> appearValue(2));
    barrasVerticales[2].addEventListener('mouseout', ()=> disappearValue(2));
    barrasVerticales[3].addEventListener('mouseover', ()=> appearValue(3));
    barrasVerticales[3].addEventListener('mouseout', ()=> disappearValue(3));
    barrasVerticales[4].addEventListener('mouseover', ()=> appearValue(4));
    barrasVerticales[4].addEventListener('mouseout', ()=> disappearValue(4));
    barrasVerticales[5].addEventListener('mouseover', ()=> appearValue(5));
    barrasVerticales[5].addEventListener('mouseout', ()=> disappearValue(5));
    barrasVerticales[6].addEventListener('mouseover', ()=> appearValue(6));
    barrasVerticales[6].addEventListener('mouseout', ()=> disappearValue(6));
    
    function appearValue(el) {
         console.log(dataAmount[el].amount)
         style.insertRule(`#bv${el}::before {content: "${dataAmount[el].amount}"; background-color: var(--Dark_brown); color: var(--Very_pale_orange); font-size: 0.5em; font-weight: 700; position: absolute; top: -30px; left: -10px; padding: 5px 10px; border-radius: 5px;}`, style.cssRules.length);
    }
    function disappearValue() {
        style.deleteRule(style.cssRules.length -1);
   }
   console.log(style);
}
amountAsign();
