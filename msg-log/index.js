(function(r,i,c,s){"use strict";const o=i.FluxDispatcher._actionHandlers._orderedActionHandlers,d=s.findByProps("sendMessage","receiveMessage"),g=s.findByProps("createBotMessage"),a=[];a.push(c.before("actionHandler",o.MESSAGE_UPDATE?.find(function(e){return e.name==="MessageStore"}),function(e){try{let n=s.findByProps("getMessage","getMessages").getMessage(e[0].message.channel_id,e[0].message.id)?.content,t=e[0]?.message?.content;if(!t||!n)return;e[0].message.content=n+" `[editada]`\n"+t}catch{}})),a.push(c.before("actionHandler",o.MESSAGE_DELETE?.find(function(e){return e.name==="MessageStore"}),function(e){try{let n=s.findByProps("getMessage","getMessages").getMessage(e[0].message.channel_id,e[0].message.id)?.content;if(!n)return;let t=g.createBotMessage({channelId:e[0].message.channel_id,content:n+`[deleted]
`});t.author={username:"ANTI DELETR",avatar:"clyde"},d.receiveMessage(e[0].message.channel_id,t)}catch{}}));const u=function(){return a.forEach(function(e){return e()})};return r.onUnload=u,r})({},vendetta.metro.common,vendetta.patcher,vendetta.metro);
