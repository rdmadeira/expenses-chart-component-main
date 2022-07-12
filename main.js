async function getData(){
    const dataFile = await fetch('./data.json');
    try {
        const dataAmount = await dataFile.json();
        // amountAsign(dataAmount);
        return dataAmount;
    } catch(error) {
        alert(`Whoooops, error: ${error}`);
        console.log(error);
    }
}
/*  O podria ser:
const dataAmount = fetch('./data.json');
dataAmount.then(res=>{return res.json()})
              .then(data=> {amountAsign(data);})
              .catch(err=>console.error(`${err}`));  */

async function amountAsign(){
    const barrasVerticales = document.getElementsByClassName('barra_vertical');
    dateVerify();
    let style = document.styleSheets.item(0);
    const dataAmount = await getData();
    console.log(dataAmount);
    for(let i=0; i<barrasVerticales.length; i++) {   
        barrasVerticales[i].style.height = 
        dataAmount[i].amount * 3 + 'px';
        barrasVerticales[i].setAttribute('id', 'bv' + i);
        
        // funcionó declarando let al i, para que se mantenga en el scopo de la funcion.
        barrasVerticales[i].addEventListener('mouseover', ()=> appearValue(i));
        barrasVerticales[i].addEventListener('mouseout', disappearValue);
    }
    function dateVerify(){
        let fecha = Date.now(); // genera un numero
        let hoy = new Date(fecha).getDay(); // genera numero de 0 a 6
        hoy == 0 ? hoy = 7 : hoy;
        barrasVerticales[hoy - 1].classList.replace('soft-red', 'cyan');
    }
    function appearValue(el) {
        console.log(dataAmount[el].amount);
        style.insertRule(`#bv${el}::before {content: "${dataAmount[el].amount}";  background-color: var(--Dark_brown); color: var(--Very_pale_orange);  font-size: 0.5em; font-weight: 700; position: absolute; top: -30px;  left: -10px; padding: 5px 10px; border-radius: 5px;}`,  style.cssRules.length);
    }
    function disappearValue() {
        style.deleteRule(style.cssRules.length -1);
    }
    console.log(style);
}
amountAsign();

