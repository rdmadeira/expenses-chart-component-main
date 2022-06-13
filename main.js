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
    const barrasVerticales = document.getElementsByClassName('barra_vertical');
    barrasVerticales[hoy - 1].style.backgroundColor = 'var(--Cyan)';
    for(i=0; i<barrasVerticales.length; i++) {
        barrasVerticales[i].style.height = dataAmount[i].amount * 3 + 'px';
        barrasVerticales[i].setAttribute('id', 'b' + dataAmount[i].amount);
    }
    let style = document.styleSheets.item(0).cssRules;
    console.log(style);

    /* barrasVerticales[1].addEventListener('mouseover', ()=> appearValue(1));
    function appearValue(i) {
        
        let styles = window.getComputedStyle(pseudoElement);
        styles.setProperty('content', '285');
        
    } */
}
amountAsign();
