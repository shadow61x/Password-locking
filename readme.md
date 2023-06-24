># Password locking



## Setup
```bash
npm i password-locking
```
Use the package
```js
const pl = require("password-locking");
```
<br>


## convert/translation
This function converts the password "Password 123456789 (-_-)(^-^)" into an encrypted text using the 'convert' function.
```js
let encrypted  = pl.encryption.def1({
text:"Password 123456789 (-_-)(^-^)"
});

//To decrypt the encrypted text,
let decrypt  = pl.encryption.def1({
text:"^/+/!-/-*?##!+-?!&^/+*/-!!+%&+^/+=)(^/+__!^/+/£)^/+'*?+%^#½$^/+==&"
});

//The functions are defined as algorithms, and this function uses the DEF-1 algorithm, which means it has the same algorithm as the previous version.

```
>The usage method of the text value

Thanks to the 'text' value, now you can perform both encryption and decryption with a single operation. If you want to encrypt a text, just enter the text, and the system detects what kind of operation you want to perform and responds accordingly. Similarly, if you enter an encrypted text, the system returns the decrypted text as the result.

<br>
<br>

## Make your first hash
Pl-128 is a secure and effective data encryption algorithm. With a 128-bit key size, it provides a high level of security and flawlessly protects your data. It is an ideal choice for both personal use
```js
const pl = require("password-locking");

let encs = encryption.pl_128("Merhaba Dünya (Hello World)")
console.log(encs);

//output : ATAeHQ9RcAUlDBFjKBROcCtfBREDAH93CB5iDwJfADI=
```

<br>


```md
#Discord community
https://discord.gg/xvZUMyaAU2

#Github
https://github.com/shadow61x/Password-locking
```
