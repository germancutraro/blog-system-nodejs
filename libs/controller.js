module.exports = app => {

  // Imports
  const Post = require('../models/Post');

  app.get('/', (req, res) => {
    Post.find({}).then(posts => {
      res.render('index', {posts});
    })
  })

  app.get('/write', (req, res) => res.render('write'));

  app.get('/article/:title', (req, res) => {
    let title = req.params.title;
    Post.findOne({title: title}).then(post => {
      res.render('article', {post});
    }).catch(err => console.log('Error getting the article'));

  });

app.post('/create', (req, res) => {

    if (req.files) {
        let file = req.files.image;
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            let post = new Post({ title: req.body.title, image: req.files.image.name, content: req.body.content, creator: req.body.name })
            file.mv(`./public/assets/uploads/${file.name}`, err => console.log(err ? 'Error on save the image!' : 'Image Uploaded!'));
            post.save().then(() => {
              console.log('Post Saved!');
              res.redirect('/');
            }).catch(err => console.log(err));
        } // Finish mimetype statement
    } else {
      console.log('You must Upload a image-post!');
      res.redirect('/article');
    }
}); // Finish all

} // Finish module
