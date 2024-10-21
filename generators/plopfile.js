module.exports = (plop) => {
  // create your generators here
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "../src/app/components/{{pascalCase name}}/index.tsx",
        templateFile: "template/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/app/components/{{pascalCase name}}/styles.ts",
        templateFile: "template/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../src/app/components/{{pascalCase name}}/stories.tsx",
        templateFile: "template/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/app/components/{{pascalCase name}}/test.tsx",
        templateFile: "template/test.tsx.hbs",
      },
    ], // array of actions
  });
};
