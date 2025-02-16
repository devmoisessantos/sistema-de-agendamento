import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

const hours = document.getElementById("hours");

export function loadHours({ date }) {
    const opening = openingHours.map((hour) => {
        // Retorna somente a hora
        const [scheduleHour] = hour.split(":");

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

        return {
            hour,
            available: isHourPast,
        };
    });

    // Armazena quais períodos já foram inseridos para evitar repetições
    const addedHeaders = new Set();
    
    // Fragmento para evitar múltiplos reflows no DOM
    const fragment = document.createDocumentFragment();

    opening.forEach(({ hour, available }) => {
        // Adiciona o cabeçalho antes do primeiro horário do período
        if (hour === "09:00" && !addedHeaders.has("Manhã")) {
            fragment.appendChild(createHoursHeader("Manhã"));
            addedHeaders.add("Manhã");
        } 
        else if (hour === "13:00" && !addedHeaders.has("Tarde")) {
            fragment.appendChild(createHoursHeader("Tarde"));
            addedHeaders.add("Tarde");
        } 
        else if (hour === "18:00" && !addedHeaders.has("Noite")) {
            fragment.appendChild(createHoursHeader("Noite"));
            addedHeaders.add("Noite");
        }

        // Criar item de horário
        const li = document.createElement("li");
        li.classList.add("hour", available ? "hour-available" : "hour-unavailable");
        li.textContent = hour;
        
        fragment.appendChild(li);
    });

    // Adiciona tudo ao DOM de uma vez
    hours.appendChild(fragment);
}

// Função para criar os cabeçalhos de períodos (Manhã, Tarde, Noite)
function createHoursHeader(title) {
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;
    return header;
}
