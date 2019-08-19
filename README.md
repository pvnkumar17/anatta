# Anatta Product Description page

There are few things to do to run this project for development purpose, please complete step1 and step2 before running this project in your local system.

#Step1: To insatll dependencies.

- Install node and npm if you haven't installed them before.
- Open terminal and change the working directory to anatta.
- run `npm install`

#Step2: To start local server and open page in the browser.

- Open terminal and change the working directory to anatta.
- just run `npm start`
- This should show Project is running at `http://localhost:9000/`
- Navigate to browser and open `http://localhost:9000/`
- change the port number in package.json, in case if you are using `9000` for anything else


#  Rest API is sevred from https://anatta-demo-app.herokuapp.com/ and you can do api calls like below:

- GET - `https://anatta-demo-app.herokuapp.com/api/products/` - gets all the products
- GET - `https://anatta-demo-app.herokuapp.com/api/products/{id}` - gets the details specific product whose id is equal to given id
- DELETE - `https://anatta-demo-app.herokuapp.com/api/products/{id}/image` - gets images of the product