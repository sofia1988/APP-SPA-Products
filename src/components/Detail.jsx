import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsId } from '../services/productService'

export default function Detail() {

    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getProductsId(id).then(data => {
            setProduct(data)
        }).catch
    }, [id])

    return (
        <div className='container'>
            <div className="card m-3 p-3">
                <div className="row g-5">
                    <div className="col-md-4">
                        <img src={product.image} className="img-fluid img-card rounded" alt="img"></img>
                    </div>

                    <div className="col-md-6">
                        <div className="card-body pt-3">
                            <h5 className="card-title pt-3">{product.title}</h5>
                            <p className="card-text pt-3">{product.description}</p>
                            <p className="card-text pt-3"><mark>{product.price}</mark></p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    )
}
