import { Link } from "react-router-dom";
import c from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={c.container}>
      <h3 className={c.title}>404 - page not found</h3>
      <p className={c.text}>
        Return to{" "}
        <Link className={c.link} to="/">
          Home
        </Link>
      </p>
    </div>
  );
}
