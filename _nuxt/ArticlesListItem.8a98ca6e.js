import{d as x,I as v,a0 as C,b as n,c as r,e as c,F as p,Z as w,f as o,g as u,w as f,X as B,t as s,M as m,n as I,a1 as N,E as D,a2 as L,k as E}from"./entry.da1a4422.js";import{f as V}from"./date.824a539b.js";const z=["data-content-id"],A={class:"image"},F={key:0},S={class:"content"},$={class:"description"},g=x({__name:"ArticlesListItem",props:{article:{type:Object,required:!0,validator:t=>!!(t!=null&&t._path&&t.title)},featured:{type:Boolean,default:!1}},setup(t){const _=t,h=v(()=>{var a,i;return(a=C())!=null&&a.isEnabled()?(i=_.article)==null?void 0:i._id:void 0});return(a,i)=>{var d;const y=N,l=D;return t.article._path&&t.article.title?(n(),r("article",{key:0,class:I({featured:t.featured}),"data-content-id":m(h)},[c("div",A,[(d=t.article)!=null&&d.badges?(n(),r("div",F,[(n(!0),r(p,null,w(t.article.badges,(e,k)=>(n(),r("span",{key:k,style:L({backgroundColor:(e==null?void 0:e.bg)||"rgba(0, 0, 0, 0.3)",color:(e==null?void 0:e.color)||"white"})},s(typeof e=="string"?e:e.content),5))),128))])):o("",!0),u(l,{to:t.article._path},{default:f(()=>[t.article.cover?(n(),B(y,{key:0,src:t.article.cover,alt:t.article.title,width:"16",height:"9"},null,8,["src","alt"])):o("",!0)]),_:1},8,["to"])]),c("div",S,[u(l,{to:t.article._path,class:"headline"},{default:f(()=>[c("h1",null,s(t.article.title),1)]),_:1},8,["to"]),c("p",$,s(t.article.description),1),c("time",null,s(("formatDate"in a?a.formatDate:m(V))(t.article.date)),1)])],10,z)):o("",!0)}}});const M=E(g,[["__scopeId","data-v-c51f0f34"]]);export{M as default};