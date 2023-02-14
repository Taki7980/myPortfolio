import React from 'react'


export default function Nextsection(props) {
    return (
        <>
            <div className="next_section justify-center px-8">
                <div className="id_with_name_container lg:w-[50%] m-auto flex  justify-between sm:w-[100%]">
                    <div className="details_in_id lg:w-[70%] sm:w-[80%]">
                        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white dark:text-white">Nirjhar sarkar
                        </h1>
                        <h3 className="pt-2 text-gray-300 dark:text-gray-300 mb-4">A passionate web Developer</h3>
                        <p className="text-gray-400 dark:text-gray-400 mb-16">It fascinates me,When my code works smoothly, and the
                            adrenalin rush of that feeling keeps me going...</p>
                    </div>
                    <div className="img_inside_id lg:w-[30%] sm:w-auto">
                        <img className="rounded-full lg:h-[50%] ml-auto"
                            src={props.profilePic} alt=""></img>
                    </div>
                </div>
            </div>
        </>
    )
}
