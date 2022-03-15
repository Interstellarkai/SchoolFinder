import Home from "./Pages/Home";
import Login from "./Pages/Login";
import RegistrationBasicInfo from "./Pages/RegistrationBasicInfo";
import RegistrationInterests from "./Pages/RegistrationInterests";
import RegistrationMoreDetails from "./Pages/RegistrationMoreDetails";
import ShortlistPage from "./Pages/ShortlistPage";
import PrimarySchoolFinder from "./Pages/PrimarySchoolFinder";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PAGES from "./pageRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import UserAccountPage from "./Pages/UserAccountPage";
import { getSchools } from "./redux/apiCalls";
import SearchResultPage from "./Pages/SearchResultPage";

const App = () => {
  const currentUser = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  getSchools(dispatch);

  useEffect(() => {}, [currentUser]);
  return (
    <Router>
      <Routes>
        <Route exact path={PAGES.homePage} element={<Home />} />

        <Route
          path={PAGES.loginPage}
          element={currentUser.username ? <Navigate to="/" /> : <Login />}
        />
        <Route path=":mlc" element={<PrimarySchoolFinder />} />

        <Route
          path={PAGES.registerPage1}
          element={
            currentUser.username ? (
              <Navigate to="/" />
            ) : (
              <RegistrationBasicInfo />
            )
          }
        />
        <Route
          path={PAGES.registerPage2}
          element={
            currentUser.username ? (
              <Navigate to="/" />
            ) : (
              <RegistrationMoreDetails />
            )
          }
        />
        <Route
          path={PAGES.registerPage3}
          element={
            currentUser.username ? (
              <Navigate to="/" />
            ) : (
              <RegistrationInterests />
            )
          }
        />
        <Route
          path={PAGES.shortlistPage}
          element={
            currentUser.username ? <ShortlistPage /> : <Navigate to="/" />
          }
        />
        <Route
          path={PAGES.accountPage}
          element={
            currentUser.username ? <UserAccountPage /> : <Navigate to="/" />
          }
        />

        <Route path={PAGES.searchResultsPage} element={<SearchResultPage />}>
          <Route path=":q" element={<SearchResultPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
