import "./css/index.css"
import "./css/font.scss"

let divEl = document.createElement("div");
divEl.innerHTML = "Hello World";
divEl.classList.add("color");
document.body.appendChild(divEl);

const hEl = document.createElement("h1");
hEl.innerHTML = "Hello World";
hEl.classList.add("title-font");
document.body.appendChild(hEl);

const imgEl = document.createElement("img");
imgEl.src = require("./img/1.jpg");
document.body.appendChild(imgEl);

class Src {
    constructor() {
        this.name = "src";
    }
}

console.log(new Src().name);

import { createApp } from 'vue'
import App from "./vue/app.vue"
createApp(App).mount("#app")
