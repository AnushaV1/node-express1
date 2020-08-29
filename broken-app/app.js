const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());
let output = [];

app.post('/',  async (req, res, next) => {
  try {
    let results = req.body.developers.map(async (developer) => {
      return await axios.get(`https://api.github.com/users/${developer}`);
    });
    
     await Promise.all(results)
     .then(response => response.forEach(developer => output.push({bio:developer.data.bio, name:developer.data.name})))
     .catch(err => console.log(err))
     return res.json(output);
    } catch(err) {
    next(err);
  }
});

module.exports = app










