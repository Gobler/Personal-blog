import{d,av as m,x,I as c,b as S,c as I,a2 as f,M as o,k as z}from"./entry.6f625808.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(_){var r;const s=_;m(n=>({"0173ad7c":o(p)}));const e=x();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const l=c(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),p=c(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),a=c(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(S(),I("span",{style:f({width:o(a),height:o(a)})},null,4))}});const b=z(y,[["__scopeId","data-v-de2c20b0"]]);export{b as default};
