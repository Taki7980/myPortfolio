/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './logo.svg';
// import l1 from './images/clear_sky_1.jpg';
import './App.css';

function App() {
  return (
    <>
      <div className="bg-red-900 text-blue-400 font-semibold">
        <div className="navbar justify-center px-8">
          <div className="nav_container w-[50%] m-auto py-4 flex flex-row justify-between items-center pb-[60px]">
            <div className="nav_icons space-x-7 text-xl">
              <a className="font-semibold text-blue-400 dark:text-blue-400 hidden md:inline-block p-1 sm:pr-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-800 transition-all capitalize hover:text-black"
                href="/">Home</a>
              <a className="font-semibold text-blue-400 dark:text-blue-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all hover:text-black"
                href="/">Contact</a>
              <a className="font-semibold text-blue-400 dark:text-blue-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all hover:text-black"
                href="/">Blog</a>
              <a className="font-semibold text-blue-400 dark:text-blue-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all hover:text-black"
                href="/">About</a>
            </div>
            <div className="nav_img w-[5%] h-[5%] rounded-full">
              <img className="rounded-full" src="https://i1.sndcdn.com/avatars-000676457144-7o0rlx-t500x500.jpg" alt=""></img>
            </div>
          </div>
        </div>

        {/* <!-- ============================================================================== --> */}
        <div className="next_section justify-center px-8">
          <div className="id_with_name_container w-[50%] m-auto flex justify-between">
            <div className="details_in_id w-[70%]">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-blue-400 dark:text-white">Nirjhar sarkar
              </h1>
              <h3 className="pt-2 text-blue-400 dark:text-blue-400 mb-4">A passionate web Developer</h3>
              <p className="text-blue-400 dark:text-blue-400 mb-16">It fascinates me,When my code works smoothly, and the
                adrenalin rush of that feeling keeps me going...</p>
            </div>
            <div className="img_inside_id w-[30%]">
              <img className="rounded-full h-[50%] ml-auto"
                src="https://i1.sndcdn.com/avatars-000676457144-7o0rlx-t500x500.jpg" alt=""></img>
            </div>
          </div>
        </div>

        {/* <!-- ===================================================================================== --> */}

        <div className="cards_scection px-8">
          <div className="card_container w-[50%] m-auto justify-center">
            <div className="heading pb-8">
              <h2 className="font-bold text-[2.125rem]">Things about Me</h2>
            </div>
            <div className="cards flex gap-6 flex-col md:flex-row">
              <div className="card1">
                <div
                  className="max-w-sm p-2 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-r from-[#9b65d4] to-[#eb5a2a]">
                  <div className="bg-black rounded-lg shadow-md p-6 pb-[106px]">
                    <a href="/">
                      <h5 className="mb-4 text-2xl font-semibold tracking-tight text-blue-400 dark:text-white">
                        My Journey</h5>
                    </a>
                    <p className="mb-3 font-light text-white dark:text-white">My journey as a developer was like a rollercoaster of difficulties and problems. but in the end here i am.</p>
                  </div>

                </div>
              </div>
              <div className="card2">
                <div
                  className="max-w-sm p-2 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-r from-[#D8B4FE] to-[#818CF8]">
                  <div className="bg-black rounded-lg shadow-md p-6 pb-[32px]">
                    <a href="/">
                      <h5 className="mb-4 text-2xl font-semibold tracking-tight text-blue-400 dark:text-white">
                        learning is not enough we must apply</h5>
                    </a>
                    <p className="mb-3 font-light text-white dark:text-white">gathering Knowledge is good but you have to be able to implement it in work</p>
                  </div>

                </div>
              </div>
              <div className="card3">
                <div
                  className="max-w-sm p-2 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-r from-[#5eff2d] to-[#495bff]">
                  <div className="bg-black rounded-lg shadow-md p-6">
                    <a href="/">
                      <h5 className="mb-4 text-2xl font-semibold tracking-tight text-blue-400 dark:text-white">
                        Exploring new stuffs</h5>
                    </a>
                    <p className="mb-3 font-light text-white dark:text-white">To be honest I'm a curiosity monkey and i like to learn new stuff frequently. I believe that you will no longer be a human if you stop learning.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--======================================================================================== --> */}

        <div className="my_projects_section px-8 py-8">
          <div className="my_projects_box m-auto w-[50%]">
            <div className="heading_with_paragraph">
              <h2 className="font-bold text-[2.125rem]">Some of the projects that i have done</h2>
              <p className="text-blue-400 dark:text-blue-400 mb-4">Down here are some of my projects that i have completed

              </p>
            </div>
            <div className="projects_link_with_details text-xl">
              <div className="project1 flex py-3 border border-x-0 border-t-0">
                <div className="digit self-center">01</div>
                <div className="name mx-auto self-center">React Weather App</div>
                <div className="link"><a
                  className="font-semibold text-yellow-500 hover:text-black dark:text-blue-400 hidden md:inline-block p-1 sm:pr-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all capitalize"
                  href="https://taki7980.github.io/REACT-WEATHER-APP/" target="_blank" rel="noopener noreferrer">click here</a></div>
              </div>
              <div className="project2 flex py-3 border border-x-0 border-t-0">
                <div className="digit self-center">02</div>
                <div className="name mx-auto self-center">Food ordering Website</div>
                <div className="link "><a
                  className="font-semibold text-yellow-500 hover:text-black dark:text-blue-400 hidden md:inline-block p-1 sm:pr-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all capitalize"
                  href="https://taki7980.github.io/Food_ordering_website/" target="_blank" rel="noopener noreferrer">click here</a>
                </div>
              </div>
              <div className="project3 flex py-3 border border-x-0 border-t-0">
                <div className="digit self-center">03</div>
                <div className="name mx-auto self-center">TinCat Website</div>
                <div className="link"><a
                  className="font-semibold text-yellow-500 hover:text-black dark:text-blue-400 hidden md:inline-block p-1 sm:pr-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all capitalize"
                  href="https://taki7980.github.io/TinCat/" target="_blank" rel="noopener noreferrer">click here</a></div>
              </div>
              <div className="project4 flex  py-3 border border-x-0 border-t-0">
                <div className="digit self-center">04</div>
                <div className="name mx-auto self-center">Tip Calculator</div>
                <div className="link"><a
                  className="font-semibold text-yellow-500 hover:text-black dark:text-blue-400 hidden md:inline-block p-1 sm:pr-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all capitalize"
                  href="http://">click here</a></div>
              </div>
              <div className="project5 flex py-3 border border-x-0 border-t-0">
                <div className="digit self-center">05</div>
                <div className="name mx-auto self-center">News App</div>
                <div className="link"><a
                  className="font-semibold text-yellow-500 hover:text-black dark:text-blue-400 hidden md:inline-block p-1 sm:pr-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all capitalize"
                  href="http://">click here</a></div>
              </div>
              <div className="project5 flex py-3 border border-x-0 border-t-0">
                <div className="digit self-center">06</div>
                <div className="name mx-auto self-center">Nirjhar Football Coaching Center</div>
                <div className="link"><a
                  className="font-semibold text-yellow-500 hover:text-black dark:text-blue-400 hidden md:inline-block p-1 sm:pr-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all capitalize"
                  href="http://">click here</a></div>
              </div>
              <div className="project5 flex py-3 border border-x-0 border-t-0">
                <div className="digit self-center">07</div>
                <div className="name mx-auto self-center">Update your text with NsCut</div>
                <div className="link"><a
                  className="font-semibold text-yellow-500 hover:text-black dark:text-blue-400 hidden md:inline-block p-1 sm:pr-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all capitalize"
                  href="http://">click here</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
