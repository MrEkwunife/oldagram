import "./css/style.css";
import { Poster } from "./components/Post";
import { getPosts } from "./utils";

const app = document.querySelector<HTMLDivElement>("#app")!;

const [post] = await getPosts();
app.innerHTML = Poster(post.name, post.avatar, post.location);
