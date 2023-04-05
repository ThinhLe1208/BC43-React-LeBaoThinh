// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RenderWithMap from './Component/RenderWithMap/RenderWithMap';
// import StyleDemo from './Component/StyleDemo/StyleDemo';
// import Home from './Component/HomeComponent/Home';
// import DataBinding from './Component/DataBinding/DataBinding';
// import HandleEvent from './Component/HandleEvent/HandleEvent';
// import BaiTapChonXe from './Component/State/BaiTapChonXe';
import DemoState from './Component/State/DemoState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <Home /> */}
    {/* <DataBinding /> */}
    {/* <HandleEvent /> */}
    <DemoState />
    {/* <StyleDemo /> */}
    {/* <RenderWithMap data="something" /> */}
  </div>
);

