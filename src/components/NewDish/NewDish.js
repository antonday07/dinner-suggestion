import React from 'react'
import './NewDish.css';

const NewDish = (props) => {

    const {handleDish} = props;
    return (
        <div className="NewDish">
            <input 
                placeholder="Món ăn yêu thích..." 
                type="text" 
                onKeyPress={(e) => e.key === 'Enter' && handleDish(e)} />
        </div>
    )
}

export default NewDish;