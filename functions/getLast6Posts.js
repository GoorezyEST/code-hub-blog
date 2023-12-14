import fs from "fs";
import matter from "gray-matter";

const getLast6Posts = () => {
  const folder = "posts/";

  const files = fs.readdirSync(folder);

  let markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get metadata for each post
  const posts = markdownPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf8");

    const matterResult = matter(fileContent);

    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      image: matterResult.data.image,
      slug: fileName.replace(".md", ""),
    };
  });

  // Retrieve only the last 6 posts

  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const last6Posts = sortedPosts.slice(0, 3);

  return last6Posts;
};

export default getLast6Posts;
