import axios from "axios";

export const fetchData = async (data = []): Promise<{ data: [] }> => {
  const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "movies");

  const result = response.data.data;

  return result;
};
