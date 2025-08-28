# StudyHub 📚

A platform where students can upload, share, and explore notes with ease. StudyHub makes it simple for toppers to share their notes once, so classmates can access them anytime without repeatedly asking.

### 🚀 Features

🔐 User Authentication – Register/Login system

📤 Upload Notes – Share PDFs, DOCX, PPT, and more

🔍 Explore Notes – Search and preview notes easily

🌐 Cloud Storage – Files stored securely with Cloudinary

📱 Responsive Design – Works on desktop and mobile

### 🛠️ Tech Stack

Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js, MongoDB
Cloud Storage: Cloudinary
Other Tools: Axios, JWT for authentication

### 📂 Project Structure
``
StudyHub/
├── Frontend/        # Frontend (React)
├── backend/        # Backend (Node + Express)
├── models/        # Database models (MongoDB)
├── routes/        # API routes
├── controllers/   # Backend logic
└── README.md
``

### ⚙️ Installation

#### 1️⃣ Clone the repository
git clone https://github.com/your-username/studyhub.git
cd studyhub

#### 2️⃣ Install dependencies

*For backend:*
``
cd server
npm install
``bash

*For frontend:*
``
cd ../client
npm install
``

#### 3️⃣ Add Environment Variables

*Create .env in the server folder:*
``
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
``
#### ▶️ Run the project

*Start backend:*
``
cd server
npm start
``

*Start frontend:*
``
cd client
npm run dev
``

### 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.
