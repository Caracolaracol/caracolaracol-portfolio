import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => <h2 className='font-tommy tracking-wider antialiased' style={{ fontSize: '2em' }}>{children}</h2>,
    p: ({ children }) => <p className='font-tommyregular tracking-wider antialiased' style={{ fontSize: '1em' }}>{children}</p>,
    Image: (props:any) => (
      <Image
      width={props.w}
      height={props.h}
        {...props}
      />
    ),
    ...components,
  }
}