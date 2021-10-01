const Job = require("../model/Job");
const JobUtils = require("../utils/JobUtils");
const Profile = require("../model/Profile");
module.exports = {
  async index(req, res) {
    //ou pode ser assim
    const jobs = await Job.get();
    const profile = await Profile.get();

    let statusCount = {
      progress: 0,
      done: 0,
      total: jobs.length,
    };
    //TOTAL de horas por dia de cada Job em progress
    let jobTotalHours = 0;

    const updateJobs = jobs.map((job) => {
      const remaining = JobUtils.remainingDay(job);
      //console.log(remaining)
      const status = remaining <= 0 ? "done" : "progress";
      //Se status for === a done então statusCount[progress] +=1
      //status = done
      //statusCount[done] += 1
      //Somando a quantidade de status
      statusCount[status] += 1;

      //Verificando se o status é igual a progress para contar apenas o total de Horas do job em Progress
      jobTotalHours =
        status === "progress"
          ? jobTotalHours + Number(job["daily-hours"])
          : jobTotalHours;
      /*if (status === "progress") {
        //TOTAL de horas por dia de cada Job em progress
        jobTotalHours += Number(job["daily-hours"]);
      }*/

      return {
        ...job,
        remaining,
        status,
        budget: JobUtils.calculebudget(job, profile["value-hour"]),
      };
    });

    // qtd de horas que quero trabalhar (PROFILE)
    //MENOS quantidade de horas / dia de cada job em progress
    const freeHours = profile["hours-per-day"] - jobTotalHours;

    return res.render("index", {
      jobs: updateJobs,
      profile: profile,
      statusCount: statusCount,
      freeHours: freeHours,
    });
  },
};
