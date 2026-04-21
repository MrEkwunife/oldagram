import "./css/style.css";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { getPosts } from "./utils";

import iconHeart from "./assets/icon-heart.png";
import iconHeartFilled from "./assets/icon-filled-heart-removebg-preview.png";

const app = document.querySelector<HTMLDivElement>("#app")!;

let posts = await getPosts();
localStorage.setItem("posts", JSON.stringify(posts));

app.innerHTML = Header();
app.innerHTML += `
    <main class="posts">
      ${posts.map((post) => Post(post)).join("")}
    </main>
`;

Array.from(document.querySelectorAll<HTMLButtonElement>(".like-btn"))!.forEach(
  (btn, index) => {
    btn.addEventListener("click", () => {
      handleLike(index);
    });
  },
);

Array.from(
  document.querySelectorAll<HTMLImageElement>("article > img"),
)!.forEach((img) => {
  img.addEventListener("dblclick", () => {
    const article = img.closest("article");
    if (!article) return;
    const index = Array.from(app.querySelectorAll("article")).indexOf(article);
    handleLike(index);
  });
});

function handleLike(index: number) {
  const post = posts[index];

  post.isLiked = !post.isLiked;
  post.likes += post.isLiked ? 1 : -1;

  localStorage.setItem("posts", JSON.stringify(posts));

  const article = app.querySelectorAll("article")[index];
  if (!article) return;

  const likeBtn = article.querySelector(".like-btn img") as HTMLImageElement;
  if (likeBtn) {
    likeBtn.src = post.isLiked ? iconHeartFilled : iconHeart;
  }

  const footer = article.querySelector(".post-footer") as HTMLElement;
  if (footer) {
    const likesText = footer.querySelector("p") as HTMLElement;
    if (likesText) {
      likesText.textContent = `${post.likes.toLocaleString()} likes`;
    }
  }
}
