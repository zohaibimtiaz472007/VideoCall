# 🎥 Secure Video Meeting

A modern, secure video calling application built with React and Zego UIKit. Join or create one-on-one video meetings with ease using unique room IDs.

![React](https://img.shields.io/badge/React-19.0.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)
![Zego](https://img.shields.io/badge/Zego_UI_Kit-2.14.1--beta-orange.svg)

## ✨ Features

- **One-on-One Video Calls**: High-quality video and audio communication
- **Screen Sharing**: Share your screen during meetings
- **Room-Based Access**: Join meetings using unique room IDs
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Communication**: Powered by Zego's reliable infrastructure
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS

## 🚀 Tech Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Video SDK**: Zego UIKit Prebuilt
- **Build Tool**: Vite
- **Deployment**: Vercel-ready

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Zego Cloud account (for app credentials)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zohaibimtiaz472007/VideoCall.git
   cd VideoCall
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_ZEGO_APP_ID=your_zego_app_id
   VITE_ZEGO_SERVER_SECRET=your_zego_server_secret
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📖 Usage

1. **Home Page**: Enter a room ID to join an existing meeting or create a new one
2. **Join Meeting**: Click "Join Now" to enter the video call
3. **Video Controls**: Use built-in controls for camera, microphone, and screen sharing
4. **Share Link**: Copy the meeting link to invite others

## 🏗️ Project Structure

```
VideoCall/
├── public/
├── src/
│   ├── assets/
│   ├── pages/
│   │   ├── home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   └── room/
│   │       ├── Room.jsx
│   │       └── Room.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `VITEAPP_ID`
   - `VITE_SERVER_SECRET`
4. Deploy!

### Other Platforms

The app is compatible with any static hosting service. Make sure to set the environment variables in your deployment platform.

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_ZEGO_APP_ID` | Your Zego Cloud App ID | Yes |
| `VITE_ZEGO_SERVER_SECRET` | Your Zego Cloud Server Secret | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Zego Cloud](https://www.zegocloud.com/) for the excellent video SDK
- [React](https://reactjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📞 Support

If you have any questions or need help, feel free to open an issue on GitHub.

---

Made with ❤️ by [zohaibimtiaz472007](https://github.com/zohaibimtiaz472007)
