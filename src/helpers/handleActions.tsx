import axios from "axios";

export const handleAction = async(username: string, action: string) => {
    try {
        const response = await axios.post('http://localhost:8000/api/record', {
            username: username,
            action: action
        });

        console.log('Se agregó a la bitácora', response.data);

    } catch (err) {
        console.warn('Error al agregar a la bitácora');
    }
}
