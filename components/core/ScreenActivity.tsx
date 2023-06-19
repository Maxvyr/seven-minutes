"use client"

import React, { useEffect, useState } from "react"

import { Workout } from "@/lib/core/workouts"
import { Button } from "@/components/ui/button"

import { WorkActivity } from "./WorkActivity"

export const ScreenActivity = ({ workouts }: { workouts: Workout[] }) => {
  const [seconds, setSeconds] = useState(0)
  const [workoutIndex, setWorkoutIndex] = useState(0)
  const [isRunning, setIsRunning] = React.useState(false)

  const toggleActivity = () => {
    setIsRunning(!isRunning)
  }

  useEffect(() => {
    if (!isRunning) {
      setSeconds(0)
      return
    }

    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1)
    }, 1000)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval)
  }, [toggleActivity])

  useEffect(() => {
    if (seconds > 30) {
      setWorkoutIndex(workoutIndex + 1)
      setSeconds(0)
    }
  }, [seconds])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button variant="default" onClick={toggleActivity}>
          Start
        </Button>
        <Button variant="outline" onClick={toggleActivity}>
          Cancel
        </Button>
      </div>
      {isRunning && (
        <WorkActivity workout={workouts[workoutIndex]} seconds={seconds} />
      )}
    </div>
  )
}
