import React from 'react'
import Textbox from '@/app/components/textbox'
import { paragraphInstances } from '@/app/InstanceData'

const textbody = paragraphInstances;

export default function ScriptPage({passedName , passedTitle}:any) {
  return (
    <>
    <div><p>Script Page</p> 
    <span className="my-2 text-sm">
    {passedName ?  passedName + " " + passedTitle : "No channel is Selected!" }        
    </span>
    </div>
    <div className='space-y-10'>
      {
       textbody.map((body) => (
        <Textbox key={body.id}
        body={body.body}
        author={body.author}
        releaseDate={body.data}/> 
       )) 
      }
    </div>
    </>
  )
}
