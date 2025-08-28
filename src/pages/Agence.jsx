import React, { useRef } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef=  useRef(null)
  const imageRef= useRef(null)
     
     const imageArray= [
      'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
      'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
      'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
      'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
      'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
      'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
      'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
      'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
      'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
      'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
      'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
      'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
      'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
     ]


  useGSAP(function(){
      gsap.to(imageDivRef.current, {
        scrollTrigger:{
            trigger: imageDivRef.current,
            markers:true,
            start: 'top 36%',
            end:'top -70%',
            scrub: true,
            pin: true,
            onUpdate:function(element){
              console.log 
            }
        }
      })
    })

  

  return (
    <div>
    
    <div className='section-1'>
      <div ref={imageDivRef} className=' absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw] top-40 left-[30vw] bg-red-500'>
         <img className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"></img>
       </div>
       <div className='relative font-[font2]'> 
        <div className='mt-[55vh]'>
          <h1 className='text-[20vw] text-center uppercase leading-[18vw]' > Soixne7e <br/>
          Douze</h1>
       </div>
       <div className='pl-[40%] mt-20'>
        <p className='text-4xl'>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes. </p>
       </div>
      </div>
     </div>

     
      <div className="section2 h-screen ">
      
    </div>

    </div>

    


  )
}

export default Agence
