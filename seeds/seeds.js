exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('studentInfoTable').del().then(function() {
    // Inserts seed entries
    return knex('studentInfoTable').insert([
      {
        id: 1,
        headshot: 'https://i.imgur.com/gzuG5IP.jpg',
        fullName: 'Davia DeNisco',
        gitHub: 'https://github.com/daviadenisco',
        linkedIn: 'https://www.linkedin.com/in/davia-denisco-2889317',
        email: 'mailto:davia@daviadenisco.com',
        professionalSite: 'http://www.daviadenisco.com/',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 2,
        headshot: 'https://i.imgur.com/wya2YOA.jpg',
        fullName: 'David Nyman',
        gitHub: 'https://github.com/davidnymanmusic',
        linkedIn: 'https://www.linkedin.com/in/david-nyman-a65a8a17/',
        email: 'mailto:davenyman@gmail.com',
        professionalSite: '',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 3,
        headshot: 'https://i.imgur.com/Biu7y7z.png',
        fullName: 'Don Tamayo',
        gitHub: 'https://github.com/webbydon29',
        linkedIn: 'https://www.linkedin.com/in/don-tamayo-2b0204132/',
        email: 'mailto:amazingmardon@gmail.com',
        professionalSite: '',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 4,
        headshot: 'https://i.imgur.com/yecnx3Z.jpg',
        fullName: 'Gonpo Lama',
        gitHub: 'https://github.com/gonpolama',
        linkedIn: 'https://www.linkedin.com/in/gonpo-lama-68b0a840/',
        email: 'mailto:gonpolama@gmail.com',
        professionalSite: '',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 5,
        headshot: 'https://i.imgur.com/uHu09GK.jpg',
        fullName: 'Jon Aquarone',
        gitHub: 'https://github.com/Jontronics',
        linkedIn: 'https://www.linkedin.com/in/jonathan-aquarone-73085189/',
        email: 'mailto:j.aquarone@gmail.com',
        professionalSite: '',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 6,
        headshot: 'https://i.imgur.com/lC1D5iQ.jpg',
        fullName: 'Kyle Treman',
        gitHub: 'https://github.com/jkyletreman',
        linkedIn: 'https://www.linkedin.com/in/jkyletreman/',
        email: 'mailto:jkt290@nyu.edu',
        professionalSite: '',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 7,
        headshot: 'https://i.imgur.com/U5PYID3.jpg',
        fullName: 'Mike Allen',
        gitHub: 'https://github.com/mikevocalz',
        linkedIn: 'https://www.linkedin.com/in/michael-allen-3b538429/',
        email: 'mailto:mikevocalz@aol.com',
        professionalSite: '',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 8,
        headshot: 'https://i.imgur.com/qLEciTm.jpg',
        fullName: 'Mona Temchin',
        gitHub: 'https://github.com/MonaTem',
        linkedIn: 'https://www.linkedin.com/in/monatemchin/',
        email: 'mailto:monatemchin@gmail.com',
        professionalSite: '',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 9,
        headshot: 'https://i.imgur.com/4lYyS6B.jpg',
        fullName: 'Riley Green',
        gitHub: 'https://github.com/rgreenviiiv',
        linkedIn: 'https://www.linkedin.com/in/riley-green-aaaa2463/',
        email: 'mailto:rileygreenviiiv@gmail.com',
        professionalSite: '',
        capstoneLink: '',
        capstoneDesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }
    ]);
  });
};
