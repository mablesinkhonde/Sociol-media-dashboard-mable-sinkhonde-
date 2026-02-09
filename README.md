# Social Media Dashboard

A fully-featured social media dashboard built with React and Create React App. This project demonstrates essential React patterns including components, state management, routing, and responsive design.

## Project Overview

The Social Media Dashboard is a modern web application that simulates a social media platform with user profiles, post feeds, interactions (likes/comments), search functionality, and dark mode support. It showcases best practices in React development with a clean architecture and reusable components.

**Tech Stack:**
- React 18.2
- React Router 6
- CSS3 with responsive design
- Create React App

## What I Learned

### React Components
- Breaking down UI into reusable, modular components
- Props drilling and component composition
- Conditional rendering based on state and props
- Component lifecycle and best practices

### State Management
- `useState` hook for managing component state
- `useEffect` hook for side effects and lifecycle management
- Local state vs. app-wide state considerations
- Dark mode persistence using localStorage

### React Router
- Creating a single-page application with multiple routes
- Navigation between pages without full page reloads
- Route parameters and dynamic routing
- Handling 404 pages and error boundaries

### Advanced Features
- Search functionality with filtering
- Comment threads and nested interactions
- Real-time like/comment updates
- Responsive mobile-first design

## Key Features

### 🔄 Real-Time Updates
- Instant like/unlike functionality on posts
- Live comment creation and display
- Dynamic post count updates

### 📱 Fully Responsive Design
- Mobile-first approach
- Optimized layouts for tablet and desktop
- Responsive navigation with hamburger menu
- Touch-friendly interactive elements

### 🌓 Dark/Light Mode Toggle
- Persistent dark mode using localStorage
- Smooth transitions between themes
- System-wide theme application

### 🔍 Search Functionality
- Search posts by keywords
- Filter results in real-time
- Search user profiles
- Advanced filtering options

### 💬 Interactive Comment System
- Add comments to posts
- View comment threads
- Real-time comment updates
- Comment count tracking

### 👤 User Profiles
- View user profile information
- User statistics (followers, following, post count)
- User-specific post gallery
- Profile customization options

### 📱 Trending & Suggestions
- Trending posts sidebar
- Suggested users to follow
- Popular hashtags
- Recommendations based on activity

## Project Structure

```
social-media-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Header.css
│   │   ├── Post.tsx
│   │   ├── Post.css
│   │   ├── Profile.tsx
│   │   └── Profile.css
│   ├── pages/
│   │   ├── Feed.tsx
│   │   ├── Feed.css
│   │   ├── Search.tsx
│   │   ├── Search.css
│   │   ├── Profile.tsx
│   │   ├── Profile.css
│   │   ├── NotFound.tsx
│   │   └── NotFound.css
│   ├── data/
│   │   └── mockData.ts
│   ├── app.tsx
│   ├── App.css
│   ├── index.tsx
│   ├── index.css
│   └── index.html
└── package.json
```

## How to Run This Project

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd social-media-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000` in your web browser

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Exposes all configuration (one-way operation)

## Component Documentation

### Header Component
**Location:** `src/components/Header.tsx`

Sticky navigation header with logo, search bar, and theme toggle.

**Props:**
- `onSearch` (function): Callback when search is performed
- `darkMode` (boolean): Current theme state
- `onDarkModeToggle` (function): Callback for theme toggle

**Features:**
- Search functionality
- Dark mode toggle
- Navigation links
- Responsive design

### Post Component
**Location:** `src/components/Post.tsx`

Displays individual posts with user info, content, images, and interactions.

**Props:**
- `id` (string): Unique post identifier
- `author` (string): Post author name
- `avatar` (string): Author avatar URL
- `content` (string): Post content text
- `image` (string): Post image URL
- `timestamp` (string): Post creation time
- `likes` (number): Initial like count
- `comments` (array): Comment array

**Features:**
- Like/unlike functionality
- Comment creation
- Image display
- Timestamp formatting
- Author profile link

### Profile Component
**Location:** `src/components/Profile.tsx`

Displays user profile information and statistics.

**Props:**
- `username` (string): User's username
- `bio` (string): User biography
- `followers` (number): Follower count
- `following` (number): Following count
- `posts` (number): Post count
- `avatar` (string): Profile picture URL

**Features:**
- User statistics display
- Follow/unfollow button
- Bio display
- Avatar display

### Feed Page
**Location:** `src/pages/Feed.tsx`

Home page displaying posts feed with trending sidebar.

**Features:**
- Post feed
- Trending posts section
- Suggested users
- Create post area
- Responsive layout

### Search Page
**Location:** `src/pages/Search.tsx`

Search functionality with filtering capabilities.

**Features:**
- Search bar
- Real-time filtering
- Result display
- No results state
- Search filters

### Profile Page
**Location:** `src/pages/Profile.tsx`

User profile page with posts gallery.

**Features:**
- User profile info
- Posts grid
- Statistics
- Follow button
- Edit profile option

## Mock Data Structure

The application uses mock data defined in `src/data/mockData.ts`:

```typescript
// Sample user structure
{
  id: string
  username: string
  name: string
  avatar: string
  bio: string
  followers: number
  following: number
}

// Sample post structure
{
  id: string
  author: string
  authorId: string
  avatar: string
  content: string
  image: string
  timestamp: string
  likes: number
  comments: Array<{
    id: string
    author: string
    text: string
    timestamp: string
  }>
}
```

## Dark Mode Implementation

Dark mode is implemented using:
- CSS class-based theming (`.dark-mode`)
- `localStorage` for persistence
- `useEffect` hook for initialization
- System-wide class application

To toggle dark mode, click the theme toggle button in the header.

## Responsive Design Breakpoints

- **Mobile:** 320px - 768px
- **Tablet:** 769px - 1024px
- **Desktop:** 1025px+

## Features Breakdown by Week

### Week 1: Setup & Basic Components
- React and Create React App setup
- Header component with styling
- Post component with basic display
- Profile component
- Mock data creation
- Basic CSS styling

### Week 2: State Management & Data
- useState for likes/comments
- useEffect for dark mode persistence
- Comment creation functionality
- Like/unlike functionality
- Dynamic state updates

### Week 3: Routing & Advanced Features
- React Router integration
- Multi-page navigation (Feed, Search, Profile)
- Search functionality with filtering
- Dark mode toggle
- 404 error page

### Week 4: Testing & Deployment
- Responsive design implementation
- Mobile optimization
- Performance optimization
- Code organization
- Documentation

## Future Enhancements

- Backend API integration with real database
- User authentication system
- Real-time notifications
- Message/DM functionality
- Advanced search with hashtags
- User following system
- Post sharing and retweets
- Media upload functionality
- Analytics dashboard
- Unit and integration tests

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations

- Component memoization for optimization
- Lazy loading for images
- Efficient re-rendering
- Optimized CSS
- Responsive images

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance
- Alt text for images

## Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Contact & Support

For questions or issues, please open an issue on the repository or contact the project maintainer.

---

**Last Updated:** January 2026
**Version:** 1.0.0
