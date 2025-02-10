import Image from 'next/image'
import React from 'react'

const services = [
  {id: 1, img: "/wedding.jpg", title: "Weddings", description: "Create unforgettable wedding experiences with our expert planning and decoration services."},
  {id: 2, img: "/cooperate.jpeg", title: "Corporate Events", description: "Professional and seamless corporate event planning to impress your guests and clients."},
  {id: 3, img: "/party.jpg", title: "Parties", description: "Make your parties memorable with our creative and thematic decoration services."},
]

const Services = () => {
  return (
    <div className='px-5 sm:px-12 py-4 scroll-mt-16' id='services'>
        <h1 className='text-3xl font-bold text-center'>What We Offer</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-5'>
          {
            services.map((item) => {
              return (
                <div key={item.id} className='flex flex-col hover:shadow-md duration-300 gap-4 p-5 border rounded-2xl shadow'>
                  <div className='group-hover:scale-[1.01] duration-300'>

                  <Image className='w-full h-full rounded-2xl aspect-square' loading='lazy' src={item.img} alt={item.title} width={300} height={300} />
                  </div>
                  <h2 className='text-xl font-bold '>{item.title}</h2>
                  <p className='font-medium'>{item.description}</p>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Services