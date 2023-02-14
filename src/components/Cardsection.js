import React from 'react'

export default function Cardsection() {
    return (
        <>
            <div className="cards_scection px-8">
                <div className="card_container lg:w-[50%] m-auto justify-center sm:w-[100%]">
                    <div className="heading pb-8">
                        <h2 className="font-bold text-[2.125rem]">Things about Me</h2>
                    </div>
                    <div className="cards flex gap-6 flex-col md:flex-row">
                        <div className="card1">
                            <div
                                className="max-w-sm p-2 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-r from-[#9b65d4] to-[#eb5a2a]">
                                <div className="bg-black rounded-lg shadow-md p-6 pb-[106px]">
                                    <a href="/">
                                        <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-400 dark:text-white">
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
                                        <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-400 dark:text-white">
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
                                        <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-400 dark:text-white">
                                            Exploring new stuffs</h5>
                                    </a>
                                    <p className="mb-3 font-light text-white dark:text-white">To be honest I'm a curiosity monkey and i like to learn new stuff frequently. I believe that you will no longer be a human if you stop learning.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
