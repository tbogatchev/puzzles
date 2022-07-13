/*
⬜🧀⬜😸⬜
😸⬜🧱⬜⬜
⬜⬜⬜⬜⬜
⬜🧱⬜🐭⬜
⬜⬜⬜⬜⬜

*/

function isWall(x,y){}
// returns [[x,y], ...]
function catPositions(time){}


function timeToCheese(mousePosition, cheesePosition) {
  return timeToCheeseRect(mousePosition, cheesePosition, {}, {}, 0);
}

function timeToCheeseRect(mousePosition, cheesePosition, catMap, visitedMap) {
  mousePosition.push(0);
  const positionQueue = [mousePosition];
  let minimumTimeToCheese = Infinity;
    
  
  while(positionQueue.length > 0) {
   const currentPosition = positionQueue.pop();
   const [positionX, positionY, time] = currentPosition; 
    
   if (cheesePosition[0] === positionX && cheesePosition[1] === positionY && time < minimumTimeToCheese) {
       minimumTimeToCheese = time;
   }
   
     
   const right = [positionX + 1, positionY, time + 1];
   const left = [positionX - 1, positionY, time + 1];
   const top = [positionX, positionY + 1, time + 1];
   const bottom = [positionX, positionY - 1, time + 1];
   if (checkIfPositionIsValid(right, minimumTimeToCheese)) {
      positionQueue.push(right)
   }
   if (checkIfPositionIsValid(left, minimumTimeToCheese)) {
      positionQueue.push(left)
   }
   if (checkIfPositionIsValid(top, minimumTimeToCheese)) {
      positionQueue.push(top)
   }
   if (checkIfPositionIsValid(bottom, minimumTimeToCheese)) {
      positionQueue.push(bottom)
   }
  }
  
  return minimumTimeToCheese;
}


function checkIfPositionIsValid(position, catMap, minimumTimeToCheese) {
     const [positionX, positionY, time] = position;
  
     if (time >= minimumTimeToCheese) {
        return false; 
     }
     if (isWall(positionX, positionY)) {
        return false; 
     }
  
     if (visitedMap[time] && visitedMap[time][positionX] && visitedMap[time][positionX][positionY]) {
        return false; 
     }
  
     if (!catMap[time]) {
        const catPositionsAtTime = catPositions(time);
        catMap[time] = {};
        catPositionsAtTime.forEach(catPosition => {
          const [catX, catY] = catPosition;
          if (!catMap[time][catX]){
             catMap[time][catX] = {};
          }
          catMap[time][catX][catY] = true;
        })
     }
     
     if (catMap[time] && catMap[time][positionX] && catMap[time][positionX][positionY]) {
        return false; 
     }
  
     if (!visitedMap[time]) {
       visitedMap[time] = {};
     }
    if (!visitedMap[time][positionX]) {
      visitedMap[time][positionX] = {};
    }
    visitedMap[time][positionX][positionY] = true;
    return true;
}


