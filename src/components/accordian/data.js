const data = [
    {
      id: '1',
      question: "What is the purpose of a constructor function?",
      answer:
        "A constructor function is used in JavaScript to create and initialize objects. It allows you to create multiple instances of objects with the same properties and methods. When you use the 'new' keyword with a constructor function, a new object is created and the constructor function is executed to initialize the object.",
    },
    {
      id: '2',
      question: "How does prototypal inheritance work in JavaScript?",
      answer:
        "In JavaScript, every object has a prototype property, which refers to another object. When you try to access a property or method of an object, JavaScript first looks for it on the object itself. If it's not found, it looks for it on the object's prototype, and continues up the prototype chain until the property or method is found or the end of the chain is reached.",
    },
    {
      id: '3',
      question: "What are closures in JavaScript?",
      answer:
        "Closures are a powerful feature in JavaScript that allow functions to retain access to variables from their lexical scope even after the scope has exited. This allows for the creation of 'private' variables and functions, as well as the implementation of various programming patterns such as the module pattern and currying.",
    },
    {
      id: '4',
      question: "What is the 'this' keyword in JavaScript?",
      answer:
        "In JavaScript, the 'this' keyword refers to the context in which a function is executed. Its value is determined by how the function is called. In a global function, 'this' refers to the global object (window in a browser). In a method, 'this' refers to the object that the method is called on. 'this' can also be explicitly set using call(), apply(), or bind().",
    },
];

export default data;
