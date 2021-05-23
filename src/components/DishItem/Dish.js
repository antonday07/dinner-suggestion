import React from 'react';
import './Dish.css';


const Dish = (props) => {

    const {dishItem, generateDish} = props;
    return (
        <div className="Dish">
            <h2>Tối nay ăn gì</h2>
            <p>{dishItem}</p>
            <button onClick={() => generateDish()} > Ăn gì nào</button>
        </div>
    )
}


export default Dish;