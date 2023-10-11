let age = parseInt(prompt("daxil et"));
if(age>0){
    if(age<18){
        console.log("yeniyetme");
    }
    else if(age>18 && age<64){
        console.log("yetkin");

    }
    else if(age>65){
        console.log("yasli");
    }
}
else{
    console.log("musbet olmalidir")  ;
}