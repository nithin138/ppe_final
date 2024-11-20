import React from 'react';
import '../Styles/FavouriteProducts.css';
import group from '../Assets/group.png';
import layout from '../Assets/layout.png';
import { BiSolidHeartCircle } from "react-icons/bi";



const products = [
    {
        id: 1,
        name: 'Prakash Offset Printing Machine, For Industrial',
        price: '₹9,75,000',
        url: group
    },

    {
        id: 2,
        name: 'Automatic Two Colors Offset Printing Machine, For Industrial',
        price: '₹9,75,000',
        url: layout
    },

    {
        id: 3,
        name: 'Automatic Two Colors Offset Printing Machine, For Industrial',
        price: '₹9,75,000',
        url: layout
    },
    {

        id: 4,
        name: 'Prakash Offset Printing Machine, For Industrial',
        price: '₹9,75,000',
        url: group
    },
    {
        id: 5,
        name: 'Automatic Two Colors Offset Printing Machine, For Industrial',
        price: '₹9,75,000',
        url: layout
    },

    {
        id: 6,
        name: 'Automatic Two Colors Offset Printing Machine, For Industrial',
        price: '₹9,75,000',
        url: layout
    },
    {

        id: 7,
        name: 'Prakash Offset Printing Machine, For Industrial',
        price: '₹9,75,000',
        url: group
    },
    {
        id: 8,
        name: 'Automatic Two Colors Offset Printing Machine, For Industrial',
        price: '₹9,75,000',
        url: layout
    },

    {
        id: 9,
        name: 'Automatic Two Colors Offset Printing Machine, For Industrial',
        price: '₹9,75,000',
        url: layout
    },


    // Add more products as needed
]; 

const FavoriteProducts = () => {
    return (

        <div className="favourite-container" style={{flexDirection:"column",width:"100%"}}>
            <div className="favorite-title">
                <p className='favtitle'>Favourite Products</p></div>
            <div className='products-coatainer'>
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.url} alt={product.name} />
                        <div className="product-info">
                            <p className="product-name">{product.name}</p>
                            <p className="product-price">{product.price}</p>
                        </div>
                        <div className="favorite-icon"><BiSolidHeartCircle />
                        </div> 
                    </div>
                ))}
            </div>
        </div>
    );
}
export default FavoriteProducts;
