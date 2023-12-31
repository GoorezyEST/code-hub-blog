import fs from "fs";
import matter from "gray-matter";

const getPostsMetadata = () => {
  const folder = "posts/";

  const files = fs.readdirSync(folder);

  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  //Get metadata for each post

  const posts = markdownPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf8");

    const matterResult = matter(fileContent);

    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      image: matterResult.data.image,
      slug: fileName.replace(".md", ""),
      tags: matterResult.data.tags,
    };
  });

  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return sortedPosts;
};

export default getPostsMetadata;
