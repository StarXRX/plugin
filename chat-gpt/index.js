(function(n){"use strict";var r={onLoad:function(){const{metro:i,commands:p,logger:l}=vendetta,{sendBotMessage:o}=i.findByProps("sendBotMessage"),g=i.findByProps("sendMessage","receiveMessage"),m=async function(t){const e={method:"POST",headers:{Authorization:"Bearer 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","Content-Type":"application/json"},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:t}],max_tokens:2048})};return await(await fetch("https://api.openai.com/v1/chat/completions",e)).json()};this.onUnload=p.registerCommand({name:"gpt3.5",displayName:"gpt3.5",description:"chat with gpt-3.5",displayDescription:"chat with gpt-3.5",options:[{name:"message",description:"message to send to gpt",type:3,required:!0,displayName:"message",displayDescription:"message to send to gpt"},{name:"clyde",displayName:"clyde",description:"use clyde to send the reply",displayDescription:"use clyde to send the reply",required:!0,type:5}],applicationId:-1,inputType:1,type:1,execute:async function(t,e){try{let s=t.find(function(a){return a.name=="message"}).value,c=t.find(function(a){return a.name=="clyde"}),d=await m(s);!c||!c.value?await g.sendMessage(e.channel.id,{content:d.choices[0].message.content}):await o(e.channel.id,d.choices[0].message.content)}catch(s){l.log(s),o(e.channel.id,"error look at the debug!")}}})}};return n.default=r,Object.defineProperty(n,"__esModule",{value:!0}),n})({});
