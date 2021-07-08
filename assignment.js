function feetToMile(feet){
    if(feet<0){
        return 'Negative distance is not possible';
    }
    else{
        var result = feet/5280;
        return result;
    }
}
var test = feetToMile(300);
console.log(test);

function woodCalculator(chair,table,bed){
    if(chair < 0 || table <0 || bed < 0){
        return 'Negative number of furniture is not possible';
    }

    var total = (chair*1)+(table*3)+(bed*5);
    return total;
}

var totalWood = woodCalculator(11,1,1);
console.log(totalWood);

function brickCalculator(totalFloor){
    if(totalFloor < 0){
        return 'Negative floor is not possible';
    }
    if(totalFloor<=10){
        var totalBrick = n*15*1000;
        return totalBrick
    }
    else if(10<totalFloor<=20){
        var totalBrick = (10*15*1000) + ((n-10)*12*1000);
        return totalBrick;
    }
    else{
        var totalBrick = (10*15*1000) + (10*12*1000) + ((n-20)*10*1000);
        return totalBrick;
    }
}

var building = brickCalculator(-7);
console.log(building);

function tinyFriend(friends){
    if(friends.length ==0){
        return 'Friends name must be given';
    }
    var tinyName = friends[0];
    var min = tinyName.length;
    for(var i = 0 ; i<friends.length;i++){
        var afriend = friends[i];
        if(afriend.length<=min){
            min = afriend.length;
            tinyName = friends[i];
        }
    }
    return tinyName ;
}

var tinyFriendName = tinyFriend([]);
console.log(tinyFriendName);