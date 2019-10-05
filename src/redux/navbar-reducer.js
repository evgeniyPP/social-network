const initialState = {
  friendsDB: [
    {
      id: 1,
      name: "Андрей"
    },
    {
      id: 2,
      name: "Влад"
    },
    {
      id: 3,
      name: "Катя"
    }
  ]
};

const navbarReducer = (state = initialState, action) => {
  return state;
};

export default navbarReducer;
