export const adaptPostsToClient = (serverPosts) => {
  const clientPosts = serverPosts.map((serverPost) => (
    adaptPostToClient(serverPost)
  ));

  return clientPosts;
};

export const adaptPostToClient = (serverPost) => {
  const clientPost = {
    ...serverPost,
  };

  delete clientPost.createdAt;
  delete clientPost.localeId;

  return clientPost;
};
