import { FluxDispatcher } from '@vendetta/metro/common';
import { before, after} from "@vendetta/patcher"
import { findByProps } from "@vendetta/metro"
import { logger } from "@vendetta"
const FD = FluxDispatcher._actionHandlers._orderedActionHandlers;
const MessageActions = findByProps("sendMessage", "receiveMessage")
const BotMessage = findByProps("createBotMessage");

const patches = [];




//const RowManager = findByName("RowManager");

patches.push(before("actionHandler", FD.MESSAGE_UPDATE?.find(i => i.name === "MessageStore"), (args: any) => {
                try {
                let msgantiga = findByProps("getMessage", "getMessages").getMessage(args[0].message.channel_id, args[0].message.id)?.content
                
                
                let message = args[0]?.message?.content;
                if (!message) return;
                if (!msgantiga) return;
                    args[0].message.content = msgantiga + " `[editada]`\n" + message;
            } catch (e) {}
            }));
            



patches.push(before("actionHandler", FD.MESSAGE_DELETE?.find(i => i.name === "MessageStore"), (args: any) => {
                
                //console.log(args)
                
                let msgantiga = findByProps("getMessage", "getMessages").getMessage(args[0].channelId, args[0].id)
                
               // let message = args[0]?.message?.content;
           //     if (!message) return;
                if (!msgantiga) return;
                if (msgantiga.author.id == "000") return;
            
let msg = BotMessage.createBotMessage({channelId: args[0].channelId, content: msgantiga.content});
msg.author = { username: msgantiga.author.username + " ANTI DELETE", avatar: "clyde", id: "000" };

MessageActions.receiveMessage(args[0].channelId, msg);
            }));




/*
MESSAGE_DELETE


/eval code:const { findByProps,findByName} = vendetta.metro;
const MessageActions = findByProps("sendMessage", "receiveMessage")
const BotMessage = findByProps("createBotMessage");

let msg = BotMessage.createBotMessage({channelId: "1087872026796097657", content: "hello"});
msg.author = { username: "/vibrate", avatar: "clyde" };

MessageActions.receiveMessage("1087872026796097657", msg);


*/
export const onUnload = () => patches.forEach((unpatch) => unpatch());
