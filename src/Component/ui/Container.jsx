import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-[calc(82.5rem+4rem)] px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}

export default Container