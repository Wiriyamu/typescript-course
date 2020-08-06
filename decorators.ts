// ========== Decorators ========== //

// Class decorator
function setAPIVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}
@setAPIVersion("1.0.0")
class API {}

// Property decorator
function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key];

    const getter = () => val;

    const setter = (value: string) => {
      if (value.length < length) {
        console.log(
          `Error: você não pode criar ${key} com tamanho menor que ${length}.`
        );
      } else {
        val = value;
      }
    };
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Movie {
  // validação -> se for menor que 5 - error
  @minLength(50)
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const movie = new Movie("Interestelar");

// Method decorator
function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any) {
      setTimeout(() => {
        originalMethod.apply(this, args);
      });
    };

    return descriptor;
  };
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }
  // esperar um tempo e ai vai rodar o método (ms)
  @delay(1000)
  greet() {
    console.log(`Hello! ${this.greeting}`);
  }
}

const pessoinha = new Greeter("Pessoinha!");
pessoinha.greet();
