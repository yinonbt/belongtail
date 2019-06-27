// module.exports = function insert(req, res) {
//     console.log("insert: ", req.body);
// }

// router.post('/', m.checkFieldsPost, async (req, res) => {
//     await post.insertPost(req.body)
//     .then(post => res.status(201).json({
//         message: `The post #${post.id} has been created`,
//         content: post
//     }))
//     .catch(err => res.status(500).json({ message: err.message }))
// })