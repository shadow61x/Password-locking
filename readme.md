# Password locking

## 1.1.5-V Güncellemeler/updates
```sh
tr:  Özel karakterde verilen hatalar düzeltildi

eng:  errors in special characters have been fixed
```
#
## Usage/Kullanımı

Install the **password-locking** package with [NPM](https://www.npmjs.com/package/password-locking):

```sh
npm i password-locking 
```

Sunucuya paketi bağlayın <br>
Connect package to server
```js
const lang = require("password-locking");
```

<b>Şifreleme/Encryption<b>
```js
const password = lang.convert("PASSWORD-123456789");
//tr: metni anlamsız ifadeler ile şifreleyip gönderir
//eng: encrypts and sends text with meaningless expressions
```
<b style="color:#f43521;">!! 1.1.3 sürümünde (" ! ' ^+  * -/ ...") gibi ifadeler hatalı çalışabilmektedir</b>
<br>
<b style="color:#f43521;">!! In version 1.1.3, statements like (" ! ' ^+ * -/ ...") may work incorrectly.</b>
<br><br>
<b>Çeviri/Translation<b>
```js
const tokenresult = lang.translation(password);
//tr: şifrelenmiş metni çevirip gönderir
//eng: translates and sends encrypted text
```
## Örnek/Example
```js
const lang = require("password-locking");

const token = lang.convert("my-password-123");
const tokenresult = lang.translation(token);


console.log(token);
console.log(tokenresult);

```

# 
## Discord / [Github](https://github.com/shadow61x/Password-locking)

```sh
Name: Medulla#7014 
ID: 401706174778572800


tr: Discord hesabından özelime hataları yada isteklerinizi iletebilirsiniz

eng: You can forward errors or requests to private me from the Discord account.
```
