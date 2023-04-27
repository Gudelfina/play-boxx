import React from "react";
import panda from "../images/panda.png";
import bear from "../images/bear.png";
import elephant from "../images/elephant.png";
import banner from "../images/creator-page-banner.png";
import penguin from "../images/penguin.png";

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
          <div className="flexitems-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                Here are the links to my socials and other projects:
              </p>
              <div className="mt-3 space-x-4 flex p-1">
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://github.com/anguswu1022">
                    <img
                      className="block h-6 w-6 bg-yellow-400 rounded-full"
                      alt="Github icon"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_44605.png&f=1&nofb=1&ipt=60f2e29c62a8e99fae8e3e977e585e9df98b5fae9c5f330be8ae63b0430572e6&ipo=images"
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://www.linkedin.com/in/angus-wu10">
                    <img
                      className="block h-6 w-6 bg-yellow-400 rounded-full"
                      alt="Linkedin icon"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.33IcIYftyA5LUavwEs_vxQHaHa%26pid%3DApi&f=1&ipt=bc7f55d4f21d9186620b3d6149f703cbbc4dae8727d32ff669ade2b85e6a8628&ipo=images"
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://gitlab.com/anguswu1022">
                    <img
                      className="block h-6 w-6 bg-yellow-400 rounded-full"
                      alt="Gitlab icon"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vS3nPtPbLZqF16SvLTAknwHaG1%26pid%3DApi&f=1&ipt=e2d0d29a940ac76ef2f56125ad783c0f9ef8dbc53a67ff798d7bce0d95c7c44c&ipo=images"
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
              src={elephant}
              alt="a cartoon elephant with flowers and a bird"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Full-Stack Software Engineer:
              </h5>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Gudelfina Mendez
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the links to my socials and other projects:
              </p>
              <div className="mt-3 space-x-4 flex p-1">
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://github.com/Gudelfina">
                    <img
                      className="block h-6 w-6 bg-yellow-400 rounded-full"
                      alt="Github icon"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_44605.png&f=1&nofb=1&ipt=60f2e29c62a8e99fae8e3e977e585e9df98b5fae9c5f330be8ae63b0430572e6&ipo=images"
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://www.linkedin.com/in/gudelfina-mendez/">
                    <img
                      className="block h-6 w-6 bg-yellow-400 rounded-full"
                      alt="Linkedin icon"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.33IcIYftyA5LUavwEs_vxQHaHa%26pid%3DApi&f=1&ipt=bc7f55d4f21d9186620b3d6149f703cbbc4dae8727d32ff669ade2b85e6a8628&ipo=images"
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://gitlab.com/Gudelfina3">
                    <img
                      className="block h-6 w-6 bg-yellow-400 rounded-full"
                      alt="Gitlab icon"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vS3nPtPbLZqF16SvLTAknwHaG1%26pid%3DApi&f=1&ipt=e2d0d29a940ac76ef2f56125ad783c0f9ef8dbc53a67ff798d7bce0d95c7c44c&ipo=images"
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
                Here are the links to my socials and other projects:
              </p>
              <div className="mt-3 space-x-4 flex p-1">
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://github.com/spunnanithi">
                    <img
                      className="block h-6 w-6 bg-yellow-400 rounded-full"
                      alt="Github icon"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_44605.png&f=1&nofb=1&ipt=60f2e29c62a8e99fae8e3e977e585e9df98b5fae9c5f330be8ae63b0430572e6&ipo=images"
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://www.linkedin.com/in/sirasit-punnanithi/">
                    <img
                      className="block h-6 w-6 bg-yellow-400 rounded-full"
                      alt="Linkedin icon"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.33IcIYftyA5LUavwEs_vxQHaHa%26pid%3DApi&f=1&ipt=bc7f55d4f21d9186620b3d6149f703cbbc4dae8727d32ff669ade2b85e6a8628&ipo=images"
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://gitlab.com/spunnanithi">
                    <img
                      className="block h-6 w-6 bg-yellow-400 rounded-full"
                      alt="Gitlab icon"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vS3nPtPbLZqF16SvLTAknwHaG1%26pid%3DApi&f=1&ipt=e2d0d29a940ac76ef2f56125ad783c0f9ef8dbc53a67ff798d7bce0d95c7c44c&ipo=images"
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
                Software Engineer:
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
                      className="block h-6 w-6 bg-yellow-400 rounded-full"
                      alt="Github icon"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_44605.png&f=1&nofb=1&ipt=60f2e29c62a8e99fae8e3e977e585e9df98b5fae9c5f330be8ae63b0430572e6&ipo=images"
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://www.linkedin.com/in/rodrigo-olmos-romo?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFX523HpFSQWpLSkmg8rM5w%3D%3D">
                    <img
                      className="block h-6 w-6 bg-yellow-400 rounded-full"
                      alt="Linkedin icon"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.33IcIYftyA5LUavwEs_vxQHaHa%26pid%3DApi&f=1&ipt=bc7f55d4f21d9186620b3d6149f703cbbc4dae8727d32ff669ade2b85e6a8628&ipo=images"
                    />
                  </a>
                </div>
                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                  <a href="https://gitlab.com/rodrigoolmos">
                    <img
                      className="block h-6 w-6 bg-yellow-400 rounded-full"
                      alt="Gitlab icon"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vS3nPtPbLZqF16SvLTAknwHaG1%26pid%3DApi&f=1&ipt=e2d0d29a940ac76ef2f56125ad783c0f9ef8dbc53a67ff798d7bce0d95c7c44c&ipo=images"
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
