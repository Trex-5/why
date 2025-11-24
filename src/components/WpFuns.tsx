import React, { useState } from 'react';
import { ArrowLeft, User, MessageSquare, ImageIcon } from 'lucide-react';

type Theme = 'blue' | 'pink' | 'green';

interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  gradient: string;
  hoverGradient: string;
  buttonGradient: string;
  buttonHoverGradient: string;
  backgroundGradient: string;
  loginBackground: string;
  boxColors: string[];
  boxHoverColors: string[];
}

const themes: Record<Theme, ThemeConfig> = {
  blue: {
    primary: 'from-blue-500 to-purple-600',
    secondary: 'from-indigo-100 via-white to-cyan-100',
    accent: 'from-blue-600 to-purple-700',
    gradient: 'from-slate-900 via-purple-900 to-slate-900',
    hoverGradient: 'from-slate-800 via-purple-800 to-slate-800',
    buttonGradient: 'from-blue-500 to-purple-600',
    buttonHoverGradient: 'from-blue-600 to-purple-700',
    backgroundGradient: 'from-slate-900 via-purple-900 to-slate-900',
    loginBackground: 'from-indigo-100 via-white to-cyan-100',
    boxColors: ['from-blue-500 to-blue-600', 'from-indigo-500 to-indigo-600', 'from-purple-500 to-purple-600', 'from-cyan-500 to-cyan-600', 'from-blue-600 to-purple-600', 'from-indigo-600 to-blue-600', 'from-blue-400 to-purple-500', 'from-rose-400 to-pink-500'],
    boxHoverColors: ['hover:from-blue-600 hover:to-blue-700', 'hover:from-indigo-600 hover:to-indigo-700', 'hover:from-purple-600 hover:to-purple-700', 'hover:from-cyan-600 hover:to-cyan-700', 'hover:from-blue-700 hover:to-purple-700', 'hover:from-indigo-700 hover:to-blue-700', 'hover:from-blue-500 hover:to-purple-600', 'hover:from-rose-500 hover:to-pink-600']
  },
  pink: {
    primary: 'from-pink-500 to-rose-600',
    secondary: 'from-pink-100 via-white to-rose-100',
    accent: 'from-pink-600 to-rose-700',
    gradient: 'from-slate-900 via-pink-900 to-slate-900',
    hoverGradient: 'from-slate-800 via-pink-800 to-slate-800',
    buttonGradient: 'from-pink-500 to-rose-600',
    buttonHoverGradient: 'from-pink-600 to-rose-700',
    backgroundGradient: 'from-slate-900 via-pink-900 to-slate-900',
    loginBackground: 'from-pink-100 via-white to-rose-100',
    boxColors: ['from-pink-500 to-pink-600', 'from-rose-500 to-rose-600', 'from-fuchsia-500 to-fuchsia-600', 'from-pink-600 to-rose-600', 'from-rose-600 to-pink-600', 'from-fuchsia-600 to-pink-600', 'from-pink-400 to-rose-500', 'from-rose-300 to-fuchsia-400'],
    boxHoverColors: ['hover:from-pink-600 hover:to-pink-700', 'hover:from-rose-600 hover:to-rose-700', 'hover:from-fuchsia-600 hover:to-fuchsia-700', 'hover:from-pink-700 hover:to-rose-700', 'hover:from-rose-700 hover:to-pink-700', 'hover:from-fuchsia-700 hover:to-pink-700', 'hover:from-pink-500 hover:to-rose-600', 'hover:from-rose-400 hover:to-fuchsia-500']
  },
  green: {
    primary: 'from-green-500 to-emerald-600',
    secondary: 'from-green-100 via-white to-emerald-100',
    accent: 'from-green-600 to-emerald-700',
    gradient: 'from-slate-900 via-green-900 to-slate-900',
    hoverGradient: 'from-slate-800 via-green-800 to-slate-800',
    buttonGradient: 'from-green-500 to-emerald-600',
    buttonHoverGradient: 'from-green-600 to-emerald-700',
    backgroundGradient: 'from-slate-900 via-green-900 to-slate-900',
    loginBackground: 'from-green-100 via-white to-emerald-100',
    boxColors: ['from-green-500 to-green-600', 'from-emerald-500 to-emerald-600', 'from-teal-500 to-teal-600', 'from-lime-500 to-lime-600', 'from-green-600 to-emerald-600', 'from-emerald-600 to-teal-600', 'from-green-400 to-emerald-500', 'from-lime-300 to-emerald-400'],
    boxHoverColors: ['hover:from-green-600 hover:to-green-700', 'hover:from-emerald-600 hover:to-emerald-700', 'hover:from-teal-600 hover:to-teal-700', 'hover:from-lime-600 hover:to-lime-700', 'hover:from-green-700 hover:to-emerald-700', 'hover:from-emerald-700 hover:to-teal-700', 'hover:from-green-500 hover:to-emerald-600', 'hover:from-lime-400 hover:to-emerald-500']
  }
};

