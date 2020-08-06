// Classes Com typescript

// Abstract Class -> Não pode ser usada para criar objetos mas pode ser extendida
abstract class UserAccount {
  // public -> Atributo público
  public name: string;
  // protected -> Atributo que só pode ser acessado dentro a sua classes e respectivas subclasses
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old`);
  }
}

// Classe usando Modifiers
class CharAccount extends UserAccount {
  // private -> Atributo privado que só pode ser acessado dentro a respectiva classe.
  private nickname: string;
  // rendonly -> Atributo que permite somente a leitura do valor da propriedade
  /*readonly*/ level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname
    this.level = level
  }

  // Acessors -> Get
  get getLevel() {
    return this.level
  }

  // Acessors -> Set
  set setLevel(level: number) {
    this.level = level
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} is ${this.age} has the char ${this.nickname} at level ${this.level}`);
  }
}
/* Chamada de Classe com Abstract

Sem o atributo abstract, a objeto seria criado perfeitamente
usando a classe UserAccount

const will = new UserAccount('Willian', 21)
*/
const john = new CharAccount('John', 45, 'jonhmaster', 30);

// Usando os Acessors -> Get
console.log(john.getLevel);

// Usando os Acessors -> Set
john.setLevel = 499;
console.log(john.setLevel);











