class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    return index % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    // this.table[index] = value;
    const backet = this.table[index];
    if (!backet) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyValue = backet.find((item) => item[0] === key);
      if (sameKeyValue) {
        sameKeyValue[1] = value;
      } else {
        backet.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    // return this.table[index];
    const backet = this.table[index];
    if (backet) {
      const sameKeyValue = backet.find((item) => item[0] === key);
      if (sameKeyValue) {
        return sameKeyValue[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;
    const backet = this.table[index];
    if (backet) {
      const sameKeyValue = backet.find((item) => item[0] === key);
      if (sameKeyValue) {
        backet.splice(backet.indexOf(sameKeyValue), 1);
      }
    }
    return undefined;
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
    console.log();
  }
}

const table = new HashTable(50);

table.set("name", "Bruce");
table.set("age", 40);

table.display();

table.set("mane", "Clark");

table.remove("mane");
table.display();
