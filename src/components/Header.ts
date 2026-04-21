import userAvatar from "../assets/user-avatar.png";
import logo from "../assets/logo.png";

function Header() {
  return `
        <header class="app-header">
            <img src="${logo}" alt="Odegram logo" />
            <img src="${userAvatar}" alt="Profile pictur of Per Borgan" />
        </header>
    `;
}

export { Header };
export default Header;
