
let n = 36;

function padovan_unshift (n){
    if (n==0){
        return [1];
    }
    if(n==1) {
        return [1, 1];
    }
    let tab=[1,1,1];
    for (let i = 3; i <= n; i++){
        let next = tab[1] + tab[2];
        tab.unshift(next);
    };
    return tab;
};
console.log(padovan_unshift(n));

function padovan_push (n){
    if (n==0){
        return [1];
    }
    if(n==1) {
        return [1, 1];
    }

    let tab=[1,1,1];
    for (let i = 3; i <= n; i++){
        let next = tab[i - 2] + tab[i - 3];
        tab.push(next);
    };
    return tab;
};
console.log(padovan_push(n));

//n éme 2)
function padovan_rec(n){
    if(n == 0 || n==1 || n==2 ){
        return 1;
    }
    return padovan_rec(n-2)+padovan_rec(n-3);
}
console.log(padovan_rec(n));

function padovan (n )  {
    let secondPrev = 1, pPrev = 1, pCurr = 1, pNext = 1;
    for (let i = 3; i <= n; i++){
        pNext = secondPrev + pPrev;
        secondPrev = pPrev;
        pPrev = pCurr;
        pCurr = pNext;
    }
    return pNext;
}
console.log(padovan(n));

function tete(n){
    let tab = padovan_unshift(n);
    return tab[0];
}
console.log(tete(n));

function queue(n){
    let tab = padovan_push(n);
    return tab[n];
}
console.log(queue(n));

//performance
function log_mesure(f, n) {
    const nb_repet = 100;
    let debut = Date.now();
    for (let k = 0; k <= nb_repet; k++) {
        f(n);
    }
    let fin = Date.now();
    console.log(`${nb_repet} appels à ${f.name}(${n}) prennent ${fin - debut} millisecondes`);
}
log_mesure(padovan_rec,n);
log_mesure(padovan,n);
log_mesure(tete,n);
log_mesure(queue,n);

