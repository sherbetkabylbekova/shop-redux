import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart, removeQuantity} from "../../redux/actions";

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(store => store.cart)
    return (
        <div className="container">
            {
                cart.length ? <table className="table table-danger">
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Общая цена</th>
                        <th>Удалить</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cart.map(el =>
                            <tr>
                                <td>{el.title}</td>
                                <td>{el.price}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => dispatch(removeQuantity(el))}>-</button>
                                    {el.quantity}
                                    <button className="btn btn-info" onClick={() => dispatch(addToCart(el))}>+</button>
                                </td>
                                <td>{(el.quantity * el.price).toFixed(2)}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(el))}>Удалить</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                  <div>
                      <h4>Всего товаров:{cart.reduce((acc,el) =>{
                          return el.quantity + acc
                      },0)}шт</h4>
                      <h4>Общая сумма:{cart.reduce((acc, el)=>{
                          return(el.price * el.quantity) + acc
                      },0).toFixed(2)}$</h4>
                  </div>

                </table> : 'Корзина пуста'
            }

        </div>
    );
};

export default Cart;