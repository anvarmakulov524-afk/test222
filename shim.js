/* Связь с Google Apps Script (данные в Google Таблице). */
(function(){
const C=window.LB_CONFIG||{},TM=!!window.TEACHER_MODE,SS=window.LB_SESSION||{};
if(!C.apiUrl){window.claude={use:async()=>null};return}
const call=async(fn,...args)=>{const r=await fetch(C.apiUrl,{method:"POST",body:JSON.stringify({fn,args})}),j=await r.json();if(!j.ok)throw new Error(j.e);return j.v};
const PW=SS.key||"";
const snapOf=(p,j)=>({id:p.split("/").pop(),exists:j!=null,data:()=>j==null?undefined:JSON.parse(j)});
const poll=(fn,cb,err,ms)=>{let last;const go=async()=>{try{const v=await fn(),j=JSON.stringify(v.raw);if(j!==last){last=j;cb(v.snap)}}catch(e){err&&err(e)}setTimeout(go,ms)};go()};
const db={
 doc:p=>({set:o=>call("set",p,JSON.stringify(o),PW),get:async()=>snapOf(p,await call("get",p)),delete:()=>call("del",p,PW),
  onSnapshot:(cb,err)=>poll(async()=>{const j=await call("get",p);return {raw:j,snap:snapOf(p,j)}},cb,err,TM?10000:30000)}),
 collection:p=>{const list=async()=>{const r=await call("list",p+"/",PW),docs=r.map(x=>snapOf(x.path,x.json));return {raw:r,snap:{docs,size:docs.length,empty:!docs.length}}};
  return {get:async()=>(await list()).snap,onSnapshot:(cb,err)=>poll(list,cb,err,6000)}}};
const user={canEdit:async()=>{if(!TM)return false;try{return await call("auth",PW)}catch(e){return false}},isOwner:async()=>false,
 id:async()=>TM||!SS.login?null:SS.login.replace(/[^\w.\-]/g,c=>"_"+c.charCodeAt(0).toString(16))};
window.claude={use:async n=>n==="db"?db:n==="user"?user:null};
})();