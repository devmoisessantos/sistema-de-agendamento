import { apiConfig } from './api-config.js'

export async function scheduleNew({ id, name, when }) {
    try {
        // Verificação dos dados antes de enviar
        if (!id || !name || !when) {
            console.error('Dados inválidos:', { id, name, when });
            alert('Dados inválidos. Verifique os campos e tente novamente.');
            return;
        }

        // Converter id para string antes de enviar
        const idString = String(id);

        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: idString, name, when })
        })

        alert('Agendamento criado com sucesso!')

    } catch (error) {
        console.log(error)
        alert('Ocorreu um erro ao criar o agendamento. Tente novamente!')
    }
}