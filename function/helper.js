isEvens = () => {
  let now = new Date();
  let onejan = new Date(now.getFullYear(), 0, 1);
  let week = Math.ceil( (((now - onejan) / 86400000) + onejan.getDay() + 1) / 7 );
  return week-1 % 2 == 0 ? 1 : 0;
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
messageConstructorDay = (datas) => {

  let message = "";

  datas.forEach((data, i) => {

    if(i==0) message += `${data.weekDay} \n`;
    message += "&#9989;Пара " + Number(i+1) + "\n";
    message += "Предмет : " + data.subject + " ( " + data.cabinet+ " каб.) \n";
    message += "Время: " + data.timeStart + " : " + data.timeEnd + "\n";
    message += "Преподаватель: " + data.teacher + "\n\n";
  });
  return message;
};

messageConstructorWeek = (datas,even) => {

  let message = "";
  let number = 0;

  datas.forEach((data, i) => {
    number+=1;



    if(even && i==2){
      message += `Вт \n`;
      message += `&#9989; Сегодня выходной &#128524; \n\n`;
    }
    if(!even && i==0){
      message += `Пн \n`;
      message += `&#9989; Сегодня выходной &#128524; \n\n`;
    }
    if(i%2==0) message += `${data.weekDay} \n`;
    message += "&#9989;Пара " + Number(number) + "\n";
    message += "Предмет : " + data.subject + " ( " + data.cabinet+ " каб.) \n";
    message += "Время: " + data.timeStart + " : " + data.timeEnd + "\n";
    message += "Преподаватель: " + data.teacher + "\n\n";
    if(number==2) number=0;
  });
  return message;
};

messageConstructorAll = (datas) => {

  let message = "";
  let number = 0;

  datas.forEach((data, i) => {

    if(i==0) message += `\n 1&#8419; Четная неделя \n\n\n`;
    if(i==2){
      message += `Вт \n`;
      message += `&#9989; Сегодня выходной &#128524; \n\n`;
    }
    if(i==8) message += `\n 2&#8419; Нечетная неделя \n\n\n`;
    if(i==8){
      message += `Пн \n`;
      message += `&#9989; Сегодня выходной &#128524; \n\n`;
    }

    number+=1;
    if(i%2==0) message += `${data.weekDay} \n`;

    message += "&#9989;Пара " + Number(number) + "\n";
    message += "Предмет : " + data.subject + " ( " + data.cabinet+ " каб.) \n";
    message += "Время: " + data.timeStart + " : " + data.timeEnd + "\n";
    message += "Преподаватель: " + data.teacher + "\n\n";
    if(number==2) number=0;
  });
  return message;
};

module.exports = {
  getToday: getToday,
  messageConstructorDay: messageConstructorDay,
  messageConstructorAll:messageConstructorAll,
  messageConstructorWeek:messageConstructorWeek,
  isEvens: isEvens,
};
