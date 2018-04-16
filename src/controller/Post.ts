import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Post } from "../entity/Post";

export async function get(request: Request, response: Response) {
  const postRepository = getManager().getRepository(Post);
  const posts = await postRepository.find();

  response.send(posts);
}

export async function getById(request: Request, response: Response) {
  const postRepository = getManager().getRepository(Post);
  const post = await postRepository.findOneById(request.params.id);

  if (!post) {
    response.status(404);
    response.end();
    return;
  }

  response.send(post);
}

export async function save(request: Request, response: Response) {
  const postRepository = getManager().getRepository(Post);
  const newPost = postRepository.create(request.body);

  await postRepository.save(newPost);

  response.send(newPost);
}
