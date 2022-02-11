const mongoose = require("mongoose")

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log(`connected to database`.cyan.underline)
  } catch (err) {
    console.log(`cannot connect to database ${err}`.red.bold)
    process.exit(1)
  }
}

module.exports = connectDb
