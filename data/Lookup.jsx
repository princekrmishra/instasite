import dedent from "dedent";

const lookup = {
  SUGGESTIONS: [
    "Create TODO App in React",
    "Create Budget Tracker App",
    "Create Gym Management Portal Dashboard",
    "Create Quiz App on History",
    "Create Login/Signup Screen",
    "Create Blog Website in Next.js",
    "Create Portfolio Website with Tailwind",
    "Create Admin Panel Dashboard",
  ],

  SIGNIN_HEADING: "Welcome to InstaSite!",
  SIGNIN_SUBHEADING:
    "To use InstaSite, log in or create an account to start building projects instantly.",
  SIGNIN_AGREEMENT_TEXT:
    "By using InstaSite, you agree to our terms and consent to usage tracking for analytics.",

  DEMO: {
    projectTitle: "React ToDo App",
    description: "A basic ToDo App in React with Tailwind CSS.",
    generatedFiles: [
      "src/App.js",
      "src/components/TodoList.js",
      "src/components/TodoForm.js",
      "src/components/TodoItem.js",
      "src/index.css",
    ],
    instructions: dedent`
      Follow these steps to run your project locally:

      1. Navigate to the project directory:
         cd your-project-name

      2. Install the dependencies:
         npm install

      3. Start the development server:
         npm run dev

      4. Open the app in your browser:
         http://localhost:3000
    `,
    previewCode: dedent`
      import React, { useState } from 'react';
      import TodoList from './components/TodoList';

      function App() {
        return (
          <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-4">My ToDo App</h1>
            <TodoList />
          </div>
        );
      }

      export default App;
    `,
  },
};

export default lookup;
