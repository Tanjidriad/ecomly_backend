# 🛍️ Ecomly - E-Commerce Backend API

A comprehensive REST API for an e-commerce platform built with Node.js, Express, and MongoDB. This backend provides all the essential features for a modern e-commerce application including user authentication, product management, shopping cart, order processing, and administrative functions.

## 🚀 Features

### 🔐 Authentication & Security
- User registration and login with JWT authentication
- Password reset with email OTP verification
- Secure password hashing with bcrypt
- JWT token validation and refresh

### 👥 User Management
- User profile management
- Address management
- User roles (Admin/Customer)
- Account verification

### 📱 Product Management
- Product CRUD operations
- Product categories
- Product search and filtering
- Product reviews and ratings
- Image management
- Stock management

### 🛒 Shopping Experience
- Shopping cart functionality
- Wishlist management
- Order processing
- Order history
- Order status tracking

### 💳 Payment Integration
- Stripe payment integration
- Secure checkout process
- Payment webhooks
- Order confirmation emails

### 🔧 Admin Panel
- Product management
- Order management
- User management
- Category management
- Sales analytics

### 📧 Email System
- Professional email templates
- Password reset emails
- Order confirmation emails
- Welcome emails
- Security notifications

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Email Service**: Nodemailer
- **Payment**: Stripe
- **Validation**: express-validator
- **File Upload**: Multer (for images)
- **CORS**: cors middleware
- **Environment**: dotenv

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or MongoDB Atlas)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## ⚡ Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/ecomly-backend.git
cd ecomly-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:

```env
# Server Configuration
API_URL=/api/v1
HOST=localhost
PORT=5000

# Database
MONGODB_CONNECTION_STRING=mongodb+srv://username:password@cluster.mongodb.net/ecomly

# JWT Secrets
ACCESS_TOKEN_SECRET=your_super_secret_access_token_key
REFRESH_TOKEN_SECRET=your_super_secret_refresh_token_key

# Email Configuration (Gmail)
EMAIL=your_business_email@gmail.com
EMAIL_PASSWORD=your_app_specific_password

# Stripe Configuration
STRIPE_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### 4. Start the server
```bash
# Development mode (with nodemon)
npm start

