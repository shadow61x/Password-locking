# Password locking

## 1.2.0-V updates
```sh
tr:  Özel karakterde verilen hatalar düzeltildi

eng:  errors in special characters have been fixed
```
#
## Usage

Install the **password-locking** package with [NPM](https://www.npmjs.com/package/password-locking):

```sh
npm i password-locking 
```


Connect package to server
 <br>
```js
const lang = require("password-locking");
```

<b>Encryption<b>
```js
const password = lang.convert("PaSsWoRd 123456789 (-_-)  (^-^)");
//tr: metni anlamsız ifadeler ile şifreleyip gönderir
//eng: encrypts and sends text with meaningless expressions
```
<b style="color:#f43521;">!! 1.1.3 sürümünde (" ! ' ^+  * -/ ...") gibi ifadeler hatalı çalışabilmektedir</b>
<br>
<b style="color:#f43521;">!! In version 1.1.3, statements like (" ! ' ^+ * -/ ...") may work incorrectly.</b>
<br><br>
<b>Translation<b>
```js
const tokenresult = lang.translation(password);
//tr: şifrelenmiş metni çevirip gönderir
//eng: translates and sends encrypted text
```
## Example
```js
const lang = require("password-locking");

const password = lang.convert("PaSsWoRd 123456789 (-_-)  (^-^)");
const fws = lang.translation(password);

console.log(password);//encrypted text
console.log('\r')//It has nothing to do with the package.
console.log(fws);//decrypted text

```

# 
## Discord / [Github](https://github.com/shadow61x/Password-locking)

```sh
Name: Medulla#7014 
ID: 401706174778572800


tr: Discord hesabından özelime hataları yada isteklerinizi iletebilirsiniz

eng: You can forward errors or requests to private me from the Discord account.
```
