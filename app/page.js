import React from "react";
import styles from "@/styles/modules/home.module.css";
import PostPreview from "./components/PostPreview";
import getLast6Posts from "@/functions/getLast6Posts";
import Banner from "./components/Banner";

function Home() {
  //We get all the posts
  let postMetadata = getLast6Posts();

  //We create a PostPreview component for each post
  const postsPreviews = postMetadata.map((post) => {
    return <PostPreview key={post.slug} postData={post} />;
  });

  return (
    <section className={styles.container}>
      <Banner text={"CODE"} span={"HUB"} />

      <section className={styles.recent_posts}>
        <div className={styles.title}>
          <p>Explora mis posts</p>
          <h2>Más recientes:</h2>
        </div>
        <div className={styles.posts_grid}>{postsPreviews}</div>
      </section>
    </section>
  );
}

export default Home;
