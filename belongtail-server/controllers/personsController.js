import PersonsContainer from "../db/persons";
import moment from "moment";
class postsController {
  static getPersons(req, res, next) {
    return res.send(PersonsContainer.persons);
  }

  static createPerson(req, res, next) {
    const newId = parseInt(PersonsContainer.lastId) + 1;
    PersonsContainer.lastId = newId;
    console.log("request body: ", req.body);
    const { title, body } = req.body;
    const newPerson = {
      id: newId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      picUrl: req.body.picUrl,
      date: moment.utc().format()
    };
    PersonsContainer.persons.push(newPerson);
    return res.status(200).send(newPerson);
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
  static updatePerson(req, res, next) {
    const { id } = req.params;
    const person = PersonsContainer.persons.find(
      updatePerson => updatePerson.id == id
    );
    if (person) {
      (person.firstName = req.body.firstName),
        (person.lastName = req.body.lastName),
        (person.gender = req.body.gender),
        (person.picUrl = req.body.picUrl);
      return res.status(201).send(person);
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
