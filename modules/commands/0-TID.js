module.exports.config = {
	name: "tid", version: "1.0.0", 
	hasPermssion: 0,
	credits: "DHARMENDRA",
	description: "Get box id", 
	commandCategory: "group",
	usages: "tid",
	cooldowns: 5, 
	dependencies: '',
};

module.exports.run = async function({ api, event }) {
  api.sendMessage(event.threadID, event.threadID);
};
