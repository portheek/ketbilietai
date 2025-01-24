import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from '../components/footer/footer'
import Header from '../components/header/header'

import Home from '../pages/home/home';
import Login from '../pages/login/login';
import Menu from '../pages/menu/menu';
import Register from '../pages/register/register';
import Test from '../pages/test/test';
import TestEnd from '../pages/testend/testend';
import TestReview from '../pages/testreview/testreview';
import TestList from '../pages/admincp/testlist';
import Categories from '../pages/admincp/categories';
import CreateTest from '../pages/admincp/createtest';
import TestHistory from '../pages/testhistory/testhistory';
import TestEdit from '../pages/admincp/testedit';
import QuestionsPreview from '../pages/admincp/questionspreview';
import QuestionsList from '../pages/admincp/questionslist';
import QuestionAdd from '../pages/admincp/questionadd';
import QuestionEdit from '../pages/admincp/questionedit';
import PrivateRoute from '../components/privateroute';
import AdminRoute from '../components/adminroute';

function App() {
  return (
    <>
      <Header />
        <BrowserRouter>
          <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu" element={<PrivateRoute component={Menu} />} />
          <Route path="/test/:id" element={<PrivateRoute component={Test} />} />
          <Route path="/testend" element={<PrivateRoute component={TestEnd} />} />
          <Route path="/testreview" element={<PrivateRoute component={TestReview} />} />
          <Route path="/testhistory" element={<PrivateRoute component={TestHistory} />} />
          <Route path="/admin/testlist" element={<AdminRoute component={TestList} />} />
          <Route path="/admin/categories" element={<AdminRoute component={Categories} />} />
          <Route path="/admin/createtest" element={<AdminRoute component={CreateTest} />} />
          <Route path="/admin/testedit/:id" element={<AdminRoute component={TestEdit} />} />
          <Route path="/admin/questionspreview" element={<AdminRoute component={QuestionsPreview} />} />
          <Route path="/admin/questionslist/:id" element={<AdminRoute component={QuestionsList} />} />
          <Route path="/admin/questionadd/:id" element={<AdminRoute component={QuestionAdd} />} />
          <Route path="/admin/questionedit/:id" element={<AdminRoute component={QuestionEdit} />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
