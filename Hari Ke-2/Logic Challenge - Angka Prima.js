function angkaPrima(angka) {
    var bilanganprima = true;
    for(var i = 2; i < angka; i ++){
        if(angka % i === 0){
            bilanganprima = false;
            break
        }
    }
    return bilanganprima;
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false