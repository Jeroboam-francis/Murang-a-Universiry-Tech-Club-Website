interface EventDetails {
  id: string;
  track: string;
  day: string;
  time: string;
  location: string;
  leader: string;
}

export const eventsSchedule: EventDetails[] = [
  {
    id: "cyber-security",
    track: "Cyber Security",
    day: "Monday",
    time: "4:00 PM - 7:00 PM",
    location: "Computer Lab F04",
    leader: "Webster Ifedha",
  },
  {
    id: "ui-ux",
    track: "UI/UX Design",
    day: "Tuesday",
    time: "5:00 PM - 8:00 PM",
    location: "Computer Lab F04",
    leader: "Manase Gunga",
  },
  {
    id: "web-development",
    track: "Web Development",
    day: "Wednesday",
    time: "6:00 PM - 9:00 PM",
    location: "Computer Lab F04",
    leader: "Carolyne Githenduka",
  },
  {
    id: "mobile-apps",
    track: "Mobile Apps Development",
    day: "Thursday",
    time: "4:00 PM - 7:00 PM",
    location: "Computer Lab F04",
    leader: "Stanley Amunze",
  },
  {
    id: "cloud-engineering",
    track: "Cloud Engineering",
    day: "Friday",
    time: "3:00 PM - 6:00 PM",
    location: "Computer Lab F04",
    leader: "Paul Karanja",
  },
  {
    id: "power-platform",
    track: "Power Platform",
    day: "Saturday",
    time: "1:00 PM - 4:00 PM",
    location: "Computer Lab F04",
    leader: "Evyonn Mbithe",
  },
];

