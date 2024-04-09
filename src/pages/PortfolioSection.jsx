import React, { useState, useMemo } from "react";
import { Link } from 'react-router-dom';
import "./../App.css";
import PortfolioList from "../Components/Portfolio/Portfolio.jsx";
// import ModalOne from "../Components/Portfolio/Modal.jsx";
const categorylist = [
  { id: 1, category: "all", value: "all" },
  { id: 2, category: "corporate", value: "all" },
  { id: 3, category: "business", value: "all" },
  { id: 4, category: "ecommerce", value: "all" },
  { id: 5, category: "app", value: "all" },
  { id: 6, category: "email", value: "all" },
];



function Portfolio() {
  const [filter, setFilter] = useState("corporate");

  const filteredPortfolio = useMemo(() => {
    if (filter === "all") return PortfolioList;

    return PortfolioList.filter((portfolio) => portfolio.category === filter);
  }, [filter]);

  return (
    <>
      <section className="pb-5 position-relative w-100" id="portfolio">
        {/* Start of Header  */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="module-title font-alt text-center">
                Portfolio Work
              </h1>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <ul className="filter font-alt">
                {categorylist.map((types, i) => (
                  <li key={i}>
                    <Link
                      className="all-filter portfolio-animation"
                      to={"/"}
                      // href="javascrip:0;"
                      onClick={() => setFilter(types.category)}
                    >
                      {types.category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row ">
            {filteredPortfolio.map((item, ii) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={ii}>
                <div key={+new Date()} className="" id={item.id}>
                  <div className="port justify-content-center animate-glow">
                    <img
                      className="project-img port-img"
                      src={item.image}
                      alt={item.name}
                    />
                    {/* <div className="text">
                      <h3>{item.name}</h3>
                    </div> */}
                    <span>

                      {/* <div className="button"> */}
                      <div className="button">
                        {/* {item.href}
                        <ModalOne /> */}
                        {item.href}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
