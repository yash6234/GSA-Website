// Centralized content/data for the website.
// Import this module wherever you need reusable text or lists.

export const CONTENT = {
  site: {
    name: 'Gandhinagar Sports Academy',
    shortName: 'GSA',
  },

  hero: {
    slides: [
      {
        image: '/slide_4.webp',
        title: 'Excellence in Sports,',
        highlight: 'Excellence in Life',
        subtitle:
          'Join Gandhinagar Sports Academy. World-class facilities, expert coaches, and a legacy of champions.',
        primaryCta: { label: 'Join Now', to: '/admissions' },
        secondaryCta: { label: 'Explore Programs', to: '/programs' },
      },
      {
        image: '/slide-5.webp',
        title: 'Train Smarter.',
        highlight: 'Play Stronger.',
        subtitle:
          'Structured coaching across multiple sports, focused on skill, discipline, and long-term development.',
        primaryCta: { label: 'View Programs', to: '/programs' },
        secondaryCta: { label: 'Contact Us', to: '/contact' },
      },
      {
        image: '/slide-6.webp',
        title: 'Build Champions',
        highlight: 'From Day One',
        subtitle:
          'From beginners to competitive athletes—our mentors guide every step with modern training and support.',
        primaryCta: { label: 'Admissions', to: '/admissions' },
        secondaryCta: { label: 'About Academy', to: '/about' },
      },
    ],
  },

  homeWelcome: {
    title: 'Welcome to Gandhinagar Sports Academy',
    subtitle: 'The Best Sports Academy in Gandhinagar and Gujarat',
    paragraphs: [
      'Are you ready to pursue your passion for sports without compromising on academics? We’re proud to offer structured training for young athletes with flexible routines that support both learning and performance.',
      'At Gandhinagar Sports Academy, our coaching programs—residential and non-residential—go beyond physical training. We focus on building a winning mindset, discipline, teamwork, and long-term athletic development with guidance from experienced coaches.',
      'Our mission is simple: to empower every athlete to excel in their game and build confidence for life. The journey starts here—train smart, stay consistent, and grow into your best self.',
    ],
  },

  admissions: {
    sportsList: [
      'Cricket',
      'Football',
      'Basketball',
      'Tennis',
      'Badminton',
      'Athletics',
      'Swimming',
      'Volleyball',
    ],
  },

  programs: {
    imageCards: [
      { label: 'CRICKET', title: 'Cricket', image: '/Programs/cricpro.png' },
      { label: 'TENNIS', title: 'Tennis', image: '/Programs/tennispro.png' },
      { label: 'FOOTBALL', title: 'Football', image: '/Programs/footballpro.png' },
      { label: 'BADMINTON', title: 'Badminton', image: '/Programs/badpro.png' },
      { label: 'BASKETBALL', title: 'Basketball', image: '/Programs/baspro.png' },
      { label: 'VOLLEYBALL', title: 'Volleyball', image: '/Programs/basketpro.png' },
      { label: 'SWIMMING', title: 'Swimming', image: '/Programs/swimmingpro.png' },
      { label: 'PICKLEBALL', title: 'Pickleball', image: '/Programs/pickleballpro.png' },
    ],

    panelSports: [
      { name: 'Tennis', image: '/tennis.jpg' },
      { name: 'Cricket', image: '/cricke.jpg' },
      { name: 'Pickleball', image: '/pickleball.webp' },
      { name: 'Football', image: '/football.webp' },
      { name: 'Swimming', image: '/swim.jpg' },
    ],
  },

  tournaments: {
    socialPosts: [
      {
        id: 'p1',
        platform: 'Instagram',
        account: '@gsasportsacademy',
        text: 'Cricket players are made at GSA Sports Academy! Strong fundamentals + smart coaching.',
        image: '/slide-6.webp',
      },
      {
        id: 'p2',
        platform: 'Instagram',
        account: '@gsasportsacademy',
        text: 'Learn from our coach — match preparation, mindset, and discipline.',
        image: '/slide-5.webp',
      },
      {
        id: 'p3',
        platform: 'Facebook',
        account: 'GSA Sports Academy',
        text: 'Our football team training continues. Join the next camp and level up your game.',
        image: '/slide_4.webp',
      },
    ],
  },
};