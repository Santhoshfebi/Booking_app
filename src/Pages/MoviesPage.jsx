import { React, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Movies() {
  return (
    <div className="flex bg-slate-100">
      {/* Filter Div */}
      <div className="w-2/12 m-5 relative">
        <div className="text-3xl font-bold">Filters</div>
        <div className="flex flex-col justify-around">
          <div>
            <div className="absolute right-0 mt-5 bg-white rounded-md">
              <Menu
                as="div"
                className="relative inline-block text-left rounded-lg"
              >
                <Menu.Button className="inline-flex w-60 justify-between h-10 rounded-lg gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900">
                  <div className="flex">
                    <ChevronDownIcon
                      className="h-5 w-5 text-black mr-2"
                      aria-hidden="true"
                    />
                    Languages
                  </div>
                  <button className="text-sm text-gray-400">Clear</button>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 w-60 origin-top-right bg-white">
                    <div className="py-1 flex justify-evenly">
                      <div className="border border-gray-400">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className="block p-2 text-sm text-red-600"
                            >
                              Kannada
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="border border-gray-400">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className="block p-2 text-sm text-red-600"
                            >
                              English
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="border border-gray-400">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className="block p-2 text-sm text-red-600"
                            >
                              Tamil
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </div>
                    <div className="py-1 flex justify-evenly">
                      <div className="flex border border-gray-400 items-center">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className="block p-2 text-sm text-red-600"
                            >
                              Hindi
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <div className="border border-gray-400">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className="block p-2 text-sm text-red-600"
                              >
                                Telugu
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </div>
                      <div className="flex border border-gray-400 items-center">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className="text-sm text-red-600 px-1 py-1"
                            >
                              Malayalam
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </div>
                    <div className="py-1 flex justify-evenly">
                      <div className="border border-gray-400">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className="block py-1 px-1 text-sm text-red-600"
                            >
                              English 7D
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="border border-gray-400">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className="block p-2 text-sm text-red-600"
                            >
                              Marathi
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="border border-gray-400">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className="block p-2 text-sm text-red-600"
                            >
                              Bengali
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </div>
                    <div className="border border-gray-400 w-20 p-1 text-center">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className="text-sm text-red-600 text-center"
                          >
                            Bhojpuri
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <div className="w-9/12">
        <div className="text-3xl font-bold mt-5">Movies In Bengaluru</div>
        <div className="m-2 text-red-600">
          <button className="border border-gray-600 bg-white rounded-3xl p-1 mr-3">
            Kannada
          </button>

          <button className="border border-gray-600 bg-white rounded-3xl p-1 mr-3">
            English
          </button>

          <button className="border border-gray-600 bg-white rounded-3xl p-1 mr-3">
            Telugu
          </button>

          <button className="border border-gray-600 bg-white rounded-3xl p-1 mr-3">
            Tamil
          </button>

          <button className="border border-gray-600 bg-white rounded-3xl p-1 mr-3">
            Hindi
          </button>

          <button className="border border-gray-600 bg-white rounded-3xl p-1 mr-3">
            Malayalam
          </button>

          <button className="border border-gray-600 bg-white rounded-3xl p-1 mr-3">
            English 7D
          </button>
          <button className="border border-gray-600 bg-white rounded-3xl p-1 mr-3">
            Japanese
          </button>
          <button className="border border-gray-600 bg-white rounded-3xl p-1 mr-3">
            Korean
          </button>
          <button className="border border-gray-600 bg-white rounded-3xl p-1 mr-3">
            Multi Language
          </button>
        </div>
        <div className="w-full bg-white h-16 rounded-lg flex justify-between p-3 items-center">
          <div className="text-2xl font-bold">Coming Soon</div>
          <div className="items-center relative">
            <button className="text-center text-red-600">
              Explore Upcoming Movies
              <i class="fi fi-rr-angle-small-right"></i>
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <div className="w-60 h-96 m-2">
                <div className="h-full w-full">
                  <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICAyMi41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379741-udeavkjwra-portrait.jpg"
                    alt=""
                    className="h-96 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="text-xl font-bold pl-4">Movie Name</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Certificate</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Language</label>
                </div>
              </div>
            </div>
            <div>
              <div className="w-60 h-96 m-2">
                <div className="h-full w-full object-fill">
                  <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTY5LjdLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00358147-ualvbgjhsh-portrait.jpg"
                    alt=""
                    className="h-96 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="text-xl font-bold pl-4">Movie Name</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Certificate</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Language</label>
                </div>
              </div>
            </div>
            <div>
              <div className="w-60 h-96 m-2">
                <div className="h-full w-full object-fill">
                  <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjIzLjlLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00038685-bgndlgsajf-portrait.jpg"
                    alt=""
                    className="h-96 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="text-xl font-bold pl-4">Movie Name</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Certificate</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Language</label>
                </div>
              </div>
            </div>
            <div>
              <div className="w-60 h-96 m-2">
                <div className="h-full w-full object-fill">
                  <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgMTAzLjlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384234-namrszxlsp-portrait.jpg"
                    alt=""
                    className="h-96 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="text-xl font-bold pl-4">Movie Name</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Certificate</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Language</label>
                </div>
              </div>
            </div>
            <div>
              <div className="w-60 h-96 m-2">
                <div className="h-full w-full object-fill">
                  <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICAxNjIuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386670-rybevyurtd-portrait.jpg"
                    alt=""
                    className="h-96 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="text-xl font-bold pl-4">Movie Name</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Certificate</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Language</label>
                </div>
              </div>
            </div>
            <div>
              <div className="w-60 h-96 m-2">
                <div className="h-full w-full object-fill">
                  <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAxMi40SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00389163-snshsztvqu-portrait.jpg"
                    alt=""
                    className="h-96 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="text-xl font-bold pl-4">Movie Name</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Certificate</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Language</label>
                </div>
              </div>
            </div>
            <div>
              <div className="w-60 h-96 m-2">
                <div className="h-96 w-full object-fill">
                  <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICAxMC4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00341317-tfhyqcxzpt-portrait.jpg"
                    alt=""
                    className="h-96 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="text-xl font-bold pl-4">Movie Name</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Certificate</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Language</label>
                </div>
              </div>
            </div>
            <div>
              <div className="w-60 h-96 m-2">
                <div className="h-full w-full object-fill">
                  <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICAyNi42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00330062-yemtmqvzub-portrait.jpg"
                    alt=""
                    className="h-96 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="text-xl font-bold pl-4">Movie Name</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Certificate</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Language</label>
                </div>
              </div>
            </div>
            <div>
              <div className="w-60 h-96 m-2">
                <div className="h-full w-full object-fill">
                  <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTI3LjFLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00343267-bjxpxxtvhp-portrait.jpg"
                    alt=""
                    className="h-96 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="text-xl font-bold pl-4">Movie Name</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Certificate</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Language</label>
                </div>
              </div>
            </div>
            <div>
              <div className="w-60 h-96 m-2">
                <div className="h-full w-full object-fill">
                  <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAyNi40SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00318073-yprrbdltbp-portrait.jpg"
                    alt=""
                    className="h-96 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="text-xl font-bold pl-4">Movie Name</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Certificate</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Language</label>
                </div>
              </div>
            </div>
            <div>
              <div className="w-60 h-96 m-2">
                <div className="h-full w-full object-fill">
                  <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAxLjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00389138-kqmapfefeg-portrait.jpg"
                    alt=""
                    className="h-96 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="text-xl font-bold pl-4">Movie Name</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Certificate</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Language</label>
                </div>
              </div>
            </div>
            <div>
              <div className="w-60 h-96 m-2 rounded-xl overflow-hidden">
                <div className="h-full w-full object-fill">
                  <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICAzOC45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00331567-bhgpebuawe-portrait.jpg"
                    alt=""
                    className="h-96 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="text-xl font-bold pl-4">Movie Name</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Certificate</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Language</label>
                </div>
              </div>
            </div>
            <div>
              <div className="w-60 h-96 m-2 rounded-xl overflow-hidden">
                <div className="h-full w-full object-fill">
                  <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICAxLjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386559-utrkshnrph-portrait.jpg"
                    alt=""
                    className="h-96 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="text-xl font-bold pl-4">Movie Name</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Certificate</label>
                </div>
                <div>
                  <label className="text-gray-400 pl-4">Language</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
