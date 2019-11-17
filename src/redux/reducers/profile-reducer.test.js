import profileReducer, {
  addPostActionCreator,
  deletePost
} from "./profile-reducer";

// initial data
let action = addPostActionCreator("Hello World");
const state = {
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
};

// First case
const newState = profileReducer(state, action);

it("length of post should be incremented", () => {
  expect(newState.postsDB.length).toBe(6);
});

it("message should be equal 'Hello World'", () => {
  expect(newState.postsDB[5].message).toBe("Hello World");
});

it("likes counter should be equal 0", () => {
  expect(newState.postsDB[5].likes).toBe(0);
});

// New features tests (TDD)
it("deletePost should delete post!", () => {
  const oldLength = state.postsDB.length;
  let action = deletePost(1);
  const newState = profileReducer(state, action);
  expect(newState.postsDB.length).toBe(oldLength - 1);
});
