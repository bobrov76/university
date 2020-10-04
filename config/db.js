module.exports = {
  port: "3306",
  USER: "university_ozi",
  PASSWORD: "Qwerty123",
  HOST:'db4free.net',
  DB: "university_app",
  dialect: "mysql",
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
