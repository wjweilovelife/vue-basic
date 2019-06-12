new Vue({
  el: '#vue-app',
  data: {
    available: false,
    nearby: false,
    ObjectChange: {
      test: true,
      atest: false,
    },
    isActive: true,
    position: '1',
    TheStyle: {
      backgroundColor: 'yellow',
      width: '300px',
      height: '60px',
      transition: 'all 0.7s',
    },
  },
  methods: {
    changeColor() {
      this.$data.TheStyle.backgroundColor = 'black';
      this.$data.TheStyle.width = '50px';
    },
    changeColor2() {
      this.$refs.TheStyle2.style.backgroundColor = 'red';
      this.$refs.TheStyle2.style.width = '400px';
      this.$refs.TheStyle2.style.transition = 'all 0.9s';
    },
  },
  computed: {
    compClasses() {
      return {
        available: this.available,
        nearby: this.nearby
      };
    },
  },
});
