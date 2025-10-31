import React, { useState } from 'react';
import { Lock, Unlock, Key } from 'lucide-react';
import InstaFuns from './components/InstaFuns';
import SchoolFuns from './components/SchoolFuns';
import Something from './components/Something';

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
      'from-indigo-600 to-blue-600',
      'from-blue-400 to-purple-500'
    ],
    boxHoverColors: [
      'hover:from-blue-600 hover:to-blue-700',
      'hover:from-indigo-600 hover:to-indigo-700',
      'hover:from-purple-600 hover:to-purple-700',
      'hover:from-cyan-600 hover:to-cyan-700',
      'hover:from-blue-700 hover:to-purple-700',
      'hover:from-indigo-700 hover:to-blue-700',
      'hover:from-blue-500 hover:to-purple-600'
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
      'from-fuchsia-600 to-pink-600',
      'from-pink-400 to-rose-500'
    ],
    boxHoverColors: [
      'hover:from-pink-600 hover:to-pink-700',
      'hover:from-rose-600 hover:to-rose-700',
      'hover:from-fuchsia-600 hover:to-fuchsia-700',
      'hover:from-pink-700 hover:to-rose-700',
      'hover:from-rose-700 hover:to-pink-700',
      'hover:from-fuchsia-700 hover:to-pink-700',
      'hover:from-pink-500 hover:to-rose-600'
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
      'from-emerald-600 to-teal-600',
      'from-green-400 to-emerald-500'
    ],
    boxHoverColors: [
      'hover:from-green-600 hover:to-green-700',
      'hover:from-emerald-600 hover:to-emerald-700',
      'hover:from-teal-600 hover:to-teal-700',
      'hover:from-lime-600 hover:to-lime-700',
      'hover:from-green-700 hover:to-emerald-700',
      'hover:from-emerald-700 hover:to-teal-700',
      'hover:from-green-500 hover:to-emerald-600'
    ]
  }
};

