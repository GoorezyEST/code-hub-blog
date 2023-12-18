import PostComponent from "@/app/components/Post";
import getPostsMetadata from "@/functions/getPostsMetadata";
import React from "react";
import styles from "@/styles/modules/single-post.module.css";
import Recommendations from "@/app/components/Recommendations";
import getSinglePostMetadata from "@/functions/getSinglePostMetadata";

export const generateMetadata = ({ params }) => {
  const metadata = getSinglePostMetadata(params.slug);

  return {
    title: `Code Hub - ${metadata.title}`,
    description: `${metadata.description}`,
    openGraph: {
      title: `Code Hub - ${metadata.title}`,
      description: `${metadata.description}`,
      images: [{ url: `${metadata.image}` }],
    },
  };
};

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

  return (
    <section className={styles.container}>
      <PostComponent postName={slug} />
      <Recommendations slug={slug} />
    </section>
  );
}

export default SinglePostPage;
