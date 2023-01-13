


const movesForTeletransportation = (dataA, dataB) => {
  [N, K] = dataA.split(' ').map(n => parseInt(n));
  dataB = dataB.split(' ').map(n => parseInt(n)).sort((a,b ) => {
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
  });
  
  let moves = 0;
   console.log(dataB);
  for(let i=0; i<N; i++) {
    for(let j=i+1; j <= N; j++) {
      if(j && (dataB[j] - dataB[i]) <= K) {
        moves++;
      }  
    }
    
  }
  
  
  return moves * 2;
}


let response = movesForTeletransportation('4 3', '11 13 17 20');

let response2 = movesForTeletransportation('4 100', '1 2 3 4');

console.log('Case #1');
console.log(response);


console.log('Case #2');
console.log(response2);
