admin panel for a company that provides bicycle booking services.

### The functionality is quite simple:
  user can add a bicycle with fields (ID, name, type, color, wheel size, price, description)
	added bicycle is displayed on the list of bicycles 
	user can change the status of the bicycle (available/busy/unavailable)  
	user can remove a bicycle 
	user can check stats on bicycles (number of bicycles, number of available bicycles, number of booked bicycles, average price of a bicycle)
 
### GENERAL REQUIREMENTS:
	Create form data validation:
  	All text fields minimum length should be 5 characters
  	All number fields should accept only the number
  	All fields are required
  	All Bike IDs should be unique

### Instructions describing how one can start it in development mode

Clon the repository

Install packages
```shell
npm i
```

### Setup MongoDB URL 

MONGO_URL in '.env' 

or

in src/server/main.js:
```js
const MONGO_URL =
```

### Start the app
```shell
npm run dev
```
