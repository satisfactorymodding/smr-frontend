const B=t=>(typeof t=="string"&&(t=new Date(t)),t.toLocaleString()),a=t=>t.toLocaleString(),c=(t,o=2)=>{if(t===0)return"0 Bytes";const r=1024,n=o<0?0:o,s=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],e=Math.floor(Math.log(t)/Math.log(r));return parseFloat((t/Math.pow(r,e)).toFixed(n))+" "+s[e]};export{B as a,c as b,a as p};
//# sourceMappingURL=formatting-24701f16.js.map
