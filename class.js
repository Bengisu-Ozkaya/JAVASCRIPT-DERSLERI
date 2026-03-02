class Employee{
    constructor(name,surname){
        this.name = name
        this.surname = surname  
    }

    //save() {console.log("Employee Saved\n" + this.name + " " + this.surname);}
    save() {console.log(`Employee Saved!\n${this.name} ${this.surname}`)} // bu şekilde yazım yapabilmek için (Alt Gr + ,) tuşlarına 2 kez bas (ters tırnak lazımmış)
    
}

const emp1 = new Employee("Bengi","Özkaya")
emp1.name = "Bengisu"
emp1.save()