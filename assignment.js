//feet to mile convert start.
function feetToMile(userNumber){
    var result = parseFloat( userNumber*0.00018939);
    return result;
}
console.log(feetToMile(1000));

//woodcalculator start.
function woodCalculator(chair,tabil,bed){
    var chairCost = chair*1;
    var tabilCost = tabil*3;
    var bedCost   = bed*5;
    var result    = chairCost + tabilCost + bedCost;
    return result;
}
console.log( woodCalculator(2,1,2));

//brickCalculator
function brickCalculator(floor){
    if(floor <=10 && floor>0){
        var totalBrick1 = floor*15000;
        return totalBrick1;
    }
    else if(floor >=11 && floor<=20){
        var totalBrick2 = (floor-10)*12000;
        var totalBrick = 150000 + totalBrick2;
        return totalBrick;
    }
    else if(floor >=21){
        var totalBrick3 =(floor-20)*10000;
        var totalBrick = 270000 + totalBrick3;
        return totalBrick;
    }else{
        return "";
    }
    }
console.log(brickCalculator(12))

//tinyFriend
function tinyFriend(friendName){
    var smallName = friendName[0];
   for(var i=0; i < friendName.length; i++){
       var eliment = friendName[i];
       if(eliment < smallName){
           smallName = eliment;
       }
   }
   return smallName;
}