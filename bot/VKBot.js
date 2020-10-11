const VkBot = require("node-vk-bot-api");
const botConfig = require("../config/bot");
const Markup = require("node-vk-bot-api/lib/markup");
const timetableClass = require("../function/timetable");
const helper = require("../function/helper");

const bot = new VkBot(botConfig.token);

// bot.on((ctx) => {
//   console.log(ctx.message);
//   if (ctx.message.body === "s") {
//     ctx.reply("Как ты детка )");
//   }
// });

bot.command("Начать", (ctx) => {
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
      ],
      [
        Markup.button("На неделю", "positive"),
        Markup.button("Все", "negative"),
      ],
    ])
  );
});

bot.command("Пн", (ctx) => {
  getBotData("Пн", ctx);
});

bot.command("Вт", (ctx) => {
  getBotData("Вт", ctx);
});

bot.command("Ср", (ctx) => {
  getBotData("Ср", ctx);
});

bot.command("Чт", (ctx) => {
  getBotData("Чт", ctx);
});

bot.command("Пт", (ctx) => {
  getBotData("Пт", ctx);
});

bot.command("На сегодня", (ctx) => {
  getBotData(null, ctx);
});

bot.command("На неделю", (ctx) => {
  getBotWeek(ctx);
});

bot.command("Все", (ctx) => {
  getBotAll(ctx);
});

getBotWeek = (ctx) => {
  let data = timetableClass.getWeek(!helper.isEvens(), 1); // 1 - День недели, 2 - isBot bool
  data.then((item) => {
    ctx.reply(item);
  });
};

getBotAll = (ctx) => {
  let data = timetableClass.getAll(1); // isBot bool
  data.then((item) => {
    ctx.reply(item);
  });
};

getBotData = (day, ctx) => {
  if (!day) day = helper.getToday();

  // нужна проверка на пустоту даты
  if (day) {
    let data = timetableClass.getDay(!helper.isEvens(), day, 1); // параметры 1 - четная ли неделя bool, 2 - День недели, 3 - isBot bool

    data.then((item) => {
      ctx.reply(item);
    });
  } else {
    ctx.reply("Сегодня выходной &#128578;");
  }
};

bot.startPolling();
