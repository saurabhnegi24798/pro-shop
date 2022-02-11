const bcrypt = require("bcryptjs")

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234567", 10),
  },
  {
    name: "Jone Doe",
    email: "Jone@example.com",
    password: bcrypt.hashSync("1234567", 10),
  },
  {
    name: "Jane Doe",
    email: "Jane@example.com",
    password: bcrypt.hashSync("1234567", 10),
  },
]

module.exports = users
