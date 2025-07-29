# LLM Prompt: Update furnitureDatabase in questions.js

## Task Overview
Update the `furnitureDatabase` object in `questions.js` to reflect accurate information from the HYD drawings and TPDM guidelines. Fill in comprehensive information for each furniture object's usage, composition, installation, and variants sections. Ensure the database structure matches the required format and all information is copied from the provided sources rather than being fabricated.

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
    usage: {
        description: "Detailed technical description of the item and its purpose",
        specifications: [
            "Technical specification 1",
            "Technical specification 2",
            // ... more specifications
        ],
        applications: [
            "Application 1",
            "Application 2",
            // ... more applications
        ],
        conditions: [
            "Condition 1",
            "Condition 2",
            // ... more conditions
        ],
        image: "assets/image-file.png" // if applicable
    },
    composition: {
        description: "Detailed construction description (if different from usage)",
        specifications: [
            "Construction specification 1",
            "Construction specification 2",
            // ... more construction specifications
        ],
        layers: [
            "Construction layer/step 1",
            "Construction layer/step 2",
            // ... more layers/steps
        ],
        materials: [
            "Material 1",
            "Material 2",
            // ... more materials
        ],
        image: "assets/construction-image.png" // if applicable
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

## Key Structure Changes
**IMPORTANT**: The database structure has been updated to eliminate redundancy:

1. **No more `overview` section** - This has been removed to eliminate duplication
2. **Enhanced `usage` section** - Now contains:
   - `description`: Detailed technical description (previously in overview)
   - `specifications`: Technical specifications array (previously in overview)
   - `applications`: Where and how the item is used
   - `conditions`: When and under what circumstances to use
   - `image`: Reference image if applicable

3. **Enhanced `composition` section** - May contain:
   - `description`: Construction-specific description (if different from usage)
   - `specifications`: Construction-specific specifications (if different from usage)
   - `layers`: Construction sequence/layers
   - `materials`: Required materials
   - `image`: Construction diagram if applicable

4. **No duplicate information** - Information should not be repeated between sections

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
Ensure each item follows the updated structure with all fields:
- `usage.description`, `usage.specifications`, `usage.applications` and `usage.conditions`  
- `composition.layers` and `composition.materials` (and optionally `composition.description` and `composition.specifications` if different from usage)
- `installation` details with steps, manuals, tools, materials
- `variants` array with proper sub-structure
- **NO `overview` section** - this has been removed to eliminate duplication

### Step 3: Extract Accurate Information
For each furniture item:
- **DO NOT** fabricate or assume information
- **ONLY** use information directly from the source documents
- Quote specific dimensions, specifications, and requirements
- Reference exact drawing codes and manual sections
- Include proper material specifications and construction details
- **Place general descriptions, dimensions and specifications in the `usage` section**
- **Use `composition` for material information of the item**

### Step 4: Fill Missing Information
Current gaps to address:
- Items lacking complete `usage.description` and `usage.specifications` arrays
- Missing `composition.layers` and `composition.materials` details
- Incomplete `installation.steps` with proper sequencing
- Missing `variants` for items that have multiple types
- Some items need proper `drawings` and `manuals` references
- **Ensure no duplication between `usage` and `composition` sections**

### Step 5: Cross-Reference and Validate
- Verify drawing codes exist in the downloads folders
- Ensure manual references point to actual TPDM sections
- Check that specifications match between related items
- Validate that variants are properly differentiated
- **Ensure no information is duplicated between `usage` and `composition` sections**
- **Verify that `usage` contains the primary technical description and specifications**

## Quality Requirements

### Accuracy
- All technical specifications must come from source documents
- Dimensions, materials, and standards must be exact
- Drawing and manual references must be correct and accessible

### Completeness
- Every item should have filled usage and composition sections
- Usage section should contain comprehensive description and specifications
- Installation steps should be comprehensive and sequential
- Variants should cover all major types mentioned in drawings

### Consistency
- Similar items should have consistent formatting and detail level
- Terminology should match the source documents
- Cross-references between related items should be accurate
- **No duplication of information between sections**

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
Provide the updated `furnitureDatabase` object as a complete JavaScript object, maintaining the existing structure but with enhanced and accurate information from the source documents. **Ensure the structure follows the updated format without `overview` sections and with comprehensive `usage` sections that include descriptions and specifications.**

## Important Notes
- **DO NOT** make up information if it's not in the source documents
- **DO** indicate when specific information is not found in the sources
- **DO** maintain backward compatibility with existing item IDs
- **DO** ensure all drawing and manual references are valid and accessible
- **DO** use consistent terminology and formatting throughout
- **DO NOT** create `overview` sections - use the `usage` section for detailed descriptions and specifications
- **DO** avoid duplicating information between `usage` and `composition` sections
- **DO** place primary technical information in the `usage` section
- **DO** use `composition` section specifically for construction sequence, layers, and materials

If certain information cannot be found in the available sources, clearly indicate this rather than fabricating details.

## Updated Structure Summary

**Previous Structure (DEPRECATED):**
```
overview: { description, specifications, image }
usage: { applications, conditions }
composition: { layers, materials }
```

**New Structure (CURRENT):**
```
usage: { description, specifications, applications, conditions, image }
composition: { description*, specifications*, layers, materials, image* }
```

*Optional fields in composition section, only include if construction-specific information differs from usage information.
