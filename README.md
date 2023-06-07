# delivery-food-service
- [DEMOLINK](https://vladislav-burhovetskiy.github.io/delivery-food-service/)

#screen of the project pages:
- [MainPage](https://drive.google.com/file/d/1tHSlxY_w7LnK2u329O7omerqYrp_2zkN/view?usp=share_link)
- [CartPage](https://drive.google.com/file/d/1tTWapV0C6_RF8NoIOYmAv2qUenF3C4Zh/view?usp=share_link)
- [SuccessPage](https://drive.google.com/file/d/1N3FuKhd2WSpciymED_sDJr0YaBDRbEEz/view?usp=share_link)

# How to run the application
In the root of the project run:
1. git clone https://github.com/Vladislav-Burhovetskiy/delivery-food-service.git
2. npm i

Also, open new terminal & navigate to the server folder and install modules there. 
You can do that by running: 
3. $ cd server 
4. $ npm install

Afterwards, open one more terminal & navigate to the server folder $ cd server ,
for start the server from the server folder by running:
6. $ node index.js or npx nodemon index.js

And to start the app in the development mode.
Go back to the root of the project directory and run:
7. npm run dev

# For using server side also you need MongoDB:
In MongoDB you need to have created "food-odering" DB with 3 collections: 
- products;
- categories;
- orders;

Be sure standard PORT for MongoDB "mongodb://localhost:27017";
For creating categories and products run:
- Open new terminal & change directory: $ cd server 
- Run command: $ node seed.js

If you run server before with command $ node index.js you must to rerun server:
- open terminal server and stop server ctrl + c
- run the server again $ node index.js
If you run the server with command npx nodemon index.js you dont need rerun server!

Also i use Vite with client-side PORT: 5173 & server-side PORT:8080