const boxContents: Record<number, { heading: string; subHead: string; content: string[] }> = {
  1: {
    heading: "PT 1 ~ 1st Sight",
    subHead: "1st convo - Exam hall seating",
    content: [
      "It's not your place. Someone else should come here.",
      "Dress - Blue/White.",
      "Roll no calculation by seating",
      "Lead 1: Signature form - Name found"
    ]
  },
  2: {
    heading: "Mobile Number",
    subHead: "Students record - Shared by HOD",
    content: [
      "Help: Students record - Shared by HOD",
      "Lead 2: Lead to Instagram",
      "Whatsapp Bio: It's just a spark",
      "Bio2: Hope~11:11",
      "1st Call : Oct 24 / 13 sec"
    ]
  },
  3: {
    heading: "Instagram",
    subHead: "Phone number discovery",
    content: [
      "Help: Phone number",
      "Scenario: By the number, Truecaller revealed the name"
    ]
  },
  4: {
    heading: "Hometown",
    subHead: "Kalaiyar Koil",
    content: [
      "Help: CAMU records entering site, Roll no",
      "Scenario: Got CAMU details entering site login, By roll no got details",
      "Lead 3: Birthday",
      "Lead 4: Hometown"
    ]
  },
  5: {
    heading: "School",
    subHead: "School discovery through highlights",
    content: [
      "Help: Insta Highlight (school tour)",
      "Scenario: Got from mutual sis ID, Found school dress (highlights)",
      "Lead 5: School name, Activities"
    ]
  },
  6: {
    heading: "First convo",
    subHead: "Aug 14 2025",
    content: [
      "first double side convo in 2 years"
    ]
  },
  7: {
    heading: "Something",
    subHead: "Explore more",
    content: [
      "Ready to explore something special?"
    ]
  }
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentTheme, setCurrentTheme] = useState<Theme>('blue');
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const [boxPassword, setBoxPassword] = useState('');
  const [boxError, setBoxError] = useState('');
  const [boxLoading, setBoxLoading] = useState(false);
  const [unlockedBoxes, setUnlockedBoxes] = useState<Set<number>>(new Set());
  const [viewingBox, setViewingBox] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<string>('timeline');

  const theme = themes[currentTheme];

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate loading for better UX
    setTimeout(() => {
      if (password === '4109') {
        setIsAuthenticated(true);
      } else {
        setError('Incorrect password. Please try again.');
      }
      setIsLoading(false);
    }, 800);
  };

  const handleBoxClick = (boxId: number) => {
    setSelectedBox(boxId);
    setBoxPassword('');
    setBoxError('');
  };

  const handleBoxPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBoxLoading(true);
    setBoxError('');

    // Define passwords for each chapter
    const chapterPasswords: Record<number, string> = {
      1: '501',
      2: '028', 
      3: 'dazz',
      4: '21-02',
      5: 'holy',
      6: 'idcs',
      7: '6095'
    };
    // Simulate loading for better UX
    setTimeout(() => {
      if (boxPassword === chapterPasswords[selectedBox!]) {
        // Password correct - unlock box and show content
        setUnlockedBoxes(prev => new Set([...prev, selectedBox!]));
        setViewingBox(selectedBox);
        setSelectedBox(null);
        setBoxPassword('');
      } else {
        setBoxError('Incorrect password. Please try again.');
      }
      setBoxLoading(false);
    }, 800);
  };

  const closeBoxModal = () => {
    setSelectedBox(null);
    setBoxPassword('');
    setBoxError('');
  };

  const closeContentModal = () => {
    setViewingBox(null);
  };

  const ThemeSelector = () => (
    <div className="fixed top-6 right-6 z-50 flex space-x-3">
      <button
        onClick={() => setCurrentTheme('pink')}
        className={`w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 ${
          currentTheme === 'pink' ? 'ring-4 ring-white ring-opacity-50' : ''
        }`}
        aria-label="Pink theme"
      />
      <button
        onClick={() => setCurrentTheme('blue')}
        className={`w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 ${
          currentTheme === 'blue' ? 'ring-4 ring-white ring-opacity-50' : ''
        }`}
        aria-label="Blue theme"
      />
      <button
        onClick={() => setCurrentTheme('green')}
        className={`w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 ${
          currentTheme === 'green' ? 'ring-4 ring-white ring-opacity-50' : ''
        }`}
        aria-label="Green theme"
      />
    </div>
  );

  const boxes = [
    {
      id: 1,
      title: 'Chapter 1: 1st sight',
      date: 'Oct 19 2023',
      hint: '11th mark'
    },
    {
      id: 2,
      title: 'Chapter 2: mobile number',
      date: '',
      hint: 'last 3 digits'
    },
    {
      id: 3,
      title: 'Chapter 3: instagram',
      date: '',
      hint: '1st 4 letters'
    },
    {
      id: 4,
      title: 'Chapter 4: hometown',
      date: '',
      hint: 'Birth day (eg: DD-MM)'
    },
    {
      id: 5,
      title: 'Chapter 5: School',
      date: '',
      hint: 'school 1st name'
    },
    {
      id: 6,
      title: 'Chapter 6: First convo',
      date: 'Aug 14 2025',
      hint: 'dept project name'
    },
    {
      id: 7,
      title: 'Chapter 7: Something',
      date: '',
      hint: 'house number'
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${theme.loginBackground} flex items-center justify-center p-4 transition-all duration-500`}>
        <ThemeSelector />
        
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.secondary}/50 animate-pulse`}></div>
        
        <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-md">
          <div className="text-center mb-8">
            <div className={`w-16 h-16 bg-gradient-to-br ${theme.primary} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Buddy</h1>
            <p className="text-gray-600">Enter your password to continue</p>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Hint: (last 4 aadhar number)
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-gradient-to-r ${theme.buttonGradient} text-white py-3 px-6 rounded-lg font-semibold hover:${theme.buttonHoverGradient} focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Verifying...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Unlock className="w-5 h-5 mr-2" />
                  Open
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Handle different pages
  if (currentPage === 'first-convo') {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${theme.backgroundGradient} p-4 transition-all duration-500`}>
        <div className="max-w-4xl mx-auto pt-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              First Conversation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Aug 14 2025
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-50"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Moment</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              First double side convo in 2 years
            </p>
            <h2 className="text-2xl font-bold text-white mb-4">After That</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              First nearby seating 
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              Through the project a lot of eyes, talks 
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              Same whatsapp group 
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              Same Gmail group 
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              First Mail  
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              Github Collab  
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={() => setCurrentPage('timeline')}
              className={`bg-gradient-to-r ${theme.buttonGradient} text-white py-3 px-8 rounded-lg font-semibold hover:${theme.buttonHoverGradient} transition-all duration-200 shadow-lg`}
            >
              Back to Timeline
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'insta-funs') {
    return <InstaFuns currentTheme={currentTheme} onBack={() => setCurrentPage('timeline')} />;
  }

  if (currentPage === 'school-funs') {
    return <SchoolFuns currentTheme={currentTheme} onBack={() => setCurrentPage('timeline')} />;
  }

  if (currentPage === 'something') {
    return <Something currentTheme={currentTheme} onBack={() => setCurrentPage('timeline')} />;
  }

  // Default return for timeline page
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.backgroundGradient} p-4 transition-all duration-500`}>
      <ThemeSelector />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Timeline
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Journey through our story, chapter by chapter
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-50"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {boxes.map((box, index) => {
            return (
              <div key={box.id} className="relative mb-12 last:mb-0">
                {/* Timeline line */}
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-white/20 last:hidden"></div>
                
                {/* Timeline dot */}
                <div className={`absolute left-6 top-8 w-4 h-4 bg-gradient-to-br ${theme.boxColors[index]} rounded-full border-4 border-white/20 shadow-lg`}></div>
                
                {/* Content */}
                <div className="ml-20">
                  <div
                    onClick={() => handleBoxClick(box.id)}
                    className="group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className={`bg-gradient-to-br ${theme.boxColors[index]} ${theme.boxHoverColors[index]} p-8 rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-white/60 text-sm font-medium">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="text-white/40 text-xs">
                            Click to explore
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {box.title}
                        </h3>
                        
                        {box.date && (
                          <p className="text-white/90 text-sm font-medium mb-2">
                            {box.date}
                          </p>
                        )}
                        
                        <p className="text-white/70 text-sm leading-relaxed">
                          Password hint: {box.hint}
                        </p>
                      </div>

                      <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <div className="w-3 h-3 border-r-2 border-b-2 border-white/60 transform rotate-[-45deg] translate-x-[-1px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm px-6 py-2 rounded-full border border-gray-600 hover:border-gray-400"
          >
            ← Back to login
          </button>
        </div>
      </div>

      {/* Box Password Modal */}
      {selectedBox && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-md">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {boxes[selectedBox - 1].title}
              </h2>
              <p className="text-gray-600">Enter password to unlock this chapter</p>
            </div>

            <form onSubmit={handleBoxPasswordSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={boxPassword}
                  onChange={(e) => setBoxPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  required
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Hint: {boxes[selectedBox - 1].hint}
                </p>
              </div>

              {boxError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {boxError}
                </div>
              )}

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={closeBoxModal}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={boxLoading}
                  className={`flex-1 bg-gradient-to-r ${theme.buttonGradient} text-white py-3 px-6 rounded-lg font-semibold hover:${theme.buttonHoverGradient} transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {boxLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Unlocking...
                    </div>
                  ) : (
                    'Unlock'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Content Modal */}
      {viewingBox && boxContents[viewingBox as keyof typeof boxContents] && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {boxContents[viewingBox as keyof typeof boxContents].heading}
              </h2>
              <h3 className="text-lg text-gray-600 mb-4">
                {boxContents[viewingBox as keyof typeof boxContents].subHead}
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"></div>
            </div>

            <div className="space-y-4 mb-8">
              {boxContents[viewingBox as keyof typeof boxContents].content.map((line, index) => (
                <p key={index} className="text-gray-700 leading-relaxed text-lg">
                  {line}
                </p>
              ))}
            </div>

            {/* Special buttons for specific boxes */}
            {viewingBox === 3 && (
              <div className="mb-6">
                <button
                  onClick={() => {
                    closeContentModal();
                    setTimeout(() => {
                      setCurrentPage('insta-funs');
                    }, 100);
                  }}
                  className={`bg-gradient-to-r ${theme.buttonGradient} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg mr-4 hover:shadow-xl hover:scale-105`}
                >
                  INSTA FUNS
                </button>
              </div>
            )}

            {viewingBox === 5 && (
              <div className="mb-6">
                <button
                  onClick={() => {
                    closeContentModal();
                    setTimeout(() => {
                      setCurrentPage('school-funs');
                    }, 100);
                  }}
                  className={`bg-gradient-to-r ${theme.buttonGradient} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg mr-4 hover:shadow-xl hover:scale-105`}
                >
                  SCHOOL FUNS
                </button>
              </div>
            )}

            {viewingBox === 6 && (
              <div className="mb-6">
                <button
                  onClick={() => {
                    closeContentModal();
                    setTimeout(() => {
                      setCurrentPage('first-convo');
                    }, 100);
                  }}
                  className={`bg-gradient-to-r ${theme.buttonGradient} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg mr-4 hover:shadow-xl hover:scale-105`}
                >
                  VIEW DETAILS
                </button>
              </div>
            )}

            {viewingBox === 7 && (
              <div className="mb-6">
                <button
                  onClick={() => {
                    closeContentModal();
                    setTimeout(() => {
                      setCurrentPage('something');
                    }, 100);
                  }}
                  className={`bg-gradient-to-r ${theme.buttonGradient} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg mr-4 hover:shadow-xl hover:scale-105`}
                >
                  EXPLORE SOMETHING
                </button>
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={closeContentModal}
                className={`bg-gradient-to-r ${theme.buttonGradient} text-white py-3 px-8 rounded-lg font-semibold hover:${theme.buttonHoverGradient} transition-all duration-200 shadow-lg`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;