import React from 'react';

const BestSellers = () => {
  const products = [
    {
      id: 1,
      image: '/wp-content/uploads/2024/01/td-logo.png',
      title: 'Lorem ipsum dolor sit',
      description: 'consectetuer adipiscing.',
      validity: 'Valid until 05 Feb 2024',
    },
    {
      id: 2,
      image: '/wp-content/uploads/2024/01/td-logo2.png',
      title: 'Lorem ipsum dolor sit',
      description: 'consectetuer adipiscing.',
      validity: 'Valid until 05 Feb 2024',
    },
    {
      id: 3,
      image: '/wp-content/uploads/2024/01/td-logo3.png',
      title: 'Lorem ipsum dolor sit',
      description: 'consectetuer adipiscing.',
      validity: 'Valid until 05 Feb 2024',
    },
    {
      id: 4,
      image: '/wp-content/uploads/2024/01/td-logo4.png',
      title: 'Lorem ipsum dolor sit',
      description: 'consectetuer adipiscing.',
      validity: 'Valid until 05 Feb 2024',
    },
    {
      id: 5,
      image: '/wp-content/uploads/2024/01/td-logo5.png',
      title: 'Lorem ipsum dolor sit',
      description: 'consectetuer adipiscing.',
      validity: 'Valid until 05 Feb 2024',
    },
    {
      id: 6,
      image: '/wp-content/uploads/2024/01/td-logo6.png',
      title: 'Lorem ipsum dolor sit',
      description: 'consectetuer adipiscing.',
      validity: 'Valid until 05 Feb 2024',
    },
  ];

  return (
    <div className='Best_seller_td'>
      <h3 className="custom_h3_col-9">Best Selling Products</h3>

      <div className="row gx-3">
        {products.map((product) => (
          <div className="col-6 col-sm-4 mb-3" key={product.id}>
            <div className="card p-3 border border-light">
              <div className="imageBox d-flex justify-content-center align-items-center mb-4 border-bottom border-danger" style={{ height: '150px' }}>
                <img className="img-fluid" src={product.image} alt={product.title} />
              </div>
              <div className="caps d-flex flex-column">
                <h3 className="text-primary text-lg font-weight-bold mb-0">
                  <a href="#">{product.title}</a>
                </h3>
                <strong className="text-dark font-weight-bold mb-3">{product.description}</strong>
                <p className="text-danger">{product.validity}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="col-12 text-center py-5">
          <a href="#" className="btn btn-danger px-4">View More</a>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
