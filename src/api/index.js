import { productsMock } from "../mock/produtos";
import { categoriasMock } from "../mock/categorias";

export const findById = (productId) => {
  const product = productsMock.find(p => p.id === productId);

  if (!product) {
    return Promise.reject('Não encontrado!')
  };
  return Promise.resolve(product);
};

function findCategories() {
  return Promise.resolve(categoriasMock);
}

const api = {
  'products': { findById },
  'categories': { findCategories }
}

export default api;
