import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Input } from "@/components/retroui/Input";
import { Text } from "@/components/retroui/Text";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto w-full max-w-6xl px-6 pt-8">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded border-2 bg-primary shadow-md">
              <Text as="h6" className="font-bold">
                ED
              </Text>
            </div>
            <div className="leading-tight">
              <Text as="h4">EasyDrive</Text>
              <Text as="p" className="text-muted-foreground">
                Driving teachers ↔ learners
              </Text>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <Text as="a" href="#how" className="text-muted-foreground">
              How it works
            </Text>
            <Text as="a" href="#teachers" className="text-muted-foreground">
              For teachers
            </Text>
            <Text as="a" href="#safety" className="text-muted-foreground">
              Safety
            </Text>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12">
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="solid" size="sm">
                New
              </Badge>
              <Badge variant="surface" size="sm">
                Built for local instructors
              </Badge>
            </div>

            <Text as="h1" className="max-w-xl">
              Find the right driving teacher. Learn with confidence.
            </Text>

            <Text as="p" className="max-w-xl text-muted-foreground">
              EasyDrive connects certified driving teachers with people who want
              to learn how to drive—matching by location, schedule, car type, and
              learning goals.
            </Text>

            <Card className="w-full">
              <Card.Header>
                <Card.Title>Start with your city</Card.Title>
                <Card.Description>
                  We’ll show nearby teachers and the next available lesson
                  times.
                </Card.Description>
              </Card.Header>
              <Card.Content className="space-y-3">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    placeholder="Enter your city (e.g., São Paulo)"
                    aria-label="City"
                  />
                  <Button className="justify-center sm:w-auto" type="button">
                    Find teachers
                  </Button>
                </div>
                <Text as="p" className="text-sm text-muted-foreground">
                  Want to teach?{" "}
                  <Text as="a" href="#teachers">
                    Apply as an instructor
                  </Text>
                  .
                </Text>
              </Card.Content>
            </Card>
          </div>

          <div className="grid gap-4">
            <Card className="w-full">
              <Card.Header>
                <Card.Title>For learners</Card.Title>
                <Card.Description>
                  Book lessons that fit your pace and your schedule.
                </Card.Description>
              </Card.Header>
              <Card.Content className="grid gap-3">
                <ul className="grid gap-2">
                  <Text as="li" className="text-muted-foreground">
                    - Compare teachers, availability, and lesson formats
                  </Text>
                  <Text as="li" className="text-muted-foreground">
                    - Learn manual or automatic (as available)
                  </Text>
                  <Text as="li" className="text-muted-foreground">
                    - Track your progress: parking, highways, night driving
                  </Text>
                </ul>
              </Card.Content>
            </Card>

            <Card className="w-full">
              <Card.Header>
                <Card.Title>For teachers</Card.Title>
                <Card.Description>
                  Get discovered by new students in your area.
                </Card.Description>
              </Card.Header>
              <Card.Content className="grid gap-3">
                <ul className="grid gap-2">
                  <Text as="li" className="text-muted-foreground">
                    - Set your zones, prices, and availability
                  </Text>
                  <Text as="li" className="text-muted-foreground">
                    - Manage bookings in one place
                  </Text>
                  <Text as="li" className="text-muted-foreground">
                    - Build trust with verified profiles and reviews
                  </Text>
                </ul>
              </Card.Content>
            </Card>
          </div>
        </section>

        <section id="how" className="mt-14 space-y-6">
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-2">
              <Text as="h2">How it works</Text>
              <Text as="p" className="text-muted-foreground">
                Simple flow for learners and instructors.
              </Text>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="w-full">
              <Card.Header>
                <Badge variant="solid" size="sm" className="w-fit">
                  Step 1
                </Badge>
                <Card.Title className="mt-2">Search</Card.Title>
                <Card.Description>
                  Find teachers near you with the car type you prefer.
                </Card.Description>
              </Card.Header>
            </Card>
            <Card className="w-full">
              <Card.Header>
                <Badge variant="solid" size="sm" className="w-fit">
                  Step 2
                </Badge>
                <Card.Title className="mt-2">Book</Card.Title>
                <Card.Description>
                  Pick a time, choose lesson goals, and confirm.
                </Card.Description>
              </Card.Header>
            </Card>
            <Card className="w-full">
              <Card.Header>
                <Badge variant="solid" size="sm" className="w-fit">
                  Step 3
                </Badge>
                <Card.Title className="mt-2">Drive</Card.Title>
                <Card.Description>
                  Learn safely, track progress, and build confidence.
                </Card.Description>
              </Card.Header>
            </Card>
          </div>
        </section>

        <section
          id="teachers"
          className="mt-14 grid gap-4 md:grid-cols-[1.5fr_1fr]"
        >
          <Card className="w-full">
            <Card.Header>
              <Card.Title>Become a teacher on EasyDrive</Card.Title>
              <Card.Description>
                Create a profile, set availability, and start receiving lesson
                requests.
              </Card.Description>
            </Card.Header>
            <Card.Content className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Text as="p" className="text-muted-foreground">
                We’re launching city by city. Join the waitlist to be first.
              </Text>
              <Button variant="secondary" type="button">
                Join the teacher waitlist
              </Button>
            </Card.Content>
          </Card>

          <Card className="w-full">
            <Card.Header>
              <Card.Title>What we verify</Card.Title>
              <Card.Description>
                We’ll keep this strict—quality and safety first.
              </Card.Description>
            </Card.Header>
            <Card.Content className="grid gap-2">
              <Text as="p" className="text-muted-foreground">
                - Identity + contact
              </Text>
              <Text as="p" className="text-muted-foreground">
                - Instructor credentials (where applicable)
              </Text>
              <Text as="p" className="text-muted-foreground">
                - Vehicle details and lesson coverage areas
              </Text>
            </Card.Content>
          </Card>
        </section>

        <section id="safety" className="mt-14">
          <Card className="w-full">
            <Card.Header>
              <Card.Title>Safety & trust</Card.Title>
              <Card.Description>
                The platform is designed to reduce uncertainty for both sides.
              </Card.Description>
            </Card.Header>
            <Card.Content className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Text as="h4">Verified profiles</Text>
                <Text as="p" className="text-muted-foreground">
                  Teachers and learners build credibility with verification and
                  history.
                </Text>
              </div>
              <div className="space-y-2">
                <Text as="h4">Clear lesson goals</Text>
                <Text as="p" className="text-muted-foreground">
                  Every lesson can target specific skills like parking, merging,
                  or exam prep.
                </Text>
              </div>
              <div className="space-y-2">
                <Text as="h4">Transparent pricing</Text>
                <Text as="p" className="text-muted-foreground">
                  No surprises—see pricing and policies before booking.
                </Text>
              </div>
            </Card.Content>
          </Card>
        </section>

        <footer className="mt-14 border-t-2 pt-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <Text as="p" className="text-muted-foreground">
              © {new Date().getFullYear()} EasyDrive. All rights reserved.
            </Text>
            <div className="flex items-center gap-4">
              <Text as="a" href="#" className="text-muted-foreground">
                Privacy
              </Text>
              <Text as="a" href="#" className="text-muted-foreground">
                Terms
              </Text>
              <Text as="a" href="#" className="text-muted-foreground">
                Contact
              </Text>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
