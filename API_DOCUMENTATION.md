# E-Commerce API Documentation

## Overview
This is a comprehensive REST API for an e-commerce application built with Node.js, Express, and MongoDB. The API provides endpoints for user authentication, product management, cart operations, order processing, and administrative functions.

## Base URL
```
http://localhost:5000/api/v1
```

## Authentication
Most endpoints require JWT authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## Models Overview

### User Model
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "street": "string",
  "apartment": "string", 
  "city": "string",
  "postalCode": "string",
  "country": "string",
  "phone": "string",
  "isAdmin": "boolean",
  "cart": ["cartProductId"],
  "wishlist": [
    {
      "productId": "string",
      "productName": "string", 
      "productImage": "string",
      "productPrice": "number"
    }
  ]
}
```

### Product Model
```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "price": "number",
  "rating": "number",
  "colours": ["string"],
  "image": "string",
  "images": ["string"],
  "reviews": ["reviewId"],
  "numberOfReviews": "number",
  "sizes": ["string"],
  "category": "categoryId",
  "genderAgeCategory": "men|women|unisex|kids",
  "countInStock": "number",
  "dateAdded": "date"
}
```

### Category Model
```json
{
  "id": "string",
  "name": "string",
  "image": "string",
  "colour": "string"
}
```

### Order Model
```json
{
  "id": "string",
  "orderItems": [
    {
      "quantity": "number",
      "product": "productId"
    }
  ],
  "shippingAddress1": "string",
  "shippingAddress2": "string",
  "city": "string",
  "postalCode": "string",
  "country": "string",
  "phone": "string",
  "status": "pending|processing|shipped|delivered|cancelled",
  "totalPrice": "number",
  "user": "userId",
  "dateOrdered": "date"
}
```

---

## 🔐 Authentication Endpoints

### Register User
```http
POST /register
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "StrongP@ssw0rd",
  "phone": "+1234567890"
}
```

**Validation Rules:**
- Name: Required, not empty
- Email: Valid email format
- Password: Minimum 8 characters, must contain uppercase, lowercase, and special character
- Phone: Required

**Success Response (201):**
```json
{
  "id": "64a7b8c9d1e2f3g4h5i6j7k8",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "isAdmin": false,
  "cart": [],
  "wishlist": []
}
```

**Error Response (400):**
```json
{
  "errors": [
    {
      "field": "email",
      "message": "Please enter a valid email address"
    }
  ]
}
```

### Login User
```http
POST /login
```

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "StrongP@ssw0rd"
}
```

**Success Response (200):**
```json
{
  "user": {
    "id": "64a7b8c9d1e2f3g4h5i6j7k8",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "isAdmin": false
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Response (404):**
```json
{
  "type": "AuthError",
  "message": "User not found"
}
```

### Verify Token
```http
GET /verify-token
```

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Success Response (200):**
```json
{
  "valid": true,
  "user": {
    "id": "64a7b8c9d1e2f3g4h5i6j7k8",
    "email": "john.doe@example.com"
  }
}
```

### Forgot Password
```http
POST /forgot-password
```

**Request Body:**
```json
{
  "email": "john.doe@example.com"
}
```

**Success Response (200):**
```json
{
  "message": "Password reset OTP sent to your email"
}
```

### Verify OTP
```http
POST /verify-otp
```

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "otp": "123456"
}
```

**Success Response (200):**
```json
{
  "message": "OTP verified successfully"
}
```

