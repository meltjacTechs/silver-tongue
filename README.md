<div align="center">
  <img src="public/favicon.svg" alt="Silver Tongue Logo" width="100" height="100" />
  <h1>Silver Tongue: Capital Quest</h1>
  <p><strong>An AI-Powered RPG where your voice is your greatest asset</strong></p>
  <p>Master financial literacy through AI-driven voice negotiations and economic challenges</p>
</div>

---

## 🌟 Overview

The Silver Tongue is a financial literacy RPG designed to bridge the gap between theoretical knowledge and real-world application. Players navigate an 8-stage world where traditional combat is replaced by AI-driven voice negotiations.

From negotiating a salary with a stone Golem to defending against a "Compounding" Dragon, players must master economic principles to survive.
## 🎮 Key Features

- **Voice-Action Combat**: Integrated Web Speech API allows players to speak directly to NPCs
- **LLM Judgment Engine**: Powered by Gemini 1.5 Flash, the game evaluates logic, sentiment, and vocabulary in real-time
- **The Truth Lens**: A visual UI mechanic that reveals hidden fraud and scams in Level 8
- **8 Economic Realms**:
  - Valley of Scarcity (Budgeting)
  - Peaks of Compounding (Debt/Interest)
  - Sea of Markets (Investing)
  - Fog of Devaluation (Inflation)
  - The Iron Works (Labor/Negotiation)
  - Citadel of Credit (Credit Scores)
  - The Tax Keep (Taxation)
  - Mirage Desert (Fraud Prevention)

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React.js, Vite, TypeScript |
| **Design** | Figma (Adaptive UI/UX) |
| **AI** | Google Gemini 1.5 Flash API |
| **Voice Input** | Web Speech API / Deepgram |
| **Backend** | Momen (Data persistence & User profiles) |

## ⚙️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Gemini API Key

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/silver-tongue-capital-quest.git
   cd silver-tongue-capital-quest
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 🧠 How the AI Works

The game uses a **"Context-Injected Prompting"** strategy. Each level feeds a specific economic persona into the Gemini model, allowing it to evaluate player arguments based on financial logic and sentiment.

### AI Response Structure
```json
{
  "npc_dialogue": "Your argument for a raise is weak. Where is your market data?",
  "logic_score": 45,
  "hp_damage": 15,
  "game_state": "ongoing"
}
```

The AI evaluates:
- **Logic**: Sound economic reasoning
- **Sentiment**: Persuasiveness and tone
- **Vocabulary**: Use of financial terminology

## 🤝 Contributing

This project welcomes contributions! Areas for enhancement include:
- New "Power Words" and economic arguments
- Improved AI evaluation logic
- Additional economic realms and NPCs
- UI/UX improvements

## 📄 License

This project is open source and available under the MIT License.

## 👥 Project Team

Built for the 2025 Hackathon. We're passionate about making financial literacy fun and accessible to everyone.

---

<div align="center">
  <p><strong>Master your finances through the power of persuasion</strong></p>
</div>