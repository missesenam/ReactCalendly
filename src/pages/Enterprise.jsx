import React from "react";
// Import images
import DropboxLogo from "../assets/icon_logo/Dropbox-Logo.png";
import EbayLogo from "../assets/icon_logo/ebay black.jpg";
import VisaLogo from "../assets/icon_logo/visa-logo-visa-icon-free-free-vector.jpg";
import GenericLogo from "../assets/icon_logo/37d02f8a671bfb445d8df9aadf9abcac.jpg";
import OrealLogo from "../assets/icon_logo/oreal.jpeg";
import WatermelonImage from "../assets/img/Watermelon_Monochromatic.png";

const Enterprise = () => {
  return (
    <>
      <div className="pt-16 text-center w-[400px] mx-auto">
        <h1 className="font-bold text-4xl">
          <span className="text-primary3">Way more</span> than a scheduling link
        </h1>
        <p className="font-bold my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aut
          eius autem voluptatum quo voluptatibus cum et enim repudiandae
          explicabo.
        </p>
        <button className="py-2 px-5 bg-primary1 text-primary2 rounded-3xl">
          Contact sales
        </button>
      </div>

      <div className="my-10 w-11/12 mx-auto h-56 bg-primary1">
        <h1 className="pt-5 font-bold text-2xl text-primary2 text-center">
          Trusted by more than 50,000 of the world's leading organisations
        </h1>
        <div className="mt-12 flex justify-between h-10 px-2 sm:px-8">
          <img src={DropboxLogo} alt="Dropbox Logo" width="70px" />
          <img src={EbayLogo} alt="eBay Logo" width="70px" />
          <img src={VisaLogo} alt="Visa Logo" width="100px" />
          <img src={GenericLogo} alt="Generic Logo" width="90px" />
          <img src={OrealLogo} alt="Oreal Logo" width="90px" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:w-7/12 lg:w-8/12 lg:grid-cols-3 mx-auto">
        <div className="shadow-xl w-64 mx-auto flex flex-col justify-between p-4 border rounded-xl h-128">
          <p className="font-bold text-xl text-primary3">Sales</p>
          <img
            src={WatermelonImage}
            alt="Watermelon Monochromatic"
            width="200px"
            className="mx-auto"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel
            quam, labore, esse deserunt dolores, pariatur culpa officiis
            provident voluptas veniam tenetur sed. Eaque sit, accusantium fugit
            atque iusto deleniti.
          </p>
        </div>

        <div className="shadow-xl w-64 mx-auto flex flex-col justify-between p-4 border rounded-xl h-128">
          <p className="font-bold text-xl text-primary3">Sales</p>
          <img
            src={WatermelonImage}
            alt="Watermelon Monochromatic"
            width="200px"
            className="mx-auto"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel
            quam, labore, esse deserunt dolores, pariatur culpa officiis
            provident voluptas veniam tenetur sed. Eaque sit, accusantium fugit
            atque iusto deleniti.
          </p>
        </div>

        <div className="shadow-xl w-64 mx-auto flex flex-col justify-between p-4 border rounded-xl h-128">
          <p className="font-bold text-xl text-primary3">Sales</p>
          <img
            src={WatermelonImage}
            alt="Watermelon Monochromatic"
            width="200px"
            className="mx-auto"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel
            quam, labore, esse deserunt dolores, pariatur culpa officiis
            provident voluptas veniam tenetur sed. Eaque sit, accusantium fugit
            atque iusto deleniti.
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-center w-full">
        <button className="py-2 px-5 bg-primary1 text-primary2 rounded-3xl">
          Learn more
        </button>
      </div>
    </>
  );
};

export default Enterprise;
