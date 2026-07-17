import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from "@app/providers/ModalProvider/ui/ModalProvider.jsx";

const RootProviders = ({ children }) => (
    <BrowserRouter basename="/infotecs-test">
        <ModalProvider>
            {children}
        </ModalProvider>
    </BrowserRouter>
)

export default RootProviders;