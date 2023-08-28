import React from "react";
import Header from "./Header";
import './style/home.css'
import Logo from "../assets/AgenSQL-Logo.png";


export default function Home() {
  return (
    <>
      <Header />
      <header className="py-5">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5  text-center">
            <div className="m-4 m-lg-5 hheader ">
            <img src={`${Logo}`} alt="logo" />

              <h1 className="display-5 fw-bold"></h1>
              
              <h3 className="fs-4 fw-bold mt-4">
                An integration of Bitnine’s DB technology and PG expertise
              </h3>
              <p className="fs-6 mb-4 text-secondary">
                AgensSQL is an all-new relational DBMS based on PostgreSQL, with
                years of expertise and knowledge accumulated through database
                research and development.
              </p>
              <p className="fs-6 mb-4 text-secondary">
                The enterprise package, along with AgensSQL engine, is an
                all-in-one solution that ensures the efficiency and scalability
                of data management.
              </p>
              <p className="fs-6 mb-5 text-secondary">
                Get AgensSQL now for stable operation and management services at
                a reduced maintenance cost.
              </p>
              <a href="" className="btn btn-primary btn-md mx-3">
                CONTACT
              </a>
              <a href="" className="btn btn-primary btn-md mx-3">
                BROCHURE
              </a>
              <a href="" className="btn btn-primary btn-md mx-3">
                BLOG
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
