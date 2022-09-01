const r=t=>(typeof t=="string"&&(t=new Date(t)),t.toLocaleString()),B=t=>t.toLocaleString(),c=(t,o=2)=>{if(t===0)return"0 Bytes";const n=1024,a=o<0?0:o,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],s=Math.floor(Math.log(t)/Math.log(n));return parseFloat((t/Math.pow(n,s)).toFixed(a))+" "+e[s]};export{B as a,c as b,r as p};
//# sourceMappingURL=formatting-b1e7d458.js.map
