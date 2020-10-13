const VkBot = require("node-vk-bot-api");
const botConfig = require("../config/bot");
const Markup = require("node-vk-bot-api/lib/markup");
const timetableClass = require("../function/timetable");
const helper = require("../function/helper");
const userNotifications = require("../function/userNotifications");
const cron = require('node-cron');

const bot = new VkBot(botConfig.token);



// отправка по времени
cron.schedule('* * * * *', async () => { //1 раз в минуту
  const newDate = new Date();
  const newYear = newDate.getFullYear();
  const newMonth = newDate.getMonth();
  const newDay = newDate.getDay();
  const newHour = newDate.getHours();
  const newMinute = newDate.getMinutes();
  let oldDate = new Date(newYear, newMonth, newDay, 15, 0, 0, 0);
  var oldDay = oldDate.getDay();
  var oldHours = oldDate.getHours();
  var oldMinutes = oldDate.getMinutes();
  if(newDay.toString()+newHour.toString()+newMinute.toString() == newDay.toString()+oldHours.toString()+oldMinutes.toString()) {
    let getNotification = userNotifications.getNotification();
    getNotification.then(item=>{
      getDataShedull(item);
    })
  }

});





bot.on((ctx) => {
  console.log(ctx.message);

  if (ctx.message.text == "Начать" && ctx.message.text == "начать") {
    ctx.reply(
        "Выбери промежуток для расписания",
        null,
        Markup.keyboard([
          [Markup.button("На сегодня", "primary")],
          [
            Markup.button("Пн", "primary"),
            Markup.button("Вт", "primary"),
            Markup.button("Ср", "primary"),
            Markup.button("Чт", "primary"),
            Markup.button("Пт", "primary"),
          ],
          [
            Markup.button("На неделю", "positive"),
            Markup.button("Все", "negative"),
          ],
        ])
    );
  }else botComand(ctx);
});

function botComand(ctx) {

  console.log(ctx.message.from_id)
  switch (ctx.message.text) {
    case 'Пн':
      getBotData("Пн", ctx);
      break;
    case 'Вт':
      getBotData("Вт", ctx);
      break;
    case 'Ср':
      getBotData("Ср", ctx);
      break;
    case 'Чт':
      getBotData("Чт", ctx);
      break;
    case 'Пт':
      getBotData("Пт", ctx);
      break;
    case 'Сб':
      ctx.reply('Выходной )');
      break;
    case 'Вс':
      ctx.reply('Выходной )');
      break;
    case 'На сегодня':
      getBotData(null, ctx);
      break;
    case 'На неделю':
      getBotWeek(ctx);
      break;
    case 'Все':
      getBotAll(ctx);
      break;
    case 'Включить уведомления':
      addNotifications(ctx);
      break;
    case 'Выключить уведомления':
      deleteNotifications(ctx);
      break;
    case 'Познакомимся':
      getComand(ctx);
      break;
    case 'познакомимся':
      getComand(ctx);
      break;
    default:
      ctx.reply('Извините я не могу ответить на этот вопрос &#128545;');
  }
}


addNotifications = (ctx) => {
  const status = userNotifications.createNotification(ctx.message.from_id);
  status.then(data=> {
    (data) ? ctx.reply("Уведомления успешно подключены"): ctx.reply("Возникла ошибка попробуйте позже");
  })
};

deleteNotifications =(ctx) => {
  const status = userNotifications.deleteNotification(ctx.message.from_id);
  status.then(data=> {
    (data) ? ctx.reply("Уведомления успешно отключены"): ctx.reply("Возникла ошибка попробуйте позже");
  })
};

getBotWeek = (ctx) => {
  let data = timetableClass.getWeek(!helper.isEvens()); // 1 - День недели, 2 - isBot bool
  data.then((item) => {
    ctx.reply(item);
  });
};

getBotAll = (ctx) => {
  let data = timetableClass.getAllBot(); // isBot bool
  data.then((item) => {
    ctx.reply(item);
  });
};

getBotData = (day, ctx) => {
  if (!day) day = helper.getToday();

  // нужна проверка на пустоту даты
  if (day) {
    let data = timetableClass.getDay(!helper.isEvens(), day); // параметры 1 - четная ли неделя bool, 2 - День недели, 3 - isBot bool

    data.then((item) => {
      ctx.reply(item);
    });
  } else {
    ctx.reply("Сегодня выходной &#128578;");
  }
};

getDataShedull = (userId) => {
  let day = helper.getToday();

  // нужна проверка на пустоту даты
  if (day) {
    let data = timetableClass.getDay(!helper.isEvens(), day); // параметры 1 - четная ли неделя bool, 2 - День недели, 3 - isBot bool

    data.then((item) => {
      bot.sendMessage(userId,item);
    });
  } else {
    bot.sendMessage(userId,"Сегодня выходной &#128578;");
  }
}

getComand = (ctx) => {
  let message = "";
  message += "Привет ) \n";
  message += "Я бот группы OZIv-1.20 \n";
  message += "Я умею отображать расписание, а также : \n";
  message += "- Отправлять уведомления \n\n\n";
  message += "  Для того, чтобы получать уведомления, напиши мне - 'Включить уведомления' \n";
  message += "  Если ты не хочешь получать уведомления, напиши мне - 'Выключить уведомления' \n";

  ctx.reply(message);

}

bot.startPolling();
