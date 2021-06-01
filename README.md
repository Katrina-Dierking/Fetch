### Pulling Data from Fetch API 


|               |               |
| ------------- | ------------- |
|Technology     | <img src="https://img.shields.io/badge/FE-React-purple.svg?style=flat-plastic" alt="frontend"> <img src="https://img.shields.io/badge/FE-Axios-pink.svg?style=flat-plastic" alt="frontend"> <img src="https://img.shields.io/badge/FE-API-blue.svg?style=flat-plastic" alt="frontend"> 

![Coffee Divider](https://blog.hertimetocode.com/wp-content/uploads/2021/04/coffee-pulse.png)

### React Dependencies: 
* Axios
* React-router-dom (Router, Route, Link)
* Styled-components

### Pages:
* Home page includes the list items in card-form.
* About page includes details of the author.
* List Text page includes the list items in text-form.

### Features:
* This Fetch API site shows the items in card-form as well as text-form. 
* It also consists of a toggle dark-mode button. 
* Each page consists of a Layout that holds the ToggleBar, Search Bar, and Footer. 
* Navigation Bar

### Future Features: 
* Functioning Search Bar.
* CRUD operations to add, update, and delete list items.

![Coffee Divider](https://blog.hertimetocode.com/wp-content/uploads/2021/04/coffee-pulse.png)

### How the cards/lists were created: 
1. Axios get request to the API to pull in the array of data objects.
2. Filter method to exclude all items that had an empty string or null in the name. 
3. Map method over the filtered items to create the cards and lists. 
