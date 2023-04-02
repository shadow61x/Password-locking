># Password locking

## <span style="color:red">attention</span>
With the new update, the algorithm has completely changed. Encrypted texts prior to version 2.0.0 cannot be used in versions later than 2.0.0. Install password-locking@1.3.3 to use old version.
```bash
npm i password-locking@1.3.3
```
<br>
<br>

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


<br>

Bugs, suggestions, questions about the package... you can write by <br>sending a private message on discord.
```sh
#Discord >
Name: Medulla#7014 
ID: 401706174778572800
```
