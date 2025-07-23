# Roadside Street Furniture Design QRH

A comprehensive web catalog for Highway Department standard street furniture drawings and specifications.

## Overview

This web application serves as a digital catalog for roadside street furniture, helping engineers and designers quickly find the appropriate standard drawings and specifications for their projects. The interface provides answers to key questions:

- **What is it?** - Detailed descriptions and specifications
- **When should use it?** - Applications and suitable conditions  
- **How to install/construct it?** - Step-by-step installation guides
- **Which one to use?** - Variants and selection criteria

## Features

### Visual Catalog Interface
- **Category-based browsing** - Organized by furniture type (Kerbs, Barriers, Railings, etc.)
- **Card-based layout** - Visual cards showing furniture items with images
- **Search functionality** - Search across all items and drawings
- **Responsive design** - Works on desktop, tablet, and mobile

### Detailed Information Panels
- **Overview tab** - Specifications, descriptions, and technical images
- **Usage tab** - Applications and suitable conditions
- **Installation tab** - Step-by-step guides, required tools, and materials
- **Variants tab** - Different versions and when to use each

### Categories Included
- **Kerbs & Edges** - K1-K14, E1, E3 series
- **Crash Barriers** - CB1, CB2 series
- **Railings & Fencing** - R1, R2 series  
- **Traffic Signs** - S1, S2 series
- **Signal Equipment** - SG1 series
- **Traffic Bollards** - B1, B2 series
- **Street Lighting** - L1 series
- **Drainage** - D1 series

## File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── questions.js        # Furniture database and data functions
├── quiz.js            # Main application logic and UI controls
├── assets/            # Images and resources (to be populated)
└── README.md          # This documentation
```

## Adding New Furniture Items

To add new street furniture items to the catalog:

1. **Open `questions.js`**
2. **Find the appropriate category** in the `furnitureDatabase` object
3. **Add a new item** following this structure:

```javascript
{
    id: "unique-id",
    name: "Display Name",
    category: "category-name",
    description: "Brief description",
    drawing: "Drawing Reference",
    manual: "Manual Reference",
    overview: {
        description: "Detailed description",
        specifications: ["Spec 1", "Spec 2"],
        image: "assets/image-path.png"
    },
    usage: {
        applications: ["Use 1", "Use 2"],
        conditions: ["Condition 1", "Condition 2"]
    },
    installation: {
        steps: ["Step 1", "Step 2"],
        drawings: ["Drawing 1", "Drawing 2"],
        tools: ["Tool 1", "Tool 2"],
        materials: ["Material 1", "Material 2"]
    },
    variants: [
        {
            name: "Variant Name",
            use: "When to use",
            drawing: "Drawing Ref"
        }
    ]
}
```

## Adding Images

1. **Place images** in the `assets/` folder
2. **Use consistent naming**: `{item-id}-profile.png` for overview images
3. **Recommended sizes**: 
   - Card images: 320x200px
   - Detail images: 600x400px
4. **Format**: PNG or JPG
5. **Fallback**: SVG placeholders are generated automatically if images are missing

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Mobile Responsiveness

The interface automatically adapts to different screen sizes:
- **Desktop**: Full sidebar + main content
- **Tablet**: Collapsible sidebar  
- **Mobile**: Stacked layout with full-width detail panels

## Usage Instructions

### For End Users
1. **Browse categories** using the left sidebar
2. **Click on furniture cards** to view details
3. **Use search** to find specific items or drawings
4. **Switch between tabs** in detail panel for different information types
5. **Reference drawing numbers** for official documentation

### For Administrators
1. **Update database** in `questions.js` for new items
2. **Add images** to `assets/` folder
3. **Test on multiple devices** for responsive design
4. **Validate drawing references** against official standards

## Future Enhancements

Planned features for future versions:
- **PDF integration** - Direct links to drawing PDFs
- **3D models** - Interactive 3D views of furniture
- **Material calculator** - Quantity estimation tools
- **Project export** - Save selections for projects
- **Admin panel** - GUI for adding/editing items
- **Offline support** - PWA capabilities

## Technical Notes

- **No backend required** - Runs entirely in browser
- **Lightweight** - Fast loading and responsive
- **Modular design** - Easy to extend and customize
- **Standards compliant** - Follows web accessibility guidelines
