function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  var listPenjualan = [];
  var pembeliProduk = [];
  var sisaBarang;
  var beliBarang;
  var laba;
  if(shoppers.length === 0){
    return listPenjualan;
  }
  else {
        for(var i = 0; i < listBarang.length; i ++){
            sisaBarang = listBarang[i][2];
            beliBarang = 0;
            laba = 0;
            for(var j = 0; j < shoppers.length; j ++){
                if(listBarang[i][0] === shoppers[j].product && sisaBarang >= shoppers[j].amount){
                    pembeliProduk.push(shoppers[j].name);
                    sisaBarang = sisaBarang - shoppers[j].amount;
                    beliBarang = beliBarang + shoppers[j].amount;
                    laba = beliBarang * listBarang[i][1];
                    }            
                }
            var listNota = {
                product: listBarang[i][0],
                shoppers: pembeliProduk,
                leftOver: sisaBarang,
                totalProfit: laba
            }
            listPenjualan.push(listNota);
            pembeliProduk = [];
        }
        return listPenjualan;
    }

}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]