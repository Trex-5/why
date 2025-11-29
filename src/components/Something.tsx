import React, { useState } from 'react';
import { ArrowLeft, Heart, Eye, Calendar, Clock, Shirt, MoreHorizontal, Sparkles, X, Menu } from 'lucide-react';

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
      'from-violet-500 to-violet-600'
    ],
    boxHoverColors: [
      'hover:from-blue-600 hover:to-blue-700',
      'hover:from-indigo-600 hover:to-indigo-700',
      'hover:from-purple-600 hover:to-purple-700',
      'hover:from-cyan-600 hover:to-cyan-700',
      'hover:from-blue-700 hover:to-purple-700',
      'hover:from-indigo-700 hover:to-blue-700',
      'hover:from-violet-600 hover:to-violet-700'
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

interface SubBox {
  id: string;
  title: string;
  heading: string;
  content: string[];
}

interface SomethingProps {
  currentTheme: Theme;
  onBack: () => void;
}

const Something: React.FC<SomethingProps> = ({ currentTheme, onBack }) => {
  const [selectedSection, setSelectedSection] = useState<string>('DAY 1');
  const [selectedSubBox, setSelectedSubBox] = useState<SubBox | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const theme = themes[currentTheme];

  const sidebarOptions = [
    { id: 'day-1', label: 'DAY 1', icon: Calendar },
    { id: 'accidental-sight', label: 'ACCIDENTAL SIGHT', icon: Eye },
    { id: 'friday-evening', label: 'FRIDAY EVENING', icon: Clock },
    { id: 'sem-time', label: 'SEM TIME', icon: Calendar },
    { id: 'no-look', label: 'NO LOOK', icon: Eye },
    { id: 'dress', label: 'DRESS', icon: Shirt },
    { id: 'others', label: 'OTHERS', icon: MoreHorizontal },
    { id: 'back', label: 'Back', icon: ArrowLeft }
  ];

  const subBoxData: Record<string, SubBox[]> = {
    'DAY 1': [
      {
        id: 'first-Sight',
        title: 'First Sight - Blue',
        heading: 'Day 1',
        content: ['It was not the first day of college but the first day of exams where it all began. In a blue dress sat at one desk before of mine. Did not see the face clearly, but secretly learned name and recognized signature.']
      }
    ],
    'ACCIDENTAL SIGHT': [
      {
        id: 'accidental-catch-1',
        title: 'Accidental Catch 1 - Blue',
        heading: 'Break Time',
        content: ['11:00 on a monday, crossing canteen with backpack and lunch box, think late comming from home']
      },
      {
        id: 'accidental-catch-2',
        title: 'Accidental Catch 2 - Pink',
        heading: 'Evening Time',
        content: ['photo pose on bench near auditorium, a lab exam evening']
      },
      {
        id: 'accidental-catch-3',
        title: 'Accidental Catch 3 - Green',
        heading: 'Morning Time',
        content: ['CFRD room']
      },
      {
        id: 'accidental-catch-4',
        title: 'Accidental Catch 4 - Red',
        heading: 'Afternoon Time',
        content: ['your class went to Industrial Visit, birthday photos on road side']
      },
      {
        id: 'accidental-catch-5',
        title: 'Accidental Catch 5 - Light Blue',
        heading: 'Evening Time',
        content: ['playing kho-kho in light blue T-shirt & trouser']
      },
      {
        id: 'accidental-catch-6',
        title: 'Accidental Catch 6 - Blue',
        heading: 'Evening Time',
        content: ['CE culturals day evening, crossing canteen , on the way to home']
      },
      {
        id: 'accidental-catch-7',
        title: 'Accidental Catch 7 - Violet',
        heading: 'Evening Time',
        content: ['A evening on a CIA 2 english lab, in front of canteen, i did not expect you that time and way']
      },
      {
        id: 'accidental-catch-8',
        title: 'Accidental Catch 8 - Marron',
        heading: 'Evening Time',
        content: ['It was on the day of our first conversation that you crossed me on the road while going to your home']
      },
      {
        id: 'A Lot',
        title: 'A Lot',
        heading: 'The Whole time',
        content: ['A lot to add, but above are some special']
      }
    ],
    'FRIDAY EVENING': [
      {
        id: 'friday-eve-1',
        title: 'Friday Evening 1',
        heading: 'Blue Dress',
        content: ['a friday evening , after college, i was on the way to canteen side, you was on the way to home with friends, 0 look']
      },
      {
        id: 'friday-eve-2',
        title: 'Friday Evening 2',
        heading: 'Black Dress',
        content: ['a friday evening , after college, i was waiting for bus, you was on the way to home, 2 looks.']
      },
      {
        id: 'friday-eve-3',
        title: 'Friday Evening 3',
        heading: 'Black Dress',
        content: ['a friday evening , after college, i was waiting for bus, you was on the way to home, 0 looks.']
      },
      {
        id: 'friday-eve-4',
        title: 'Friday Evening 4',
        heading: 'Marron Dress',
        content: ['Actually it was a Thursday, i was watching march past and did not saw you until you cross me on the road']
      }
    ],
    'SEM TIME': [
      {
        id: 'sem-time-1',
        title: 'Sem Time 1',
        heading: 'Sem 2 - last day',
        content: ['Yellow dress, i did not saw you on the day but found on a insta story in a food shop']
      },
      {
        id: 'sem-time-2',
        title: 'Sem Time 2',
        heading: 'Sem 3 - last day',
        content: ['Brown dresss, i did not saw on this day also, while waiting for bus search on ground and roads bus also started, when bus turn the road a 1 second seen - found you on the road, walking to toll with friend']
      },
      {
        id: 'sem-time-3',
        title: 'Sem Time 3',
        heading: 'Sem 4 - last day',
        content: ['Black/White dress,24/07/25 - Morning seen, That last turn look on the edge of the way to hostel']
      },
      {
        id: 'sem-time-4',
        title: 'Sem Time 4',
        heading: 'Sem 4 - lab last day',
        content: ['Green dress, 04/06/25 - on the way to hostel that last turn look']
      }
    ],
    'NO LOOK': [
      {
        id: 'no-look-1',
        title: 'No Look 1',
        heading: 'Sem 1 - Blue Dress',
        content: ['1st yr , i was try to dont look but accidentally saw in a blue dress']
      },
      {
        id: 'no-look-2',
        title: 'No Look 2',
        heading: 'Sem 4 - Violet Dress',
        content: ['SEM 4, cycle 2 english lab, i was on my streak of dont looking your presence but it was the day i just saw 6 times accidentally']
      },
      {
        id: 'no-look-3',
        title: 'No Look 3',
        heading: 'Sem 4 - Marron Dress',
        content: ['A break hour front of admin block']
      },
      {
        id: 'no-look-4',
        title: 'No Look 4',
        heading: 'Sem 5',
        content: ['Cant cross the days when crossing the class, windows, infront']
      },
      {
        id: 'no-look-5',
        title: 'No Look 5',
        heading: 'Sem 4',
        content: ['A long streak, but just broke on 4/6/25, sem 4 last sem lab, in a green dress on the way to hostel, that last turn just broke it']
      },
      {
        id: 'no-look-6',
        title: 'No Look 6',
        heading: 'Sem 5',
        content: ['A one day no look']
      },
      {
        id: 'no-look-7',
        title: 'No Look 7',
        heading: 'Sem 5',
        content: ['A one day no look on cycle 2, cuz the day before day you didnt saw me']
      },
      {
        id: 'no-look-8',
        title: 'No Look 8',
        heading: 'Sem 5',
        content: ['started before model exam']
      }
    ],
    'DRESS': [
      {
        id: 'dress-1',
        title: 'Dress 1',
        heading: 'Blue/White',
        content: ['1st Day, Most Wednesday, Bday 1, My Bday 2024, CE culturals 2025, ']
      },
      {
        id: 'dress-2',
        title: 'Dress 2',
        heading: 'Dark Blue with dots',
        content: ['Sometimes']
      },
      {
        id: 'dress-3',
        title: 'Dress 3',
        heading: 'Light Blue/White',
        content: ['Not like chudi, Rare Dress, Sem 1 lunch hour on my class, Sem 2 Elective exam, Sem 4 DBMS CIA 1 exam - this was last of the dress']
      },
      {
        id: 'dress-4',
        title: 'Dress 4',
        heading: 'Dark Blue/Yellow',
        content: ['1 time after diwali 2024']
      },
      {
        id: 'dress-5',
        title: 'Dress 5',
        heading: 'Greenish Blue/Yellow',
        content: ['Sem 3 python sem lab, some wednesday']
      },
      {
        id: 'dress-6',
        title: 'Dress 6',
        heading: 'Light Blue/white shawl',
        content: ['Sem 5 a wednesday']
      },
      {
        id: 'dress-7',
        title: 'Dress 7',
        heading: 'Dark green with dots',
        content: ['A random day near principle office']
      },
      {
        id: 'dress-8',
        title: 'Dress 8',
        heading: 'White with Light green leaf',
        content: ['Festronix, A frinds outing highlight on insta']
      },
      {
        id: 'dress-9',
        title: 'Dress 9',
        heading: 'Light green',
        content: ['CFRD room , Sem 4 DBMS lab']
      },
      {
        id: 'dress-10',
        title: 'Dress 10',
        heading: 'Dark green/ black shawl',
        content: ['1 time on Sem 3 training lab']
      },
      {
        id: 'dress-11',
        title: 'Dress 11',
        heading: 'White/Black',
        content: ['Culturals 1']
      },
      {
        id: 'dress-12',
        title: 'Dress 12',
        heading: 'White/Black 2',
        content: ['Festronix 2']
      },
      {
        id: 'dress-13',
        title: 'Dress 13',
        heading: 'Black/white',
        content: ['Sem 4 R lab, Sem 4 last day']
      },
      {
        id: 'dress-14',
        title: 'Dress 14',
        heading: 'Black/pink shawl',
        content: ['2 friday evening, showing dindugal project certificate to HOD a random wednesday']
      },
      {
        id: 'dress-15',
        title: 'Dress 15',
        heading: 'Black',
        content: ['JJ college DP']
      },
      {
        id: 'dress-16',
        title: 'Dress 16',
        heading: 'Pink',
        content: ['youth ideathon YT video thumbnail | madhurai winner linkedin post']
      },
      {
        id: 'dress-17',
        title: 'Dress 17',
        heading: 'lite Pink',
        content: ['No specific action, sometimes']
      },
      {
        id: 'dress-18',
        title: 'Dress 18',
        heading: 'silver top/pink',
        content: ['sometimes/club inaugural, dp']
      },
      {
        id: 'dress-19',
        title: 'Dress 19',
        heading: 'lite pink/white shades',
        content: ['SEM 5 - 3 time']
      },
      {
        id: 'dress-20',
        title: 'Dress 20',
        heading: 'Pink/white shawl',
        content: ['I didnt see on that day even on the same room, it was a no look day']
      },
      {
        id: 'dress-21',
        title: 'Dress 21',
        heading: 'Sandle White',
        content: ['sem 5 cycle 2  no look day, 24/11/25 last day of AWS class for me']
      },
      {
        id: 'dress-22',
        title: 'Dress 22',
        heading: 'Violet/white dot',
        content: ['SEM 4 BC lab on a no look day, SEM 4 CN exam']
      },
      {
        id: 'dress-23',
        title: 'Dress 23',
        heading: 'Yellow/Black',
        content: ['No specific action, sometimes']
      },
      {
        id: 'dress-24',
        title: 'Dress 24',
        heading: 'Brown',
        content: ['SEM 3 java lab, SEM 3 last exam']
      },
      {
        id: 'dress-25',
        title: 'Dress 25',
        heading: 'Red/white shawl',
        content: ['SEM 1 BC exam']
      },
      {
        id: 'dress-26',
        title: 'Dress 26',
        heading: 'Red/sandle',
        content: ['2nd B-Day, Festronix 2']
      },
      {
        id: 'dress-27',
        title: 'Dress 27',
        heading: 'Dark Red/black',
        content: ['4th Friday evening, Day 5 of SEM 5']
      },
      {
        id: 'dress-28',
        title: 'Dress 28',
        heading: 'Green shawl/sandle with dots or flowers',
        content: ['No specific action, sometimes']
      },
      {
        id: 'dress-29',
        title: 'Dress 29',
        heading: 'light yellowish',
        content: ['sem 5 cycle 1 second genAI lab']
      },
      {
        id: 'dress-30',
        title: 'Dress 30',
        heading: 'white/black rectandle pattern',
        content: ['No specific action, sometimes']
      },
      {
        id: 'dress-31',
        title: 'Dress 31',
        heading: 'sandle/dark blue',
        content: ['wp dp, wp status']
      },
      {
        id: 'dress-32',
        title: 'Dress 32',
        heading: 'lite marron with white dots',
        content: ['After Diwali 2, pondi']
      },
      {
        id: 'dress-33',
        title: 'Dress 33',
        heading: 'lite green white',
        content: ['TCS codevita day, after coimbatore event']
      },
      {
        id: 'dress-34',
        title: 'Dress 34',
        heading: 'green sandle',
        content: ['No specific action, sometimes']
      },
      {
        id: 'dress-35',
        title: 'Dress 35',
        heading: 'sandle/black',
        content: ['My club inauguration, sometimes']
      },
      {
        id: 'dress-36',
        title: 'Dress 36',
        heading: 'white/dark blue/patterns',
        content: ['Your club canvas, sometimes']
      },
      {
        id: 'dress-37',
        title: 'Dress 37',
        heading: 'light green, black shawl - sem 5 no look day before model, club workshop event',
        content: ['project day, sometimes']
      },
      {
        id: 'dress-38',
        title: 'Dress 38',
        heading: 'lite pink/sandle',
        content: ['after diwali 2, day 2']
      },
      {
        id: 'dress-39',
        title: 'Dress 39',
        heading: 'lite blue/black trouser',
        content: ['kho kho game in college']
      },
      {
        id: 'dress-40',
        title: 'Dress 40',
        heading: 'lite green T shirt',
        content: ['status 2 on wp']
      },
      {
        id: 'dress-41',
        title: 'Dress 41',
        heading: 'white full hand shirt',
        content: ['insta mirror , holding mobile DP']
      },
      {
        id: 'dress-42',
        title: 'Dress 42',
        heading: 'red T shirt',
        content: ['a birthday story, cycling on street']
      },
      {
        id: 'dress-43',
        title: 'Dress 43',
        heading: 'green/pink',
        content: ['hometown dance']
      },
      {
        id: 'dress-44',
        title: 'Dress 44',
        heading: 'brown saree',
        content: ['birthday story']
      },
      {
        id: 'dress',
        title: 'Dress',
        heading: 'Confusion',
        content: ['Lots of Black/White , White/black dress i am just confused i missed something😢']
      }
      
    ],
    'OTHERS': [
      {
        id: 'github_name',
        title: 'Github',
        heading: 'Github Name',
        content: ['Github name', '31/05/25 - R excel shared on mail']
      },
      {
        id: 'wifi_name',
        title: 'Wifi',
        heading: 'Wifi Name - your name',
        content: ['Wifi name', '04/06/25 - SEM 4 - 9:31 AM when trying to connect a wifi, second name - *Wi~fi*']
      },
      {
        id: 'aadhar',
        title: 'Aadhar',
        heading: 'Aadhar Number',
        content: ['Aadhar no', '26/07/25 - SEM 5 - 9:05 AM - 525449414109']
      },
      {
        id: '12th',
        title: '12th data',
        heading: 'Mark/cutoff',
        content: ['540 - 90% - 169.5']
      },
      {
        id: 'project',
        title: 'Project',
        heading: 'College Project',
        content: ['A lot happened after 14/08/25']
      },
      {
        id: 'address',
        title: 'Address',
        heading: 'Home Town',
        content: ['6095, krishna nagar, kallal road, kalaiyar kovil, sivaganga']
      }
      ,
      {
        id: 'touch',
        title: 'Touch',
        heading: 'Touch',
        content: ['21/11/25 - 12:40 accidental while get the lap']
      }
    ]
  };

  const handleSidebarClick = (option: string) => {
    if (option === 'Back') {
      onBack();
    } else {
      setSelectedSection(option);
    }
  };

  const handleSubBoxClick = (subBox: SubBox) => {
    setSelectedSubBox(subBox);
  };

  const closePopup = () => {
    setSelectedSubBox(null);
  };

  const renderContent = () => {
    const currentSubBoxes = subBoxData[selectedSection] || [];
    
    return (
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{selectedSection}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSubBoxes.map((subBox, index) => (
            <div
              key={subBox.id}
              onClick={() => handleSubBoxClick(subBox)}
              className={`bg-gradient-to-br ${theme.boxColors[index % theme.boxColors.length]} p-4 md:p-6 rounded-xl shadow-lg border border-white/10 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
            >
              <div className="relative">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                  {subBox.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Click to view details
                </p>
                <div className="absolute top-2 right-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <div className="w-2 h-2 border-r border-b border-white/60 transform rotate-[-45deg]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.backgroundGradient} flex flex-col md:flex-row`}>
      {/* Mobile header */}
      <div className="w-full md:hidden px-4 py-4 border-b border-white/10 bg-black/10 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 bg-gradient-to-br ${theme.primary} rounded-full flex items-center justify-center`}>
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-semibold text-white">Something Special</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open menu"
              className="p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/5"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      {/* Sidebar (desktop) */}
      <div className="hidden md:block w-80 bg-black/20 backdrop-blur-sm border-r border-white/10 p-6">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className={`w-12 h-12 bg-gradient-to-br ${theme.primary} rounded-full flex items-center justify-center`}>
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Something Special</h1>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <nav className="space-y-2">
          {sidebarOptions.map((option) => {
            const Icon = option.icon;
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

      {/* Sidebar drawer (mobile) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="w-72 bg-black/95 backdrop-blur-sm p-5 border-r border-white/10 overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${theme.primary} rounded-full flex items-center justify-center`}>
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-lg font-semibold text-white">Something</h2>
              </div>
              <button onClick={() => setIsSidebarOpen(false)} aria-label="Close" className="p-2 rounded-lg text-white/90 hover:bg-white/5">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-2">
              {sidebarOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = selectedSection === option.label && option.label !== 'Back';
                const isBack = option.label === 'Back';

                return (
                  <button
                    key={option.id}
                    onClick={() => {
                      handleSidebarClick(option.label);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-150 text-left ${
                      isSelected
                        ? `bg-gradient-to-r ${theme.primary} text-white shadow-md`
                        : isBack
                        ? 'text-white/70 hover:text-white hover:bg-white/5'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{option.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
          <div className="flex-1" onClick={() => setIsSidebarOpen(false)} />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-full sm:max-w-3xl md:max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedSubBox && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {selectedSubBox.heading}
                </h2>
                <h3 className="text-lg text-gray-600">
                  {selectedSubBox.title}
                </h3>
              </div>
              <button
                onClick={closePopup}
                className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"></div>

            <div className="space-y-4">
              {selectedSubBox.content.map((line, index) => (
                <p key={index} className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {line}
                </p>
              ))}
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={closePopup}
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
};

export default Something;