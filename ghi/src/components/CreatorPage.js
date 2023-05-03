import React from "react";
import panda from "../images/panda.svg";
import bear from "../images/bear.svg";
import cat from "../images/cat.svg";
import banner from "../images/creator-page-banner.svg";
import penguin from "../images/penguin.svg";
import github from "../images/github.svg";
import gitlab from "../images/gitlab.svg";
import linkedin from "../images/linkedin.svg";
import email from "../images/email.svg";

export default function CreatorPage() {
  return (
    <>
      <div className="h-full w-full bg-beige">
        <div className="container">
          <img
            className="object-cover mx-auto"
            src={banner}
            alt="Question banner"
          />
        </div>
      </div>
      <div className="h-[200vh] p-8 bg-beige mx-auto grid grid-cols-2 grid-flow-row auto-rows-min">
        {/* Angus's Card */}
        <div className="creator-card mx-auto">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-90 md:rounded-none md:rounded-l-lg"
              src={penguin}
              alt="Sitting penguin"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Full-Stack Software Engineer:
              </h5>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Angus Wu
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Hi there! I'm a biochemistry graduate turned fullstack software
                engineer. I discovered my love for coding during my biochemistry
                studies and decided to take a leap into the tech industry. I'm
                excited to use my skills to develop software that's
                user-friendly and has a positive impact on people's lives
              </p>
              <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                <span className="font-semibold">Hobbies/Interests: </span>{" "}
                <br />- Cooking <br /> - Traveling <br /> - Sports
              </p>
              <div className="mt-3 space-x-4 flex p-1">
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://github.com/anguswu1022" target="blank">
                    <img
                      className="block h-6 w-6 rounded-full"
                      alt="Github icon"
                      src={github}
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a
                    href="https://www.linkedin.com/in/angus-wu10"
                    target="blank"
                  >
                    <img
                      className="block h-6 w-6  rounded-full"
                      alt="Linkedin icon"
                      src={linkedin}
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://gitlab.com/anguswu1022" target="blank">
                    <img
                      className="block h-6 w-6 rounded-full"
                      alt="Gitlab icon"
                      src={gitlab}
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="mailto:anguswu19@gmail.com">
                    <img
                      className="block h-6 w-6 rounded-full"
                      alt="Email icon"
                      src={email}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lupes's Card */}
        <div className="creator-card mx-auto">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-90 md:rounded-none md:rounded-l-lg"
              src={cat}
              alt="a cartoon kitten eating a bowl of noodles"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Full-Stack Software Engineer:
              </h5>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Gudelfina Mendez
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                From saving lives to coding lines, this registered nurse is
                swapping out stethoscopes for laptops and diving headfirst into
                the exciting world of software engineering! Dedicated and
                supportive team member, my passion is to develop feature-packed,
                user centered apps.
              </p>
              <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                <span className="font-semibold">Hobbies/Interests:</span> <br />
                - Crochet <br />- Playing Guitar <br />- Art
              </p>
              <div className="mt-3 space-x-4 flex p-1">
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://github.com/Gudelfina">
                    <img
                      className="block h-6 w-6 rounded-full"
                      alt="Github icon"
                      src={github}
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://www.linkedin.com/in/gudelfina-mendez/">
                    <img
                      className="block h-6 w-6 rounded-full"
                      alt="Linkedin icon"
                      src={linkedin}
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://gitlab.com/Gudelfina3">
                    <img
                      className="block h-6 w-6 rounded-full"
                      alt="Gitlab icon"
                      src={gitlab}
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  {/* replace youremailhere with email */}
                  <a href="mailto:gudelfina.mendez@gmail.com">
                    <img
                      className="block h-6 w-6 rounded-full"
                      alt="Email icon"
                      src={email}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sirasit's Card */}
        <div className="creator-card mx-auto">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-90 md:rounded-none md:rounded-l-lg"
              src={panda}
              alt="Hipster panda sipping boba"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Full-Stack Software Engineer:
              </h5>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sirasit Punnanithi
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Hello! I am a former healthcare professional turned
                <br />
                software engineer! I am continuing to hone my problem
                <br />
                solving and communication skills in order to become a
                <br />
                tenacious and supportive teammate. My passion is to
                <br />
                develop user-focused, feature-rich applications that are
                <br />
                interactive, intuitive and enjoyable!
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-semibold">Hobbies/Interests:</span>
                <br />
                - Sports
                <br />
                - Weightlifting/Powerlifting
                <br />
                - Music Festivals
                <br />
                - Foodie
                <br />- Occasional Gamer
              </p>
              <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
                Here are the links to my socials and other projects:
              </p>
              <div className="space-x-4 flex p-1">
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://github.com/spunnanithi" target="blank">
                    <img
                      className="block h-6 w-6 rounded-full"
                      alt="Github icon"
                      src={github}
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a
                    href="https://www.linkedin.com/in/sirasit-punnanithi/"
                    target="blank"
                  >
                    <img
                      className="block h-6 w-6 rounded-full"
                      alt="Linkedin icon"
                      src={linkedin}
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://gitlab.com/spunnanithi" target="blank">
                    <img
                      className="block h-6 w-6 rounded-full"
                      alt="Gitlab icon"
                      src={gitlab}
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  {/* replace youremailhere with email */}
                  <a href="mailto:youremailhere">
                    <img
                      className="block h-6 w-6 rounded-full"
                      alt="Email icon"
                      src={email}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Rodrigo's Card */}
        <div className="creator-card mx-auto">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-90 md:rounded-none md:rounded-l-lg"
              src={bear}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Full-Stack Software Engineer:
              </h5>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Rodrigo Olmos
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the links to my socials and other projects:
              </p>
              <div className="mt-3 space-x-4 flex p-1">
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://github.com/Rod9001?tab=projects">
                    <img
                      className="block h-6 w-6 rounded-full"
                      alt="Github icon"
                      src={github}
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://www.linkedin.com/in/rodrigo-olmos-romo?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFX523HpFSQWpLSkmg8rM5w%3D%3D">
                    <img
                      className="block h-6 w-6 rounded-full"
                      alt="Linkedin icon"
                      src={linkedin}
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://gitlab.com/rodrigoolmos">
                    <img
                      className="block h-6 w-6 rounded-full"
                      alt="Gitlab icon"
                      src={gitlab}
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  {/* replace youremailhere with email */}
                  <a href="mailto:youremailhere">
                    <img
                      className="block h-6 w-6 rounded-full"
                      alt="Email icon"
                      src={email}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
