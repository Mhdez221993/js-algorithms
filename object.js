let obj = {
  name: "Doe",
  sayName: function () {
    console.log(this.name);
  },
  may_name: "Hdez",
};

obj.sayName();
console.log(obj["may_name"]);