# Production mode
npm run prod
```

The server will start on `http://localhost:5000`

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api/v1
```

### Authentication
Most endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### API Endpoints

#### 🔐 Authentication
- `POST /register` - Register new user
- `POST /login` - User login
- `GET /verify-token` - Verify JWT token
- `POST /forgot-password` - Request password reset
- `POST /verify-otp` - Verify OTP
- `POST /reset-password` - Reset password

#### 👥 Users
- `GET /users` - Get all users (Admin)
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `GET /users/:id/paymentProfile` - Get payment profile

#### 🛒 Cart & Wishlist
- `GET /users/:id/cart` - Get user cart
- `POST /users/:id/cart` - Add to cart
- `PUT /users/:id/cart/:cartProductId` - Update cart item
- `DELETE /users/:id/cart/:cartProductId` - Remove from cart
- `GET /users/:id/wishlist` - Get wishlist
- `POST /users/:id/wishlist` - Add to wishlist
- `DELETE /users/:id/wishlist/:productId` - Remove from wishlist

#### 📱 Products
- `GET /products` - Get all products
- `GET /products/search` - Search products
- `GET /products/:id` - Get product by ID
- `POST /products/:id/reviews` - Leave review
- `GET /products/:id/reviews` - Get product reviews

#### 🏷️ Categories
- `GET /categories` - Get all categories
- `GET /categories/:id` - Get category by ID

#### 💳 Checkout & Orders
- `POST /checkout` - Create checkout session
- `POST /checkout/webhook` - Stripe webhook
- `GET /orders/users/:userId` - Get user orders
- `GET /orders/:id` - Get order by ID

#### 🔧 Admin
- `GET /admin/users/count` - Get user count
- `DELETE /admin/users/:id` - Delete user
- `POST /admin/categories` - Add category
- `PUT /admin/categories/:id` - Update category
- `DELETE /admin/categories/:id` - Delete category
- `GET /admin/products/count` - Get product count
- `POST /admin/products` - Add product
- `PUT /admin/products/:id` - Update product
- `DELETE /admin/products/:id` - Delete product
- `GET /admin/orders` - Get all orders
- `PUT /admin/orders/:id` - Update order status

For detailed API documentation with examples, see [API_DOCUMENTATION.md](API_DOCUMENTATION.md)

## 🧪 Testing with Postman

Import the provided Postman collection for easy API testing:

1. Import `Postman_Collection.json` into Postman
2. Set up environment variables (BASE_URL, JWT_TOKEN, etc.)
3. Follow the [Postman Setup Guide](POSTMAN_SETUP_GUIDE.md)

## 🔒 Security Features

- **JWT Authentication**: Secure user authentication
- **Password Hashing**: bcrypt for password security
- **Input Validation**: express-validator for data validation
- **CORS**: Cross-origin resource sharing configuration
- **Rate Limiting**: Protection against brute force attacks
- **Email Security**: Professional email templates with security warnings
- **Environment Variables**: Sensitive data protection

## 🗂️ Project Structure

```
├── controllers/           # Request handlers
│   ├── admin/            # Admin-specific controllers
│   ├── auth.js           # Authentication logic
│   ├── cart.js           # Cart management
│   ├── categories.js     # Category management
│   ├── checkout.js       # Payment processing
│   ├── orders.js         # Order management
│   ├── products.js       # Product management
│   ├── reviews.js        # Review system
│   ├── users.js          # User management
│   └── wishlists.js      # Wishlist functionality
├── helpers/              # Utility functions
│   ├── cron_job.js       # Scheduled tasks
│   ├── email_sender.js   # Email service
│   ├── email_templates.js # Email templates
│   └── media_helper.js   # File handling
├── middlewares/          # Custom middleware
│   ├── authorization.js  # Authorization logic
│   ├── error_handler.js  # Error handling
│   └── jwt.js           # JWT middleware
├── models/              # Database schemas
│   ├── cart_product.js  # Cart item model
│   ├── category.js      # Category model
│   ├── order.js         # Order model
│   ├── product.js       # Product model
│   ├── review.js        # Review model
│   ├── token.js         # Token model
│   └── user.js          # User model
├── routes/              # API routes
│   ├── admin.js         # Admin routes
│   ├── auth.js          # Authentication routes
│   ├── categories.js    # Category routes
│   ├── checkout.js      # Checkout routes
│   ├── orders.js        # Order routes
│   ├── products.js      # Product routes
│   └── users.js         # User routes
├── public/              # Static files
├── .env                 # Environment variables
├── .gitignore          # Git ignore rules
├── app.js              # Application entry point
├── package.json        # Dependencies
└── README.md           # This file
```

## 🚀 Deployment

### Environment Variables for Production
Ensure all environment variables are properly set:
- Use strong, unique secrets for JWT tokens
- Configure production MongoDB connection
- Set up production email service
- Configure Stripe production keys

### Recommended Deployment Platforms
- **Heroku**: Easy deployment with MongoDB Atlas
- **Vercel**: Serverless deployment
- **AWS EC2**: Full control with PM2
- **DigitalOcean**: Cost-effective VPS hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**dbestech.com**
- Website: [dbestech.com](https://dbestech.com)
- GitHub: [@NonymousMorlock](https://github.com/NonymousMorlock)

## 🙏 Acknowledgments

- Thanks to all contributors who helped build this project
- Special thanks to the Node.js and Express.js communities
- MongoDB for the excellent database solution
- Stripe for secure payment processing

## 📞 Support

For support, email support@dbestech.com or create an issue on GitHub.

---

⭐ **If you found this project helpful, please give it a star!** ⭐