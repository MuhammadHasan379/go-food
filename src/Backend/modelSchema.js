const mongoose = require('mongoose');

// Define a schema for the food items
const foodSchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  options: {
    type: [
      {
        size: {
          type: String,
          enum: ['small', 'regular', 'large', 'half', 'full'], // Define the allowed sizes
          required: true,
        },
        price: String, // You can specify the price for each size
      },
    ],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Create a Mongoose model based on the schema
const Food = mongoose.model('Food', foodSchema);




const UserSchema = new mongoose.Schema({
    email: {
        type: 'string',
        required: [true, 'please provide an Email'],
        unique: [true, 'Email exists']
    },
    password: {
        type: 'string',
        required: [true, 'please provide a password'],
        unique: 'false'
    }
})

const Users =  mongoose.model("NewUsers", UserSchema)


module.exports = {Food, Users};
