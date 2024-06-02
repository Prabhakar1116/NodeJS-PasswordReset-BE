Password Reset API

This documentation provides details about the Password-Reset API, implemented using Node.js and Express. This API allows you to change the password for your login id by sending a reset link for your mail.

note: I am currently using  since running it in my system, but after deployment we need to use the deployed link along with the correct endpoints

Base URL: http://localhost:5000/api/user

Packages installed:

Express: npm install express

Cors: npm install cors

Dotenv: npm install dotenv

Bcryptjs: npm install bcryptjs

Mongoose: npm install mongoose

Nodemailer: npm install nodemailer

Randomstring: npm install randomstring

Nodemon: npm install nodemon



1. POST Register/Existing User

http://localhost:5000/api/user/register

Description: Register a new user or check if the user already exists.

URL: /register

Method: POST

Example: http://localhost:5000/api/user/register



2. POST Login User

Description: Login an existing user.

URL: /login

Method: POST

Example: http://localhost:5000/api/user/login


3. POST Request Password Reset


Description: Send a password reset link to the user's email.

URL: /forgotPassword

Method: POST

Example: http://localhost:5000/api/user/forgotPassword


4. PUT Reset Password

Description: Reset the user's password using the provided reset token.

URL: /resetPassword

Method: PUT

Example: http://localhost:5000/api/user/resetPassword


5. GET All Users

Description: Retrieve all users from the database.

URL: /all-users

Method: GET

Example: http://localhost:5000/api/user/all-users

You can access the Postman documentation with this link: https://documenter.getpostman.com/view/35182338/2sA3QwcVPF