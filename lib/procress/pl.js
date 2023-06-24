const crypto = require('crypto');
const def1_json = require("../../brain/def-1.json");
const algpl128 = require("../algorithm/pl128.js");
const by10alg = require("../algorithm/by10.js");


function def1(config) {

  if (config.text === undefined) {
    throw new Error('text value not found  => [def1]');
    return{
      callback_text:"error",
      algorithm:"def1",
      process:"error",
      err:true,
    };
  }else{
    let chekhk = config.text.match(/.{1,3}/g);
    let chhkkpl = def1_json.lang[chekhk[0]];
    let saltpr = def1salt();
    let saltrd = saltpr.rssalt.split('');


    if (chhkkpl === undefined) {
      let chekhk2 = config.text.match(/.{1,3}/g);
    let chhkkpl2 = def1_json.lang[chekhk2[1]];
    if (chhkkpl2 === undefined) {
      
      let resulttext = ``;
      let harfler = config.text.split('');


      for (let h = 0; h < harfler.length; h++) {
        const randomsaltnumber = Math.floor(Math.random() * 11);
        if (harfler[h] === ` `) {
          let saltvalue = saltrd[randomsaltnumber];
          let ecyrsalt = def1_json.lang[`${saltvalue}`];
          resulttext += ecyrsalt+`'*?`
        }else{
          let saltvalue = saltrd[randomsaltnumber];
          let ecyrsalt = def1_json.lang[`${saltvalue}`];
          let harf = def1_json.lang[harfler[h]];
          if (harf === undefined) {
            let newc = creatnew(3);
            resulttext += newc+ecyrsalt;
          }else{
            resulttext += ecyrsalt+harf;
          }
        }
      }
      const buffresult = Buffer.from(resulttext, 'utf8');
      const bufffstrng = buffresult.toString('utf8');
      return{
        callback_text:bufffstrng,
        algorithm:"def1",
        process:"without password => encrypted",
        err:false,
      };
    }else{
      let resulttext ="";
      let harfler = config.text.split('');
      for (let h = 0; h < harfler.length; h++) {
        const randomsaltnumber = Math.floor(Math.random() * 11);
        if (harfler[h] === ` `) {
          let saltvalue = saltrd[randomsaltnumber];
          let ecyrsalt = def1_json.lang[`${saltvalue}`];
          resulttext += ecyrsalt+`'*?`
        }else{
          let saltvalue = saltrd[randomsaltnumber];
          let ecyrsalt = def1_json.lang[`${saltvalue}`];
          let harf = def1_json.lang[harfler[h]];
          if (harf === undefined) {
            let newc = creatnew(3);
            resulttext += newc+ecyrsalt;
          }else{
            resulttext += ecyrsalt+harf;
          }
        }
      }
      return{
        callback_text:resulttext,
        algorithm:"def1",
        process:"encrypted => without password",
        err:false,
      };
    }
    }else{
      let resulttext ="";
      let harfler = config.text.match(/.{3}/g);
      for (let h = 0; h < harfler.length;h += 1) {
        if (chek(h) === 1) {
          if (harfler[h] === `'*?`) {
            resulttext += ` `
          }else{
            resulttext += def1_json.lang[harfler[h]];
          } 
        }else{}
      }
      return{
        callback_text:resulttext,
        algorithm:"def1",
        process:"encrypted => without password",
        err:false,
      };
    }
  }

  function def1salt() {
    let rssalt = ``;
    for (let s = 0; s <2; s++) {
      const  defbuff = crypto.randomBytes(3);
      const defstr1 = defbuff.toString('hex');
      rssalt += defstr1;
    }
    return{
      rssalt
    }
  }

  function chek(num) {
    if(num % 2 === 0) {
      return 0;
    } else {
      return 1;
    }
  }
  function creatnew(length) {
    let result = '';
    const characters ="%!'^+%&/()=?*-+[]{}<>.,:;_|\\~@#$€¥£¤§©®™«»°±¶×÷≠≤≥∂∑∫∞♠♣♥♦♪♫☺☻☼♂♀♪♫☺☻♥♠♣";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}


function pl_128(config){
  const result = algpl128.enc(config);
  return result
}

function by10(cfg) {
  const result = by10alg.by(cfg);
  return result;
}

module.exports={
  def1,
  pl_128,
  by10
}