
const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@e.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      { active: true,  newTask: false, completed: false, failed: false, taskTitle: "Update website", taskDescription: "Revamp the homepage design", taskDate: "2024-10-12", category: "Design" },
      { active: false, newTask: true,  completed: false, failed: false, taskTitle: "Write unit tests",      taskDescription: "Cover components with unit tests",   taskDate: "2024-10-13", category: "QA" },
      { active: false, newTask: false, completed: true,  failed: false, taskTitle: "Client meeting",     taskDescription: "Discuss project requirements", taskDate: "2024-10-10", category: "Meeting" },
      { active: false, newTask: false, completed: false, failed: true,  taskTitle: "Fix login bug",      taskDescription: "Resolve authentication bug", taskDate: "2024-10-14", category: "Development" }
    ]
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      { active: true,  newTask: false, completed: false, failed: false, taskTitle: "Database optimization", taskDescription: "Optimize queries for better performance", taskDate: "2024-10-11", category: "Database" },
      { active: false, newTask: true,  completed: false, failed: false, taskTitle: "Design new feature",    taskDescription: "Create mockups for the new feature", taskDate: "2024-10-09", category: "Design" },
      { active: false, newTask: true,  completed: false, failed: false, taskTitle: "API documentation",    taskDescription: "Create API docs for new endpoints",  taskDate: "2024-10-15", category: "Documentation" },
      { active: false, newTask: false, completed: true,  failed: false, taskTitle: "Code review",          taskDescription: "Review pull requests in repo",      taskDate: "2024-10-12", category: "Development" },
      { active: false, newTask: false, completed: true,  failed: false, taskTitle: "Deploy staging build", taskDescription: "Deploy the build to staging", taskDate: "2024-10-13", category: "DevOps" },
      { active: false, newTask: false, completed: false, failed: true,  taskTitle: "Fix UI bug",           taskDescription: "Resolve CSS layout issue",    taskDate: "2024-10-14", category: "UI" }
    ]
  },
  {
    id: 3,
    firstName: "Ravi",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      { active: true,  newTask: false, completed: false, failed: false, taskTitle: "Prepare presentation", taskDescription: "Prepare slides for upcoming client presentation", taskDate: "2024-10-13", category: "Presentation" },
      { active: true,  newTask: false, completed: false, failed: false, taskTitle: "Code review",          taskDescription: "Review the codebase for optimization",        taskDate: "2024-10-12", category: "Development" },
      { active: true,  newTask: false, completed: false, failed: false, taskTitle: "Develop feature X",    taskDescription: "Implement feature X as per spec",       taskDate: "2024-10-14", category: "Development" },
      { active: false, newTask: true,  completed: false, failed: false, taskTitle: "Load testing",         taskDescription: "Perform load testing on endpoints",   taskDate: "2024-10-15", category: "QA" },
      { active: false, newTask: false, completed: true,  failed: false, taskTitle: "Testing",             taskDescription: "Test the latest build for bugs",    taskDate: "2024-10-08", category: "QA" },
      { active: false, newTask: false, completed: true,  failed: false, taskTitle: "Update docs",         taskDescription: "Update project documentation",      taskDate: "2024-10-16", category: "Documentation" },
      { active: false, newTask: false, completed: false, failed: true,  taskTitle: "Fix deployment",       taskDescription: "Resolve deployment pipeline issue", taskDate: "2024-10-17", category: "DevOps" }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      { active: true,  newTask: false, completed: false, failed: false, taskTitle: "Write documentation", taskDescription: "Update the project documentation", taskDate: "2024-10-13", category: "Documentation" },
      { active: true,  newTask: false, completed: false, failed: false, taskTitle: "Set up CI/CD",         taskDescription: "Implement continuous integration pipeline", taskDate: "2024-10-11", category: "DevOps" },
      { active: false, newTask: true,  completed: false, failed: false, taskTitle: "UX review",             taskDescription: "Review the new UX designs",         taskDate: "2024-10-14", category: "Design" },
      { active: false, newTask: true,  completed: false, failed: false, taskTitle: "Security audit",        taskDescription: "Perform security audit on application", taskDate: "2024-10-15", category: "Security" },
      { active: false, newTask: false, completed: true,  failed: false, taskTitle: "Team meeting",         taskDescription: "Weekly sync with team",              taskDate: "2024-10-16", category: "Meeting" },
      { active: false, newTask: false, completed: false, failed: true,  taskTitle: "Fix markdown links",    taskDescription: "Resolve dead links in README",        taskDate: "2024-10-17", category: "Documentation" }
    ]
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      { active: true,  newTask: false, completed: false, failed: false, taskTitle: "UI redesign",         taskDescription: "Redesign the user interface for better UX", taskDate: "2024-10-14", category: "Design" },
      { active: true,  newTask: false, completed: false, failed: false, taskTitle: "Implement cache",      taskDescription: "Add caching for API responses",           taskDate: "2024-10-15", category: "Performance" },
      { active: true,  newTask: false, completed: false, failed: false, taskTitle: "Client feedback",      taskDescription: "Gather feedback from clients after product launch", taskDate: "2024-10-12", category: "Support" },
      { active: false, newTask: true,  completed: false, failed: false, taskTitle: "Backup data",         taskDescription: "Set up daily backups for database",    taskDate: "2024-10-16", category: "DevOps" },
      { active: false, newTask: false, completed: true,  failed: false, taskTitle: "Deploy new build",  taskDescription: "Deploy the latest build to production", taskDate: "2024-10-09", category: "DevOps" },
      { active: false, newTask: false, completed: true,  failed: false, taskTitle: "Write tests",       taskDescription: "Write integration tests for endpoints", taskDate: "2024-10-17", category: "QA" },
      { active: false, newTask: false, completed: false, failed: true,  taskTitle: "Fix auth bug",       taskDescription: "Resolve JWT token expiry issue",      taskDate: "2024-10-18", category: "Security" }
    ]
  }
];



const admin = [{
    id: 1,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123"
}];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}