// Import HYD Standard Drawings Database
// This would be loaded from hyd-drawings-database.js in a real implementation
const furnitureDatabase = {
    kerbs: [
        {
            id: "k1",
            name: "K1 - Standard Kerb",
            category: "kerbs",
            description: "Standard concrete kerb for carriageway to footpath transitions",
            drawing: "K1",
            manual: "Highway Standard Drawing K1",
            hydDrawings: ["H1118", "H1119"], // Reference to actual HYD drawings
            overview: {
                description: "The K1 standard kerb is a precast concrete kerb unit designed for standard carriageway to footpath transitions.",
                specifications: ["Height: 125mm", "Width: 150mm", "Material: Precast concrete", "Profile: Standard upright"],
                image: "assets/k1-profile.png",
                relatedHydDrawings: getHydDrawingsByCategory('kerbs')
            },
            usage: {
                applications: [
                    "Carriageway to footpath transitions",
                    "Standard urban road edges", 
                    "Car park perimeters",
                    "General kerbing applications"
                ],
                conditions: [
                    "Normal traffic conditions",
                    "Standard drainage requirements",
                    "No heavy vehicle overrun expected"
                ]
            },
            installation: {
                steps: [
                    "Excavate foundation to required depth",
                    "Lay concrete foundation (ST2 mix)",
                    "Position kerb units with 10mm joints",
                    "Backfill and compact behind kerb",
                    "Point joints with mortar"
                ],
                drawings: ["K1", "K1-DET1", "H1118", "H1119"], // Include HYD references
                tools: ["Concrete mixer", "Spirit level", "Rubber mallet"],
                materials: ["ST2 concrete", "Mortar", "Sand"]
            },
            variants: [
                {
                    name: "K1 Standard",
                    use: "General applications",
                    drawing: "K1"
                }
            ]
        },
        {
            id: "k2",
            name: "K2 - Carriageway to Verge Kerb",
            category: "kerbs",
            description: "Kerb for carriageway to grass verge transitions",
            drawing: "K2",
            manual: "Highway Standard Drawing K2"
        },
        {
            id: "k3",
            name: "K3 - Bridge Deck Kerb",
            category: "kerbs",
            description: "Specialized kerb for bridge deck applications",
            drawing: "K3",
            manual: "Highway Standard Drawing K3"
        },
        {
            id: "k5-9",
            name: "K5-K9 - Vehicular Drop Kerbs",
            category: "kerbs",
            description: "Drop kerb series for vehicular access",
            drawing: "K5-K9",
            manual: "Highway Standard Drawings K5 to K9"
        },
        {
            id: "k10-14",
            name: "K10-K14 - Pedestrian Drop Kerbs",
            category: "kerbs",
            description: "Drop kerb series for pedestrian crossings",
            drawing: "K10-K14",
            manual: "Highway Standard Drawings K10 to K14"
        },
        {
            id: "e1",
            name: "E1 - Cycle Track Edge",
            category: "kerbs",
            description: "Edge detail for cycle track to footpath",
            drawing: "E1",
            manual: "Highway Standard Drawing E1"
        },
        {
            id: "e3",
            name: "E3 - Boundary Kerb",
            category: "kerbs",
            description: "Kerb for footpath to boundary/planter",
            drawing: "E3",
            manual: "Highway Standard Drawing E3",
            overview: {
                description: "Edge detail for separating footpaths from planters or property boundaries.",
                specifications: ["Height: 75mm", "Width: 100mm", "Material: Precast concrete", "Profile: Low profile"],
                image: "assets/e3-profile.png"
            },
            usage: {
                applications: [
                    "Footpath to planter separation",
                    "Property boundary definition",
                    "Landscape edge control",
                    "Low-level delineation"
                ],
                conditions: [
                    "Pedestrian areas only",
                    "No vehicle access",
                    "Decorative applications"
                ]
            },
            installation: {
                steps: [
                    "Mark edge alignment",
                    "Excavate shallow foundation",
                    "Level and compact base",
                    "Install edge units",
                    "Backfill both sides"
                ],
                drawings: ["E3", "E3-SECTION"],
                tools: ["String line", "Spade", "Level", "Compactor"],
                materials: ["Concrete edge units", "Sand", "Type 1 aggregate"]
            },
            variants: [
                {
                    name: "E3 Standard",
                    use: "General boundary edging",
                    drawing: "E3"
                }
            ]
        }
    ],
    barriers: [
        {
            id: "cb1",
            name: "CB1 - Concrete Crash Barrier",
            category: "barriers",
            description: "Single-sided concrete crash barrier",
            drawing: "CB1",
            manual: "Highway Standard Drawing CB1",
            overview: {
                description: "Single-sided concrete crash barrier for median and roadside protection.",
                specifications: ["Height: 800mm", "Length: 4000mm segments", "Material: Reinforced concrete", "Profile: New Jersey"],
                image: "assets/cb1-profile.png"
            },
            usage: {
                applications: [
                    "Central reservation barriers",
                    "Roadside protection",
                    "Bridge approach protection",
                    "Work zone protection"
                ],
                conditions: [
                    "High-speed roads (>70 km/h)",
                    "Areas requiring vehicle restraint",
                    "Protection of fixed objects"
                ]
            },
            installation: {
                steps: [
                    "Survey and mark barrier alignment",
                    "Excavate foundation",
                    "Install reinforcement and formwork",
                    "Pour concrete foundation",
                    "Place barrier segments",
                    "Connect segments with dowel bars"
                ],
                drawings: ["CB1", "CB1-DET1", "CB1-JOINT"],
                tools: ["Crane", "Surveying equipment", "Concrete pump"],
                materials: ["Reinforced concrete segments", "Dowel bars", "Sealant"]
            },
            variants: [
                {
                    name: "CB1 Standard",
                    use: "General roadside protection",
                    drawing: "CB1"
                },
                {
                    name: "CB1-T",
                    use: "Terminal end treatment",
                    drawing: "CB1-T"
                }
            ]
        },
        {
            id: "cb2",
            name: "CB2 - Steel Crash Barrier",
            category: "barriers",
            description: "Corrugated steel crash barrier system",
            drawing: "CB2",
            manual: "Highway Standard Drawing CB2",
            overview: {
                description: "Corrugated steel beam crash barrier providing vehicle restraint with controlled deformation.",
                specifications: ["Height: 750mm", "Length: 4320mm beams", "Material: Galvanized steel", "Profile: W-beam"],
                image: "assets/cb2-profile.png"
            },
            usage: {
                applications: [
                    "Rural road protection",
                    "Temporary barriers",
                    "Medium-risk locations",
                    "Cost-effective solutions"
                ],
                conditions: [
                    "Medium to high-speed roads",
                    "Areas requiring deflection",
                    "Temporary installations"
                ]
            },
            installation: {
                steps: [
                    "Install support posts at 4m centers",
                    "Mount beam sections with spacer blocks",
                    "Bolt beams together with splice connections",
                    "Install end treatments",
                    "Apply reflective markings"
                ],
                drawings: ["CB2", "CB2-POST", "CB2-SPLICE"],
                tools: ["Post driver", "Impact wrench", "Level"],
                materials: ["Steel beams", "Posts", "Bolts", "Spacer blocks"]
            },
            variants: [
                {
                    name: "CB2 Standard",
                    use: "General roadside protection",
                    drawing: "CB2"
                },
                {
                    name: "CB2-D",
                    use: "Double-sided barrier",
                    drawing: "CB2-D"
                }
            ]
        }
    ],
    railings: [
        {
            id: "r1",
            name: "R1 - Pedestrian Railing",
            category: "railings",
            description: "Standard pedestrian safety railing",
            drawing: "R1",
            manual: "Highway Standard Drawing R1",
            overview: {
                description: "Standard pedestrian railing for footway protection and guidance.",
                specifications: ["Height: 1100mm", "Panel length: 2000mm", "Material: Galvanized steel", "Infill: Vertical bars"],
                image: "assets/r1-profile.png"
            },
            usage: {
                applications: [
                    "Footway edge protection",
                    "Pedestrian guidance",
                    "School zone safety",
                    "Bridge walkways"
                ],
                conditions: [
                    "Adjacent to traffic",
                    "Height differences >600mm",
                    "Pedestrian safety zones"
                ]
            },
            installation: {
                steps: [
                    "Mark post positions at 2m centers",
                    "Drill holes for post foundations",
                    "Install posts with concrete",
                    "Mount railing panels",
                    "Apply protective coatings"
                ],
                drawings: ["R1", "R1-POST", "R1-FIXING"],
                tools: ["Core drill", "Level", "Torque wrench"],
                materials: ["Steel posts", "Railing panels", "Concrete", "Bolts"]
            },
            variants: [
                {
                    name: "R1 Standard",
                    use: "General pedestrian protection",
                    drawing: "R1"
                },
                {
                    name: "R1-DDA",
                    use: "DDA compliant version",
                    drawing: "R1-DDA"
                }
            ]
        },
        {
            id: "r2",
            name: "R2 - Bridge Parapet",
            category: "railings",
            description: "Bridge parapet railing system",
            drawing: "R2",
            manual: "Highway Standard Drawing R2",
            overview: {
                description: "Heavy-duty parapet railing for bridge structures providing vehicle and pedestrian restraint.",
                specifications: ["Height: 1400mm", "Material: Reinforced concrete/steel", "Load rating: N2-W4", "Impact tested"],
                image: "assets/r2-profile.png"
            },
            usage: {
                applications: [
                    "Bridge parapets",
                    "High-level walkways",
                    "Vehicle restraint on bridges",
                    "Combined pedestrian/vehicle barriers"
                ],
                conditions: [
                    "Bridge structures",
                    "High containment requirements",
                    "Dual pedestrian/vehicle use"
                ]
            },
            installation: {
                steps: [
                    "Prepare bridge deck substrate",
                    "Install anchor bolts/embedments",
                    "Position parapet sections",
                    "Connect sections with joints",
                    "Apply waterproofing and finishes"
                ],
                drawings: ["R2", "R2-ANCHOR", "R2-JOINT", "R2-DETAIL"],
                tools: ["Crane", "Drilling equipment", "Torque tools"],
                materials: ["Parapet sections", "Anchor bolts", "Sealants", "Joint materials"]
            },
            variants: [
                {
                    name: "R2 Standard",
                    use: "Standard bridge parapet",
                    drawing: "R2"
                },
                {
                    name: "R2-PED",
                    use: "Pedestrian-only bridges",
                    drawing: "R2-PED"
                }
            ]
        }
    ],
    signs: [
        {
            id: "s1",
            name: "S1 - Warning Signs",
            category: "signs",
            description: "Standard warning sign installations",
            drawing: "S1",
            manual: "Traffic Signs Manual Chapter 4"
        },
        {
            id: "s2",
            name: "S2 - Regulatory Signs",
            category: "signs",
            description: "Regulatory and prohibition signs",
            drawing: "S2",
            manual: "Traffic Signs Manual Chapter 3"
        }
    ],
    signals: [
        {
            id: "sg1",
            name: "SG1 - Traffic Light Poles",
            category: "signals",
            description: "Standard traffic signal pole installation",
            drawing: "SG1",
            manual: "Traffic Signal Installation Guide"
        }
    ],
    bollards: [
        {
            id: "b1",
            name: "B1 - Flexible Bollards",
            category: "bollards",
            description: "Flexible delineator bollards",
            drawing: "B1",
            manual: "Highway Standard Drawing B1"
        },
        {
            id: "b2",
            name: "B2 - Rigid Bollards",
            category: "bollards",
            description: "Rigid concrete bollards",
            drawing: "B2",
            manual: "Highway Standard Drawing B2"
        }
    ],
    lighting: [
        {
            id: "l1",
            name: "L1 - Street Lighting Columns",
            category: "lighting",
            description: "Standard street lighting installations",
            drawing: "L1",
            manual: "Street Lighting Design Guide"
        }
    ],
    drainage: [
        {
            id: "d1",
            name: "D1 - Gully Grating",
            category: "drainage",
            description: "Standard road drainage gullies",
            drawing: "D1",
            manual: "Drainage Design Manual"
        }
    ]
};

