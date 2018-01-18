import{encode} from './Encryption';
let salt='1234'

 export function put(key,value) {

  let str = '';
  try {
    str = JSON.stringify(value);

  } catch (e) {
    str=value;
  }
  localStorage.setItem( encode(key,salt), encode(str,salt));
 }

  export function  get(key) {
     let str=  encode(localStorage.getItem( encode(key,salt)),salt);
     try {
       let obj = JSON.parse(str);
       return obj;
     } catch (e) {
          return str;
     }
  }

  export default function init() {

  }