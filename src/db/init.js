//Configuração inicias do banco de dados só é necessário rodar uma único vezes

//Criar a tabela do Banco só é necessário criar uma unica vez

const Database = require("./config");

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`
        CREATE TABLE profile(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        avatar TEXT,
        monthly_budget INT,
        hours_per_day INT,
        days_per_week INT,
        vacation_per_year INT,
        value_hour INT
    )
    `);

    await db.exec(`CREATE TABLE jobs(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR,
        daily_hours INT,
        total_hours INT,
        created_at DATATIME
    )`);

    await db.run(`INSERT INTO profile(
        name,
        avatar,
        monthly_budget,
        hours_per_day,
        days_per_week,
        vacation_per_year,
        value_hour
        )VALUES(
        "Amilton Xavier",
        "https://avatars.githubusercontent.com/u/70951606?v=4",
        6000,
        5,
        5,
        4,
        356
    )`);

    await db.run(`INSERT INTO jobs(
        name,
        daily_hours,
        total_hours,
        created_at
        )VALUES(
        "BISKATO",
        2,
        1,
        1617514376018
    )`);

    await db.run(`INSERT INTO jobs(
        name,
        daily_hours,
        total_hours,
        created_at
        )VALUES(
        "StoreBook",
        4,
        20,
        1617514376018
    )`);
    await db.close();
  },
};

initDb.init();
