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

const WorkActivity = ({ workout, seconds }: WorkActivityProps) => {
  return (
    <Card className="w-full lg:w-3/4">
      <CardHeader>
        <CardTitle>{workout.name}</CardTitle>
        <CardDescription>{<p>{workout.description}</p>}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-center">
        <h3 className="text-center font-bold">Timer : {seconds}s</h3>
      </CardFooter>
    </Card>
  )
}

export default WorkActivity
