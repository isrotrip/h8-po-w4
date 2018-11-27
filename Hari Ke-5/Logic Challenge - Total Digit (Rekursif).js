function totalDigitRekursif(angka) {
    var tampung = 0;
    var pembagi = 10;
    tampung = tampung + angka % pembagi;
    if(pembagi > angka){
        return tampung;
    }
    else{
        return tampung + totalDigitRekursif(Math.floor(angka/pembagi));
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5