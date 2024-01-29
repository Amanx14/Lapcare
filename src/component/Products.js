import React from 'react'
import Card from './Card';

const list = [
  {
    id: 1,
    title: "Dell XPS",
    seller: "Seller Name",
    price: 89000,
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7430-2in1-intel/general/notebook-inspiron-14-7430-silver-right-facing.png?fmt=png-alpha&wid=800&hei=620",
    amount: 1,
  },
  {
    id: 2,
    title: "Macbook Air",
    seller: "Seller Name",
    price: 98000,
    img: "https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81YKn3lEcEL._AC_SL1500_.jpg",
    amount: 1,
  },
  {
    id: 3,
    title: "Dell Alienware",
    seller: "Seller Name",
    price: 143000,
    img: "https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71RbT53F8pL._AC_SL1500_.jpg",
    amount: 1,
  },
  {
    id: 4,
    title: "Macbook Air",
    seller: "Seller Name",
    price: 89999,
    img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amount: 1,
  }
];

const dell = [
  {
    id: 1,
    title: "Dell XPS",
    seller: "Seller Name",
    price: 89000,
    img: "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3319&hei=2405&qlt=100,1&resMode=sharp2&size=3319,2405&chrss=full&imwidth=5000",
    amount: 1,
  },
  {
    id: 2,
    title: "Dell Probook",
    seller: "Seller Name",
    price: 98000,
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7430-2in1-intel/general/notebook-inspiron-14-7430-silver-right-facing.png?fmt=png-alpha&wid=800&hei=620",
    amount: 1,
  },
  {
    id: 3,
    title: "Dell Inspiron",
    seller: "Seller Name",
    price: 143000,
    img: "https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61UU0Wd6RaL._SL1500_.jpg",
    amount: 1,
  },
  {
    id: 4,
    title: "Dell AlienWare",
    seller: "Seller Name",
    price: 389999,
    img: "https://m.media-amazon.com/images/I/51PLKwik5fL._AC_UF1000,1000_QL80_.jpg",
    amount: 1,
  }
];

const apple = [
  {
    id: 1,
    title: "Macbook Air 2023",
    seller: "Seller Name",
    price: 199000,
    img: "https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/619L9jf3-rL._AC_SL1500_.jpg",
    amount: 1,
  },
  {
    id: 2,
    title: "Macbook Air 2023",
    seller: "Seller Name",
    price: 129000,
    img: "https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/51FJlZmqO8L._AC_SL1024_.jpg",
    amount: 1,
  },
  {
    id: 3,
    title: "Macbook Air M1",
    seller: "Seller Name",
    price: 143000,
    img: "https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61bX2AoGj2L._AC_SL1500_.jpg",
    amount: 1,
  },
  {
    id: 4,
    title: "Macbook Air M2",
    seller: "Seller Name",
    price: 389999,
    img: "https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81YKn3lEcEL._AC_SL1500_.jpg",
    amount: 1,
  }
];

function Products() {
  return (
    <div className='products'>
      <h1 style={{ fontSize: '5vw' }}>Best Sellers</h1>
      <h2>View All</h2>

      <div className="product-box">
        {
          list.map((item) => (
            <Card listData={item} key={item.id} />
          ))
        }
      </div>

      <div className="brand-box">
        <div className="laptop-box" id="dell-box">
          <h2 style={{ fontSize: '30px' }}>Dell Laptops</h2>
          <h3>Shop Now</h3>
        </div>

        <div className="laptop-box" id="apple-box">
          <h2 style={{ fontSize: '30px' }}>Apple Laptops</h2>
          <h3>Shop Now</h3>
        </div>
      </div>

      <div className="dell-laptop">
        <h1 style={{ fontSize: '4vw' }}>Dell Laptops</h1>
        <h2>View All</h2>

        <div className="dell-prod product-box">
          {
            dell.map((item) => (
              <Card listData={item} key={item.id} />
            ))
          }
        </div>
      </div>

      <div className="apple-laptop">
        <h1 style={{ fontSize: '4vw' }}>Apple Laptops</h1>
        <h2>View All</h2>

        <div className="apple-prod product-box">
          {
            apple.map((item) => (
              <Card listData={item} key={item.id} />
            ))
          }
        </div>
      </div>

    </div>


  )
}

export default Products
