import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useContext } from "react";
import BudgetContext from "../contexts/BudgetContext.jsx";

export default function Products() {

    const { budgetMode } = useContext(BudgetContext);

    /* Products reactive variable */
    const [products, setProducts] = useState([]);
    const [renderProducts, setRenderProducts] = useState([]);

    const [searchValue, setSearchValue] = useState("");


    /* Fetching Data */
    const endpoint = "https://fakestoreapi.com/products";

    function fetchProducts(endpoint) {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.log("Errore: " + error))
    }

    /* Fetching on page load */
    useEffect(() => {
        fetchProducts(endpoint);
    }, []);

    /* Searching */
    useEffect(() => {

        let productsList;

        if (budgetMode) {
            productsList = products.filter(product => product.price <= 30);

        } else {
            productsList = products;
        }

        if (searchValue === "") {
            setRenderProducts(productsList);
        } else {
            const searchedProducts = productsList.filter(product => product.title.toLowerCase().startsWith(searchValue.toLowerCase()));
            setRenderProducts(searchedProducts);
        }

    }, [searchValue, products, budgetMode])

    return (
        <main>
            <section id="products">
                <div className="app-container">

                    <div className="search-bar mb-4">
                        <i className="bi bi-search"></i>
                        <input type="text" placeholder="Search for products ..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                    </div>

                    {

                        renderProducts.length === 0 ?

                            <div className="spinner-grow" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>

                            :

                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mt-4">
                                {
                                    renderProducts.map((product, i) => (
                                        <div className='col product' key={i}>

                                            <Link to={`/product/${product.id}`} >
                                                <img src={product.image} alt="" />
                                            </Link>

                                            <span>{product.category}</span>

                                            <Link to={`/product/${product.id}`} ><h4>{product.title}</h4></Link>

                                            <span>$ {product.price}</span>
                                        </div>
                                    ))
                                }
                            </div>
                    }

                </div>
            </section>
        </main >
    );
}