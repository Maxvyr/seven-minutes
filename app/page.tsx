import { workoutsBase } from "@/lib/core/workouts"
import { ScreenActivity } from "@/components/core/ScreenActivity"

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
      <ScreenActivity workouts={workouts} />
    </section>
  )
}
