const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
  findUsersDB: [
    // {
    //   id: 1,
    //   photoUrl:
    //     "https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg",
    //   name: "Дмитрий",
    //   status: "Ура!!!",
    //   location: {
    //     country: "Россия",
    //     city: "Москва"
    //   },
    //   followed: false
    // },
    // {
    //   id: 2,
    //   photoUrl:
    //     "https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png",
    //   name: "Коля",
    //   status: "Дима мой друг",
    //   location: {
    //     country: "Россия",
    //     city: "Питер"
    //   },
    //   followed: false
    // },
    // {
    //   id: 3,
    //   photoUrl:
    //     "https://icon-library.net/images/icon-avatars/icon-avatars-12.jpg",
    //   name: "Ольга",
    //   status: "Маникюр за 100 рублей, звоните",
    //   location: {
    //     country: "Украина",
    //     city: "Киев"
    //   },
    //   followed: true
    // },
    // {
    //   id: 4,
    //   photoUrl:
    //     "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png",
    //   name: "Петя",
    //   status: "Беру деньги в долг. Много",
    //   location: {
    //     country: "Россия",
    //     city: "Казань"
    //   },
    //   followed: false
    // },
    // {
    //   id: 5,
    //   photoUrl:
    //     "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png",
    //   name: "Гена",
    //   status: "Лимон – лимонад, блаблабла",
    //   location: {
    //     country: "Беларусь",
    //     city: "Минск"
    //   },
    //   followed: false
    // }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        findUsersDB: state.findUsersDB.map(user => {
          if (user.id === action.userId) return { ...user, followed: true };
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        findUsersDB: state.findUsersDB.map(user => {
          if (user.id === action.userId) return { ...user, followed: false };
          return user;
        })
      };
    case SET_USERS:
      return {
        ...state,
        findUsersDB: [...state.findUsersDB, ...action.users]
      };
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });

export default usersReducer;
