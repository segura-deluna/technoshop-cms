import { API_URI } from './const.js';

export const getGoods = async () => {
  const responce = await fetch(`${API_URI}goods/?nopage=true`);
  if (responce.ok) {
    return responce.json();
  }
  throw new Error(`Ошибка: ${responce.status}`);
};

export const getCategory = async () => {
  const responce = await fetch(`${API_URI}category`);
  if (responce.ok) {
    return responce.json();
  }
  throw new Error(`Ошибка: ${responce.status}`);
};
