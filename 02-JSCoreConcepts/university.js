names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names
    }

    startWith(letter){
        letter = letter.toUpperCase()
        return this.names.filter((name)=>name.charAt(0)==letter)
    }

    sort_n() {
        return this.names.sort();
    }

    get() {
        return this.names
    }

    getFirst_n(n) {
        return this.names.slice(0,n)
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort_n());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort_n());
console.log(students.sort_n().getFirst_n(4));
console.log(students.startWith('M').sort_n().getFirst_n(2));
console.log(students.get());