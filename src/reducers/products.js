var initialState = [
  {
    "id": 1,
    "name": "iphone xs max",
    "price": 500,
    "status": true
  },
  {
    "name": "samsung",
    "price": "700",
    "status": "true",
    "id": 2
  },
  {
    "id": 3,
    "name": "quang",
    "price": "12",
    "status": true
  },
  {
    "id": 4,
    "name": "iphone xx",
    "price": "123",
    "status": true
  }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
};

export default products;