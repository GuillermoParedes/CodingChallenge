


const movesForTeletransportation = (dataA, dataB) => {
  [N, K] = dataA.split(' ').map(n => parseInt(n));
  dataB = dataB.split(' ').map(n => parseInt(n)).sort((a,b ) => {
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
  });
  
  let moves = 0;
   
  for(let i=0; i<N; i++) {
    let j = i + 1;
    if(j && (dataB[j] - dataB[i]) <= K) {
      moves++;
    }
  }
  
  
  return moves * 2;
}


let response = movesForTeletransportation('4 3', '11 13 17 20');

console.log('Case #1')
console.log(response)
