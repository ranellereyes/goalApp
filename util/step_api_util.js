export const fetchSteps = (todo) => (
  $.ajax({
    method: "GET",
    url: `api/steps`
  })
);

export const createStep = (step) => (
  $.ajax({
    method: "POST",
    url: `api/steps`,
    data: {
      step: {
        title: step.title,
        todo_id: step.todoId
      }
    }
  })
);

export const updateStep = (step) => (
  $.ajax({
    method: "PATCH",
    url: `api/steps/${step.id}`,
    data: {
      step: {
        done: step.done
      }
    }
  })
);

export const deleteStep = (step) => (
  $.ajax({
    method: "DELETE",
    url: `api/steps/${step.id}`
  })
);
