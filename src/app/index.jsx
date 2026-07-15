import { Routes, Route } from 'react-router-dom';
import { routers } from "@app/router/index.jsx";

const App = () => {
  return (
      <>
          <Routes>
              {routers.map(route => (
                  <Route
                      path={route.path}
                      element={route.element}
                      key={route.path}
                  />
              ))}
          </Routes>
      </>
  )
}

export default App;
