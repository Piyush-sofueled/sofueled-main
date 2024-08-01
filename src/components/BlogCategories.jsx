import React from 'react';
import PropTypes from 'prop-types';

const BlogCategories = ({ activeCategory, setActiveCategory, setSearchTerm, categories }) => {
  return (
    <div className="categories-container">
      <div className="categories">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-button ${activeCategory.id === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search" 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="search-input" 
        />
        <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24px" height="24px">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 0 0 1.48-5.34C15.07 5.57 13.05 3.55 10.5 3.05 6.46 2.34 2.34 6.46 3.05 10.5c.5 2.55 2.52 4.57 5.06 5.17 2.54.6 4.99-.25 6.54-1.8l.27.28v.79l5 4.99L20.49 19l-4.99-5zM10 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
</svg>

      </div>
    </div>
  );
};

// Add prop types validation
BlogCategories.propTypes = {
  activeCategory: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  setActiveCategory: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default BlogCategories;
