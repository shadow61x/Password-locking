const crypto = require('crypto');


function by(data) {
    if (!data) {
        throw new Error('text not found. =>  [by10]');
      }
      const binaryby = by10by(data);
      const spbn = binaryby.split('');
      let X = 0;
      let Y = 0;
      for (let i = 0; i < spbn.length; i++) {
        if (spbn[i] == 1) {
            X += 1;
        }
        if (spbn[i] == 0) {
            Y += 1;
        }
      }
      const salt = newsalt(X , Y);
      const numArray = separateValues(salt);
      const MX = mixed(numArray,spbn.length);
      const MXL = MX.length;
      const STV = Math.round(MXL/10/20*2/10);
      const BST = bitsalt(MX,STV);
      const BBR = by10bit64(BST);
      const RESULT = rendertext(BBR,data,MXL);
      return RESULT;
}

function newsalt(X , Y) {
    let fst = X * Y ;
    let fstt = X + Y;
    return{
        fst,
        fstt
    }
}

function separateValues(obj) {
    let arr = [];
  
    for (let key in obj) {
      let value = obj[key];
      if (typeof value === "number") {
        arr.push(value);
      }
    }
  
    return arr;
  }


  function by10by(sentence) {
   
    const buffer = Buffer.from(sentence);
    let binaryString = '';
  
    for (const byte of buffer) {
      let binaryByte = byte.toString(2);
      // 8 bitli olmayan binary byteları 8 bitli hale getir
      if (binaryByte.length < 8) {
        binaryByte = '0'.repeat(8 - binaryByte.length) + binaryByte;
      }
      binaryString += binaryByte;
    }
  
    return binaryString;
  }
  



  
function by10bit64(sentence) {
  const utf8Bytes = Buffer.from(sentence, 'utf8');
  const paddedBytes = Buffer.alloc(16);
  utf8Bytes.copy(paddedBytes);
  return paddedBytes.toString('base64');
}

function mixed(values,scpn) {
  const mx =values[0]/values[1];
  const mxs = mx.toString().split('.');
  const Nscpn = Number(scpn);
  const mxsN = Number(mxs[0]);
  const MXRs = mxsN*Nscpn+values[1];
  const result = rsbit(MXRs,values[1]);
  return result;
}

function rsbit(length, seed) {
  let arr = '';

  for (let i = 0; i < length; i++) {
    seed = (seed * 9301 + 49297) % 233280;
    const randomBit = Math.floor(seed / 233280 * 2);
    arr += randomBit;
  }

  return arr;
}

function bitsalt(bit,s) {
  let vl = 0;
  const bits = bit.split('');
  let result = "";
  for (let i = 0; i < bit.length; i++) {
    vl += 1;
    if (vl == s+5) {
      vl = 0;
      const salt = rsbit(s+5,s+100/5);
      result += `${salt}`;
    }
    result += bits[i];

  }
  return result;
}

function rendertext(bbr,data,mxr) {
  let cmpr = cmp(data);
  var mxmrs = mxst(bbr, cmpr);
  return mxmrs;
}

function mxst(str1, str2) {
  var mixedString = '';
  var maxLength = Math.max(str1.length, str2.length);

  for (var i = 0; i < maxLength; i++) {
    if (i < str1.length) {
      mixedString += str1[i];
    }
    if (i < str2.length) {
      mixedString += str2[i];
    }
    mixedString += appmaq(i);
  }

  return mixedString;
}

function appmaq(index) {
  var operation = index % 3; // 0, 1, 2 arasında döngü yapar
  var charCode;

  switch (operation) {
    case 0:
      charCode = index + 65; // A-Z arasındaki harfleri sırayla kullanır
      break;
    case 1:
      charCode = index + 97; // a-z arasındaki harfleri sırayla kullanır
      break;
    case 2:
      charCode = index + 48; // 0-9 arasındaki rakamları sırayla kullanır
      break;
  }

  return String.fromCharCode(charCode);
}

function cmp(inputText) {
  var shuffledText = sfflr(inputText);
  var specialText = '';
  for (var i = 0; i < shuffledText.length; i++) {
    var char = shuffledText[i].toLowerCase();
    if (char >= 'a' && char <= 'z') {
      specialText += char + gnchrt(3) + '-';
    }
  }
  specialText = specialText.slice(0, -1);
  return specialText;
}

function sfflr(text) {
  var array = text.split('');
  var currentIndex = array.length;
  var temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = currentIndex - 1; 
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array.join('');
}

function gnchrt(length) {
  var characters = 'QWERASDGHJIOKL7898210?=PŞĞİÜZÖXMNCVBqwa-/*+srfedtghyujıkolpğşiçFTYUöbmcnzxbvwjIEFHSOKE';
  var randomString = '';
  for (var i = 0; i < length; i++) {
    randomString += characters.charAt(i % characters.length); 
  }
  return randomString;
}



  module.exports={
    by
  }