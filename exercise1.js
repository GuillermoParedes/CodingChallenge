// 


const isPossibleWinAVillain = (arrayHeroe, arrayVillains) => {
  // N is size of array
  // P is level of FINN, is the heroe
  // J is level of JEKE, is the PET
  let [N, P, J] = arrayHeroe.split(' ').map(n => parseInt(n));
  
  let heroesWinner = true;
  let useJeke = true;
  // We need to order by levels, in this case we can use the sort function or another alorithm
  arrayVillains = arrayVillains.split(' ').map(n => parseInt(n)).sort((a, b) => {
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
  });
  
  arrayVillains.forEach(level => {
    if(P > level) {
      P = P + level;  
    } else if (useJeke && ((P + J) * 2) > level ) {
      P = P + level;
      uesJeke = false;
    } else {
      heroesWinner = false;
    }
  });
  
  if(heroesWinner) {
    return 'SI'
  } else {
    return 'NO'
  }
  
}

let response = isPossibleWinAVillain('4 2 1', '2 1 11 15');
console.log('Case #1');
console.log(response);
response = isPossibleWinAVillain('1 2 1', '19');
console.log('Case #2');
console.log(response);

