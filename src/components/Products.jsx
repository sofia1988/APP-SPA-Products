import Product from './Product'

export default function Products({ products, addFavorite, deleteFavorite }) {


    return (
        <div className='container'>
            {
                products.length > 0 ? products.map(product => <Product product={product} key={product.id} addFavorite={addFavorite} deleteFavorite={deleteFavorite} />)
                    : <div className='d-flex justify-content-center align-items-center mt-5 text-uppercase fs-2 text'><p>No hay Productos en la lista</p></div>

            }
        </div>

    )
}
