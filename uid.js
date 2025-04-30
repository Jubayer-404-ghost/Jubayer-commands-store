const fs = require("fs-extra");
const request = require("request");
const axios = require("axios");

module.exports = {
  config: {
    name: "uid",
    version: "1.0",
    author: "Jubayer",
    description: "Get Facebook UID and profile picture from reply, mention, link or yourself",
    usage: "[reply | mention | link | none]",
    cooldown: 3,
    permissions: [0, 1, 2]
  },

  onStart: async function({ event, api, args, Users }) {
    let uid;

    if (event.type === "message_reply") {
      uid = event.messageReply.senderID;
    } else if (args.join().includes("@")) {
      uid = Object.keys(event.mentions)[0];
    } else if (args[0] && args[0].includes(".com/")) {
      try {
        uid = await api.getUID(args[0]);
      } catch (e) {
        return api.sendMessage("Couldn't fetch UID from the link.", event.threadID, event.messageID);
      }
    } else {
      uid = event.senderID;
    }

    const imgPath = `${__dirname}/cache/uidpic.png`;
    const url = `https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`;

    const callback = () => {
      api.sendMessage(
        { body: `❍─── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ──❍\n✨${uid}✨\n❍─── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ──❍`, attachment: fs.createReadStream(imgPath) },
        event.threadID,
        () => fs.unlinkSync(imgPath),
        event.messageID
      );
    };

    request(encodeURI(url))
      .pipe(fs.createWriteStream(imgPath))
      .on("close", callback);
  }
};
