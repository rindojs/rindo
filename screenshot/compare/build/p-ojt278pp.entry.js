import{r as s,g as t}from"./p-b6e44a24.js";import{A as e}from"./p-efb0eac6.js";const i=class{constructor(t){s(this,t),this.when=!0,this.message=""}enable(s){this.unblock&&this.unblock(),this.history&&(this.unblock=this.history.block(s))}disable(){this.unblock&&(this.unblock(),this.unblock=void 0)}componentWillLoad(){this.when&&this.enable(this.message)}updateMessage(s,t){this.when?this.when&&t===s||this.enable(this.message):this.disable()}componentDidUnload(){this.disable()}render(){return null}get el(){return t(this)}static get watchers(){return{message:["updateMessage"],when:["updateMessage"]}}};e.injectProps(i,["history"]);export{i as rindo_router_prompt};
