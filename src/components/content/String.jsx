// Centralized content/data for the website.
// Import this module wherever you need reusable text or lists.

export const CONTENT = {
  hero: {
    slides: [
      {
        image: '/slide_4.webp',
        title: 'Excellence in Sports,',
        highlight: 'Excellence in Life',
        subtitle:
          'Join Gandhinagar Sports Academy. World-class facilities, expert coaches, and a legacy of champions.',
        primaryCta: { label: 'Join Now', to: '/admissions' },
        secondaryCta: { label: 'Explore Gallery', to: '/gallery' },
      },
      {
        image: '/slide-5.webp',
        title: 'Train Smarter.',
        highlight: 'Play Stronger.',
        subtitle:
          'Structured coaching across multiple sports, focused on skill, discipline, and long-term development.',
        primaryCta: { label: 'View Gallery', to: '/gallery' },
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
    sportsList: ['Cricket'],
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
      { name: 'Cricket', image: '/batting .jpg' },
    ],

    trainingIntro: 'At Gandhinagar Sports Academy, our cricket coaching is designed to meet the needs of players at different stages of their journey. Our curriculum covers all essential aspects of cricket:',
    trainingPoints: [
      { title: 'Batting Skills', desc: 'Master shot selection, footwork, timing, and power-hitting techniques.' },
      { title: 'Bowling Techniques', desc: 'Develop pace, spin, accuracy, and variations to outsmart opponents.' },
      { title: 'Fielding Drills', desc: 'Improve agility, reflexes, catching, and ground fielding with focused exercises.' },
      { title: 'Fitness & Conditioning', desc: 'Specialized cricket fitness training to build strength, endurance, and injury resilience.' },
      { title: 'Game Awareness', desc: 'Tactical sessions to enhance decision-making, game strategy, and situational awareness.' },
    ],
    panelSports2: [
      { name: 'Bowling', image: '/Bowling.jpg' },
    ],
    facilitiesIntro: 'At Gandhinagar Sports Academy, we provide world-class facilities to support comprehensive cricket coaching.',
    facilitiesList: [
      'Professional Practice Nets',
      'Match-Quality Pitches',
      'Fitness and Conditioning Zone',
      'Video Analysis Room',
      'Indoor Training Area',
      'Fielding Drills Space',
      'Recovery and Physiotherapy Room',
      'Locker Rooms and Amenities',
      'Residential hostel, nutritious meals, and academic support',
    ],
    testimonialQuote: 'I have failed at times, but I never stop trying.',
    testimonialAuthor: 'Rahul Dravid',
    testimonialRole: 'Former captain of Indian national cricket team.',
  },

  tournaments: {
    socialPosts: [
      {
        id: 'ig1',
        platform: 'Instagram',
        account: '@gandhinagarsportsacademy',
        text: 'Latest update from our academy.',
        permalink: 'https://www.instagram.com/p/DKYmJRkqasG/',
      },
      {
        id: 'ig2',
        platform: 'Instagram',
        account: '@gandhinagarsportsacademy',
        text: 'Academy highlights.',
        permalink: 'https://www.instagram.com/p/CdJ1Re8vlJl/',
      },
      {
        id: 'ig3',
        platform: 'Instagram',
        account: '@gandhinagarsportsacademy',
        text: 'Training reel.',
        permalink: 'https://www.instagram.com/reel/CtftqHcNM7Q/',
      },
      {
        id: 'ig4',
        platform: 'Instagram',
        account: '@gandhinagarsportsacademy',
        text: 'Team moments.',
        permalink: 'https://www.instagram.com/p/DCo8vyQh42G/',
      },
      {
        id: 'ig5',
        platform: 'Instagram',
        account: '@gandhinagarsportsacademy',
        text: 'Cricket players are made at GSA Sports Academy! Strong fundamentals + smart coaching.',
        permalink: 'https://www.instagram.com/p/DT9hCwuimTN/',
      },
      {
        id: 'ig6',
        platform: 'Instagram',
        account: '@gandhinagarsportsacademy',
        text: 'Training session.',
        permalink: 'https://www.instagram.com/p/C7OuwK5R2VP',
      }
    ],
  },
};