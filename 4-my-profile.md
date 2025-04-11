<summary_title>
Health Profile Data Collection Form
</summary_title>

<image_analysis>
1. Content Structure:
- Main Content Elements: 5 sequential question cards with numbered indicators
- Content Grouping: Individual cards for each data collection point
- Visual Hierarchy: Clear numbered progression (1-5), consistent heading styles
- Content Types: Text, icons, input fields, toggle buttons, selection cards
- Text Elements: Question headings, unit labels (cm, kg, years), activity level options

2. Layout Structure:
- Content Distribution: Vertical stack of cards with consistent spacing
- Spacing Patterns: Equal padding within cards, consistent margins between cards
- Container Structure: Rounded rectangle cards with white background
- Grid/Alignment: 1-2 column layout depending on question type
- Responsive Behavior: Cards maintain full width with potential stack on mobile

3. UI Components (Page-Specific):
- Content Cards: White containers with rounded corners
- Interactive Elements: Gender selection buttons, numeric inputs, unit toggles, activity level selection
- Data Display Elements: Numeric input fields with unit labels
- Status Indicators: Numbered steps (1-5)
- Media Components: Gender icons, activity level illustrations

4. Interactive Patterns:
- Content Interactions: Click/tap selection for gender and activity level
- State Changes: Active/inactive states for unit toggles (cm/ft/in, kg/lb)
- Dynamic Content: Numeric input validation
- Mobile Interactions: Touch-friendly large selection areas

</image_analysis>

<development_planning>
1. Component Structure:
- QuestionCard component with props for number, title, and content type
- InputField component for numeric entries
- UnitToggle component for measurement switches
- SelectionButton component for gender and activity choices
- IconButton component for illustrated selections

2. Content Layout:
- Flexbox container for vertical stacking
- CSS Grid for dual-column layouts where needed
- Responsive breakpoints for mobile adaptation
- Consistent spacing system using CSS variables

3. Integration Points:
- Theme integration for colors (green accents, gray text)
- Typography system for consistent text styling
- Icon system for gender and activity illustrations
- Form validation integration

4. Performance Considerations:
- Lazy loading for activity icons
- Debounced input validation
- Minimal state updates for unit toggles
- Optimized SVG delivery for icons
</development_planning>