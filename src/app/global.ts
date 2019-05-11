import { Resources } from './resources';


export class Global{
  static onLoad(){
    if(localStorage.length !=0){
    }
  }
  static unLoad(){
  }
  static changeMoney(num){
    Resources.money += num;
  }
  static updateLocalStorage(){
  }
}
