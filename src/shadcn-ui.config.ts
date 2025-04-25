export default {
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#50E3C2',
        background: '#F5F5F5',
        text: '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  components: {
    Button: {
      variants: {
        ghost: {
          backgroundColor: 'transparent',
          color: '#4A90E2',
          '&:hover': {
            backgroundColor: '#E0E0E0',
          },
        },
      },
    },
  },
};