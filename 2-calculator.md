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
- Grid/Alignment: Single column layout with centered content
- Responsive Behavior: Cards maintain full width with padding adjustments

3. UI Components (Page-Specific):
- Content Cards: White containers with rounded corners
- Interactive Elements: Gender selection buttons, unit toggles (cm/ft/in, kg/lb)
- Data Display Elements: Numeric input fields with unit labels
- Status Indicators: Numbered steps (1-5)
- Media Components: Gender icons, activity level illustrations

4. Interactive Patterns:
- Content Interactions: Button selection, numeric input, unit toggle
- State Changes: Selected/unselected states for buttons and toggles
- Dynamic Content: Unit conversion between metric/imperial
- Mobile Interactions: Touch-friendly button sizes and spacing

</image_analysis>

<development_planning>
1. Component Structure:
- QuestionCard component with props for number, title, and content
- InputField component for numeric data with unit toggle
- SelectionButton component for gender and activity level
- IconButton component for activity level options
- UnitToggle component for measurement systems

2. Content Layout:
- Flexbox container for vertical stacking
- Consistent padding system using CSS variables
- Responsive card width with max-width constraint
- Grid system for activity level options

3. Integration Points:
- Theme variables for colors and typography
- Shared icon component library
- Form validation system
- Data collection and storage strategy

4. Performance Considerations:
- Lazy loading of activity icons
- Debounced input handling for unit conversion
- Minimal state updates for smooth interaction
- Progressive form validation
</development_planning>