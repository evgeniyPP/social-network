import Posts from "./Posts";
import {
  addPostActionCreator
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    posts: state.profilePage.postsDB
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: newPostText => {
      dispatch(addPostActionCreator(newPostText));
    }
  };
};

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

export default PostsContainer;
