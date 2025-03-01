import c from "./PageTitle.module.css";

export default function PageTitle({ children }) {
  return (
  <h1 className={c.heading}>{children}</h1>
  );
  
}
