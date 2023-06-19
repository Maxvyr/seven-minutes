"use client"

import React, { useEffect, useState } from "react"

const WorkTimer = ({ seconds }: { seconds: number }) => {
  // const [seconds, setSeconds] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds((seconds) => seconds + 1)
  //   }, 1000)

  //   // Cleanup function to clear the interval when the component unmounts
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div>
      <p>You have been on this page for {seconds} seconds.</p>
    </div>
  )
}

export default WorkTimer
