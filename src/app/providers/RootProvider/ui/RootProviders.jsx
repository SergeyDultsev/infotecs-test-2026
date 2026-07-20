import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from "@app/providers/ModalProvider/ui/ModalProvider.jsx";

const RootProviders = ({ children }) => (
    <BrowserRouter basename="/infotecs-test-2026">
        <ModalProvider>
            {children}
        </ModalProvider>
    </BrowserRouter>
)

export default RootProviders;