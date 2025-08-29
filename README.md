# ExNote Backend API

Backend API for the ExNote application that serves subject details and educational resources.

## 🚀 Deployment to Vercel

### Prerequisites
- [Vercel CLI](https://vercel.com/cli) installed
- Vercel account

### Deployment Steps

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N**
   - Project name: `exnote-backend` (or your preferred name)
   - Directory: `./` (current directory)

4. **Production Deployment**:
   ```bash
   vercel --prod
   ```

### API Endpoints

- `GET /` - Returns all subject details
- `GET /health` - Health check endpoint

### Local Development

```bash
npm run dev
```

Server will run on `http://localhost:8080`

### Environment Variables

Currently no environment variables are required. The app uses static data from `sample.data.js`.

## 📝 Notes

- The API serves static subject data
- CORS is enabled for all origins
- Designed for serverless deployment on Vercel
