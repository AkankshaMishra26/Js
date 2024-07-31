let num = prompt("enter your number")
num = Number.parseInt(num)
if(num%2==0 || num % 3==0){
    console.log("Number is divisible by either 2 or 3")
}
else{
    console.log("Number is not divisible by either 2 or 3")
}
}