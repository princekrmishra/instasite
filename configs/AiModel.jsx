const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai")

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    // model: "gemini-1.5-pro-latest",
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain"
};

const CodegenerationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json"
};


    export const chatSession = model.startChat({
        generationConfig,
        history: [

        ],
    });

    export const GenAiCode = model.startChat({
        generationConfig: CodegenerationConfig,
        history: [
//             {
//       role: 'user',
//       parts: [
//         {
//           text: `generate todo app: Generate a Project in React. Create multiple components, organizing the file directories

//     Return the response in JSON format with the following schema:
//     {
//     "projectTitle: "",
//     "explanation: "",
//     "files":{
//     "/App.js": {
//         "code": ""
//     },
//     ...
//     },
//     "generatedFiles":[]
//     }

//     Here's the reformatted and improved version of your prompt: 

//     Generate a programming code structure for a React project using Vite.

//     Always apply tailwind css for better user interface

//     Return the response in JSON format with the following schema:

//     json 
//     Copy code
//     {
//         "projectTitle: "",
//         "explanation: "",
//         "files":{
//             "/App.js": {
//                 "code": ""
//             },
//             ...
//         },
//         "generatedFiles":[]
//     }
//     Ensure the files field contains all created files, and the generatedFiles
//     files: {
//         "/App.js": {
//            "code": "import React from 'react';\\n'import './styles.css';\\n import './index.css'; 
//         }
//     }

//     Additionally include an explanation of the project's structure, 
//     -For placeholder images, please use a https://archieve.org/download/
//     -Add Emoji icons whenever needed to give good user experience
//     -The lucide-react library is also available to be imported IF NECESSARY
//     }`,
//         },
//       ],
//     },
//     {
//       role: 'model',
//       parts: [
//         {
//           text: `**Constructing React Project Structure**

// I've initiated the project structure, establishing a \`components\` directory with subfolders for distinct React components. My focus right now is creating \`Header\`, \`TodoList\`, and \`TodoItem\` directories. Each one will have its own dedicated JavaScript (or TypeScript) file for functionality and CSS file for styling. I'm aiming for a modular, easily maintainable design from the get-go.


// **Building the React Project**

// I'm now diving into the component code generation. \`App.js\` is next on my list, followed by the specific components. I'll include props for data flow and functions. Following that, I'll style using Tailwind CSS, including creating \`tailwind.config.js\`. Finally, I'll generate the full JSON response, encompassing all the code and project details.


// `,
//         },
//         {
//           text: `\`\`\`json
// {
//   "projectTitle": "React Todo App with Vite and Tailwind CSS",
//   "explanation": "This project is a modern and visually appealing Todo application built with React and Vite, and styled with Tailwind CSS for a clean and responsive user interface. The application allows users to add, view, and mark tasks as complete. The project structure is organized into a \`components\` directory, where each component has its own folder containing the JSX file. This modular approach enhances code reusability and maintainability. Emoji icons are used to provide a more engaging user experience, and placeholder images are sourced from the Internet Archive.",
//   "files": {
//     "/index.html": {
//       "code": "<!DOCTYPE html>\\n<html lang=\\"en\\">\\n  <head>\\n    <meta charset=\\"UTF-8\\" />\\n    <link rel=\\"icon\\" type=\\"image/svg+xml\\" href=\\"/vite.svg\\" />\\n    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\" />\\n    <title>React Todo App</title>\\n  </head>\\n  <body>\\n    <div id=\\"root\\"></div>\\n    <script type=\\"module\\" src=\\"/src/main.jsx\\"></script>\\n  </body>\\n</html>"
//     },
//     "/src/main.jsx": {
//       "code": "import React from 'react'\\nimport ReactDOM from 'react-dom/client'\\nimport App from './App.jsx'\\nimport './index.css'\\n\\nReactDOM.createRoot(document.getElementById('root')).render(\\n  <React.StrictMode>\\n    <App />\\n  </React.StrictMode>,\\n)"
//     },
//     "/src/index.css": {
//       "code": "@tailwind base;\\n@tailwind components;\\n@tailwind utilities;"
//     },
//     "/tailwind.config.js": {
//       "code": "/** @type {import('tailwindcss').Config} */\\nexport default {\\n  content: [\\n    \\"./index.html\\",\\n    \\"./src/**/*.{js,ts,jsx,tsx}\\",\\n  ],\\n  theme: {\\n    extend: {},\\n  },\\n  plugins: [],\\n}"
//     },
//     "/postcss.config.js": {
//       "code": "export default {\\n  plugins: {\\n    tailwindcss: {},\\n    autoprefixer: {},\\n  },\\n}"
//     },
//     "/src/App.jsx": {
//       "code": "import React, { useState } from 'react';\\nimport Header from './components/Header/Header';\\nimport TodoList from './components/TodoList/TodoList';\\nimport AddTodoForm from './components/AddTodoForm/AddTodoForm';\\n\\nfunction App() {\\n  const [todos, setTodos] = useState([\\n    { id: 1, text: 'Learn React', completed: true },\\n    { id: 2, text: 'Build a Todo App', completed: false },\\n    { id: 3, text: 'Deploy the App', completed: false },\\n  ]);\\n\\n  const addTodo = (text) => {\\n    const newTodo = {\\n      id: Date.now(),\\n      text,\\n      completed: false,\\n    };\\n    setTodos([...todos, newTodo]);\\n  };\\n\\n  const toggleTodo = (id) => {\\n    setTodos(\\n      todos.map((todo) =>\\n        todo.id === id ? { ...todo, completed: !todo.completed } : todo\\n      )\\n    );\\n  };\\n\\n  return (\\n    <div className=\\"min-h-screen bg-gray-100 font-sans\\">\\n      <div className=\\"container mx-auto p-4 max-w-lg\\">\\n        <Header />\\n        <AddTodoForm addTodo={addTodo} />\\n        <TodoList todos={todos} toggleTodo={toggleTodo} />\\n      </div>\\n    </div>\\n  );\\n}\\n\\nexport default App;"
//     },
//     "/src/components/Header/Header.jsx": {
//       "code": "import React from 'react';\\n\\nconst Header = () => {\\n  return (\\n    <header className=\\"text-center my-8\\">\\n      <h1 className=\\"text-5xl font-bold text-gray-800\\">Todo List 📝</h1>\\n      <img src=\\"https://archive.org/download/placeholder-image/placeholder-image.jpg\\" alt=\\"Placeholder\\" className=\\"mt-4 w-32 h-32 mx-auto rounded-full shadow-lg\\"/>\\n    </header>\\n  );\\n};\\n\\nexport default Header;"
//     },
//     "/src/components/TodoList/TodoList.jsx": {
//       "code": "import React from 'react';\\nimport TodoItem from '../TodoItem/TodoItem';\\n\\nconst TodoList = ({ todos, toggleTodo }) => {\\n  return (\\n    <div className=\\"mt-8\\">\\n      {todos.map((todo) => (\\n        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />\\n      ))}\\n    </div>\\n  );\\n};\\n\\nexport default TodoList;"
//     },
//     "/src/components/TodoItem/TodoItem.jsx": {
//       "code": "import React from 'react';\\nimport { CheckCircle, Circle } from 'lucide-react';\\n\\nconst TodoItem = ({ todo, toggleTodo }) => {\\n  return (\\n    <div\\n      className={\`flex items-center justify-between p-4 my-2 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${todo.completed ? 'bg-green-100 text-gray-500 line-through' : 'bg-white'}\`}\\n      onClick={() => toggleTodo(todo.id)}\\n    >\\n      <span className=\\"flex items-center\\">\\n        {todo.completed ? <CheckCircle className=\\"mr-3 text-green-500\\" /> : <Circle className=\\"mr-3 text-gray-400\\" />}\\n        {todo.text}\\n      </span>\\n      <span>{todo.completed ? '🎉' : '⏳'}</span>\\n    </div>\\n  );\\n};\\n\\nexport default TodoItem;"
//     },
//     "/src/components/AddTodoForm/AddTodoForm.jsx": {
//       "code": "import React, { useState } from 'react';\\nimport { Plus } from 'lucide-react';\\n\\nconst AddTodoForm = ({ addTodo }) => {\\n  const [text, setText] = useState('');\\n\\n  const handleSubmit = (e) => {\\n    e.preventDefault();\\n    if (text.trim()) {\\n      addTodo(text);\\n      setText('');\\n    }\\n  };\\n\\n  return (\\n    <form onSubmit={handleSubmit} className=\\"flex items-center mt-4\\">\\n      <input\\n        type=\\"text\\"\\n        value={text}\\n        onChange={(e) => setText(e.target.value)}\\n        placeholder=\\"Add a new task... ✨\\"\\n        className=\\"flex-grow p-4 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500 transition-all duration-300\\"\\n      />\\n      <button type=\\"submit\\" className=\\"bg-blue-500 text-white p-4 rounded-r-lg hover:bg-blue-600 transition-all duration-300\\">\\n        <Plus />\\n      </button>\\n    </form>\\n  );\\n};\\n\\nexport default AddTodoForm;"
//     }
//   },
//   "generatedFiles": [
//     "/index.html",
//     "/src/main.jsx",
//     "/src/index.css",
//     "/tailwind.config.js",
//     "/postcss.config.js",
//     "/src/App.jsx",
//     "/src/components/Header/Header.jsx",
//     "/src/components/TodoList/TodoList.jsx",
//     "/src/components/TodoItem/TodoItem.jsx",
//     "/src/components/AddTodoForm/AddTodoForm.jsx"
//   ]
// }
// \`\`\``,
//         },
//       ],
//     },
        ],
    })

    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
    
