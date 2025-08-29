import express from "express"
import { subjectDetails } from "./sample.data.js"
import cors from "cors"

const app = express()

app.use(cors({
    origin: '*',
    credentials: true
}))

app.get("/", (req, res) => {
    return res
        .status(200)
        .json(subjectDetails)
})

// Health check endpoint
app.get("/health", (req, res) => {
    return res
        .status(200)
        .json({ 
            status: "ok", 
            message: "Server is running",
            timestamp: new Date().toISOString(),
            dataCount: subjectDetails.length
        })
})

// For local development
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 8080
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

// Export for Vercel
export default app