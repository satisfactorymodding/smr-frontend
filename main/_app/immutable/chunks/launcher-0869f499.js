import{b3 as r,w as o,az as l}from"./vendor-93f46a94.js";const i=o(null),e=o(!1),n=o(!1),p=()=>{new Promise(()=>{const s=r("http://localhost:33642",{transports:["websocket"]});s.on("connect",()=>{e.set(!0),n.set(!0)}),s.on("disconnect",()=>{n.set(!1)})}).catch(console.error)},c=(s,t)=>{new Promise(()=>{l(i).protocolCheck(s,()=>{e.set(!1),t&&t()})}).catch(console.error)},a="https://smm.ficsit.app/",w=()=>{c("smmanager://ping",()=>{window.open(a,"_blank")})},f=s=>{c("smmanager://install?modID="+s,()=>{window.open(a,"_blank")})};p();export{i as c,e as h,f as i,w as p};
//# sourceMappingURL=launcher-0869f499.js.map
