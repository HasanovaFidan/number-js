let x = 7;
let y = -3;
let z=0;
console.log("Daxil olunan: ", x, y);
if(x>0 && y<0) {
    z=(4*x)+(2*y)+4;
    console.log(z);
};
 if(x>0 && y==0) {
    z=(2*x)-y+3;
    console.log(z);
};
 if(x<0 && y>0) {
    z=(3*x)+(4*y)+3;
    console.log(z);
}
else{
    console.log("OLMUR");
}