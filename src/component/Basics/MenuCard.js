import React, { useState } from 'react';

const MenuCard = ({menuData}) => {
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (id) => {
    setAddedItems({
      ...addedItems,
      [id]: (addedItems[id] || 0) + 1
    });
    
    // Optional: Show feedback
    setTimeout(() => {
      setAddedItems({...addedItems, [id]: 0});
    }, 1500);
  };

  const renderStars = (rating = 4.5) => {
    return (
      <div className="card-rating">
        <span className="stars">
          {'⭐'.repeat(Math.floor(rating))}
          {rating % 1 !== 0 && <span style={{fontSize: '0.7em'}}>✨</span>}
        </span>
        <span className="rating-count">({Math.floor(Math.random() * 100) + 20})</span>
      </div>
    );
  };
  
  return (
    <>
      <section className="main-card--container">
        {menuData.map((curElem) => {
          const {id, name, category, image, description, price} = curElem;
          const isAdded = addedItems[id] > 0;

          return(
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-image-wrapper">
                  <img src={image} alt={name} />
                  <span className="card-badge">{category}</span>
                </div>
                
                <div className="card-body">
                  <div className="card-category">{category}</div>
                  <h2 className="card-title">{name}</h2>
                  
                  {renderStars()}
                  
                  <p className="card-description">
                    {description.substring(0, 80)}...
                  </p>
                  
                  <div className="card-footer">
                    <span className="card-price">{price}</span>
                    <button 
                      className="card-button"
                      onClick={() => handleAddToCart(id)}
                      style={{
                        opacity: isAdded ? 0.7 : 1,
                        backgroundColor: isAdded ? '#10b981' : ''
                      }}
                    >
                      {isAdded ? '✓ Added' : 'Order Now'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
