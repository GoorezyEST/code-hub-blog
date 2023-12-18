import fs from "fs";
import matter from "gray-matter";

const getSinglePostMetadata = (slug) => {
  const folder = "posts/";

  const files = fs.readdirSync(folder);

  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const postName = markdownPosts.find((post) => {
    if (post === slug + ".md") {
      return post;
    }
  });

  //Get the post metadata

  const fileContent = fs.readFileSync(`posts/${postName}`, "utf8");

  const matterResult = matter(fileContent);

  const postMetadata = {
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle,
    image: matterResult.data.image,
  };

  return postMetadata;
};

export default getSinglePostMetadata;
