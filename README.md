# Personal Budget Tracker API

A simple RESTful API for managing budgets, categories, and transactions. Built with **Node.js**, **Express**, and **MongoDB**.

## 🚀 Features

- CRUD operations for:
  - Budgets
  - Categories
  - Transactions
- MongoDB with Mongoose ODM
- Environment-based config via `.env`
- CORS enabled for frontend integration
- Auto-sorted & populated responses

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- CORS

## 📦 Installation

```bash
git clone https://github.com/GauravKesh/personal-expense-backend.git
cd personal-expense-backend
npm install
```

## ⚙️ Environment Variables

Create a `.env` file in the root:

```bash
touch .env
```

Add the following variables:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/personal?retryWrites=true&w=majority
```

## ▶️ Running the Server

```bash
npm run dev    # with nodemon
# or
npm start      # for production
```

## 📖 API Endpoints

### ✅ Health Check
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server health check |

### 📁 Category Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | List all categories |
| POST | `/api/categories` | Create a category |
| PUT | `/api/categories/:id` | Update a category |
| DELETE | `/api/categories/:id` | Delete a category |

### 💰 Budget Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/budgets` | List all budgets |
| POST | `/api/budgets` | Create a budget |
| PUT | `/api/budgets/:id` | Update a budget |
| DELETE | `/api/budgets/:id` | Delete a budget |

### 💳 Transaction Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/transactions` | List all transactions |
| POST | `/api/transactions` | Create a transaction |
| PUT | `/api/transactions/:id` | Update a transaction |
| DELETE | `/api/transactions/:id` | Delete a transaction |

## 📁 Folder Structure

```
.
├── package-lock.json
├── package.json
├── README.md
└── src
    ├── api
    │   ├── controllers
    │   │   ├── Budget.controller.js
    │   │   ├── Category.controller.js
    │   │   └── Transaction.controller.js
    │   └── routes
    │       ├── Budget.route.js
    │       ├── Category.route.js
    │       └── Transaction.route.js
    ├── app.js
    ├── config
    ├── models
    │   ├── Budget.model.js
    │   ├── Category.model.js
    │   └── Transaction.model.js
    └── server.js
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.