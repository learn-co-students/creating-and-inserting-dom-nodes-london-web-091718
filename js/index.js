//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

let elementMaker = element => document.createElement(element);
el = elementMaker("div");
el.innerHTML = "WUT";
document.body.appendChild(el);
