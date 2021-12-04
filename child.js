import ParentClass from "./parent.js";

class ChildClass extends ParentClass {
  constructor(){
    super();
  }

  async getPidgeottoUrl() {
    try {
      const res = await fetch(this.url);
      const data = await res.json();

      const { url } = data.results.find( elm  => elm.name == "pidgeotto")
      console.log(url);
      return url;

    } catch (error) {
      console.error('something went wrong !!');
    }
  }
}

async function start() {
  const child = new ChildClass();
  const url = await child.getPidgeottoUrl();
  document.getElementById('urll').innerText = url;
}

start()
