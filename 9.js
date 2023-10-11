let time=prompt("saati daxil et")
if(time>0 && time<=24) {
    if(T=time<7){
        console.log("Geceniz xeyre")
    }
    else if( time<12){
        console.log("sabahiniz xeyr")
    }
    else if( time<=17){
        console.log("gunortaniz xeyir")
    }
    else{
        console.log("axsaminiz xeyir") 
    }
}
else{
    console.log(yanlisdir)
}