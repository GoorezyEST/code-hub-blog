import React from "react";
import getPostsMetadata from "@/functions/getPostsMetadata";
import PostPreview from "../components/PostPreview";

import styles from "@/styles/modules/posts-page.module.css";

function PostsPage() {
  //We get all the posts
  const postMetadata = getPostsMetadata();

  //We create a PostPreview component for each post
  const postsPreviews = postMetadata.map((post) => {
    return <PostPreview key={post.slug} postData={post} />;
  });

  return <section className={styles.container}>{postsPreviews}</section>;
}

export default PostsPage;