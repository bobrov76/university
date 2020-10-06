const validator = require("../function/validator");

 validationTimetable = (req) => {
   let error=[];

   if(!validator.isEmpty(req.isEven)) error.push('Четность недели не указана');
   if(!validator.isEmpty(req.weekDay)) error.push('День недели не указан');
   if(!validator.isEmpty(req.timeStart)) error.push('Время начала пары не указано');
   if(!validator.isEmpty(req.timeEnd)) error.push('Время окончания пары не указано');
   if(!validator.isEmpty(req.subject)) error.push('Название предмета не ууказано');
   if(!validator.minLength(req.subject,2)) error.push('Длинна названия предмета должна быть минимум 2 буквы');
   if(!validator.maxLength(req.subject,50)) error.push('Длинна названия предмета должна быть максимум 50 букв');
   if(!validator.isEmpty(req.teacher)) error.push('Преподаватль не указан');
   if(!validator.minLength(req.teacher,2)) error.push('Длинна имени преподавателя должна быть минимум 2 буквы');
   if(!validator.maxLength(req.teacher,50)) error.push('Длинна имени преподавателя должна быть максимум 50 букв');

   return error;
}



module.exports = {
  validationTimetable: validationTimetable,
};
