import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { profileImg } from "../public/assets";
const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My self is Walidulhasan Boniamin and As a Full Stack Software
            Developer, I am a highly skilled and versatile professional with
            expertise in both front-end and back-end development. I am
            proficient in multiple programming languages, frameworks, and
            technologies, which allows me to create complex web applications
            that are both functional and visually appealing.
          </p>
          <p>
            My experience and expertise in front-end development allow me to
            create engaging user interfaces using{" "}
            <span className="text-textGreen">HTML, CSS, and JavaScript.</span>I
            understand the importance of user experience and work diligently to
            ensure that my applications are intuitive and easy to use.
          </p>
          <p>
            In addition to my front-end skills, I possess strong back-end
            development skills, which allow me to create scalable and efficient
            server-side applications. I am proficient in multiple server-side
            languages such as{" "}
            <span className="text-textGreen">
              Python, C#, and Dart, and have experience working with databases
              such as SQL-Server and MongoDB.
            </span>
          </p>
          <p>
            As a Full Stack Software Developer, I am familiar with a wide range
            of software development tools and technologies, including{" "}
            <span className="text-textGreen">Git, Tsf, Docker.</span> I use
            these tools to automate tasks, streamline workflows, and deploy
            applications with ease.
          </p>
          <p>
          My ability to work well in a team environment is another strength that sets me apart as a Full Stack Software Developer. I communicate effectively with project managers, designers, and other developers to ensure that projects are completed on time and to the highest standard.
          </p>
          <p>
          Overall, as a Full Stack Software Developer, I am a highly skilled and adaptable professional with a deep understanding of both front-end and back-end development. My ability to leverage a wide range of programming languages, frameworks, and technologies makes me an invaluable asset to any software development team.
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="Profile Image"
              />

              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
