
  const M = 4;
  const N = 4;
  let arr1=[
    [1,-4,9,4],
    [6,-98,0,8],
    [-9,-7,0,7],
    [-8,-7,8,9]
];

  let negColumn=-1;
  for (let j = 0; j < M; j++) {
    if (arr1.every(row => row[j] < 0)) {
      negColumn = j;
      break;
    }
  }

  if (negColumn !== -1) {
    for (let i = 0; i < N; i++) {
      [arr1[i][N - 1], arr1[i][negColumn]] = [arr1[i][negColumn], arr1[i][N - 1]];
    }
  }else{
    arr1=arr1;}
  
  

console.log(arr1);



