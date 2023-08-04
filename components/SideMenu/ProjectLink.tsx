import React from 'react'
import Link from 'next/link'

function ProjectLink(props:any) {

  return (
    <Link href={props.projectname == undefined ? `${props.pathname}/${props.id}` : `${props.routeInitial}/${props.id}`} key={props.id}>
        <li className={`${props.projectname === props.id ? 'text-ocre dark:text-ocre' : 'text-snow'} font-tommyregular indent-1 laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased dark:hover:text-timberwolf hover:text-timberwolf`}>
            - {props.name}
        </li>
    </Link>
  )
}

export default ProjectLink