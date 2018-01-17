import Encryption from './Encryption';
let salt='1234'

 exports.put = function(key,value) {

  let str = '';
  try {
    str = JSON.stringify(value);

  } catch (e) {
    str=value;
  }
  localStorage.setItem(Encryption.encode(key,salt),Encryption.encode(str,salt));
 }

  exports.get = function(key) {
     let str= Encryption.encode(localStorage.getItem(Encryption.encode(key,salt)),salt);
     try {
       let obj = JSON.parse(str);
       return obj;
     } catch (e) {
          return str;
     }
  }
