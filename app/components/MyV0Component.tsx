import { CalendarDays, Sun, Moon } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const schedule = [
  { day: "Monday", morning: "7:30 AM", evening: "6:00 PM" },
  { day: "Tuesday", morning: "7:30 AM", evening: "6:00 PM" },
  { day: "Wednesday", morning: "7:30 AM", evening: "6:00 PM" },
  { day: "Thursday", morning: "7:30 AM", evening: "6:00 PM" },
  { day: "Friday", morning: "7:30 AM", evening: "6:00 PM" },
  { day: "Saturday", morning: "8:30 AM", evening: "5:30 PM" },
  { day: "Sunday", morning: "8:30 AM", evening: "5:30 PM" },
]

export default function DogWalkingSchedule() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <CalendarDays className="h-6 w-6" />
          Dog Walking Schedule
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Day</TableHead>
              <TableHead>Morning Walk</TableHead>
              <TableHead>Evening Walk</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedule.map((day) => (
              <TableRow key={day.day}>
                <TableCell className="font-medium">{day.day}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4 text-yellow-500" />
                    {day.morning}
                    <span className="text-muted-foreground ml-2">(30 min)</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Moon className="h-4 w-4 text-blue-500" />
                    {day.evening}
                    <span className="text-muted-foreground ml-2">(45 min)</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

