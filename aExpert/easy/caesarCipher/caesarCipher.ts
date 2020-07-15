// given a non-empty string of lowercase letters 'word' and a non-negative integer 'key', shift each character in the string by the amount of the key.


const caesarCipherEncryptor = (word: string, key:number):string => {
  let result:Array<string> = [];
  let currentAlphaIndex:number;
  let newIndex:number;
  word.split('').forEach((item) => {
    currentAlphaIndex = item.charCodeAt(0) - 97;
    newIndex = (currentAlphaIndex + key) % 26;
    result.push(String.fromCharCode(newIndex + 97));
  })
  return result.join('');
}

export default caesarCipherEncryptor;
