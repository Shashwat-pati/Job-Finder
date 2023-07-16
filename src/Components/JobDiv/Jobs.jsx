import React from "react";

// Imported Icons ======>
import { BiTimeFive } from "react-icons/bi";

// Imported Images=========>
import logo1 from "../../Assets/logo1.webp";
import logo2 from "../../Assets/logo2.png";
import logo3 from "../../Assets/logo3.png";
import logo4 from "../../Assets/logo4.webp";
import logo5 from "../../Assets/logo5.jpg";
import logo6 from "../../Assets/logo6.png";
import logo7 from "../../Assets/logo7.webp";
import logo8 from "../../Assets/logo8.webp";

const Data = [
    {
        id: 1,
        image: logo1,
        title: "Web Developer",
        time: "Now",
        location: "Canada",
        desc: "Mujhko pehchaano mein hun Don...",
        company: "Novac Linus Co.",
    },

    {
        id: 2,
        image: logo2,
        title: "UI Designer",
        time: "14Hrs",
        location: "Manchester",
        desc: "Mujhko pehchaano mein hun Don...",
        company: "Liquid Accessments",
    },

    {
        id: 3,
        image: logo3,
        title: "Software Engg.",
        time: "10Hrs",
        location: "Austria",
        desc: "Mujhko pehchaano mein hun Don...",
        company: "Web Tech Agency",
    },

    {
        id: 4,
        image: logo4,
        title: "UI/UX Designer",
        time: "12Hrs",
        location: "Berlin",
        desc: "Mujhko pehchaano mein hun Don...",
        company: "Government",
    },
    {
        id: 5,
        image: logo5,
        title: "System Engg.",
        time: "10Hrs",
        location: "Moscow",
        desc: "Mujhko pehchaano mein hun Don...",
        company: "Newcastle",
    },
    {
        id: 6,
        image: logo6,
        title: "Product Designer",
        time: "Now",
        location: "Tokyo",
        desc: "Mujhko pehchaano mein hun Don...",
        company: "Manchester",
    },
    {
        id: 7,
        image: logo7,
        title: "Researcher",
        time: "6Hrs",
        location: "Norway",
        desc: "Mujhko pehchaano mein hun Don...",
        company: "Nin co.",
    },
    {
        id: 8,
        image: logo8,
        title: "Data Scientist",
        time: "8Hrs",
        location: "Turkey",
        desc: "Mujhko pehchaano mein hun Don...",
        company: "Nome and Sons",
    },
];

const Jobs = () => {
    return (
        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
            {Data.map(({ id, image, title, time, location, desc, company }) => {
                return (
                    <div
                        key={id}
                        className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] text-align:center hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
                    >
                        <span className="flex justify-between items-center gap-2">
                            <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                                {title}
                            </h1>
                            <span className="flex items-center text-[#ccc] gap-1">
                                <BiTimeFive />
                                {time}
                            </span>
                        </span>

                        <h6 className="text-[#ccc] ">{location}</h6>

                        <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                            {desc}
                        </p>

                        <div className="company flex items-center gap-2">
                            <img
                                src={image}
                                alt="Company Logo"
                                className="w-[10%]"
                            />
                            <span className="text-[14px] py-[1rem] block group-hover:text-white">
                                {company}
                            </span>
                        </div>

                        <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor group-hover:bg-white group-hover/item:text-textColor group-hover:text-textColor">
                            Apply Now
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Jobs;
