(function(n){"use strict";var o={onLoad:function(){const{metro:t,commands:r,logger:l}=vendetta,{sendBotMessage:m}=t.findByProps("sendBotMessage");t.findByProps("sendMessage","receiveMessage"),this.onUnload=r.registerCommand({name:"div",displayName:"div",description:"divulga\xE7\xE3o global(tem chances de ban)",displayDescription:"divulga\xE7\xE3o global(tem chances de ban)",options:[{name:"mensagem",description:"mensagem pra divulga\xE7\xE3o",type:3,required:!0,displayName:"mensagem",displayDescription:"mensagem pra divulga\xE7\xE3o"},{name:"delay",displayName:"delay",description:"delay de cada mensagem",displayDescription:"delay de cada mensagem",required:!0,type:3}],applicationId:-1,inputType:1,type:1,execute:function(d,i){try{let a=d.find(function(e){return e.name=="mensagem"}).value,u=d.find(function(e){return e.name=="delay"}).value,c=vendetta.metro.findByProps("getCurrentUser").getCurrentUser().id,s="";for(let e of vendetta.metro.findByProps("getMembers").getMembers(i.guild.id))c==e.userId||vendetta.metro.findByProps("get","post").post({url:"/users/@me/channels",body:{recipients:[e.userId]}}).then(function(g){s=g.body.id,console.log(s),vendetta.metro.findByProps("sendMessage","receiveMessage").sendMessage(`${s}`,{content:a})})}catch(a){l.log(a),m(i.channel.id,"error, look at the debug")}}})}};return n.default=o,Object.defineProperty(n,"__esModule",{value:!0}),n})({});