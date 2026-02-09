'use client';

import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import { mockPosts, Post as PostType } from '../data/mockData';
import './Feed.css';

export default function Feed() {
  const [posts, setPosts] = useState<PostType[]>(mockPosts);
  const [loading, setLoading] = useState(false);

  const handleLike = (postId: number) => {
    console.log(`[v0] Post ${postId} liked`);
  };

  const handleComment = (postId: number, comment: string) => {
    console.log(`[v0] Comment added to post ${postId}: ${comment}`);
  };

  return (
    <div className="feed">
      <div className="feed-container">
        <aside className="feed-sidebar">
          <div className="trending">
            <h3>Trending Now</h3>
            <ul>
              <li>
                <span className="trend-tag">#ReactJS</span>
                <span className="trend-count">45.2K posts</span>
              </li>
              <li>
                <span className="trend-tag">#WebDevelopment</span>
                <span className="trend-count">123K posts</span>
              </li>
              <li>
                <span className="trend-tag">#Design</span>
                <span className="trend-count">89.5K posts</span>
              </li>
              <li>
                <span className="trend-tag">#Technology</span>
                <span className="trend-count">256K posts</span>
              </li>
            </ul>
          </div>
        </aside>

        <main className="feed-posts">
          <div className="compose-box">
            <img src="https://i.pravatar.cc/150?img=0" alt="Your avatar" className="compose-avatar" />
            <input
              type="text"
              placeholder="What's on your mind?"
              className="compose-input"
              readOnly
            />
          </div>

          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              onLike={handleLike}
              onComment={handleComment}
            />
          ))}

          {loading && <div className="loading">Loading more posts...</div>}
        </main>

        <aside className="feed-sidebar-right">
          <div className="suggestions">
            <h3>Suggested Users</h3>
            <div className="user-suggestions">
              <div className="suggestion-item">
                <img src="https://i.pravatar.cc/150?img=4" alt="User" />
                <div>
                  <p className="suggestion-username">sarah_williams</p>
                  <p className="suggestion-follow">Follow</p>
                </div>
              </div>
              <div className="suggestion-item">
                <img src="https://i.pravatar.cc/150?img=5" alt="User" />
                <div>
                  <p className="suggestion-username">mike_johnson</p>
                  <p className="suggestion-follow">Follow</p>
                </div>
              </div>
              <div className="suggestion-item">
                <img src="https://i.pravatar.cc/150?img=6" alt="User" />
                <div>
                  <p className="suggestion-username">emma_brown</p>
                  <p className="suggestion-follow">Follow</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
