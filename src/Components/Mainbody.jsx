import React, { useState } from "react";
import "./Mainbody.css";
import jsonData from "../items.json";
import fuelicon from "../assets/fuel.svg";
import steeringicon from "../assets/steering.svg";
import speedicon from "../assets/speed.svg";
import likeicon from "../assets/like.svg";
import peopleicon from "../assets/peopleicon.svg";
// import { useLocation, useParams } from "react-router-dom";
// import Pagination from "./pagination";

const Mainbody = ({ search }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = jsonData.slice(firstIndex, lastIndex);
  const npages = Math.ceil(jsonData.length / recordsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  const changeCpage = (id) => {
    setCurrentPage(id);
  };

  const prePage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };
  // const { pageNumber } = useParams();
  // const location=useLocation()

  // console.log("pagenumber", pageNumber);
  // console.log("location",location)
  // Assuming you have your car data as an array called 'carData'
  // Filter and display data based on the 'search' and 'pageNumber'
  // For example:
  // const filteredData = jsonData.filter((car) =>
  //   car.carName.toLowerCase().includes(search.toLowerCase())
  // );

  // Calculate the start and end index for pagination
  // const itemsPerPage = 6;
  // const startIndex = (pageNumber - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  // const pageData = jsonData.slice(startIndex, endIndex);

  return (
    <div>
      <div className="cards">
        {records
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.carName.toLowerCase().includes(search);
          })
          .map((data, key) => {
            return (
              <div key={key}>
                <div className="card-description">
                  <div className="main-car-img">
                    <img src={data.image} alt={data.carName} />
                  </div>
                  <div className="card-main-headingAnd-model">
                    <h2>{data.carName}</h2>
                    <p>{data.modelYear}</p>
                  </div>
                  <div className="main-fecilities">
                    <div className="first-row">
                      <div>
                        <img src={peopleicon} alt="" />
                        <p>{data.travelPeople}people</p>
                      </div>
                      <div>
                        <img src={speedicon} alt="" />
                        <p>{data.mileage}km/1-litre</p>
                      </div>
                    </div>
                    <div className="second-row">
                      <div>
                        <img src={fuelicon} alt="" />
                        <p>{data.fuel}people</p>
                      </div>
                      <div>
                        <img src={steeringicon} alt="" />
                        <p>{data.DrivenType}km/1-litre</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="pricing">
                    <div className="exact-price">
                      <p>
                        ${data.price} <span>/month</span>{" "}
                      </p>
                    </div>
                    <div className="like-rent-side">
                      <img src={likeicon} alt="" />
                      <button>Rent now</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* <Pagination/> */}

      <div className="pages-links">
        <div className="pages-buttons">
          <div className="pre-next">
            <a href="#pages" onClick={prePage}>
              prev
            </a>
          </div>
          {numbers.map((n, i) => (
            <div key={i}>
              <a href="#pages" onClick={() => changeCpage(n)}>
                {n}
              </a>
            </div>
          ))}
          <div className="pre-next">
            <a href="#pages" onClick={nextPage}>
              next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
