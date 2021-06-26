import bcrypt from 'bcryptjs';

const data = {

   users:[
     {
    name: 'Bimal',
    email: 'admin@example.com',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: true,
     },

     {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false, 
     },
   ],

    products: [
      {
        
        name: 'New Apple iPhone 12 Pro Max',
        category: 'Mobile',
        image: '/images/p2.jpg',
        price: 1199,
        countInStock: 10,
        brand: 'Apple',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
      
        name: 'Samsung Galaxy S20 FE 5G',
        category: 'Mobile',
        image: '/images/p3.jpg',
        price: 199,
        countInStock: 20,
        brand: 'Samsung',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'New Apple iPhone 11 -Black',
        category: 'Mobile',
        image: '/images/p4.jpg',
        price: 1170,
        countInStock: 0,
        brand: 'Apple',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
      
        name: 'New Apple iPhone XR',
        category: 'Mobile',
        image: '/images/p5.jpg',
        price: 1089,
        countInStock: 15,
        brand: 'Apple',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        
        name: 'Apple MacBook Pro',
        category: 'Laptop',
        image: '/images/p6.jpg',
        price: 5199,
        countInStock: 5,
        brand: 'Apple',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
      
        name: 'Apple iPad Mini (Wi-Fi, 256GB)',
        category: 'Mobile',
        image: '/images/p7.jpg',
        price: 2199,
        countInStock: 12,
        brand: 'Apple',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  export default data;