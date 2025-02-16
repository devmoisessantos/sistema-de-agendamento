import dayjs from "dayjs"
import { scheduleNew } from "../../services/new-schedule.js"

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
        const name = clientName.value

        if (!name) {
            return alert('O nome do cliente precisa ser informado')
        }

        const hourSelected = document.querySelector('.hour-selected')

        if (!hourSelected) {
            return alert('O horário precisa ser selecionado')
        }

        const [hour] = hourSelected.textContent.split(':')
        const when = dayjs(selectedDate.value).add(hour, 'hour')
        const id = new Date().getTime()

        console.log('Dados antes de enviar:', { id, name, when })

        await scheduleNew({ id, name, when })

    } catch (error) {
        alert('Ocorreu um erro ao criar o agendamento', error)
        console.log(error)
    }
}