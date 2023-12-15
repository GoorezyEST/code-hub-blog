import fs from "fs";
import matter from "gray-matter";

export async function GET(req, res) {
  const folder = "posts/";

  const files = fs.readdirSync(folder);

  try {
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
      };
    });

    const sortedPosts = posts.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    return new Response(JSON.stringify(sortedPosts), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(`Error reading file: ${file}`, error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
