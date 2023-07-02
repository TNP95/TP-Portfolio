import React from 'react'
import certificado from "../certificado.png"

function Certificados() {
  return (
    <div id='certificado' className='flex flex-col items-center pt-[12vh]'>
      <h2 className='font-bold text-5xl text-cyan-400 flex flex-col animate-pulse mb-6'>Certificate</h2>
      <img src={certificado} alt="Linkedin" className='h-96 w-72'/>
    </div>
  )
}

export default Certificados
