import React, { useState } from 'react'

const Navbar = ({filterItem, menuList, onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  const handleFilter = (category) => {
    setActiveFilter(category);
    filterItem(category);
  };

  return (
    <>
      {/* Header Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">🍽️ FoodHub</div>
          
          <div className="navbar-search">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <span style={{color: '#999', fontSize: '1.2rem'}}>🔍</span>
            </div>
          </div>

          <div className="navbar-right">
            <div style={{position: 'relative', cursor: 'pointer'}}>
              <span className="navbar-icon">❤️</span>
            </div>
            <div style={{position: 'relative', cursor: 'pointer'}}>
              <span className="navbar-icon">🛒</span>
            </div>
            <div style={{cursor: 'pointer'}}>
              <span className="navbar-icon">👤</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Filter Buttons */}
      <div style={{backgroundColor: '#fff', padding: '1rem 0', borderBottom: '1px solid #eee'}}>
        <div className="btn-group">
          {
            menuList.map((curElem) => {
              return(
                <button 
                  key={curElem}
                  className={`btn-group_item ${activeFilter === curElem ? 'active' : ''}`}
                  onClick={() => handleFilter(curElem)}
                >
                  {curElem}
                </button>
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default Navbar;
