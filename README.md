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
git clone https://github.com/your-username/personal-budget-api.git
cd personal-budget-api
npm install
⚙️ Environment Variables
Create a .env file in the root:

env
Copy
Edit
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/personal-budget?retryWrites=true&w=majority
▶️ Running the Server
bash
Copy
Edit
npm run dev    # with nodemon
# or
npm start      # for production
🔗 API Endpoints
Method	Endpoint	Description
GET	/api/health	Server health check
GET	/api/categories	List all categories
POST	/api/categories	Create a category
PUT	/api/categories/:id	Update a category
DELETE	/api/categories/:id	Delete a category
GET	/api/budgets	List all budgets
POST	/api/budgets	Create a budget
PUT	/api/budgets/:id	Update a budget
DELETE	/api/budgets/:id	Delete a budget
GET	/api/transactions	List all transactions
POST	/api/transactions	Create a transaction
PUT	/api/transactions/:id	Update a transaction
DELETE	/api/transactions/:id	Delete a transaction

📁 Folder Structure
bash
Copy
Edit
.
├── controllers/
├── models/
├── routes/
├── .env
├── app.js
├── server.js
└── README.md