# Oldagram

A minimalist Instagram-inspired web application built with TypeScript and Vite. Display posts with user profiles, interactions, and a clean, responsive design.

## Features

- 📱 Responsive design for mobile and desktop
- 🎨 Clean, modern UI with smooth interactions
- 📸 Display multiple posts with user information
- ❤️ Interactive like button with persistent state
- ⚡ Built with Vite for fast development and optimized builds
- 🎯 TypeScript for type-safe code

## Project Structure

```
oldagram/
├── src/
│   ├── components/
│   │   ├── Header.ts      # App header component
│   │   └── Post.ts        # Post display component
│   ├── css/
│   │   └── style.css      # Global styles
│   ├── assets/            # Images and icons
│   ├── main.ts            # Application entry point
│   └── utils.ts           # Utility functions
├── public/
│   └── data.json          # Post data
├── index.html
├── package.json
└── tsconfig.json
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MrEkwunife/oldagram.git
   cd oldagram
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Move data.json to public folder** (if not already there)
   ```bash
   mv data.json public/data.json
   ```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## Building

Build the project for production:

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## Preview

Preview the production build locally:

```bash
npm run preview
```

## Deployment

### Deploying to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

**Important:** Ensure `data.json` is in the `public/` folder so it's included in the deployment.

## Technologies Used

- **TypeScript** - Type-safe JavaScript
- **Vite** - Next generation build tool
- **HTML5** - Semantic markup
- **CSS3** - Responsive styling

## API

### Components

#### `Header()`
Displays the app header with logo and user avatar.

#### `Post(post: PostType)`
Displays a single post with:
- User profile information
- Post image
- Like count and interactions
- Comments

#### `getPosts(): Promise<PostType[]>`
Fetches posts from `data.json`.

#### `getImageSrc(imgstr: string): string`
Resolves image paths for Vite assets.

## Post Data Structure

```typescript
type PostType = {
  name: string;         // User's full name
  username: string;     // User's handle
  location: string;     // Post location
  avatar: string;       // Avatar filename
  post: string;         // Post image filename
  comment: string;      // User's comment
  likes: number;        // Like count
};
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is open source and available under the MIT License.

## Author

Created by [MrEkwunife](https://github.com/MrEkwunife)
