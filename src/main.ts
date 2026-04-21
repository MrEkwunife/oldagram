import "./css/style.css";
import { Post } from "./components/Post";
import { getPosts } from "./utils";

const app = document.querySelector<HTMLDivElement>("#app")!;

const [post] = await getPosts();
app.innerHTML = Post(post);
