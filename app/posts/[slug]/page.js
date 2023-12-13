import PostComponent from "@/app/components/Post";
import getPostsMetadata from "@/functions/getPostsMetadata";
import React from "react";

//We define which will be the routes available to have it all static
//we dont want it dynamic to increase performance
export const generateStaticParams = async () => {
  //We get all the post metadata
  const posts = getPostsMetadata();

  //We return all the slugs for each post
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

function SinglePostPage({ params }) {
  //From the params we get the slug
  const slug = params.slug;

  return <PostComponent postName={slug} />;
}

export default SinglePostPage;
