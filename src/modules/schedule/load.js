import { findSchedule } from '../../services/find-schedule.js'
import { showSchedule } from '../schedule/show.js'
import { loadHours } from '../form/hours-load.js'

// selecionando o input de data
const selectedDate = document.getElementById('date')

export async function loadSchedule() {
    // pegando o input de data
    const date = selectedDate.value

    const dailySchedules = await findSchedule({ date })

    showSchedule({ dailySchedules })

    // carregando as horas
    loadHours({ date, dailySchedules })
}
