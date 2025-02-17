import { apiConfig } from "./api-config.js"

export async function RemoveSchedule({ id }) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`, { 
            method: 'DELETE',
        })

        if (!response.ok) {
            throw new Error('Falha ao excluir o agendamento');
        }

        alert('Agendamento cancelado com sucesso!');
    } catch (error) {
        console.log(error);
        alert('Não foi possível cancelar o agendamento.');
    }
}
