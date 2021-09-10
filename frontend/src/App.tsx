import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import BarChart from "components/BarChart";
import React from "react";
import DonutChart from "components/DonutChart";

function App() {
  return (
    < > 
    <NavBar />
     <div className="container">
      <h1 className="text-primary">Hello world!</h1>
      </div>

      <div className="row px-3">
        <div className="col-sm-6">
          <h5>All sales</h5>
          <BarChart />
        </div>
        <div className="col-sm-6">
          <h5>All sales</h5>
          <DonutChart />
        </div>
      </div>

      <div className="py-3">
        <h2 className="text-primary">All sales</h2>
      </div>

      <DataTable />
      <Footer />
    </>
  );
}

export default App;
