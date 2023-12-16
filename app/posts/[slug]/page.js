import PostComponent from "@/app/components/Post";
import getPostsMetadata from "@/functions/getPostsMetadata";
import React from "react";
import styles from "@/styles/modules/single-post.module.css";
import getLast6Posts from "@/functions/getLast6Posts";
import PostPreview from "@/app/components/PostPreview";

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

  //We get all the posts
  let postMetadata = getLast6Posts();

  //We create a PostPreview component for each post
  const postsPreviews = postMetadata.map((post) => {
    return <PostPreview key={post.slug} postData={post} />;
  });

  console.log();

  return (
    <section className={styles.container}>
      <PostComponent postName={slug} />
      <div className={styles.recommendations}>
        <div className="title">
          <p>Explora mis</p>
          <h2>Últimos posts:</h2>
        </div>
        {postsPreviews}
      </div>
    </section>
  );
}

export default SinglePostPage;
