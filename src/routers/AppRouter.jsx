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
  Core,
  MuiClone
} from '../pages'
import {
  MuiCloneDataDisplay,
  MuiCloneFeedback,
  MuiCloneInputs,
  MuiCloneLayout,
  MuiCloneNavigation,
  MuiCloneSurfaces,
  MuiCloneUtils,
  MuiCloneGettingStarted,
  MuiCloneQuickDemo
} from '../pages/mui-clone'
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Landing />} />
        <Route path='dashboard' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='core' element={<Core />} />
          <Route path='components' element={<Components />} />
          <Route path='my-system' element={<MySystem />} />
          <Route path='mui-clone'>
            <Route index element={<MuiCloneGettingStarted />} />
            <Route path='quick-demo' element={<MuiCloneQuickDemo />} />
            <Route path='inputs' element={<MuiCloneInputs />} />
            <Route path='data-display' element={<MuiCloneDataDisplay />} />
            <Route path='feedback' element={<MuiCloneFeedback />} />
            <Route path='surfaces' element={<MuiCloneSurfaces />} />
            <Route path='navigation' element={<MuiCloneNavigation />} />
            <Route path='layout' element={<MuiCloneLayout />} />
            <Route path='utils' element={<MuiCloneUtils />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='mui-clone' element={<MuiClone />} />
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
