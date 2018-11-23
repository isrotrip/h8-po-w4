function tukarBesarKecil(kalimat) {
    var alfabetKecil = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var alfabetBesar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var hasiltukar = '';
    var simbol = false;
    for(var i = 0; i < kalimat.length; i ++){
        for(var j = 0; j < alfabetBesar.length; j++){
            if(kalimat[i] === alfabetBesar[j]){
                hasiltukar = hasiltukar + alfabetKecil[j];
                simbol = false;
                break;
            }
            else if(kalimat[i] === alfabetKecil[j]){
                hasiltukar = hasiltukar + alfabetBesar[j];
                simbol = false;
                break;
            }
            else {
                simbol = true;
            }
        }
    if(simbol === true){
        hasiltukar = hasiltukar + kalimat[i];
    }
    }
    return hasiltukar;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"