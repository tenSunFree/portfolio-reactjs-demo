import React from "react";
import kfc from "../../assets/images/icon_kfc.png";
import voucher from "../../assets/images/icon_voucher.png";
import search from "../../assets/images/icon_search.png";
import people from "../../assets/images/icon_people.png";
import price from "../../assets/images/icon_price.png";

function StickyHeader() {
  const combinedClasses = `
  bg-orange-500 mr-40 ml-40 flex items-center 
  fixed top-0 left-0 right-0 w-auto bg-gray-950 text-red flex flex-col overflow-hidden align-items:flex-end
`;

  return (
    <div
      className={combinedClasses}
      style={{
        backgroundColor: "rgba(250,246,243,1.000)",
      }}
    >
      <div
        className="flex w-full justify-between items-end mx-5 pt-4 pb-2"
        style={{
          backgroundColor: "rgba(250,246,243,1.000)",
          height: "90px",
        }}
      >
        <div
          className="font-extrabold text-2xl cursor-pointer flex items-end ml-4 overflow-hidden align-items:flex-end "
          style={{ backgroundColor: "rgba(200, 150, 10, 0.85)" }}
          onClick={() => alert("Element was clicked!")}
        >
          <div
            className="flex gap-2 items-center overflow-hidden"
            style={{ backgroundColor: "rgba(250,246,242,1.000)" }}
          >
            <img
              className="w-16 h-16"
              src={kfc}
              alt="kfc"
              style={{ width: "70px", height: "70px" }}
            />
          </div>
        </div>
        <div className="flex items-end overflow-hidden">
          <img className="w-23 h-9 mr-4" src={voucher} alt="voucher" />
          <img className="w-10 h-10 mr-4" src={search} alt="search" />
          <img className="w-10 h-10 mr-4" src={people} alt="people" />
        </div>
      </div>
      <div
        className="top-0 bg-blue-500 w-full h-10 flex items-center justify-between"
        style={{
          backgroundColor: "rgba(229,0,43,1.000)",
          height: "65px",
        }}
      >
        <div className="flex items-center space-x-4 mx-auto">
          <span className="text-white text-xl font-bold">
            【官網限定】1元加購蛋撻/炸雞
          </span>
          <button className="mr-2 p-1 rounded-md bg-white text-red-500 text-xl font-bold border border-transparent hover:bg-transparent hover:border-white hover:text-white">
            立刻前往
          </button>
        </div>
        <button className="mr-8 text-white text-2xl font-bold">X</button>
      </div>
      <div
        className="bg-blue-500 w-full h-10 flex items-center justify-between"
        style={{
          backgroundColor: "rgba(255,255,255,1.000)",
          height: "60px",
        }}
      >
        <div className="flex items-start space-x-0 h-full">
          {["熱門優惠", "個人餐", "多人餐", "早餐", "單點"].map(
            (text, index) => (
              <span
                key={index}
                className="px-3 py-2 bg-white text-black hover:bg-red-500 hover:text-white h-full 
                flex items-center justify-center font-bold text-xl cursor-pointer"
              >
                {text}
              </span>
            )
          )}
        </div>
        <img
          src={price}
          alt="Your Alt Text"
          className="mr-6"
          style={{
            width: "84px",
            height: "40px",
          }}
        />
      </div>
    </div>
  );
}

export default StickyHeader;
