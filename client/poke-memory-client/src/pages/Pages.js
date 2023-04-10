import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamePage from './GamePage';

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GamePage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages