import AppBar from "../AppBar/AppBar";
import c from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={c.container}>
      <AppBar />
      {children}
    </div>
  );
}
