import axios from 'axios';

export const getAllItemsService = async (length) => {
    const options = {
        url: `http://cozshopping.codestates-seb.link/api/v1/products?count=${length}`
    };
    const response = await axios(options);
    return response.data;
}