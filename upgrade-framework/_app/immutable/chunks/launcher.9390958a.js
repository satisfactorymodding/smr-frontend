import{ae as o,bF as r,aF as l}from"./vendor.3b08e99d.js";const i=o(null),e=o(!1),n=o(!1),p=()=>{new Promise(()=>{const s=r("http://localhost:33642",{transports:["websocket"]});s.on("connect",()=>{e.set(!0),n.set(!0)}),s.on("disconnect",()=>{n.set(!1)})}).catch(console.error)},a=(s,t)=>{new Promise(()=>{l(i).protocolCheck(s,()=>{e.set(!1),t&&t()})}).catch(console.error)},c="https://smm.ficsit.app/",f=()=>{a("smmanager://ping",()=>{window.open(c,"_blank")})},h=s=>{a("smmanager://install?modID="+s,()=>{window.open(c,"_blank")})};p();export{i as c,e as h,h as i,f as p};
//# sourceMappingURL=launcher.9390958a.js.map