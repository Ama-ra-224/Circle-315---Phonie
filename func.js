function isPhoneNum(num){
  return true
}
function trimPhoneNum(num){
  catchers=""
for (var prop in num) {
if(prop==1 & num[0]==0){catchers +=","}
if(prop==3 & num[0]==2 & num[1]==3 & num[2]==4){catchers +=","}
if(prop==4 & num[0]=="+" & num[1]==2 & num[2]==3 & num[3]==4){catchers +=","}
catchers += num[prop]
}
 return catchers.split(",")[1] 
}

function networkLink(num){
  obj={"803":"MTN",
"806":"MTN",
"703":"MTN",
"704":"MTN",
"706":"MTN",
"813":"MTN",
"816":"MTN",
"810":"MTN",
"814":"MTN",
"805" :"GLO",
"807":"GLO",
"705":"GLO",
"815":"GLO",
"811":"GLO",
"802":"AIRTEL",
"808":"AIRTEL",
"708":"AIRTEL",
"907":"AIRTEL",
"812":"AIRTEL"
}
if( obj[num[0]+num[1]+num[2]]){
return obj[num[0]+num[1]+num[2]]
} else{return false}
}

function textChange(){
  text1= document.getElementById("textBox").value
  targ11 = networkLink(trimPhoneNum(text1))+".png"
  document.getElementById("image").src=targ11
  
//  console.log(targ11)
}
//console.log(trimPhoneNum("09076464748"))
targ1 = networkLink("81234")
console.log(targ1)
//console.log(trimPhoneNum("+2349076464748"))

//console.log(networkLink(targ1))
//console.log((targ1))


