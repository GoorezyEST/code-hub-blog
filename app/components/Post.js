import React from "react";
import Markdown from "markdown-to-jsx";
import getPostContent from "@/functions/getPostContent";

import styles from "@/styles/modules/post.module.css";
import Text from "./posts/Text";
import Subtitle from "./posts/Subtitle";
import Code from "@/app/components/posts/Code";
import TextAndImage from "./posts/TextAndImage";
import List from "./posts/List";

const postComponents = {
  subtitle: {
    component: Subtitle,
  },
  text: {
    component: Text,
  },
  code: {
    component: Code,
  },
  text_and_image: {
    component: TextAndImage,
  },
  list: {
    component: List,
  },
};

function PostComponent({ postName }) {
  //We receive the post name from the props, and we use it
  //to retrieve all the post content
  const postData = getPostContent(postName);

  return (
    <section className={styles.container}>
      <h1 className={styles.post_title}>{postData.data.title}</h1>
      <Markdown
        className={styles.post_content}
        options={{
          overrides: postComponents,
        }}
      >
        {postData.content}
      </Markdown>
    </section>
  );
}

export default PostComponent;
