//file para obtener los facts separando la lógica
//reutilizable para react, vue, angular, etc.

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
    //❌ useState is not available here
    try {
        const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
        const data = await res.json();
        const { fact } = data;
        return fact;
    } catch (error) {
        return error;
    }
};