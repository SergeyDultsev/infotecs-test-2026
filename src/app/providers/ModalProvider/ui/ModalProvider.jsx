import { createContext, useMemo, useState } from "react";
import style from "./ModalProvider.module.scss";

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
    const [isOpen, setOpen] = useState(null);

    const openModal = (modal) => setOpen(modal);
    const closeModal = () => setOpen(null);

    const value = useMemo(() => ({
        isOpen,
        openModal,
        closeModal,
    }), [isOpen, closeModal]);

    return (
      <ModalContext.Provider value={value}>
          {children}

          {isOpen && (
              <div
                  className={style['modal-overlay']}
                  onClick={closeModal}
              >
                  <div className={style['modal-content']} onClick={(e) => e.stopPropagation()}>
                      {isOpen}
                  </div>
              </div>
          )}
      </ModalContext.Provider>
    );
}