import React, { useEffect } from 'react'

export default function ProductsFilters({ products, setProducts }) {

  useEffect(() => {


  }, [products]);

  const handeSizeFilter = (userSelectedSize) => {
    const filteredProducts = [];
    products.forEach(product => {
      product.size.forEach(sSize => {
        if (sSize.toLowerCase() === userSelectedSize) {
          filteredProducts.push(product);
        }

      })
    });
    setProducts([...filteredProducts]);
    console.log(products);
  }

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
    <div>
      ProductsFilters <br />
      <div class='' style={{ paddingTop: '10px' }}>
        <button onClick={() => handleClick('asc')}>ASE</button>
      </div>
      <div class='' style={{ paddingTop: '10px' }}>
        <button onClick={() => handleClick('dsc')}>DSE</button>
      </div>
      <div class='' style={{ paddingTop: '10px' }}>
        <button onClick={() => handeSizeFilter('s')}>Small </button>
      </div>
      <div class='' style={{ paddingTop: '10px' }}>
        <button onClick={() => handeSizeFilter('xs')}>XS </button>
      </div>
    </div>
  )
}
