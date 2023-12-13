import fs from "fs";
import matter from "gray-matter";

const getPostContent = (postName) => {
  const folder = "posts/";

  const file = `${folder}${postName}.md`;

  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);

  return matterResult;
};

export default getPostContent;
