Set up the frontend according to the following prompt:
  <frontend-prompt>
  Create detailed components with these requirements:
  1. Use 'use client' directive for client-side components
  2. Make sure to concatenate strings correctly using backslash
  3. Style with Tailwind CSS utility classes for responsive design
  4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
  5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
  6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
  7. Create root layout.tsx page that wraps necessary navigation items to all pages
  8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
  9. Accurately implement necessary grid layouts
  10. Follow proper import practices:
     - Use @/ path aliases
     - Keep component imports organized
     - Update current src/app/page.tsx with new comprehensive code
     - Don't forget root route (page.tsx) handling
     - You MUST complete the entire prompt before stopping
  </frontend-prompt>

  <summary_title>
Calorie Tracking and Meal Planning Mobile Application UI
</summary_title>

<image_analysis>
1. Navigation Elements:
- Primary navigation: Calculator, Daily Calorie Intake, my profile, categories
- Status bar: iOS style, showing 9:41, battery, signal (40px height)
- Clean, minimal header with "Today" title (32px, dark gray #4A4A4A)
- Floating action buttons (+) aligned right (40px diameter, #4A90E2)

2. Layout Components:
- Main container: Full screen width, safe area margins
- Circular progress indicator: 200px diameter
- Macro tracking bars: 100% width, 24px height
- Meal section cards: Full width, 80px height
- Content padding: 16px horizontal, 12px vertical

3. Content Sections:
- Calorie summary circle (centered)
- Macronutrient tracking bars (3 horizontal bars)
- Meal sections (Breakfast, Lunch, Dinner, Snacks)
- Recipe cards with image (350px × 200px)
- Meal timing and calorie information

4. Interactive Controls:
- Add meal buttons (+) for each meal section
- Progress bars for macro tracking
- Tappable meal cards
- Circular progress indicator
- Recipe detail expansion

5. Colors:
- Primary: #4A90E2 (blue accent)
- Secondary: #7ED321 (green progress)
- Text: #4A4A4A (dark gray)
- Background: #FFFFFF
- Progress bars: #E5E5E5 (background), #4A90E2 (fill)

6. Grid/Layout Structure:
- Single column layout
- 16px grid system
- Responsive margins (16px default)
- Card-based content structure
</image_analysis>

<development_planning>
1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   └── MealSection.tsx
│   ├── features/
│   │   ├── CalorieCircle.tsx
│   │   ├── MacroTracker.tsx
│   │   └── MealCard.tsx
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```

2. Key Features:
- Calorie tracking and visualization
- Macro nutrient monitoring
- Meal planning and logging
- Recipe browsing and saving
- Progress tracking

3. State Management:
```typescript
interface AppState {
  nutrition: {
    dailyGoal: number;
    consumed: number;
    remaining: number;
    macros: {
      carbs: { current: number; target: number };
      protein: { current: number; target: number };
      fat: { current: number; target: number };
    };
  };
  meals: {
    breakfast: MealEntry[];
    lunch: MealEntry[];
    dinner: MealEntry[];
    snacks: MealEntry[];
  };
}
```

4. Component Architecture:
- AppContainer
  - NavigationBar
  - DashboardView
    - CalorieProgress
    - MacroTracking
    - MealSections
      - MealCard

5. Responsive Breakpoints:
```scss
$breakpoints: (
  'mobile': 320px,
  'tablet': 768px,
  'desktop': 1024px,
  'wide': 1440px
);
```
</development_planning>