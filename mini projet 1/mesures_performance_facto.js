"use strict";
function fact(n){
    let i, f = 1;
    for(i = 1; i <= n; i++){
         f *= i;
    }
    return f;
}
function fact_rec(n){
    if (n == 0) {
        return 1;
    }
    return n * fact_rec(n-1);
}
console.log(fact(3),fact_rec(1))

function log_mesure(f, n) {
    const nb_repet = 100;
    let debut = Date.now();
    for (let k = 0; k <= nb_repet; k++) {
        f(n);
    }
    let fin = Date.now();
    console.log(`${nb_repet} appels à ${f.name}(${n}) prennent ${fin - debut} millisecondes`);
}
log_mesure(fact,3);
log_mesure(fact_rec,3);

