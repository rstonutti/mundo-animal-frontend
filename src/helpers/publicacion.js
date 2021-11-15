import { fetchSinToken } from "./fetch";


export const getPublicaciones = async (endpoint) => {
    const resp = await fetchSinToken(endpoint);
    const body = await resp.json();

    return body;

};