function cariModus(arr) {
  var modus = -1;
  var jumlahsama = 0;
  for(var i = 0; i < arr.length - 1; i ++){
    for(var j = 1; j < arr.length; j++){
        if(arr[i] === arr[j + i]){
            jumlahsama = jumlahsama + 1;
        }
        else if(jumlahsama > 1){
            modus = -1;
        }
    }
    if(jumlahsama === 1){
        modus = arr[i];
        break;
    }
  }
  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1