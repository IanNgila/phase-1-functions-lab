// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks<42) {
 return 42 - blocks
  }
  else{
      return blocks -42
  }
}

function distanceFromHqInFeet (blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start,destination) {
    if (destination > start) {
        return (destination - start) * 264
    } 
    else 
    {
       return (start - destination) * 264
    }
 }

 function calculatesFarePrice(start, destination){ 
    const dist = distanceTravelledInFeet(start,destination);
    if (dist<=400){
    return 0;
}
 else 
  if (dist>400 && dist<=2000){
      return (dist-400)*0.02
  }

  if (dist< 400){
    return freesample;
}

if (dist >2000 && dist<=2500){
    return 25;
 } else
  if (dist>2500){
    return "cannot travel that far"

  }
}

