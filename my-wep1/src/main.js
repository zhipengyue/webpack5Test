// import './index.html';
import './index.scss';
import {moudleA} from './moduleA/moduleA.js';


console.log('hello');
let div=document.createElement("div")
div.setAttribute("class","main");
div.innerHTML="moduleA"
document.body.appendChild(div);
// console.log('////////')
// moudleA.init();

import("app2/moduleB").then((module)=>{
  console.log(module)
  module.moudleB.init();
})
import("app2/moduleC").then((module)=>{
  console.log(module)
  module.moudleC.init()
})