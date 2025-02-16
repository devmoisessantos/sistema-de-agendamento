import { apiConfig } from './api-config.js'

export async function scheduleNew({ id, name, when }) {
    try {
        // Verificação dos dados antes de enviar
        if (!id || !name || !when) {
            console.error('Dados inválidos:', { id, name, when });
            window.alert('Dados inválidos. Verifique os campos e tente novamente.');
            return;
        }

        console.log('Enviando dados:', { id, name, when });

        const response = await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, name, when })
        })

        const result = await response.json();
        console.log('Resposta do servidor:', result);

        window.alert('Agendamento criado com sucesso!')
        
    } catch (error) {
        console.log(error)
        window.alert('Ocorreu um erro ao criar o agendamento. Tente novamente!')
    }
}