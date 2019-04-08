module.exports = {
  _id: {
    type: "number",
    validation: undefined,
    test: "xxx"
  },
  username: {
    type: "string",
    unique: true,
    lowercase: true,
    min: [4, 'Too few characters'],
    max: [24, 'Too many characters'],
    required: 'Please provide a username',
    validation: 'user_username'
  },
  flags: [
    {
      type: "string",
      lowercase: true,
      validation: 'user_flags',
      test: "xxx"
    }
  ],
  details: {
    _id: false,
    firstname: {
      type: "string",
      max: [64, 'Too many characters'],
      validation: 'user_firstname'
    },
    lastname: {
      type: "string",
      max: [64, 'Too many characters'],
      validation: 'user_lastname'
    }
  }
}

// n * n * n * n * n * n * n * n * n * n * n * n * n * n * n * n * n * n *n * n * n