import React from "react";
import Header from "./Header";
import Logo from "../assets/AgenSQL-Logo_.png";


export default function Home() {
  return (
    <>
      <Header />
      <header className="py-5">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
            <img src={`${Logo}`} alt="logo" />

              <h1 className="display-5 fw-bold"></h1>
              <h1 className="display-5 fw-bold">
                An integration of Bitnine’s DB technology and PG expertise
              </h1>
              <h2 className="display-5 fw-bold">
                An integration of Bitnine’s DB technology and PG expertise
              </h2>
              <p className="fs-4">
                AgensSQL is an all-new relational DBMS based on PostgreSQL, with
                years of expertise and knowledge accumulated through database
                research and development.
              </p>
              <p className="fs-4">
                The enterprise package, along with AgensSQL engine, is an
                all-in-one solution that ensures the efficiency and scalability
                of data management.
              </p>
              <p className="fs-4">
                Get AgensSQL now for stable operation and management services at
                a reduced maintenance cost.
              </p>
              <a href="" className="btn btn-primary btn-lg">
                CONTACT
              </a>
              <a href="" className="btn btn-primary btn-lg">
                CONTACT
              </a>
              <a href="" className="btn btn-primary btn-lg">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
