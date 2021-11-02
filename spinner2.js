const chars = ["|", "/", "-", "\\", "|", "/", "-", "\\"];
let delay = 300

for (const  char of chars ){
setTimeout(()=>{
console.log(char)

},delay) 
delay +=300
}
