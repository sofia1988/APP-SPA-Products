import { useState } from 'react'
import NoFavImg from '../assets/nomegusta.svg'
import FavImg from '../assets/megusta.svg'
import { Link } from 'react-router-dom'

export default function Product({ product, addFavorite, deleteFavorite }) {

    const [favorite, setFavorite] = useState(false)

    const handleClick = () => {
        favorite ? (deleteFavorite(product), setFavorite(false))
            : (addFavorite(product), setFavorite(true));
    };

    return (

        <div className='row mt-5 ms-1'>

            <div className='col-12 col-md-3 mt-3 mt-sm-0'>
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} className="img rounded" alt="img" />
                </Link>
            </div>
            <div className='col-12 col-md-9'>

                <div className='row mt-4 mt-sm-0'>

                    <div className='col-10 col-md-8'>
                        <div className="card-body">
                            <h3 className="card-title">{product.title}</h3>
                            <h5 className="text-muted pt-2">{product.category}</h5>
                            <mark className="text-success bg-dark pt-2">${product.price}</mark>
                        </div>
                    </div>

                    <div className='col-2 col-md-4 d-flex flex-column align-items-center justify-content-end'>
                        {
                            favorite ?
                                <img src={FavImg} onClick={handleClick} className="img-megusta mb-sm-5 mb-4" alt="img" />
                                :
                                <img src={NoFavImg} onClick={handleClick} className="img-megusta mb-sm-5 mb-4" alt="img" />
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}
