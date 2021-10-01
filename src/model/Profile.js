const Database = require("../db/config");

module.exports = {
  async get() {
    const db = await Database();
    //O metodo Get do Sqlite só traz um único dado ou registro
    const data = await db.get(`SELECT * FROM profile`);

    await db.close();
    //Passando os dados que vem do banco de dados
    //para um novo objeto que o nome do campo do objeto esta igual ao que esta sendo usado no código
    return {
      name: data.name,
      avatar: data.avatar,
      "monthly-budget": data.monthly_budget,
      "hours-per-day": data.hours_per_day,
      "days-per-week": data.days_per_week,
      "vacation-per-year": data.vacation_per_year,
      "value-hour": data.value_hour,
    };
  },
  async update(newData) {
    const db = await Database();
    //O newData.name e newData.avatar são do tipo TEXT por está razão deve estar dentro de ""
    db.run(`UPDATE profile SET 
    name = "${newData.name}",  
    avatar= "${newData.avatar}" ,
    monthly_budget= ${newData["monthly-budget"]} ,
    hours_per_day=${newData["hours-per-day"]},
    vacation_per_year= ${newData["vacation-per-year"]},
    value_hour=${newData["value-hour"]}
    `);

    await db.close();
  },
};
