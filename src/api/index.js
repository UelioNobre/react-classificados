import { productsMock } from "../mock/produtos";

export const findById = (productId) => {
  const product = productsMock.find(p => p.id === productId);

  if (!product) {
    return Promise.reject('Não encontrado!')
  };
  return Promise.resolve(product);
};

const api = {
  'products': { findById },
}

export default api;
