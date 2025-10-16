# Manga Style Image AI Generator

An AI-powered manga style image generator that can transform regular images into manga style or generate manga-style images directly from text descriptions.

## 🌟 Features

- **Image to Manga**: Upload images and convert them to manga style
- **Text to Manga**: Generate manga-style images directly from text descriptions
- **Modern UI**: Responsive web interface built with React and Tailwind CSS
- **RESTful API**: Backend API service based on Spring Boot

## 🚀 Live Demo

**Project Demo Page**: [https://heyolivia709.github.io/manga_style_image_ai_generator/](https://heyolivia709.github.io/manga_style_image_ai_generator/)

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Router
- Lucide React (Icons)

### Backend
- Spring Boot 3.5
- Java 21
- Spring Cloud OpenFeign
- Maven
- Lombok

## 📁 Project Structure

```
manga_style_image_ai_generator/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   └── assets/        # Static assets
│   └── package.json
├── backend/           # Spring Boot backend service
│   ├── src/main/java/heyolivia/mangaapi/
│   │   ├── controller/    # REST controllers
│   │   ├── service/       # Business logic
│   │   ├── client/        # External API clients
│   │   └── dto/           # Data transfer objects
│   └── pom.xml
└── README.md
```

## 🚀 Quick Start

### Frontend Development

```bash
cd frontend
npm install
npm run dev
```

### Backend Development

```bash
cd backend
mvn spring-boot:run
```

## 📝 API Endpoints

### Image to Manga
```
POST /api/v1/generate
Content-Type: multipart/form-data

Parameters:
- image: Image file
- prompt: Style description text
```

### Text to Manga
```
POST /api/v1/generate-from-text
Content-Type: application/json

{
  "prompt": "Description text",
  "style": "shonen|shojo|seinen|anime"
}
```

## 📄 License

MIT License
