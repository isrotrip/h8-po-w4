function changeVocals (str) {
    var variabelVokal = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];
    var variabelUbah = ['b', 'j', 'v', 'f', 'p', 'B', 'J', 'V', 'F', 'P'];
    var tampung = ''
    for(var i = 0; i < str.length; i ++){
        for(var j = 0; j < variabelVokal.length; j ++){
            if(str[i] === variabelVokal[j]){
                tampung = tampung + variabelUbah[j];
            }
        }
        if(i === (tampung.length)){
            tampung = tampung + str[i];
        }
    }
    return tampung;
}

function reverseWord (str) {
  var urutanBalik = '';
  for(var i = (str.length - 1); i >= 0; i --){
    urutanBalik = urutanBalik + str[i]
  }
  return urutanBalik;
}

function setLowerUpperCase (str) {
    var tampung = '';
    for(var i = 0; i < str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            tampung = tampung + str[i].toUpperCase();
        }
        else if(str[i] === str[i].toUpperCase()){
            tampung = tampung + str[i].toLowerCase();
        }
        if(i === tampung.length){
            tampung = tampung + str[i];
        }
    }
    return tampung;
}

function removeSpaces (str) {
    var temp = ''
    for(var i = 0; i < str.length; i ++){ 
        if(str[i] !== ' '){
            temp = temp + str[i];
        }
    }
    return temp;    
}

function passwordGenerator (name) {
    if(name.length <= 4){
        return '\'Minimal karakter yang diinputkan adalah 5 karakter\''
    }
    var gantiVokal = changeVocals(name);
    var reverse = reverseWord(gantiVokal);
    var ubahBesarKecil = setLowerUpperCase(reverse);
    var hapusSpasi = removeSpaces(ubahBesarKecil);
    return ('\'' + hapusSpasi + '\'');
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'