document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const taskForm = document.getElementById("taskForm");
  const taskName = document.getElementById("taskName");
  const taskPriority = document.getElementById("taskPriority");

  const taskManager = new Task();

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskData = {
      taskName: taskName.value,
      taskPriority: taskPriority.value,
      createdAt: `${year}-${month}-${day}`,
    };

    const result = taskManager.saveTask(taskData);

    if (result.success) {
      window.location.href = "tasks.html";
    } else {
      console.log("failed to add task");
    }
  });
});
