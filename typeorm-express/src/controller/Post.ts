import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Post } from "../entity/Post";

/**
 * Loads all posts from the database.
 */
export async function get(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const postRepository = getManager().getRepository(Post);

  // load a post by a given post id
  const posts = await postRepository.find();

  // return loaded posts
  response.send(posts);
}

/**
 * Loads post by a given id.
 */
export async function getById(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const postRepository = getManager().getRepository(Post);

  // load a post by a given post id
  const post = await postRepository.findOneById(request.params.id);

  // if post was not found return 404 to the client
  if (!post) {
    response.status(404);
    response.end();
    return;
  }

  // return loaded post
  response.send(post);
}

/**
 * Saves given post.
 */
export async function save(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const postRepository = getManager().getRepository(Post);

  // create a real post object from post json object sent over http
  const newPost = postRepository.create(request.body);

  // save received post
  await postRepository.save(newPost);

  // return saved post back
  response.send(newPost);
}
