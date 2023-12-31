import React from "react";
import styles from "@/styles/modules/home.module.css";
import PostPreview from "./components/PostPreview";
import getLast3Posts from "@/functions/getLast3Posts";
import Banner from "./components/Banner";
import About from "./components/About";

function Home() {
  //We get all the posts
  let postMetadata = getLast3Posts();

  //We create a PostPreview component for each post
  const postsPreviews = postMetadata.map((post) => {
    return (
      <PostPreview key={post.slug} postData={post} url={`posts/${post.slug}`} />
    );
  });

  return (
    <section className={styles.container}>
      <Banner text={"CODE"} span={"HUB"} />

      <section className={styles.recent_posts}>
        <div className="title">
          <p>Explora mis posts</p>
          <h2>Más recientes:</h2>
        </div>
        <div className={styles.posts_grid}>{postsPreviews}</div>
      </section>

      <section className={styles.about}>
        <div className="title">
          <p>Un poco sobre</p>
          <h2>Code Hub:</h2>
        </div>
        <About />
      </section>
    </section>
  );
}

export default Home;
