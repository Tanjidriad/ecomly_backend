// Email Templates for Professional Communications

exports.passwordResetTemplate = (otp) => {
  const textBody = `
Hello,

You have requested a password reset for your Ecomly account.

Your verification code is: ${otp}

This code will expire in 10 minutes. If you did not request this password reset, please ignore this email.

For security reasons, never share this code with anyone.

Best regards,
Ecomly Security Team
  `.trim();

  const htmlBody = `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset - Ecomly</title>
      <style>
          body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              margin: 0; 
              padding: 0; 
              background-color: #f5f5f5; 
          }
          .container { 
              max-width: 600px; 
              margin: 20px auto; 
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header { 
              background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
              color: white; 
              padding: 30px 20px; 
              text-align: center; 
          }
          .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 300;
          }
          .content { 
              padding: 40px 30px; 
              background-color: #ffffff;
          }
          .otp-container {
              text-align: center;
              margin: 30px 0;
          }
          .otp-code { 
              display: inline-block;
              background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
              border: 3px solid #007bff; 
              border-radius: 8px;
              padding: 20px 30px; 
              font-size: 32px; 
              font-weight: bold;
              color: #007bff;
              letter-spacing: 5px;
              font-family: 'Courier New', monospace;
          }
          .otp-label {
              display: block;
              font-size: 14px;
              color: #6c757d;
              margin-bottom: 10px;
              text-transform: uppercase;
              letter-spacing: 1px;
          }
          .footer { 
              background-color: #f8f9fa; 
              color: #6c757d; 
              padding: 20px; 
              text-align: center; 
              font-size: 12px;
              border-top: 1px solid #dee2e6;
          }
          .warning { 
              background-color: #fff3cd;
              border: 1px solid #ffeaa7;
              color: #856404; 
              padding: 15px;
              border-radius: 5px;
              margin: 20px 0;
          }
          .security-notice {
              background-color: #d1ecf1;
              border: 1px solid #bee5eb;
              color: #0c5460;
              padding: 15px;
              border-radius: 5px;
              margin: 20px 0;
          }
          .icon {
              font-size: 18px;
              margin-right: 8px;
          }
          h2 {
              color: #495057;
              margin-top: 0;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>🔐 Password Reset</h1>
          </div>
          <div class="content">
              <h2>Verification Code Required</h2>
              <p>Hello,</p>
              <p>You have requested a password reset for your Ecomly account. To proceed, please use the verification code below:</p>
              
              <div class="otp-container">
                  <span class="otp-label">Your Verification Code</span>
                  <div class="otp-code">${otp}</div>
              </div>
              
              <div class="warning">
                  <span class="icon">⏰</span><strong>Time Sensitive:</strong> This code will expire in 10 minutes for your security.
              </div>
              
              <div class="security-notice">
                  <span class="icon">🔒</span><strong>Security Notice:</strong> If you did not request this password reset, please ignore this email. Your account remains secure and no action is needed.
              </div>
              
              <p><strong>Security Tips:</strong></p>
              <ul>
                  <li>Never share this code with anyone</li>
                  <li>Ecomly will never ask for your code via phone or text</li>
                  <li>Always verify the sender's email address</li>
              </ul>
              
              <p>If you have any concerns, please contact our support team immediately.</p>
              
              <p>Best regards,<br><strong>Ecomly Security Team</strong></p>
          </div>
          <div class="footer">
              <p>This is an automated security message from Ecomly.</p>
              <p>Please do not reply to this email. For support, visit our help center.</p>
              <p>&copy; ${new Date().getFullYear()} Ecomly. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
  `.trim();

  return { textBody, htmlBody };
};

exports.orderConfirmationTemplate = (orderDetails) => {
  const { orderNumber, customerName, items, totalAmount, shippingAddress } = orderDetails;
  
  const textBody = `
Hello ${customerName},

Thank you for your order! Your order #${orderNumber} has been confirmed.

Order Total: $${totalAmount}

Your order will be shipped to:
${shippingAddress}

You will receive a tracking number once your order ships.

Best regards,
Ecomly Team
  `.trim();

  const htmlBody = `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation - Ecomly</title>
      <style>
          body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              margin: 0; 
              padding: 0; 
              background-color: #f5f5f5; 
          }
          .container { 
              max-width: 600px; 
              margin: 20px auto; 
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header { 
              background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
              color: white; 
              padding: 30px 20px; 
              text-align: center; 
          }
          .content { padding: 40px 30px; }
          .order-number {
              background-color: #f8f9fa;
              padding: 15px;
              border-radius: 5px;
              text-align: center;
              font-size: 18px;
              font-weight: bold;
              margin: 20px 0;
          }
          .footer { 
              background-color: #f8f9fa; 
              color: #6c757d; 
              padding: 20px; 
              text-align: center; 
              font-size: 12px;
              border-top: 1px solid #dee2e6;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>✅ Order Confirmed!</h1>
          </div>
          <div class="content">
              <h2>Thank you, ${customerName}!</h2>
              <p>Your order has been successfully placed and confirmed.</p>
              
              <div class="order-number">
                  Order Number: #${orderNumber}
              </div>
              
              <p><strong>Order Total:</strong> $${totalAmount}</p>
              
              <p><strong>Shipping Address:</strong><br>
              ${shippingAddress}</p>
              
              <p>You will receive a tracking number once your order ships.</p>
              
              <p>Best regards,<br><strong>Ecomly Team</strong></p>
          </div>
          <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Ecomly. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
  `.trim();

  return { textBody, htmlBody };
};

exports.welcomeTemplate = (userName) => {
  const textBody = `
Welcome to Ecomly, ${userName}!

Thank you for joining our community. We're excited to have you on board!

Start exploring our amazing products and enjoy exclusive deals.

Best regards,
Ecomly Team
  `.trim();

  const htmlBody = `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Welcome to Ecomly</title>
      <style>
          body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              margin: 0; 
              padding: 0; 
              background-color: #f5f5f5; 
          }
          .container { 
              max-width: 600px; 
              margin: 20px auto; 
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header { 
              background: linear-gradient(135deg, #6f42c1 0%, #e83e8c 100%);
              color: white; 
              padding: 30px 20px; 
              text-align: center; 
          }
          .content { padding: 40px 30px; }
          .cta-button {
              display: inline-block;
              background-color: #007bff;
              color: white;
              padding: 12px 25px;
              text-decoration: none;
              border-radius: 5px;
              margin: 20px 0;
          }
          .footer { 
              background-color: #f8f9fa; 
              color: #6c757d; 
              padding: 20px; 
              text-align: center; 
              font-size: 12px;
              border-top: 1px solid #dee2e6;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>🎉 Welcome to Ecomly!</h1>
          </div>
          <div class="content">
              <h2>Hello ${userName}!</h2>
              <p>Thank you for joining our community. We're excited to have you on board!</p>
              
              <p>Start exploring our amazing products and enjoy exclusive deals.</p>
              
              <div style="text-align: center;">
                  <a href="#" class="cta-button">Start Shopping</a>
              </div>
              
              <p>Best regards,<br><strong>Ecomly Team</strong></p>
          </div>
          <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Ecomly. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
  `.trim();

  return { textBody, htmlBody };
};