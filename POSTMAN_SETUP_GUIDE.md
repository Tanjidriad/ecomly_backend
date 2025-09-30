# Postman Collection Setup Guide

## 📋 How to Import and Use the Postman Collection

### Step 1: Import the Collection
1. Open Postman
2. Click **Import** button
3. Select **File** tab
4. Choose the `Postman_Collection.json` file from your project directory
5. Click **Import**

### Step 2: Set Up Environment (Optional but Recommended)
1. Click the **Environments** tab in the left sidebar
2. Click **Create Environment**
3. Name it "E-Commerce API - Local"
4. Add the following variables:

| Variable | Initial Value | Current Value |
|----------|---------------|---------------|
| BASE_URL | http://localhost:5000/api/v1 | http://localhost:5000/api/v1 |
| JWT_TOKEN | | (will be auto-populated after login) |
| ADMIN_JWT_TOKEN | | (set manually for admin user) |
| USER_ID | | (will be auto-populated after login) |
| PRODUCT_ID | | (will be auto-populated when fetching products) |
| CATEGORY_ID | | (will be auto-populated when fetching categories) |
| ORDER_ID | | (will be auto-populated when fetching orders) |
| CART_PRODUCT_ID | | (set manually when testing cart operations) |

5. Click **Save**
6. Select this environment in the top-right dropdown

### Step 3: Test the API Workflow

#### 🔐 Authentication Flow
1. **Register a new user** using the "Register User" request
2. **Login** with the registered user credentials
   - The JWT token will be automatically saved to the `JWT_TOKEN` variable
   - The user ID will be automatically saved to the `USER_ID` variable
3. **Verify Token** to ensure authentication is working

#### 📱 Product Discovery Flow
1. **Get All Categories** - This will auto-populate the `CATEGORY_ID` variable
2. **Get All Products** - This will auto-populate the `PRODUCT_ID` variable
3. **Search Products** with various search terms
4. **Get Product by ID** to see detailed product information

#### 🛒 Shopping Flow
1. **Add to Cart** - Add products to user's cart
2. **Get User Cart** - View cart contents
3. **Update Cart Item Quantity** - Modify quantities
4. **Add to Wishlist** - Save products for later
5. **Get User Wishlist** - View saved products

#### 💳 Checkout Flow
1. **Create Checkout Session** - Initiate Stripe payment process
2. **Get User Orders** - View completed orders

#### 🔧 Admin Operations (Requires Admin User)
1. First, create an admin user manually in your database or modify a user to have `isAdmin: true`
2. Login with the admin user and set the token in `ADMIN_JWT_TOKEN`
3. Use admin endpoints to:
   - Manage products (add, edit, delete)
   - Manage categories (add, edit, delete)
   - View order statistics
   - Manage users

### Step 4: Environment Variables Explanation

- **BASE_URL**: The base URL of your API server
- **JWT_TOKEN**: Authentication token for regular users (auto-populated after login)
- **ADMIN_JWT_TOKEN**: Authentication token for admin users (set manually)
- **USER_ID**: Current user's ID (auto-populated after login)
- **PRODUCT_ID**: Sample product ID for testing (auto-populated from product requests)
- **CATEGORY_ID**: Sample category ID for testing (auto-populated from category requests)
- **ORDER_ID**: Sample order ID for testing (auto-populated from order requests)
- **CART_PRODUCT_ID**: Cart item ID for testing cart operations (set manually)

### 📝 Testing Tips

1. **Start with Authentication**: Always test register and login first
2. **Use Auto-Population**: Many variables are automatically set by successful requests
3. **Check Responses**: Look at the response data to understand the API structure
4. **Test Error Cases**: Try invalid data to see error responses
5. **Admin Functions**: Remember to set `ADMIN_JWT_TOKEN` for admin-only endpoints

### 🐛 Troubleshooting

**Issue**: "Authorization required" errors
- **Solution**: Ensure you've logged in and the JWT_TOKEN is set

**Issue**: "Admin access required" errors
- **Solution**: Use an admin user and set the ADMIN_JWT_TOKEN variable

**Issue**: "User not found" or "Product not found" errors
- **Solution**: Check that the IDs in your environment variables are valid

**Issue**: Server connection errors
- **Solution**: Ensure your server is running on http://localhost:5000

### 🔄 Workflow Examples

#### Complete User Journey:
1. Register User → Login User → Get All Products → Add to Cart → Create Checkout Session

#### Admin Management:
1. Login Admin → Add Category → Add Product → Get All Orders → Change Order Status

#### Product Discovery:
1. Get All Categories → Get All Products → Search Products → Get Product by ID → Get Product Reviews

### 📊 Collection Statistics
- **Total Requests**: 35+ endpoints
- **Authentication**: 6 endpoints
- **User Management**: 4 endpoints
- **Cart & Wishlist**: 9 endpoints
- **Products & Categories**: 5 endpoints
- **Reviews**: 2 endpoints
- **Checkout**: 2 endpoints
- **Orders**: 2 endpoints
- **Admin Functions**: 15+ endpoints

This collection provides complete coverage of your e-commerce API with automatic variable management and realistic test scenarios.