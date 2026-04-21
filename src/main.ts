import "./css/style.css";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { getPosts } from "./utils";

const app = document.querySelector<HTMLDivElement>("#app")!;
const posts = await getPosts();
app.innerHTML = Header();
app.innerHTML += `
    <main class="posts">
      ${posts.map((post) => Post(post)).join("")}
    </main>
`;
