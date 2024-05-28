import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

/* STYLES */
// import './global.css';
// import './variables.css';
/* STYLES END */

/** PAGES */
import MainLayout from './layouts/MainLayout';
/** PAGES END */

/** PAGES */
import HomePage from './pages/HomePage';
import MkpoNnyinPage from './pages/MkpoNnyinPage';
import IbomEventsPage from './pages/IbomEventsPage';
import IbomServicesMenuPage from './pages/IbomServicesMenuPage';
import IbomservicesPage from './pages/IbomServicesPage';
import IbomPartnersPage from './pages/IbomPartnersPage';
import IbomJobsPage from './pages/IbomJobsPage';
import NewsAndStoriesPage from './pages/NewsAndStoriesPage';
import FeatureStoriesPage from './pages/FeatureStoriesPage';
import PersonalGrowthPage from './pages/PersonalGrowthPage';
import ReadersCornerPage from './pages/ReadersCornerPage';
import CtscInterviewsPage from './pages/CtscInterviewsPage';
import OurCulturePage from './pages/OurCulturePage';
import AboutUsPage from './pages/AboutUsPage';
import CtscTeamPage from './pages/CtscTeamPage';
import ContactUsPage from './pages/ContactUsPage';
import SignUpPage from './pages/SignUpPage';
import AddJobsPage from './pages/AddJobsPage';
import IbomJobsCategoriesPage from './pages/IbomJobsCategoriesPage';


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/mkpo-nnyin' element={<MkpoNnyinPage />} />
        <Route path='/events' element={<IbomEventsPage />} />
        <Route path='/events/:eventId' element={<h1>Hello id</h1>} />
        <Route path='/services' element={<IbomServicesMenuPage />} />
        <Route path='/services/:serviceId' element={<IbomservicesPage />} />
        <Route path='/partners' element={<IbomPartnersPage />} />
        <Route path='/jobs' element={<IbomJobsPage />} />
        <Route path='/jobs/add' element={<AddJobsPage />} />
        <Route path='/jobs/:category' element={<IbomJobsCategoriesPage />} />
        <Route path='/news-and-stories' element={<NewsAndStoriesPage />} />
        <Route path='/feature-stories' element={<FeatureStoriesPage />} />
        <Route path='/personal-growth' element={<PersonalGrowthPage />} />
        <Route path='/readers-corner' element={<ReadersCornerPage />} />
        <Route path='/ctsc-interviews' element={<CtscInterviewsPage />} />
        <Route path='/our-culture' element={<OurCulturePage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/ctsc-team' element={<CtscTeamPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/stories/:storyID' element={<h1>Hello ID stoyre</h1>} />

        {/* NOT FOUND */}
        <Route path='*' element={<h1>Not found</h1>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
};

export default App;