### Reset Password
```http
POST /reset-password
```

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "newPassword": "NewStrongP@ssw0rd"
}
```

**Success Response (200):**
```json
{
  "message": "Password reset successfully"
}
```

---

## 👥 User Management Endpoints

### Get All Users (Admin Only)
```http
GET /users
```

**Headers:**
```
Authorization: Bearer <admin_jwt_token>
```

**Success Response (200):**
```json
[
  {
    "id": "64a7b8c9d1e2f3g4h5i6j7k8",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "isAdmin": false
  }
]
```

### Get User by ID
```http
GET /users/{id}
```

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Success Response (200):**
```json
{
  "id": "64a7b8c9d1e2f3g4h5i6j7k8",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "street": "123 Main St",
  "city": "New York",
  "phone": "+1234567890",
  "isAdmin": false
}
```

### Update User
```http
PUT /users/{id}
```

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Request Body:**
```json
{
  "name": "John Updated",
  "street": "456 Oak Ave",
  "apartment": "Apt 2B",
  "city": "Los Angeles",
  "postalCode": "90210",
  "country": "USA",
  "phone": "+1987654321"
}
```

**Success Response (200):**
```json
{
  "id": "64a7b8c9d1e2f3g4h5i6j7k8",
  "name": "John Updated",
  "email": "john.doe@example.com",
  "street": "456 Oak Ave",
  "apartment": "Apt 2B",
  "city": "Los Angeles",
  "postalCode": "90210",
  "country": "USA",
  "phone": "+1987654321"
}
```

### Get Payment Profile
```http
GET /users/{id}/paymentProfile
```

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Success Response (200):**
```json
{
  "paymentCustomerId": "cus_stripe_customer_id"
}
```

---

## 🛒 Cart Management Endpoints

### Get User Cart
```http
GET /users/{userId}/cart
```

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Success Response (200):**
```json
[
  {
    "id": "cart_product_id",
    "product": {
      "id": "product_id",
      "name": "Product Name",
      "price": 29.99,
      "image": "product_image_url"
    },
    "quantity": 2,
    "size": "M",
    "colour": "Red"
  }
]
```

### Get Cart Count
```http
GET /users/{userId}/cart/count
```

**Success Response (200):**
```json
{
  "cartCount": 5
}
```

### Add to Cart
```http
POST /users/{userId}/cart
```

**Request Body:**
```json
{
  "product": "product_id",
  "quantity": 2,
  "size": "M",
  "colour": "Red"
}
```

**Success Response (201):**
```json
{
  "id": "cart_product_id",
  "product": "product_id",
  "quantity": 2,
  "size": "M",
  "colour": "Red"
}
```

### Update Cart Item Quantity
```http
PUT /users/{userId}/cart/{cartProductId}
```

**Request Body:**
```json
{
  "quantity": 3
}
```

**Success Response (200):**
```json
{
  "id": "cart_product_id",
  "quantity": 3
}
```

### Remove from Cart
```http
DELETE /users/{userId}/cart/{cartProductId}
```

**Success Response (204):**
```
No Content
```

---

## ❤️ Wishlist Management Endpoints

### Get User Wishlist
```http
GET /users/{userId}/wishlist
```

**Success Response (200):**
```json
[
  {
    "productId": "product_id",
    "productName": "Product Name",
    "productImage": "product_image_url",
    "productPrice": 29.99
  }
]
```

### Add to Wishlist
```http
POST /users/{userId}/wishlist
```

**Request Body:**
```json
{
  "productId": "product_id",
  "productName": "Product Name",
  "productImage": "product_image_url",
  "productPrice": 29.99
}
```

**Success Response (201):**
```json
{
  "message": "Product added to wishlist"
}
```

### Remove from Wishlist
```http
DELETE /users/{userId}/wishlist/{productId}
```

**Success Response (204):**
```
No Content
```

---

## 🏷️ Category Endpoints

### Get All Categories
```http
GET /categories
```

**Success Response (200):**
```json
[
  {
    "id": "category_id",
    "name": "Electronics",
    "image": "category_image_url",
    "colour": "#FF5722"
  }
]
```

### Get Category by ID
```http
GET /categories/{id}
```

**Success Response (200):**
```json
{
  "id": "category_id",
  "name": "Electronics",
  "image": "category_image_url",
  "colour": "#FF5722"
}
```

---

## 📱 Product Endpoints

### Get All Products
```http
GET /products
```

**Query Parameters:**
- `categories` (string): Comma-separated category IDs
- `page` (number): Page number for pagination
- `limit` (number): Number of products per page

**Example:**
```http
GET /products?categories=cat1,cat2&page=1&limit=10
```

**Success Response (200):**
```json
{
  "products": [
    {
      "id": "product_id",
      "name": "iPhone 13",
      "description": "Latest iPhone model",
      "price": 999.99,
      "rating": 4.5,
      "colours": ["Black", "White", "Blue"],
      "image": "main_image_url",
      "images": ["image1_url", "image2_url"],
      "sizes": ["64GB", "128GB", "256GB"],
      "category": {
        "id": "category_id",
        "name": "Electronics"
      },
      "genderAgeCategory": "unisex",
      "countInStock": 50,
      "numberOfReviews": 125
    }
  ],
  "totalProducts": 100,
  "currentPage": 1,
  "totalPages": 10
}
```

### Search Products
```http
GET /products/search
```

**Query Parameters:**
- `q` (string): Search query
- `category` (string): Category ID filter
- `minPrice` (number): Minimum price filter
- `maxPrice` (number): Maximum price filter

**Example:**
```http
GET /products/search?q=iPhone&category=electronics&minPrice=500&maxPrice=1500
```

### Get Product by ID
```http
GET /products/{id}
```

**Success Response (200):**
```json
{
  "id": "product_id",
  "name": "iPhone 13",
  "description": "Latest iPhone model with advanced features",
  "price": 999.99,
  "rating": 4.5,
  "colours": ["Black", "White", "Blue"],
  "image": "main_image_url",
  "images": ["image1_url", "image2_url"],
  "sizes": ["64GB", "128GB", "256GB"],
  "category": {
    "id": "category_id",
    "name": "Electronics"
  },
  "genderAgeCategory": "unisex",
  "countInStock": 50,
  "numberOfReviews": 125,
  "reviews": [
    {
      "id": "review_id",
      "rating": 5,
      "comment": "Excellent product!",
      "user": "user_id",
      "dateCreated": "2023-10-01T10:00:00Z"
    }
  ]
}
```

---

## ⭐ Review Endpoints

### Leave a Review
```http
POST /products/{productId}/reviews
```

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Request Body:**
```json
{
  "rating": 5,
  "comment": "Excellent product, highly recommended!"
}
```

**Success Response (201):**
```json
{
  "id": "review_id",
  "rating": 5,
  "comment": "Excellent product, highly recommended!",
  "user": {
    "id": "user_id",
    "name": "John Doe"
  },
  "product": "product_id",
  "dateCreated": "2023-10-01T10:00:00Z"
}
```

### Get Product Reviews
```http
GET /products/{productId}/reviews
```

**Success Response (200):**
```json
[
  {
    "id": "review_id",
    "rating": 5,
    "comment": "Excellent product!",
    "user": {
      "id": "user_id",
      "name": "John Doe"
    },
    "dateCreated": "2023-10-01T10:00:00Z"
  }
]
```

---

## 💳 Checkout Endpoints

### Create Checkout Session
```http
POST /checkout
```

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Request Body:**
```json
{
  "cartItems": [
    {
      "product": "product_id",
      "quantity": 2,
      "size": "M",
      "colour": "Red"
    }
  ],
  "shippingAddress": {
    "street": "123 Main St",
    "apartment": "Apt 1A",
    "city": "New York",
    "postalCode": "10001",
    "country": "USA",
    "phone": "+1234567890"
  }
}
```

**Success Response (200):**
```json
{
  "sessionId": "cs_stripe_session_id",
  "url": "https://checkout.stripe.com/pay/cs_..."
}
```

### Stripe Webhook
```http
POST /checkout/webhook
```

**Note:** This endpoint is used by Stripe to notify about payment events. Include the `stripe-signature` header for verification.

---

## 📦 Order Endpoints

### Get User Orders
```http
GET /orders/users/{userId}
```

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Success Response (200):**
```json
[
  {
    "id": "order_id",
    "orderItems": [
      {
        "quantity": 2,
        "product": {
          "id": "product_id",
          "name": "Product Name",
          "price": 29.99
        }
      }
    ],
    "shippingAddress1": "123 Main St",
    "city": "New York",
    "country": "USA",
    "phone": "+1234567890",
    "status": "pending",
    "totalPrice": 59.98,
    "user": "user_id",
    "dateOrdered": "2023-10-01T10:00:00Z"
  }
]
```

### Get Order by ID
```http
GET /orders/{id}
```

**Success Response (200):**
```json
{
  "id": "order_id",
  "orderItems": [
    {
      "quantity": 2,
      "product": {
        "id": "product_id",
        "name": "Product Name",
        "price": 29.99,
        "image": "product_image_url"
      }
    }
  ],
  "shippingAddress1": "123 Main St",
  "shippingAddress2": "Apt 1A",
  "city": "New York",
  "postalCode": "10001",
  "country": "USA",
  "phone": "+1234567890",
  "status": "processing",
  "totalPrice": 59.98,
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "dateOrdered": "2023-10-01T10:00:00Z"
}
```

---

## 🔧 Admin Endpoints

**Note:** All admin endpoints require admin privileges (`isAdmin: true`).

### User Management

#### Get User Count
```http
GET /admin/users/count
```

**Success Response (200):**
```json
{
  "userCount": 1250
}
```

#### Delete User
```http
DELETE /admin/users/{id}
```

**Success Response (204):**
```
No Content
```

### Category Management

#### Add Category
```http
POST /admin/categories
```

**Request Body:**
```json
{
  "name": "New Category",
  "image": "category_image_url",
  "colour": "#FF5722"
}
```

**Success Response (201):**
```json
{
  "id": "category_id",
  "name": "New Category",
  "image": "category_image_url",
  "colour": "#FF5722"
}
```

#### Edit Category
```http
PUT /admin/categories/{id}
```

**Request Body:**
```json
{
  "name": "Updated Category",
  "image": "new_image_url",
  "colour": "#2196F3"
}
```

#### Delete Category
```http
DELETE /admin/categories/{id}
```

**Success Response (204):**
```
No Content
```

### Product Management

#### Get Product Count
```http
GET /admin/products/count
```

**Success Response (200):**
```json
{
  "productCount": 500
}
```

#### Get All Products (Admin)
```http
GET /admin/products
```

**Query Parameters:**
- `page` (number): Page number
- `limit` (number): Products per page

#### Add Product
```http
POST /admin/products
```

**Request Body:**
```json
{
  "name": "New Product",
  "description": "Product description",
  "price": 99.99,
  "colours": ["Red", "Blue"],
  "image": "main_image_url",
  "images": ["image1_url", "image2_url"],
  "sizes": ["S", "M", "L"],
  "category": "category_id",
  "genderAgeCategory": "unisex",
  "countInStock": 100
}
```

#### Edit Product
```http
PUT /admin/products/{id}
```

#### Delete Product Images
```http
DELETE /admin/products/{id}/images
```

**Request Body:**
```json
{
  "imagesToDelete": ["image1_url", "image2_url"]
}
```

#### Delete Product
```http
DELETE /admin/products/{id}
```

### Order Management

#### Get All Orders
```http
GET /admin/orders
```

**Query Parameters:**
- `page` (number): Page number
- `limit` (number): Orders per page
- `status` (string): Filter by order status

#### Get Order Count
```http
GET /admin/orders/count
```

**Success Response (200):**
```json
{
  "orderCount": 850
}
```

#### Change Order Status
```http
PUT /admin/orders/{id}
```

**Request Body:**
```json
{
  "status": "shipped"
}
```

#### Delete Order
```http
DELETE /admin/orders/{id}
```

---

## 📝 Error Responses

### Common HTTP Status Codes

- **200 OK**: Request successful
- **201 Created**: Resource created successfully
- **204 No Content**: Request successful, no content to return
- **400 Bad Request**: Invalid request data
- **401 Unauthorized**: Authentication required
- **403 Forbidden**: Insufficient permissions
- **404 Not Found**: Resource not found
- **409 Conflict**: Resource already exists
- **500 Internal Server Error**: Server error

### Error Response Format
```json
{
  "type": "ErrorType",
  "message": "Error description",
  "errors": [
    {
      "field": "fieldName",
      "message": "Field-specific error message"
    }
  ]
}
```

---

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Set up environment variables** (see .env.example)
4. **Start the server**: `npm start`
5. **Server will run on**: `http://localhost:5000`

## 📋 Environment Variables

Create a `.env` file with the following variables:

```env
API_URL=/api/v1
HOST=localhost
PORT=5000
MONGODB_CONNECTION_STRING=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
EMAIL=your_email@example.com
EMAIL_PASSWORD=your_email_password
STRIPE_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

## 🔒 Security Notes

1. Always use HTTPS in production
2. Keep JWT secrets secure and rotate them regularly
3. Validate all input data
4. Implement rate limiting
5. Use environment variables for sensitive data
6. Regularly update dependencies for security patches

---

*This documentation covers all available endpoints in the E-Commerce API. For additional support or questions, please refer to the source code or contact the development team.*