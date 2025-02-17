import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function loadHours({ date, dailySchedules }) {

    hours.innerHTML = ""

    const unavailableHours = dailySchedules.map((schedule) =>
        dayjs(schedule.when).format('HH:mm')
    )

    const opening = openingHours.map((hour) => {
        // Retorna somente a hora
        const [scheduleHour] = hour.split(":");

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

        const available = !unavailableHours.includes(hour) && !isHourPast

        return {
            hour,
            available,
        };
    });

    opening.forEach(({ hour, available }) => {
        // Criar item de horário
        const li = document.createElement("li");

        li.classList.add("hour", available ? "hour-available" : "hour-unavailable");
        li.textContent = hour;

        // Adiciona o cabeçalho antes do primeiro horário do período
        if (hour === "09:00") {
            createHoursHeader("Manhã")
        } 
        else if (hour === "13:00") {
            createHoursHeader("Tarde")
        } 
        else if (hour === "18:00") {
            createHoursHeader("Noite")
        }

        // Adiciona tudo ao DOM de uma vez
        hours.append(li)
        
    });

    hoursClick()
}

// Função para criar os cabeçalhos de períodos (Manhã, Tarde, Noite)
function createHoursHeader(title) {
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;

    hours.append(header)
}
