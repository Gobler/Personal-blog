export default defineAppConfig({
  alpine: {
    title: 'Gobler\'s blog',
    description: 'Gobler\'s blog',

    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },

    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.png', // path of the logo
        pathDark: '/logo-dark.png', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Gobler\'s Blog' // alt of the logo
      }
    },

    footer: {
      credits: {
        // possible value are : true | false
        enabled: false,

        // our github repository
        repository: '',

        text: ''
      },
      navigation: false, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '' // string that will be displayed in the footer (leave empty or delete to disable)
    },

    socials: {
      twitter: '',
      instagram: 'gobl3r',

      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/gobler/'
      },

      github: 'Gobler'
    },

    form: {
      successMessage: 'Message sent. Thank you!'
    },

    backToTop: {
      text: 'Do góry'
    }
  }
})
