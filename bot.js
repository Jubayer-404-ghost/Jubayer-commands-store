module.exports = {
    config: {
        name: "bot",
        version: "1.0",
        author: "Jubayer",
        countDown: 5,
        role: 0,
        shortDescription: "bot",
        longDescription: "bot",
        category: "Fun",
        guide: {
            en: "{pn} text"
        }
    },
    onStart: async () => {},
    onChat: async function ({ message, event, api }) {
        if (module.exports.config.author !== "Jubayer") {
            return;
        }
        const responses = [
           "Hey, are you a magician? Because you just made my heart disappear! 😎✨",
            "Call me a thief, because I’m here to steal your heart! 😏💖",
            "Is your name Wi-Fi? Because I’m feeling a strong connection! 📶😉",
            "I’m not a photographer, but I can picture us together forever! 📸😍",
            "Do you have a map? I keep getting lost in your eyes! 🗺️😘"
        ];
        const triggerWords = ["bot", "Bot"];
        if (!event.body) {
            return;
        }
        const triggerWord = triggerWords.find(word => event.body.toLowerCase().startsWith(word.toLowerCase()));
        if (!triggerWord) {
            return;
        }
        const senderID = event.senderID;
        let senderName = "User";
        try {
            const userInfo = await api.getUserInfo(senderID);
            senderName = userInfo[senderID]?.name || "User";
        } catch (error) {
            console.error("Error fetching user info:", error);
        }
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        return message.reply({
            body: `🥀 ${senderName} 🥀\n\n${randomResponse}`,
            mentions: [{
                id: senderID,
                tag: senderName
            }]
        });
    }
};
