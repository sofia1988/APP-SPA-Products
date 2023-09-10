export const getProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error;
  }
};

export const getProductsId = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error;
  }
};
