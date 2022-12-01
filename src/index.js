import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const recipes = [
  {
      "recipe": {
          "label": "Chicken Breasts With Maple-Whiskey Glaze",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/01f/01f34f555957136c8ba7120adccdebc7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLWVhc3QtMSJHMEUCIQDfb%2F1JfnNCgkrVKuJFWRKZpRygCwDkEEcSbYwvZG4JwwIgEGpdodJ1A5omqi%2FrODDqGwcrwxj73brkVYXc9HV4v9sqzAQIaxAAGgwxODcwMTcxNTA5ODYiDBPULqYAc%2B1F%2FEnaPiqpBO70QL4wclQ6wOTut6MyFqtSCTO2k%2BmKi%2FdnCJv14IxEFdlz8cC%2FCqGmWwGo0spH%2F%2BgvEOQmLrzJRVZvv2XlM7CgemHcmT2dc1ciit2fz1WGIVxbm2xSuV26XkJ4c6LiMMc8nrGbfOjXXZKMyyYzEPpL1e8hmbxAYHu7%2FZhUBsI8%2B98iyhfZ6k3cIui%2BJNSotr2jaKI%2FmH4O%2FTAPSnQAxDubywds59rYxktAl7AH0BPv1K61bjozDuBV77bXTdPsxMy2bpgqsI2dCwZMLAWhEiXDG%2BbwtKfRRIaoZEwH3liZHs3YnD6UAuh3nRMuzwvm3EXi25dIUwHwbhGrkGQfDBaWHesj%2FUG3qLJtMGZxQ3kLUaow9cygwIOT%2F%2F%2BA8uIoD%2FZN%2BcUGr3f4QZfRB2z96%2F5mJnfRpZ5w7QiEI4WXGvTbhdOOJGLAhmxWQr9AAPq9oE0AvT9Mcs786ICUTRWexMg8uTDvX0qlFkyiH4mEx7Mfli89Kl35zOGe%2F%2FeuxG3WFyl%2BRcr3uwTWpeTc%2BH8E1EGPfZbut5eupbo1xxI8wAwTZ5Y4tKliHERQU1NYO0gtR2RhveMKxOomEWJbokIlT%2BEt%2FLs4Gnw%2F3NPhA5ynlHWU1ivVQIrjI%2Bfi%2FFfSL9RGL1y0AsFn%2FCOgBHAltyL23Nfs7qHbFbWMzVqaDfKWSW7oz%2FSjCjKzDL02lrqFM%2Bfk%2FE3vsQx5ARKzS6GNfSCD9M%2BK4zt0zWQI0oQw7o%2FmmwY6qQFeATSzLGzC3Yan71U1OG9eV6EE8bCLDJXWdDdw7t01s%2FBVkSklCirZB68GhSypuJTDF2kjUD%2FhGjxetbxnMck5WGpUHgzN4OV1Mq7XGOYEFjw5I3CbBk9%2FnVY4VrZI1GbnwaeRgoSBdcJDAAjFdLST7rRbqH3%2F2qTdhsjY8RWWzHJxkX%2B5p2TVo6cCWPbyOU7XGD2ZiRcCC8hZvqwWpnP3TJS8y6UajCMU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221120T032737Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJHKGFBU7%2F20221120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cdaa43dbb83f1244596bdc802115515ee0e927a93d2689c1602fb4b6207bf4d1",
          "url": "http://www.food.com/recipe/chicken-breasts-with-maple-whiskey-glaze-386642",
          "ingredientLines": [
              "1 teaspoon dried thyme",
              "2 chicken breast halves, boneless, skinless",
              "1⁄2 cup pure maple syrup",
              "3 tablespoons whiskey (I use Jack Daniel's)",
              "1 tablespoon vegetable oil"
          ],
          "calories": 939.5499999982374,
          "cuisineType": [
              "american"
          ],
          "mealType": [
              "lunch/dinner"
          ]
      },
      "_links": {
          "self": {
              "href": "https://api.edamam.com/api/recipes/v2/3e126ee6758daf47def9345bdca92854?type=public&app_id=e9171c06&app_key=01bacb1ccf1b068a991794a4d1b81907",
              "title": "Self"
          }
      },
      "id": 1
  },
  {
      "recipe": {
          "label": "Sweet n' Spicy Chicken Bowls",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/295/295c8941e253540ca6622c32ed18a9e3.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLWVhc3QtMSJHMEUCIQDfb%2F1JfnNCgkrVKuJFWRKZpRygCwDkEEcSbYwvZG4JwwIgEGpdodJ1A5omqi%2FrODDqGwcrwxj73brkVYXc9HV4v9sqzAQIaxAAGgwxODcwMTcxNTA5ODYiDBPULqYAc%2B1F%2FEnaPiqpBO70QL4wclQ6wOTut6MyFqtSCTO2k%2BmKi%2FdnCJv14IxEFdlz8cC%2FCqGmWwGo0spH%2F%2BgvEOQmLrzJRVZvv2XlM7CgemHcmT2dc1ciit2fz1WGIVxbm2xSuV26XkJ4c6LiMMc8nrGbfOjXXZKMyyYzEPpL1e8hmbxAYHu7%2FZhUBsI8%2B98iyhfZ6k3cIui%2BJNSotr2jaKI%2FmH4O%2FTAPSnQAxDubywds59rYxktAl7AH0BPv1K61bjozDuBV77bXTdPsxMy2bpgqsI2dCwZMLAWhEiXDG%2BbwtKfRRIaoZEwH3liZHs3YnD6UAuh3nRMuzwvm3EXi25dIUwHwbhGrkGQfDBaWHesj%2FUG3qLJtMGZxQ3kLUaow9cygwIOT%2F%2F%2BA8uIoD%2FZN%2BcUGr3f4QZfRB2z96%2F5mJnfRpZ5w7QiEI4WXGvTbhdOOJGLAhmxWQr9AAPq9oE0AvT9Mcs786ICUTRWexMg8uTDvX0qlFkyiH4mEx7Mfli89Kl35zOGe%2F%2FeuxG3WFyl%2BRcr3uwTWpeTc%2BH8E1EGPfZbut5eupbo1xxI8wAwTZ5Y4tKliHERQU1NYO0gtR2RhveMKxOomEWJbokIlT%2BEt%2FLs4Gnw%2F3NPhA5ynlHWU1ivVQIrjI%2Bfi%2FFfSL9RGL1y0AsFn%2FCOgBHAltyL23Nfs7qHbFbWMzVqaDfKWSW7oz%2FSjCjKzDL02lrqFM%2Bfk%2FE3vsQx5ARKzS6GNfSCD9M%2BK4zt0zWQI0oQw7o%2FmmwY6qQFeATSzLGzC3Yan71U1OG9eV6EE8bCLDJXWdDdw7t01s%2FBVkSklCirZB68GhSypuJTDF2kjUD%2FhGjxetbxnMck5WGpUHgzN4OV1Mq7XGOYEFjw5I3CbBk9%2FnVY4VrZI1GbnwaeRgoSBdcJDAAjFdLST7rRbqH3%2F2qTdhsjY8RWWzHJxkX%2B5p2TVo6cCWPbyOU7XGD2ZiRcCC8hZvqwWpnP3TJS8y6UajCMU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221120T032737Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJHKGFBU7%2F20221120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e5a2ed6fe63fab8989b2513123ba57f5ba7ccf0c944a1db6ec58b2fbf955cdd0",
          "url": "http://www.budgetbytes.com/2015/05/sweet-n-spicy-chicken-bowls/",
          "ingredientLines": [
              "* 1 tsp mild chili powder $0.10",
              "* 1/2 tsp cumin $0.05",
              "* 1/4 tsp garlic powder $0.03",
              "* 1/4 tsp smoked paprika"
          ],
          "calories": 15.73825,
          "cuisineType": [
              "south american"
          ],
          "mealType": [
              "brunch",
              "lunch/dinner"
          ]
      },
      "_links": {
          "self": {
              "href": "https://api.edamam.com/api/recipes/v2/7ec1a0ee923e28dc9e933a5d09ee43c8?type=public&app_id=e9171c06&app_key=01bacb1ccf1b068a991794a4d1b81907",
              "title": "Self"
          }
      },
      "id": 2
  },
  {
      "recipe": {
          "label": "Creamy Potato Soup",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/564/5648dc3132160f07414fb225f45c1d09.gif?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLWVhc3QtMSJHMEUCIQDfb%2F1JfnNCgkrVKuJFWRKZpRygCwDkEEcSbYwvZG4JwwIgEGpdodJ1A5omqi%2FrODDqGwcrwxj73brkVYXc9HV4v9sqzAQIaxAAGgwxODcwMTcxNTA5ODYiDBPULqYAc%2B1F%2FEnaPiqpBO70QL4wclQ6wOTut6MyFqtSCTO2k%2BmKi%2FdnCJv14IxEFdlz8cC%2FCqGmWwGo0spH%2F%2BgvEOQmLrzJRVZvv2XlM7CgemHcmT2dc1ciit2fz1WGIVxbm2xSuV26XkJ4c6LiMMc8nrGbfOjXXZKMyyYzEPpL1e8hmbxAYHu7%2FZhUBsI8%2B98iyhfZ6k3cIui%2BJNSotr2jaKI%2FmH4O%2FTAPSnQAxDubywds59rYxktAl7AH0BPv1K61bjozDuBV77bXTdPsxMy2bpgqsI2dCwZMLAWhEiXDG%2BbwtKfRRIaoZEwH3liZHs3YnD6UAuh3nRMuzwvm3EXi25dIUwHwbhGrkGQfDBaWHesj%2FUG3qLJtMGZxQ3kLUaow9cygwIOT%2F%2F%2BA8uIoD%2FZN%2BcUGr3f4QZfRB2z96%2F5mJnfRpZ5w7QiEI4WXGvTbhdOOJGLAhmxWQr9AAPq9oE0AvT9Mcs786ICUTRWexMg8uTDvX0qlFkyiH4mEx7Mfli89Kl35zOGe%2F%2FeuxG3WFyl%2BRcr3uwTWpeTc%2BH8E1EGPfZbut5eupbo1xxI8wAwTZ5Y4tKliHERQU1NYO0gtR2RhveMKxOomEWJbokIlT%2BEt%2FLs4Gnw%2F3NPhA5ynlHWU1ivVQIrjI%2Bfi%2FFfSL9RGL1y0AsFn%2FCOgBHAltyL23Nfs7qHbFbWMzVqaDfKWSW7oz%2FSjCjKzDL02lrqFM%2Bfk%2FE3vsQx5ARKzS6GNfSCD9M%2BK4zt0zWQI0oQw7o%2FmmwY6qQFeATSzLGzC3Yan71U1OG9eV6EE8bCLDJXWdDdw7t01s%2FBVkSklCirZB68GhSypuJTDF2kjUD%2FhGjxetbxnMck5WGpUHgzN4OV1Mq7XGOYEFjw5I3CbBk9%2FnVY4VrZI1GbnwaeRgoSBdcJDAAjFdLST7rRbqH3%2F2qTdhsjY8RWWzHJxkX%2B5p2TVo6cCWPbyOU7XGD2ZiRcCC8hZvqwWpnP3TJS8y6UajCMU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221120T032737Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJHKGFBU7%2F20221120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=30c6c6459bb265ad5dfe34a78f14486996342477366d800c127bd843826ef200",
          "url": "https://tastykitchen.com/recipes/soups/creamy-potato-soup-2/",
          "ingredientLines": [
              "1 quart Chicken Stock",
              "2 teaspoons Dried Thyme",
              "2 pounds Baking Potatoes (5-6 Medium Potatoes)",
              "½ pounds Yellow Onions (1 Medium Onion)",
              "1 cup Heavy Whipping Cream",
              "1 whole Baked Potato"
          ],
          "calories": 2340.476333333333,
          "cuisineType": [
              "american"
          ],
          "mealType": [
              "lunch/dinner"
          ]
      },
      "_links": {
          "self": {
              "href": "https://api.edamam.com/api/recipes/v2/85fab40ee3728a5ed7123c8567444763?type=public&app_id=e9171c06&app_key=01bacb1ccf1b068a991794a4d1b81907",
              "title": "Self"
          }
      },
      "id": 3
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App list={recipes}/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
