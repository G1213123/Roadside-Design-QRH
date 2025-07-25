// Import HYD Standard Drawings Database
// This would be loaded from hyd-drawings-database.js in a real implementation
const furnitureDatabase = {
    "road": [
        {
            id: "rg1",
            name: "Alignments",
            category: "road",
            description: "Horizontal alignment design standards including design speeds, curvature, and sight distances",
            manual: "TPDM Volume 2 Chapter 3.3",
            overview: {
                description: "Standards for horizontal road alignment including design speed selection, minimum curve radii, superelevation, and sight distance requirements. Covers general principles for different road types and locations.",
                specifications: [
                    "Design speeds: 50-100 km/h based on road type and access control",
                    "Minimum radius categories: R1-R8 (44m-2800m based on design speed)",
                    "Superelevation: 2.5-10% based on curve radius and speed",
                    "Sight distances: 50-295m (desirable minimum based on design speed)",
                    "Rural vs urban design considerations",
                    "Single vs dual carriageway alignment principles"
                ]
            },
            usage: {
                applications: [
                    "Horizontal curve design",
                    "Design speed determination", 
                    "Sight distance verification",
                    "Route alignment planning",
                    "Junction approach design",
                    "Safety assessment of existing curves"
                ],
                conditions: [
                    "New road construction",
                    "Road improvement projects", 
                    "Geometric upgrades",
                    "Safety enhancement schemes",
                    "Areas with topographical constraints"
                ]
            },
            installation: {
                steps: [
                    "Determine appropriate design speed for road type",
                    "Calculate minimum horizontal curve radii",
                    "Check sight distance requirements", 
                    "Design appropriate superelevation",
                    "Verify junction and access visibility",
                    "Consider single vs dual carriageway requirements"
                ],
                manuals: ["TPDM Volume 2 Chapter 3.3", "Highway Transition Curve Tables"],
                tools: ["Design speed tables", "Curve radius calculations", "Sight distance measurements", "Superelevation design charts"],
                materials: ["Standard road construction materials", "Appropriate surfacing for skid resistance"]
            }
        },
        {
            id: "rg2",
            name: "Profile",
            category: "road", 
            description: "Vertical profile design including gradients, vertical curves, and climbing lanes",
            manual: "TPDM Volume 2 Chapter 3.3",
            overview: {
                description: "Standards for vertical road profile design including maximum gradients, vertical curve design, and climbing lane provision. Covers both crest and sag curve requirements with minimum K-values for different design speeds.",
                specifications: [
                    "Maximum gradients: 4% desirable, 8% absolute for trunk roads",
                    "Minimum drainage gradient: 0.67% for effective drainage",
                    "Crest curve K-values: 6.5-182 based on design speed",
                    "Sag curve K-values: 9-37 based on design speed", 
                    "Climbing lane width: 10m total (3.2m + 3.4m + 3.4m)",
                    "Dual carriageway climbing lanes: based on traffic flow vs gradient"
                ]
            },
            usage: {
                applications: [
                    "Vertical alignment design",
                    "Gradient optimization",
                    "Climbing lane justification",
                    "Sight distance provision",
                    "Drainage design",
                    "Comfort and safety enhancement"
                ],
                conditions: [
                    "Hilly terrain requiring gradients",
                    "Areas needing sight distance",
                    "Heavy traffic routes with gradients >3%",
                    "Single carriageway congestion points",
                    "Dual carriageways with high traffic flows"
                ]
            }
        },
        {
            id: "rg3",
            name: "Crossfall",
            category: "road",
            description: "Cross-sectional slope design for surface drainage and vehicle stability",
            manual: "TPDM Volume 2 Chapter 3.4",
            overview: {
                description: "Standards for crossfall design including normal crossfall, superelevation transitions, and drainage requirements. Covers crossfall requirements for different road types and junction treatments.",
                specifications: [
                    "Normal crossfall: 2.5% from crown to edge",
                    "Footway crossfall: 2-3.3% for drainage",
                    "Adverse camber elimination on curves >R7",
                    "Junction crossfall: minor road graded to major road channels",
                    "Urban superelevation: limited to 4-5% maximum"
                ]
            },
            usage: {
                applications: [
                    "Surface water drainage design",
                    "Vehicle stability on curves",
                    "Junction crossfall transitions",
                    "Footway and verge drainage",
                    "Superelevation applications"
                ],
                conditions: [
                    "All paved road surfaces",
                    "Curved sections requiring superelevation",
                    "Junction and access points",
                    "Urban areas with frequent access",
                    "Areas requiring effective drainage"
                ]
            }
        },
        {
            id: "rg4",
            name: "Transition and Superelevation",
            category: "road",
            description: "Banking design for curved sections and transitions between different crossfall",
            manual: "TPDM Volume 2 Chapter 3.3",
            overview: {
                description: "Standards for superelevation (banking) design on horizontal curves and transitional design between normal crossfall and superelevated sections. Includes calculation methods, maximum rates, transition lengths, and special considerations for urban roads and constrained locations.",
                specifications: [
                    "Superelevation formula: S = V²/(2.82R) for radii R7-R3",
                    "Transition length formula: L = V³/(46.7qR)",
                    "Maximum superelevation: 10% for radii below R3",
                    "Desirable maximum: 7% for design speeds ≥80 km/h",
                    "Urban roads maximum: 4-5% for at-grade junctions",
                    "Edge profile grade variation: 1% maximum (2% in difficult areas)",
                    "Minimum drainage gradient: 0.67% through transitions",
                    "Rate of centripetal acceleration: 0.3 m/sec³ maximum (0.6+ in constraints)"
                ]
            },
            usage: {
                applications: [
                    "Horizontal curve banking design",
                    "Transition curve design (clothoid spirals)",
                    "Vehicle stability enhancement",
                    "High-speed curve safety",
                    "Urban curve design",
                    "Transition length calculation",
                    "Heavy vehicle route planning",
                    "Skid resistance optimization",
                    "Elevated structure curve design",
                    "Drainage design through transitions"
                ],
                conditions: [
                    "Horizontal curves between R7-R3 radii",
                    "Tight curves below R3 radius",
                    "High-speed roads (≥80 km/h)",
                    "Urban roads with at-grade access",
                    "Routes with heavy goods vehicles",
                    "Constrained locations requiring shorter transitions",
                    "Elevated structures with complex geometry",
                    "Areas requiring enhanced safety",
                    "Multi-lane highways with transition challenges"
                ]
            },
            installation: {
                steps: [
                    "Calculate curve radius and design speed",
                    "Apply superelevation formula S = V²/(2.82R)",
                    "Calculate transition length L = V³/(46.7qR)",
                    "Check maximum superelevation limits",
                    "Design clothoid transition curves (or circular where suitable)",
                    "Ensure edge profile grade variation ≤1% (≤2% if constrained)",
                    "Maintain minimum 0.67% drainage gradient",
                    "Consider urban/rural location constraints",
                    "Assess heavy vehicle usage patterns",
                    "Specify appropriate skid-resistant surfacing",
                    "Use County Surveyors Society Tables for spiral selection"
                ],
                manuals: ["TPDM Volume 2 Chapter 3.3", "Highway Transition Curve Tables (County Surveyors Society 1963)"],
                tools: ["Superelevation calculation charts", "Transition length tables", "Clothoid spiral tables", "Curve radius measurements", "Design speed analysis"],
                materials: ["High-friction road surfacing", "Standard pavement materials", "Anti-skid surface treatments", "Drainage systems for transitions"]
            },
            variants: [
                {
                    name: "Standard Clothoid Transitions",
                    use: "Normal design conditions with 0.3 m/sec³ acceleration rate",
                    manual: "TPDM Volume 2 Chapter 3.3.4.2, County Surveyors Society Tables"
                },
                {
                    name: "Constrained Location Transitions",
                    use: "Dense urban areas, increased acceleration rate 0.6+ m/sec³",
                    manual: "TPDM Volume 2 Chapter 3.3.4.5"
                },
                {
                    name: "Elevated Structure Curves",
                    use: "Complex geometry areas, circular curves replacing clothoids",
                    manual: "TPDM Volume 2 Chapter 3.3.4.3"
                },
                {
                    name: "Rural High-Speed Curves",
                    use: "Design speeds ≥80 km/h with 7% maximum superelevation",
                    manual: "TPDM Volume 2 Chapter 3.3.3.3"
                },
                {
                    name: "Urban At-Grade Roads",
                    use: "Built-up areas with junctions, 4-5% maximum superelevation",
                    manual: "TPDM Volume 2 Chapter 3.3.3.4"
                },
                {
                    name: "Multi-Lane Highway Transitions",
                    use: "Wide carriageways requiring >1% edge profile variation",
                    manual: "TPDM Volume 2 Chapter 3.3.4.5"
                },
                {
                    name: "Heavy Vehicle Routes",
                    use: "Areas with stationary/slow heavy goods vehicles, avoid 10%",
                    manual: "TPDM Volume 2 Chapter 3.3.3.3"
                }
            ]
        },
        {
            id: "rg5",
            name: "Road Width",
            category: "road",
            description: "Carriageway width standards for different road types and traffic conditions",
            manual: "TPDM Volume 2 Chapter 3.4",
            overview: {
                description: "Minimum carriageway width requirements for urban and rural roads across all hierarchy levels. Includes widening requirements for curves, parking provisions, and special applications like climbing lanes and service roads.",
                specifications: [
                    "Urban single carriageway: 7.3-13.5m (2-4 lanes), refer to Table 3.4.2.1",
                    "Urban dual carriageway: 6.75-14.6m per direction",
                    "Rural single carriageway: 6-14.5m (2-4 lanes)", 
                    "Rural dual carriageway: 7.3-14.6m per direction",
                    "Service roads: 4.5-7.3m based on vehicle types",
                    "Curve widening: additional 0.3-1.9m for radii <400m, refer to Table 3.4.4.1",
                    "Check road width enough to achieve sight distance, further widening is needed when < R3",
                ]
            },
            usage: {
                applications: [
                    "New road design standards",
                    "Road improvement schemes", 
                    "Traffic capacity enhancement",
                    "Curve widening design",
                    "Service road provision",
                    "Industrial access design",
                    "Parking strip integration"
                ],
                conditions: [
                    "All road hierarchy levels",
                    "Sharp curves requiring widening",
                    "Areas with loading/unloading needs",
                    "Industrial and cargo areas",
                    "Fire escape and emergency access",
                    "Climbing lane applications"
                ]
            },
            installation: {
                steps: [
                    "Identify road type and function",
                    "Determine traffic composition and volume",
                    "Check curve radius for widening requirements",
                    "Consider parking and loading needs",
                    "Account for heavy vehicle usage",
                    "Provide appropriate lane markings"
                ],
                manuals: ["TPDM Volume 2 Chapter 3.4", "Volume 3 Traffic Signs and Road Markings"],
                tools: ["Width calculation tables", "Curve analysis", "Traffic survey data", "Vehicle tracking software"],
                materials: ["Standard pavement construction", "Lane marking materials", "Kerb and channel systems"]
            }
        },
        {
            id: "rg6",
            name: "Road Type and Speed Limit",
            category: "road",
            description: "Classification and design standards for different road types",
            manual: "TPDM Volume 2 Chapter 3.3",
        },
        {
            id: "rg8",
            name: "Sight Distance",
            category: "road",
            description: "Forward visibility requirements for safe driving including stopping and junction sight distances",
            manual: "TPDM Volume 2 Chapter 3.3.5",
            overview: {
                description: "Standards for sight distance provision on roads including stopping sight distances, junction visibility, and horizontal curve sight requirements. Covers measurement methods and clearance requirements for safe forward visibility.",
                specifications: [
                    "Sight distances by design speed: 50m (50 km/h) to 295m (120 km/h), refer to Table 3.3.5.1",
                    "Driver eye height: 1.05-2.0m above road surface",
                    "Target object height: 0.26-2.0m above road surface",
                    "Horizontal curve clearance: 3m (80 km/h) to 4m (≥100 km/h)",
                    "Low radius curve (<R3) clearance: 3-4m from carriageway edge"
                ]
            },
            usage: {
                applications: [
                    "Junction approach visibility design",
                    "Horizontal curve sight line clearance",
                    "Access point visibility assessment",
                    "Stopping sight distance verification",
                    "Pedestrian crossing visibility",
                    "Cutting slope design for visibility",
                    "Bridge structure sight line clearance"
                ],
                conditions: [
                    "All road junctions and accesses",
                    "Horizontal curves with obstructions",
                    "Areas with pedestrian conflict points",
                    "Low-speed urban roads with unrestricted access",
                    "High-speed roads with sight restrictions",
                    "Weaving sections and merge points"
                ]
            },
            installation: {
                steps: [
                    "Determine design speed and required sight distance",
                    "Measure from driver eye height (1.05-2.0m) to object (0.26-2.0m)",
                    "Check sight lines in both horizontal and vertical planes",
                    "Ensure clearance along inside of curves",
                    "Remove or relocate obstructions (cuttings, barriers, signs)",
                    "Avoid locating junctions/accesses on sharp curves",
                    "Position laybys on straights or outside of curves"
                ],
                manuals: ["TPDM Volume 2 Chapter 3.3.5", "Volume 4 Junction Design"],
                tools: ["Sight distance measurement equipment", "Survey instruments", "Visibility analysis software", "Design speed calculations"],
                materials: ["Appropriate cutting slopes", "Transparent barriers where needed", "Reflective road markings"]
            },
            variants: [
                {
                    name: "Junction Sight Distance",
                    use: "Approaches to and through junctions and access points",
                    manual: "TPDM V2C3.3.5.1 Table 3.3.5.1"
                },
                {
                    name: "Urban Road Visibility",
                    use: "Low-speed roads with unrestricted pedestrian/vehicle access",
                    manual: "TPDM V2C3.3.5.4(i)"
                },
                {
                    name: "High-Speed Curve Clearance",
                    use: "≥80 km/h roads with radius <R3, 3-4m clearance required",
                    manual: "TPDM V2C3.3.5.4(ii)"
                },
                {
                    name: "Standard Curve Clearance",
                    use: "≥80 km/h roads with radius ≥R3, reduced clearance acceptable",
                    manual: "TPDM V2C3.3.5.4(iii)"
                }
            ]
        },
        {
            id: "rg13",
            name: "Clearance",
            category: "road",
            description: "Vertical and horizontal clearance requirements for structures and obstructions",
            manual: "TPDM Volume 2 Chapter 3.5",
            overview: {
                description: "Standards for vertical clearances above carriageways and horizontal clearances from carriageway edges to obstructions. Includes requirements for bridges, sign gantries, utilities, and roadside furniture.",
                specifications: [
                    "Vertical clearance over carriageways: 5.1m new construction, 5.0m maintained",
                    "Sign gantry clearance: 5.5m new, 5.4m maintained",
                    "Footway clearance: 3.5m minimum",
                    "Horizontal clearance: 500mm-1000mm based on design speed",
                    "Railway power wire clearance: 5.6m minimum",
                    "Pedestrian subway: 2.3-2.6m based on length"
                ]
            },
            usage: {
                applications: [
                    "Bridge design over carriageways",
                    "Overhead sign gantry installation",
                    "Utility crossing design",
                    "Roadside furniture placement",
                    "Traffic signal installation",
                    "Street lighting design",
                    "Pedestrian bridge clearances"
                ],
                conditions: [
                    "All overhead structures",
                    "Sign gantry installations",
                    "Railway/tramway crossings",
                    "Utility service crossings",
                    "Areas with roadside obstructions",
                    "Pedestrian infrastructure",
                    "Construction temporary works"
                ]
            },
            installation: {
                steps: [
                    "Determine structure type and location requirements",
                    "Calculate minimum vertical clearance from Table 3.5.1.1",
                    "Calculate horizontal clearance based on design speed",
                    "Consider carriageway crossfall effects on clearance",
                    "Account for attached street furniture and services",
                    "Provide adequate signing for temporary reduced clearances",
                    "Coordinate with utility and railway authorities where applicable"
                ],
                manuals: ["TPDM Volume 2 Chapter 3.5", "Volume 5 Highway Structures"],
                tools: ["Clearance measurement equipment", "Structure design calculations", "Survey instruments", "Utility coordination"],
                materials: ["Bridge construction materials", "Sign gantry structures", "Height restriction signage", "Warning devices"]
            },
            variants: [
                {
                    name: "Bridge Vertical Clearance",
                    use: "Structures over carriageways: 5.1m new, 5.0m maintained",
                    manual: "TPDM V2C3.5.1.1 Table 3.5.1.1"
                },
                {
                    name: "Sign Gantry Clearance", 
                    use: "Overhead sign structures: 5.5m new, 5.4m maintained",
                    manual: "TPDM V2C3.5.1.1 Table 3.5.1.1"
                },
                {
                    name: "Railway Crossing Clearance",
                    use: "Structures over railway: 5.6m minimum, subject to MTR consultation",
                    manual: "TPDM V2C3.5.1.1 Table 3.5.1.1"
                },
                {
                    name: "Low-Speed Horizontal Clearance",
                    use: "≤50 km/h roads: 500-600mm clearance based on crossfall",
                    manual: "TPDM V2C3.5.2.1 Table 3.5.2.1"
                },
                {
                    name: "High-Speed Horizontal Clearance",
                    use: "≥80 km/h roads: 1000mm clearance regardless of height",
                    manual: "TPDM V2C3.5.2.1 Table 3.5.2.1"
                },
                {
                    name: "Construction Temporary Clearance",
                    use: "Temporary reduction to 4.7m during construction with signing",
                    manual: "TPDM V2C3.5.1.3"
                }
            ]
        }
    ],
    pavement: [
        {
            id: "pv1",
            name: "Bituminous",
            category: "pavement",
            description: "Flexible pavement design using bituminous materials",
            drawing: "h1101e",
            manual: "hyd-gn042a",
            hydDrawings: ["H1101E", "H1129A", "H1130"],
            overview: {
                description: "Flexible pavement construction using bituminous materials for various traffic loading conditions.",
                specifications: ["Base course: 150-300mm", "Binder course: 60mm", "Wearing course: 40mm", "Material: Hot rolled asphalt"],
                image: "assets/pv1-profile.png"
            },
            usage: {
                applications: [
                    "Main carriageways",
                    "Secondary roads",
                    "Car parks",
                    "Industrial areas"
                ],
                conditions: [
                    "Heavy traffic loading",
                    "Flexible pavement required",
                    "Cost-effective solution"
                ]
            },
            installation: {
                steps: [
                    "Prepare subgrade and compact",
                    "Lay base course material",
                    "Install binder course",
                    "Apply wearing course",
                    "Compact and finish surface"
                ],
                drawings: ["H1101E", "H1129A", "H1130"],
                tools: ["Paver", "Roller", "Compactor"],
                materials: ["Hot rolled asphalt", "Base course material", "Tack coat"]
            }
        },
        {
            id: "pv2",
            name: "Concrete",
            category: "pavement",
            description: "Rigid pavement design using concrete construction",
            drawing: "h1102c",
            manual: "hyd-gn042a",
            hydDrawings: ["H1102C", "H1124C", "H1125"],
            overview: {
                description: "Rigid pavement construction using concrete for heavy-duty applications requiring long service life.",
                specifications: ["Slab thickness: 200-300mm", "Concrete grade: C40/20 ", "Joint spacing: 4-5m", "Reinforcement as required"],
                image: "assets/pv2-profile.png"
            },
            usage: {
                applications: [
                    "Heavy duty pavements",
                    "Airport runways",
                    "Industrial loading areas",
                    "Container terminals"
                ],
                conditions: [
                    "Very heavy traffic loading",
                    "Long service life required",
                    "Minimal maintenance desired"
                ]
            },
            installation: {
                steps: [
                    "Prepare and compact subbase",
                    "Install reinforcement if required",
                    "Place concrete using paver",
                    "Finish and texture surface",
                    "Cut joints and apply sealant"
                ],
                drawings: ["H1102C", "H1105", "H1106A", "H1107"],
                tools: ["Concrete paver", "Texturing equipment", "Joint cutting saw"],
                materials: ["Concrete C40/20", "Reinforcement", "Joint sealant"]
            }
        },
        {
            id: "pv3",
            name: "Low noise road surfacing",
            category: "pavement",
            description: "Specialized surfacing designed to reduce traffic noise",
            drawing: "h1101e",
            manual: "hyd-gn011e",
            hydDrawings: ["H1101", "H1135"],
            overview: {
                description: "Low noise road surfacing using specialized materials and techniques to reduce traffic noise while maintaining durability and safety.",
                specifications: ["Surface: Porous asphalt or stone mastic", "Thickness: 30-40mm wearing course", "Void content: 18-25%", "Noise reduction: 3-5 dB(A)"],
                image: "assets/pv2a-profile.png"
            },
            usage: {
                applications: [
                    "Noise-sensitive areas",
                    "Residential zones",
                    "Hospital and school vicinities",
                    "Urban motorways"
                ],
                conditions: [
                    "Noise reduction requirements",
                    "Environmental considerations",
                    "Urban traffic management",
                    "Community noise mitigation"
                ]
            },
            installation: {
                steps: [
                    "Prepare existing pavement surface",
                    "Apply tack coat if required",
                    "Lay low noise surfacing material",
                    "Compact using appropriate rollers",
                    "Install transition details at interfaces"
                ],
                drawings: ["H1101", "H1135"],
                tools: ["Specialized paver", "Pneumatic roller", "Temperature monitoring"],
                materials: ["Porous asphalt mix", "Stone mastic asphalt", "Modified binder", "Tack coat"]
            },
            variants: [
                {
                    name: "High Speed Road",
                    use: "Highways and expressways with high speeds",
                    manual: "hyd-gn032b"
                },
                {
                    name: "Low Speed Road",
                    use: "Local roads with gentle traffic. Refer to Table 2 of Guidance Note GN011E",
                    manual: "hyd-gn011e"
                },
                {
                    name: "Low Speed Road (Heavy Duty)",
                    use: "Local roads with heavy vehicle traffic. Refer to Table 2 of Guidance Note GN038C",
                    manual: "hyd-gn038c"
                }
            ]
        },
        {
            id: "pv4",
            name: "Cycle Track",
            category: "pavement",
            description: "Specialized pavement for cycle tracks",
            drawing: "h1104c",
            hydDrawings: ["H1104C", "H2189"],
            overview: {
                description: "Dedicated cycling infrastructure with appropriate surface treatment and safety features.",
                specifications: ["Width: 2.0-3.0m", "Surface: Resin-based Color Surface dressing", "Gradient: <5%", "Drainage: Adequate falls"],
                image: "assets/pv3-profile.png"
            },
            usage: {
                applications: [
                    "Dedicated cycle lanes",
                    "Shared use paths",
                    "Park cycling routes",
                    "Urban cycling infrastructure"
                ],
                conditions: [
                    "Cyclist safety priority",
                    "Good drainage required",
                    "Smooth surface essential"
                ]
            }
        },
        {
            id: "pv5",
            name: "Concrete Footpath",
            category: "pavement",
            description: "Concrete construction for pedestrian footpaths",
            drawing: "h1104c",
            hydDrawings: ["H1127B", "H1128A"],
            overview: {
                description: "Durable concrete footpath construction for pedestrian areas with proper drainage and accessibility features.",
                specifications: ["Thickness: 175mm", "Concrete grade: C30/20", "Width: 1.5-2.0m", "Class U4 finish"],
                image: "assets/pv4-profile.png"
            },
            usage: {
                applications: [
                    "Urban footpaths",
                    "Shopping areas",
                    "School zones",
                    "Accessible walkways"
                ],
                conditions: [
                    "Heavy pedestrian traffic",
                    "Durability required",
                    "Accessibility compliance needed"
                ]
            }
        },
        {
            id: "pv6",
            name: "Paver Footpath",
            category: "pavement",
            description: "Paver block construction for footpaths",
            drawing: "h1103g",
            manual: "hyd-gn044c",
            hydDrawings: ["H1103G", "H1131B", "H5101A", "H5102A", "H5103A"],
            overview: {
                description: "Interlocking paver block construction providing attractive and maintainable pedestrian surfaces.",
                specifications: ["Paver thickness: 60-80mm", "Bedding sand: 25-40mm", "Joint sand: 2-5mm", "Various colors available"],
                image: "assets/pv5-profile.png"
            },
            usage: {
                applications: [
                    "Pedestrian areas",
                    "Shopping precincts",
                    "Historic areas",
                    "Decorative walkways"
                ],
                conditions: [
                    "Aesthetic enhancement required",
                    "Easy maintenance access",
                    "Heritage area compliance"
                ]
            },
            installation: {
                steps: [
                    "Prepare and compact base course",
                    "Lay bedding sand and screed",
                    "Install paver blocks in pattern",
                    "Compact and joint with sand",
                    "Apply joint stabilizing sealer"
                ],
                drawings: ["H1103G", "H1131B", "H5609", "H5610", "H5611"],
                tools: ["Plate compactor", "Screed rails", "Rubber mallet"],
                materials: ["Paver blocks", "Bedding sand", "Joint sand", "Edge restraints"]
            }
        },
        {
            id: "pv7",
            name: "Planter",
            category: "pavement",
            description: "Landscaped planter construction and design",
            drawing: "h5146a",
            hydDrawings: ["H5146", "H5144", "H5145"],
            overview: {
                description: "Structural planter construction for landscaping within paved areas, providing controlled growing environments.",
                specifications: ["Concrete footing at planter edge", "GMS frame for pavement edging"],
                image: "assets/pv6-profile.png"
            },
            usage: {
                applications: [
                    "Urban beautification",
                    "Street tree planters",
                    "Roadside landscaping",
                    "Central reservation planting"
                ],
                conditions: [
                    "Landscaping enhancement",
                    "Environmental improvement",
                    "Traffic calming measures"
                ]
            },
            installation: {
                steps: [
                    "Excavate to required depth",
                    "Install drainage system",
                    "Apply waterproof membrane",
                    "Install planter structure",
                    "Backfill with growing medium"
                ],
                drawings: ["H5705", "H5706", "H5707"],
                tools: ["Excavator", "Membrane welding tools", "Compaction equipment"],
                materials: ["Concrete/masonry units", "Waterproof membrane", "Drainage materials", "Growing medium"]
            }
        },
        {
            id: "pv8",
            name: "Expansion Joint",
            category: "pavement-joints",
            description: "Expansion joints in concrete carriageways to accommodate thermal movement",
            drawing: "H1105",
            manual: "hyd-gn020a",
            hydDrawings: ["H1105"],
            overview: {
                description: "Expansion joints in concrete pavement construction designed to accommodate thermal expansion and contraction movements. These joints allow the concrete slabs to move without cracking, ensuring long-term pavement performance and structural integrity.",
                specifications: [
                    "Joint spacing: 100-150m depending on local conditions",
                    "Joint width: 20-25mm sealed with flexible sealant",
                    "Dowel bars: 25mm diameter at 300mm centers",
                    "Sealant depth: 25mm minimum",
                    "Load transfer: Full depth dowelled connection",
                    "Timing: Cut within 24 hours of concrete placement"
                ]
            },
            usage: {
                applications: [
                    "Concrete carriageway construction",
                    "Airport runway pavement",
                    "Industrial hard standing areas",
                    "Bridge deck connections",
                    "Long concrete pavement sections"
                ],
                conditions: [
                    "Concrete pavements subject to thermal cycling",
                    "Areas with significant temperature variations",
                    "Heavy traffic loading requiring load transfer",
                    "Locations requiring controlled movement accommodation"
                ]
            },
            installation: {
                steps: [
                    "Mark joint locations during concrete placement",
                    "Install dowel bars with bond-breaker on one end",
                    "Cut joint groove to specified depth and width",
                    "Clean joint thoroughly of debris",
                    "Install backing rod at proper depth",
                    "Apply joint sealant to specified depth",
                    "Tool sealant surface for proper profile"
                ],
                drawings: ["H1105"],
                tools: ["Joint cutting saw", "Vacuum cleaner", "Sealant gun", "Tooling equipment"],
                materials: ["Joint sealant", "Backing rod", "Dowel bars", "Bond-breaker compound"]
            }
        },
        {
            id: "pv9",
            name: "Contraction Joint", 
            category: "pavement-joints",
            description: "Contraction joints in concrete carriageways to control shrinkage cracking",
            drawing: "H1106A",
            manual: "hyd-gn020a", 
            hydDrawings: ["H1106A"],
            overview: {
                description: "Contraction joints (also known as control joints) in concrete pavement designed to control where shrinkage cracks occur during the curing process. These joints create a planned weak point where cracking is intended to occur, preventing random cracking throughout the pavement.",
                specifications: [
                    "Joint spacing: 4-6m typically for road pavements",
                    "Cut depth: 1/4 to 1/3 of slab thickness", 
                    "Joint width: 6-8mm sealed width",
                    "Timing: Cut within 6-24 hours of placement",
                    "Sealant: Applied after joint has opened",
                    "Load transfer: Usually no dowels required"
                ]
            },
            usage: {
                applications: [
                    "Concrete carriageway panels",
                    "Footway and cycle way construction",
                    "Airport pavement panels",
                    "Industrial floor slabs",
                    "Parking area construction"
                ],
                conditions: [
                    "All concrete pavements to control shrinkage",
                    "Regular panel construction requirements",
                    "Areas requiring controlled crack location",
                    "New concrete construction projects"
                ]
            },
            installation: {
                steps: [
                    "Plan joint layout during design phase",
                    "Mark joint locations on fresh concrete",
                    "Cut joints within specified time window", 
                    "Cut to proper depth (1/4 to 1/3 slab thickness)",
                    "Clean joints of cutting debris",
                    "Allow joint to open through shrinkage",
                    "Install backing rod and sealant when ready"
                ],
                drawings: ["H1106A"],
                tools: ["Early-entry saw", "Conventional joint saw", "Joint cleaning equipment"],
                materials: ["Diamond blades", "Joint sealant", "Backing rod", "Cleaning materials"]
            }
        },
        {
            id: "pv10", 
            name: "Longitudinal Joint",
            category: "pavement-joints",
            description: "Longitudinal joints in concrete carriageways to reduce slab width and limit transverse stresses",
            drawing: "H1107",
            manual: "hyd-gn020a",
            hydDrawings: ["H1107"],
            overview: {
                description: "Longitudinal joints in concrete pavement construction designed to reduce slab width and limit stresses in the transverse direction. These joints provide a balance between construction operations and load transfer requirements while controlling slab dimensions for optimal pavement performance.",
                specifications: [
                    "Maximum slab width: 4.5m (unreinforced and mesh reinforced)",
                    "Maximum slab width with B503 mesh: 6.0m",
                    "Minimum slab width: 1.0m",
                    "Length/width ratio: 1.6 desirable maximum (unreinforced)",
                    "Length/width ratio: 2.0 absolute maximum (unreinforced)",
                    "Construction: Normally formed, not poured-through"
                ]
            },
            usage: {
                applications: [
                    "Wide concrete carriageway construction",
                    "Multi-lane pavement systems",
                    "Load transfer optimization",
                    "Slab width control in unreinforced construction",
                    "Mesh reinforced pavement panels",
                    "Traffic lane separation joints"
                ],
                conditions: [
                    "Carriageways exceeding maximum slab width",
                    "Areas requiring transverse stress control",
                    "Multi-lane construction projects",
                    "Balance between construction complexity and performance",
                    "Avoidance of wheel track locations"
                ]
            },
            installation: {
                steps: [
                    "Position joints between traffic lanes at or near lane lines",
                    "Alternatively position in center of traffic lane",
                    "Avoid formation in or near wheel tracks",
                    "Form joints rather than pour-through construction",
                    "Joints may terminate at any transverse joint",
                    "Use purpose-made regulating machine if poured-through",
                    "Ensure proper load transfer mechanisms"
                ],
                drawings: ["H1107"],
                tools: ["Joint forming equipment", "Regulating machine (if poured-through)", "Alignment guides"],
                materials: ["Joint forming materials", "Load transfer devices", "Sealant systems"]
            }
        },
        {
            id: "pv11",
            name: "Isolation Joint",
            category: "pavement-joints", 
            description: "Isolation joints and longitudinal joints in concrete carriageways",
            drawing: "H1107",
            manual: "hyd-gn020a",
            hydDrawings: ["H1107"],
            overview: {
                description: "Isolation joints in concrete pavement construction that provide complete separation between pavement sections without load transfer mechanisms. These joints prevent induced cracking by allowing slabs to move independently in both transverse and longitudinal directions, particularly at road junctions and around utility structures.",
                specifications: [
                    "No dowel bars or tie bars for load transfer",
                    "Complete separation between concrete sections",
                    "Joint material: Compressible filler board 10-20mm thick",
                    "Full depth: Extends through entire slab thickness",
                    "Box-out arrangement: Orthogonal to road slab alignment",
                    "Transverse joints: Extended through full slab width"
                ]
            },
            usage: {
                applications: [
                    "Road junction terminations where transverse joints cannot continue",
                    "Around manholes and utility openings for separation",
                    "Between main road and side road slabs",
                    "Unreinforced slab construction at junctions",
                    "Areas requiring independent slab movement",
                    "Mesh reinforced to unreinforced slab transitions"
                ],
                conditions: [
                    "Road junctions with misaligned joint patterns",
                    "Utility structures with different support arrangements",
                    "Areas where continuing joints through side roads is impractical",
                    "Short panel lengths in unreinforced construction",
                    "Prevention of induced cracking from joint misalignment"
                ]
            },
            installation: {
                steps: [
                    "Install compressible filler board against structure",
                    "Ensure filler board extends full slab depth",
                    "Maintain filler board position during concrete placement",
                    "Remove any concrete spillage from joint face",
                    "Cut sealant groove in top of joint after curing",
                    "Install backing rod at proper depth",
                    "Apply sealant and tool to specified profile"
                ],
                drawings: ["H1107"],
                tools: ["Joint cutting saw", "Installation guides", "Sealant application equipment"],
                materials: ["Compressible filler board", "Joint sealant", "Backing rod", "Support materials"]
            }
        }
    ],
    kerbs: [
        {
            id: "k1",
            name: "K1 - Standard Kerb",
            category: "kerbs",
            description: "Standard concrete kerb for carriageway to footpath transitions",
            drawing: "K1",
            manual: "Highway Standard Drawing K1",
            hydDrawings: ["H1118", "H1119"], // Reference to actual HYD drawings
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
                drawings: ["H1101", "H1102", "H1118", "H1119"], // Include HYD references
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
            id: "e2",
            name: "E2 - Planter Kerb",
            category: "kerbs",
            description: "Kerb for footpath to planter",
            drawing: "E2",
            manual: "Highway Standard Drawing E2",
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
        },
        {
            id: "e3",
            name: "E3 - Boundary Kerb",
            category: "kerbs",
            description: "Kerb for footpath to boundary",
            drawing: "E3",
            manual: "Highway Standard Drawing E3",
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
        },
        {
            id: "gk1",
            name: "Granite Kerb",
            category: "kerbs",
            description: "Natural granite kerb for premium applications",
            drawing: "h4101",
            manual: "h4101",
            overview: {
                description: "High-quality natural granite kerb providing durable and aesthetic edge definition for premium applications.",
                specifications: ["Height: 125mm", "Width: 150mm", "Material: Natural granite", "Profile: Dressed finish", "Color: Natural grey granite"],
                image: "assets/gk1-profile.png"
            },
            usage: {
                applications: [
                    "Premium urban developments",
                    "Historic area conservation",
                    "Landscape enhancement projects",
                    "High-end commercial areas",
                    "Ceremonial routes"
                ],
                conditions: [
                    "Areas requiring premium finish",
                    "Long-term durability requirements",
                    "Aesthetic enhancement zones",
                    "Heritage conservation areas"
                ]
            },
            installation: {
                steps: [
                    "Excavate foundation to required depth",
                    "Lay concrete foundation (ST2 mix)",
                    "Position granite kerb units with 10mm joints",
                    "Check alignment and levels carefully",
                    "Backfill and compact behind kerb",
                    "Point joints with matching mortar",
                    "Clean and seal granite surface"
                ],
                drawings: ["H4101", "H4101-DETAIL", "H4101-JOINT"],
                tools: ["Diamond cutting tools", "Spirit level", "Rubber mallet", "Pointing trowel"],
                materials: ["ST2 concrete", "Granite-matched mortar", "Sand", "Granite sealer"]
            },
            variants: [
                {
                    name: "GK1 Standard",
                    use: "Standard granite kerb",
                    drawing: "H4101"
                },
                {
                    name: "GK1 Polished",
                    use: "Polished finish version",
                    drawing: "H4101-P"
                }
            ]
        }
    ],
    barriers: [
        {
            id: "cpb1",
            name: "CPB1 - Concrete Profile Barrier",
            category: "barriers",
            description: "Single-sided concrete profile barrier",
            drawing: "H2101D",
            manual: "TPDM Volume 2 Chapter 3.9",
            hydDrawings: ["H2101D", "H2102B", "H2103", "H2104"],
            overview: {
                description: "Concrete profile barriers providing vehicle restraint through controlled redirection. These barriers are designed to contain and redirect errant vehicles while minimizing vehicle damage and occupant injury. The New Jersey profile provides optimal balance between containment and redirection performance.",
                specifications: ["Height: 800mm", "Length: 4000mm segments", "Material: Reinforced concrete", "Profile: New Jersey", "Containment level: L2", "Working width: 1.0-1.3m"],
                image: "assets/cpb1-profile.png"
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
                drawings: ["H2101D", "H2102B", "H2103", "H2104"],
                tools: ["Crane", "Surveying equipment", "Concrete pump"],
                materials: ["Reinforced concrete segments", "Dowel bars", "Sealant"]
            },
            variants: [
                {
                    name: "CPB1 Standard",
                    use: "General roadside protection",
                    drawing: "H2101D"
                },
                {
                    name: "CPB1-T",
                    use: "Terminal end treatment", 
                    drawing: "H2103"
                }
            ]
        },
        {
            id: "cpb2",
            name: "CPB2 - Removable Concrete Profile Barrier",
            category: "barriers",
            description: "Removable concrete profile barrier",
            drawing: "H2254",
            manual: "TPDM Volume 2 Chapter 3.9",
            hydDrawings: ["H2254", "H2255", "H2256"],
            overview: {
                description: "Removable concrete profile barriers for temporary traffic management and work zone protection. These barriers can be repositioned using specialized equipment while maintaining the same containment performance as permanent concrete barriers. Designed for quick deployment and removal during construction or emergency situations.",
                specifications: ["Height: 800mm", "Length: 4000mm segments", "Material: Reinforced concrete", "Profile: New Jersey", "Type: Removable/portable", "Containment level: L2", "Lifting points: Integrated"],
                image: "assets/cpb2-profile.png"
            },
            usage: {
                applications: [
                    "Temporary traffic diversion",
                    "Work zone protection",
                    "Emergency lane closure",
                    "Movable median barriers"
                ],
                conditions: [
                    "Temporary installations",
                    "Areas requiring frequent reconfiguration",
                    "Construction zones"
                ]
            },
            installation: {
                steps: [
                    "Survey and mark barrier alignment",
                    "Position removable barrier units",
                    "Connect units with appropriate hardware",
                    "Install end anchor blocks",
                    "Apply reflective markings",
                    "Secure lifting points for removal"
                ],
                drawings: ["H2254", "H2255", "H2256"],
                tools: ["Crane", "Surveying equipment", "Lifting equipment"],
                materials: ["Removable concrete segments", "Connection hardware", "Anchor blocks"]
            },
            variants: [
                {
                    name: "CPB2 Standard",
                    use: "General removable barrier",
                    drawing: "H2254"
                },
                {
                    name: "CPB2 End Anchor",
                    use: "End anchor block system",
                    drawing: "H2255"
                }
            ]
        },
        {
            id: "cb1",
            name: "CB1 - Corrugated Beam Barrier",
            category: "barriers",
            description: "Corrugated beam crash barrier system",
            drawing: "H2112C",
            manual: "TPDM Volume 2 Chapter 3.9",
            hydDrawings: ["H2112C", "H2113A", "H2114B", "H2115A", "H2116B"],
            overview: {
                description: "Corrugated steel beam barriers providing vehicle restraint through controlled deformation and energy absorption. The W-beam profile distributes impact forces over multiple posts while allowing controlled deflection to reduce vehicle damage and occupant injury. Cost-effective solution for medium-risk locations.",
                specifications: ["Height: 750mm", "Length: 4320mm beams", "Material: Galvanized steel", "Profile: W-beam", "Post spacing: 4000mm centers", "Containment level: L1", "Working width: 2.0-2.5m"],
                image: "assets/cb1-profile.png"
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
                drawings: ["H2112C", "H2113A", "H2114B", "H2115A", "H2116B"],
                tools: ["Post driver", "Impact wrench", "Level"],
                materials: ["Steel beams", "Posts", "Bolts", "Spacer blocks"]
            },
            variants: [
                {
                    name: "CB1 Standard",
                    use: "General roadside protection",
                    drawing: "H2112C"
                },
                {
                    name: "CB1 Earth Footing",
                    use: "Installation with compacted earth footings",
                    drawing: "H2113A"
                }
            ]
        },
        {
            id: "cb2",
            name: "CB2 - Movable Steel Barrier",
            category: "barriers",
            description: "Movable steel barrier system",
            drawing: "H2273",
            manual: "TPDM Volume 2 Chapter 3.9",
            hydDrawings: ["H2273", "H2274", "H2275"],
            overview: {
                description: "Movable steel beam barriers designed for temporary installations and emergency access provisions. These barriers can be relocated or removed to allow emergency vehicle passage through median openings while maintaining protection during normal operations. Features quick-release mechanisms for rapid deployment.",
                specifications: ["Height: 750mm", "Length: 4320mm beams", "Material: Galvanized steel", "Profile: W-beam", "Type: Movable/removable", "Containment level: L1", "Access: Emergency vehicle passage"],
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
        },
        {
            id: "cb3",
            name: "CB3 - Thrie Beam Barrier",
            category: "barriers",
            description: "Thrie beam crash barrier system",
            drawing: "H2191A",
            manual: "TPDM Volume 2 Chapter 3.9",
            hydDrawings: ["H2191A", "H2192A", "H2193B", "H2194A", "H2195B"],
            overview: {
                description: "Three-wave beam barriers providing enhanced containment performance compared to standard W-beam systems. The thrie beam profile offers greater structural depth and resistance to vehicle penetration while maintaining controlled deformation characteristics. Suitable for locations requiring higher containment levels.",
                specifications: ["Height: 750mm", "Length: 4320mm beams", "Material: Galvanized steel", "Profile: Three-wave thrie beam", "Post spacing: 4000mm centers", "Containment level: L2", "Working width: 1.5-2.0m"],
                image: "assets/cb3-profile.png"
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
        },
        {
            id: "cb4",
            name: "CB4 - Thrie Beam Barrier with Additional Rail",
            category: "barriers",
            description: "Thrie beam crash barrier system",
            drawing: "H2238",
            manual: "TPDM Volume 2 Chapter 3.9",
            hydDrawings: ["H2238", "H2190A", "H2196", "H2197"],
            overview: {
                description: "Enhanced thrie beam barrier system with additional upper rail for increased containment performance. This double-rail configuration provides superior vehicle restraint for high-risk locations or areas with heavy vehicles. The additional rail helps prevent vehicle rollover and provides redundancy in barrier performance.",
                specifications: ["Height: 750mm", "Length: 4320mm beams", "Material: Galvanized steel", "Profile: Three-wave double-sided", "Configuration: Dual rail system", "Containment level: L3", "Containment: Enhanced level"],
                image: "assets/cb4-profile.png"
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
        },
        {
            id: "sp1",
            name: "Steel Parapet",
            category: "barriers",
            description: "Steel parapet barrier system for bridges and elevated sections",
            drawing: "SSD164-165",
            manual: "TPDM Volume 2 Chapter 3.9",
            overview: {
                description: "Steel parapet barriers designed for bridge and elevated structure applications where both vehicle containment and pedestrian protection are required. These barriers combine structural steel framework with infill panels to provide high containment performance while allowing for drainage and maintenance access.",
                specifications: ["Height: 1100mm", "Material: Galvanized steel", "Profile: Steel beam construction", "Containment level: L2", "Application: Bridge structures", "Protection: Combined vehicle/pedestrian"],
                image: "assets/steel-parapet-profile.png"
            },
            usage: {
                applications: [
                    "Bridge deck protection",
                    "Elevated roadway barriers",
                    "Combined vehicle/pedestrian restraint",
                    "Structure edge protection"
                ],
                conditions: [
                    "Bridge structures",
                    "Elevated sections",
                    "High containment requirements",
                    "Corrosive environments"
                ]
            },
            installation: {
                steps: [
                    "Survey and mark barrier alignment",
                    "Install support posts with anchor bolts",
                    "Mount steel parapet sections",
                    "Connect sections with splice plates",
                    "Apply protective coatings",
                    "Install pedestrian handrail if required"
                ],
                drawings: ["SSD164", "SSD165", "SSD164-DETAIL"],
                tools: ["Crane", "Welding equipment", "Torque wrench", "Level"],
                materials: ["Steel parapet sections", "Anchor bolts", "Splice plates", "Protective coating"]
            },
            variants: [
                {
                    name: "SP1 Standard",
                    use: "General bridge parapet",
                    drawing: "SSD164"
                },
                {
                    name: "SP1 Extended",
                    use: "Extended height version",
                    drawing: "SSD165"
                }
            ]
        },
        {
            id: "crcp1",
            name: "Combined Rail Concrete Parapet",
            category: "barriers",
            description: "Combined rail and concrete parapet barrier system",
            drawing: "SSD161-163",
            manual: "TPDM Volume 2 Chapter 3.9",
            overview: {
                description: "Hybrid barrier system combining reinforced concrete base with steel rail elements for enhanced protection and aesthetic appeal. The concrete base provides structural integrity and containment while the steel rail components offer visibility and architectural enhancement. Designed for urban bridge applications where appearance is important.",
                specifications: ["Height: 1200mm", "Base: Reinforced concrete", "Rail: Steel tube/beam", "Containment level: L2", "Application: Urban bridges", "Finish: Architectural treatment"],
                image: "assets/combined-rail-concrete-profile.png"
            },
            usage: {
                applications: [
                    "Urban bridge parapets",
                    "Aesthetic barrier requirements",
                    "Combined vehicle/pedestrian protection",
                    "High-profile structures"
                ],
                conditions: [
                    "Urban environments",
                    "Aesthetic considerations",
                    "High visibility locations",
                    "Pedestrian areas"
                ]
            },
            installation: {
                steps: [
                    "Install concrete base sections",
                    "Connect base units with dowel bars",
                    "Mount steel rail brackets",
                    "Install steel rail sections",
                    "Apply finishes and protective coatings",
                    "Install end treatments"
                ],
                drawings: ["SSD161", "SSD162", "SSD163", "SSD161-BASE", "SSD162-RAIL"],
                tools: ["Crane", "Concrete pump", "Welding equipment", "Drilling tools"],
                materials: ["Concrete base units", "Steel rail sections", "Brackets", "Dowel bars", "Sealants"]
            },
            variants: [
                {
                    name: "CRCP1 Standard",
                    use: "Standard combined barrier",
                    drawing: "SSD161"
                },
                {
                    name: "CRCP1 Enhanced",
                    use: "Enhanced aesthetic version",
                    drawing: "SSD162"
                },
                {
                    name: "CRCP1 Terminal",
                    use: "Terminal end treatment",
                    drawing: "SSD163"
                }
            ]
        },
        {
            id: "l4cp",
            name: "L4 Concrete Parapet",
            category: "barriers",
            description: "L4 containment level concrete parapet barrier",
            drawing: "Figure 11.3 HyD SDM",
            manual: "Highways Department Structures Design Manual Figure 11.3",
            overview: {
                description: "Highest level concrete parapet barriers designed for critical infrastructure protection where maximum vehicle containment is essential. These barriers meet L4 containment requirements per EN 1317 standards and are designed to contain large vehicles at high speeds with minimal deflection. Reserved for locations where barrier failure would result in catastrophic consequences.",
                specifications: ["Height: 1500mm", "Containment Level: L4", "Material: Reinforced concrete", "Design standard: EN 1317", "Working width: <1.0m", "Impact severity: ASI ≤ 1.4"],
                image: "assets/l4-concrete-parapet-profile.png"
            },
            usage: {
                applications: [
                    "Major bridge structures",
                    "Critical infrastructure protection",
                    "High-speed motorway bridges",
                    "Structures over sensitive areas",
                    "Maximum containment requirements"
                ],
                conditions: [
                    "High-speed traffic (>100 km/h)",
                    "Critical structures requiring maximum protection",
                    "Bridges over railways/waterways",
                    "Areas with severe consequences of vehicle departure"
                ]
            },
            installation: {
                steps: [
                    "Prepare structural deck substrate",
                    "Install reinforcement according to HyD SDM details",
                    "Set up formwork for concrete casting",
                    "Cast concrete parapet in sections",
                    "Install expansion joints at specified intervals",
                    "Apply surface finishes and protective treatments",
                    "Install vehicle restraint system anchorages"
                ],
                drawings: ["Figure 11.3 HyD SDM", "HyD SDM Chapter 11", "L4-DETAIL", "L4-REINFORCEMENT"],
                tools: ["Crane", "Concrete pump", "Formwork system", "Reinforcement cutting tools"],
                materials: ["High-strength concrete", "Reinforcing steel", "Expansion joint materials", "Surface treatments"]
            },
            variants: [
                {
                    name: "L4CP Standard",
                    use: "Standard L4 concrete parapet",
                    drawing: "Figure 11.3 HyD SDM"
                },
                {
                    name: "L4CP Modified",
                    use: "Site-specific modifications",
                    drawing: "Figure 11.3 HyD SDM (Modified)"
                }
            ]
        },
    ],
    "railing & gate": [
        {
            id: "r1",
            name: "Type 2 Railings",
            category: "railings",
            description: "Type 2 railings for pedestrian control purpose",
            drawing: "H2130H",
            manual: "TPDM Volume 2 Chapter 3.9",
            hydDrawings: ["H2130H", "H2131D", "H2132H", "H2134I"],
            overview: {
                description: "Type 2 railings designed for pedestrian control applications including standard sections, junction details, and expansion joint provisions.",
                specifications: ["Height: 1100mm", "Panel length: 2000mm", "Material: Galvanized steel", "Infill: Vertical bars"],
                image: "assets/r1-profile.png"
            },
            usage: {
                applications: [
                    "Pedestrian control at junctions",
                    "Footway edge protection",
                    "Traffic island protection",
                    "School zone safety"
                ],
                conditions: [
                    "Areas requiring pedestrian guidance",
                    "Junction and crossing locations",
                    "High pedestrian activity zones"
                ]
            },
            installation: {
                steps: [
                    "Mark post positions at required centers",
                    "Drill holes for post foundations",
                    "Install posts with concrete",
                    "Mount railing panels",
                    "Install expansion joints where required"
                ],
                drawings: ["H2130H", "H2131D", "H2132H", "H2134I"],
                tools: ["Core drill", "Level", "Torque wrench"],
                materials: ["Steel posts", "Railing panels", "Concrete", "Expansion joint materials"]
            }
        },
        {
            id: "r2",
            name: "Type 2 Railings at Junction and Crossing",
            category: "railings",
            description: "Type 2 railings near Junction and Crossing with high visibility",
            drawing: "H2132H",
            manual: "TPDM Volume 2 Chapter 3.9",
            hydDrawings: ["H2130H", "H2131D", "H2132H", "H2134I"],
            overview: {
                description: "Type 2 railings located near Junction and Crossing should adopt a higher visibility panel to avoid block motorists sight line.",
                specifications: ["Height: 1100mm", "Panel length: 2000mm", "Material: Galvanized steel", "Infill: Vertical bars"],
                image: "assets/r1-profile.png"
            },
            usage: {
                applications: [
                    "Pedestrian control at junctions",
                    "Footway edge protection",
                    "Traffic island protection",
                    "School zone safety"
                ],
                conditions: [
                    "Areas requiring pedestrian guidance",
                    "Junction and crossing locations",
                    "High pedestrian activity zones"
                ]
            },
            installation: {
                steps: [
                    "Mark post positions at required centers",
                    "Drill holes for post foundations",
                    "Install posts with concrete",
                    "Mount railing panels",
                    "Install expansion joints where required"
                ],
                drawings: ["H2130H", "H2131D", "H2132H", "H2134I"],
                tools: ["Core drill", "Level", "Torque wrench"],
                materials: ["Steel posts", "Railing panels", "Concrete", "Expansion joint materials"]
            }
        },
        {
            id: "r3",
            name: "Decorative Type Railings",
            category: "railings",
            description: "Type 4 railings for pedestrian control purpose",
            drawing: "H2282A",
            manual: "HYD Standard Drawing H2282A",
            hydDrawings: ["H2282A", "H2131D", "H2283A"],
            overview: {
                description: "Type 4 railings for pedestrian control with enhanced design features and expansion joint capabilities.",
                specifications: ["Height: 1100mm", "Enhanced design features", "Material: Galvanized steel", "Expansion joint provision"],
                image: "assets/r2-profile.png"
            },
            usage: {
                applications: [
                    "Enhanced pedestrian control",
                    "High-traffic pedestrian areas",
                    "Urban commercial zones",
                    "Transport interchange areas"
                ],
                conditions: [
                    "Areas requiring enhanced control",
                    "High pedestrian volume locations",
                    "Urban commercial environments"
                ]
            },
            installation: {
                steps: [
                    "Prepare foundation locations",
                    "Install post foundations",
                    "Mount Type 4 railing sections",
                    "Install expansion joints as required",
                    "Apply protective finishes"
                ],
                drawings: ["H2282A", "H2131D", "H2283A"],
                tools: ["Installation equipment", "Alignment tools", "Fastening tools"],
                materials: ["Type 4 railing components", "Foundation materials", "Expansion joint materials"]
            }
        },
        {
            id: "r12",
            name: "Tubular Amenity Railings",
            category: "railings",
            description: "Tubular amenity railings for aesthetic and functional applications",
            drawing: "H2135C",
            manual: "HYD Standard Drawing H2135C",
            hydDrawings: ["H2135C"],
            overview: {
                description: "Tubular amenity railings designed for aesthetic enhancement and functional pedestrian guidance in urban environments.",
                specifications: ["Tubular construction", "Amenity-focused design", "Aesthetic enhancement", "Urban environment application"]
            },
            usage: {
                applications: [
                    "Urban amenity areas",
                    "Aesthetic enhancement projects",
                    "Pedestrian comfort zones",
                    "Landscape integration projects"
                ],
                conditions: [
                    "Aesthetic considerations priority",
                    "Urban amenity requirements",
                    "Landscape integration needs"
                ]
            },
            installation: {
                steps: [
                    "Aesthetic site planning",
                    "Tubular railing installation",
                    "Aesthetic alignment verification",
                    "Amenity feature integration",
                    "Aesthetic finishing application"
                ],
                drawings: ["H2135C"],
                tools: ["Aesthetic installation tools"],
                materials: ["Tubular railing components", "Amenity materials"]
            }
        },
        {
            id: "r13",
            name: "Stainless Steel Railing SS01",
            category: "railings",
            description: "Stainless steel railings for public transport interchange",
            drawing: "H2271",
            manual: "HYD Standard Drawing H2271",
            hydDrawings: ["H2271", "H2272"],
            overview: {
                description: "Stainless steel Type SS01 railings specifically designed for public transport interchange applications with corrosion resistance and durability.",
                specifications: ["Stainless steel construction", "Public transport specification", "Corrosion resistance", "High durability"]
            },
            usage: {
                applications: [
                    "Public transport interchanges",
                    "High-traffic transit areas",
                    "Corrosive environment applications",
                    "Long-term durability needs"
                ],
                conditions: [
                    "Public transport environments",
                    "High passenger volumes",
                    "Corrosive conditions",
                    "Durability requirements"
                ]
            },
            installation: {
                steps: [
                    "Transport interchange site preparation",
                    "Stainless steel railing installation",
                    "Corrosion protection verification",
                    "Durability testing",
                    "Transit-grade finishing"
                ],
                drawings: ["H2271", "H2272"],
                tools: ["Stainless steel installation equipment"],
                materials: ["Stainless steel railing components", "Corrosion-resistant materials"]
            }
        },
        {
            id: "r14",
            name: "Removable Railings",
            category: "railings",
            description: "Removable bollards and railings system",
            drawing: "H2259",
            manual: "HYD Standard Drawing H2259",
            hydDrawings: ["H2259", "H2260", "H2261", "H2262"],
            overview: {
                description: "Removable railing system designed for flexible access control and temporary traffic management applications.",
                specifications: ["Removable design", "Flexible access control", "Temporary installation capability", "Quick deployment system"]
            },
            usage: {
                applications: [
                    "Temporary access control",
                    "Flexible traffic management",
                    "Event crowd control",
                    "Emergency access provision"
                ],
                conditions: [
                    "Temporary installation needs",
                    "Flexible access requirements",
                    "Event management applications",
                    "Emergency access needs"
                ]
            },
            installation: {
                steps: [
                    "Removable system site preparation",
                    "Base installation for removable components",
                    "Removable railing deployment",
                    "Access control verification",
                    "Removal/deployment training"
                ],
                drawings: ["H2259", "H2260", "H2261", "H2262"],
                tools: ["Removable system tools", "Deployment equipment"],
                materials: ["Removable railing components", "Base installation materials"]
            }
        },
        {
            id: "r15",
            name: "Emergency Crash Gate",
            category: "railings",
            description: "Emergency crash gate for emergency vehicle access through barriers",
            drawing: "H2108C",
            manual: "HYD Standard Drawing H2108C",
            hydDrawings: ["H2108C"],
            overview: {
                description: "Emergency crash gate system designed for emergency vehicle access through barrier systems, providing controlled access during emergency situations while maintaining barrier integrity under normal conditions.",
                specifications: ["Emergency vehicle access capability", "Crash-through design", "Barrier integration", "Emergency activation system"]
            },
            usage: {
                applications: [
                    "Emergency vehicle access points",
                    "Barrier system integration",
                    "Fire service access routes",
                    "Emergency response corridors",
                    "Controlled access points",
                    "Critical infrastructure protection"
                ],
                conditions: [
                    "Emergency access requirements",
                    "Barrier system installations",
                    "Fire safety compliance",
                    "Emergency response needs"
                ]
            },
            installation: {
                steps: [
                    "Identify emergency access requirements",
                    "Integrate with existing barrier system",
                    "Install crash gate mechanism",
                    "Test emergency activation system",
                    "Coordinate with emergency services",
                    "Establish maintenance protocols"
                ],
                drawings: ["H2108C"],
                tools: ["Gate installation equipment", "Emergency mechanism tools", "Testing equipment"],
                materials: ["Emergency crash gate components", "Activation mechanisms", "Integration hardware"]
            }
        },
        {
            id: "r16",
            name: "Emergency Access Gate (EAG)",
            category: "railings",
            description: "Emergency Access Gate for controlled emergency vehicle access",
            drawing: "H2276B",
            manual: "HYD Standard Drawing H2276B",
            hydDrawings: ["H2276B"],
            overview: {
                description: "Emergency Access Gate (EAG) system providing controlled access for emergency vehicles through restricted areas while maintaining security and access control under normal conditions.",
                specifications: ["Emergency Access Gate design", "Controlled access system", "Emergency vehicle compatibility", "Security maintenance capability"]
            },
            usage: {
                applications: [
                    "Emergency vehicle access control",
                    "Restricted area entry points",
                    "Security perimeter access",
                    "Fire department access routes",
                    "Ambulance service corridors",
                    "Police emergency access"
                ],
                conditions: [
                    "Emergency access control requirements",
                    "Security perimeter installations",
                    "Emergency service coordination needs",
                    "Controlled access applications"
                ]
            },
            installation: {
                steps: [
                    "Plan emergency access strategy",
                    "Install EAG foundation and frame",
                    "Mount gate mechanism and controls",
                    "Install emergency activation systems",
                    "Test access control functionality",
                    "Train emergency service personnel"
                ],
                drawings: ["H2276B"],
                tools: ["EAG installation equipment", "Control system tools", "Access testing equipment"],
                materials: ["Emergency Access Gate components", "Control mechanisms", "Foundation materials"]
            }
        },
        {
            id: "r17",
            name: "Chain Link Fence - Standard Installation",
            category: "railings",
            description: "Standard chain link fence installation for perimeter security and area control",
            drawing: "6121D",
            manual: "Standard Drawing 6121D",
            hydDrawings: ["6121D"],
            overview: {
                description: "Standard chain link fence system designed for perimeter security, area control, and boundary definition with durable galvanized construction and standard installation procedures.",
                specifications: ["Galvanized chain link construction", "Standard height options", "Post and foundation system", "Gate integration capability"]
            },
            usage: {
                applications: [
                    "Perimeter security fencing",
                    "Property boundary definition",
                    "Area access control",
                    "Construction site security",
                    "Facility protection",
                    "Restricted area enclosure"
                ],
                conditions: [
                    "Security perimeter requirements",
                    "Boundary definition needs",
                    "Access control applications",
                    "Long-term installation requirements"
                ]
            },
            installation: {
                steps: [
                    "Survey and mark fence line",
                    "Install fence posts and foundations",
                    "Mount chain link fabric",
                    "Install tension systems",
                    "Add gates and access points",
                    "Apply protective coatings and finishes"
                ],
                drawings: ["6121D", "6122C",],
                tools: ["Fence installation equipment", "Post setting tools", "Tension equipment"],
                materials: ["Chain link fabric", "Fence posts", "Concrete for foundations", "Hardware and fasteners"]
            }
        },
    ],
    signs: [
        {
            id: "s1",
            name: "Single Post Sign Support",
            category: "signs",
            description: "Single post traffic sign support systems",
            drawing: "H2147F",
            manual: "HYD Standard Drawing H2147F",
            hydDrawings: ["H2147F", "H2148C"],
            overview: {
                description: "Single post traffic sign support systems designed for standard traffic sign installations with proper foundation and mounting details.",
                specifications: ["Single post design", "Standard mounting system", "Foundation details included", "Traffic sign compatibility"]
            },
            usage: {
                applications: [
                    "Standard traffic sign installations",
                    "Regulatory sign mounting",
                    "Warning sign support",
                    "Information sign display"
                ],
                conditions: [
                    "Standard sign installation requirements",
                    "Single sign mounting needs",
                    "Normal wind load conditions"
                ]
            },
            installation: {
                steps: [
                    "Prepare foundation excavation",
                    "Install post foundation",
                    "Mount single post support",
                    "Install sign mounting brackets",
                    "Mount signs and apply finishing"
                ],
                drawings: ["H2147F", "H2148C"],
                tools: ["Foundation equipment", "Post installation tools"],
                materials: ["Sign post", "Foundation materials", "Mounting hardware"]
            }
        },
        {
            id: "s2",
            name: "Single Post Off-Centered Sign Support",
            category: "signs",
            description: "Single post traffic sign support using off-centered method",
            drawing: "H2198C",
            manual: "HYD Standard Drawing H2198C",
            hydDrawings: ["H2198C", "H2199C", "H2200B", "H2201B"],
            overview: {
                description: "Single post traffic sign support system using off-centered mounting method for specific installation conditions and sign positioning requirements.",
                specifications: ["Off-centered mounting design", "Specialized positioning capability", "Enhanced stability features", "Multi-sheet detailed design"]
            },
            usage: {
                applications: [
                    "Off-centered sign positioning",
                    "Specialized mounting conditions",
                    "Clearance-constrained installations",
                    "Asymmetric sign arrangements"
                ],
                conditions: [
                    "Space-constrained locations",
                    "Off-center positioning needs",
                    "Specialized clearance requirements"
                ]
            },
            installation: {
                steps: [
                    "Site survey for off-center requirements",
                    "Prepare specialized foundation",
                    "Install off-centered post system",
                    "Mount sign with offset positioning",
                    "Verify clearances and stability"
                ],
                drawings: ["H2198C", "H2199C", "H2200B", "H2201B"],
                tools: ["Specialized installation equipment", "Offset measurement tools"],
                materials: ["Off-centered post components", "Specialized mounting hardware"]
            }
        },
        {
            id: "s3",
            name: "Multi-Sign Support - Cantilever",
            category: "signs",
            description: "Single post multi-sign support for cantilever-mounted traffic signs",
            drawing: "H2227B",
            manual: "HYD Standard Drawing H2227B",
            hydDrawings: ["H2227B"],
            overview: {
                description: "Single post multi-sign support system designed for cantilever-mounted traffic signs providing multiple sign mounting capability on a single support structure.",
                specifications: ["Multi-sign capability", "Cantilever mounting system", "Single post efficiency", "Multiple sign coordination"]
            },
            usage: {
                applications: [
                    "Multiple traffic sign installations",
                    "Cantilever sign mounting",
                    "Sign cluster installations",
                    "Space-efficient sign systems"
                ],
                conditions: [
                    "Multiple sign requirements",
                    "Cantilever mounting preferred",
                    "Space optimization needs"
                ]
            },
            installation: {
                steps: [
                    "Plan multi-sign layout",
                    "Install reinforced post foundation",
                    "Mount cantilever support arms",
                    "Install multiple signs",
                    "Balance and align sign cluster"
                ],
                drawings: ["H2227B"],
                tools: ["Multi-sign installation equipment", "Cantilever support tools"],
                materials: ["Multi-sign post", "Cantilever arms", "Multiple sign mounting hardware"]
            }
        },
        {
            id: "s4",
            name: "Multi-Sign Support - Street Name & Center Mount",
            category: "signs",
            description: "Single post multi-sign support for street name plates and center-mounted traffic signs",
            drawing: "H2228E",
            manual: "HYD Standard Drawing H2228E",
            hydDrawings: ["H2228E", "H2229C"],
            overview: {
                description: "Integrated multi-sign support system combining street name plate mounting with center-mounted traffic signs on a single post structure.",
                specifications: ["Street name plate integration", "Center-mounted sign capability", "Combined functionality", "Integrated design approach"]
            },
            usage: {
                applications: [
                    "Street name and traffic sign combination",
                    "Center-mounted sign installations",
                    "Integrated signage systems",
                    "Urban streetscape applications"
                ],
                conditions: [
                    "Street identification required",
                    "Combined signage needs",
                    "Urban environment applications"
                ]
            },
            installation: {
                steps: [
                    "Plan combined sign requirements",
                    "Install integrated post system",
                    "Mount street name plates",
                    "Install center-mounted traffic signs",
                    "Coordinate sign visibility and alignment"
                ],
                drawings: ["H2228E", "H2229C"],
                tools: ["Integrated mounting equipment", "Alignment verification tools"],
                materials: ["Multi-purpose post", "Street name mounting hardware", "Traffic sign brackets"]
            }
        },
        {
            id: "s5",
            name: "Multi-Sign Support - Street Name & Cantilever",
            category: "signs",
            description: "Single post multi-sign support for street name plates and cantilever-mounted traffic signs",
            drawing: "H2230C",
            manual: "HYD Standard Drawing H2230C",
            hydDrawings: ["H2230C"],
            overview: {
                description: "Advanced multi-sign support system integrating street name plates with cantilever-mounted traffic signs for comprehensive street signage solutions.",
                specifications: ["Street name plate integration", "Cantilever traffic sign capability", "Comprehensive signage solution", "Advanced design features"]
            },
            usage: {
                applications: [
                    "Comprehensive street signage",
                    "Street name and cantilever sign combination",
                    "Advanced signage systems",
                    "High-functionality installations"
                ],
                conditions: [
                    "Comprehensive signage requirements",
                    "Street identification with traffic control",
                    "Advanced functionality needs"
                ]
            },
            installation: {
                steps: [
                    "Design comprehensive signage layout",
                    "Install advanced post system",
                    "Mount street name identification",
                    "Install cantilever traffic signs",
                    "Optimize visibility and functionality"
                ],
                drawings: ["H2230C"],
                tools: ["Advanced installation equipment", "Multi-function mounting tools"],
                materials: ["Advanced multi-sign post", "Street name components", "Cantilever sign hardware"]
            }
        },
        {
            id: "s6",
            name: "Multi-Sign Perpendicular Support",
            category: "signs",
            description: "Single post multi-sign support for perpendicular traffic signs",
            drawing: "H2268B",
            manual: "HYD Standard Drawing H2268B",
            hydDrawings: ["H2268B", "H2269B", "H2270B"],
            overview: {
                description: "Advanced multi-sign support system designed for traffic signs positioned perpendicular to each other, providing multi-directional sign visibility.",
                specifications: ["Perpendicular sign arrangement", "Multi-directional visibility", "Advanced mounting system", "Optimized sign positioning"]
            },
            usage: {
                applications: [
                    "Multi-directional sign requirements",
                    "Perpendicular sign arrangements",
                    "Complex intersection signage",
                    "Multi-approach sign visibility"
                ],
                conditions: [
                    "Multi-directional visibility needs",
                    "Complex intersection requirements",
                    "Perpendicular sign positioning"
                ]
            },
            installation: {
                steps: [
                    "Plan perpendicular sign arrangement",
                    "Install multi-directional post system",
                    "Mount perpendicular signs",
                    "Optimize multi-directional visibility",
                    "Coordinate intersection signage"
                ],
                drawings: ["H2268B", "H2269B", "H2270B"],
                tools: ["Multi-directional installation equipment", "Perpendicular mounting tools"],
                materials: ["Multi-directional post", "Perpendicular mounting hardware"]
            }
        },
        {
            id: "s7",
            name: "Street Name Plates",
            category: "signs",
            description: "Street name plates with building numbers",
            drawing: "H2205",
            hydDrawings: ["H2205", "H2206D", "H2207", "H2208E", "H2211C"],
            overview: {
                description: "Street name plate system with building number integration for street identification and address reference in urban environments.",
                specifications: ["Street name identification", "Building number integration", "Urban address system", "Multiple mounting options"]
            },
            usage: {
                applications: [
                    "Street identification",
                    "Address reference systems",
                    "Urban navigation aids",
                    "Building number display"
                ],
                conditions: [
                    "Street identification requirements",
                    "Address system needs",
                    "Urban navigation requirements"
                ]
            },
            installation: {
                steps: [
                    "Determine street name requirements",
                    "Plan building number assignments",
                    "Install mounting supports",
                    "Mount street name plates",
                    "Coordinate address numbering system"
                ],
                drawings: ["H2205", "H2206D", "H2207", "H2208E", "H2211C"],
                tools: ["Street name installation tools", "Numbering coordination equipment"],
                materials: ["Street name plates", "Building number components", "Mounting brackets"]
            }
        },
        {
            id: "s8",
            name: "Roadside Directional Signs",
            category: "signs",
            description: "Comprehensive roadside directional signage system",
            drawing: "H2212A",
            hydDrawings: ["H2212A", "H2213", "H2214", "H2215", "H2216", "H2217", "H2218", "H2219", "H2220", "H2221", "H2222", "H2223", "H2224", "H2225A"],
            overview: {
                description: "Comprehensive roadside directional signage system with detailed specifications covering all aspects of directional sign design, mounting, and installation for highway and urban applications.",
                specifications: ["Comprehensive directional system", "14-sheet detailed specification", "Highway and urban applications", "Complete installation guidance"]
            },
            usage: {
                applications: [
                    "Highway directional guidance",
                    "Urban route direction",
                    "Traffic flow management",
                    "Destination identification"
                ],
                conditions: [
                    "Directional guidance requirements",
                    "Route identification needs",
                    "Traffic management applications"
                ]
            },
            installation: {
                steps: [
                    "Plan directional sign strategy",
                    "Coordinate route identification",
                    "Install directional sign supports",
                    "Mount directional signage",
                    "Integrate with traffic management system"
                ],
                drawings: ["H2212A", "H2213", "H2214", "H2215", "H2216", "H2217", "H2218", "H2219", "H2220", "H2221", "H2222", "H2223", "H2224", "H2225A"],
                tools: ["Directional sign installation equipment", "Route coordination tools"],
                materials: ["Directional sign components", "Route identification materials", "Support structures"]
            }
        },
        {
            id: "s9",
            name: "Cantilever Signs",
            category: "signs",
            description: "Cantilever directional signage system",
            drawing: "SSD153(1)",
            hydDrawings: ["SSD153(1)", "SSD153(2)", "SSD153(3)", "SSD153(4)", "SSD153(5)",],
            overview: {
                description: "Comprehensive roadside directional signage system with detailed specifications covering all aspects of directional sign design, mounting, and installation for highway and urban applications.",
                specifications: ["Comprehensive directional system", "14-sheet detailed specification", "Highway and urban applications", "Complete installation guidance"]
            },
            usage: {
                applications: [
                    "Highway directional guidance",
                    "Urban route direction",
                    "Traffic flow management",
                    "Destination identification"
                ],
                conditions: [
                    "Directional guidance requirements",
                    "Route identification needs",
                    "Traffic management applications"
                ]
            },
            installation: {
                steps: [
                    "Plan directional sign strategy",
                    "Coordinate route identification",
                    "Install directional sign supports",
                    "Mount directional signage",
                    "Integrate with traffic management system"
                ],
                drawings: ["H2212A", "H2213", "H2214", "H2215", "H2216", "H2217", "H2218", "H2219", "H2220", "H2221", "H2222", "H2223", "H2224", "H2225A"],
                tools: ["Directional sign installation equipment", "Route coordination tools"],
                materials: ["Directional sign components", "Route identification materials", "Support structures"]
            }
        },
        {
            id: "s10",
            name: "Gantry Directional Signs",
            category: "signs",
            description: "Overhead gantry directional signage system",
            drawing: "SSD151(1)-A",
            hydDrawings: ["SSD151(1)-A", "SSD151(2)-A", "SSD151(3)-A", "SSD151(4)"],
            overview: {
                description: "Comprehensive roadside directional signage system with detailed specifications covering all aspects of directional sign design, mounting, and installation for highway and urban applications.",
                specifications: ["Comprehensive directional system", "14-sheet detailed specification", "Highway and urban applications", "Complete installation guidance"]
            },
            usage: {
                applications: [
                    "Highway directional guidance",
                    "Urban route direction",
                    "Traffic flow management",
                    "Destination identification"
                ],
                conditions: [
                    "Directional guidance requirements",
                    "Route identification needs",
                    "Traffic management applications"
                ]
            },
            installation: {
                steps: [
                    "Plan directional sign strategy",
                    "Coordinate route identification",
                    "Install directional sign supports",
                    "Mount directional signage",
                    "Integrate with traffic management system"
                ],
                drawings: ["H2212A", "H2213", "H2214", "H2215", "H2216", "H2217", "H2218", "H2219", "H2220", "H2221", "H2222", "H2223", "H2224", "H2225A"],
                tools: ["Directional sign installation equipment", "Route coordination tools"],
                materials: ["Directional sign components", "Route identification materials", "Support structures"]
            }
        },
        {
            id: "s11",
            name: "Visitor Directional Signs",
            category: "signs",
            description: "Directional signage system specifically designed for visitors",
            drawing: "H2301",
            manual: "HYD Standard Drawing H2301",
            hydDrawings: ["H2301", "H2302", "H2303", "H2304"],
            overview: {
                description: "Specialized directional signage system designed specifically for visitor guidance with tourist-friendly design and information presentation.",
                specifications: ["Visitor-specific design", "Tourist-friendly information", "Multi-sheet comprehensive system", "Visitor guidance optimization"]
            },
            usage: {
                applications: [
                    "Tourist area guidance",
                    "Visitor destination direction",
                    "Tourism infrastructure",
                    "Visitor information systems"
                ],
                conditions: [
                    "Tourist area applications",
                    "Visitor guidance requirements",
                    "Tourism infrastructure needs"
                ]
            },
            installation: {
                steps: [
                    "Plan visitor guidance strategy",
                    "Identify key visitor destinations",
                    "Install visitor-friendly sign supports",
                    "Mount visitor directional signs",
                    "Integrate with tourism information system"
                ],
                drawings: ["H2301", "H2302", "H2303", "H2304"],
                tools: ["Visitor sign installation equipment", "Tourism coordination tools"],
                materials: ["Visitor-specific sign components", "Tourism information materials"]
            }
        },
        {
            id: "s12",
            name: "Pedestrian Directional Signs",
            category: "signs",
            description: "Pedestrian directional sign support system",
            drawing: "H2232C",
            manual: "HYD Standard Drawing H2232C",
            hydDrawings: ["H2232C"],
            overview: {
                description: "Specialized directional sign support system designed specifically for pedestrian navigation and guidance applications.",
                specifications: ["Pedestrian-scale design", "Walking route guidance", "Pedestrian-friendly information", "Urban pedestrian applications"]
            },
            usage: {
                applications: [
                    "Pedestrian navigation",
                    "Walking route guidance",
                    "Pedestrian area signage",
                    "Urban walkway direction"
                ],
                conditions: [
                    "Pedestrian guidance requirements",
                    "Walking area applications",
                    "Urban pedestrian environments"
                ]
            },
            installation: {
                steps: [
                    "Plan pedestrian guidance routes",
                    "Install pedestrian-scale supports",
                    "Mount pedestrian directional signs",
                    "Coordinate with pedestrian infrastructure",
                    "Verify pedestrian accessibility"
                ],
                drawings: ["H2232C"],
                tools: ["Pedestrian sign installation equipment"],
                materials: ["Pedestrian-scale sign components", "Walking guidance materials"]
            }
        },
        {
            id: "s13",
            name: "Lighting Column Sign Mounting",
            category: "signs",
            description: "Street name plate and traffic sign mounting on public lighting columns",
            drawing: "H2231",
            manual: "HYD Standard Drawing H2231",
            hydDrawings: ["H2231"],
            overview: {
                description: "Specialized mounting system for installing street name plates and traffic signs on existing public lighting columns, maximizing infrastructure efficiency.",
                specifications: ["Lighting column integration", "Existing infrastructure utilization", "Sign and lighting coordination", "Space-efficient design"]
            },
            usage: {
                applications: [
                    "Lighting column sign integration",
                    "Existing infrastructure utilization",
                    "Space-efficient signage",
                    "Combined lighting and signage"
                ],
                conditions: [
                    "Existing lighting column availability",
                    "Space optimization requirements",
                    "Infrastructure integration needs"
                ]
            },
            installation: {
                steps: [
                    "Assess lighting column suitability",
                    "Design sign mounting integration",
                    "Install lighting column brackets",
                    "Mount signs on lighting infrastructure",
                    "Coordinate lighting and signage functions"
                ],
                drawings: ["H2231"],
                tools: ["Lighting column mounting equipment"],
                materials: ["Lighting column brackets", "Integration hardware"]
            }
        },
        
    ],
    signals: [
        {
            id: "sg1",
            name: "Traffic Signal Pole",
            category: "signals",
            description: "Foundation and mini-drawpit for traffic signal pole installation",
            drawing: "H2146C",
            manual: "HYD Standard Drawing H2146C",
            hydDrawings: ["H2146C"],
            overview: {
                description: "Complete traffic signal pole installation system including foundation design and integrated mini-drawpit for electrical connections and maintenance access.",
                specifications: ["Signal pole foundation", "Mini-drawpit integration", "Electrical connection provisions", "Maintenance access features"]
            },
            usage: {
                applications: [
                    "Traffic signal installations",
                    "Pedestrian crossing signals",
                    "Junction control systems",
                    "Traffic management points"
                ],
                conditions: [
                    "Traffic signal requirements",
                    "Electrical infrastructure needs",
                    "Foundation stability requirements"
                ]
            },
            installation: {
                steps: [
                    "Excavate foundation to specified depth",
                    "Install reinforcement and formwork",
                    "Construct integrated mini-drawpit",
                    "Pour concrete foundation",
                    "Install signal pole and electrical connections"
                ],
                drawings: ["H2146C"],
                tools: ["Foundation excavation equipment", "Concrete placement tools", "Electrical installation equipment"],
                materials: ["Signal pole", "Foundation concrete", "Reinforcement steel", "Electrical conduits"]
            }
        },
        {
            id: "sg2",
            name: "ATC Drawpit",
            category: "signals",
            description: "Area Traffic Control drawpit systems - single and twin concrete draw/jointing chambers",
            drawing: "H2159B",
            manual: "HYD Standard Drawing H2159B",
            hydDrawings: ["H2159B", "H2160A", "H2161A", "H2162A", "H2168A", "H2169B", "H2180A"],
            overview: {
                description: "Comprehensive Area Traffic Control drawpit system including single concrete draw/jointing chamber for shallow depths, and Type A & Type B twin concrete chambers for deeper installations, with covers and frames.",
                specifications: ["Single concrete draw/jointing chamber (≤850mm depth)", "Type A twin concrete chamber (>850mm depth)", "Type B twin concrete chamber (>850mm depth)", "Heavy duty and light duty covers", "Cable draw-in pit capability"]
            },
            usage: {
                applications: [
                    "Area traffic control systems",
                    "Traffic signal cable management", 
                    "Control equipment housing",
                    "Electrical infrastructure protection",
                    "Shallow depth installations (≤850mm)",
                    "Deep installations (>850mm)"
                ],
                conditions: [
                    "Traffic control system requirements",
                    "Cable management needs",
                    "Equipment protection requirements",
                    "Variable depth requirements"
                ]
            },
            installation: {
                steps: [
                    "Determine required depth and chamber type",
                    "Excavate drawpit to specified dimensions", 
                    "Install appropriate chamber type (single or twin)",
                    "Install cable draw-in provisions",
                    "Mount appropriate cover and frame systems",
                    "Connect to traffic control infrastructure"
                ],
                drawings: ["H2159B", "H2160A", "H2161A", "H2162A", "H2168A", "H2169B", "H2180A"],
                tools: ["Drawpit construction equipment", "Heavy lifting equipment", "Cable installation tools"],
                materials: ["Concrete chamber construction", "Cast iron covers and frames", "Cable management systems"]
            }
        },
        {
            id: "sg3",
            name: "E&M Earth Pit",
            category: "signals",
            description: "Electrical and Mechanical earthing pit system",
            drawing: "H2165B",
            manual: "HYD Standard Drawing H2165B",
            hydDrawings: ["H2165B", "H2166B", "H2170A", "H2171"],
            overview: {
                description: "Specialized Electrical and Mechanical earthing pit system including concrete earth pit construction, cover and frame details, and concentrator pit integration.",
                specifications: ["Concrete earth pit construction", "Specialized cover & frame", "Concentrator pit integration", "Earthing system provisions"]
            },
            usage: {
                applications: [
                    "Electrical system earthing",
                    "Equipment grounding systems",
                    "Safety earthing installations",
                    "E&M infrastructure protection"
                ],
                conditions: [
                    "Electrical safety requirements",
                    "Grounding system needs",
                    "E&M equipment installations"
                ]
            },
            installation: {
                steps: [
                    "Excavate earth pit to specifications",
                    "Install concrete pit construction",
                    "Install earthing electrode systems",
                    "Mount specialized cover and frame",
                    "Connect to electrical distribution system"
                ],
                drawings: ["H2165B", "H2166B", "H2170A", "H2171"],
                tools: ["Earth pit construction equipment", "Earthing installation tools", "Electrical testing equipment"],
                materials: ["Concrete pit materials", "Earthing electrodes", "Cover and frame systems", "Electrical connections"]
            }
        },
        {
            id: "sg4",
            name: "Loop Detector",
            category: "signals",
            description: "Vehicle loop detector systems for traffic control",
            drawing: "H2181A",
            manual: "HYD Standard Drawing H2181A",
            hydDrawings: ["H2181A", "H2182A", "H2183B"],
            overview: {
                description: "Complete vehicle loop detector system including typical slot construction for ATC, mini drawpit details, and cover and frame specifications for traffic detection.",
                specifications: ["Loop detector slot design", "Mini drawpit integration", "Detection system provisions", "Cover and frame details"]
            },
            usage: {
                applications: [
                    "Vehicle detection systems",
                    "Traffic flow monitoring",
                    "Signal timing control",
                    "Traffic data collection"
                ],
                conditions: [
                    "Traffic detection requirements",
                    "Signal control system needs",
                    "Traffic monitoring applications"
                ]
            },
            installation: {
                steps: [
                    "Cut loop detector slots in pavement",
                    "Install loop detector cables",
                    "Construct mini drawpit",
                    "Install cover and frame system",
                    "Connect to traffic control system"
                ],
                drawings: ["H2181A", "H2182A", "H2183B"],
                tools: ["Pavement cutting equipment", "Loop installation tools", "Electrical connection equipment"],
                materials: ["Loop detector cables", "Sealant materials", "Mini drawpit components", "Cover and frame systems"]
            }
        },
        {
            id: "sg5",
            name: "Controller Plinth",
            category: "signals",
            description: "Traffic controller plinth systems for various controller types",
            drawing: "H2164C",
            manual: "HYD Standard Drawing H2164C",
            hydDrawings: ["H2163B", "H2164C", "H2167A", "H2184B", "H2185B", "H2186C"],
            overview: {
                description: "Comprehensive traffic controller plinth system including Type Delta 4 controller details, Type C 2000 & C 3000 controller plinths, T125B controller base, and fabricated steel recessed covers.",
                specifications: ["Multiple controller type compatibility", "Delta 4 controller support", "C 2000 & C 3000 controller types", "T125B controller base", "Fabricated steel recessed covers"]
            },
            usage: {
                applications: [
                    "Traffic controller installations",
                    "Signal timing equipment housing",
                    "Control system protection",
                    "Equipment mounting platforms"
                ],
                conditions: [
                    "Traffic controller requirements",
                    "Equipment protection needs",
                    "Signal system installations"
                ]
            },
            installation: {
                steps: [
                    "Prepare controller plinth foundation",
                    "Install plinth base construction",
                    "Mount controller equipment",
                    "Install fabricated steel covers",
                    "Connect to signal control network"
                ],
                drawings: ["H2163B", "H2164C", "H2167A", "H2184B", "H2185B", "H2186C"],
                tools: ["Plinth construction equipment", "Controller mounting tools", "Electrical installation equipment"],
                materials: ["Plinth construction materials", "Controller mounting hardware", "Steel cover systems", "Electrical connections"]
            }
        }
    ],
    bollards: [
        {
            id: "b1",
            name: "Non-Illuminated Retro-Reflective Traffic Bollard (NRTB)",
            category: "bollards",
            description: "Non-illuminated retro-reflective traffic bollard for road delineation",
            drawing: "HLDSDGE06-CL0047A",
            manual: "HLD Standard Drawing HLDSDGE06-CL0047A",
            hydDrawings: ["HLDSDGE06-CL0047A"],
            overview: {
                description: "Non-illuminated retro-reflective traffic bollard system designed for road delineation and traffic guidance with high-visibility retro-reflective materials for enhanced nighttime visibility.",
                specifications: ["Non-illuminated design", "Retro-reflective materials", "Traffic delineation capability", "High nighttime visibility"]
            },
            usage: {
                applications: [
                    "Road delineation",
                    "Traffic lane separation",
                    "Pedestrian area protection",
                    "Vehicle guidance systems"
                ],
                conditions: [
                    "Traffic delineation requirements",
                    "Nighttime visibility needs",
                    "Non-powered installation preference"
                ]
            },
            installation: {
                steps: [
                    "Determine bollard positioning requirements",
                    "Prepare foundation according to specifications",
                    "Install bollard mounting system",
                    "Mount retro-reflective bollard",
                    "Verify visibility and alignment"
                ],
                drawings: ["HLDSDGE06-CL0047A"],
                tools: ["Foundation preparation equipment", "Bollard installation tools"],
                materials: ["NRTB bollard units", "Foundation materials", "Mounting hardware"]
            }
        },
        {
            id: "b2",
            name: "Omnidirectional Non-Illuminated Retro-Reflective Traffic Bollard (O-NRTB)",
            category: "bollards",
            description: "Omnidirectional non-illuminated retro-reflective traffic bollard for 360-degree visibility",
            drawing: "HLDSDGE06-CL0058",
            manual: "HLD Standard Drawing HLDSDGE06-CL0058",
            hydDrawings: ["HLDSDGE06-CL0058"],
            overview: {
                description: "Omnidirectional non-illuminated retro-reflective traffic bollard system providing 360-degree visibility for comprehensive traffic guidance and area delineation.",
                specifications: ["Omnidirectional visibility", "360-degree retro-reflection", "Non-illuminated design", "Comprehensive area coverage"]
            },
            usage: {
                applications: [
                    "Central island delineation",
                    "Roundabout guidance",
                    "Multi-directional traffic areas",
                    "Complex intersection guidance"
                ],
                conditions: [
                    "Multi-directional visibility requirements",
                    "Complex traffic pattern areas",
                    "Central positioning needs"
                ]
            },
            installation: {
                steps: [
                    "Plan omnidirectional visibility requirements",
                    "Prepare centralized foundation",
                    "Install omnidirectional mounting system",
                    "Mount O-NRTB bollard",
                    "Verify 360-degree visibility performance"
                ],
                drawings: ["HLDSDGE06-CL0058"],
                tools: ["Specialized mounting equipment", "Visibility verification tools"],
                materials: ["O-NRTB bollard units", "Omnidirectional mounting hardware", "Foundation materials"]
            }
        },
        {
            id: "b3",
            name: "Traffic Bollard",
            category: "bollards",
            description: "Standard traffic bollard with concrete plinth foundation",
            drawing: "H2140A",
            manual: "HYD Standard Drawing H2140A",
            hydDrawings: ["H2140A", "H2141A"],
            overview: {
                description: "Standard traffic bollard system with detailed concrete plinth foundation design for reliable traffic control and pedestrian area protection.",
                specifications: ["Concrete plinth foundation", "Two-sheet detailed design", "Standard traffic control", "Durable construction"]
            },
            usage: {
                applications: [
                    "Traffic control points",
                    "Pedestrian area protection",
                    "Vehicle access restriction",
                    "Road boundary definition"
                ],
                conditions: [
                    "Traffic control requirements",
                    "Pedestrian protection needs",
                    "Vehicle restriction applications"
                ]
            },
            installation: {
                steps: [
                    "Excavate for concrete plinth foundation",
                    "Install reinforcement and formwork",
                    "Pour concrete plinth base",
                    "Mount traffic bollard system",
                    "Apply finishing and protective coatings"
                ],
                drawings: ["H2140A", "H2141A"],
                tools: ["Foundation construction equipment", "Concrete placement tools"],
                materials: ["Traffic bollard", "Concrete for plinth", "Reinforcement steel", "Mounting hardware"]
            }
        },
        {
            id: "b4",
            name: "G.I. Bollard",
            category: "bollards",
            description: "Galvanized Iron bollard for standard applications",
            drawing: "H2179C",
            manual: "HYD Standard Drawing H2179C",
            hydDrawings: ["H2179C"],
            overview: {
                description: "Galvanized Iron bollard system providing durable and cost-effective traffic control and area delineation with corrosion-resistant finish.",
                specifications: ["Galvanized Iron construction", "Corrosion-resistant finish", "Standard height design", "Cost-effective solution"]
            },
            usage: {
                applications: [
                    "Standard traffic control",
                    "Parking area delineation",
                    "Pedestrian walkway protection",
                    "General area restriction"
                ],
                conditions: [
                    "Standard bollard requirements",
                    "Cost-effective installation needs",
                    "General purpose applications"
                ]
            },
            installation: {
                steps: [
                    "Mark bollard installation positions",
                    "Prepare foundation holes",
                    "Install G.I. bollard posts",
                    "Secure with concrete or mounting system",
                    "Apply final protective treatments"
                ],
                drawings: ["H2179C"],
                tools: ["Post installation equipment", "Foundation preparation tools"],
                materials: ["G.I. bollard posts", "Mounting materials", "Protective treatments"]
            }
        },
        {
            id: "b5",
            name: "Frangible Bollards for Cycle Track",
            category: "bollards",
            description: "Type 1 and Type 2 frangible bollards designed for cycle track applications",
            drawing: "H2189",
            manual: "HYD Standard Drawing H2189",
            hydDrawings: ["H2189"],
            overview: {
                description: "Specialized Type 1 and Type 2 frangible bollard system designed specifically for cycle track applications with breakaway capability for safety.",
                specifications: ["Type 1 and Type 2 designs", "Frangible breakaway capability", "Cycle track specific design", "Safety-oriented construction"]
            },
            usage: {
                applications: [
                    "Cycle track delineation",
                    "Cyclist safety protection",
                    "Cycle path boundary definition",
                    "Bicycle area access control"
                ],
                conditions: [
                    "Cycle track applications",
                    "Cyclist safety requirements",
                    "Breakaway safety needs"
                ]
            },
            installation: {
                steps: [
                    "Plan cycle track bollard positioning",
                    "Install frangible mounting systems",
                    "Mount Type 1 or Type 2 bollards as required",
                    "Test breakaway functionality",
                    "Verify cyclist safety clearances"
                ],
                drawings: ["H2189"],
                tools: ["Cycle track installation equipment", "Frangible mounting tools"],
                materials: ["Type 1 and Type 2 frangible bollards", "Breakaway mounting systems"]
            }
        },
        {
            id: "b6",
            name: "Self-Erective Tubular Marker on Cycle Track",
            category: "bollards",
            description: "Self-erecting tubular marker system for cycle track applications",
            drawing: "H2189",
            manual: "HYD Standard Drawing H2189",
            hydDrawings: ["H2189"],
            overview: {
                description: "Self-erecting tubular marker system designed for cycle track applications with automatic recovery capability after impact for continuous guidance.",
                specifications: ["Self-erecting capability", "Tubular marker design", "Cycle track specific application", "Impact recovery system"]
            },
            usage: {
                applications: [
                    "Cycle track guidance",
                    "Flexible delineation systems",
                    "High-impact area marking",
                    "Resilient boundary definition"
                ],
                conditions: [
                    "High-impact environments",
                    "Flexible delineation needs",
                    "Self-recovery requirements"
                ]
            },
            installation: {
                steps: [
                    "Prepare self-erecting marker foundations",
                    "Install spring-loaded base systems",
                    "Mount tubular marker components",
                    "Test self-erecting functionality",
                    "Verify impact recovery performance"
                ],
                drawings: ["H2189"],
                tools: ["Spring mechanism installation tools", "Impact testing equipment"],
                materials: ["Self-erecting tubular markers", "Spring-loaded mounting systems"]
            }
        },
        {
            id: "b8",
            name: "Bollard with Chains Combination",
            category: "bollards",
            description: "Combined bollard and chain system for comprehensive area control",
            drawing: "h2308",
            manual: "TD DC 2/2022",
            hydDrawings: ["H2308"],
            overview: {
                description: "Integrated bollard and rail combination system providing comprehensive area control with both point and linear barrier capabilities.",
                specifications: ["Combined bollard and rail design", "Integrated system approach", "Comprehensive area control", "Point and linear barriers"]
            },
            usage: {
                applications: [
                    "Comprehensive area control",
                    "Mixed barrier requirements",
                    "Integrated boundary systems",
                    "Multi-function delineation"
                ],
                conditions: [
                    "Combined barrier needs",
                    "Integrated system requirements",
                    "Multi-function applications"
                ]
            },
            installation: {
                steps: [
                    "Design integrated bollard and rail layout",
                    "Install combined foundation systems",
                    "Mount bollard components",
                    "Install connecting rail sections",
                    "Coordinate integrated system functionality"
                ],
                drawings: ["H2139B"],
                tools: ["Integrated installation equipment", "Combined mounting tools"],
                materials: ["Bollard and rail components", "Integrated mounting systems", "Connection hardware"]
            }
        },
        {
            id: "b9",
            name: "Removable Bollards and Railings",
            category: "bollards",
            description: "Removable bollard and railing system for temporary traffic control",
            drawing: "H2259",
            manual: "HYD Standard Drawing H2259",
            hydDrawings: ["H2259", "H2260", "H2261", "H2262"],
            overview: {
                description: "Comprehensive removable bollard and railing system designed for temporary traffic control and flexible area management with four-sheet detailed specifications covering all installation and removal procedures.",
                specifications: ["Removable design capability", "Four-sheet comprehensive system", "Temporary installation capability", "Flexible area management", "Easy installation and removal"]
            },
            usage: {
                applications: [
                    "Temporary traffic control",
                    "Event area management",
                    "Construction zone delineation",
                    "Flexible pedestrian control",
                    "Seasonal area restrictions",
                    "Emergency traffic diversion"
                ],
                conditions: [
                    "Temporary installation requirements",
                    "Flexible area control needs",
                    "Easy removal requirements",
                    "Event-based applications"
                ]
            },
            installation: {
                steps: [
                    "Plan temporary installation layout",
                    "Prepare removable foundation systems",
                    "Install removable bollard mounting points",
                    "Mount removable railing components",
                    "Test removal and reinstallation procedures",
                    "Establish maintenance and storage protocols"
                ],
                drawings: ["H2259", "H2260", "H2261", "H2262"],
                tools: ["Removable mounting equipment", "Temporary installation tools", "Storage and transport equipment"],
                materials: ["Removable bollard units", "Removable railing sections", "Temporary mounting hardware", "Storage systems"]
            }
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
        item.description.toLowerCase().includes(query.toLowerCase()) 
    );
}

// Helper function to generate HYD drawing URL from drawing code
function getDrawingUrl(drawingCode) {
    if (!drawingCode) return null;
    
    // Special list of drawing codes that require uppercase .PDF extension
    const uppercasePdfCodes = [
        "SSD153(1)", "SSD153(2)", "SSD153(3)", "SSD153(4)", "SSD153(5)",
        "SSD151(1)-A", "SSD151(2)-A", "SSD151(3)-A", "SSD151(4)"
    ];
    
    // Handle SSD (Structure Standard Drawings) codes
    if (drawingCode.toUpperCase().startsWith('SSD')) {
        const cleanCode = drawingCode.toUpperCase().replace(/[^A-Z0-9()]/g, '');
        const extension = uppercasePdfCodes.includes(drawingCode.toUpperCase()) ? '.PDF' : '.pdf';
        return `https://www.hyd.gov.hk/en/technical_references/standard_drawings/structures_standard_drawings/doc/${cleanCode}${extension}`;
    }
    
    // Convert to lowercase and remove special characters except brackets for URL
    const cleanCode = drawingCode.toLowerCase().replace(/[^a-z0-9()]/g, '');
    
    // Determine section based on drawing code prefix
    let section = 1; // default
    if (cleanCode.startsWith('h2')) section = 2;
    else if (cleanCode.startsWith('h3')) section = 3;
    else if (cleanCode.startsWith('h4')) section = 4;
    else if (cleanCode.startsWith('h5')) section = 5;
    
    // Check if this drawing code requires uppercase PDF extension
    const extension = uppercasePdfCodes.includes(drawingCode.toUpperCase()) ? '.PDF' : '.pdf';
    
    return `https://www.hyd.gov.hk/en/technical_references/standard_drawings/hyd_standard_drawings/doc/section_${section}/pdf/${cleanCode}${extension}`;
}

// Helper function to generate manual URL from manual code
function getManualUrl(manualCode) {
    if (!manualCode) return null;
    
    // Handle different manual types
    if (manualCode.toLowerCase().startsWith('hyd-gn')) {
        // Guidance Notes format: hyd-gn042a -> gn042a.pdf
        const cleanCode = manualCode.toLowerCase().replace('hyd-', '');
        return `https://www.hyd.gov.hk/en/technical_references/technical_document/guidance_notes/pdf/${cleanCode}.pdf`;
    } else if (manualCode.toLowerCase().startsWith('h')) {
        // If it's actually a drawing code, use drawing URL
        return getDrawingUrl(manualCode);
    } else if (manualCode.toLowerCase().startsWith('hyd-sdm')) {
        // Structures Design Manual format: hyd-sdm
        return `https://www.hyd.gov.hk/en/technical_references/technical_document/structures_design_manual_2013/doc/SDM2013.pdf`;
    } else if (manualCode.toLowerCase().startsWith('tpdm')){
        const cleanCode = manualCode.match(/(?<=Volume )(.*?)(?= Chapter)/g)[0];
        return `https://www.td.gov.hk/filemanager/en/content_5055/V${cleanCode}_12_2024.pdf`;
    }
    
    // Default fallback for other manual types
    return null;
}
