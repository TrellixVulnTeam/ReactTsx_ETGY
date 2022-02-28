import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter as Router ,Link, Route, Routes } from "react-router-dom";
// 引入页面
import Index from "./pages/index";
import TsBase from './pages/TsBase'
import TsFirst from './pages/TsFirst'
ReactDOM.render(
  <div>
    <Router>
      <Routes>
        <Route path="/index" element={<Index/>} ></Route>
        <Route path="/TsBase" element={<TsBase/>}></Route>
        <Route path="/" element={<TsFirst/>}></Route>
      </Routes>
    </Router>
  </div>
,document.querySelector('#root'))
