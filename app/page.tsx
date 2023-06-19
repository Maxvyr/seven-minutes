import Link from "next/link"

import { siteConfig } from "@/config/site"
import { workoutsBase } from "@/lib/core/workouts"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

async function getData() {
  return {
    workouts: workoutsBase,
  }
}

export default async function IndexPage() {
  const { workouts } = await getData()
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          7 minutes workout
        </h1>
      </div>
      <div className="flex gap-4">
        <form className="flex gap-4">
          <Button variant="default" type="submit">
            Start
          </Button>
          <Button variant="outline" type="submit">
            Cancel
          </Button>
        </form>
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        {workouts &&
          workouts.map((workout, i) => (
            <Card className="w-[350px]" key={i}>
              <CardHeader>
                <CardTitle>{workout.name}</CardTitle>
                <CardDescription>
                  Jumping Jacks, Wall Sit, Push Up, Abdominal Crunch, Step Up
                  onto Chair, Squat, Triceps Dip on Chair, Plank, High Knees
                  Running in Place, Lunge, Push Up and Rotation, Side Plank
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Time</p>
                <p>{workout.time}</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button>Pause</Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </section>
  )
}
