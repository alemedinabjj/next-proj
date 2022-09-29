import { BaseIcon } from "@utils/BaseIcon"

export const Footer = () => {
  return (
    <div className="w-full dark:bg-primary bg-darkprimary py-32 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold dark:text-white text-white">Welcome Valorant Pixel</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              The ultimate tool to create your own Valorant maps.
            </h5>
            <div className="mt-6 flex gap-2">
              <button
                aria-label="Facebook"
                type="button"
              >
                <BaseIcon name="FaFacebookF" size="2rem" color={undefined} />
              </button>
              <button
                aria-label="Twitter"
                type="button"
              >
                <BaseIcon name="FaTwitter" size="2rem" color={undefined} />
              </button>
              <button
                aria-label="Instagram"
                type="button"
              >
                <BaseIcon name="FaInstagram" size="2rem" color={undefined} />
              </button>
              <button
                aria-label="Github"
                type="button"
              >
                <BaseIcon name="FaGithub" size="2rem" color={undefined} />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a href="#ale"
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#ale"
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#ale"
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="#ale"
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a href="#ale"
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a href="#ale"
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#ale"
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#ale"
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >
                      Make something
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />

        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              © {new Date().getFullYear()}{" "}
              <a
                href="#ale"
                className="text-gray-600 hover:text-gray-900"
              >
                Astarix Inc.
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )

}
