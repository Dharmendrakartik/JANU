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
				body: "my name is dk",
				attachment: fs.createReadStream(__dirname + `/cache/Dharmendra.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
