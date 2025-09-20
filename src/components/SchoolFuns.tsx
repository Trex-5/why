import React, { useState } from 'react';
import { ArrowLeft, GraduationCap, School, Youtube, Award } from 'lucide-react';

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
    boxColors: [
      'from-blue-500 to-blue-600',
      'from-indigo-500 to-indigo-600',
      'from-purple-500 to-purple-600',
      'from-cyan-500 to-cyan-600',
      'from-blue-600 to-purple-600',
      'from-indigo-600 to-blue-600'
    ],
    boxHoverColors: [
      'hover:from-blue-600 hover:to-blue-700',
      'hover:from-indigo-600 hover:to-indigo-700',
      'hover:from-purple-600 hover:to-purple-700',
      'hover:from-cyan-600 hover:to-cyan-700',
      'hover:from-blue-700 hover:to-purple-700',
      'hover:from-indigo-700 hover:to-blue-700'
    ]
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
    boxColors: [
      'from-pink-500 to-pink-600',
      'from-rose-500 to-rose-600',
      'from-fuchsia-500 to-fuchsia-600',
      'from-pink-600 to-rose-600',
      'from-rose-600 to-pink-600',
      'from-fuchsia-600 to-pink-600'
    ],
    boxHoverColors: [
      'hover:from-pink-600 hover:to-pink-700',
      'hover:from-rose-600 hover:to-rose-700',
      'hover:from-fuchsia-600 hover:to-fuchsia-700',
      'hover:from-pink-700 hover:to-rose-700',
      'hover:from-rose-700 hover:to-pink-700',
      'hover:from-fuchsia-700 hover:to-pink-700'
    ]
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
    boxColors: [
      'from-green-500 to-green-600',
      'from-emerald-500 to-emerald-600',
      'from-teal-500 to-teal-600',
      'from-lime-500 to-lime-600',
      'from-green-600 to-emerald-600',
      'from-emerald-600 to-teal-600'
    ],
    boxHoverColors: [
      'hover:from-green-600 hover:to-green-700',
      'hover:from-emerald-600 hover:to-emerald-700',
      'hover:from-teal-600 hover:to-teal-700',
      'hover:from-lime-600 hover:to-lime-700',
      'hover:from-green-700 hover:to-emerald-700',
      'hover:from-emerald-700 hover:to-teal-700'
    ]
  }
};

interface SchoolFunsProps {
  currentTheme: Theme;
  onBack: () => void;
}

const SchoolFuns: React.FC<SchoolFunsProps> = ({ currentTheme, onBack }) => {
  const theme = themes[currentTheme];

  const schoolBoxes = [
    {
      id: 1,
      heading: '11th - 501',
      icon: GraduationCap,
      content: 'Marks: T - 96, E - 95, M - 83, P - 91, C - 84, B - 92'
    },
    {
      id: 2,
      heading: 'School',
      icon: School,
      content: 'Holy Spirit'
    },
    {
      id: 3,
      heading: 'YouTube Video',
      icon: Youtube,
      content: 'Got an award for 3rd rank',
      hasLink: true,
      linkText: 'Watch on YouTube',
      linkUrl: 'https://www.youtube.com/watch?v=yiD5Dm_XFYo'
    },
    {
      id: 4,
      heading: '12th',
      icon: GraduationCap,
      content: 'cutoff - 169.50, percentage - 90%, mark - 540'
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.backgroundGradient}`}>
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${theme.primary} rounded-full flex items-center justify-center`}>
              <School className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">School Funs</h1>
          </div>
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/10"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Timeline</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolBoxes.map((box, index) => {
              const Icon = box.icon;
              return (
                <div
                  key={box.id}
                  className={`bg-gradient-to-br ${theme.boxColors[index]} p-8 rounded-2xl shadow-2xl border border-white/10 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl`}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{box.heading}</h2>
                  </div>

                  <div className="space-y-4">
                    <p className="text-white/90 text-lg leading-relaxed">
                      {box.content}
                    </p>

                    {box.hasLink && (
                      <div className="pt-4">
                        <p className="text-white/80 text-sm mb-3">Click Below link</p>
                        <a
                          href={box.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg"
                        >
                          <Youtube className="w-4 h-4" />
                          <span>{box.linkText}</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {box.id === 3 && (
                    <div className="mt-4 flex items-center space-x-2 text-white/70">
                      <Award className="w-4 h-4" />
                      <span className="text-sm">Achievement Unlocked</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolFuns;