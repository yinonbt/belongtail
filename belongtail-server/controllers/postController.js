import Posts from "../db/posts";
import moment from "moment";
class postsController {
  static getPosts(req, res, next) {
    return res.json({
      message: "List of all posts",
      posts: Posts
    });
  }
static createPost(req, res, next) {
    const newId = parseInt(Posts.length) + 1;
    console.log('request body: ', req.body);
    const { title, body } = req.body;
    const newPost = {
      id: newId,
      title,
      body,
      created_at: moment.utc().format()
    };
    Posts.push(newPost);
    return res.status(200).json({
      message: "created a new post"
    });
  }
static getOnePost(req, res, next) {
    const { id } = req.params;
    const post = Posts.find(onePost => onePost.id == id);
    if (post) {
      return res.status(200).json({
        message: "one post found",
        onePost: post
      });
    } else {
      res.status(400).json({
        error: "no post found with that id"
      });
    }
  }
  static updatePost(req, res, next) {
    const { id } = req.params;
    const post = Posts.find(updatePost => updatePost.id == id);
    if (post) {
      (post.title = req.body.title), (post.body = req.body.body);
      return res.status(201).json({
        message: "successfully updated",
        updatePost: post
      });
    } else {
      res.status(400).json({
        error: "post cannot be updated"
      });
    }
  }
  static deletePost(req, res, next) {
    let { id } = req.params;
    const findPost = Posts.find(post => {
      return post.id == id;
    });
    if (findPost) {
      const newPosts = Posts.filter(post => {
        return post !== findPost;
      });
      res.status(200).json({
        message: "post successfully deleted",
        Posts: newPosts
      });
    } else {
      res.status(400).json({
        error: "could not delete a post"
      });
    }
  }
}
export default postsController;