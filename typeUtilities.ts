// Type Utilities

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

// Readonly
const todo: Readonly<Todo> = {
  title: "Assitir dark de novo",
  description: "Relembrar os detalhes",
  completed: false,
};

// Partial => Faz todas as propriedades em T opcionais
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo2: Todo = updateTodo(todo, {
  completed: true,
});

// Pick => 5 - 1

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo3: TodoPreview = {
  title: "Fechar Ghost of Tsushima",
  completed: false,
};

// Omit => 5 - 4
type TodoPreview2 = Omit<Todo, "description">;

const todo4: TodoPreview = {
  title: "Fechar Ghost of Tsushima",
  completed: false,
};
