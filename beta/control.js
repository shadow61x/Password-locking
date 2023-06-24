const brain = require('brain.js');
const err = require("./err/system.js");
const fs = require('fs');


//You can use the score algorithm extension you created with brain.js (don't forget to edit the codes below according to your own algorithm)
const brainjson = fs.readFileSync("./brain/secvl_1.json", 'utf-8');
const sohpetbrainjsonBOT = new brain.recurrent.LSTM();
sohpetbrainjsonBOT.fromJSON(JSON.parse(brainjson));



function password_control(params) {
  if(!params){
    console.log("\u001b[90;1;3m Password Locking:\u001b[36m Function[password_control] \u001b[31m err => incoming data not found \u001b[0m");
    console.log("\u001b[90;1;3m Password Locking:\u001b[36m Function[password_control] \u001b[33m info => Make sure the password data is sent correctly \u001b[0m");
    return({
      password:"empty",
      feedback:"empty",
      situation:-1,
      err:true,
      passed:false,
      value:0,
      algorithm:"secvl_1"
    })
  }
  let değerler = [];
let secvalue = 0;
const letters = params.split('');

for (let i = 0; i < letters.length; i++) {
  let harf = letters[i];
  let değer = sohpetbrainjsonBOT.run(harf);
  değerler.push(değer);
  let pnb = parseInt(`${değer}`);
  secvalue = pnb+secvalue;
}
if (letters.length > secvalue) {
  secvalue -= 1;
}else{
  secvalue += 1;
}
if ( secvalue <= 5) {
  return({
    password:params,
    feedback:"Password too easy (not recommended)",
    situation:0,
    err:false,
    passed:false,
    value:secvalue,
    algorithm:"secvl_1"
  })

}
else if(secvalue <= 15){
  return({
    password:params,
    feedback:"easy to decrypt (prefer stronger password)",
    situation:5,
    err:false,
    passed:false,
    value:secvalue,
    algorithm:"secvl_1"
  })
}
else if(secvalue >= 16){
  return({
    password:params,
    feedback:"secure password",
    situation:10,
    err:false,
    passed:true,
    value:secvalue,
    algorithm:"secvl_1"
  })
}
}

module.exports={
  password_control
}