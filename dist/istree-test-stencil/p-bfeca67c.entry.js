import{r,h as o}from"./p-97ccfb03.js";const n=class{constructor(o){r(this,o),this.primary=!1,this.secondary=!1,this.functional=!1,this.brand=!1,this.tomato=!1,this.isLoading=!1}getAppearance(){return{btn:!0,primary:this.primary,secondary:this.secondary,functional:this.functional,brand:this.brand,tomato:this.tomato}}render(){return o("button",{class:Object.assign({},this.getAppearance())},this.isLoading&&o("div",{style:{"margin-right":"10px"},class:"lds-ring"},o("div",null),o("div",null),o("div",null),o("div",null)),o("slot",null))}};n.style=":host{display:inline-block}.btn{background:var(--mono-10);color:var(--mono-70);border-radius:4px;border:none;padding:0 12px;height:38px;outline:none;transition:0.1s ease;cursor:pointer;display:flex;justify-content:center;align-items:center;font-family:inherit}.btn.primary{background-color:var(--primary);color:var(--white)}.btn.primary:hover{background-color:var(--primaryHover)}.btn.secondary{background-color:var(--secondary);color:var(--white)}.btn.secondary:hover{background-color:var(--secondaryHover)}.btn.functional{background-color:var(--functional);color:var(--white)}.btn.functional:hover{background-color:var(--functionalHover)}.btn.brand{background-color:var(--brand);color:var(--white)}.btn.brand:hover{background-color:var(--brandHover)}.btn.tomato{background-color:tomato;color:var(--white)}.btn.tomato:hover{background-color:rgba(255, 99, 71, 0.9)}.lds-ring{display:inline-block;position:relative;width:20px;height:20px}.lds-ring div{box-sizing:border-box;position:absolute;width:inherit;height:inherit;border:3px solid #fff;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#fff transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-0.45s}.lds-ring div:nth-child(2){animation-delay:-0.3s}.lds-ring div:nth-child(3){animation-delay:-0.15s}@keyframes lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";export{n as istree_button}