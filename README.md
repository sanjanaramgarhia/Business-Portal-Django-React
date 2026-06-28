# Business Portal (Django + React)

A full-stack business portal built using **Django REST Framework (DRF)** and **React**. The application provides secure user authentication, protected API access, and a responsive dashboard where authenticated users can manage and view personalized data.

## 🚀 Features

* User Registration and Login
* JWT Authentication
* Protected REST APIs
* Dynamic User Dashboard
* Role-based Authentication
* React Router for Client-side Navigation
* React Context API for Global State Management
* Responsive UI with Bootstrap and Custom CSS
* RESTful API Integration using Axios

## 🛠️ Tech Stack

### Backend

* Python
* Django
* Django REST Framework (DRF)
* Simple JWT
* SQLite/PostgreSQL

### Frontend

* React
* React Router
* React Hooks (`useState`, `useEffect`)
* Context API
* Bootstrap
* Axios

## 📂 Project Structure

```text
business-portal/
│
├── backend/
│   ├── accounts/
│   ├── dashboard/
│   ├── api/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/Business-Portal-Django-React.git
cd Business-Portal-Django-React
```

### Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

## 🔐 Authentication

* JWT Token Authentication
* User Registration
* Secure Login
* Protected Routes
* Authorized API Requests

## 📌 Future Enhancements

* User Profile Management
* Admin Dashboard
* Notifications
* File Uploads
* Analytics Dashboard
* Machine Learning Integration
* Email Verification
* Password Reset

## 📖 Learning Outcomes

Through this project, I gained practical experience in:

* Building REST APIs with Django REST Framework
* Implementing JWT Authentication
* Integrating React with Django APIs
* Managing Global State using Context API
* Creating Responsive User Interfaces
* Consuming REST APIs using Axios
* Developing Secure Full-Stack Applications

## 👨‍💻 Author

**Sanjana Ramgarhia**

If you found this project helpful, consider giving it a ⭐ on GitHub!
