import React from "react";
// Import images
import computerImage from "../assets/img/computer.png";
import compassLogo from "../assets/icon_logo/compass-customer-logo.svg";
import dropboxLogo from "../assets/icon_logo/dropbox-svgrepo-com.svg";
import ebayLogo from "../assets/icon_logo/ebay-svgrepo1-com.svg";
import downloadLogo from "../assets/icon_logo/download.png";
import twilioLogo from "../assets/icon_logo/twilio-svgrepo-com.svg";

const Home = () => {
  return (
    <>
      <main className="pt-[4rem] w-[70%] mx-auto md:flex md:w-[90%] lg:w-[80%] xl:w-[70%]">
        <div className="pl-12 sm:mx-auto md:w-[60%] my-10">
          <h1 className="font-bold text-4xl">Easy</h1>
          <h1 className="font-bold text-4xl">scheduling</h1>
          <h1 className="font-bold text-4xl text-primary3">ahead</h1>
          <p className="mt-5 max-w-[200px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ut
            ullam possimus quos? Impedit tempora nam unde aliquid et.
          </p>
          <div className="rounded-3xl max-w-[280px] flex justify-between border mt-4 md:w-[290px]">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-0 outline-none ml-4"
            />
            <button className="p-2 bg-primary1 text-primary2 rounded-3xl">
              sign up
            </button>
          </div>
          <p className="mt-1 text-primary4 text-sm">
            create your free account. no credit card required
          </p>
        </div>
        <div className="md:mx-auto">
          <img
            src={computerImage}
            alt="Computer"
            width="80%"
            className="mx-auto md:w-[400px]"
          />
        </div>
      </main>

      <section className="bg-primary5 mt-5">
        <p className="text-center font-bold text-2xl">
          Simplified scheduling for more than{" "}
          <span className="text-primary3">10,000,000</span> users worldwide
        </p>
        <div className="flex justify-between h-[40px] mt-4 px-2 sm:px-8">
          <img src={compassLogo} alt="Compass Logo" width="110px" />
          <img src={dropboxLogo} alt="Dropbox Logo" width="25px" />
          <img src={ebayLogo} alt="eBay Logo" width="70px" />
          <img
            src={downloadLogo}
            alt="Download Logo"
            width="100px"
            height="30px"
          />
          <img src={twilioLogo} alt="Twilio Logo" width="100px" />
        </div>
      </section>

      <section className="mt-5 sm:grid sm:grid-cols-3">
        {[
          {
            step: 1,
            title: "create simple rules",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit consectetur adipisicing.",
          },
          {
            step: 2,
            title: "Share your link",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit consectetur adipisicing.",
          },
          {
            step: 3,
            title: "Get booked",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit consectetur adipisicing.",
          },
        ].map(({ step, title, description }) => (
          <div key={step} className="w-[70%] mx-auto mt-8">
            <div className="flex space-x-3 mb-5">
              <span className="bg-primary3 text-primary2 py-1 px-2 rounded-[50%] h-[30px]">
                {step}
              </span>
              <h1 className="font-bold text-xl">{title}</h1>
            </div>
            <p className="pl-9">{description}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
