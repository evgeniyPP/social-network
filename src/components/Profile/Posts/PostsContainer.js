import Posts from "./Posts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    posts: state.profilePage.postsDB,
    newPostText: state.profilePage.newPostText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: text => {
      dispatch(updateNewPostTextActionCreator(text));
    }
  };
};

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

export default PostsContainer;
