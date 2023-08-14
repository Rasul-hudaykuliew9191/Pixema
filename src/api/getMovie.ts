import { IMovie } from "../Components/Pages/MovieFull/MovieFull";
import { API_KEY, BASE_URL } from "./url";

export const getMovieId = async (id: string): Promise<IMovie | null> => {
    const URL = `${BASE_URL}?i=${id}&${API_KEY}`
    const response = await fetch(URL)
    const data = await response.json()
    return data;
};



