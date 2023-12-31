"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-100'>Bienvenidos a{" "}</span> 
                        <br></br>
                        <TypeAnimation
                            sequence={[
                            'UnStudy',
                            1000, 
                            'Unal Medellin'
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        En el Portal Educativo UnStudy, creemos que todos los estudiantes tienen el potencial de tener éxito en sus estudios. Por eso, hemos creado una plataforma que les brinda todas las herramientas necesarias para lograrlo. Desde materiales de estudio hasta consejos prácticos, el Portal Educativo UnStudy tiene todo lo que necesitan para triunfar en su carrera académica.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-500 via-black-500 to-blue-500 hover:bg-slate-200 text-white'>Carreras</button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-black-500 to-green-500 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Proyectos</span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg-mt-0'>
                    <div className="lg:m-0 m-8 rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image 
                            src="/images/UnalLogo.svg" 
                            alt='unstudy'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' 
                            width={300} height={300} 
                        />
                    </div>
                </div>
            </div>
        </section>
    ) 
}

export default HeroSection