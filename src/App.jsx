import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ThreeColumnPreviewCardComponent from './views/3ColumnPreviewCardComponent'
import Home from './views/Home'
import InteractiveRatingComponent from './views/InteractiveRatingComponent'
import NftPreviewCardComponent from './views/NftPreviewCardComponent'
import OrderSummaryComponent from './views/OrderSummaryComponent'
import ProductPreviewCardComponent from './views/ProductPreviewCardComponent'
import QrCodeComponent from './views/QrCodeComponent'
import StatsPreviewCardComponent from './views/StatsPreviewCardComponent'

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
          <Route
            path='/order-summary-comp'
            element={<OrderSummaryComponent />}
          />
          <Route
            path='/stats-preview-card-comp'
            element={<StatsPreviewCardComponent />}
          />
          <Route
            path='/3-column-preview-card-comp'
            element={<ThreeColumnPreviewCardComponent />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
