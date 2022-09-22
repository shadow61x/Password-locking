const lang = require("./lang.json");
const package = require("./package.json");

const nowpckg = "1.1.5";

function rn(len) {
  var character = "!'^+%&/()=?_->`$:.~#^<|+-*/,}{[]";
  var randomPsw = '';
  for (var i=0; i < len; i++) {
    var numPws = Math.floor(Math.random() * character.length);
    randomPsw += character.substring(numPws,numPws+1);
  }
  if(randomPsw == lang.lang.a 
  || randomPsw == lang.lang.A || randomPsw == lang.lang.b || randomPsw == lang.lang.B 
  || randomPsw == lang.lang.c || randomPsw == lang.lang.C || randomPsw == lang.lang.d 
  || randomPsw == lang.lang.D || randomPsw == lang.lang.e || randomPsw == lang.lang.E
  || randomPsw == lang.lang.f || randomPsw == lang.lang.F || randomPsw == lang.lang.g
  || randomPsw == lang.lang.G || randomPsw == lang.lang.ğ || randomPsw == lang.lang.Ğ
  || randomPsw == lang.lang.h || randomPsw == lang.lang.H || randomPsw == lang.lang.ı
  || randomPsw == lang.lang.I || randomPsw == lang.lang.i || randomPsw == lang.lang.i
  || randomPsw == lang.lang.j || randomPsw == lang.lang.J || randomPsw == lang.lang.k
  || randomPsw == lang.lang.K || randomPsw == lang.lang.l || randomPsw == lang.lang.L
  || randomPsw == lang.lang.m || randomPsw == lang.lang.M || randomPsw == lang.lang.n
  || randomPsw == lang.lang.N || randomPsw == lang.lang.o || randomPsw == lang.lang.O
  || randomPsw == lang.lang.ö || randomPsw == lang.lang.Ö || randomPsw == lang.lang.P
  || randomPsw == lang.lang.p || randomPsw == lang.lang.r || randomPsw == lang.lang.R
  || randomPsw == lang.lang.s || randomPsw == lang.lang.S || randomPsw == lang.lang.ş
  || randomPsw == lang.lang.Ş || randomPsw == lang.lang.t || randomPsw == lang.lang.T
  || randomPsw == lang.lang.u || randomPsw == lang.lang.U || randomPsw == lang.lang.ü
  || randomPsw == lang.lang.Ü || randomPsw == lang.lang.v || randomPsw == lang.lang.V
  || randomPsw == lang.lang.y || randomPsw == lang.lang.Y || randomPsw == lang.lang.z
  || randomPsw == lang.lang.Z || randomPsw == lang.lang.q || randomPsw == lang.lang.Q
  || randomPsw == lang.lang.X || randomPsw == lang.lang.x || randomPsw == lang.lang.w
  || randomPsw == lang.lang.W || randomPsw == lang.lang["-"] || randomPsw == lang.lang[0]
  || randomPsw == lang.lang[1]|| randomPsw == lang.lang[2] || randomPsw == lang.lang[3]
  || randomPsw == lang.lang[4]|| randomPsw == lang.lang[5] || randomPsw == lang.lang[6]
  || randomPsw == lang.lang[7]|| randomPsw == lang.lang[8] || randomPsw == lang.lang[9]
  || randomPsw == lang.lang["@"] || randomPsw == lang.lang["!"] || randomPsw == lang.lang["#"]
  || randomPsw == lang.lang["'"] || randomPsw == lang.lang["%"] || randomPsw == lang.lang["/"]
  || randomPsw == lang.lang["("] || randomPsw == lang.lang[")"] || randomPsw == lang.lang["="]
  || randomPsw == lang.lang["?"] || randomPsw == lang.lang["{"] || randomPsw == lang.lang["}"]
  || randomPsw == lang.lang["["] || randomPsw == lang.lang["]"] || randomPsw == lang.lang["+"]
  || randomPsw == lang.lang["|"] || randomPsw == lang.lang["_"] || randomPsw == lang.lang["_-"]
  || randomPsw == lang.lang["&"] || randomPsw == lang.lang["$"] || randomPsw == lang.lang["<"]
  || randomPsw == lang.lang[">"] || randomPsw == lang.lang["*"] || randomPsw == lang.lang[","]
  || randomPsw == lang.lang[":"])
  {
  return "+/%";
  }
  return randomPsw;
  }


