import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCatalog} from "../../redux/actions";

const Home = () => {
    const  dispatch = useDispatch()
    const catalog = useSelector(store => store.catalog)
    useEffect((el) => {
        dispatch(getCatalog(el))
    },[dispatch])
    return (
        <div className="row">
            {
                catalog.map(el =>
                <div className="col-md-3 mb-4" key={el.id}>
                    <img className="img-product" src={el.images} alt=""/>
                    <h4>{el.title}</h4>
                    <p>{el.desc}</p>
                    <p>{el.price}$</p>
                    <button className="btn btn-danger" onClick={() => dispatch({type:"ADD_TO_CART", payload:el})}>В корзину</button>
                </div>
                )
            }
        </div>
    );
};

export default Home;