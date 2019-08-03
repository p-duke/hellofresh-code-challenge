import React from 'react';
import { shallow, render, mount } from 'enzyme';
import RecipeIngredientsPane from '../components/RecipeIngredientsPane';

const data = {
  "calories": "516 kcal",
  "carbos": "47 g",
  "country": "US",
  "description": "There\u2019s nothing like the simple things in life - the smell of freshly cut grass, sitting outside on a nice sunny day, spending time with friends and family. Well here is a recipe that delivers simple culinary pleasures - some nice fresh fish with a crispy crust, crunchy potato wedges and some delightfully sweet sugar snap peas flavoured with cooling mint. Slip into something comfortable and relax into a delicious dinner!",
  "difficulty": 0,
  "fats": "8 g",
  "favorites": 1,
  "fibers": "",
  "headline": "with Sweet Potato Wedges and Minted Snap Peas",
  "highlighted": true,
  "id": "533143aaff604d567f8b4571",
  "image": "https://d3hvwccx09j84u.cloudfront.net/web/image/533143aaff604d567f8b4571.jpg",
  "incompatibilities": null,
  "ingredients": [
    "375g Sweet Potatoes",
    "1 Tsp Paprika",
    "2 Tbsps Parmesan Cheese",
    "1 Lemon",
    "A Few Sprigs Thyme",
    "25g Panko Breadcrumbs",
    "1 Tbsp Butter",
    "2 Cod Fillets",
    "150g Sugar Snap Peas",
    "A Few Sprigs Mint",
    "75ml Sour Cream"
  ],
  "keywords": [
    ""
  ],
  "name": "Crispy Fish Goujons ",
  "proteins": "43 g",
  "rating": null,
  "ratings": null,
  "thumb": "https://d3hvwccx09j84u.cloudfront.net/thumb/image/533143aaff604d567f8b4571.jpg",
  "time": "PT35M",
  "user": {
    "email": "imp@goreadymade.com",
    "latlng": "51.507351, -0.127758",
    "name": "Tyrion Lannister"
  },
  "weeks": [
    "2014-W20"
  ]
}

it('renders without crashing', () => {
  shallow(<RecipeIngredientsPane data={data} />);
});

it('renders with data props', () => {
  const wrapper = mount(<RecipeIngredientsPane data={data} />);
  expect(wrapper.props().data).toBeDefined();
});

it ('renders a with an Ingredients id', () => {
  const wrapper = shallow(<RecipeIngredientsPane data={data} />);
  expect(wrapper.find('#Ingredients')).toHaveLength(1);
});

it('renders an unordered list of ingredients', () => {
  const wrapper = shallow(<RecipeIngredientsPane data={data} />);
  expect(wrapper.find('ul')).toHaveLength(1);
});
