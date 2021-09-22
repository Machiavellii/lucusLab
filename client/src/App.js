import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DataTableScreen from "./screens/DataTable";
import GalleryScreen from "./screens/Gallery";
import ToDoListScreen from "./screens/ToDoList";
import EditDataScreen from "./screens/EditTable";
import AddDataScreen from "./screens/AddData";

import { useSelector } from "react-redux";

const App = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Router>
      <Nav />
      {userInfo && <SideBar />}

      <Route path="/" component={HomeScreen} exact />
      <Route path="/login" component={LoginScreen} exact />
      <Route path="/register" component={RegisterScreen} exact />
      <Route path="/data-table" component={DataTableScreen} exact />
      <Route path="/add-data" component={AddDataScreen} exact />
      <Route path="/еdit-table/:id" component={EditDataScreen} exact />
      <Route path="/gallery" component={GalleryScreen} exact />
      <Route path="/to-do-list" component={ToDoListScreen} exact />
    </Router>
  );
};

export default App;
