const { createApp } = Vue;

createApp({
  data() {
    return {
      emailList: [],
    };
  },
  methods: {
    getEmailList() {
      const newEmailList = [];
      for (let index = 0; index < 10; index++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((res) => {
            newEmailList.push(res.data.response);
            if (newEmailList.length === 10) {
              this.emailList = newEmailList;
            }
          });
      }
    },
  },
  created() {
    this.getEmailList();
  },
}).mount("#app");
