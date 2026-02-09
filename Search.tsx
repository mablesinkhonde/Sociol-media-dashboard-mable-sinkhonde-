'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Post from '../components/Post';
import { mockPosts, mockUsers } from '../data/mockData';
import './Search.css';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState({ posts: [] as typeof mockPosts, users: [] as typeof mockUsers });

  useEffect(() => {
    if (query.trim()) {
      const searchLower = query.toLowerCase();

      const postResults = mockPosts.filter(
        (post) =>
          post.content.toLowerCase().includes(searchLower) ||
          post.username.toLowerCase().includes(searchLower)
      );

      const userResults = mockUsers.filter(
        (user) =>
          user.username.toLowerCase().includes(searchLower) ||
          user.bio.toLowerCase().includes(searchLower)
      );

      setResults({ posts: postResults, users: userResults });
    } else {
      setResults({ posts: [], users: [] });
    }
  }, [query]);

  return (
    <div className="search">
      <div className="search-header">
        <h1>Search Results for "{query}"</h1>
      </div>

      {results.users.length > 0 && (
        <section className="search-section">
          <h2>Users</h2>
          <div className="users-grid">
            {results.users.map((user) => (
              <div key={user.id} className="user-card">
                <img src={user.avatar || "/placeholder.svg"} alt={user.username} />
                <h3>{user.username}</h3>
                <p>{user.bio}</p>
                <button className="follow-btn">Follow</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {results.posts.length > 0 && (
        <section className="search-section">
          <h2>Posts</h2>
          <div className="search-posts">
            {results.posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {results.posts.length === 0 && results.users.length === 0 && query && (
        <div className="no-results">
          <p>No results found for "{query}"</p>
          <p className="no-results-hint">Try searching for different keywords or users</p>
        </div>
      )}
    </div>
  );
}
