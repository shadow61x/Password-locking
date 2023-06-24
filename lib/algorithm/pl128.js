const crypto = require('crypto');

function enc(cfg) {
  if (!cfg) {
    throw new Error('text not found. =>  [pl-128]');
  }

  function p128bit64(sentence) {
    const utf8Bytes = Buffer.from(sentence, 'utf8');
    const paddedBytes = Buffer.alloc(16);
    utf8Bytes.copy(paddedBytes);
    return paddedBytes.toString('base64');
  }

  function bitcombining(text) {
    const f128cmb1 = p128bit64(text);
    const key = crypto.pbkdf2Sync(cfg, 'salt', 1000, 16, 'sha256').toString('base64');
    let encryptedText = xorEncrypt(f128cmb1, key);
    encryptedText = xorEncrypt(encryptedText, key);
    return encryptedText;
  }

  function xorEncrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      result += String.fromCharCode(charCode);
    }
    const encryptedText = Buffer.from(result).toString('base64');
    return encryptedText;
  }

  const f128bit64 = p128bit64(cfg);
  const f128cmb1 = bitcombining(f128bit64);
  return f128cmb1;
}

module.exports = {
  enc
};
