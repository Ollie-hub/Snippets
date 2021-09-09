import { useState, useEffect, useContext } from 'react';
import { myFetch } from '../../../helpers/helpers'
import { AuthContext } from '../login/AuthProvider'

const Cart = () => {
    const { loginData } = useContext(AuthContext)
    const [items, setItems] = useState([]);
    const [products, setProducts] = useState('');

    const toCart = async () => {

        let formData = new FormData();
        formData.append('quantity', items.quantity)
        formData.append('product_id', items.product_id)
        formData.append('product_name', items.name)
        formData.append('price', items.price)

        const token = loginData.access_token;

        let options = {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        try {
            const url = `https://api.mediehuset.net/snippets/cart`
            const data = await myFetch(url, options);
            console.log(data);
        }
        catch (error) {
            console.log(error)
        }
    }

    // Function that fetches the products
    const fetchProducts = async () => {
        const url = `https://api.mediehuset.net/bakeonline/products`
        let data = await myFetch(url);
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <>
            {products && products.items.map((item, key) => {
                return (
                    <div key={item.id}>
                        <hr />
                        <h4>{item.title}</h4>
                        <form>
                            <input type="hidden" name="product_id" value={item.id} />
                            <input type="hidden" name="product_name" value={item.title} />
                            <input type="hidden" name="price" value={item.price} />
                            <label htmlFor="quantity">Antal:</label>
                            <input type="number" name="quantity"
                                onChange={(e) => setItems({
                                    product_id: item.id,
                                    price: item.price,
                                    name: item.title,
                                    id: item.id,
                                    quantity: e.target.value
                                })} />
                            <button type="button" onClick={() => toCart()}>Læg i kurv</button>
                        </form>
                    </div>)
            })}
        </>
    )
}

export { Cart }