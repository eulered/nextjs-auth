import mongoose, { mongo } from 'mongoose'

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!)
    const connection = mongoose.connection

    connection.on('connected', () => {
      console.log('Connected Succesfully')
    })

    connection.on('error', (err) => {
      console.log(
        'A connection error occured. Please make sure MongoDB is running. ' +
          err
      )
      process.exit()
    })
  } catch (error) {
    console.log('An error occured.')
    console.log(error)
  }
}
