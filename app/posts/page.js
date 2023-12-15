"use client";

import React, { useEffect, useState } from "react";
import PostPreview from "../components/PostPreview";
import styles from "@/styles/modules/posts-page.module.css";
import Banner from "../components/Banner";

function PostsPage() {
  const [postMetadata, setPostMetadata] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const postsPerPage = 9;

  // We get all the posts
  const retrieveAllPosts = async () => {
    const response = await fetch("http://localhost:3000/api/posts").then(
      (data) => data.json()
    );
    setPostMetadata(response);
  };

  useEffect(() => {
    retrieveAllPosts();
  }, []);

  // Filter posts based on search query
  const filteredPosts = postMetadata?.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the index range of posts to display on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts?.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className={styles.container}>
      <Banner text={"MIS"} span={"POSTS"} />
      <section className={styles.posts}>
        <div className={styles.utilities}>
          <div className="title">
            <p>Explora todos</p>
            <h2>Mis posts:</h2>
          </div>
          {/*SEARCH BAR*/}
          {currentPosts !== undefined && (
            <input
              className={styles.search_bar}
              type="text"
              placeholder="Buscar posts ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          )}
          {/* Pagination */}
          {currentPosts !== undefined && (
            <div className={styles.pagination}>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Ant
              </button>
              <p>
                Página: {currentPage} de{" "}
                {Math.ceil(postMetadata.length / postsPerPage)}
              </p>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(postMetadata.length / postsPerPage)
                }
              >
                Sig
              </button>
            </div>
          )}
        </div>

        {currentPosts === undefined && (
          <div className={styles.posts_error}>
            <span className="loader"></span>
            <p>Cargando</p>
          </div>
        )}

        {currentPosts !== undefined &&
          currentPosts.length < 1 &&
          searchQuery !== "" && (
            <div className={styles.posts_error}>
              <p>Lo sentimos, ningun post coincide con tu busqueda.</p>
            </div>
          )}

        {currentPosts !== undefined && currentPosts.length > 0 && (
          <div className={styles.posts_container}>
            {currentPosts.map((post) => {
              return <PostPreview key={post.slug} postData={post} />;
            })}
          </div>
        )}
      </section>
    </section>
  );
}

export default PostsPage;
