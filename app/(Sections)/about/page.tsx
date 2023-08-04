'use client'
import { languageAtom } from '@/app/Store'
import { useAtomValue } from 'jotai'
import Image from 'next/image'
import React from 'react'
import fotoyo from '@/public/images/yo4.jpg'
import fotoyo2 from '@/public/images/yo3.jpg'

function Page() {
  const lang = useAtomValue(languageAtom)
  
  return (
  <div>
      <div className="mb-12">
          <div className="mb-6">
              <div className="border-b-[1px] border-spacing-2 border-timberwolf border-opacity-40 dark:border-timberwolf dark:border-opacity-20 mb-6 transicioncorta">
                  <h1 key='About Me' className={`text-xl tablet:text-3xl laptop:text-4xl desktop:text-5xl leading-tight font-tommy min-h-max pl-2 pb-2 transicioncorta`}>{lang == 'EN' ? 'About' : 'Sobre mi'}  </h1>
              </div>
          </div>

          <div>
              <div className="text-left">
                  <Image src={fotoyo} className='w-[45vw] tablet:w-[20vw] laptop:w-[25vw]  h-auto float-right ml-3 laptop:mb-4 desktop:mb-4 max-w-[290px] ' alt="el fotografo posando en un bosque de litres" />
              </div>
              <p className="text-justify font-tommylight tracking-wider subpixel-antialiased mb-4">{lang == 'EN' ? "Hi! I'm Agustín Rojas aka Caracol aka Caracolaracol. First of all, I want to thank you for visiting my site! Here you can see my work as a Web developer, but also, as an artist. This site is still under construction because there are a lot of things that I want to share and in time I'll update the code and of course, the content of the site." : "Hola! Soy Agustìn Rojas, te agradezco por visitar mi sitio!, Aquí podras ver mi trabajo como desarrollador y como artista. Aún lo estoy construyendo porque hay muchas cossas que quiero compartir así que con el tiempo iré actualizando el código y el contenido del sitio."}
              </p>
              <p className="text-justify font-tommylight tracking-wider subpixel-antialiased mb-4">{lang == 'EN' ? "2 years ago, I started to learn web development and since then, I've been working and studing in order to become a master in these technologies. Of course, I know that's a very long and difficult roadmap but despite that I really like doing these things so, I just keep learning and enjoying the process." : "Hace 2 años comencé a aprender desarrollo web y desde entonces he estado trabajando y estudiando para poder convertirme en un maestro en estas tecnologías. Sé por supuesto que ese es un camino muy largo y complicado, pero aún así, como disfruto de este tipo de actividades lo que hago es simplemente seguir aprendiendo y disfrutando el proceso. "}</p>
              <p className="text-justify font-tommylight tracking-wider subpixel-antialiased mb-4">{lang == 'EN' ? "As an artist, I like to explore and work with different materials and platforms, and in that sense I'm used to dedicate a lot of time to learn some artistic discipline and after that make something with it. Until now, I've created some music, paintings, ceramics, video, animation, photography, writing, sound-art and radio-theatre." : "Como artista, me gusta explorar y trabajar con diferentes materiales y soportes, y en ese sentido, suelo dedicar un tiempo para aprender alguna disciplina artística para luego de eso, hacer algo con esas nuevas herramientas aprendidas. Hasta ahroa he hecho trabajos en las áreas de la píntura, cerámica, video, animación, fotografía, literatura, arte sonoro y teatro."}</p>
              <p className="text-justify font-tommylight tracking-wider subpixel-antialiased mb-7">{lang == 'EN' ? "As a photographer, I'm actually more like a macrophotographer of bugs. Doing that kind of photos puts you in touch with nature in a meditative state that through the lens you can experience. Patience its the key in this type of photography because your subject may it be a flying insect, or a very fast one, or even an agressive one, thats why it is always important to keep the distance and maintain deference of the creatures that lives in the nature." : "A veces hago fotografía macro, con ella me sitúo en contacto on la naturaleza a través de un estado meditativo que puedes experimentar a través del lente. La paciencia es la clave en este tipo de fotografía porque you sujeto a inmortalizar puede ser un insecto volador, tal vez uno muy rápido, o incluso un bicho agresivo, por eso siempre es importante mantener la distancia y el respeto a las criaturas que viven en la naturaleza."}</p>
              <div className=" clear-both border-b-[1px] border-timberwolf border-opacity-40 dark:border-timberwolf dark:border-opacity-20 mt-4 mb-4 desktop:mt-6 desktop:mb-6 w-[80%] flex mx-auto">

              </div>
              <Image src={fotoyo2} alt="el fotografo posando en un bosque de litres" />
              <div className=" font-tommylight tracking-wider subpixel-antialiased clear-both border-b-[1px] border-timberwolf border-opacity-40 dark:border-timberwolf dark:border-opacity-20 mt-4 mb-4 desktop:mt-6 desktop:mb-6 w-[80%] flex mx-auto">

              </div>
              <p className="text-justify font-tommylight tracking-wider subpixel-antialiased">{lang == 'EN' ? "I invite you a navigate through this site and see all my works.Also if do you have an idea, a necessity, or need a Website, then feel free to contact me and we'll work together to become real that idea. Again, thank you for visiting my site, take care!" : "Te invito a navegar por este sitio y ver mis trabajos. Si tienes una idea, una necesidad, o necesitas un sitio web, siéntete libre en contactarme y trabajaremos juntxs para volver real esa idea. Nuevamente gracias por visitar mi sitio, cuidate!"}</p>
          </div>
      </div>
     
  </div>)
}

export default Page