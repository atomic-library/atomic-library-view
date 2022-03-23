import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import DashboardRouter from './DasboardRouter'
import { Dashboard } from '../components'
import {
  Home,
  //   NotFound,
  NotFound,
  Landing,
  Components,
  MySystem,
  Hooks,
  Theme,
  Css,
  About,
  Join,
  Core
} from '../pages'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Landing />} />
        <Route path='dashboard' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path='core' element={<Core />} />
          <Route path='components' element={<Components />} />
          <Route path='my-system' element={<MySystem />} />
          <Route path='hooks' element={<Hooks />} />
          <Route path='about' element={<About />} />
          <Route path='theme' element={<Theme />} />
          <Route path='css' element={<Css />} />
          <Route path='join' element={<Join />} />
          <Route path='*' element={<NotFound />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}
export default AppRouter
