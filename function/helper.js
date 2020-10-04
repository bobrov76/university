isEvens = () => {
  var year = new Date().getFullYear();
  var month = new Date().getMonth();
  var today = new Date(year, month, 0).getTime();
  var now = new Date().getTime();
  var week = Math.round((now - today) / (1000 * 60 * 60 * 24 * 7));

  return week % 2 ? 1 : 0;
};

getToday = () => {
  let date = new Date();
  let dayWeek = [7, 1, 2, 3, 4, 5, 6][date.getDay()];
  switch (dayWeek) {
    case 1:
      dayWeek = "Пн";
      break;
    case 2:
      dayWeek = "Вт";
      break;
    case 3:
      dayWeek = "Ср";
      break;
    case 4:
      dayWeek = "Чт";
      break;
    case 5:
      dayWeek = "Пт";
      break;
    default:
      dayWeek = null;
      break;
  }

  return dayWeek;
};

// формирует шаблон сообщения
messageConstructor = (datas) => {
  let i = 0;
  let id = 0;
  let message = "";
  let isEven = true;

  datas.forEach((data) => {
    // четная ли неделя

    if (isEven != data.isEven) {
      if (data.isEven) message += "Четная неделя \n";
      else message += "Не четная неделя \n";
    }

    isEven = data.isEven;

    // День недели
    if (id !== data.id) {
      id = data.id;
      i += 1;
    }

    if (i <= 1) {
      message += `${data.weekDay} \n`;
    }
    message += "&#9989;Пара " + i + "\n";
    message += "Предмет : " + data.subject + "\n";
    message += "Время: " + data.timeStart + " : " + data.timeEnd + "\n";
    message += "Преподаватель: " + data.teacher + "\n\n";

    if (i == 2) i = 0;
  });

  return message;
};

module.exports = {
  getToday: getToday,
  messageConstructor: messageConstructor,
  isEvens: isEvens,
};
