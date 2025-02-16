import { loadSchedule } from '../schedule/load.js'

const selectedDate = document.getElementById('date')

selectedDate.onchange = () => loadSchedule()
    