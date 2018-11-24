function changeMe(arr) {
    var tahunskrg = 2018;
    for(var i = 0; i < arr.length; i ++){
        if(arr[i][3] !== undefined){
            arr[i][3] = (tahunskrg - arr[i][3]);
            }
            else {
            arr[i][3] = 'Invalid Birth Year';
            }
        idcard = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: arr[i][3]
    }
        console.log(((i+1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ':'), idcard);
    }
}

  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }