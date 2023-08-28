import React from "react";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <header className="py-5">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
              <h1 className="display-5 fw-bold"></h1>
              <h1 className="display-5 fw-bold">An integration of Bitnine’s DB technology and PG expertise</h1>
              <p className="fs-4"></p>
              <p className="fs-4"></p>
              <p className="fs-4"></p>
              <a href="" className="btn btn-primary btn-lg"></a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