// Helper function to get all furniture items
function getAllFurniture() {
    let allItems = [];
    Object.keys(furnitureDatabase).forEach(category => {
        allItems = allItems.concat(furnitureDatabase[category]);
    });
    return allItems;
}

// Helper function to get furniture by category
function getFurnitureByCategory(category) {
    if (category === 'all') {
        return getAllFurniture();
    }
    return furnitureDatabase[category] || [];
}

// Helper function to search HYD drawings by category
function getHydDrawingsByCategory(category) {
    // This would use the actual HYD database in production
    // For now, return sample data based on category
    const sampleHydDrawings = {
        'kerbs': [
            { code: 'H1118', description: 'Precast Concrete Kerbs (Sheet 1 of 2)', section: 1 },
            { code: 'H1119', description: 'Precast Concrete Kerbs (Sheet 2 of 2)', section: 1 },
            { code: 'H1113C', description: 'Typical Details of Run-in (Sheet 1 of 2)', section: 1 },
            { code: 'H1114B', description: 'Typical Details of Run-in (Sheet 2 of 2)', section: 1 },
            { code: 'H1117B', description: 'Ramping of Kerb and Footway at Designated Pedestrian Crossings', section: 1 },
            { code: 'H1134', description: 'Precast Concrete Kerbs For Pedestrian Crossings', section: 1 }
        ],
        'barriers': [
            { code: 'H2101D', description: 'Typical Details of Concrete Profile Barrier - Carriageways at Same Level', section: 2 },
            { code: 'H2104/1C', description: 'Standard Precast Concrete Profile Barrier – Single Faced', section: 2 },
            { code: 'H2112C', description: 'Beam Barrier - Corrugated Beam', section: 2 },
            { code: 'H2190A', description: 'Thrie-beam - Beam Rail', section: 2 }
        ],
        'railings': [
            { code: 'H2130H', description: 'Type 2 Railings - For Control Purpose', section: 2 },
            { code: 'H2135C', description: 'Tubular Amenity Railings', section: 2 },
            { code: 'H2282A', description: 'Type 4 Railings - For Control Purpose', section: 2 }
        ],
        'bollards': [
            { code: 'H2179C', description: 'G. I. Bollard', section: 2 },
            { code: 'H2140A', description: 'Concrete Plinth for Traffic Bollard (Sheet 1 of 2)', section: 2 },
            { code: 'H2189/1', description: 'Type 1 and Type 2 Frangible Bollard for Use on Cycle Track', section: 2 }
        ],
        'signs': [
            { code: 'H2147F', description: 'Single Post Traffic Sign Support (Sheet 1 of 2)', section: 2 },
            { code: 'H2206D', description: 'Street Name Plate with Building Numbers', section: 2 },
            { code: 'H2212A', description: 'Roadside Directional Signs (Sheet 1 of 14)', section: 2 }
        ],
        'signals': [
            { code: 'H2146C', description: 'Foundation and Mini-drawpit for Traffic Signal Pole', section: 2 },
            { code: 'H2164C', description: 'Details of Plinth for Traffic Controller (Type Delta 4)', section: 2 }
        ]
    };
    
    return sampleHydDrawings[category] || [];
}

// Helper function to search furniture
function searchFurniture(query) {
    const allItems = getAllFurniture();
    return allItems.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.drawing.toLowerCase().includes(query.toLowerCase())
    );
}