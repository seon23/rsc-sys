import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function CheckReservation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Check Reservation</CardTitle>
      </CardHeader>
      <CardContent>
        <p>예약 일시</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
