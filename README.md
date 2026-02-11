# ExBackend - Course Materials API

A lightweight Express-based backend serving course materials, modules, and exam papers for various departments and semesters.

## 🚀 Features

- **Express.js API**: High-performance JSON API.
- **Serverless Ready**: Optimized for deployment on Vercel.
- **Structured Data**: Easy-to-manage subject details in `sample.data.js`.
- **Global CORS**: Accessible from any frontend client.

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **Vercel** (for hosting)
- **CORS** middleware

## 📂 Project Structure

- `server.js`: Main entry point for local development.
- `api/`: Serverless function handlers for Vercel.
- `sample.data.js`: The "database" of the project containing all subject details.
- `vercel.json`: Vercel deployment configuration.

## 📡 API Endpoints

### 1. Get All Subjects
- **Endpoint**: `/`
- **Method**: `GET`
- **Description**: Returns the complete list of subjects, modules, and exams.

### 2. Health Check
- **Endpoint**: `/health`
- **Method**: `GET`
- **Description**: Verifies the server status and provides data count.

## 💻 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   The server will be available at `http://localhost:8080`.

## 🤝 Contributing

We welcome contributions! The most frequent updates involve adding or modifying course data in `sample.data.js`.

**Please read the [CONTRIBUTING.md](CONTRIBUTING.md) guide for detailed instructions on how to add data correctly.**

## 📄 License

MIT
