module.exports = {
  remainingDay(job) {
    //Ajustes de dias
    //calculo de tempo restante
    //Dividindo o total de horas com a hora por dia
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();
    //console.log(remainingDays)
    const createDate = new Date(job.created_at);
    const dueDay = createDate.getDate() + Number(remainingDays);
    //Tranformar o dia em mili secundos
    const dueDateInMs = createDate.setDate(dueDay);

    const timeDiffInMs = dueDateInMs - Date.now();

    //transfomrar mili secundos em dias
    const dayInMs = 1000 * 60 * 60 * 24;
    //Arredondar para baixo todos os dias com virgulas
    const dayDiff = Math.ceil(timeDiffInMs / dayInMs);

    //restam x dias
    return dayDiff;
  },
  calculebudget: (job, valueHour) => valueHour * job["total-hours"],
};
