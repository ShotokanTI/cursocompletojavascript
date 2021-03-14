const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/*', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
  tarefa1.cancel()
  console.log('Tarefa cancelada')
},20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0,7)]
regra.hour = 19
regra.minute = 19
const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log('Executando tarefa 2',new Date().getSeconds())
})
