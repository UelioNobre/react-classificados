import { productsMock } from "../mock/produtos";

export function findById (productId) {
  const product = productsMock.find(p => p.id === productId);

  if (!product) {
    return Promise.reject('Não encontrado!')
  };
  return Promise.resolve(product);
};