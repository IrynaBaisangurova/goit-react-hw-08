
import c from "./Loader.module.css";
import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={c.containerLoader}>
      <BarLoader
        color="#6D6ECC"
        cssOverride={{}}
        height={4}
        speedMultiplier={1}
        width={100}
      />
    </div>
  );
};

export default Loader;
