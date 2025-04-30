module.exports = {
  config: {
    name: "ping",
    version: "1.0",
    author: "Jubayer",
    role: 0,
    shortDescription: "Check you Bot ping",
    category: "system"
  },

  onStart: async function({ message }) {
    const timeStart = Date.now();
    await message.reply("Checking ping...");
    const timeEnd = Date.now();
    message.reply(`❍─── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ──❍\n𝗣𝗜𝗡𝗚!  ⁣⁣𓆩${timeEnd - timeStart}ms𓆪\n❍─── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ──❍`);
  }
};
