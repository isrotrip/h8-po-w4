function shoppingTime(memberId, money) {
    var sepatuStacattu = 1500000;
    var bajuZoro = 500000;
    var bajuHN = 250000;
    var sweaterUniklooh = 175000;
    var casingHandphone = 50000;
    var barangBisaDibeli = 1;
    var barangBelanjaan = [];
    var dompet = money;
    
    if (memberId === undefined || memberId === '') {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    else if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup';
    }
    else {
        while (money >= casingHandphone && barangBisaDibeli === 1) {
            switch (true) {
                case money >= sepatuStacattu && sepatuStacattu !== 0:
                    money = money - sepatuStacattu;
                    barangBelanjaan.push('Sepatu Stacattu');
                    sepatuStacattu = 0;
                break;
                case money >= bajuZoro && bajuZoro !== 0:
                    money = money - bajuZoro;
                    barangBelanjaan.push('Baju Zoro');
                    bajuZoro = 0;
                break;
                case money >= bajuHN && bajuHN !== 0:
                    money = money - bajuHN;
                    barangBelanjaan.push('Baju H&N');
                    bajuHN = 0;
                break;
                case money >= sweaterUniklooh && sweaterUniklooh !== 0:
                    money = money - sweaterUniklooh;
                    barangBelanjaan.push('Sweater Uniklooh');
                    sweaterUniklooh = 0;
                break;
                case money >= casingHandphone && casingHandphone !== 0:
                    money = money - casingHandphone;
                    barangBelanjaan.push('Casing Handphone');
                    casingHandphone = 0;
                break;
                default:
                    barangBisaDibeli = 0;
                break;
            }
        }
        var belanja = {
            memberId: memberId,
            money: dompet,
            listPurchased: barangBelanjaan,
            changeMoney: money
        }
        return belanja;
    }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
