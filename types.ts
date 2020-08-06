// Boolean (True / False)
let isOpen: boolean
isOpen = true

// String ('foo', "foo", `foo`)
let message: string
message = `Foo`

// Number (int, float, hex, binary)
let total: number
total = 0xff0

// Array (type[])
let items: number[]
items = [1, 2, 3]

let values: Array<number>
values = [1, 2, 3]

// Tuple 
let title: [number, string]
title = [1, 'foo']

// Enum
enum Colors {
  white = '#fff',
  black = '#000'
}

// Any (qualquer coisa) NÃO É LEGAL!
let coisa: any
coisa = [1]

// void (vazio)

function logger() {
  console.log('foo');
}

// Null / Undefined
type Bla = string | undefined

// Never
function error(): never {
  throw new Error("error");
}

// Object 
let cart: object

cart = {
  key: 'fi'
}

// Type Inference
let message2 = 'mensagem definida'
message2 = "string nova"

window.addEventListener("click", (e) => {
  console.log(e.target);
})