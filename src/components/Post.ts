import { getImageSrc } from "../utils";

function Poster(name: string, imgSrcString: string, location: string) {
  const imgsrc = getImageSrc(imgSrcString);

  return `
        <header class="poster-header">
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

export { Poster };
