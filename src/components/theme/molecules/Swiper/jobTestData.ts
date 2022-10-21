export default [
  {
    uid: 1,
    contact: 'Max Peters',
    technologies: ['Javascript', 'React', 'Node.js', 'Docker'],
    sections: [
      {
        id: 1,
        type: 'job',
        job: {
          position: 'Lead software developer',
          companyName: 'Accountable S.A',
          postedOn: '22 Feb. 2022',
          description: `Accountable sole focus is solving tax and administrative obligations of self-employed persons (accountable.eu).
        As lead full-stack developer, I oversee the development, technologies, maintenance, and deployment of the apps.
        I developed the web app to declare taxes, record invoices, and link bank transactions.
        Oversaw and contributed to the refactoring of the apps to make expansion into new countries easier.
        Supervised development, kept coding standards compliance, and provided mentorship.`,
        },
      },
      {
        id: 3,
        type: 'image',
        path: `../../../../assets/images/tests/arber1.jpg`,
        src: require(`../../../../assets/images/tests/arber1.jpg`),
      },
      {
        id: 4,
        type: 'image',
        path: `../../../../assets/images/tests/arber2.jpg`,
        src: require(`../../../../assets/images/tests/arber2.jpg`),
      },
    ],
  },
]
