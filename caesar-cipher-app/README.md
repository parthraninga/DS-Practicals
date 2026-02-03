# Caesar Cipher - Interactive Cryptography Lab# React + Vite



A stunning, modern React application for learning and experimenting with the Caesar Cipher encryption technique.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



![Caesar Cipher App](https://img.shields.io/badge/React-18+-blue.svg)Currently, two official plugins are available:

![Vite](https://img.shields.io/badge/Vite-5+-purple.svg)

![License](https://img.shields.io/badge/license-MIT-green.svg)- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 🚀 Features

## React Compiler

- **Beautiful UI/UX**: Designed with premium SVG graphics, gradients, and smooth animations

- **Interactive Playground**: Real-time encryption and decryption with visual feedbackThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- **Educational Content**: Comprehensive explanation of Caesar Cipher principles

- **Responsive Design**: Fully responsive layout that works on all devices## Expanding the ESLint configuration

- **Modern Tech Stack**: Built with React 18, Vite 5, and pure CSS

- **API Integration**: Connected to AWS Lambda backend for cipher operationsIf you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## 🎨 Design Highlights

- **Glassmorphism Effects**: Stunning backdrop blur and transparency
- **Gradient Overlays**: Dynamic color gradients with purple, indigo, and pink tones
- **Animated SVGs**: Custom-designed icons and decorative elements
- **Smooth Transitions**: Fluid animations throughout the interface
- **Dark Theme**: Eye-friendly dark mode with high contrast

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **AWS API Gateway** - Backend API

## 📦 Installation

1. **Clone or navigate to the project:**
   ```bash
   cd caesar-cipher-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```
   VITE_API_URL=https://j3luh2hgv2.execute-api.ap-south-1.amazonaws.com/prod/ceaser
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173/`

## 🎯 Usage

### Encryption
1. Select "Encrypt" mode
2. Enter your plaintext message
3. Adjust the shift key (1-25)
4. Click "Encrypt" to see the result

### Decryption
1. Select "Decrypt" mode
2. Enter the encrypted text
3. Adjust the shift key to match the original encryption key
4. Click "Decrypt" to reveal the message

## 🏗️ Project Structure

```
caesar-cipher-app/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx          # Navigation sidebar
│   │   ├── Sidebar.css
│   │   ├── CaesarCipher.jsx     # Main page component
│   │   ├── CaesarCipher.css
│   │   ├── Playground.jsx       # Interactive cipher tool
│   │   └── Playground.css
│   ├── App.jsx                  # Root component
│   ├── App.css                  # Global styles
│   ├── index.css                # Base styles
│   └── main.jsx                 # Entry point
├── .env                         # Environment variables
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Color Palette

- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)
- **Accent**: `#ec4899` (Pink)
- **Background Dark**: `#0f172a`
- **Background Darker**: `#020617`
- **Success**: `#10b981` (Green)

## 📝 API Integration

The app uses a POST endpoint to process cipher operations:

**Endpoint:** `https://j3luh2hgv2.execute-api.ap-south-1.amazonaws.com/prod/ceaser`

**Request Body:**
```json
{
  "text": "your text here",
  "key": 3
}
```

**Response:**
```json
{
  "result": "encrypted/decrypted text"
}
```

## 🚀 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## 🌐 Deploy

You can deploy this app to:
- Vercel
- Netlify
- GitHub Pages
- AWS Amplify
- Any static hosting service

## 📄 License

MIT License - feel free to use this project for learning and educational purposes.

## 👨‍💻 Author

Created as part of a Data Security Lab practical demonstration.

## 🙏 Acknowledgments

- Julius Caesar for the original cipher (circa 58 BC)
- Modern cryptography for inspiration
- The React community for excellent tools

---

**Note:** The Caesar Cipher is a historical encryption method and should NOT be used for securing sensitive data in production environments. This project is for educational purposes only.
