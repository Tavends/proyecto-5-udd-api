import { Router } from 'express'
import { createPosts, deletePostsById, getPostsById, getPosts, updatePostsById } from '../controllers/posts.controllers.js'

const postsRouter = Router()
const baseURI = '/posts'

postsRouter.post( baseURI, createPosts )
postsRouter.get( baseURI, getPosts )
postsRouter.get( `${ baseURI }/:id`, getPostsById )
postsRouter.patch( `${ baseURI }/:id`, updatePostsById )
postsRouter.delete( `${ baseURI }/:id`, deletePostsById )

export default postsRouter