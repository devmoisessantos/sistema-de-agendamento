import dayjs from "dayjs"
import { scheduleNew } from "../../services/new-schedule.js"
import { loadSchedule } from "../schedule/load.js"

const form = document.querySelector('form')
const clientName = document.getElementById('client')
const selectedDate = document.getElementById('date')

const currentDate = dayjs(new Date()).format('YYYY-MM-DD')
// carregando a data atual
selectedDate.value = currentDate
selectedDate.min = currentDate


form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        const name = clientName.value.trim()

        if (!name) {
            return alert('O nome do cliente precisa ser informado.')
        }

        const hourSelected = document.querySelector('.hour-selected')

        if (!hourSelected) {
            return alert('O horário precisa ser selecionado.')
        }

        const [hour] = hourSelected.innerText.split(':')
        const when = dayjs(selectedDate.value).add(hour, 'hour')
        const id = new Date().getTime()

        await scheduleNew({ id, name, when })
        await loadSchedule()

        clientName.value = ""

    } catch (error) {
        alert('Ocorreu um erro ao criar o agendamento', error)
        console.log(error)
    }
}