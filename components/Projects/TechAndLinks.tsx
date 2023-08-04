'use client'
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Popover from '@radix-ui/react-popover'

import Image from 'next/image';
import { useAtomValue } from 'jotai';
import { languageAtom } from '@/app/Store';

function TechAndLinks({ tech, github, link, isCoding}:any) {
    const lang = useAtomValue(languageAtom)

const styles = 'font-tommyregular text-[1.2rem] text-ocre hover:text-timberwolf dark:text-ocre dark:hover:text-timberwolf'
    return (
        <div className="tablet:flex tablet:justify-between desktop:px-[2vw]">
                        <div>
                            <h2 className='font-chrono text-[1.8rem] text-fucsia dark:text-fucsiadark'>
                                {lang == 'EN' ? 'Technologies I used' : 'Tecnologías utilizadas'}
                            </h2>
                            <div key='laptop' className='hidden tablet:flex flex-wrap gap-3 transitionshort drop-shadow-md'>
                                {
                                    tech.map((s:any) => (
                                        <div key={s.idtech}>
                                            <Tooltip.Provider delayDuration={40} skipDelayDuration={30}>
                                                <Tooltip.Root>
                                                    <Tooltip.Trigger asChild >
                                                        <Image
                                                            key={s.idtech}
                                                            src={`/images${s.img}`}
                                                            width='40'
                                                            height='40'
                                                            rel="noreferrer noopener"
                                                            className="svg drop-shadow-md"
                                                            alt='tip'


                                                        />
                                                    </Tooltip.Trigger>
                                                    <Tooltip.Portal>
                                                        <Tooltip.Content className="TooltipContent" sideOffset={5} aria-label={s.description} side="bottom" >
                                                            <div className="rounded-xl bg-violeta dark:bg-blancon max-w-lg">
                                                                <p className="text-blancod dark:text-violetad font-tommy antialiased px-3 py-2">{s.description}</p>
                                                            </div>
                                                            <Tooltip.Arrow className="TooltipArrow" />
                                                        </Tooltip.Content>
                                                    </Tooltip.Portal>
                                                </Tooltip.Root>
                                            </Tooltip.Provider>
                                        </div>))
                                }
                            </div>
                            <div key='mobile' className='flex tablet:hidden flex-wrap gap-3 transitionshort '>
                                {
                                    tech.map((s:any) => (
                                        <div key={s.idtech}>
                                                <Popover.Root>
                                                    <Popover.Trigger asChild >
                                                        <Image
                                                            key={s.idtech}
                                                            src={`/images${s.img}`}
                                                            width='40'
                                                            height='40'
                                                            rel="noreferrer noopener"
                                                            className="svg drop-shadow-md"
                                                            alt='tip'


                                                        />
                                                    </Popover.Trigger>
                                                    <Popover.Portal>
                                                        <Popover.Content key={s.idtech} className="PopoverContent" sideOffset={5} aria-label={s.description} side="bottom" >
                                                            <div className="rounded-xl bg-violeta dark:bg-blancon max-w-lg">
                                                                <p className="text-blancod dark:text-violetad font-tommy antialiased px-3 py-2">{s.description}</p>
                                                            </div>
                                                            <Popover.Arrow className="TooltipArrow" />
                                                        </Popover.Content>
                                                    </Popover.Portal>
                                                </Popover.Root>
                                            
                                        </div>))
                                }
                            </div>
                        </div>
                        <div className="pt-[1.4rem]">
                            <div className="flex justify-end">
                                {
                                    isCoding &&<a className={styles} href={github} target='_blank' >
                                    {lang == 'EN' ? 'Github Repository' : 'Repositorio en Github'}
                                </a>
                                }
                                
                            </div>
                            {link ? <div className="flex justify-end"> 
                                {
                                    isCoding &&<a className={styles} href={link} target='_blank' >
                                    {lang == 'EN' ? 'Go to the site' : 'Ver el sitio'}
                                </a>
                                }
                                
                            </div> : null}

                        </div>
                    </div>
    )
}

export default TechAndLinks