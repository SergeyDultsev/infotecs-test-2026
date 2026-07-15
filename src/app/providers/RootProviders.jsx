import { BrowserRouter } from 'react-router-dom';

const RootProviders = ({ children }) => (
    <BrowserRouter basename="/infotecs-test">
        {children}
    </BrowserRouter>
)

export default RootProviders;