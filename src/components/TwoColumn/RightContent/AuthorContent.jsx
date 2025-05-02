import React from 'react';

const AuthorContent = () => {
    return (
        <div className='about-us-fold'>
            <h3 className="custom_h3_col-9">Meet savsays Coupon Experts</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            </p>
            <p>
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat.
            </p>
            <p>
                Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean.
            </p>
            <div className='author-box' style={{ display: 'flex', alignItems: 'center' }}>
                {/* Profile Image */}
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-FkxdY9pOFqaFM39-MtjDTnxzFPVE3GWBXA&s"
                    alt="Profile"
                    style={{ borderRadius: '50%', width: '74px', height: '40px', }}
                />

                {/* Name */}
                <span style={{ marginRight: '10px' }}>Jhon Doe</span>

                {/* Tags */}
                <span style={{ backgroundColor: '#80808050', color: '#000', padding: '5px 10px', borderRadius: '5px', marginRight: '5px' }}>
                    200,000 coupons published
                </span>

                <span style={{ backgroundColor: '#f7e4ff', color: 'black', padding: '5px 10px', borderRadius: '5px' }}>
                    7 years experience
                </span>
            </div>

            <div className='author-box' style={{ display: 'flex', alignItems: 'center' }}>
                {/* Profile Image */}
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-FkxdY9pOFqaFM39-MtjDTnxzFPVE3GWBXA&s"
                    alt="Profile"
                    style={{ borderRadius: '50%', width: '74px', height: '40px', }}
                />

                {/* Name */}
                <span style={{ marginRight: '10px' }}>Jhon Doe</span>

                {/* Tags */}
                <span style={{ backgroundColor: '#80808050', color: '#000', padding: '5px 10px', borderRadius: '5px', marginRight: '5px' }}>
                    200,000 coupons published
                </span>

                <span style={{ backgroundColor: '#f7e4ff', color: 'black', padding: '5px 10px', borderRadius: '5px' }}>
                    7 years experience
                </span>
            </div>

            <div className='author-box' style={{ display: 'flex', alignItems: 'center' }}>
                {/* Profile Image */}
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-FkxdY9pOFqaFM39-MtjDTnxzFPVE3GWBXA&s"
                    alt="Profile"
                    style={{ borderRadius: '50%', width: '74px', height: '40px', }}
                />

                {/* Name */}
                <span style={{ marginRight: '10px' }}>Jhon Doe</span>

                {/* Tags */}
                <span style={{ backgroundColor: '#80808050', color: '#000', padding: '5px 10px', borderRadius: '5px', marginRight: '5px' }}>
                    200,000 coupons published
                </span>

                <span style={{ backgroundColor: '#f7e4ff', color: 'black', padding: '5px 10px', borderRadius: '5px' }}>
                    7 years experience
                </span>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>

            <p>Read more about savsays and our Team</p>

        </div>
    );
};

export default AuthorContent;
