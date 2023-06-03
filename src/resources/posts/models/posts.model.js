import mongoose from 'mongoose'

// const userSchema1 = new mongoose.Schema( {
//   name: String,
//   surname: String,
//   age: Number
// } )

const postSchema = new mongoose.Schema( {
  titulo: {
    type: String,
    required: true
  },
  cuerpo: {
    type: String,
    required: true
  },
  foto: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  }
}, { versionKey: false } )

export const PostsModel = new mongoose.model( 'Post', postSchema )