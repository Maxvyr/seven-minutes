"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Workout } from "../../lib/core/workouts"
import WorkTimer from "./WorkTimer"

type WorkActivityProps = {
  workout: Workout
  seconds: number
}

export const WorkActivity = ({ workout, seconds }: WorkActivityProps) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{workout.name}</CardTitle>
        <CardDescription>
          Jumping Jacks, Wall Sit, Push Up, Abdominal Crunch, Step Up onto
          Chair, Squat, Triceps Dip on Chair, Plank, High Knees Running in
          Place, Lunge, Push Up and Rotation, Side Plank
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Time</p>
        <p>{workout.time}</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <WorkTimer seconds={seconds} />
        <Button>Pause</Button>
      </CardFooter>
    </Card>
  )
}
