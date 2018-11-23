function digitPerkalianMinimum(angka) {
    var jumlahdigitmin = angka.toString() + angka.toString();
    var faktorbilangan1;
    var faktorbilangan2;
    var jumlahdigitperkalian;
    for(var i = 1; i <= angka; i++){
        if(angka % i === 0){
            faktorbilangan1 = i.toString();
            faktorbilangan2 = (angka/i).toString();
            jumlahdigitperkalian = faktorbilangan1 + faktorbilangan2;
            if(jumlahdigitperkalian.length < jumlahdigitmin.length){
                jumlahdigitmin = jumlahdigitperkalian;
        }
    }
    }
    return jumlahdigitmin.length;
  }
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2