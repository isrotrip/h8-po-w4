function ubahHuruf(kata) {
    var alfabetubah = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var hasilubah = '';
    for(var i = 0; i < kata.length; i ++){
        for(var j = 0; j < alfabetubah.length; j ++){
            if (kata [i] === 'z'){
                hasilubah = hasilubah + alfabetubah[0];
                i ++;
            }
            else if(kata[i] === alfabetubah[j]){
                hasilubah = hasilubah + alfabetubah[j+1];
            }
        } 
    }
    return hasilubah;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu