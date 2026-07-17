import { useContext } from "react";
import { ModalContext } from "@app/providers/ModalProvider/ui/ModalProvider.jsx";

export const useModal = () => {
    return useContext(ModalContext);
}