function convert(mcharacter) {
    var character = mcharacter;
    var characterlength = character.length
    var characterresult = '';

    for (var i=0; i < characterlength; i++) {
        let result = character.substring(characterlength-characterlength+i,characterlength-characterlength+i+1);
        const rndm = rn(3);
        const rndm2 = rn(3);
        for(var s=result; s == "a"; s =+ "é"){
          characterresult += rndm + lang.lang.a + rndm2
        }
        for(var s=result; s == "A"; s =+ "é"){
          characterresult +=  rndm + lang.lang.A + rndm2
        }
        for(var s=result; s == "b"; s =+ "é"){
          characterresult +=  rndm + lang.lang.b + rndm2
        }
        for(var s=result; s == "B"; s =+ "é"){
          characterresult +=  rndm + lang.lang.B + rndm2
        }
        for(var s=result; s == "c"; s =+ "é"){
          characterresult +=  rndm + lang.lang.c + rndm2
        }
        for(var s=result; s == "C"; s =+ "é"){
          characterresult += rndm + lang.lang.C + rndm2
        }
        for(var s=result; s == "ç"; s =+ "é"){
          characterresult += rndm + lang.lang.ç + rndm2
        }
        for(var s=result; s == "Ç"; s =+ "é"){
          characterresult += rndm + lang.lang.Ç + rndm2
        }
        for(var s=result; s == "d"; s =+ "é"){
          characterresult += rndm +  lang.lang.d + rndm2
        }
        for(var s=result; s == "D"; s =+ "é"){
          characterresult += rndm + lang.lang.D + rndm2
        }
        for(var s=result; s == "e"; s =+ "é"){
          characterresult += rndm + lang.lang.e + rndm2
        }
        for(var s=result; s == "E"; s =+ "é"){
          characterresult += rndm + lang.lang.E + rndm2
        }
        for(var s=result; s == "f"; s =+ "é"){
          characterresult += rndm + lang.lang.f + rndm2
        }
        for(var s=result; s == "F"; s =+ "é"){
          characterresult += rndm + lang.lang.F + rndm2
        }
        for(var s=result; s == "g"; s =+ "é"){
          characterresult +=  rndm + lang.lang.g + rndm2
        }
        for(var s=result; s == "G"; s =+ "é"){
          characterresult +=  rndm + lang.lang.G + rndm2
        }
        for(var s=result; s == "ğ"; s =+ "é"){
          characterresult +=  rndm + lang.lang.ğ + rndm2
        }
        for(var s=result; s == "Ğ"; s =+ "é"){
          characterresult += rndm + lang.lang.Ğ + rndm2
        }
        for(var s=result; s == "h"; s =+ "é"){
          characterresult += rndm + lang.lang.h + rndm2
        }
        for(var s=result; s == "H"; s =+ "é"){
          characterresult += rndm + lang.lang.H + rndm2
        }
        for(var s=result; s == "ı"; s =+ "é"){
          characterresult += rndm + lang.lang.ı + rndm2
        }
        for(var s=result; s == "I"; s =+ "é"){
          characterresult += rndm + lang.lang.I + rndm2
        }
        for(var s=result; s == "i"; s =+ "é"){
          characterresult += rndm + lang.lang.i + rndm2
        }
        for(var s=result; s == "İ"; s =+ "é"){
          characterresult += rndm + lang.lang.İ + rndm2
        }
        for(var s=result; s == "j"; s =+ "é"){
          characterresult += rndm + lang.lang.j + rndm2
        }
        for(var s=result; s == "J"; s =+ "é"){
          characterresult += rndm + lang.lang.J + rndm2
        }
        for(var s=result; s == "k"; s =+ "é"){
          characterresult += rndm + lang.lang.k + rndm2
        }
        for(var s=result; s == "K"; s =+ "é"){
          characterresult += rndm + lang.lang.K + rndm2
        }
        for(var s=result; s == "l"; s =+ "é"){
          characterresult += rndm + lang.lang.l + rndm2
        }
        for(var s=result; s == "L"; s =+ "é"){
          characterresult += rndm + lang.lang.L + rndm2
        }
        for(var s=result; s == "m"; s =+ "é"){
          characterresult += rndm + lang.lang.m + rndm2
        }
        for(var s=result; s == "M"; s =+ "é"){
          characterresult += rndm + lang.lang.M + rndm2
        }
        for(var s=result; s == "n"; s =+ "é"){
          characterresult += rndm + lang.lang.n + rndm2
        }
        for(var s=result; s == "N"; s =+ "é"){
          characterresult += rndm + lang.lang.N + rndm2
        }
        for(var s=result; s == "o"; s =+ "é"){
          characterresult += rndm + lang.lang.o + rndm2
        }
        for(var s=result; s == "O"; s =+ "é"){
          characterresult += rndm + lang.lang.O + rndm2
        }
        for(var s=result; s == "ö"; s =+ "é"){
          characterresult += rndm + lang.lang.ö + rndm2
        }
        for(var s=result; s == "Ö"; s =+ "é"){
          characterresult += rndm + lang.lang.Ö + rndm2
        }
        for(var s=result; s == "p"; s =+ "é"){
          characterresult += rndm + lang.lang.p + rndm2
        }
        for(var s=result; s == "P"; s =+ "é"){
          characterresult += rndm + lang.lang.P + rndm2
        }
        for(var s=result; s == "r"; s =+ "é"){
          characterresult += rndm + lang.lang.r + rndm2
        }
        for(var s=result; s == "R"; s =+ "é"){
          characterresult += rndm + lang.lang.R + rndm2
        }
        for(var s=result; s == "s"; s =+ "é"){
          characterresult += rndm + lang.lang.s + rndm2
        }
        for(var s=result; s == "S"; s =+ "é"){
          characterresult += rndm + lang.lang.S + rndm2
        }
        for(var s=result; s == "ş"; s =+ "é"){
          characterresult += rndm + lang.lang.ş + rndm2
        }
        for(var s=result; s == "Ş"; s =+ "é"){
          characterresult += rndm + lang.lang.Ş + rndm2
        }
        for(var s=result; s == "t"; s =+ "é"){
          characterresult += rndm + lang.lang.t + rndm2
        }
        for(var s=result; s == "T"; s =+ "é"){
          characterresult += rndm + lang.lang.T + rndm2
        }
        for(var s=result; s == "u"; s =+ "é"){
          characterresult += rndm + lang.lang.u + rndm2
        }
        for(var s=result; s == "U"; s =+ "é"){
          characterresult += rndm + lang.lang.U + rndm2
        }
        for(var s=result; s == "ü"; s =+ "é"){
          characterresult += rndm + lang.lang.ü + rndm2
        }
        for(var s=result; s == "Ü"; s =+ "é"){
          characterresult += rndm + lang.lang.Ü + rndm2
        }
        for(var s=result; s == "v"; s =+ "é"){
          characterresult += rndm + lang.lang.v + rndm2
        }
        for(var s=result; s == "V"; s =+ "é"){
          characterresult += rndm + lang.lang.V + rndm2
        }
        for(var s=result; s == "y"; s =+ "é"){
          characterresult += rndm + lang.lang.y + rndm2
        }
        for(var s=result; s == "Y"; s =+ "é"){
          characterresult += rndm + lang.lang.Y + rndm2
        }
        for(var s=result; s == "z"; s =+ "é"){
          characterresult += rndm + lang.lang.z + rndm2
        }
        for(var s=result; s == "Z"; s =+ "é"){
          characterresult += rndm + lang.lang.Z + rndm2
        }
        for(var s=result; s == "w"; s =+ "é"){
          characterresult += rndm + lang.lang.w + rndm2
        }
        for(var s=result; s == "W"; s =+ "é"){
          characterresult += rndm + lang.lang.W + rndm2
        }
        for(var s=result; s == "q"; s =+ "é"){
          characterresult += rndm + lang.lang.q + rndm2
        }
        for(var s=result; s == "Q"; s =+ "é"){
          characterresult += rndm + lang.lang.Q + rndm2
        }
        for(var s=result; s == "x"; s =+ "é"){
          characterresult += rndm + lang.lang.x + rndm2
        }
        for(var s=result; s == "X"; s =+ "é"){
          characterresult += rndm + lang.lang.X + rndm2
        }
        for(var s=result; s == "0"; s =+ "é"){
          characterresult += rndm + lang.lang[0] + rndm2
        }
        for(var s=result; s == "1"; s =+ "é"){
          characterresult += rndm + lang.lang[1] + rndm2
        }
        for(var s=result; s == "2"; s =+ "é"){
          characterresult += rndm + lang.lang[2] + rndm2
        }
        for(var s=result; s == "3"; s =+ "é"){
          characterresult += rndm + lang.lang[3] + rndm2
        }
        for(var s=result; s == "4"; s =+ "é"){
          characterresult += rndm + lang.lang[4] + rndm2
        }
        for(var s=result; s == "5"; s =+ "é"){
          characterresult += rndm + lang.lang[5] + rndm2
        }
         for(var s=result; s == "6"; s =+ "é"){
          characterresult += rndm + lang.lang[6] + rndm2
        }
        for(var s=result; s == "7"; s =+ "é"){
          characterresult += rndm + lang.lang[7] + rndm2
        }
        for(var s=result; s == "8"; s =+ "é"){
          characterresult += rndm + lang.lang[8] + rndm2
        }
        for(var s=result; s == "9"; s =+ "é"){
          characterresult += rndm + lang.lang[9] + rndm2
        }
        for(var s=result; s == "-"; s =+ "é"){
          characterresult += rndm + lang.lang["-"] + rndm2
        }
        for(var s=result; s == "@"; s =+ "é"){
          characterresult += rndm + lang.lang["@"] + rndm2
        }
        for(var s=result; s == "!"; s =+ "é"){
          characterresult += rndm + lang.lang["!"] + rndm2
        }
        for(var s=result; s == "'"; s =+ "é"){
          characterresult += rndm + lang.lang["'"] + rndm2
        }
        for(var s=result; s == "#"; s =+ "é"){
          characterresult += rndm + lang.lang["#"] + rndm2
        }
        for(var s=result; s == "%"; s =+ "é"){
          characterresult += rndm + lang.lang["%"] + rndm2
        }
        for(var s=result; s == "/"; s =+ "é"){
          characterresult += rndm + lang.lang["/"] + rndm2
        }
        for(var s=result; s == "("; s =+ "é"){
          characterresult += rndm + lang.lang["("] + rndm
        }
        for(var s=result; s == ")"; s =+ "é"){
          characterresult += rndm + lang.lang[")"] + rndm2
        }
        for(var s=result; s == "="; s =+ "é"){
          characterresult += rndm + lang.lang["="] + rndm2
        }
        for(var s=result; s == "?"; s =+ "é"){
          characterresult += rndm + lang.lang["?"] + rndm2
        }
        for(var s=result; s == "{"; s =+ "é"){
          characterresult += rndm + lang.lang["{"] + rndm2
        }
        for(var s=result; s == "}"; s =+ "é"){
          characterresult += rndm + lang.lang["}"] + rndm2
        }
        for(var s=result; s == "["; s =+ "é"){
          characterresult += rndm + lang.lang["["] + rndm2
        }
        for(var s=result; s == "]"; s =+ "é"){
          characterresult += rndm + lang.lang["]"] + rndm2
        }
        for(var s=result; s == "+"; s =+ "é"){
          characterresult += rndm + lang.lang["+"] + rndm2
        }
        for(var s=result; s == "|"; s =+ "é"){
          characterresult += rndm + lang.lang["|"] + rndm2
        }
        for(var s=result; s == "_"; s =+ "é"){
          characterresult += rndm + lang.lang["_"] + rndm2
        }
        for(var s=result; s == "&"; s =+ "é"){
          characterresult += rndm + lang.lang["&"] + rndm2
        }
        for(var s=result; s == "$"; s =+ "é"){
          characterresult += rndm + lang.lang["$"] + rndm2
        }
        for(var s=result; s == "<"; s =+ "é"){
          characterresult += rndm + lang.lang["<"] + rndm2
        }
        for(var s=result; s == ">"; s =+ "é"){
          characterresult += rndm + lang.lang[">"] + rndm2
        }
        for(var s=result; s == "*"; s =+ "é"){
          characterresult += rndm + lang.lang["*"] + rndm2
        }
        for(var s=result; s == ","; s =+ "é"){
          characterresult += rndm + lang.lang[","] + rndm2
        }
        for(var s=result; s == ":"; s =+ "é"){
          characterresult += rndm + lang.lang[":"] + rndm2
        }
        for(var s=result; s == `"`; s =+ "é"){
          characterresult += rndm + ":;+" + rndm2
        }
      }
      if(package.version != nowpckg){
        console.log("!!Password-Locking Güncelleme gerekli / Password-Locking Update required  : npm i password-locking")
        return characterresult;
      }else{
        return characterresult;
      }
    }

    function translation(mcharacter) {
      var character = mcharacter;
      var characterlength = character.length;
      var characterresult = '';
  
      for (let i=0; i < characterlength; i++) {
        let result = character.substring(i,i+3);
        i = i+2
        for(var s=result; s == "?!&"; s =+ "é"){
          characterresult += "a"
        }
        for(var s=result; s == "'^-"; s =+ "é"){
          characterresult += "A"
        }
        for(var s=result; s == "%(_"; s =+ "é"){
          characterresult += "b"
        }
        for(var s=result; s == "&/("; s =+ "é"){
          characterresult += "B"
        }
        for(var s=result; s == "^'!"; s =+ "é"){
          characterresult += "c"
        }
        for(var s=result; s == "?=?"; s =+ "é"){
          characterresult += "C"
        }
        for(var s=result; s == "/½*"; s =+ "é"){
          characterresult += "ç"
        }
        for(var s=result; s == "$½£"; s =+ "é"){
          characterresult += "Ç"
        }
        for(var s=result; s == "!+-"; s =+ "é"){
          characterresult += "d"
        }
        for(var s=result; s == "/½&"; s =+ "é"){
          characterresult += "D"
        }
        for(var s=result; s == "^/+"; s =+ "é"){
          characterresult += "e"
        }
        for(var s=result; s == "!-'"; s =+ "é"){
          characterresult += "E"
        }
        for(var s=result; s == "?!'"; s =+ "é"){
          characterresult += "f"
        }
        for(var s=result; s == "&%/"; s =+ "é"){
          characterresult +=  "F"
        }
        for(var s=result; s == "''^"; s =+ "é"){
          characterresult += "g"
        }
        for(var s=result; s == "-/*"; s =+ "é"){
          characterresult += "G"
        }
        for(var s=result; s == "'^^"; s =+ "é"){
          characterresult += "ğ"
        }
        for(var s=result; s == "((/"; s =+ "é"){
          characterresult += "Ğ"
        }
        for(var s=result; s == "?##"; s =+ "é"){
          characterresult += "h"
        }
        for(var s=result; s == "*/&"; s =+ "é"){
          characterresult += "H"
        }
        for(var s=result; s == ")=("; s =+ "é"){
          characterresult += "ı"
        }
        for(var s=result; s == ";£'"; s =+ "é"){
          characterresult += "I"
        }
        for(var s=result; s == "(=)"; s =+ "é"){
          characterresult += "i"
        }
        for(var s=result; s == ";%&"; s =+ "é"){
          characterresult += "İ"
        }
        for(var s=result; s == "_-_"; s =+ "é"){
          characterresult += "j"
        }
        for(var s=result; s == "/^;"; s =+ "é"){
          characterresult += "J"
        }
        for(var s=result; s == "%&+"; s =+ "é"){
          characterresult += "k"
        }
        for(var s=result; s == "?=;"; s =+ "é"){
          characterresult += "K"
        }
        for(var s=result; s == "?%&"; s =+ "é"){
          characterresult += "l"
        }
        for(var s=result; s == "^^'"; s =+ "é"){
          characterresult += "L"
        }
        for(var s=result; s == "$#'"; s =+ "é"){
          characterresult += "m"
        }
        for(var s=result; s == "£);"; s =+ "é"){
          characterresult += "M"
        }
        for(var s=result; s == "*/-"; s =+ "é"){
          characterresult += "n"
        }
        for(var s=result; s == "++'"; s =+ "é"){
          characterresult += "N"
        }
        for(var s=result; s == "__!"; s =+ "é"){
          characterresult += "o"
        }
        for(var s=result; s == "*-;"; s =+ "é"){
          characterresult += "O"
        }
        for(var s=result; s == "_-!"; s =+ "é"){
          characterresult += "ö"
        }
        for(var s=result; s == "!';"; s =+ "é"){
          characterresult += "Ö"
        }
        for(var s=result; s == "&/%"; s =+ "é"){
          characterresult += "p"
        }
        for(var s=result; s == "//+"; s =+ "é"){
          characterresult += "P"
        }
        for(var s=result; s == "^+%"; s =+ "é"){
          characterresult += "r"
        }
        for(var s=result; s == "__'"; s =+ "é"){
          characterresult += "R"
        }
        for(var s=result; s == "*&-"; s =+ "é"){
          characterresult += "s"
        }
        for(var s=result; s == "%;;"; s =+ "é"){
          characterresult += "S"
        }
        for(var s=result; s == "?/'"; s =+ "é"){
          characterresult += "ş"
        }
        for(var s=result; s == "+;;"; s =+ "é"){
          characterresult += "Ş"
        }
        for(var s=result; s == "/!-"; s =+ "é"){
          characterresult += "t"
        }
        for(var s=result; s == "+'?"; s =+ "é"){
          characterresult += "T"
        }
        for(var s=result; s == "/£)"; s =+ "é"){
          characterresult += "u"
        }
        for(var s=result; s == "/(%"; s =+ "é"){
          characterresult += "U"
        }
        for(var s=result; s == "!^'"; s =+ "é"){
          characterresult += "ü"
        }
        for(var s=result; s == "!(="; s =+ "é"){
          characterresult += "Ü"
        }
        for(var s=result; s == "/%("; s =+ "é"){
          characterresult += "v"
        }
        for(var s=result; s == ";;*"; s =+ "é"){
          characterresult += "V"
        }
        for(var s=result; s == "=)("; s =+ "é"){
          characterresult += "y"
        }
        for(var s=result; s == "/{½"; s =+ "é"){
          characterresult += "Y"
        }
        for(var s=result; s == "=*-"; s =+ "é"){
          characterresult += "z"
        }
        for(var s=result; s == "$£%"; s =+ "é"){
          characterresult += "Z"
        }
        for(var s=result; s == "*/{"; s =+ "é"){
          characterresult += "q"
        }
        for(var s=result; s == ">>;"; s =+ "é"){
          characterresult += "Q"
        }
        for(var s=result; s == "[{["; s =+ "é"){
          characterresult += "x"
        }
        for(var s=result; s == "~?="; s =+ "é"){
          characterresult += "X"
        }
        for(var s=result; s == ";£@"; s =+ "é"){
          characterresult += "W"
        }
        for(var s=result; s == ";&+"; s =+ "é"){
          characterresult += "w"
        }
        for(var s=result; s == "---"; s =+ "é"){
          characterresult += "-"
        }
        for(var s=result; s == "!-+"; s =+ "é"){
          characterresult += "0"
        }
        for(var s=result; s == "!!+"; s =+ "é"){
          characterresult += "1"
        }
        for(var s=result; s == "!/*"; s =+ "é"){
          characterresult += "2"
        }
        for(var s=result; s == "&/^"; s =+ "é"){
          characterresult += "3"
        }
        for(var s=result; s == "!!'"; s =+ "é"){
          characterresult += "4"
        }
        for(var s=result; s == "&&&"; s =+ "é"){
          characterresult += "5"
        }
        for(var s=result; s == "/-*"; s =+ "é"){
          characterresult += "6"
        }
        for(var s=result; s == "%&-"; s =+ "é"){
          characterresult += "7"
        }
        for(var s=result; s == "**-"; s =+ "é"){
          characterresult += "8"
        }
        for(var s=result; s == "+%^"; s =+ "é"){
          characterresult += "9"
        }
        for(var s=result; s == ";:+"; s =+ "é"){
          characterresult += "@"
        }
        for(var s=result; s == ";&;"; s =+ "é"){
          characterresult += "!"
        }
        for(var s=result; s == ">$#"; s =+ "é"){
          characterresult += "'"
        }
        for(var s=result; s == "@/+"; s =+ "é"){
          characterresult += "#"
        }
        for(var s=result; s == "?+½"; s =+ "é"){
          characterresult += "%"
        }
        for(var s=result; s == "}}£"; s =+ "é"){
          characterresult += "/"
        }
        for(var s=result; s == "&'^"; s =+ "é"){
          characterresult += "("
        }
        for(var s=result; s == "==&"; s =+ "é"){
          characterresult += ")"
        }
        for(var s=result; s == "½$½"; s =+ "é"){
          characterresult += "="
        }
        for(var s=result; s == "&')"; s =+ "é"){
          characterresult += "?"
        }
        for(var s=result; s == "'/+"; s =+ "é"){
          characterresult += "{"
        }
        for(var s=result; s == "<>+"; s =+ "é"){
          characterresult += "}"
        }
        for(var s=result; s == "'%^"; s =+ "é"){
          characterresult += "["
        }
        for(var s=result; s == "//-"; s =+ "é"){
          characterresult += "]"
        }
        for(var s=result; s == ";>*"; s =+ "é"){
          characterresult += "+"
        }
        for(var s=result; s == "$;+"; s =+ "é"){
          characterresult += "_"
        }
        for(var s=result; s == "~;<"; s =+ "é"){
          characterresult += "-"
        }
        for(var s=result; s == "-_;"; s =+ "é"){
          characterresult += "&"
        }
        for(var s=result; s == "*?)"; s =+ "é"){
          characterresult += "$"
        }
        for(var s=result; s == "¨¨`"; s =+ "é"){
          characterresult += "<"
        }
        for(var s=result; s == "~~¨"; s =+ "é"){
          characterresult += ">"
        }
        for(var s=result; s == "½~;"; s =+ "é"){
          characterresult += "*"
        }
        for(var s=result; s == "-'%"; s =+ "é"){
          characterresult += ","
        }
        for(var s=result; s == "~;>"; s =+ "é"){
          characterresult += "|"
        }
        for(var s=result; s == ":;+"; s =+ "é"){
          characterresult += `"`
        }
        }
        if(package.version != nowpckg){
          console.log("!!Password-Locking Güncelleme gerekli / Password-Locking Update required  : npm i password-locking")
          return characterresult;
        }else{
          return characterresult;
        }
      }

    module.exports = {
        convert,
        translation
    }