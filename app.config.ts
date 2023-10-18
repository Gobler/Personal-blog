export default defineAppConfig({
  alpine: {
    title: 'Gobler - blog',
    description: 'The minimalist blog theme',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Gobler\'s Blog' // alt of the logo
      }
    },
    footer: {
      credits: {
        // possible value are : true | false
        enabled: false,

        // our github repository
        repository: 'https://github.com/Gobler/Personal-blog',

        text: ''
      },
      navigation: false, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: '',
      instagram: 'gobl3r',

      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      },

      github: 'Gobler'
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})