import React, { useState } from "react";
import { data_items } from '../Category/data/items';
import CategoryMenu from '../Category/CategoryMenu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (type_id) => {
    setSelectedCategory(type_id);
  };

  const filteredProducts = selectedCategory
    ? data_items.items.filter((product) => product.type_id === selectedCategory)
    : data_items.items;

  return (
    <div>
      <CategoryMenu onCategorySelect={handleCategorySelect} />
      <div className="mt-44 px-2">
      <div className="grid grid-cols-2 gap-2 mt-4 mb-10 
                sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] 
                md:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] 
                lg:grid-cols-[repeat(auto-fill,minmax(170px,1fr))] 
                xl:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
  {filteredProducts.map((product, index) => (
    <div
      key={index}
      className=" relative bg-white rounded-lg shadow-lg "
    >
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full h-[160px] object-cover rounded-lg"
        loading="lazy"
      />
      <h3 className="text-[#363636] text-base font-normal overflow-hidden text-ellipsis whitespace-nowrap font-sans px-1 pt-1">
        {product.name}
      </h3>
      <p className="text-orange-500 font-medium px-1 text-sm pb-2">{product.ta_price} đ</p>
      <FontAwesomeIcon
         className="absolute w-5 h-5 rounded-full bottom-1 right-1 text-[#f6a749]"
             icon={faCirclePlus}
           size="lg"
        />
    </div>
  ))}
</div>
</div>

    </div>
  );
};

export default Product;
