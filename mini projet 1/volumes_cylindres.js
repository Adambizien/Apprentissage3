"use strict";
function vol_cylindre(h, r) {
    return Math.PI * r**2 * h;
}
console.log( vol_cylindre(2,3));

function vol_cylindre_tab(h_min, h_max, r_min, r_max, pas_h, pas_r) {
    let monTab=[] ;
    if(!pas_h ){
        pas_h=1;
    }
    if (!pas_r){
        pas_r=1;
    }
    for (let i=h_min;i<=h_max;i=i+pas_h) {
        for (let j = r_min; j <= r_max;j = j + pas_r) {
            monTab.push({ h: i, r: j, vol : vol_cylindre(i, j)});
        }
    }
    return monTab;
}
let tab = vol_cylindre_tab(1,3,1,3);
let map=tab.map(elt => JSON.stringify(elt));
console.log(map);

function affichage(tab){
    tab.forEach(elt => console.log(`Le volume d'un cylindre de rayon ${elt.r} cm et de hauteur ${elt.h} cm est ${elt.vol} cm³`));
}
affichage(tab);







