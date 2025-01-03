import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			teal: {
  				'50': '#DFFBFC',
  				'100': '#BEF7F8',
  				'200': '#7EEFF1',
  				'300': '#3DE8EA',
  				'400': '#16C8CB',
  				'500': '#0F8B8D',
  				'600': '#0C6D6F',
  				'700': '#095253',
  				'800': '#063737',
  				'900': '#031B1C',
  				'950': '#010E0E'
  			},
  			lemon: {
  				'50': '#FDF4E8',
  				'100': '#FBEBD5',
  				'200': '#F8D8AB',
  				'300': '#F4C481',
  				'400': '#F0AE52',
  				'500': '#EC9A29',
  				'600': '#C97D12',
  				'700': '#9B600E',
  				'800': '#674009',
  				'900': '#342005',
  				'950': '#170F02'
  			},
  			tomato: {
  				'50': '#FBE6E5',
  				'100': '#F7CCCA',
  				'200': '#EE9591',
  				'300': '#E6625C',
  				'400': '#DD2C22',
  				'500': '#A8201A',
  				'600': '#841A15',
  				'700': '#661410',
  				'800': '#420D0A',
  				'900': '#230705',
  				'950': '#120303'
  			},
  			lavender: {
  				'50': '#FAF9FA',
  				'100': '#F8F7F8',
  				'200': '#F1EEF0',
  				'300': '#E8E3E7',
  				'400': '#E1DBDF',
  				'500': '#DAD2D8',
  				'600': '#B3A3AF',
  				'700': '#8C7386',
  				'800': '#5F4E5B',
  				'900': '#30272D',
  				'950': '#161215'
  			},
  			darkTeal: {
  				'50': '#E0F0F6',
  				'100': '#BCDEEB',
  				'200': '#7EC0D8',
  				'300': '#3B9FC4',
  				'400': '#286C85',
  				'500': '#143642',
  				'600': '#112D37',
  				'700': '#0C2027',
  				'800': '#08161B',
  				'900': '#040A0C',
  				'950': '#020608'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
