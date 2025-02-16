import { loadHours } from '../form/hours-load.js'

// selecionando o input de data
const selectedDate = document.getElementById('date')

export function loadSchedule() {
    // pegando o input de data
    const date = selectedDate.value

    // carregando as horas
    loadHours({ date })
}
