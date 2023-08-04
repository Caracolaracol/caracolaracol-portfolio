'use client'
import React from 'react'
import { languageAtom } from '@/app/Store'
import { useAtomValue } from 'jotai'

interface Props {
  name: String,
  nameES?: String,
}

function TextTitle({ name, nameES }: Props) {
  const language = useAtomValue(languageAtom)

  return (
    <div className="pl-2 h-[2.7rem] flex items-center">
      <h1 className={`text-xl tablet:text-3xl laptop:text-4xl desktop:text-5xl font-tommy opacity-90 transitionshort`}>{language == 'EN' ? name : nameES == undefined ? name : nameES} </h1>
    </div>
  )
}

export default TextTitle