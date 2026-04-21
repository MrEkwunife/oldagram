type PostType = {
  name: string;
  username: string;
  location: string;
  avatar: string;
  post: string;
  comment: string;
  likes: number;
  isLiked: boolean;
};

function getImageSrc(imgstr: string) {
  const urlObj = new URL(`./assets/${imgstr}`, import.meta.url);
  return urlObj.href;
}

async function getPosts(): Promise<PostType[]> {
  const res = await fetch("/data.json");
  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }
  const data: PostType[] = await res.json();
  return data;
}

function handleLike(index: number) {
  const post = posts[index];

  post.isLiked = !post.isLiked;
  post.likes += post.isLiked ? 1 : -1;

  localStorage.setItem("posts", JSON.stringify(posts));

  const article = app.querySelectorAll("article")[index];
  if (!article) return;

  const likeBtn = article.querySelector(".like-btn img") as HTMLImageElement;
  if (likeBtn) {
    if (post.isLiked) {
      likeBtn.src = likeBtn.src.includes("filled")
        ? likeBtn.src
        : likeBtn.src.replace(
            "icon-heart",
            "icon-filled-heart-removebg-preview",
          );
    } else {
      likeBtn.src = likeBtn.src.replace(
        "icon-filled-heart-removebg-preview",
        "icon-heart",
      );
    }
  }

  const footer = article.querySelector(".post-footer") as HTMLElement;
  if (footer) {
    const likesText = footer.querySelector("p") as HTMLElement;
    if (likesText) {
      likesText.textContent = `${post.likes.toLocaleString()} likes`;
    }
  }
}

export { getImageSrc, getPosts };
export type { PostType };
