import React from "react";
import CongViecList from "../module/CongViecList";

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-4xl p-4">
        Danh sách công việc
      </h1>
      <CongViecList />
    </div>
  );
};

export default Home;
