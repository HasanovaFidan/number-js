let qiymet = parseInt(prompt("daxil et"));
if (qiymet >= 0 && qiymet < 51) {
    console.log("F");
} else if (qiymet >= 51 && qiymet < 61) {
    console.log("E");
} else if (qiymet >= 61 && qiymet < 71) {
    console.log("D");
} else if (qiymet >= 71 && qiymet < 81) {
    console.log("C");
} else if (qiymet >= 81 && qiymet < 91) {
    console.log("B");
} else if (qiymet >= 91 && qiymet <= 100) {
    console.log("A");
} else {
    console.log("mumkun olmayan hal bas verdi mumkun deyil");
}
