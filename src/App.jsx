import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './views/Home'
import InteractiveRatingComponent from './views/InteractiveRatingComponent'
import NftPreviewCardComponent from './views/NftPreviewCardComponent'
import ProductPreviewCardComponent from './views/ProductPreviewCardComponent'
import QrCodeComponent from './views/QrCodeComponent'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route
            path='/product-preview-card-comp'
            element={<ProductPreviewCardComponent />}
          />
          <Route
            path='/interactive-rating-comp'
            element={<InteractiveRatingComponent />}
          />
          <Route path='/qr-code-comp' element={<QrCodeComponent />} />
          <Route
            path='/nft-preview-card-comp'
            element={<NftPreviewCardComponent />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
