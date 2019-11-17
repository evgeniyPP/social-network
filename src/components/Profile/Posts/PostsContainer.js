import { connect } from "react-redux";
import Posts from "./Posts";
import { addPostActionCreator } from "../../../redux/reducers/profile-reducer";
import { selectPostsDB } from "../../../utils/selectors";

const mapStateToProps = state => {
  return {
    posts: selectPostsDB(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: newPostText => {
      dispatch(addPostActionCreator(newPostText));
    }
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
