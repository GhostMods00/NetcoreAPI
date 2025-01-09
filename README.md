[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Jersey+10&size=25&pause=1000&color=15F78B&center=true&width=435&lines=Welcome+to+Netcore+;A++Social++Network+API)](https://git.io/typing-svg)

# Netcore API 🚀

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node.js](https://img.shields.io/badge/Node.js-v18.0.0-green.svg)
![Express](https://img.shields.io/badge/Express-v4.18.2-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-v5.0-green.svg)
[![GitHub issues](https://img.shields.io/github/issues/GhostMods00/NetcoreAPI)](https://github.com/GhostMods00/NetcoreAPI/issues)

## Description 📝

Netcore API is a social network API built with Express.js and MongoDB. This RESTful API provides core functionality for social networking features including user management, friend connections, thoughts sharing, and reactions.


## Features ✨

- 👤 **User Management**: Create, update, and delete user profiles
- 🤝 **Friend System**: Add and remove friends
- 💭 **Thoughts**: Share and manage thoughts
- 🔄 **Reactions**: React to friends' thoughts
- 📱 **RESTful API**: Full CRUD operations
- 🎯 **MongoDB Integration**: Efficient NoSQL database management

## Tech Stack 💻

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
- ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Demo Video
https://drive.google.com/file/d/1B642arPgzrXz21Bi0gi2QKV4I6Wi0DBe/view

## Installation Steps 🛠️

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm (Node Package Manager)
- Insomnia or Postman for testing

### Step 1: Clone & Install
```bash
# Clone the repository
git clone https://github.com/yourusername/netcore-api.git

# Navigate to project directory
cd netcore-api

# Install dependencies
npm install
```
### Step 2: Configure MongoDB

- Start MongoDB Service
- The application will connect to:
```bash
mongodb://localhost:27017
```
## Usage 🔨

After starting the server, use an API testing tool like Insomnia or Postman to test the endpoints.

Base URL: `http://localhost:3001/api`

### Example Requests:

```json
// Create a user
POST /api/users
{
    "username": "johndoe",
    "email": "john@example.com"
}

// Create a thought
POST /api/thoughts
{
    "thoughtText": "Here's a cool thought...",
    "username": "johndoe",
    "userId": "userId"
}
```
## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌱 Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💫 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 🚀 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔍 Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📫 Contact

Let's connect! Reach out to me through:

- 🌐 **Portfolio**: www.waleedzaryab.com
- 🐱 **GitHub**: https://github.com/GhostMods00
- 📧 **Email**: westendcrew1982@gmail.com

---

Made with ❤️ by Waleed Zaryab | © 2024 All Rights Reserved ✨
