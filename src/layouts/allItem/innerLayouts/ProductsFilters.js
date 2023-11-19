import React, { useEffect } from 'react'

export default function ProductsFilters({ products, setProducts }) {

  useEffect(() => {
  }, [products]);


  const handleSortFilters = (filterType) => {
    switch (filterType) {
      case 'asc':
        return products.sort((a, b) => a.price - b.price);
      case 'dsc':
        return products.sort((a, b) => b.price - a.price);
      default:
        break;

    }
  }

  const handleClick = (type) => {
    const sorted = handleSortFilters(type);
    setProducts([...sorted]); // Creates a copy of the 'sorted' array
  }

  return (
    <div>ProductsFilters
      <button onClick={() => handleClick('asc')}>ASE</button>
      <button onClick={() => handleClick('dsc')}>DSE</button>
    </div>
  )
}
