let tasks = [];
let nextId = 1;

export function initializeTaskStore() {
  tasks = [
    {
      id: nextId++,
      title: "Review candidate profile: Asha N.",
      completed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: nextId++,
      title: "Check missing portfolio evidence for candidate Rohan K.",
      completed: false,
      createdAt: new Date().toISOString()
    }
  ];

  console.log("[INFO] In-memory task store initialized");
  console.log(`[INFO] Current task count: ${tasks.length}`);
}

export function getTasks(req, res) {
  return res.json({ tasks });
}

export function createTask(req, res) {
  const title = req.body.title?.trim();

  if (!title) {
    return res.status(400).json({ message: "Review item title is required." });
  }

  const task = {
    id: nextId++,
    title,
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(task);
  return res.status(201).json({ task });
}

export function updateTask(req, res) {
  const id = Number(req.params.id);
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    return res.status(404).json({ message: "Review item not found." });
  }

  task.completed = Boolean(req.body.completed);
  return res.json({ task });
}
