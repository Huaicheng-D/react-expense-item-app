import classes from "./Navbar.module.css";

function Narbar() {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navItem}>
        <li>
          <a href="default.asp">Home</a>
        </li>

        <li>
          <a href="news.asp">News</a>
        </li>

        <li>
          <a href="contact.asp">Contact</a>
        </li>

        <li>
          <a href="about.asp">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Narbar;
