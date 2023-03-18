// Code your solutions in this file
let names=["Guadalupe", "Ollie","Aki"]

function writeCards(names, surprise) {
    let messages=[];
    for(let i=0;i<names.length;i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`)
    }
    return messages;
}


writeCards(["Guadalupe","Ollie","Aki"],"surprise");
    function countDown() {
        let countDown = 0;
        while (countDown<11) {
            console.log(countDown++)
        }
    }
