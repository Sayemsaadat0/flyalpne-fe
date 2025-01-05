export function getCountdown(targetDate: string | Date): [number, number, number, number] {
  const now = new Date();
  const target = new Date(targetDate);
  const difference = target.getTime() - now.getTime();

  if (difference <= 0) {
    return [0, 0, 0, 0]; // Return all zeros when the time is up
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
}

//   // Example usage:
//   console.log(getCountdown('2024-12-31T23:59:59'));
