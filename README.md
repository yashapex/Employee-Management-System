# 👥 Employee Management System

<div align="center">
  <img src="https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/Context_API-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="Context API">
</div>

<div align="center">
  <h3>🚀 A Modern React-Based Employee Task Management System</h3>
  <p>Streamline your workforce management with role-based authentication, real-time task tracking, and intuitive dashboards.</p>
  
  <p>
    <a href="https://ems-react-yash.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/🚀-Live%20Demo-brightgreen?style=for-the-badge" alt="Live Demo">
    </a>
    <a href="https://github.com/yashapex/Employee-Management-System" target="_blank">
      <img src="https://img.shields.io/badge/📂-Source%20Code-blue?style=for-the-badge" alt="Source Code">
    </a>
  </p>
</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [🔐 Demo Credentials](#-demo-credentials)
- [📱 Screenshots](#-screenshots)
- [🏗️ Project Structure](#️-project-structure)
- [🎯 Usage](#-usage)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

### 🔐 **Authentication & Authorization**
- **Context-Driven Authentication** - Custom AuthProvider with React Context API
- **Role-Based Access Control** - Separate Admin and Employee dashboards
- **Secure Login System** - Email/password validation with show/hide password toggle

### 📊 **Task Management**
- **Dynamic Task Creation** - Intuitive form with title, description, due date, and category
- **Real-Time Task Tracking** - Live updates on task status (New, Active, Completed, Failed)
- **Task Assignment** - Admins can assign tasks to specific employees
- **Status Management** - Easy task status updates and progress tracking

### 🎨 **User Experience**
- **Responsive Design** - Mobile-friendly interface with modern styling
- **Interactive Dashboard** - Live task counts and filtering capabilities
- **Clean UI Components** - Tailwind-powered layouts with rounded cards
- **Intuitive Navigation** - Clear feedback on form submissions and actions

### 💾 **Data Management**
- **Local Storage Integration** - Simulated persistence without backend dependency
- **Seed Data Utilities** - Pre-populated employees and tasks for testing
- **Real-Time Updates** - Dynamic data refresh across components

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React.js** | Frontend Framework | 18.0+ |
| **Context API** | State Management | Built-in |
| **JavaScript (ES6+)** | Programming Language | Latest |
| **CSS3** | Styling | Latest |
| **HTML5** | Markup | Latest |
| **FontAwesome** | Icons | Latest |
| **Local Storage** | Data Persistence | Browser API |

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yashapex/Employee-Management-System.git
   cd Employee-Management-System
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔐 Demo Credentials

### 👨‍💼 Admin Access
- **Email:** admin@me.com
- **Password:** 123
- **Capabilities:** Full task management, employee oversight, analytics

### 👥 Employee Access
| Name | Email | Password | Role |
|------|--------|----------|------|
| Arjun | e@e.com | 123 | Employee |
| Sneha | employee2@example.com | 123 | Employee |
| Ravi | employee3@example.com | 123 | Employee |
| Priya | employee4@example.com | 123 | Employee |
| Karan | employee5@example.com | 123 | Employee |

> **Note:** Use Admin credentials to access the management panel and assign tasks. Use Employee credentials to view and manage assigned tasks.

## 📱 Screenshots

### 🔐 Login Interface
<div align="center">
  <img src="https://raw.githubusercontent.com/yashapex/Employee-Management-System/main/public/Login page.png" alt="Login Interface" width="800"/>
  <p><em>Clean login interface with email/password authentication and demo credentials access</em></p>
</div>

### 👥 Employee Dashboard
<div align="center">
  <img src="https://raw.githubusercontent.com/yashapex/Employee-Management-System/main/public/employee_page.png" alt="Employee Dashboard" width="800"/>
  <p><em>Employee dashboard showing personal task analytics with circular progress indicators</em></p>
</div>

### 👨‍💼 Admin Dashboard
<div align="center">
  <img src="https://raw.githubusercontent.com/yashapex/Employee-Management-System/main/public/admin_page.png" alt="Admin Dashboard" width="800"/>
  <p><em>Admin dashboard with task creation form and employee task overview table</em></p>
</div>

### 🔑 Demo Credentials Page
<div align="center">
  <img src="https://raw.githubusercontent.com/yashapex/Employee-Management-System/main/public/demoLogin.png" alt="Demo Credentials" width="800"/>
  <p><em>Demo credentials page showing all available test accounts for easy access</em></p>
</div>

### ✨ Key Features Showcase
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Live task status changes and progress tracking
- **Intuitive UI**: Clean, modern interface with smooth animations
- **Role-based Access**: Different views for admins and employees
- **Task Management**: Complete CRUD operations for task handling

## 🏗️ Project Structure

```
Employee-Management-System/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   └── AuthProvider.jsx
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   ├── Tasks/
│   │   │   ├── CreateTask.jsx
│   │   │   ├── TaskList.jsx
│   │   │   └── TaskCard.jsx
│   │   └── Common/
│   │       ├── Header.jsx
│   │       └── Sidebar.jsx
│   ├── context/
│   │   └── AuthContext.js
│   ├── utils/
│   │   └── localStorage.js
│   ├── styles/
│   │   └── main.css
│   └── App.js
├── public/
├── package.json
└── README.md
```

## 🎯 Usage

### For Administrators
1. **Login** with admin credentials
2. **Create Tasks** using the task creation form
3. **Assign Tasks** to specific employees
4. **Monitor Progress** through the analytics dashboard
5. **Manage Users** and update task statuses

### For Employees
1. **Login** with employee credentials
2. **View Assigned Tasks** on your personal dashboard
3. **Update Task Status** (New → Active → Completed/Failed)
4. **Track Progress** and manage workload

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] Real-time notifications
- [ ] File upload for tasks
- [ ] Advanced reporting and analytics
- [ ] Email notifications
- [ ] Mobile app version
- [ ] Task comments and collaboration
- [ ] Time tracking functionality

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/yashapex">Yash</a></p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>

## 🔗 Links

- [🚀 Live Demo](https://ems-react-yash.vercel.app/)
- [📂 Source Code](https://github.com/yashapex/Employee-Management-System)
- [🐛 Report Bug](https://github.com/yashapex/Employee-Management-System/issues)
- [💡 Request Feature](https://github.com/yashapex/Employee-Management-System/issues)

---

<div align="center">
  <sub>Built with React.js and lots of ☕</sub>
</div>
