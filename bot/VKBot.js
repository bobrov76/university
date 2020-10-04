const VkBot = require("node-vk-bot-api");
const botConfig = require("../config/bot");
const Markup = require("node-vk-bot-api/lib/markup");
const timetableClass = require("../function/timetable");

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
        Markup.button("Пт", "primary"),
      ],
      [
        Markup.button("На неделю", "positive"),
        Markup.button("Все", "negative"),
      ],
    ])
  );
});

bot.command("Пн", (ctx) => {
  console.log('timetableClass.getDay(0, "Пн")');
  let k = timetableClass.getDay(1, "Пн");
  let date = new Date();
  let dayWeek = [7, 1, 2, 3, 4, 5, 6][date.getDay()];
  console.log( dayWeek);
  k.then(kk=> {
    ctx.reply(kk);
  });
  
  
});


bot.command("На сегодня", (ctx) => {
  ctx.reply(timetableClass.getDay(0, "Пн"));
});

bot.startPolling();
