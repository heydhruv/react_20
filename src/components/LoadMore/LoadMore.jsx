import { useEffect, useState } from "react";
import './style.css'
export default function LoadMore() {
    const [loadding, setLoading] = useState(false)
    const [products, setProducts] = useState([]);
    const [clickCount, setClickCount] = useState(0)

    useEffect(() => {
        fetchProducts()
    },[clickCount])

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${clickCount === 0 ? 0 : clickCount * 20}`)
            const result = await response.json()
            if (result && result.products && result.products.length) {
                setProducts((prevProducts) => [...prevProducts, ...result.products])
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    if (loadding) {
        return  <div>loading...</div>
    }

    return (
        <div className="load-more-container">
            <div className="product-container">
                {
                    products && products.length ?
                    products.map((item) => (
                        <div
                            className="product"
                            key={item.id}
                        >
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                            />
                            <p>{item.title}</p>
                        </div>
                    ))
                    :null
                }
            </div>
            <div className="button-container">
                <button
                    onClick={() => setClickCount(clickCount+1)}
                >
                    load more
                </button>
            </div>
        </div>
    )
}