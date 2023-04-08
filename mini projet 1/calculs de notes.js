//1)
function randomInt(min, max) {
    max=(Math.ceil(max));
    min=(Math.floor(min));
    return Math.floor(Math.random() * (max-min+1)+min);
}
//2)
function alea_note() {
    let note = {note:randomInt(0,20), coeff:randomInt(1,100)}
    return note;
}
console.log( JSON.stringify(alea_note()));
//3)
function alea_tab_notes(n) {
    let tab=[];
    for(let k = 0; k <= n; k++){
        tab[k]=alea_note();
    }
    return tab;
}
let tab = alea_tab_notes(5);
console.log(tab.map(JSON.stringify));

//4)
function const_tab_note(note, coeff, longueur) {
    let tab = [];
    for (let k = 0; k <= longueur; k++) {
        tab=Array(longueur).fill({note: note, coeff: coeff});
    }
    return tab;
}
let tab1 = const_tab_note(12, 2, 5);
console.log(tab1.map(JSON.stringify));

//5)
function poids_coeff(tab) {
    return tab.reduce((acc, currentValue) => acc + currentValue.coeff, 0);
}
let totalCoeff = poids_coeff(tab1);
console.log(totalCoeff);
//6)
function moyenne(tab) {

}
