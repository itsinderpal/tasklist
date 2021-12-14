const mongoose = require('mongoose');

module.exports.connection = mongoose.connect(process.env.ATLAS_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB...");
})
