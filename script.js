function generatePrompt(){

let scenario =
document.getElementById("scenario").value;

let goal =
document.getElementById("goal").value;

let persona =
document.getElementById("persona").value;

let tone =
document.getElementById("tone").value;

let steps =
document.getElementById("steps").value;

let tools =
document.querySelectorAll(".tool:checked");

let selectedTools = [];

tools.forEach(tool=>{
selectedTools.push(tool.value);
});

let prompt = `Act as an Agentic AI Assistant.

Scenario:
${scenario}

Goal:
${goal}

Agent Persona:
${persona}

Available Tools:
${selectedTools.join(", ")}

Tone:
${tone}

Simulate a realistic ${steps}-step workflow.

For each step provide:

1. Thought Process
2. Action Taken
3. Tool Used
4. Result
5. Next Decision

Maintain the same persona throughout the simulation.

Show clear reasoning and realistic actions.`;

document.getElementById("output").value =
prompt;

}

function copyPrompt(){

let output =
document.getElementById("output");

navigator.clipboard.writeText(output.value);

alert("Prompt copied successfully!");

}