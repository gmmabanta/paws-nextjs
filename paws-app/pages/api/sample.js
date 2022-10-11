import api from "../_api";

export async function getAnimalDetails(headers) {
  const { data, status } = await api({
    method: 'GET',
    url: '/animal/123',
    headers: headers,
  });

  return [data, status];
}