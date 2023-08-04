import { languageAtom } from '@/app/Store'
import { useAtomValue } from 'jotai'
import React from 'react'

function TextContent({content, contentES}:any) {
    const language = useAtomValue(languageAtom)

  return (
    <p className='text-[1rem] font-tommyregular tracking-wider antialiased text-justify ' >{language == 'EN' ? content : contentES}</p>
  )
}

export default TextContent