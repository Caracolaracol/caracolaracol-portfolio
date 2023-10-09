import React from 'react'

async function Page() {

  return (
    <div>
      <div className=" border-b-[1px] border-spacing-2 border-timberwolf border-opacity-40 dark:border-timberwolf dark:border-opacity-20 mb-6 flex justify-between transitionlong">
        <h1 className={`text-2xl grow tablet:text-3xl laptop:text-4xl desktop:text-5xl leading-tight font-tommy  pl-2 pb-2 transitionshort`}></h1>
      </div>
      <p className="dark:text-timberwolf dark:text-opacity-80 font-tommyregular">
        *Soon...
      </p>
      <div className="border-[1px] border-spacing-2  border-opacity-40 border-timberwolf dark:bg-black dark:border-timberwolf dark:border-opacity-10 rounded-tr-sm rounded-br-sm p-4 my-4">
        <div className="flex flex-col">
        </div>
      </div>
      <div className="border-[1px] border-spacing-2 border-timberwolf border-opacity-40 dark:bg-black dark:border-timberwolf dark:border-opacity-10 rounded-tr-sm rounded-br-sm p-4 my-4">
        <h1 className="text-xl pb-4"></h1>
        <div className="flex flex-col">
        </div>
      </div>
    </div>
  )
}

export default Page