function sorting(arrNumber) {
    if (arrNumber.length === 0){
        return undefined;
    }
    else {
            for(var i = 0; i < arrNumber.length; i ++){
                for(var j = i; j < arrNumber.length; j++){
                    if(arrNumber[i] > arrNumber[j]){
                        var tempt = arrNumber[i];
                        arrNumber[i] = arrNumber[j];
                        arrNumber[j] = tempt;
                    }
                }
            }
        return arrNumber;
    }
}
function getTotal(arrNumber) {
    if(arrNumber === undefined){
        return ('\'\'');
        }
    var totalNum = 1;
    for(var i = 0; i < arrNumber.length - 1; i ++){
        if(arrNumber[i] === arrNumber[arrNumber.length - 1]){
            totalNum = totalNum + 1;
        }
    }
    var output = ('\'angka paling besar adalah ' + arrNumber[arrNumber.length - 1] + ' dan jumlah kemunculan sebanyak ' + totalNum + ' kali\'');
    return output;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}


console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''