export interface TeamMember {
  /** Two-letter initials shown in the avatar (used as a fallback when no photo exists). */
  initials: string;
  name: string;
  role: string;
  /** Avatar background color (used when no photo exists). */
  bg: string;
  /** Avatar text color (used when no photo exists). */
  fg: string;
  /** Optional photo path, relative to /public. */
  photo?: string;
  /** Detailed alt text for the photo — required accessibility practice, not optional. */
  photoAlt?: string;
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
    photo: '/team/Andrea_Hernandez.jpeg',
    photoAlt:
      "Andrea Hernandez, CEO and Founder of AccessWave Technologies, sitting in a conference room. She has medium-long straight dark brown hair with blonde highlights framing her face, dark brown eyes, and is smiling gently while wearing pink-toned lipstick and small gold dangling earrings. She is dressed in a navy blue blazer over a white pleated blouse, with her hands clasped together resting on a table in front of her. The background shows rows of empty black rolling chairs and beige folding tables of a conference room.",
    badge: {
      label: 'Understands the user',
      bg: 'rgba(94,200,180,0.15)',
      fg: '#5EC8B4',
    },
  },
  {
    initials: 'JC',
    name: 'Jesus Cervantes',
    role: 'Co-founder & Software Engineer',
    bg: '#3C3489',
    fg: '#CECBF6',
    photo: '/team/Jesus_Cervantes.jpeg',
    photoAlt:
      'Jesus Cervantes, CTO and co-founder, standing outdoors and facing the camera with a neutral expression. He has short dark brown hair, dark brown eyes, and wears rectangular black glasses. He is dressed in a black suit jacket over a dark navy button-down shirt with a black tie. Behind him is a light stone wall covered with green climbing vines and bright orange trumpet-shaped flowers, with a tall cactus to the left and a large green succulent plant to the right.',
  },
  // Corrected spelling: founder's HTML read "Andy Corrals".
  {
    initials: 'AC',
    name: 'Andres Corrales',
    role: 'Senior Engineer',
    bg: '#0C447C',
    fg: '#B5D4F4',
    photo: '/team/Andres_Corrales.jpeg',
    photoAlt:
      'Professional headshot of Andres Corrales, Senior Engineer. He has medium-length black hair styled in a middle part, a black mustache, and wears clear-framed glasses, looking directly at the camera. He is dressed in a gray suit jacket over a white collared shirt with a navy tie. The background is a plain studio backdrop.',
  },
  { initials: 'MM', name: 'Manuel Molina', role: 'Business Partner', bg: '#633806', fg: '#FAC775' },
  {
    initials: 'AG',
    name: 'Alejandro Garcia',
    role: 'Software Engineer',
    bg: '#085041',
    fg: '#9FE1CB',
    photo: '/team/Alejandro_Garcia.jpeg',
    photoAlt:
      'Alejandro Garcia, Software Intern, with short wavy dark brown hair, dark brown eyes, and light facial hair along his jaw and upper lip, giving a calm smile toward the camera. He is wearing a blue button-up shirt over a white t-shirt with a black cord necklace. The photo is taken outdoors, with a wooden table, parked cars, trees, a person in a white tank top in the background, and a yellow umbrella overhead.',
  },
  {
    initials: 'IF',
    name: 'Ian Flores',
    role: 'Hardware Engineer',
    bg: '#185FA5',
    fg: '#B5D4F4',
    photo: '/team/Ian_Flores.jpeg',
    photoAlt:
      'Ian Flores, Founding Engineer, outdoors with short dark brown hair, smiling broadly with his teeth showing. He is wearing dark sunglasses, a white collared dress shirt, a black necktie, and a black suit jacket, standing facing the camera with one arm relaxed at his side. Behind him is a tan brick building and a green leafy tree branch extending across the upper right portion of the image.',
  },
  {
    initials: 'OL',
    name: 'Olyvia',
    role: 'Hardware Engineer',
    bg: '#72243E',
    fg: '#F4C0D1',
    photo: '/team/Olyvia.jpeg',
    photoAlt:
      'Headshot of Olyvia, Founding Engineer, smiling warmly with her teeth showing. She has shoulder-length, dark brown loc\u2019d (dreadlocked) hair parted to frame her face, dark brown eyes, a small nose ring on her left nostril, and small stud earrings. She is wearing a solid black button-up collared shirt with a thin silver chain necklace. The background is a plain, mottled gray studio backdrop.',
  },
  {
    initials: 'JC',
    name: 'Joshua Chavaria',
    role: 'Hardware Engineer',
    bg: '#0C447C',
    fg: '#B5D4F4',
    photo: '/team/Joshua_Chavarría.jpeg',
    photoAlt:
      'Joshua Chavarría, founding engineer, in the Engineering Education and Research Center building at UT Austin. He has dark curly, wavy, shoulder-length hair, hazel eyes, and light facial hair along his jaw and upper lip, smiling and looking directly at the camera. He is wearing a navy blue blazer over a light blue button-up collared shirt. The background shows the building\u2019s modern multi-story interior with glass and large windows letting in natural light.',
  },
];