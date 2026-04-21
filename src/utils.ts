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

export { getImageSrc, getPosts };
export type { PostType };
