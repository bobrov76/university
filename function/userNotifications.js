const db = require("../models");
const userNotifications = db.userNotifications;


createNotification = async (userId) => {
  let user = await userNotifications.findOne({ where: { userId: userId}});

  return (user) ? user : await userNotifications.create({ userId:userId });
};

deleteNotification = async (userId) => {
    return await userNotifications.destroy({ where: { userId: userId }});
};

getNotification = async () => {
    let arr = [];
    let data = await userNotifications.findAll();
    data.forEach((item) => {
        arr.push(Number(item.userId))
    });
    return arr;
};

module.exports = {
  createNotification: createNotification,
  deleteNotification: deleteNotification,
    getNotification:getNotification
};