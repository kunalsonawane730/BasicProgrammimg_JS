/**
    Write a program in the following steps
    a. Roll a die and find the number between 1 to 6
    b. Repeat the Die roll and find the result each time
    c. Store the result in a dictionary
    d. Repeat till any one of the number has reached 10 times
    e. Find the number that reached maximum times and the one that was for
       minimum times
 */

       let map = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);
       let valueCount = 0;
       while(valueCount < 10){
           let dice = Math.floor(Math.random() * 10) % 6 + 1;
           valueCount = map.get(dice);
           map.set(dice, ++valueCount);
       }
       console.log(map);
       console.log("Minumim dice count:"+Math.min(...map.values()));
       console.log("Maximum dice value:"+Math.max(...map.values()));