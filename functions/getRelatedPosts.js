import fs from "fs";
import matter from "gray-matter";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const getRelatedPosts = ({ slug }) => {
  const folder = "posts/";

  const files = fs.readdirSync(folder);

  const allPosts = files.filter((file) => file.endsWith(".md"));

  const shuffledPosts = shuffleArray(allPosts);

  const currentPost = files.filter(
    (file) => file.endsWith(".md") && file.startsWith(slug)
  );

  const currentPostContent = fs.readFileSync(`posts/${currentPost[0]}`, "utf8");

  const currentPostResult = matter(currentPostContent);

  const relatedPosts = shuffledPosts
    .map((fileName) => {
      const fileContent = fs.readFileSync(`posts/${fileName}`, "utf8");

      const matterResult = matter(fileContent);

      // Use some() to check if at least one tag matches
      if (
        currentPostResult.data.tags.some(
          (tag) =>
            matterResult.data.tags.includes(tag) &&
            currentPostResult.data.title !== matterResult.data.title
        )
      ) {
        return {
          postContent: matterResult.data,
          postSlug: fileName.replace(".md", ""),
        };
      } else {
        return null; // or "Not related" if you prefer
      }
    })
    .filter((relatedPost) => relatedPost !== null); // Filter out null values

  return relatedPosts.slice(0, 5);
};

export default getRelatedPosts;
