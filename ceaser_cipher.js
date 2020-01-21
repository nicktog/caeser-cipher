function rot13(str) { // LBH QVQ VG!
var toReturn = '';
var alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function converter(orig){
  if (alph.indexOf(orig)<0){return orig}
  return alph[(alph.indexOf(orig)+13) % 26];
}
for (var specific in str){
  toReturn += converter(str[specific])
}
  return toReturn;
}
// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("ERNYYL LBH NER FB PBBY"));
console.log(rot13("REALLY YOU ARE SO COOL"));