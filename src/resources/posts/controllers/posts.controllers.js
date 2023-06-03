import { awaitCatcher } from 'await-catcher'
import { PostsModel } from '../models/posts.model.js'

export async function createPosts( req, res ) {
  const body = req.body

  const [ postsCreated, error ] = await awaitCatcher( PostsModel.create( body ) )
  if ( error ) {
    return res.status( 400 ).json( { status: "error", msg: error.message } )
  }
  return res.status( 201 ).json( postsCreated )

}

export async function getPosts( req, res ) {
  const [ posts, error ] = await awaitCatcher( PostsModel.find() )
  if ( error ) {
    return res.status( 400 ).json( { status: "error", msg: error.message } )
  }
  return res.status( 200 ).json( posts )
}

export async function getPostsById( req, res ) {
  const id = req.params.id
  const [ posts, error ] = await awaitCatcher( PostsModel.findById( id ) )
  if ( !posts || error ) {
    return res.status( 404 ).json( { status: "error", msg: "Post no encontrado" } )
  }
  console.log( posts )
  return res.status( 200 ).json( posts )
}

export async function updatePostsById( req, res ) {
  const id = req.params.id
  const body = req.body
  const [ postsUpdated, error ] = await awaitCatcher( PostsModel.findByIdAndUpdate( id, body, { new: true } ) )
  if ( error ) {
    return res.status( 404 ).json( { status: "error", msg: "Post no encontrado" } )
  }
  return res.status( 200 ).json( postsUpdated )
}

export async function deletePostsById( req, res ) {
  const id = req.params.id
  const [ postsDeleted, error ] = await awaitCatcher( PostsModel.findByIdAndDelete( id ) )
  if ( error ) {
    return res.status( 404 ).json( { status: "error", msg: "Post no encontrado" } )
  }
  return res.status( 200 ).json( postsDeleted )
}