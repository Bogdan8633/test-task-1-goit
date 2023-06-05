import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://647b45d4d2e5b6101db1114d.mockapi.io/users',
  params: {
    per_page: 10,
  },
});

export const getUsers = async (page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      page,
    },
  });
  return data;
};
