import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { HomePage, MovieDetailPage } from "./pages";

import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<p>loading...</p>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
