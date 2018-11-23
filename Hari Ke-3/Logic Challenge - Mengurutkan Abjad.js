function urutkanAbjad(str) {
    var hasilurut = '';
    var alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for(var i = 0; i < alfabet.length; i ++){
        for(var j = 0; j < str.length; j ++){
            if(alfabet[i] === str[j]){
                hasilurut = hasilurut + str[j];
            }
        }
    }
    return hasilurut;
  }

  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'