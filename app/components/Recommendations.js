import getRelatedPosts from "@/functions/getRelatedPosts";
import React from "react";
import PostPreview from "./PostPreview";
import InnerRecommendations from "./Inner-Recommendations";

function Recommendations({ slug }) {
  const relatedPostsData = getRelatedPosts({ slug: slug });

  const relatedPosts = relatedPostsData.map((post, index) => {
    return (
      <PostPreview
        key={index}
        postData={post.postContent}
        url={`./${post.postSlug}`}
      />
    );
  });

  return <InnerRecommendations content={relatedPosts} />;
}

export default Recommendations;
