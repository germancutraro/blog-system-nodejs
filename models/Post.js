const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// get the full date
function date () {
  let actualDate = new Date();
  // Individual
  let day = actualDate.getDate();
  let month = actualDate.getMonth() + 1;
  let year = actualDate.getFullYear();
  if (day < 10)
    day = `0${actualDate.getDate()}`;
  if (month < 10)
    month = `0${actualDate.getMonth() + 1}`;

  let finalDate = `${day}-${month}-${year}`;

  return finalDate;
}

const postSchema = new Schema({
  title: {type: String, trim: true, required: true},
  image: {type: String, required: true, unique: false, default: './public/assets/uploads/example.png'},
  content: {type: String, required: true},
  creator: {type: String, required: true},
  time: {type: String, default: date()}
})

module.exports = mongoose.model('articles', postSchema);
