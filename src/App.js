import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import GalleryPage from './pages/GalleryPage'
import IntroPage from './pages/IntroPage'

const App = () => {
  return (
    <div className="min-h-screen bg-[#c9b8ac]"> {/* overall background */}
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <main className="px-8 pt-8">
        <Routes>
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;