import "./css/style.css";
import { PostInteractions } from "./components/Post";
import { getPosts } from "./utils";

const app = document.querySelector<HTMLDivElement>("#app")!;

const [post] = await getPosts();
app.innerHTML = PostInteractions(post.likes, post.comment, post.username);
