import{u as m}from"./asyncData.c68f9362.js";import{M as c,I as p,d as i,a9 as u,r as l,N as n,k as d}from"./entry.da1a4422.js";import f from"./Ellipsis.4e55f340.js";import _ from"./ComponentPlaygroundData.4c50bef6.js";import"./TabsHeader.f48adc8f.js";import"./ComponentPlaygroundProps.d45987d2.js";import"./ProseH4.ec5df611.js";import"./ProseCodeInline.71deac4b.js";import"./Badge.0bbc05b9.js";import"./MDCSlot.127070e9.js";import"./slot.26e0ce9e.js";import"./ProseP.59ac826f.js";import"./index.1d497487.js";import"./ComponentPlaygroundSlots.vue.64095448.js";import"./ComponentPlaygroundTokens.vue.8892b3f2.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-aee2774e"]]);export{V as default};