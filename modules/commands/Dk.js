const fs = require("fs");
module.exports.config = {
	name: "DHARMENDRA",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "chocolate",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("DHARMENDRA KARTIK")==0 || event.body.indexOf("DHARMENDRA KARTIK")==0 || event.body.indexOf("@Dharmendra Kartik")==0 || event.body.indexOf("@Dharmendra Kartik")==0) {
		var msg = {
				body: "𝗮𝗽𝗸𝗮 𝗗𝗢𝗦𝗧 𝗛𝗔𝗝𝗜𝗥 𝗛 
					⁂༒︎✿︎𝗗𝗞 𝗞𝗔𝗥𝗧𝗜𝗞✿︎༒︎⁂
			❁𝗙𝗢𝗢𝗟 𝗛𝗔𝗜 𝗚𝗨𝗟𝗔𝗕 𝗞𝗔 𝗖𝗛𝗔𝗠𝗘𝗟𝗜 𝗞𝗔 𝗠𝗔𝗧 𝗦𝗔𝗠𝗝𝗛𝗡𝗔 𝗔𝗣 𝗦𝗔𝗕 𝗞𝗔 𝗗𝗢𝗦𝗧 𝗛𝗨 𝗬𝗔𝗥 𝗔𝗣𝗡𝗘 𝗦𝗔𝗛𝗘𝗟𝗜 𝗞𝗔 𝗠𝗔𝗧 𝗦𝗔𝗠𝗝𝗛𝗡𝗔 
				❁
					𝑺𝑨𝑫𝑰𝒀𝑨 𝑷𝑬 𝑫𝑨𝑳𝑨𝑩 𝑵𝑨𝑱𝑨𝑹𝑰𝒀𝑨 
						𝑻𝑶 𝑺𝑨𝑫𝑰𝒀𝑨 𝑭𝑰𝑹 𝑺𝑬 𝑷𝑨𝑯𝑬𝑵𝑬 𝑲𝑬 𝑷𝑨𝑫 𝑱𝑨𝑰
							᯾★★★★★★★★★★★★★᯾
								😋𝑲𝑨𝑴𝑨𝑹 𝑻𝑶𝑯𝑨𝑹 𝑳𝑨𝑪𝑯 𝑳𝑨𝑪𝑯 𝑳𝑨𝑪𝑯 𝑳𝑨𝑪𝑯😋
									❣️𝑴𝒀 𝑱𝑨𝑵{𝑷𝑹𝑰𝒀𝑨}❣️",
				attachment: fs.createReadStream(__dirname + `/cache/Dharmendra.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
