(function(o){"use strict";var p={onLoad:function(){const{metro:l,commands:c,logger:g}=vendetta,{sendBotMessage:d}=l.findByProps("sendBotMessage"),f=l.findByProps("sendMessage","receiveMessage");function y(a,s,i){const t=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${s}&tl=${i}&dt=t&q=${encodeURIComponent(a)}`;return fetch(t).then(function(e){if(!e.ok)throw new Error(`Failed to translate text: ${e.status} ${e.statusText}`);return e.json()}).then(function(e){return e[0].map(function(r){return r[0]}).join("")})}this.onUnload=c.registerCommand({name:"translate",displayName:"translate",description:"translate your message",displayDescription:"translate your message",options:[{name:"text",description:"text to translate",type:3,required:!0,displayName:"text",displayDescription:"text to translate"},{name:"fromLang",description:"language that the text is(use like this: en, fr, pt...)",type:3,required:!1,displayName:"fromLang",displayDescription:"language that the text is(use like this: en, fr, pt...)"},{name:"toLang",description:"what language are you going to translate to (use like this: en, FR, pt...)",type:3,required:!0,displayName:"toLang",displayDescription:"what language are you going to translate to (use like this: en, fr, pt...)"},{name:"send",displayName:"send",description:"send the message? (if you have deactivated it will appear only for you)",displayDescription:"send the message? (if you have deactivated it will appear only for you)",required:!1,type:5}],applicationId:-1,inputType:1,type:1,execute:async function(a,s){try{let i=a.find(function(n){return n.name=="text"}),t=a.find(function(n){return n.name=="fromLang"}),e=a.find(function(n){return n.name=="send"}),r=a.find(function(n){return n.name=="toLang"});t?t=t.value:t="pt";let u=await y(i,t,r);e&&e.value?await f.sendMessage(s.channel.id,{content:u}):d(s.channel.id,u)}catch(i){g.log(i),d(s.channel.id,i)}}})}};return o.default=p,Object.defineProperty(o,"__esModule",{value:!0}),o})({});
