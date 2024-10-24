import Image from "next/image";
import React from "react";
import laptopImg from "../../../Images/laptopImg.jpg";
import worlCloud from "../../../Images/wordCloud.jpg";
import students from "../../../Images/students.jpg";
import students2 from "../../../Images/students2.jpg";
import SirZiaImg from "../../../Images/SirZiaImg.jpg";
import img1 from "../../../Images/img1.jpg";
import img2 from "../../../Images/img2.jpg";
import img3 from "../../../Images/img3.jpg";
import img4 from "../../../Images/img4.jpg";
import img5 from "../../../Images/img5.jpg";

function CourseDetail() {
  return (
    <div className="md:m-20 m-2 py-5 space-y-10 border-b-2">
      <h1 className="text-[#044E83] font-bold md:text-3xl text-xl text-center">
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
        Developing Billion-Dollar Valued Developers and Solopreneurs
      </h1>
      <p className="md:text-2xl text-1xl">
        The pace of technological change is accelerating, big players like
        Microsoft, Amazon, Google, and OpenAI are winning by providing
        infrastructure, large AI foundation models, frameworks, 3D Metaverse
        experiences, and massive distribution networks. Solopreneurs trained in
        this program will win by automating work typically outsourced to
        employees, by directly connecting to customers by eliminating the
        middleman, and by developing vertical metaverses, thus paving the way
        for the first billion-dollar valued solopreneur businesses. This program
        has the objective to train this new breed of billion-dollar
        solopreneurs. These solopreneurs will adopt the ultra-lean business
        model and work independently and will not need to hire employees or
        other team members.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        <Image src={laptopImg} alt="laptop" className="w-80 h-60 rounded-xl shadow-2xl"/>
        <Image src={worlCloud} alt="wordcloud" className="w-80 h-60 rounded-xl shadow-2xl"/>
        <Image src={students} alt="students" className="w-80 h-60 rounded-xl shadow-2xl"/>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 px-5">
  <Image src={students2} alt="students2" className="md:w-[100%] rounded-xl shadow-2xl"/>
  <Image src={SirZiaImg} alt="Sir Zia" className="md:w-[100%] rounded-xl shadow-2xl"/>
  <Image src={img1} alt="img1" className="md:w-[100%] rounded-xl shadow-2xl"/>
  <Image src={img2} alt="img2" className="md:w-[100%] rounded-xl shadow-2xl"/>
  <Image src={img3} alt="img3" className="md:w-[100%] rounded-xl shadow-2xl"/>
  <Image src={img4} alt="img4" className="md:w-[100%] rounded-xl shadow-2xl"/>
  <Image src={img5} alt="img5" className="md:w-[100%] rounded-xl shadow-2xl"/>
</div>
    </div>
  );
}

export default CourseDetail;
