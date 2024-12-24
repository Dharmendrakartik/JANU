const fs = require("fs");

module.exports.config = {

  name: "DHARMENDRA KARTIK",

    version: "1.0.1",

  hasPermssion: 0,

  credits: "DHARMENDRA", 

  description: "no prefix",

  commandCategory: "No command marks needed",

  usages: "...",

    cooldowns: 5, 

};



module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {

  var { threadID, messageID } = event;

  if (event.body.indexOf("Dharmendra")>=0 || (event.body.indexOf("@Dk Indu")>=0 || (event.body.indexOf("Dharmendra")>=0 || (event.body.indexOf("Dharmendra")>=0)))) {

    var msg = {

        body: "🥰𝗕𝗢𝗦𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘❤️",

        attachment: fs.createReadStream(__dirname + `/dharmendra/ss.jpg`)

      }

      api.sendMessage(msg, threadID, messageID);

    }

  }
7
  module.exports.run = function({ api, event, client, __GLOBAL }) {



          }
