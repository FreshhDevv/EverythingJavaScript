import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import InnerContent from "./components/InnerContent";
import Settings from "./components/Settings";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";
import Tabs from "./components/Tabs";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InnerContent />}>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tabs" element={<Tabs />}>
            <Route path="/tabs" element={<Navigate replace to="tab1" />}/>
            <Route path="tab1" element={<Tab1 />}/>
            <Route path="tab2" element={<Tab2 />}/>
            <Route path="tab3" element={<Tab3 />}/>
          </Route>
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
