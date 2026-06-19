export interface TeamMember {
  /** Two-letter initials shown in the avatar. */
  initials: string;
  name: string;
  role: string;
  /** Avatar background color. */
  bg: string;
  /** Avatar text color. */
  fg: string;
  /** Optional highlight badge (e.g. the founder's lived-experience note). */
  badge?: { label: string; bg: string; fg: string };
}

export const team: TeamMember[] = [
  {
    initials: 'AH',
    name: 'Andrea Hernandez',
    role: 'CEO & Founder',
    bg: '#0F6E56',
    fg: '#9FE1CB',
    badge: {
      label: 'Understands the user',
      bg: 'rgba(94,200,180,0.15)',
      fg: '#5EC8B4',
    },
  },
  { initials: 'JC', name: 'Jesus Cervantes', role: 'Co-founder & Software Engineer', bg: '#3C3489', fg: '#CECBF6' },
  // Corrected spelling: founder's HTML read "Andy Corrals".
  { initials: 'AC', name: 'Andy Corrales', role: 'Senior Engineer', bg: '#0C447C', fg: '#B5D4F4' },
  { initials: 'MM', name: 'Manuel Molina', role: 'Business Partner', bg: '#633806', fg: '#FAC775' },
  { initials: 'AG', name: 'Alejandro Garcia', role: 'Software Engineer', bg: '#085041', fg: '#9FE1CB' },
  { initials: 'IF', name: 'Ian Flores', role: 'Hardware Engineer', bg: '#185FA5', fg: '#B5D4F4' },
  { initials: 'OL', name: 'Olyvia', role: 'Hardware Engineer', bg: '#72243E', fg: '#F4C0D1' },
  { initials: 'JC', name: 'Joshua Chavaria', role: 'Hardware Engineer', bg: '#0C447C', fg: '#B5D4F4' },
];
