let marks={
    chinki: 100,
    raunak: 100,
    ayushi: 9,
    lovish: 4
}
/*for(let i=0; i<Object.keys(marks).length;i++){
    console.log("The marks of " +Object.keys(marks)[i]+ " are " + marks[Object.keys(marks)[i]])
}*/


//FOR IN LOOP
for(let key in marks){
    console.log("The marks of " + key + " are " + marks[key])
}