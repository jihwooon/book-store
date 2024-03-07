import { httpClient } from "./http";

interface AddCartParams {
	book_id: number;
	quantity: number;
}

const addCart = async (params: AddCartParams) => {
	const response = await httpClient.post('/cart', params)

	return response.data
};

export default addCart;
