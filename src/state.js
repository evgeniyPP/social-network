const state = {
  profilePage: {
    postsDB: [
      {
        id: 1,
        message: "Привет, мир",
        likes: 120
      },
      {
        id: 2,
        message: "Я пока не решил, что буду сюда писать. Может позже",
        likes: 1
      },
      {
        id: 3,
        message: "Начал учить хтмл. сложна",
        likes: 0
      },
      {
        id: 4,
        message: "Hello, how are you?",
        likes: 24
      },
      {
        id: 5,
        message: "Чтааа???",
        likes: 512
      }
    ]
  },

  dialogsPage: {
    usersDB: [
      {
        name: "Андрей",
        id: 1,
        messages: [
          { his: "Привет", mine: "Эй, привет, как дела" },
          {
            his: "Хорошо, ты куда пропал",
            mine: "Андрюх, замотался блин прости"
          },
          { his: "Да ладно, ничего", mine: "" },
          { his: "Норм всё", mine: "" }
        ]
      },
      {
        name: "Вася",
        id: 2,
        messages: [{ his: "Привет", mine: "Пока" }, { his: "Аучь", mine: "" }]
      }
    ]
  },

  navbar: {
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
  }
};

export default state;
