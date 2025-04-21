import React from 'react';
import './TaskList.css';

export class TaskList extends React.Component {
  static tasks = [
    { id: 1, text: 'Купити молоко' },
    { id: 2, text: 'Почитати книгу' },
    { id: 3, text: 'Зробити зарядку' },
  ];

  static nextId = 4;

  constructor(props) {
    super(props);
    this.newTaskInput = React.createRef();
  }

  handleDeleteTask = (taskId) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== taskId);
    this.forceUpdate();
  };

  handleAddTask = () => {
    const newTaskText = this.newTaskInput.current.value.trim();
    if (newTaskText) {
      TaskList.tasks = [...TaskList.tasks, { id: TaskList.nextId++, text: newTaskText }];
      this.newTaskInput.current.value = '';
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div className="task-list-container">
        <h2>Список завдань</h2>
        <div className="add-task-section">
          <input
            type="text"
            ref={this.newTaskInput}
            placeholder="Додати нове завдання"
            className="new-task-input"
          />
          <button onClick={this.handleAddTask} className="add-button">
            Додати
          </button>
        </div>
        <ul className="task-list">
          {TaskList.tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span className="task-text">{task.text}</span>
              <button
                onClick={() => this.handleDeleteTask(task.id)}
                className="delete-button"
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}