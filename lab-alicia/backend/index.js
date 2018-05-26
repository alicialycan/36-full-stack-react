require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.MONGODB_URI);
/* 
const Cat = mongoose.model('Cat', { name: String });
const kitty = new Cat({name: 'Zildjian'});
kitty.save().then(() => console.log('meow'));
*/

app.use(cors());

const Cat = mongoose.model('Cat', {name: String});

app.get('/api/cat', (req, res) => {
  Cat.find().then(cats => res.send(cats));
});

applicationCache.post('/api/cat', express.json(), express.urlencoded({extended:true}),(req, res) => {

  Cat.create(req.body).then(cat => res.send(cat));

});

// let categoryId = uuidv4();

// app.get('*', (req, res) => {
//   res.send([
//     {
//       categories: [
//         {
//           id: categoryId,
//           isEditing: false,
//           timestamp: `${new Date()}`,
//           name: 'Sports',
//           budget: '500'
//         }
//       ]
//     }
//   ]);
// });

app.listen(PORT, () => {
  console.log('http://localhost:3000');
});