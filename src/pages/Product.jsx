import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Product() {
    const [product, setProduct] = useState(null)
    const { id } = useParams()


    useEffect(() => {
        fetch('https://dummyjson.com/products/' + id)
            .then(res => res.json())
            .then((result) => {
                setProduct(result)
            });
    }, [])

    return (
        product ? (
            <div>
                <h1>{product.title}</h1>
                <img src={product.images[0]} alt="" />
            </div>
        ) : "tidak ada data"
    )
}