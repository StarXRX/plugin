(function(l){"use strict";var y={onLoad:function(){const{metro:u,commands:v,logger:g}=vendetta,{sendBotMessage:o}=u.findByProps("sendBotMessage");u.findByProps("sendMessage","receiveMessage");const{getToken:h}=u.findByProps("getToken"),f={"user-agent":"Discord-Android/126021",authorization:h(),"x-fingerprint":"1090148022261915688.3l02euwN_G30bkZ-3LOixHptgSY","x-discord-locale":"pt-BR","accept-language":"pt-BR","x-super-properties":"eyJicm93c2VyIjoiRGlzY29yZCBBbmRyb2lkIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiRGlzY29yZC1BbmRyb2lkLzEyNjAyMSIsImNsaWVudF9idWlsZF9udW1iZXIiOjEyNjAyMSwiY2xpZW50X3ZlcnNpb24iOiIxMjYuMjEgLSBTdGFibGUiLCJkZXZpY2UiOiJtb3Rvcm9sYSBvbmUsIGRlZW4iLCJvcyI6IkFuZHJvaWQiLCJvc19zZGtfdmVyc2lvbiI6IjI5Iiwib3NfdmVyc2lvbiI6IjEwIiwic3lzdGVtX2xvY2FsZSI6InB0LUJSIiwiY2xpZW50X3BlcmZvcm1hbmNlX2NwdSI6MCwiY2xpZW50X3BlcmZvcm1hbmNlX21lbW9yeSI6MjkzODg0LCJjcHVfY29yZV9jb3VudCI6OCwiYWNjZXNzaWJpbGl0eV9zdXBwb3J0X2VuYWJsZWQiOmZhbHNlLCJhY2Nlc3NpYmlsaXR5X2ZlYXR1cmVzIjoyNTZ9","content-type":"application/json; charset=UTF-8","accept-encoding":"gzip, utf-8",cookie:"__sdcfduid=28cf6322cd2a11eda32afa05ee9c977acecdd052fa2ff9243c2ef7fff44b8f23e80421f014c65eedc694ca7fd5df5585; __cfruid=beb024e923d1064b07f8693f0806bb3d8a099186-1679982546; __dcfduid=28cf6322cd2a11eda32afa05ee9c977a"},b=async function(n){return await(await fetch(`https://discord.com/api/v9/guilds/${n}/channels`,{headers:f})).json()},m=async function(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,p=arguments.length>4?arguments[4]:void 0;try{return await(await fetch(`https://discord.com/api/v9/guilds/${n}/channels`,{method:"POST",headers:f,body:JSON.stringify({type:r,name:a,permission_overwrites:p,parent_id:t})})).json()}catch(c){console.log(c)}};this.onUnload=v.registerCommand({name:"clonarserver",displayName:"clonarserver",description:"clonar servidores(em teste)",displayDescription:"clonar servidores(em teste)",options:[{name:"idfrom",description:"idfrom",type:3,required:!0,displayName:"id of server que voce quer clonar",displayDescription:"id of server que voce quer clonar"},{name:"idto",description:"idto",type:3,required:!0,displayName:"id to server que voce vai colar o clone",displayDescription:"id to server que voce vai colar o clone"}],applicationId:-1,inputType:1,type:1,execute:async function(n,t){try{let r=n.find(function(e){return e.name=="idfrom"}).value,a=n.find(function(e){return e.name=="idto"}).value;const p=function(e){return new Promise(function(i){return setTimeout(i,e)})},c=await b(r);let s=c.filter(function(e){return e.type===4}).map(function(e){return[e]});s=[...s].sort(function(e,i){return e.position-i.position}),s.map(function(e){return c.forEach(function(i){return i.parent_id===e[0].id&&e.push(i)})});const I=s;for(let e of I){if(e.length>1){let i=null;for(let[Z,d]of e.entries()){let w=await m(a,i,d.type,d.name,d.permission_overwrites);Z===0&&(i=w.id),o(t.channel.id,`Created channel ${d.name}`)}}else canalcriado1=await m(a,e?.parent_id,e.type,e.name,e.permission_overwrites),o(t.channel.id,`Created group ${e.name}`);await p(2500)}o(t.channel.id,"Pronto!")}catch(r){g.log(r),o(t.channel.id,r)}}})}};return l.default=y,Object.defineProperty(l,"__esModule",{value:!0}),l})({});
