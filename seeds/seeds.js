exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('studentInfoTable').del().then(function() {
    // Inserts seed entries
    return knex('studentInfoTable').insert([
      {
        id: 1,
        fullName: 'Davia DeNisco',
        gitHub: 'https://github.com/daviadenisco',
        linkedIn: 'https://www.linkedin.com/in/davia-denisco-2889317',
        email: 'mailto:davia@daviadenisco.com',
        professionalSite: 'http://www.daviadenisco.com/',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 2,
        fullName: 'David Nyman',
        gitHub: 'https://github.com/davidnymanmusic',
        linkedIn: 'https://www.linkedin.com/in/david-nyman-a65a8a17/',
        email: 'davenyman@gmail.com',
        professionalSite: '',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 3,
        fullName: 'Don Tamayo',
        gitHub: 'https://github.com/webbydon29',
        linkedIn: 'https://www.linkedin.com/in/don-tamayo-2b0204132/',
        email: 'amazingmardon@gmail.com',
        professionalSite: '',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 4,
        fullName: 'Gonpo Lama',
        gitHub: 'https://github.com/gonpolama',
        linkedIn: 'https://www.linkedin.com/in/gonpo-lama-68b0a840/',
        email: 'gonpolama@gmail.com',
        professionalSite: '',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 5,
        fullName: 'Jon Aquarone',
        gitHub: 'https://github.com/Jontronics',
        linkedIn: 'https://www.linkedin.com/in/jonathan-aquarone-73085189/',
        email: 'j.aquarone@gmail.com',
        professionalSite: '',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 6,
        fullName: 'Kyle Treman',
        gitHub: 'https://github.com/jkyletreman',
        linkedIn: 'https://www.linkedin.com/in/jkyletreman/',
        email: 'jkt290@nyu.edu',
        professionalSite: '',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 7,
        fullName: 'Mike Allen',
        gitHub: 'https://github.com/mikevocalz',
        linkedIn: 'https://www.linkedin.com/in/michael-allen-3b538429/',
        email: 'mikevocalz@aol.com',
        professionalSite: '',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 8,
        fullName: 'Mona Temchin',
        gitHub: 'https://github.com/MonaTem',
        linkedIn: 'https://www.linkedin.com/in/monatemchin/',
        email: 'monatemchin@gmail.com',
        professionalSite: '',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 9,
        fullName: 'Riley Green',
        gitHub: 'https://github.com/rgreenviiiv',
        linkedIn: 'https://www.linkedin.com/in/riley-green-aaaa2463/',
        email: 'rileygreenviiiv@gmail.com',
        professionalSite: '',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }
    ]);
  });
};
