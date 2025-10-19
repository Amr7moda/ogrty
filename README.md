# 🚌 Egyptian Microbus Fee Manager

A modern, professional web application designed specifically for Egyptian microbus conductors to efficiently manage fare collection, track passengers, and handle change calculations.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## ✨ Features

### 📊 Core Functionality
- **Basic Setup Calculator**: Set fare per person and total passengers with instant total calculation
- **Real-time Collection Tracker**: Track collected amount with visual progress bar
- **Smart Change Calculator**: Calculate change due with suggested bill/coin denominations
- **Individual Passenger Tracker**: Visual grid to mark who paid and who hasn't
- **Quick Actions**: Mark all passengers as paid or reset everything instantly

### 🌍 Localization
- **Bilingual Support**: Full Arabic and English translations
- **RTL Support**: Proper right-to-left layout for Arabic
- **Cairo Font**: Beautiful, readable typography for both languages

### 🎨 Modern Design
- **Professional UI**: Clean, modern interface with gradient backgrounds
- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Smooth Animations**: Subtle animations for better user experience
- **Color-coded Cards**: Easy-to-distinguish sections with intuitive color schemes
- **Interactive Elements**: Hover effects and transitions for better feedback

### 💡 Helpful Features
- **Progress Tracking**: Visual progress bar showing collection completion
- **Remaining Balance**: Automatic calculation of outstanding amounts
- **Per-Passenger Remaining**: Calculate how much each remaining passenger owes
- **Denomination Breakdown**: Shows exact bills and coins needed for change
- **Conductor Tips**: Helpful tips for efficient fare collection
- **Visual Passenger Grid**: Easy-to-use interface for tracking up to 99 passengers

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd microbus-fee-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📱 How to Use

### 1. Basic Setup
- Enter the **fee per person** (e.g., 5 EGP)
- Enter the **total number of passengers** (e.g., 14)
- The app automatically calculates the total expected amount

### 2. Track Collection
- As you collect money, enter the **amount collected** in the Collection Tracker
- Watch the progress bar fill up as you collect more
- See the **remaining amount** needed in real-time

### 3. Calculate Change
- When a passenger pays, enter the amount in the **Change Calculator**
- See the exact change due
- View the suggested denomination breakdown (200, 100, 50, 20, 10, 5, 1 EGP, and piasters)

### 4. Track Individual Passengers
- Each passenger is represented by a clickable button (#1, #2, #3, etc.)
- Click to toggle between **paid** (green ✓) and **not paid** (gray ✗)
- See at a glance how many passengers have paid
- Use quick actions to mark all as paid or reset

## 🎯 Use Cases

### For Conductors (المحصلين)
- **Starting the Route**: Set up fare and passenger count
- **During Collection**: Track who paid, calculate change quickly
- **End of Route**: Verify all passengers paid, check total collection

### For Drivers
- **Fare Verification**: Quickly check if all passengers paid
- **Change Management**: Know exact denominations needed
- **Dispute Resolution**: Clear record of who paid

### For Route Planning
- **Revenue Estimation**: Calculate expected revenue per trip
- **Capacity Planning**: Track typical passenger counts
- **Fare Analysis**: Compare different fare structures

## 🛠️ Technology Stack

- **React 19.1** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Vite** - Fast build tool
- **Lucide React** - Modern icon library

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for use by Egyptian microbus operators and conductors.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 💖 Acknowledgments

Built with ❤️ for Egyptian microbus conductors who work hard every day to keep Cairo moving.

---

## 📸 Screenshots

### English Version
- Modern dashboard with all calculation tools
- Clean, professional design
- Easy-to-use interface

### Arabic Version (النسخة العربية)
- Full RTL support
- Cairo font for excellent Arabic readability
- All features translated

## 🔮 Future Enhancements

- [ ] Trip history tracking
- [ ] Daily/weekly/monthly revenue reports
- [ ] Multiple route management
- [ ] Expense tracking
- [ ] Driver-conductor coordination features
- [ ] Offline mode with local storage
- [ ] Print receipts
- [ ] Integration with payment apps

## 📞 Support

For questions or support, please open an issue on GitHub.

---

**Made for the hardworking conductors of Egyptian microbuses** 🇪🇬
