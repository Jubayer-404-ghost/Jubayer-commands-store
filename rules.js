module.exports = {
  config: {
    name: "rules",
    version: "1.0",
    author: "Jubayer",
    description: "Shows Islamic group rules",
    usage: "rules",
    cooldown: 3,
    permissions: [0, 1, 2],
    isPrefix: false
  },

  onStart: async function({ message, event }) {
    const rules = `❍─── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ──❍
•—»✨Assalamu Alaikum🖤💫

•—»✨ This is an Islamic group and I am your Islamic Robot🤖🕋.
There are some rules in this group that many may not know, so I'm sharing them with you all below. Please follow them — otherwise, you may be removed from the group.

❍─── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ──❍

🕋 ① No abusive or foul language allowed in this Islamic group.

🕋 ② No pornographic or inappropriate videos allowed.

🕋 ③ Be thankful to Allah for being part of this beautiful group — respect everyone.

🕋 ④ Do not insult or belittle anyone, whether elder or younger.

🕋 ⑤ Stay within the boundaries of Islamic conversation only.

🕋 ⑥ Respect the admins who have worked hard to create this group and robot.

🕋 ⑦ Admin is a kind person — contact him if you need any bot files.

🕋 ⑧ Fighting or arguments are strictly prohibited — because Shaitan is pleased when we fight.

🕋 ⑨ No bots other than this Islamic bot are allowed in the group.

🕋 ⑩ If you share or talk about 18+ or pornographic content, you will be removed immediately.

🕋 ⑪ People of all faiths are welcome, but never insult any religion — this group is here for learning.

🕋 ⑫ Do not send the same emoji repeatedly — please be mindful.

🕋 ⑬ Group name, group picture, or settings cannot be changed without admin permission.

🕋 ⑭ No spam messages allowed in this group.

🕋 ⑮ No phishing links, NASA hacker links, or similar scams are allowed.

❍─── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ──❍

❤️🌸 Dear Muslim brothers and sisters, I’ve created this Islamic group and bot with love for the sake of Allah. If you love Allah, don’t leave the group and follow the rules.

❍─── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ──❍

Pray 5 times daily and call upon Allah — because only Allah can save you from the terrifying fire of Jahannam on the Day of Judgment.

❍─── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ──❍
          
Dua for all my beloved group members❤️🤲

❍─── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ──❍`;

    message.reply(rules);
  }
};
