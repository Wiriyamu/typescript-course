// Type Aliases vs Interface

//========== Type Alias ========== //

// Definição
type GameT = {
  title: string;
}

type DLCT = {
  extra: string;
}

// Intersection

type GameCollectionT = GameT & DLCT;

// Implements

class CreateGameT implements GameCollection { }

// Declarar Função

type getSimilarsT = (title: string) => void;

// =========== Diferenças ========== //

// permite declarar tipos primitivos

type IDT = string | number;

// pode declarar tuplas normalmente

type TupleT = [number, number];
[1, 2] as TupleT

// Apenas uma declaração por escopo

type JQueryT = { a: string };
type JQueryT = { b: string }





// ========== Interfaces ==========//

// Definição
interface Game {
  title: string;
}

interface DLC {
  extra: string;
}

// Intersection / extend

interface GameCollection extends Game, DLC { }

// Implements

class CreateGame implements GameCollection { }

// Declarar Função

interface getSimilars {
  (title: string): void;
}

// Mais recomendado: 
// na maioria das vezes
// React - Props

// ========== Diferenças ========== //

interface ID extends number { }

// não consigo definir tuplas na interface
interface Tuple {
  0: number;
  1: number;
}

[1, 2, 3] as Tuple


// Vantagem: quando tiver criando libs, prefira Interfaces, porque são mais extensíveis!
// criando objetos/class (POO)

interface JQuery {
  a: string;
}

interface JQuery {
  b: string;
}

const $: JQuery = {
  a: 'bla',
  b: 'foo'
}

// CONSISTÊNCIA!

