/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a
 human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
    let second= seconds%60;
    let minute=Math.floor(seconds/60)%60
    let hour=Math.floor(Math.floor(seconds/60)/60)
    if(hour>99){
      hour= hour%60
     }
    let time= fixed(hour)+':'+fixed(minute)+':'+fixed(second)
    return time;
 }
 
 
 function fixed(time){
   if (time<10){
      time= '0'+time.toString();
   }
   
   return time.toString();
 }