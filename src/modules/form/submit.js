import dayjs from "dayjs"

const form = document.querySelector('form')
const selectedDate = document.getElementById('date')

const currentDate = dayjs(new Date()).format('YYYY-MM-DD')
// carregando a data atual
selectedDate.value = currentDate
selectedDate.min = currentDate


form.onsubmit = (event) => {
    event.preventDefault()
}