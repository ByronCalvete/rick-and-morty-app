export const getItems = async (url) => {
    try {
        const response = await fetch(url);

        const { results } = await response.json();
        
        return results;
    }
    catch (err) {
        return err;
    }
}