# Contributing Guide

This project serves as a structured repository for course materials. Most contributions will involve editing [sample.data.js](sample.data.js) to add or update subject information.

## 📝 How to Edit `sample.data.js`

The [sample.data.js](sample.data.js) file exports a large array called `subjectDetails`. Each object in this array represents a single subject.

### Subject Data Structure

| Field           | Type   | Description                                     |
| :-------------- | :----- | :---------------------------------------------- |
| `id`          | String | A unique identifier (lowercase, no spaces).     |
| `code`        | String | The official course code (e.g.,`23CS5PCOOM`). |
| `name`        | String | The full name of the subject.                   |
| `departments` | Array  | List of departments (e.g.,`["CSE", "ISE"]`).  |
| `semester`    | String | The semester number (e.g.,`"5"`).             |
| `modules`     | Array  | List of module objects (Units).                 |
| `exams`       | Array  | List of exam objects (CIE, SEE).                |
| `videos`      | Array  | (Optional) List of video links.                 |

### Module & Exam Object Structure

Both module and exam objects follow this structure:

```json
{
  "id": "unique_id",
  "name": "Display Name",
  "url": "Google Drive Link"
}
```

## 💡 Guidelines for Data Entry

### 1. Generating IDs

- **Subject ID**: Keep it short and descriptive (e.g., `ml` for Machine Learning, `os` for Operating Systems).
- **Module ID**: Use the pattern `m{number}_{subject_id}` (e.g., `m1_ml`).
- **Exam ID**: Use patterns like `cie1_{subject_id}` or `see_{subject_id}`.

### 2. Course Codes

- Double-check the course code for accuracy. It is used for searching and filtering.
- Example: `23AI4PCMLG`

### 3. Google Drive Links

- Ensure the link is set to **"Anyone with the link can view"**.
- Use the full URL provided by Google Drive.

### 4. Semester

- Always provide the semester as a **string** (e.g., `"4"`, not `4`).

## 🛠️ Adding a New Subject

To add a new subject, copy this template and paste it at the end of the `subjectDetails` array:


Departments

| SN | Department                                                      | Dept Code |
| -- | --------------------------------------------------------------- | --------- |
| 1  | **Computer Science and Engineering**                      | CSE       |
| 2  | **Computer Science and Engineering - Internet of Things** | ICB       |
| 3  | **Civil Engineering**                                     | CIVIL     |
| 4  | **Electronics and Communication Engineering**             | ECE       |
| 5  | **Information Science and Engineering**                   | ISE       |
| 6  | **Artificial Intelligence and Machine Learning**          | AIML      |
| 7  | **Artificial Intelligence and Data Science**              | AIDS      |
| 8  | **Electrical and Electronics Engineering**                | EEE       |

```javascript
  {
    "id": "COURSE_NAME_ABBREVIATION (example CC for cloud computing)",
    "code": "COURSE_CODE_FROM_SYLLABUS",
    "name": "Subject Name",
    "departments": ["DEP1", "DEP2" (pick from above table example: CSE for )],
    "semester": "5",
    "modules": [
      {
        "id": "m1_id",
        "name": "UNIT 1",
        "url": "DRIVE_LINK"
      }
    ],
    "exams": [
      {
        "id": "cie1_id",
        "name": "CIE 1",
        "url": "DRIVE_LINK"
      }
    ],
    "videos": []
  },
```

## ✅ Verification Before Committing

1. **Syntax Check**: Ensure you haven't missed any commas or brackets.
2. **Link Check**: Click on the URLs to verify they open correctly. Make sure that you have made the GDrive link public.
3. **Run Locally**: Start the server with `npm run dev` and visit `http://localhost:8080/` to ensure the JSON loads without errors.
