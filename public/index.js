var chp1 = 66,
    mhp1 = 100,
    chp2 = 33,
    mhp2 = 100;

var hpp1 = (chp1 / mhp1) * 100,
    hpp2 = (chp2 / mhp2) * 100,
    hpw1 = (chp1 / mhp1) * 430,
    hpw2 = (chp2 / mhp2) * 430;

console.log(
  "HP Player 1 Percent:" + hpp1,
  "HP Player 2 Percent:" + hpp2,
  "HP Player 1 Width:" + hpw1,
  "HP Player 2 Width:" + hpw2
)

$("#current").text(chp1);
$("#max").text(mhp1);
$("#current2").text(chp2);
$("#max2").text(mhp2);
document.getElementById("health").style.width = hpw1 + "px";
document.getElementById("health2").style.width = hpw2 + "px";

//VARIABLE RANDOMIZATION
var prefix = "https://raw.githubusercontent.com/VideoGameRoulette/DNDBot/master/imgs/",
    rand = Math.floor(Math.random() * 10 + 1),
    ext = ".png",
    obj = prefix + rand + ext;
$("#avatar").attr("src", obj);

var prefix2 = "https://raw.githubusercontent.com/VideoGameRoulette/DNDBot/master/imgs/",
    rand2 = Math.floor(Math.random() * 10 + 1),
    ext2 = ".png",
    obj2 = prefix2 + rand2 + ext2;
$("#avatar2").attr("src", obj2);