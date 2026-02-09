export interface User {
  id: number;
  username: string;
  email: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  posts: number;
}

export interface Comment {
  id: number;
  userId: number;
  username: string;
  avatar: string;
  text: string;
  timestamp: string;
}

export interface Post {
  id: number;
  userId: number;
  username: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
  liked: boolean;
}

export const mockUsers: User[] = [
  {
    id: 1,
    username: 'john_doe',
    email: 'john@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
    bio: 'Web developer and tech enthusiast',
    followers: 1250,
    following: 342,
    posts: 45,
  },
  {
    id: 2,
    username: 'jane_smith',
    email: 'jane@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
    bio: 'Designer and creative thinker',
    followers: 2050,
    following: 512,
    posts: 78,
  },
  {
    id: 3,
    username: 'alex_chen',
    email: 'alex@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    bio: 'Photographer capturing moments',
    followers: 3200,
    following: 450,
    posts: 156,
  },
];

export const mockPosts: Post[] = [
  {
    id: 1,
    userId: 1,
    username: 'john_doe',
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Just launched my new project! Really excited about the results.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    likes: 234,
    comments: [
      {
        id: 1,
        userId: 2,
        username: 'jane_smith',
        avatar: 'https://i.pravatar.cc/150?img=2',
        text: 'Looks amazing! Great work!',
        timestamp: '2 hours ago',
      },
      {
        id: 2,
        userId: 3,
        username: 'alex_chen',
        avatar: 'https://i.pravatar.cc/150?img=3',
        text: 'This is fantastic! 🎉',
        timestamp: '1 hour ago',
      },
    ],
    timestamp: '3 hours ago',
    liked: false,
  },
  {
    id: 2,
    userId: 2,
    username: 'jane_smith',
    avatar: 'https://i.pravatar.cc/150?img=2',
    content: 'Exploring new design trends this season. What are your thoughts?',
    likes: 567,
    comments: [
      {
        id: 3,
        userId: 1,
        username: 'john_doe',
        avatar: 'https://i.pravatar.cc/150?img=1',
        text: 'Love these designs!',
        timestamp: '1 hour ago',
      },
    ],
    timestamp: '5 hours ago',
    liked: false,
  },
  {
    id: 3,
    userId: 3,
    username: 'alex_chen',
    avatar: 'https://i.pravatar.cc/150?img=3',
    content: 'Golden hour photography is the best 📸',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=400&fit=crop',
    likes: 892,
    comments: [],
    timestamp: '8 hours ago',
    liked: false,
  },
  {
    id: 4,
    userId: 1,
    username: 'john_doe',
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Tips for better code organization: 1) Use modules, 2) Follow naming conventions, 3) Document your code',
    likes: 445,
    comments: [],
    timestamp: '1 day ago',
    liked: false,
  },
  {
    id: 5,
    userId: 2,
    username: 'jane_smith',
    avatar: 'https://i.pravatar.cc/150?img=2',
    content: 'Working on a new portfolio piece. Stay tuned! 🎨',
    likes: 678,
    comments: [],
    timestamp: '1 day ago',
    liked: false,
  },
];