interface WpFunsProps {
  currentTheme: Theme;
  onBack: () => void;
}

const WpFuns: React.FC<WpFunsProps> = ({ currentTheme, onBack }) => {
  const [selectedSection, setSelectedSection] = useState<string>('Display picture');
  const theme = themes[currentTheme];

  const sidebarOptions = [
    { id: 'display-picture', label: 'Display picture', icon: ImageIcon },
    { id: 'bio', label: 'Bio', icon: User },
    { id: 'status', label: 'Status', icon: MessageSquare },
    { id: 'back', label: 'Back', icon: ArrowLeft }
  ];

  const handleSidebarClick = (option: string) => {
    if (option === 'Back') {
      onBack();
    } else {
      setSelectedSection(option);
    }
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'Display picture':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">WhatsApp Display Pictures</h2>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-white/90 text-lg leading-relaxed">1. temple - dark blue/sandle 1st saw Oct 30 2025</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-white/90 text-lg leading-relaxed">2. KRCT ampetheater - silver/pink - Oct 5</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-white/90 text-lg leading-relaxed">3. again temp - Oct 8</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-white/90 text-lg leading-relaxed">4. KRCT ampetheater - different silver/pink - Oct 11</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-white/90 text-lg leading-relaxed">5. again temp - Oct 13</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-white/90 text-lg leading-relaxed">6. pondy collage - brown</p>
              </div>
            </div>
          </div>
        );
      case 'Bio':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">WhatsApp Bio</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-white/90 text-lg leading-relaxed">Hope~11:11</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-white/90 text-lg leading-relaxed">Whatsapp Bio: It's just a spark</p>
            </div>
          </div>
        );
      case 'Status':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">WhatsApp Status</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <ul className="space-y-2 text-white/80">
                <li>• 12/10/25 - Party pictures</li>
                <li>• 05/09/25 - Travel story</li>
                <li>• 31/08/25 - Study group</li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.backgroundGradient} flex`}>
      {/* Sidebar */}
      <div className="w-80 bg-black/20 backdrop-blur-sm border-r border-white/10 p-6">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className={`w-12 h-12 bg-gradient-to-br ${theme.primary} rounded-full flex items-center justify-center`}>
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" /></svg>
            </div>
            <h1 className="text-2xl font-bold text-white">WP Funs</h1>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <nav className="space-y-2">
          {sidebarOptions.map((option) => {
            const Icon = option.icon as any;
            const isSelected = selectedSection === option.label && option.label !== 'Back';
            const isBack = option.label === 'Back';

            return (
              <button
                key={option.id}
                onClick={() => handleSidebarClick(option.label)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isSelected
                    ? `bg-gradient-to-r ${theme.primary} text-white shadow-lg`
                    : isBack
                    ? 'text-white/70 hover:text-white hover:bg-white/5'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{option.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default WpFuns;
