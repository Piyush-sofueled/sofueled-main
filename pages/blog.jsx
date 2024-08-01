import React, { useState, useEffect } from "react";
import { fetchPosts, fetchCategories, fetchTags } from "../src/services/api";
import Head from "next/head";
import Link from "next/link";
import BlogCategories from "../src/components/BlogCategories";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeCategory, setActiveCategory] = useState({
    id: 0,
    name: "All Blog",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await fetchPosts();
        setPosts(posts);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch posts. Please try again later.");
        setLoading(false);
      }
    };

    const getCategories = async () => {
      try {
        const categories = await fetchCategories();
        const filteredCategories = categories.filter(
          (category) => category.count > 0
        );
        const transformedCategories = [
          { id: 0, name: "All Blog" },
          ...filteredCategories.map((category) => ({
            id: category.id,
            name: category.name,
          })),
        ];
        setCategories(transformedCategories);
        console.log(transformedCategories);
      } catch (error) {
        console.error(error.message);
      }
    };

    const getTags = async () => {
      try {
        const tags = await fetchTags();
        const transformedTags = tags.map((tag) => ({
          id: tag?.id,
          name: tag?.name,
        }));
        setTags(transformedTags);
        console.log(transformedTags);
      } catch (error) {
        console.error(error.message);
      }
    };

    getPosts();
    getCategories();
    getTags();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filterPostsByCategory = (posts, category) => {
    if (category.id === 0) {
      return posts;
    }
    return posts.filter((post) => post.categories.includes(category.id));
  };

  const filterPostsBySearchTerm = (posts, term, categories, tags) => {
    if (!term) {
      return posts;
    }

    const lowerCaseTerm = term.toLowerCase();

    if (!Array.isArray(categories) || !Array.isArray(tags)) {
      return posts;
    }

    const matchingCategoryIds = categories
      .filter((category) => category.name.toLowerCase().includes(lowerCaseTerm))
      .map((category) => category.id);

    const matchingTagIds = tags
      .filter((tag) => tag.name.toLowerCase().includes(lowerCaseTerm))
      .map((tag) => tag.id);

    return posts.filter((post) => {
      const titleMatch = post.title?.rendered
        ?.toLowerCase()
        .includes(lowerCaseTerm);
      const contentMatch = post.content?.rendered
        ?.toLowerCase()
        .includes(lowerCaseTerm);
      const excerptMatch = post.excerpt?.rendered
        ?.toLowerCase()
        .includes(lowerCaseTerm);
      const categoryMatch = post.categories?.some((categoryId) =>
        matchingCategoryIds.includes(categoryId)
      );
      const tagMatch = post.tags?.some((tagId) =>
        matchingTagIds.includes(tagId)
      );

      return (
        titleMatch || contentMatch || excerptMatch || categoryMatch || tagMatch
      );
    });
  };

  const filteredPosts = filterPostsBySearchTerm(
    filterPostsByCategory(posts, activeCategory),
    searchTerm,
    categories,
    tags
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const totalPages = Math.ceil(filteredPosts?.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const selectedPosts = filteredPosts?.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const processTitle = (title) => {
    return title.replace(/\?/g, '<span class="special-question">?</span>');
  };

  return (
    <section>
      <Head>
        <title>Blog - Sofueled</title>
        <meta name="description" content="Blog posts from Sofueled" />
      </Head>
      <div className="blog-section blog-page">
        <div className="w-layout-blockcontainer base-container w-container">
          <h1 className="blogHead">Blog</h1>
          {!loading && (
            <BlogCategories
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              setSearchTerm={setSearchTerm}
              categories={categories}
            />
          )}
          {loading ? ( // Show loading indicator
            <h2 style={{ textAlign: "center" }}>Loading...</h2>
          ) : error ? ( // Show error message if there's an error
            <h2 style={{ textAlign: "center" }}>{error}</h2>
          ) : (
            <>
              {selectedPosts.length > 0 ? (
                <>
                  <div
                    role="list"
                    className="blog-post-list-wrapper w-dyn-items"
                  >
                    {selectedPosts.map((post) => {

                      const readingTimeString = post?.yoast_head_json?.twitter_misc?.["Est. reading time"] || "";
                      const readingTimeMatch = readingTimeString.match(/\d+/);
                      const readingTime = readingTimeMatch ? readingTimeMatch[0] : null;
                      return(
                      <div
                        key={post.id}
                        role="listitem"
                        className="blog-post-list w-dyn-item"
                      >
                        <div className="blog-post-block">
                          <div className="blog-top">
                            <div className="blog-image-container">
                              <img
                                src={post?.yoast_head_json?.og_image?.[0]?.url}
                                loading="lazy"
                                alt=""
                                className="blog-image"
                              />
                              <div
                                
                                className="blog-card-read-time"
                              >
                                <div className="text-md withe">{readingTime || "5"} Min Read</div>
                              </div>
                            </div>
                            <div className="content-wrap">
                              <Link
                                href={`/blog/post/${post.id}`}
                                className="title-link w-inline-block"
                              >
                                <h4
                                  dangerouslySetInnerHTML={{
                                    __html: processTitle(post?.title?.rendered),
                                  }}
                                />
                              </Link>
                              <div>
                                <div className="small-text">
                                  {formatDate(post.date)}
                                </div>
                                <div
                                  className="excerpt-container"
                                  dangerouslySetInnerHTML={{
                                    __html: post?.excerpt?.rendered,
                                  }}
                                />
                              </div>
                            </div>
                            <div className="spacer"></div>
                          </div>
                          <Link
                            href={`/blog/post/${post.id}`}
                            className="button-simple w-button"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    )})}
                  </div>
                  <div className="pagination">
                    <button
                      className="pagination-button"
                      disabled={currentPage === 1}
                      onClick={() => handleClick(currentPage - 1)}
                    >
                      &lt; Previous
                    </button>
                    <span className="page-info">
                      Page {currentPage} / {totalPages}
                    </span>
                    <button
                      className="pagination-button"
                      disabled={currentPage === totalPages}
                      onClick={() => handleClick(currentPage + 1)}
                    >
                      Next &gt;
                    </button>
                  </div>
                </>
              ) : (
                <h2 style={{ textAlign: "center" }}>
                  No Blogs Yet On This Category..!
                </h2>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Posts;
