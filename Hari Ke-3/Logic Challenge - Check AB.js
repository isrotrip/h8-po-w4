function checkAB(num) {
    var hasilcek = false;
    var jarak = num.length;
    var saatini = '';
    for(var i = 0; i < num.length; i ++){
        if(num[i] === 'a' && saatini !== 'a'){
            saatini = 'a';
            jarak = 0;
        }
        else if(num[i] === 'b' && saatini !== 'b'){
            if(jarak <= 3){
                return true;
            }
            saatini = 'b';
            jarak = jarak + 1;
        }
        else{
            jarak = jarak + 1;
            if(jarak > 3){
                hasilcek = false;
            }
            saatini = num[i];
        }
    }
    return hasilcek;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false