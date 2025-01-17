export default {
		onLoad: function () {
			const { metro, commands, logger } = vendetta;

			const { sendBotMessage: sendEphemeralClydeMessage } =
				metro.findByProps("sendBotMessage");
			const MessageActions = metro.findByProps("sendMessage", "receiveMessage")
			



			this.onUnload = commands.registerCommand({
				// execute: exeCute,
				name: "div",
				displayName: "div",
				description: "divulgação global(tem chances de ban)",
				displayDescription: "divulgação global(tem chances de ban)",
				options: [
                {
                    name: "mensagem",
                    description: "mensagem pra divulgação",
                    type: 3,
                    required: true,
                    displayName: "mensagem",
                    displayDescription: "mensagem pra divulgação",
                }, {
        name: "delay",
        displayName: "delay",
        description: "delay de cada mensagem",
        displayDescription: "delay de cada mensagem",
        required: true,
        type: 3
                  }
                 ],
				applicationId: -1,
				inputType: 1,
				type: 1,
				execute: (args, ctx) => {
        try {
        
        let mensagem = args.find((sla) => sla.name == "mensagem").value;
        let delay = args.find((sla) => sla.name == "delay").value;
        let meuid = vendetta.metro.findByProps("getCurrentUser").getCurrentUser().id
        let testee = ""
        for (let membro of vendetta.metro.findByProps("getMembers").getMembers(ctx.guild.id)) {
        let iguau = meuid == membro.userId
        if(!iguau) {
    vendetta.metro.findByProps("get", "post").post({ url: '/users/@me/channels', body: {"recipients":[membro.userId]}}).then(res => {
        testee = res.body.id
        console.log(testee)
        vendetta.metro.findByProps("sendMessage", "receiveMessage").sendMessage(`${testee}`, {
            content: mensagem
        })
    })
}}
        
        
       // logger.log(args);
    //    logger.log(ctx);

        /*
            let mensagem = args.find((sla) => sla.name == "ip").value;
            let clyde = args.find((sla) => sla.name == "clyde");
            
            let geoip = await getIpInfo(ip)
            
            if(!clyde || !clyde.value) {
await MessageActions.sendMessage(ctx.channel.id, {
                content: geoip
            });
            } else {
            sendEphemeralClydeMessage(ctx.channel.id, geoip)
            }
            */
        } catch (err) {
            logger.log(err);
            sendEphemeralClydeMessage(ctx.channel.id, "error, look at the debug")
        }
    }
			});
		},
	};
