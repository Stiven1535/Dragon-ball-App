import axios from 'axios';

const BASE_URL = 'https://dragonball-api.com/api';

export const getCharacters = async () => {
  let allCharacters = [];
  let currentPage = 1;
  let moreCharacters = true;

  while (moreCharacters) {
    try {
      const response = await axios.get(`${BASE_URL}/characters?page=${currentPage}`);
      const characters = response.data.items;
      
      if (characters.length === 0) {
        moreCharacters = false;
      } else {
        allCharacters = [...allCharacters, ...characters];
        currentPage++; // Avanza a la siguiente página
      }
    } catch (error) {
      console.error('Error fetching characters:', error);
      break;
    }
  }
  
  return allCharacters;
};

export const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/characters/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character:', error);
    return null;
  }
};
