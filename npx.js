const fs = require('fs');
const path = require('path');

const COMMANDS_PATH = path.join(__dirname, '..', '..', 'cmds');

module.exports = {
  config: {
    name: "npx",
    version: "1.0",
    author: "Jubayer",
    description: "Enable or disable prefix-free mode by removing {pn} from all command guides",
    usage: "npx on/off",
    cooldown: 3,
    permissions: [2],
  },

  onStart: async function ({ message, args }) {
    const action = args[0];

    if (!['on', 'off'].includes(action)) {
      return message.reply("Please use 'npx on' or 'npx off'.");
    }

    if (!fs.existsSync(COMMANDS_PATH)) {
      return message.reply("The 'cmds' folder was not found.");
    }

    const commandFiles = fs.readdirSync(COMMANDS_PATH).filter(file => file.endsWith('.js'));
    let updatedCount = 0;

    for (const file of commandFiles) {
      const filePath = path.join(COMMANDS_PATH, file);
      let content = fs.readFileSync(filePath, 'utf8');

      if (action === 'on') {
        if (content.includes('{pn}')) {
          content = content.replace(/\{pn\}/g, '');
          fs.writeFileSync(filePath, content, 'utf8');
          updatedCount++;
        }
      } else if (action === 'off') {
        return message.reply("'npx off' is not supported yet. You must manually restore {pn}.");
      }
    }

    return message.reply(`Prefix-free mode '${action}' applied. ${updatedCount} file(s) updated.`);
  }
};
