export interface LeadershipProfile {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

export const leadershipTeam: LeadershipProfile[] = [
  {
    id: "john-ndia",
    name: "Dr. John Ndia",
    role: "Patron",
    bio: "Dr. John Ndia is a distinguished academic and technology enthusiast who provides strategic guidance and mentorship to the Murang'a University Tech Club. With extensive experience in technological innovation and academic leadership, he plays a crucial role in shaping the club's vision and supporting student-driven technological initiatives.",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      facebook: "https://facebook.com/johndoe",
      instagram: "https://instagram.com/",
    },
  },
  {
    id: "victory-njeri",
    name: "Victory Njeri",
    role: "Chairperson",
    bio: "Victory Njeri is a visionary leader passionate about technology and innovation. As the Chairperson of MUTC, she drives the club's strategic direction, fosters collaboration, and ensures the club continues to provide valuable learning experiences for its members. Her leadership focuses on creating opportunities for technological growth and skill development.",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/victorynjeri",
      twitter: "https://twitter.com/victorynjeri",
      facebook: "https://facebook.com/victorynjeri",
      instagram: "https://instagram.com/victorynjeri",
    },
  },
  {
    id: "allan-muhari",
    name: "Allan Muhari",
    role: "Vice Chairperson",
    bio: "Allan Muhari is a dynamic technology enthusiast who supports the club's leadership and helps implement strategic initiatives. As Vice Chairperson, he works closely with the leadership team to ensure smooth operations, coordinate club activities, and create an inclusive environment for technological learning and innovation.",
    imageUrl: "https://randomuser.me/api/portraits/men/46.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/allanmuhari",
      twitter: "https://twitter.com/allanmuhari",
      facebook: "https://facebook.com/victorynjeri",
      instagram: "https://instagram.com/victorynjeri",
    },
  },
  {
    id: "bridget-gitonga",
    name: "Bridget Gitonga",
    role: "Secretary",
    bio: "Bridget Gitonga is the organizational backbone of MUTC. As the club's Secretary, she manages communications, maintains records, and ensures efficient documentation of club activities. Her meticulous approach and communication skills are crucial in keeping the club running smoothly and maintaining transparent operations.",
    imageUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/bridgetgitonga",
      twitter: "https://twitter.com/bridgetgitonga",
      facebook: "https://facebook.com/victorynjeri",
      instagram: "https://instagram.com/victorynjeri",
    },
  },
  {
    id: "ruth-mutisya",
    name: "Ruth Mutisya",
    role: "Treasurer",
    bio: "Ruth Mutisya manages the financial aspects of MUTC with precision and strategic insight. As the Treasurer, she oversees the club's financial planning, budgeting, and resource allocation. Her financial acumen ensures that the club can effectively support its technological initiatives and member development programs.",
    imageUrl: "https://randomuser.me/api/portraits/women/77.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ruthmutisya",
      twitter: "https://twitter.com/websterifedha",
      facebook: "https://facebook.com/websterifedha",
      instagram: "https://instagram.com/ruthmutisya",
    },
  },
  {
    id: "webster-ifedha",
    name: "Webster Ifedha",
    role: "Cyber Security Lead",
    bio: "Webster Ifedha is a passionate cybersecurity expert dedicated to protecting digital landscapes. As the Cyber Security Lead, he guides members through complex security challenges, conducts workshops on ethical hacking, and helps students develop critical skills in identifying and mitigating digital threats.",
    imageUrl: "https://randomuser.me/api/portraits/men/78.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/websterifedha",
      twitter: "https://twitter.com/websterifedha",
      facebook: "https://facebook.com/websterifedha",
      instagram: "https://instagram.com/websterifedha",
    },
  },
  {
    id: "manase-gunga",
    name: "Manase Gunga",
    role: "UI/UX Design Lead",
    bio: "Manase Gunga is a creative UI/UX design professional who transforms user experiences through innovative design solutions. As the UI/UX Lead, he mentors club members in design thinking, user research, and creating intuitive interfaces that solve real-world problems.",
    imageUrl: "https://randomuser.me/api/portraits/men/81.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/manasegunga",
      twitter: "https://twitter.com/manasegunga",
      facebook: "https://facebook.com/manasegunga",
      instagram: "https://instagram.com/manasegunga",
    },
  },
  {
    id: "carolyne-githenduka",
    name: "Carolyne Githenduka",
    role: "Web Development Lead",
    bio: "Carolyne Githenduka is a skilled web development professional passionate about creating robust and scalable web solutions. As the Web Development Lead, she guides members through full-stack development techniques, shares industry best practices, and inspires innovation in web technologies.",
    imageUrl: "https://randomuser.me/api/portraits/women/50.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/carolynegithenduka",
      twitter: "https://twitter.com/carolynegithenduka",
      facebook: "https://facebook.com/carolynegithenduka",
      instagram: "https://instagram.com/carolynegithenduka",
    },
  },
  {
    id: "stanley-amunze",
    name: "Stanley Amunze",
    role: "Mobile Apps Development Lead",
    bio: "Stanley Amunze is a dynamic mobile application developer who brings cutting-edge mobile technology insights to MUTC. As the Mobile Apps Development Lead, he teaches members about cross-platform development, mobile UX design, and the latest trends in mobile application creation.",
    imageUrl: "https://randomuser.me/api/portraits/men/91.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/stanleyamunze",
      twitter: "https://twitter.com/stanleyamunze",
      facebook: "https://facebook.com/stanleyamunze",
      instagram: "https://instagram.com/stanleyamunze",
    },
  },
  {
    id: "paul-karanja",
    name: "Paul Karanja",
    role: "Cloud Engineering Lead",
    bio: "Paul Karanja is a cloud computing expert who helps members navigate the complex world of cloud technologies. As the Cloud Engineering Lead, he provides insights into cloud architecture, deployment strategies, and helps students understand scalable and secure cloud solutions.",
    imageUrl: "https://randomuser.me/api/portraits/men/66.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/paulkaranja",
      twitter: "https://twitter.com/paulkaranja",
      facebook: "https://facebook.com/paulkaranja",
      instagram: "https://instagram.com/paulkaranja",
    },
  },
  {
    id: "evyonn-mbithe",
    name: "Evyonn Mbithe",
    role: "Power Platform Lead",
    bio: "Evyonn Mbithe is a Microsoft Power Platform expert who helps members leverage low-code solutions for business innovation. As the Power Platform Lead, she demonstrates how to create powerful applications, automate workflows, and drive data-driven decision-making with minimal coding.",
    imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/evyonnmbithe",
      twitter: "https://twitter.com/evyonnmbithe",
      facebook: "https://facebook.com/evyonnmbithe",
      instagram: "https://instagram.com/evyonnmbithe",
    },
  },
];
