module.exports.config = {
  name: "tagadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100036544282703") {
    var aid = ["100036544282703"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag Admin lần nữa bố ban khỏi dùng","Tag Admin lần nữa tao đấm cho đấy","Đã bảo đừng tag Admin mà, thích ăn đấm hả😠","Đĩ mẹ mày thích tag Admin không con chó 😏"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
       attachment: fs.createReadStream(__dirname + `/noprefix/meme.jpg`)
    }
    }}
};
module.exports.run = async function({}) {
  }