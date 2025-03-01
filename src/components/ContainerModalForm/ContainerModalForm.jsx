import clsx from "clsx";
import { useEffect, useState } from "react";
import c from "./ContainerModalForm.module.css";

const ContainerModalForm = ({ children, visible, setVisible }) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const classStyle = clsx(c.backdrop, { [c.isOpen]: modalVisible });

  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      setVisible(false);
    }
  };

  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  return (
    <div className={classStyle} onClick={handleModalClick}>
      <div className={c.modal}>{children}</div>
    </div>
  );
};

export default ContainerModalForm;
