class Person{
  constructor(imie,nazwisko){
    this.imie = imie
    this.nazwisko = nazwisko
  };
  repr(){
    this.imie = this.imie.charAt(0).toUpperCase() + this.imie.slice(1)
    this.nazwisko = this.nazwisko.toUpperCase()
    console.log(this.imie + " " + this.nazwisko)
  }

  initials(){
    console.log(this.imie.charAt(0) + "." + this.nazwisko.charAt(0)+".")
  }
}

jn = new Person('Jan','Nowak')
po = new Person('Paweł', 'Ociepka')

jn.repr()
po.initials()