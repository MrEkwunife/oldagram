import { getImageSrc } from "../utils";
import iconHeart from "../assets/icon-heart.png";
import iconHeartFilled from "../assets/icon-filled-heart-removebg-preview.png";
import iconComment from "../assets/icon-comment.png";
import iconDm from "../assets/icon-dm.png";

import type { PostType } from "../utils";

function Poster(name: string, imgSrcString: string, location: string) {
  const imgsrc = getImageSrc(imgSrcString);

  return `
        <header class="post-header">
            <figure class="poster-profile-pic">
                <img src="${imgsrc}" alt="${name} profile picture" />
            </figure>
            <div>
                <p class="poster-name bold-txt">${name}</p>
                <p class="poster-location">${location}</p>
            </div>
        </header>
    `;
}

function PostInteractions(
  likes: number,
  comment: string,
  username: string,
  isLiked: boolean,
) {
  return `
        <footer class="post-footer">
            <div role="group" aria-label="Post actions" class="post-actions">
                <button class="like-btn"><img src="${isLiked ? iconHeartFilled : iconHeart}" alt="" /></button>
                <button><img src="${iconComment}" alt="" /></button>
                <button><img src="${iconDm}" alt="" /></button>
            </div>
            <p>${likes.toLocaleString()} likes</p>
            <p>
                <span class="bold-txt">${username}</span>
                <span>${comment}</span>
            </p>
        </footer>
    `;
}

function Post({
  name,
  username,
  location,
  avatar,
  post,
  comment,
  likes,
  isLiked,
}: PostType) {
  const header = Poster(name, avatar, location);
  const footer = PostInteractions(likes, comment, username, isLiked);
  const imgsrc = getImageSrc(post);

  return `
    <article>
        ${header}
        <img src="${imgsrc}" alt="${post.substring(0, post.lastIndexOf("."))}" />
        ${footer}
    </article>
  `;
}

export { Poster, PostInteractions, Post };
export default Post;
