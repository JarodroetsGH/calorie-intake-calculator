<summary_title>
Nutrition and Meal Tracking Dashboard with Recipe Suggestions
</summary_title>

<image_analysis>
1. Content Structure:
- Main Content Elements: Calorie tracking circle, macronutrient bars, meal list, recipe cards
- Content Grouping: Daily overview section, macronutrient breakdown, meal-specific sections
- Visual Hierarchy: Prominent calorie circle, secondary macro tracking, tertiary meal listings
- Content Types: Progress indicators, numerical data, icons, food images, text labels
- Text Elements: "Today" header, meal type labels, calorie counts, nutrient measurements

2. Layout Structure:
- Content Distribution: Vertical layout with clear section separation
- Spacing Patterns: Consistent padding between sections, aligned elements
- Container Structure: Card-based containers for meals, rounded corners on elements
- Grid/Alignment: Single column layout with left-aligned content
- Responsive Behavior: Stack-based layout adaptable to different screen sizes

3. UI Components (Page-Specific):
- Content Cards: Meal entry cards with icons and calorie info
- Interactive Elements: "+" buttons for meal additions
- Data Display Elements: Circular progress indicator, horizontal progress bars
- Status Indicators: Progress bars for macronutrients
- Media Components: Meal icons, recipe images

4. Interactive Patterns:
- Content Interactions: Tappable meal cards, add buttons
- State Changes: Button hover/active states
- Dynamic Content: Real-time calorie and nutrient updates
- Mobile Interactions: Touch-friendly buttons and cards

</image_analysis>

<development_planning>
1. Component Structure:
- CalorieTracker component with circular progress
- MacronutrientBar components for each nutrient
- MealCard components with expandable details
- RecipeCard component for suggestions

2. Content Layout:
- Flexbox-based vertical layout
- CSS Grid for macro nutrient sections
- Responsive containers with relative units
- Dynamic height adjustments for content sections

3. Integration Points:
- Theme integration for consistent colors
- Shared icon component library
- Common button and card styles
- Real-time data update handlers

4. Performance Considerations:
- Lazy loading for recipe images
- Memoized calculations for nutrient totals
- Optimized re-renders for progress updates
- Efficient state management for meal tracking
</development_planning>