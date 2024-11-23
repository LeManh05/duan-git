import React from 'react'
import { data_items } from './data/items';

const CategoryMenu = ({ onCategorySelect }) => {
  const handleCategoryClick = (type_id) => {
    const filteredItems = data_items.items.filter(item => item.type_id === type_id);
    onCategorySelect(type_id);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleClickAndScroll = (category) => {
    handleCategoryClick(category.text_id);
    scrollToTop();
  };

  const categories = data_items.item_types;

  return (
    <div className="py-3 w-full flex bg-gray-100 overflow-x-auto fixed w-full z-40 top-16">
      {categories.map((category, index) => (
        <div key={index}>
          <button
            className="truncate bg-white m-1 p-2 text-base font-normal font-sans text-black rounded focus:bg-orange-400 focus:text-white"
            onClick={() => handleClickAndScroll(category)}
          >
            {category.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryMenu;