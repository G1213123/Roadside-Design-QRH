# LLM Prompt: Update furnitureDatabase in questions.js

## Task Overview
Update the `furnitureDatabase` object in `questions.js` to reflect accurate information from the HYD drawings and TPDM guidelines. Fill in comprehensive information for each furniture object's overview, usage, composition, and variants. Ensure the database structure matches the required format and all information is copied from the provided sources rather than being fabricated.

## Required Database Structure
Each furniture item should have the following structure:
```javascript
{
    id: "unique_id",
    name: "Descriptive Name",
    category: "category_name",
    description: "Brief description",
    drawings: ["drawing_codes"], // HYD drawing references
    manuals: ["manual_references"], // TPDM or other manual references
    overview: {
        description: "Detailed technical description",
        specifications: [
            "Technical specification 1",
            "Technical specification 2",
            // ... more specifications
        ],
        image: "assets/image-file.png" // if applicable
    },
    usage: {
        applications: [
            "Application 1",
            "Application 2",
            // ... more applications
        ],
        conditions: [
            "Condition 1",
            "Condition 2",
            // ... more conditions
        ]
    },
    composition: {
        layers: [
            "Installation step 1",
            "Installation step 2",
            // ... more steps
        ],
        materials: [
            "Material 1",
            "Material 2",
            // ... more materials
        ]
    },
    installation: {
        steps: [
            "Step 1",
            "Step 2",
            // ... more steps
        ],
        manuals: ["manual_references"],
        tools: ["tool1", "tool2"],
        materials: ["material1", "material2"]
    },
    variants: [
        {
            name: "Variant Name",
            use: "Description of when to use this variant",
            manuals: ["specific_manual_references"]
        }
        // ... more variants
    ]
}
```

## Source Information Available

### HYD Standard Drawings
Located in: `downloads/section_1/`, `downloads/section_2/`, etc.
- **Section 1**: Roads, pavements, kerbs, joints
- **Section 2**: Traffic control, barriers, railings, signs, signals, bollards
- **Section 3-6**: Other infrastructure elements

Key drawing files include:
- H1101E-H1136: Road construction and pavement details
- H2101D-H2308: Traffic control infrastructure
- H4101-H6122D: Various infrastructure elements

### TPDM Documents
Located in: `TPDM 2024_07/TPDM/`
- Volume 1: Transport Planning
- Volume 2: Highway Design Characteristics  
- Volume 3: Traffic Signs and Road Markings
- Volume 4: Road Traffic Signals
- Volume 5: Accident Investigation and Prevention
- Volume 6: Traffic and Environmental Management
- Volume 7: Parking
- Volume 8: Surveys
- Volume 9: Public Transport
- Volume 10: Surveillance
- Volume 11: Tunnels

### Crawled Data
Located in: `crawled-data/hyd-drawings.json`
Contains metadata about all HYD drawings including:
- Drawing codes
- Descriptions
- Categories
- Section assignments
- PDF availability status

## Categories to Update

### Current Categories in Database:
1. **road** - Road geometry, alignments, profiles, widths
2. **pavement** - Bituminous, concrete, cycle tracks, footpaths
3. **kerbs** - K1-K14, E1-E3, granite kerbs
4. **barriers** - Concrete profile barriers, steel barriers, parapets
5. **railing & gate** - Type 2-4 railings, emergency gates, chain link
6. **signs** - Single/multi-post supports, directional signs, street names
7. **signals** - Traffic signal poles, drawpits, controllers, loop detectors
8. **bollards** - Various types including frangible, retro-reflective
9. **lighting** - Street lighting columns
10. **drainage** - Gully grating and drainage systems

## Instructions for LLM

### Step 1: Read Source Documents
Before updating any database entries, thoroughly read:
1. Relevant HYD drawing PDFs from the downloads folders
2. Relevant TPDM sections for technical standards and guidelines
3. The hyd-drawings.json metadata file for complete drawing information

### Step 2: Verify Database Structure
Ensure each item follows the required structure with all fields:
- `overview.description` and `overview.specifications`
- `usage.applications` and `usage.conditions`  
- `composition.layers` and `composition.materials`
- `installation` details with steps, manuals, tools, materials
- `variants` array with proper sub-structure

### Step 3: Extract Accurate Information
For each furniture item:
- **DO NOT** fabricate or assume information
- **ONLY** use information directly from the source documents
- Quote specific dimensions, specifications, and requirements
- Reference exact drawing codes and manual sections
- Include proper material specifications and construction details

### Step 4: Fill Missing Information
Current gaps to address:
- Many items lack complete `overview.specifications` arrays
- Missing `composition.layers` and `composition.materials` details
- Incomplete `installation.steps` with proper sequencing
- Missing `variants` for items that have multiple types
- Some items need proper `drawings` and `manuals` references

### Step 5: Cross-Reference and Validate
- Verify drawing codes exist in the downloads folders
- Ensure manual references point to actual TPDM sections
- Check that specifications match between related items
- Validate that variants are properly differentiated

## Quality Requirements

### Accuracy
- All technical specifications must come from source documents
- Dimensions, materials, and standards must be exact
- Drawing and manual references must be correct and accessible

### Completeness
- Every item should have filled overview, usage, composition sections
- Installation steps should be comprehensive and sequential
- Variants should cover all major types mentioned in drawings

### Consistency
- Similar items should have consistent formatting and detail level
- Terminology should match the source documents
- Cross-references between related items should be accurate

## Specific Focus Areas

### High Priority Items
Items that need significant updates:
- Pavement construction details (concrete, bituminous)
- Barrier systems (concrete profile, steel beam)
- Kerb types and applications
- Traffic sign support systems
- Signal infrastructure (poles, drawpits, controllers)

### Technical Details to Include
- Exact dimensions and tolerances
- Material grades and specifications  
- Construction layer sequences
- Installation procedures and requirements
- Maintenance considerations
- Safety and regulatory compliance

## Output Format
Provide the updated `furnitureDatabase` object as a complete JavaScript object, maintaining the existing structure but with enhanced and accurate information from the source documents.

## Important Notes
- **DO NOT** make up information if it's not in the source documents
- **DO** indicate when specific information is not found in the sources
- **DO** maintain backward compatibility with existing item IDs
- **DO** ensure all drawing and manual references are valid and accessible
- **DO** use consistent terminology and formatting throughout

If certain information cannot be found in the available sources, clearly indicate this rather than fabricating details.
