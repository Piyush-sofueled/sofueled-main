import React, { useState, useEffect } from "react";
import { fetchPost, fetchPosts, fetchCategories } from "../../../src/services/api";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../../../src/components/Navbar";
import FooterSection from "../../../src/components/FooterSection";
import Head from "next/head";

const Post = () => {
    const router = useRouter();
    const { id } = router.query;
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch post
        const fetchedPost = await fetchPost(id);
        setPost(fetchedPost);
        setCategory(fetchedPost?.categories[0]);

        // Fetch posts and categories
        const [posts, categories] = await Promise.all([
          fetchPosts(),
          fetchCategories()
        ]);
        
        // Process categories
        const transformedCategories = categories.map((category) => ({
          id: category.id,
          name: category.name,
        }));
        setCategories(transformedCategories);

        // Set posts
        setPosts(posts);
      } catch (error) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const filteredPosts = posts
  .filter(
    (p) => p?.categories?.includes(category) && p?.id !== post?.id
  )
  const firstTwoFilteredPosts = filteredPosts?.slice(0, 2);
  const otherPosts = posts
  .filter((p) => p?.id !== post?.id) // Exclude current post
  .slice(0, 3);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getCategoryNames = (postCategories) => {
    return postCategories
      .map((categoryId) => {
        const category = categories.find((cat) => cat.id === categoryId);
        return category ? category.name : null;
      })
      .filter(Boolean)
      .join(", ");
  };

  const handleScroll = () => {
    // Smooth scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section>
      <Head>
        <title>{post?.title?.rendered || "Post"} - Sofueled</title>
        <meta
          name="description"
          content={post?.yoast_head_json?.og_description || "Default description"}
        />
      </Head>
      <Navbar />
      <div className="post-section">
        <div className="w-layout-blockcontainer base-container w-container">
          {loading ? (
            <h2 style={{ textAlign: "center" }}>Loading...</h2>
          ) : error ? (
            <h2 style={{ textAlign: "center" }}>{error}</h2>
          ) : (
            <>
              <div className="blog-details-header">
                <h1 className="blog-details-header-title" dangerouslySetInnerHTML={{ __html: post?.title?.rendered || "" }} />
                <div className="blog-details-info">
                  <div className="blog-author-wrapper">
                    <div className="blog-author-name">by</div>
                    <div className="blog-author-name">
                      {post?.yoast_head_json?.author || "Unknown Author"}
                    </div>
                  </div>
                  <div className="blog-info-border"></div>
                  <div className="blog-details-date">{formatDate(post?.date || "")}</div>
                </div>
              </div>
              <img
                src={post?.yoast_head_json?.og_image?.[0]?.url || "/default-image.jpg"}
                loading="lazy"
                alt="blog details"
                className="blog-details-image"
              />
              <div className="blog-detaild-bottom-wrapper">
                <div className="blog-detaild-bottom-left">
                  <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post?.content?.rendered || "" }} />
                </div>
                {firstTwoFilteredPosts.length > 0 && (
                  <div className="blog-detaild-bottom-right">
                    <div className="blog-sidebar">
                      <div className="blog-sidebad-title-wrapper">
                        <h2 className="blog-sidebad-title">Related blogs</h2>
                        <div className="blog-title-border-bottom"></div>
                      </div>
                      {firstTwoFilteredPosts.map((post) => (
                        <div key={post.id} className="blog-sidebad-single">
                          <div className="sidebar-image-wrapper">
                            <img
                              src={post?.yoast_head_json?.og_image?.[0]?.url || "/default-image.jpg"}
                              loading="lazy"
                              alt="sidebar image"
                              className="sidebar-image blog-image"
                            />
                          </div>
                          <div className="blog-sidebar-date-wrapper">
                            <div className="blog-sidebar-date">
                              {formatDate(post?.date || "")}
                            </div>
                          </div>
                          <Link
                            href={`/blog/post/${post?.id}`}
                            onClick={handleScroll} className="blog-sidebar-title-wrapper">
                            <h3 className="blog-sidebar-title" dangerouslySetInnerHTML={{ __html: post?.title?.rendered || "" }} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="other-post">
                <h2 className="blog-sidebad-title">Other Posts</h2>
                <div role="list" className="blog-post-list-wrapper w-dyn-items">
                  {otherPosts.map((post) => (
                    <div key={post.id} role="listitem" className="blog-post-list w-dyn-item">
                      <div className="blog-post-block">
                        <div className="blog-top">
                          <div className="blog-image-container">
                            <img
                              src={post?.yoast_head_json?.og_image?.[0]?.url || "/default-image.jpg"}
                              loading="lazy"
                              alt=""
                              className="blog-image"
                            />
                          </div>
                          <div className="small-text">
                            {getCategoryNames(post?.categories || [])}
                          </div>
                          <Link
                            href={`/blog/post/${post?.id}`}
                            onClick={handleScroll}
                            className="title-link w-inline-block"
                          >
                            <h4 dangerouslySetInnerHTML={{ __html: post?.title?.rendered || "" }} />
                          </Link>
                          <div className="small-text">{formatDate(post?.date || "")}</div>
                        </div>
                        
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <FooterSection />
    </section>
  );
};

export default Post;
