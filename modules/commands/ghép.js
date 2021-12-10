module.exports.config = {
  name: "ghép",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Jukie Mode Dũng",
  description: "Ghép đôi",
  commandCategory: "Game",
  usages: "ghép",
  cooldowns: 10,
  dependencies: []
};
module.exports.run = async function ({
  api,
  event,
  Users,
  Currencies
}) {
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  var data = await Currencies.getData(event.senderID);
  var money = data.money
  if (money = 1000, money > 1000) api.sendMessage("Hông có tiền thì đừng mơ mà ghép 😏")
  else {
    var tle = Math.floor(Math.random() * 101);
    var userData = await Users.getData(event.senderID);
    var name = userData.name;
    let threadInfo = await api.getThreadInfo(event.threadID);
    var all = threadInfo.participantIDs;
    var id = all[Math.floor(Math.random() * all.length)];
    var userDataRandom = await Users.getData(id);
    var namee = userDataRandom.name;
    var arraytag = [];
    arraytag.push({
      id: event.senderID,
      tag: name
    });
    arraytag.push({
      id: id,
      tag: namee
    })

    let Avatar = (await axios.get(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, {
      responseType: "arraybuffer"
    })).data;
    fs.writeFileSync(__dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8"));
    let Avatar2 = (await axios.get(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, {
      responseType: "arraybuffer"
    })).data;
    fs.writeFileSync(__dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8"));
    var imglove = [];
    imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
    imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
    var msg = {
      body: `🐳Ghép đôi thành công!\n💞Tỉ lệ hợp đôi: ${tle}%\n` + name + " " + "💓" + " " + namee,
      mentions: arraytag,
      attachment: imglove
    }
    return api.sendMessage(msg, event.threadID, () => {
      api.changeNickname(`${(userData.gender == 2) ? "Thằng chồng của" : (userData.gender == 1) ? "Chủ của" : "Nô lệ tình dục của"} ${namee} 💓`, event.threadID, event.senderID);
      api.changeNickname(`${(userDataRandom.gender == 2) ? "Thằng chồng của" : (userDataRandom.gender == 1) ? "Nô lệ tình dục của" : "Chủ của"} ${name} 💓`, event.threadID, id);
    }, event.messageID)
  }
}