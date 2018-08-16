// write a program that takes your draft position and tells you what picks you have in a 12 team league
// friday august 24th 8pm
1 , 2, 3, 4, 5, 6, 7, 8, 9,10,11,12
24,23,22,21,20,19,18,17,16,15,14,13
function snakedraft(n){
    var yourname = "";
    if (n == 12){
        yourname = "Michael Mckenna"
    }
    if (n == 11){
        yourname = "Devon Silber"
    }
    if (n == 10){
        yourname = "Spencer Bashforth"
    }
    if (n == 9){
        yourname = "Andrew Seif"
    }
    if (n == 8){
        yourname = "Sven Svennefiord"
    }
    if (n == 7){
        yourname = "Max Jann"
    }
    if (n == 6){
        yourname = "Trevor Goodwin"
    }
    if (n == 5){
        yourname = "Chris Kazmer"
    }
    if (n == 4){
        yourname = "Dylan Ball"
    }
    if (n == 3){
        yourname = "Devin Kazmer"
    }
    if (n == 2){
        yourname = "Justin Silber"
    }
    if (n == 1){
        yourname = "Ernie McMillan"
    }
    var round1 = [];
    var round2 = [];
    var round3 = [];
    var round4 = [];
    var round5 = [];
    var round6 = [];
    var round7 = [];
    var round8 = [];
    for(var i = 1; i<=12; i++){
        var x = i;
        if (x < 10){
            x = i;
        }
        round1.push(x);
    }
    for(var i = 24; i>=13; i--){
        round2.push(i);
    }
    for(var i = 25; i<=36; i++){
        round3.push(i);
    }
    for(var i =48 ; i>=37 ; i--){
        round4.push(i);
    }
    // new data
    // pattern was   1-12, 24-13, 25-36, 48-37
    // numbers are 11 apart
    for(var i = 49; i<=60; i++){
        round5.push(i);
    }
    for(var i = 72; i>=61; i--){
        round6.push(i);
    }
    for(var i = 73; i<=84; i++){
        round7.push(i);
    }
    for(var i = 96; i>=85 ; i--){
        round8.push(i);
    }
    console.log(yourname);
    console.log(round1[n-1], "is your first round spot");
    console.log(round2[n-1], "is your second round spot");
    console.log(round3[n-1], "is your third round spot");
    console.log(round4[n-1], "is your fourth round spot");
    console.log(round5[n-1], "is your fifth round spot");
    console.log(round6[n-1], "is your sixth round spot");
    console.log(round7[n-1], "is your seventh round spot");
    console.log(round8[n-1], "is your eigth round spot");
    // console.log(round1);
    // console.log(round2);
    // console.log(round3);
    // console.log(round4);
    // console.log(round5);
    // console.log(round6);
    // console.log(round7);
    // console.log(round8);

}
for (var j = 1; j <=12; j++){
    snakedraft(j);
}