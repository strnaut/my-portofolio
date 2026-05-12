import React from 'react'

function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-surface-a0 text-white bg-[linear-gradient(to_right,#252525_1px,transparent_1px),linear-gradient(to_bottom,#252525_1px,transparent_1px)] bg-size-[4rem_4rem]'>
      {children}
    </div>
  )
}

export default Background 