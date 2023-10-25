import { productsMock } from "../mock/produtos";
import { categoriesMock } from "../mock/categorias";

/** PRODUCTS */
function findProductByCategorySlug(categorySlug){
  const category = findCategoryBySlug(categorySlug);
  const products = productsMock
    .filter((p) => p.category === category.id)
    .map((p) => ({...p, category}));

  return products;
}

function findById (productId) {
  const product = productsMock.find(p => p.id === productId);

  if (!product) {
    return Promise.reject('Não encontrado!')
  };
  return Promise.resolve(product);
};

/** CATEGORIES */

function findCategoryBySlug(categorySlug) {
  const { id, name, slug } = categoriesMock.find((c) => c.slug === categorySlug);
  const category = { id, name, slug };
  return category;
}

function findCategories() {
  return Promise.resolve(categoriesMock);
}

const api = {
  'products': { findById, findProductByCategorySlug },
  'categories': { findCategories }
}

export default api;
