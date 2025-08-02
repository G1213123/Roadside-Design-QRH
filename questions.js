// Import HYD Standard Drawings Database
// This would be loaded from hyd-drawings-database.js in a real implementation
const furnitureDatabase = {
    "road": [
        {
            id: "rg1",
            name: "Alignments",
            category: "road",
            description: "Horizontal alignment design standards including design speeds, curvature, and sight distances",
            manuals: ["TPDM Volume 2 Chapter 3.3"],
            usage: {
                description: "Standards for horizontal road alignment including design speed selection, minimum curve radii, superelevation, and sight distance requirements. Covers general principles for different road types and locations.",
                specifications: [
                    "Design speeds: 50-100 km/h based on road type and access control",
                    "Minimum radius categories: R1-R8 (44m-2800m based on design speed)",
                    "Superelevation: 2.5-10% based on curve radius and speed",
                    "Sight distances: 50-295m (desirable minimum based on design speed)",
                    "Rural vs urban design considerations",
                    "Single vs dual carriageway alignment principles"
                ],
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
            manuals: ["TPDM Volume 2 Chapter 3.3"],
            usage: {
                description: "Standards for vertical road profile design including maximum gradients, vertical curve design, and climbing lane provision. Covers both crest and sag curve requirements with minimum K-values for different design speeds.",
                specifications: [
                    "Maximum gradients: 4% desirable, 8% absolute for trunk roads",
                    "Minimum drainage gradient: 0.67% for effective drainage",
                    "Crest curve K-values: 6.5-182 based on design speed",
                    "Sag curve K-values: 9-37 based on design speed",
                    "Climbing lane width: 10m total (3.2m + 3.4m + 3.4m)",
                    "Dual carriageway climbing lanes: based on traffic flow vs gradient"
                ],
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
            manuals: ["TPDM Volume 2 Chapter 3.4"],
            usage: {
                description: "Standards for crossfall design including normal crossfall, superelevation transitions, and drainage requirements. Covers crossfall requirements for different road types and junction treatments.",
                specifications: [
                    "Normal crossfall: 2.5% from crown to edge",
                    "Footway crossfall: 2-3.3% for drainage",
                    "Adverse camber elimination on curves >R7",
                    "Junction crossfall: minor road graded to major road channels",
                    "Urban superelevation: limited to 4-5% maximum"
                ],
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
            manuals: ["TPDM Volume 2 Chapter 3.3"],
            usage: {
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
                ],
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
                    manuals: ["TPDM Volume 2 Chapter 3.3.4.2, County Surveyors Society Tables"]
                },
                {
                    name: "Constrained Location Transitions",
                    use: "Dense urban areas, increased acceleration rate 0.6+ m/sec³",
                    manuals: ["TPDM Volume 2 Chapter 3.3.4.5"]
                },
                {
                    name: "Elevated Structure Curves",
                    use: "Complex geometry areas, circular curves replacing clothoids",
                    manuals: ["TPDM Volume 2 Chapter 3.3.4.3"]
                },
                {
                    name: "Rural High-Speed Curves",
                    use: "Design speeds ≥80 km/h with 7% maximum superelevation",
                    manuals: ["TPDM Volume 2 Chapter 3.3.3.3"]
                },
                {
                    name: "Urban At-Grade Roads",
                    use: "Built-up areas with junctions, 4-5% maximum superelevation",
                    manuals: ["TPDM Volume 2 Chapter 3.3.3.4"]
                },
                {
                    name: "Multi-Lane Highway Transitions",
                    use: "Wide carriageways requiring >1% edge profile variation",
                    manuals: ["TPDM Volume 2 Chapter 3.3.4.5"]
                },
                {
                    name: "Heavy Vehicle Routes",
                    use: "Areas with stationary/slow heavy goods vehicles, avoid 10%",
                    manuals: ["TPDM Volume 2 Chapter 3.3.3.3"]
                }
            ]
        },
        {
            id: "rg5",
            name: "Road Width",
            category: "road",
            description: "Carriageway width standards for different road types and traffic conditions",
            manuals: ["TPDM Volume 2 Chapter 3.4"],
            usage: {
                description: "Minimum carriageway width requirements for urban and rural roads across all hierarchy levels. Includes widening requirements for curves, parking provisions, and special applications like climbing lanes and service roads.",
                specifications: [
                    "Urban single carriageway: 7.3-13.5m (2-4 lanes), refer to Table 3.4.2.1",
                    "Urban dual carriageway: 6.75-14.6m per direction",
                    "Rural single carriageway: 6-14.5m (2-4 lanes)",
                    "Rural dual carriageway: 7.3-14.6m per direction",
                    "Service roads: 4.5-7.3m based on vehicle types",
                    "Curve widening: additional 0.3-1.9m for radii <400m, refer to Table 3.4.4.1",
                    "Check road width enough to achieve sight distance, further widening is needed when < R3"
                ],
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
            manuals: ["TPDM Volume 2 Chapter 3.3"],
        },
        {
            id: "rg8",
            name: "Sight Distance",
            category: "road",
            description: "Forward visibility requirements for safe driving including stopping and junction sight distances",
            manuals: ["TPDM Volume 2 Chapter 3.3.5"],
            usage: {
                description: "Standards for sight distance provision on roads including stopping sight distances, junction visibility, and horizontal curve sight requirements. Covers measurement methods and clearance requirements for safe forward visibility.",
                specifications: [
                    "Sight distances by design speed: 50m (50 km/h) to 295m (120 km/h), refer to Table 3.3.5.1",
                    "Driver eye height: 1.05-2.0m above road surface",
                    "Target object height: 0.26-2.0m above road surface",
                    "Horizontal curve clearance: 3m (80 km/h) to 4m (≥100 km/h)",
                    "Low radius curve (<R3) clearance: 3-4m from carriageway edge"
                ],
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
                    manuals: ["TPDM V2C3.3.5.1 Table 3.3.5.1"]
                },
                {
                    name: "Urban Road Visibility",
                    use: "Low-speed roads with unrestricted pedestrian/vehicle access",
                    manuals: ["TPDM V2C3.3.5.4(i)"]
                },
                {
                    name: "High-Speed Curve Clearance",
                    use: "≥80 km/h roads with radius <R3, 3-4m clearance required",
                    manuals: ["TPDM V2C3.3.5.4(ii)"]
                },
                {
                    name: "Standard Curve Clearance",
                    use: "≥80 km/h roads with radius ≥R3, reduced clearance acceptable",
                    manuals: ["TPDM V2C3.3.5.4(iii)"]
                }
            ]
        },
        {
            id: "rg13",
            name: "Clearance",
            category: "road",
            description: "Vertical and horizontal clearance requirements for structures and obstructions",
            manuals: ["TPDM Volume 2 Chapter 3.5"],
            usage: {
                description: "Standards for vertical clearances above carriageways and horizontal clearances from carriageway edges to obstructions. Includes requirements for bridges, sign gantries, utilities, and roadside furniture.",
                specifications: [
                    "Vertical clearance over carriageways: 5.1m new construction, 5.0m maintained",
                    "Sign gantry clearance: 5.5m new, 5.4m maintained",
                    "Footway clearance: 3.5m minimum",
                    "Horizontal clearance: 500mm-1000mm based on design speed",
                    "Railway power wire clearance: 5.6m minimum",
                    "Pedestrian subway: 2.3-2.6m based on length"
                ],
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
                    manuals: ["TPDM V2C3.5.1.1 Table 3.5.1.1"]
                },
                {
                    name: "Sign Gantry Clearance",
                    use: "Overhead sign structures: 5.5m new, 5.4m maintained",
                    manuals: ["TPDM V2C3.5.1.1 Table 3.5.1.1"]
                },
                {
                    name: "Railway Crossing Clearance",
                    use: "Structures over railway: 5.6m minimum, subject to MTR consultation",
                    manuals: ["TPDM V2C3.5.1.1 Table 3.5.1.1"]
                },
                {
                    name: "Low-Speed Horizontal Clearance",
                    use: "≤50 km/h roads: 500-600mm clearance based on crossfall",
                    manuals: ["TPDM V2C3.5.2.1 Table 3.5.2.1"]
                },
                {
                    name: "High-Speed Horizontal Clearance",
                    use: "≥80 km/h roads: 1000mm clearance regardless of height",
                    manuals: ["TPDM V2C3.5.2.1 Table 3.5.2.1"]
                },
                {
                    name: "Construction Temporary Clearance",
                    use: "Temporary reduction to 4.7m during construction with signing",
                    manuals: ["TPDM V2C3.5.1.3"]
                }
            ]
        },
        {
            id: "rg14",
            name: "Run-in/out",
            category: "road",
            description: "Vehicle access construction across footways including standard, skew, and petrol station variants",
            drawings: ["h1113c", "h1114b", "h1115b", "h1116b"],
            manuals: ["TPDM Volume 2 Chapter 3.6"],
            usage: {
                description: "Construction details for vehicle run-ins and run-outs providing access across footways from carriageways to private properties. Run-ins should be restricted on Trunk Roads, Primary Distributors, and District Distributors wherever possible, and must comply with location restrictions relative to junctions, curves, and other facilities.",
                specifications: [
                    "Width: Minimum compatible with satisfactory operation, minimum 7.3m for container vehicles per TPDM 3.6.3.1",
                    "Visibility: 4.5m sight line from run-in edge, with distances per Table 3.6.3.1 (60m-150m based on road design speed)",
                    "Location restrictions: 60m from signal-controlled junctions (45m on minor roads), 30m from roundabouts",
                    "Concrete: Grade 40/20 concrete construction per H1113C",
                    "Reinforcement: Fabric reinforcement (C283 of B.S.4483) min. weight 2.61kg/m²",
                    "Thickness: 150mm concrete with 60±10mm cover to reinforcement",
                    "Membrane: 0.125mm polythene sheeting waterproof barrier",
                    "Crossfall: 3% drainage gradient maintained",
                    "Joints: Contraction joint required if L>20m per Drawing H1106",
                    "Utility provision: Spare PVC ducts (100mm for ATC/CCTV, 150mm for power cables)"
                ],
                applications: [
                    "Private property vehicle access across footways",
                    "Commercial and industrial vehicle access points", 
                    "Car park and loading facility entrances",
                    "Container vehicle access (minimum 7.3m width required)",
                    "Petrol filling station access with underground services",
                    "Skew run-ins for angled access where perpendicular access not possible",
                    "Short Term Tenancy (STT) and Short Term Waiver (STW) site access"
                ],
                conditions: [
                    "Restricted on Trunk Roads and Primary Distributors per TPDM 3.6.1",
                    "Compliance with location restrictions: away from junctions, curves, bus stops, pedestrian crossings",
                    "Visibility requirements per TPDM Table 3.6.3.1 (sight distances 60m-150m based on road speed)",
                    "Distance requirements: 60m from signal junctions, 30m from roundabouts, 30m from uncontrolled junctions",
                    "Normally one run-in and one run-out maximum per frontage",
                    "Underground utility coordination for spare duct requirements"
                ]
            },
            composition: {
                description: "Construction details for vehicle run-ins and run-outs providing access across footways from carriageways to private properties. Run-ins should be restricted on Trunk Roads, Primary Distributors, and District Distributors wherever possible, and must comply with location restrictions relative to junctions, curves, and other facilities.",
                specifications: [
                    "Width: Minimum compatible with satisfactory operation, minimum 7.3m for container vehicles per TPDM 3.6.3.1",
                    "Visibility: 4.5m sight line from run-in edge, with distances per Table 3.6.3.1 (60m-150m based on road design speed)",
                    "Location restrictions: 60m from signal-controlled junctions (45m on minor roads), 30m from roundabouts",
                    "Concrete: Grade 40/20 concrete construction per H1113C",
                    "Reinforcement: Fabric reinforcement (C283 of B.S.4483) min. weight 2.61kg/m²",
                    "Thickness: 150mm concrete with 60±10mm cover to reinforcement",
                    "Membrane: 0.125mm polythene sheeting waterproof barrier",
                    "Crossfall: 3% drainage gradient maintained",
                    "Joints: Contraction joint required if L>20m per Drawing H1106",
                    "Utility provision: Spare PVC ducts (100mm for ATC/CCTV, 150mm for power cables)"
                ],
                layers: [
                    "Site survey and compliance check with TPDM 3.6.2 location restrictions",
                    "Excavation and subgrade preparation to design levels",
                    "Sub-base material placement and compaction",
                    "0.125mm polythene sheeting installation over full width",
                    "Fabric reinforcement installation (C283 of B.S.4483, min. 2.61kg/m²)",
                    "Spare PVC duct installation (2x100mm for ATC/CCTV, 2x150mm for power)",
                    "Grade 40/20 concrete placement to 150mm thickness",
                    "Surface finishing with 3% crossfall for drainage",
                    "Joint groove cutting (contraction joints if L>20m)",
                    "Lot boundary marking on footway surface with visibility splay provision"
                ],
                materials: [
                    "Grade 40/20 concrete per H1113C specifications",
                    "Fabric reinforcement C283 of B.S.4483 (min. weight 2.61kg/m²)",
                    "0.125mm polythene sheeting membrane",
                    "100mm diameter PVC ducts for ATC/CCTV cables",
                    "150mm diameter PVC ducts for power cables", 
                    "Grade 20/20 concrete for duct bedding",
                    "Sub-base material per specification",
                    "Joint sealant for contraction joints"
                ]
            },
            installation: {
                steps: [
                    "Verify run-in location compliance per TPDM 3.6.2 (distances from junctions, curves, crossings)",
                    "Check visibility requirements per TPDM Table 3.6.3.1 (sight distances based on road design speed)",
                    "Ensure minimum width requirements (7.3m for container vehicles per TPDM 3.6.3.1)",
                    "Coordinate with utility authorities for spare duct requirements per H1114B",
                    "Excavate to design levels maintaining lot boundary alignment",
                    "Install sub-base and compact to specification",
                    "Lay 0.125mm polythene sheeting with proper overlaps",
                    "Position fabric reinforcement with 60±10mm cover maintained",
                    "Install spare PVC duct system with Grade 20/20 concrete bedding",
                    "Place Grade 40/20 concrete maintaining 3% crossfall",
                    "Cut contraction joints if length exceeds 20m per H1106A",
                    "Mark duct positions and lot boundaries on completed footway surface"
                ],
                manuals: ["TPDM Volume 2 Chapter 3.6", "H1113C", "H1114B", "H1115B", "H1116B"],
                tools: ["Sight distance measurement equipment", "Concrete placement equipment", "Compaction equipment", "Level and alignment tools", "Joint cutting equipment"],
                materials: ["Grade 40/20 concrete", "Fabric reinforcement C283", "PVC duct systems", "Waterproof membrane", "Sub-base materials"]
            },
            variants: [
                {
                    name: "Standard Run-in",
                    use: "Normal vehicle access with perpendicular approach, minimum width for intended vehicle types",
                    manuals: ["H1113C", "H1114B", "TPDM V2C3.6 Diagrams 3.6.3.1"]
                },
                {
                    name: "Skew Run-in", 
                    use: "Angled vehicle access where site conditions prevent perpendicular approach",
                    manuals: ["H1115B", "TPDM V2C3.6 Diagram 3.6.3.2"]
                },
                {
                    name: "Petrol Station Run-in",
                    use: "Wide access for filling stations with extensive underground utility requirements", 
                    manuals: ["H1116B", "TPDM V2C3.6 Diagram 3.6.3.3"]
                },
                {
                    name: "Container Vehicle Access",
                    use: "Heavy goods and container vehicle access, minimum 7.3m width required per TPDM 3.6.3.1",
                    manuals: ["TPDM V2C3.6.3.1"]
                },
                {
                    name: "STT/STW Site Access",
                    use: "Short Term Tenancy/Waiver site access with special restrictions per TPDM 3.6.4",
                    manuals: ["TPDM V2C3.6.4"]
                }
            ]
        },
        {
            id: "rg15",
            name: "Crossings",
            category: "road", 
            description: "Pedestrian crossing facilities including at-grade and grade-separated options",
            drawings: ["h1117b", "h1134"],
            manuals: ["TPDM Volume 2 Chapter 3.7"],
            usage: {
                description: "Comprehensive pedestrian crossing facilities including zebra crossings, signal-controlled crossings, cautionary crossings, and grade-separated facilities. All crossings require dropped kerbs for accessibility and proper width sizing based on pedestrian flows. Signal-controlled crossings preferred for heavy flows and high-speed roads.",
                specifications: [
                    "Crossing width: Generally 2.5m-9m, typically 4m-6m per TPDM Table 3.7.2.1",
                    "Minimum width: 2.5m for uncontrolled cautionary crossings",
                    "Drop kerb ramping: Per Diagram 3.7.2.1, full crossing width with ramped kerbs outside",
                    "Zebra crossing sight distance: 50m-125m based on speed limit per Table 3.7.3.2",
                    "Signal crossing layout: Per Diagram 3.7.4.1 with proper signal positioning",
                    "Grade-separated minimum widths: 2m footbridges, 3m subways per Table 3.7.7.2",
                    "Pedestrian capacity: 1200 pedestrians/m width/hour maximum for at-grade crossings",
                    "Access provisions: Ramps (1:12 max gradient) or lifts required for grade-separated facilities"
                ],
                applications: [
                    "Zebra crossings on local and district distributor roads (speed ≤50km/h)",
                    "Signal-controlled crossings for heavy pedestrian/vehicle flows", 
                    "Cautionary crossings at signal-controlled junctions",
                    "Uncontrolled cautionary crossings on local/feeder roads only",
                    "Grade-separated crossings (footbridges/subways) for trunk roads and primary distributors",
                    "Pedestrian/cycle combined facilities with segregation requirements",
                    "Accessibility-compliant crossings for elderly and disabled users"
                ],
                conditions: [
                    "At-grade crossings not permitted on Trunk Roads or Primary Distributors per TPDM 3.7.2.3",
                    "Zebra crossings restricted: no speeds >50km/h, no 4%+ gradients >100m, avoid ATC systems",
                    "Signal crossings preferred for elderly/disabled, heavy flows, high speeds, ATC areas",
                    "Sight distance requirements: 50m-125m for zebra crossings based on speed",
                    "Location restrictions: away from roundabouts, bus stops, merge points",
                    "Grade-separated required where pedestrian volumes >1200/m width/hour unsuitable for at-grade"
                ]
            },
            composition: {
                description: "Comprehensive pedestrian crossing facilities including zebra crossings, signal-controlled crossings, cautionary crossings, and grade-separated facilities. All crossings require dropped kerbs for accessibility and proper width sizing based on pedestrian flows. Signal-controlled crossings preferred for heavy flows and high-speed roads.",
                specifications: [
                    "Crossing width: Generally 2.5m-9m, typically 4m-6m per TPDM Table 3.7.2.1",
                    "Minimum width: 2.5m for uncontrolled cautionary crossings",
                    "Drop kerb ramping: Per Diagram 3.7.2.1, full crossing width with ramped kerbs outside",
                    "Zebra crossing sight distance: 50m-125m based on speed limit per Table 3.7.3.2",
                    "Signal crossing layout: Per Diagram 3.7.4.1 with proper signal positioning",
                    "Grade-separated minimum widths: 2m footbridges, 3m subways per Table 3.7.7.2",
                    "Pedestrian capacity: 1200 pedestrians/m width/hour maximum for at-grade crossings",
                    "Access provisions: Ramps (1:12 max gradient) or lifts required for grade-separated facilities"
                ],
                layers: [
                    "Crossing location assessment per TPDM 3.7.1.3 (maximum usage, convenient to pedestrian paths)",
                    "Pedestrian flow survey and analysis per Table 3.7.2.1",
                    "Sight distance verification per Table 3.7.3.2 (zebra) or signal design requirements",
                    "Drop kerb installation per Diagram 3.7.2.1 (full crossing width, ramped outside)",
                    "Road markings and studs installation per TPDM Volume 3 specifications",
                    "Signal equipment installation (where applicable) per TPDM Volume 4",
                    "Tactile warning surfaces for accessibility compliance",
                    "Reservoir space provision at carriageway edges and central refuges"
                ],
                materials: [
                    "Drop kerb units (K10-K14 series) per H1134 specifications",
                    "Road marking materials per TPDM Volume 3",
                    "Tactile warning surfaces and accessibility materials",
                    "Traffic signal equipment per TPDM Volume 4",
                    "Studs for crossing delineation",
                    "Central refuge construction materials (where required)",
                    "Warning signs and visibility enhancement materials"
                ]
            },
            installation: {
                steps: [
                    "Conduct pedestrian/vehicle flow surveys per TPDM 3.7.2.8 assessment criteria",
                    "Verify crossing type suitability (zebra criteria per 3.7.3.5, signal criteria per 3.7.4.2)",
                    "Check sight distance requirements (Table 3.7.3.2 for zebra, adequate for signals)",
                    "Determine crossing width per Table 3.7.2.1 based on pedestrian flows",
                    "Install drop kerbs per Diagram 3.7.2.1 (full width lowered, ramped outside)",
                    "Provide adequate reservoir space at edges and central refuges",
                    "Install road markings per TPDM Volume 3 (zebra stripes, studs, zig-zag areas)",
                    "Install signal equipment per TPDM Volume 4 (if signal-controlled)",
                    "Install tactile warning surfaces for accessibility compliance",
                    "Coordinate with railings, signing, and street furniture positioning"
                ],
                manuals: ["TPDM Volume 2 Chapter 3.7", "TPDM Volume 3 Traffic Signs", "TPDM Volume 4 Road Traffic Signals", "H1117B", "H1134"],
                tools: ["Pedestrian counting equipment", "Sight distance measurement tools", "Road marking equipment", "Signal installation equipment"],
                materials: ["Drop kerb systems", "Road marking materials", "Signal equipment", "Tactile paving", "Warning signs"]
            },
            variants: [
                {
                    name: "Zebra Crossing",
                    use: "Local and district roads, speeds ≤50km/h, PV² >10⁸ (or >2x10⁸ with refuge)",
                    manuals: ["TPDM V2C3.7.3", "Table 3.7.3.1 rural areas", "Diagrams 3.7.3.1-3.7.3.2"]
                },
                {
                    name: "Signal-Controlled Crossing",
                    use: "Heavy flows, elderly/disabled users, high speeds, ATC areas per TPDM 3.7.4.2",
                    manuals: ["TPDM V2C3.7.4", "Diagram 3.7.4.1", "Volume 4 signal timing"]
                },
                {
                    name: "Cautionary Crossing at Signals",
                    use: "Signal junctions without separate pedestrian phase, cross 'with the light'",
                    manuals: ["TPDM V2C3.7.5", "avoid where possible, especially with split phases"]
                },
                {
                    name: "Uncontrolled Cautionary Crossing",
                    use: "Local/feeder roads only, no markings, drop kerbs and railings only",
                    manuals: ["TPDM V2C3.7.6", "avoid on dual carriageways"]
                },
                {
                    name: "Grade-Separated Footbridge",
                    use: "Trunk roads, primary distributors, capacity >1200 ped/m/hr unsuitable at-grade",
                    manuals: ["TPDM V2C3.7.7", "Table 3.7.7.2 design standards", "covers required in development areas"]
                },
                {
                    name: "Grade-Separated Subway",
                    use: "Underground crossing, 4.6m radius corners for 4m visibility, accessibility provisions",
                    manuals: ["TPDM V2C3.7.7", "Tables 3.7.7.2-3.7.7.4", "segregation for pedestrian/cycle"]
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
            drawings: ["h1101e"],
            manuals: ["hyd-gn042a", "hyd-gn014d"],
            overview: {
                description: "Flexible pavement construction using bituminous materials for various traffic loading conditions.",
                specifications: [
                    "Wearing course: 40mm (WC20/HMSMA10)",
                    "Base course: 30mm (HMSMA6/HMFC)",
                    "Road base: 65mm bituminous",
                    "Sub-base: Granular material (thickness designed to RD/GN/042)",
                    "Total thickness: min. 205mm (low-volume roads), min. 280mm (other roads), min. 350mm (Expressway/Trunk/Primary)",
                    "Max thickness: 395mm (WC20/HMSMA10), 405mm (HMSMA6/HMFC)"
                ],
                image: "assets/pv1-profile.png"
            },
            usage: {
                applications: [
                    "Main carriageways",
                    "Secondary roads",
                    "Expressways and trunk roads",
                    "Primary distributors and collector roads",
                    "Low-volume rural roads"
                ],
                conditions: [
                    "Areas requiring flexible pavement construction",
                    "Locations with heavy to moderate traffic loading",
                    "Sites where cost-effective pavement solution is needed",
                    "Areas with various traffic volumes requiring adaptable design",
                    "Locations where periodic maintenance is acceptable"
                ],
                image: "assets/pv1-profile.png"
            },
            composition: {
                layers: [
                    "Subgrade preparation and compaction to specified density",
                    "Sub-base layer: Granular material placed and compacted to thickness per RD/GN/042 design",
                    "Road base layer: 65mm bituminous material placement and compaction",
                    "Base course layer: 30mm HMSMA6 or HMFC material application",
                    "Wearing course layer: 40mm WC20 or HMSMA10 final surface layer",
                    "Joint construction with minimum overlap requirements: 150mm longitudinal, 500mm transverse"
                ],
                materials: [
                    "Bituminous materials conforming to specification requirements",
                    "Granular sub-base material meeting grading and compaction standards",
                    "HMSMA6 or HMFC materials for base course construction",
                    "WC20 or HMSMA10 materials for wearing course application"
                ]
            },
            variants: [
                {
                    name: "Bituminous Pavement on Concrete Bridge Deck",
                    use: "Bituminous Pavement constitution layers need special attention when laid on concrete deck surface",
                    manuals: ["hyd-gn033"]
                }, {
                    name: "Anti-skid surface dressing",
                    use: "A thin epoxy based anti-skid dressing material laid on carriageway for improving the skid resistance of roads",
                    manuals: ["hyd-gn039c"]
                },
            ]
        },
        {
            id: "pv2",
            name: "Concrete",
            category: "pavement",
            description: "Rigid pavement design using concrete construction",
            drawings: ["h1102c", "H1105", "H1106A", "H1107"],
            manuals: ["hyd-gn042a", "hyd-gn014d"],
            overview: {
                description: "Rigid pavement construction using concrete for heavy-duty applications requiring long service life.",
                specifications: [
                    "Concrete slab: Grade 40/20 concrete construction",
                    "Reinforcement: B503 mesh where specified, minimum 188mm²/m reinforcement density",
                    "Polythene sheeting: 0.125mm waterproof membrane installed under slab",
                    "Sub-base: Granular material or lean concrete foundation",
                    "Maximum unreinforced slab dimensions: 4.5m width, 5.0m length",
                    "Maximum reinforced slab dimensions: 6.0m width with B503 mesh, 20.0m length",
                    "Typical panel dimensions: 4.0m x 4.5m for standard construction"
                ],
                applications: [
                    "Heavy duty pavements",
                    "Airport runways", 
                    "Industrial loading areas",
                    "Container terminals",
                    "Long-life pavement requirements"
                ],
                conditions: [
                    "Areas with very heavy traffic loading and point loads",
                    "Locations requiring long service life with minimal maintenance",
                    "Sites where structural integrity is prioritized over initial cost",
                    "Areas where pavement failure would result in significant operational disruption",
                    "Locations with heavy goods vehicles and container handling equipment"
                ],
                image: "assets/pv2-profile.png"
            },
            composition: {
                layers: [
                    "Subgrade preparation and compaction",
                    "Sub-base: Granular material or lean concrete",
                    "Polythene sheeting: 0.125mm waterproof membrane",
                    "Mesh reinforcement installation (B503 mesh where specified, >188mm²/m)",
                    "Concrete slab: Grade 40/20 concrete placement",
                    "Joint construction: Transverse and longitudinal joints per H1105-H1109",
                    "Surface finishing and curing"
                ],
                materials: [
                    "Grade 40/20 concrete meeting specified strength and durability requirements",
                    "B503 mesh reinforcement where specified for crack control",
                    "0.125mm polythene sheeting for moisture barrier",
                    "Granular sub-base material or lean concrete for foundation support",
                    "Joint sealant materials for expansion and contraction joints"
                ]
            }, variants: [
                {
                    name: "Anti-skid surface dressing",
                    use: "A thin epoxy based anti-skid dressing material laid on carriageway for improving the skid resistance of roads",
                    manuals: ["hyd-gn037", "hyd-gn039c"]
                },
            ]
        },
        {
            id: "pv3",
            name: "Low noise road surfacing",
            category: "pavement",
            description: "Specialized surfacing designed to reduce traffic noise",
            drawings: ["h1101e", "H1135"],
            manuals: ["hyd-gn011e"],
            usage: {
                applications: [
                    "Noise-sensitive areas",
                    "Residential zones",
                    "Hospital and school vicinities",
                    "Urban motorways",
                    "Environmental noise mitigation projects"
                ],
                conditions: [
                    "Noise reduction requirements",
                    "Environmental considerations",
                    "Urban traffic management",
                    "Community noise mitigation",
                    "Acoustic performance priority"
                ]
            },
            composition: {
                layers: [
                    "Existing pavement surface preparation and cleaning",
                    "Sub-base: Granular material (where new construction)",
                    "Road base: 65mm bituminous (where new construction)",
                    "Base course: 30mm (HMSMA6/HMFC)",
                    "Tack coat application (if required for overlay)",
                    "Low noise wearing course: 40mm specialized materials (WC20/HMSMA10)",
                    "Specialized compaction using pneumatic rollers",
                    "Transition details at interfaces with standard surfacing"
                ],
                materials: [
                    "Low-noise specialized bituminous materials",
                    "Porous asphalt mix (where specified)",
                    "Stone mastic asphalt with noise reduction properties",
                    "HMSMA6/HMFC for base course",
                    "WC20/HMSMA10 for wearing course"
                ]
            },
            variants: [
                {
                    name: "High Speed Road",
                    use: "Highways and expressways with high speeds",
                    manuals: ["hyd-gn032b"]
                },
                {
                    name: "Low Speed Road",
                    use: "Local roads with gentle traffic. Refer to Table 2 of Guidance Note GN011E",
                    manuals: ["hyd-gn011e"]
                },
                {
                    name: "Low Speed Road (Heavy Duty)",
                    use: "Local roads with heavy vehicle traffic. Refer to Table 2 of Guidance Note GN038C",
                    manuals: ["hyd-gn038c"]
                }
            ]
        },
        {
            id: "pv4",
            name: "Cycle Track",
            category: "pavement",
            description: "Specialized pavement for cycle tracks",
            drawings: ["h1104c", "hyd-gn014d"],
            overview: {
                description: "Dedicated cycling infrastructure with appropriate surface treatment and safety features.",
                specifications: [
                    "Surface width: Variable based on design requirements and traffic volume",
                    "Surfacing layer: 50mm bituminous surfacing wearing course",
                    "Aggregate size: Nominal maximum aggregate size 10mm for smooth surface",
                    "Edge restraint: 150x125x750mm precast concrete edging units",
                    "Crossfall: 3% gradient for effective surface drainage",
                    "Foundation: Grade 20/20 concrete foundation for edging support",
                    "Sub-base: Granular material foundation layer"
                ],
                applications: [
                    "Dedicated cycle lanes",
                    "Shared use paths",
                    "Park cycling routes",
                    "Urban cycling infrastructure",
                    "Recreational cycling facilities"
                ],
                conditions: [
                    "Areas where cyclist safety is priority concern",
                    "Locations requiring effective surface drainage",
                    "Sites needing smooth surface for comfortable cycling",
                    "Areas requiring weather-resistant cycling infrastructure",
                    "Locations with defined separation from other traffic modes"
                ],
                image: "assets/pv4-profile.png"
            },
            composition: {
                layers: [
                    "Subgrade preparation and compaction",
                    "Sub-base material placement and compaction",
                    "Bituminous emulsion tack coat application",
                    "Bituminous surfacing wearing course (50mm, nominal maximum aggregate size 10)",
                    "Precast concrete edging installation (150x125x750) on grade 20/20 concrete foundation",
                    "Surface finishing with 3% crossfall for drainage"
                ],
                materials: [
                    "Sub-base material conforming to specification requirements",
                    "Bituminous emulsion tack coat for adhesion",
                    "Bituminous surfacing material with maximum 10mm aggregate size for smooth finish",
                    "150x125x750mm precast concrete edging units for edge definition",
                    "Grade 20/20 concrete for edging foundation and support"
                ]
            }
        },
        {
            id: "pv5",
            name: "Concrete Footpath",
            category: "pavement",
            description: "Concrete construction for pedestrian footpaths",
            drawings: ["h1104c", "hyd-gn014d"],
            overview: {
                description: "Durable concrete footpath construction for pedestrian areas with proper drainage and accessibility features.",
                specifications: [
                    "Concrete thickness: Variable - 75mm for level verge areas, 100mm for sloping verge areas, 125-200mm for higher load applications",
                    "Concrete grade: Grade 30/20 concrete for structural adequacy",
                    "Surface finish: Class U4 finish for slip resistance and durability",
                    "Moisture barrier: 0.125mm polythene sheeting installed under concrete slab",
                    "Drainage gradient: 3% crossfall for effective surface water removal",
                    "Joint spacing: Maximum 5m centers with 20m maximum bay length",
                    "Joint dimensions: 3-6mm width, 20mm depth open joints for movement accommodation"
                ],
                applications: [
                    "Urban footpaths and pedestrian walkways",
                    "Shopping areas and commercial precincts",
                    "School zones and educational facility access",
                    "Accessible walkways complying with disability access requirements",
                    "Pedestrian plazas and public gathering spaces"
                ],
                conditions: [
                    "Areas with heavy pedestrian traffic requiring durable surface",
                    "Locations where long-term durability is required",
                    "Sites requiring accessibility compliance for disabled users",
                    "Areas needing weather-resistant pedestrian infrastructure",
                    "Locations where low maintenance is priority"
                ],
                image: "assets/pv5-profile.png"
            },
            composition: {
                layers: [
                    "Subgrade preparation and leveling to design profiles",
                    "Sub-base material placement and compaction to specification",
                    "Polythene sheeting installation: 0.125mm moisture barrier over full area",
                    "Grade 30/20 concrete placement to specified thickness (75mm, 100mm, or 125-200mm)",
                    "Class U4 surface finish application for slip resistance",
                    "Joint cutting: 3-6mm wide, 20mm deep joints at maximum 5m spacing",
                    "Concrete curing and protection during setting period"
                ],
                materials: [
                    "Sub-base material meeting compaction and grading requirements",
                    "0.125mm polythene sheeting for moisture protection",
                    "Grade 30/20 concrete meeting strength and durability standards",
                    "Class U4 surface finish materials for texture and slip resistance",
                    "Joint sealant materials where movement joints require sealing"
                ]
            }
        },
        {
            id: "pv6",
            name: "Paver Footpath",
            category: "pavement",
            description: "Paver block construction for footpaths",
            drawings: ["h1103g", "H1131B", "H5609", "H5610", "H5611"],
            manuals: ["hyd-gn044c", "hyd-gn014d"],
            overview: {
                description: "Interlocking paver block construction providing attractive and maintainable pedestrian surfaces.",
                specifications: [
                    "Paving unit: Paving slab or paving block as specified",
                    "Bedding: 20-30mm sand course/sand and cement bedding",
                    "Sub-base: 150mm thick for footway, varies for carriageway",
                    "Road-base: 100mm (run-in), 225mm (carriageway <5MSA), 225mm (footway E subgrade >50MPa)",
                    "Drainage: Minimum 150mm sub-base thickness",
                    "Edge restraint: Kerb or other edge restraint system",
                    "Joint sand: 2-5mm joint width with sand filling"
                ],
                image: "assets/pv5-profile.png"
            },
            usage: {
                applications: [
                    "Pedestrian areas",
                    "Shopping precincts",
                    "Historic areas",
                    "Decorative walkways",
                    "Run-in areas",
                    "Light traffic carriageways"
                ],
                conditions: [
                    "Areas where aesthetic enhancement is required",
                    "Locations needing easy maintenance access for utilities",
                    "Heritage conservation areas requiring compliant materials",
                    "Sites where flexible surface is preferred over rigid pavement",
                    "Areas subject to periodic utility access requirements"
                ],
                image: "assets/pv6-profile.png"
            },
            composition: {
                layers: [
                    "Subgrade preparation and compaction to specified density",
                    "Sub-base placement and compaction: minimum 150mm thickness for footways",
                    "Road-base installation: thickness varies by application (100mm run-in, 225mm carriageway)",
                    "Sand course or sand and cement bedding preparation: 20-30mm layer screeded to level",
                    "Paving unit installation: blocks or slabs laid in specified pattern with proper joint spacing",
                    "Joint sand application and compaction: 2-5mm joints filled and consolidated",
                    "Edge restraint installation: kerb or specified edge system for structural integrity",
                    "Joint stabilizing sealer application: for areas with railings or high pressure cleaning requirements"
                ],
                materials: [
                    "Precast concrete pavers: preferred material for new paving work",
                    "Clay pavers: special approval required, not recommended for new installations",
                    "Granite and artificial granite pavers: require Grade 40/20 concrete base minimum 200mm thick",
                    "Sand course bedding: fine sand for standard applications",
                    "Sand and cement bedding: 85% sand, 15% cement by mass for high-stress areas",
                    "Sub-base material: meeting specification grading and compaction requirements",
                    "Bituminous road-base: for run-in and carriageway applications",
                    "Joint sand: fine sand for joint filling and stabilization",
                    "Joint stabilizing sealer: for areas requiring enhanced joint stability"
                ]
            }
        },
        {
            id: "pv7",
            name: "Planter",
            category: "pavement",
            description: "Landscaped planter construction and design",
            drawings: ["h5146a", "H5705", "H5706", "H5707"],
            usage: {
                applications: [
                    "Urban beautification",
                    "Street tree planters",
                    "Roadside landscaping",
                    "Central reservation planting",
                    "Kerb planters",
                    "Quality greening along roads"
                ],
                conditions: [
                    "Landscaping enhancement",
                    "Environmental improvement",
                    "Traffic calming measures",
                    "Urban heat island mitigation",
                    "Air quality improvement"
                ]
            },
            composition: {
                layers: [
                    "Excavation to required depth (minimum 1330mm, typically 2000mm)",
                    "Compacted CDG (Completely Decomposed Granite) base preparation",
                    "In-situ planting base construction",
                    "Sub-soil drainage system installation (essential for proper drainage)",
                    "In-situ mass concrete frame footing construction",
                    "GMS frame installation (fabricated from 75x50x5mm thick angle)",
                    "Surrounding paving installation as specified with cement sand bedding",
                    "Soil mix backfill to finished level",
                    "50mm thick mulch layer over soil mix",
                    "Tree/plant installation with root ball at correct level",
                    "Tree securing with stakes/guys as specified"
                ],
                materials: [
                    "Compacted CDG (Completely Decomposed Granite)",
                    "In-situ mass concrete for frame footing",
                    "GMS frame components (75x50x5mm thick angle)",
                    "Specified soil mix for plant growth",
                    "50mm thick mulch material",
                    "Sub-soil drainage materials",
                    "Surrounding paving materials",
                    "Cement sand bedding",
                    "Tree stakes and guy wire systems"
                ]
            }
        },
        {
            id: "pv8",
            name: "Expansion Joint",
            category: "pavement-joints",
            description: "Expansion joints in concrete carriageways to accommodate thermal movement",
            drawings: ["H1105"],
            manuals: ["hyd-gn020a", "hyd-gn014d"],
            overview: {
                description: "Expansion joints in concrete pavement construction designed to accommodate thermal expansion and contraction movements. These joints allow the concrete slabs to move without cracking, ensuring long-term pavement performance and structural integrity.",
                specifications: [
                    "Joint spacing: 100-150m depending on local conditions",
                    "Joint construction: Sealing groove and approved joint sealant",
                    "Dowel bars: 25mm diameter, 650mm length, at 300mm centers (slabs ≥150mm thick)",
                    "Dowel sleeve: 400mm length tight fitting PVC anti-corrosive sleeve",
                    "Compressible filler: 20mm thick compressible joint filler",
                    "Reinforcement: Wire ties and cradle bent 6mm diameter tie bars at 300mm centers",
                    "Cover: 60 ± 10mm cover to reinforcement",
                    "Polythene sheeting: 0.125mm over full width"
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
            composition: {
                layers: [
                    "Joint location marking during concrete placement",
                    "Dowel bar installation (25mm diameter, 650mm length) with PVC anti-corrosive sleeve (400mm)",
                    "Wire ties and cradle bent 6mm diameter tie bars at 300mm centers installation",
                    "Compressible joint filler installation (20mm thick) at specified position",
                    "Joint groove cutting to accommodate sealant",
                    "Reinforcement placement with 60 ± 10mm cover maintained",
                    "0.125mm polythene sheeting installation over full width",
                    "Joint sealant application and tooling to profile"
                ],
                materials: [
                    "25mm diameter mild steel dowel bars (sow cut at both ends)",
                    "400mm length tight fitting PVC anti-corrosive dowel sleeve",
                    "20mm thick compressible joint filler",
                    "6mm diameter wire ties and tie bars",
                    "Approved joint sealant",
                    "0.125mm polythene sheeting",
                    "Reinforcement materials where specified"
                ]
            }
        },
        {
            id: "pv9",
            name: "Contraction Joint",
            category: "pavement-joints",
            description: "Contraction joints in concrete carriageways to control shrinkage cracking",
            drawings: ["H1106A"],
            manuals: ["hyd-gn020a", "hyd-gn014d"],
            overview: {
                description: "Contraction joints (also known as control joints) in concrete pavement designed to control where shrinkage cracks occur during the curing process. These joints create a planned weak point where cracking is intended to occur, preventing random cracking throughout the pavement.",
                specifications: [
                    "Joint construction: Sealing groove and approved joint sealant",
                    "Dowel bars: 20mm diameter (150-220mm slabs), 25mm diameter (230mm+ slabs), 650mm length",
                    "Dowel spacing: 300mm centers at mid-depth",
                    "Dowel sleeve: 400mm length tight fitting PVC anti-corrosive sleeve",
                    "Reinforcement: Wire ties and cradle bent 6mm diameter tie bars at 300mm centers",
                    "Cover: 60 ± 10mm cover to reinforcement",
                    "Polythene sheeting: 0.125mm over full width",
                    "Mortar bed: 1 part cement to 3 parts sand"
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
            composition: {
                layers: [
                    "Joint layout planning during design phase",
                    "Joint location marking on concrete placement",
                    "Mid steel dowel bar installation (sow cut at both ends, at mid-depth)",
                    "Dowel bar sizing: 20mm diameter (150-220mm slabs), 25mm diameter (230mm+ slabs)",
                    "PVC anti-corrosive sleeve installation (400mm length, tight fitting)",
                    "Wire ties and cradle bent 6mm diameter tie bars at 300mm centers",
                    "0.125mm polythene sheeting installation over full width",
                    "Mortar bed application (1 part cement to 3 parts sand)",
                    "Joint sealant groove cutting and sealing"
                ],
                materials: [
                    "20mm or 25mm diameter mild steel dowel bars (sow cut at both ends)",
                    "400mm length tight fitting PVC anti-corrosive sleeve",
                    "6mm diameter wire ties and tie bars",
                    "Approved joint sealant",
                    "0.125mm polythene sheeting",
                    "Mortar materials (1 part cement, 3 parts sand)",
                    "Reinforcement materials where specified"
                ]
            }
        },
        {
            id: "pv10",
            name: "Longitudinal Joint",
            category: "pavement-joints",
            description: "Longitudinal joints in concrete carriageways to reduce slab width and limit transverse stresses",
            drawings: ["H1107"],
            manuals: ["hyd-gn020a", "hyd-gn014d"],
            overview: {
                description: "Longitudinal joints in concrete pavement construction designed to reduce slab width and limit stresses in the transverse direction. These joints provide a balance between construction operations and load transfer requirements while controlling slab dimensions for optimal pavement performance.",
                specifications: [
                    "Reinforcement: Where specified, with approved sealing strip",
                    "Tie bars: 12mm diameter, 1.0m length, spaced at 600mm centers at mid-depth (sow-cut)",
                    "PVC sleeve: 150mm tight fitting anti-corrosive sleeve",
                    "Cover: 60 ± 10mm cover to reinforcement",
                    "Joint spacing: 125 ± 25mm nominal between first and second slab",
                    "Polythene sheeting: 0.125mm installation",
                    "Sealing: Approved sealing strip application"
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
            composition: {
                layers: [
                    "Joint positioning between traffic lanes at or near lane lines",
                    "Alternative positioning in center of traffic lane",
                    "Sow-cut tie bar installation (12mm diameter, 1.0m length) at 600mm centers at mid-depth",
                    "150mm tight fitting PVC anti-corrosive sleeve installation",
                    "Reinforcement placement (where specified) with 60 ± 10mm cover",
                    "0.125mm polythene sheeting installation",
                    "Joint spacing maintenance (125 ± 25mm nominal between slabs)",
                    "Approved sealing strip application",
                    "Joint termination at any transverse joint"
                ],
                materials: [
                    "12mm diameter mild steel tie bars (sow-cut, 1.0m length)",
                    "150mm tight fitting PVC anti-corrosive sleeve",
                    "Approved sealing strip",
                    "0.125mm polythene sheeting",
                    "Reinforcement materials (where specified)",
                    "Joint sealant materials"
                ]
            }
        },
        {
            id: "pv11",
            name: "Isolation Joint",
            category: "pavement-joints",
            description: "Isolation joints in concrete carriageways for complete separation between pavement sections",
            drawings: ["H1107"],
            manuals: ["hyd-gn020a", "hyd-gn014d"],
            overview: {
                description: "Isolation joints in concrete pavement construction that provide complete separation between pavement sections without load transfer mechanisms. These joints prevent induced cracking by allowing slabs to move independently in both transverse and longitudinal directions, particularly at road junctions and around utility structures.",
                specifications: [
                    "No dowel bars or tie bars for load transfer",
                    "Complete separation between concrete sections",
                    "Joint material: 10mm thick compressible joint filler",
                    "Full depth: Extends through entire slab thickness",
                    "Cover: 60 ± 10mm cover to reinforcement",
                    "Joint width: 75mm + 5mm nominal spacing",
                    "Polythene sheeting: 0.125mm installation",
                    "Box-out arrangement: Orthogonal to road slab alignment"
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
            composition: {
                layers: [
                    "Joint location identification at structure interfaces or junction points",
                    "10mm thick compressible joint filler installation against structure",
                    "Full slab depth filler extension through entire thickness",
                    "Joint spacing maintenance (75mm + 5mm nominal)",
                    "0.125mm polythene sheeting installation",
                    "Reinforcement placement with 60 ± 10mm cover (where applicable)",
                    "Filler board position maintenance during concrete placement",
                    "Concrete spillage prevention from joint face",
                    "Joint sealing completion after curing"
                ],
                materials: [
                    "10mm thick compressible joint filler board",
                    "0.125mm polythene sheeting",
                    "Joint sealant materials",
                    "Backing rod (where required)",
                    "Reinforcement materials (where specified)"
                ]
            }
        }
    ],
    kerbs: [
        {
            id: "k1",
            name: "K1 - Standard Kerb",
            category: "kerbs",
            description: "Type K1 precast concrete kerb for urban areas where footway is adjacent to carriageway",
            drawings: ["H1118", "H1101E", "H1102C"],
            manuals: ["TPDM Volume 2 Chapter 3.4"],
            usage: {
                description: "Type K1 precast concrete kerb designed for urban areas where a footway is adjacent to the carriageway. Provides standard edge definition and protection between carriageway and footway with 125mm height profile. Used in built-up areas requiring clear separation between pedestrian and vehicular spaces.",
                specifications: [
                    "Height: 125mm above carriageway level",
                    "Profile: Type K1 section per H1118 with vertical face and chamfered top",
                    "Length: 1000mm nominal kerb unit, 750mm edging unit",
                    "Material: Grade 30/20 precast concrete",
                    "Compliance: BS 7263 Part 1 (except water absorption testing requirement)",
                    "Joint width: 10mm between units",
                    "Foundation: 1:3 cement mortar bedding, not less than 10mm thick, not more than 40mm thick",
                    "Installation: 20/20 concrete backing and foundation per H1101E"
                ],
                applications: [
                    "Urban area carriageway edges with adjacent footways",
                    "Built-up areas requiring pedestrian protection",
                    "Shopping and commercial precincts with foot traffic",
                    "Residential areas with defined footway/carriageway separation",
                    "Areas where standard kerb height provides adequate edge definition"
                ],
                conditions: [
                    "Urban areas where footway is adjacent to carriageway",
                    "Areas requiring clear edge definition between pedestrian and vehicle areas",
                    "Standard traffic loading conditions",
                    "Locations where 125mm height is appropriate for site conditions"
                ]
            },
            composition: {
                layers: [
                    "Excavation and subgrade preparation to design levels",
                    "20/20 concrete foundation installation per H1101E",
                    "1:3 cement mortar bedding (10-40mm thickness)",
                    "K1 kerb unit positioning at 1000mm nominal length",
                    "10mm joint spacing maintenance between units",
                    "20/20 concrete backing installation against kerb",
                    "Joint pointing with appropriate mortar mix",
                    "Backfill and compaction to finish levels"
                ],
                materials: [
                    "Grade 30/20 precast concrete K1 kerb units (1000mm nominal)",
                    "Grade 20/20 concrete for foundation and backing",
                    "1:3 cement mortar for bedding and pointing",
                    "Backfill material suitable for compaction"
                ]
            },
            installation: {
                steps: [
                    "Mark kerb line alignment and set out levels",
                    "Excavate to required depth allowing for foundation and bedding",
                    "Install 20/20 concrete foundation to H1101E specification",
                    "Place 1:3 cement mortar bedding (10-40mm thickness)",
                    "Position K1 kerb units maintaining 10mm joints",
                    "Check alignment, levels and joint consistency",
                    "Install 20/20 concrete backing against kerb back",
                    "Point joints and complete surface finishing"
                ],
                drawings: ["H1118", "H1101E"],
                tools: ["Excavation equipment", "Levels and alignment tools", "Concrete mixer", "Pointing tools"],
                materials: ["K1 precast kerbs", "Grade 20/20 concrete", "1:3 cement mortar", "Joint pointing materials"]
            }
        },
        {
            id: "k2",
            name: "K2 - Carriageway to Verge Kerb",
            category: "kerbs",
            description: "Type K2 precast concrete kerb for rural areas and high speed roads without adjoining footways",
            drawings: ["H1118", "H1101E", "H1102C"],
            manuals: ["TPDM Volume 2 Chapter 3.4"],
            usage: {
                description: "Type K2 precast concrete kerb designed for rural areas and high speed roads where there is no adjoining footway. Features lower profile than K1 for improved vehicle safety on high-speed roads while maintaining edge definition between carriageway and verge areas.",
                specifications: [
                    "Profile: Type K2 section per H1118 (lower profile than K1)",
                    "Length: 1000mm nominal kerb unit",
                    "Material: Grade 30/20 precast concrete",
                    "Application: Rural areas without adjacent footways",
                    "Compliance: BS 7263 Part 1 (except water absorption testing requirement)",
                    "Joint width: 10mm between units",
                    "Foundation: 1:3 cement mortar bedding, not less than 10mm thick, not more than 40mm thick",
                    "Profile advantage: Lower than K1 for high-speed vehicle safety"
                ],
                applications: [
                    "Rural road edges without adjacent footways",
                    "High speed roads where lower kerb profile improves safety",
                    "Carriageway to grass verge transitions",
                    "Areas where minimal vertical barrier height is preferred",
                    "Roads with limited or no pedestrian access requirements"
                ],
                conditions: [
                    "Rural areas without adjacent footways",
                    "High speed road environments where lower profile reduces impact severity",
                    "Areas where grass verges or landscaping adjoin carriageway",
                    "Locations where reduced kerb height is appropriate for traffic speeds"
                ]
            },
            composition: {
                layers: [
                    "Excavation and subgrade preparation to design levels",
                    "20/20 concrete foundation installation per H1101E",
                    "1:3 cement mortar bedding (10-40mm thickness)",
                    "K2 kerb unit positioning with lower profile orientation",
                    "10mm joint spacing maintenance between units",
                    "20/20 concrete backing installation",
                    "Backfill and verge preparation for landscaping",
                    "Joint pointing and surface finishing"
                ],
                materials: [
                    "Grade 30/20 precast concrete K2 kerb units (1000mm nominal)",
                    "Grade 20/20 concrete for foundation and backing",
                    "1:3 cement mortar for bedding and pointing",
                    "Topsoil and seed for verge establishment"
                ]
            },
            installation: {
                steps: [
                    "Mark kerb line alignment for rural road conditions",
                    "Excavate foundation allowing for lower profile and verge levels",
                    "Install 20/20 concrete foundation per H1101E specification",
                    "Place 1:3 cement mortar bedding maintaining low profile",
                    "Position K2 kerb units with correct lower profile throughout",
                    "Install backing and prepare adjacent verge areas",
                    "Complete joint pointing and establish verge surfacing",
                    "Ensure smooth transition from carriageway to verge"
                ],
                drawings: ["H1118", "H1101E"],
                tools: ["Rural construction equipment", "Level control tools", "Verge preparation equipment"],
                materials: ["K2 precast kerbs", "Grade 20/20 concrete", "1:3 cement mortar", "Verge establishment materials"]
            }
        },
        {
            id: "k3",
            name: "K3 - Bridge Deck Kerb",
            category: "kerbs",
            description: "Type K3 precast concrete kerb specifically designed for bridge deck applications",
            drawings: ["H1118", "H1101E", "H1102C"],
            manuals: ["TPDM Volume 2 Chapter 3.4", "Bridge Construction Standards"],
            usage: {
                description: "Type K3 precast concrete kerb designed specifically for use on bridge decks. Features specialized profile and mounting details suitable for bridge structure requirements and loading conditions. Must integrate with bridge drainage systems and barrier installations.",
                specifications: [
                    "Profile: Type K3 section per H1118 (bridge deck specific design)",
                    "Length: 1000mm nominal kerb unit",
                    "Material: Grade 30/20 precast concrete",
                    "Application: Bridge decks only - not for general road use",
                    "Compliance: BS 7263 Part 1 (except water absorption testing requirement)",
                    "Joint width: 10mm between units",
                    "Foundation: Specialized bridge deck bedding system",
                    "Integration: Must coordinate with bridge drainage and parapet systems"
                ],
                applications: [
                    "Bridge deck edge definition and drainage control",
                    "Elevated structure kerbing for viaducts and flyovers",
                    "Bridge approach transitions requiring structural connectivity",
                    "Integration with bridge barriers and parapet systems",
                    "Specialized structural applications on elevated roadways"
                ],
                conditions: [
                    "Bridge deck installations only - structural loading requirements",
                    "Elevated construction requiring specialized installation techniques",
                    "Integration with bridge barriers, parapets and drainage systems",
                    "Structural connectivity and load transfer requirements"
                ]
            },
            composition: {
                layers: [
                    "Bridge deck surface preparation and coordination",
                    "Specialized bridge-grade foundation bedding installation",
                    "K3 kerb unit positioning for structural load compatibility",
                    "10mm joint spacing with structural considerations",
                    "Bridge-appropriate backfill and support systems",
                    "Joint sealing suitable for bridge environment and movement",
                    "Integration with bridge drainage collection systems"
                ],
                materials: [
                    "Grade 30/20 precast concrete K3 kerb units (1000mm nominal)",
                    "Bridge-grade foundation bedding materials",
                    "Structural joint sealant for bridge movement accommodation",
                    "Bridge-compatible backfill and support materials"
                ]
            },
            installation: {
                steps: [
                    "Coordinate installation with bridge deck construction sequence",
                    "Prepare bridge deck surface for kerb installation per structural requirements",
                    "Install specialized foundation system for structural loads",
                    "Position K3 kerbs ensuring bridge deck integration and load transfer",
                    "Ensure structural connectivity with bridge elements",
                    "Complete joint sealing for bridge environment and thermal movement",
                    "Integrate with bridge drainage systems and safety barriers",
                    "Verify structural performance and loading compatibility"
                ],
                drawings: ["H1118", "H1101E", "Bridge Details"],
                tools: ["Bridge construction equipment", "Structural alignment tools", "Specialized lifting equipment"],
                materials: ["K3 bridge deck kerbs", "Structural bedding materials", "Bridge joint sealants", "Drainage integration components"]
            }
        },
        {
            id: "k5-9",
            name: "K5-K9 - Vehicular Drop Kerbs",
            category: "kerbs",
            description: "Drop kerb series (K5-K9) for vehicular access across footways per H1118",
            drawings: ["H1118", "H1101E", "H1119", "H1113C", "H1114B", "H1115B", "H1116B"],
            manuals: ["TPDM Volume 2 Chapter 3.6", "TPDM Volume 2 Chapter 3.4"],
            usage: {
                description: "Type K5 to K9 precast concrete dropped kerb units providing controlled transitions from standard kerb height to footway level for vehicular access. Sequential installation creates smooth vehicle crossing points while maintaining pedestrian safety and accessibility compliance. Essential for driveway access and commercial vehicle entrances.",
                specifications: [
                    "Profile: Type K5-K9 sections per H1118 (progressive height reduction)",
                    "Length: 1000mm nominal for each transition unit",
                    "Material: Grade 30/20 precast concrete",
                    "Bedding: 1:3 cement mortar bed (100mm thick minimum)",
                    "Compliance: BS 7263 Part 1 and DDA accessibility requirements",
                    "Sequence: K1-K5-K6-K7-K7-K8-K9-K1 for standard access",
                    "Width: Minimum 7.3m for container vehicle access",
                    "Joint width: 10mm between units"
                ],
                applications: [
                    "Vehicle access points across footways per TPDM Chapter 3.6",
                    "Private driveway entrances with controlled transition",
                    "Commercial vehicle access requiring smooth crossing",
                    "Car park entrances and service vehicle access",
                    "Run-in construction per TPDM visibility requirements",
                    "Emergency vehicle access where kerb crossing required"
                ],
                conditions: [
                    "Vehicular access requirements across footways",
                    "Compliance with run-in location restrictions per TPDM 3.6.2",
                    "Minimum 7.3m width for container vehicle access",
                    "Visibility requirements per TPDM Table 3.6.3.1",
                    "Areas requiring smooth vehicle transition with pedestrian safety"
                ]
            },
            composition: {
                layers: [
                    "Footway surface preparation and access marking",
                    "Excavation for drop kerb installation to required depths",
                    "Grade 20/20 concrete foundation bedding for vehicle loading",
                    "1:3 cement mortar bedding (minimum 100mm thick)",
                    "Sequential installation: K1-K5-K6-K7-K7-K8-K9-K1 pattern",
                    "10mm joint spacing maintenance throughout sequence",
                    "Joint sealing between drop kerb units",
                    "Footway surface reinstatement around kerb installation",
                    "Tactile paving installation where DDA compliance required"
                ],
                materials: [
                    "Grade 30/20 precast concrete drop kerbs (K5-K9 sequence)",
                    "Grade 20/20 concrete foundation where vehicle loads require",
                    "1:3 cement mortar for bedding (minimum 100mm thickness)",
                    "Flexible joint sealant for weather resistance",
                    "Type 1 granular backfill material",
                    "Footway reinstatement materials",
                    "Tactile paving units where accessibility compliance required"
                ]
            },
            installation: {
                steps: [
                    "Check run-in location compliance per TPDM 3.6.2 restrictions",
                    "Verify visibility requirements per TPDM Table 3.6.3.1",
                    "Mark out 7.3m minimum width for vehicle access",
                    "Excavate footway to formation levels for kerb sequence",
                    "Install Grade 20/20 concrete foundation where required",
                    "Place 1:3 cement mortar bedding to correct levels",
                    "Install kerb sequence: K1-K5-K6-K7-K7-K8-K9-K1",
                    "Maintain 10mm joints throughout installation",
                    "Point and seal all joints for weather protection",
                    "Reinstate footway surfaces around completed installation",
                    "Install tactile paving where DDA compliance required"
                ],
                drawings: ["H1118", "H1119", "H1113C", "H1114B", "H1115B", "H1116B", "TPDM Access Details"],
                tools: ["Excavation equipment", "Level checking instruments", "Compaction equipment", "Joint pointing tools"],
                materials: ["K5-K9 drop kerb sequence", "Cement mortar bedding", "Foundation concrete", "Joint sealants", "Tactile paving units"]
            }
        },
        {
            id: "k10-14",
            name: "K10-K14 - Pedestrian Drop Kerbs",
            category: "kerbs",
            description: "Drop kerb series (K10-K14) for pedestrian crossings and accessibility per H1118",
            drawings: ["H1118", "H1101E", "H1134", "H1117B"],
            manuals: ["TPDM Volume 2 Chapter 3.7"],
            usage: {
                applications: [
                    "Designated pedestrian crossings",
                    "Zebra crossing approaches",
                    "Pelican and puffin crossing points",
                    "Accessibility compliance at junctions",
                    "Wheelchair and mobility aid access",
                    "Pushchair and trolley access points"
                ],
                conditions: [
                    "All designated pedestrian crossing points",
                    "Accessibility compliance requirements",
                    "Areas with wheelchair and mobility aid users",
                    "Integration with tactile paving systems",
                    "Compliance with footway ramping standards"
                ]
            },
            composition: {
                layers: [
                    "Existing kerb and footway removal at crossing point",
                    "Subgrade preparation for accessibility gradient",
                    "Reinforced foundation for pedestrian and vehicle loads",
                    "Sequential drop kerb installation (K10-K11-K12-K13-K14)",
                    "Precise level and gradient control for accessibility",
                    "Tactile paving installation per accessibility standards",
                    "Integration with crossing infrastructure and markings"
                ],
                materials: [
                    "Grade 30/20 precast concrete drop kerbs (K10-K14)",
                    "Accessibility-compliant foundation materials",
                    "Tactile paving units (blister and corduroy)",
                    "Joint sealant and pointing materials",
                    "Footway surface materials for integration"
                ]
            },
            installation: {
                steps: [
                    "Survey crossing point for accessibility compliance",
                    "Calculate gradient requirements (max 1:12)",
                    "Remove existing kerb and prepare crossing area",
                    "Install reinforced foundation to accessibility levels",
                    "Position drop kerbs (K10-K14) to achieve required gradient",
                    "Install tactile paving in accordance with standards",
                    "Complete integration with road markings and signage",
                    "Test accessibility compliance and smooth operation"
                ],
                manuals: ["H1134", "TPDM Volume 2 Chapter 3.7", "Accessibility Design Standards"],
                tools: ["Accessibility gradient measuring tools", "Tactile paving installation equipment", "Level control instruments"],
                materials: ["K10-K14 pedestrian drop kerbs", "Tactile paving systems", "Accessibility-compliant materials"]
            },
            variants: [
                {
                    name: "Standard Pedestrian Crossing",
                    use: "Normal pedestrian crossings with standard width requirements",
                    manuals: ["TPDM V2C3.7"]
                },
                {
                    name: "Wide Pedestrian Crossing",
                    use: "Wider crossings for high pedestrian volumes or multiple lanes",
                    manuals: ["H1134"]
                },
                {
                    name: "Controlled Crossing Integration",
                    use: "Integration with traffic signals, pelican/puffin crossings",
                    manuals: ["TPDM Volume 4 Road Traffic Signals"]
                }
            ]
        },
        {
            id: "e1",
            name: "E1 - Cycle Track Edge",
            category: "kerbs",
            description: "Type E1 precast concrete edging for cycle track to footpath separation per H1118",
            drawings: ["H1118", "H1101E"],
            manuals: ["TPDM Volume 2 Chapter 3.8", "Cycle Infrastructure Design"],
            usage: {
                description: "Type E1 precast concrete edging providing low-level delineation between cycle tracks and adjacent footways or carriageways. Designed to guide cyclists while allowing occasional crossing by pedestrians and emergency access. Essential for modern cycle infrastructure providing clear route definition without creating barriers.",
                specifications: [
                    "Profile: Type E1 section per H1118 (low-level edge guidance)",
                    "Height: 60mm above cycle track surface (low-profile design)",
                    "Length: 1000mm nominal precast units",
                    "Material: Grade 30/20 precast concrete",
                    "Bedding: 1:3 cement mortar bed (75mm thick minimum)",
                    "Compliance: BS 7263 Part 1 for precast concrete units",
                    "Joint width: 10mm between units",
                    "Profile: Splayed edge for cyclist comfort and safety"
                ],
                applications: [
                    "Cycle track edge definition and route guidance",
                    "Separation between dedicated cycle lanes and footways",
                    "Cycle infrastructure boundary marking in urban areas",
                    "Low-level delineation allowing pedestrian crossing",
                    "Cycle route guidance through shared use areas",
                    "Integration with cycle lane markings and signage"
                ],
                conditions: [
                    "Dedicated cycle track installations requiring edge definition",
                    "Mixed-use areas needing cycle route delineation",
                    "Urban cycle infrastructure with pedestrian interface",
                    "Areas requiring cyclist guidance without creating barriers"
                ]
            },
            composition: {
                layers: [
                    "Surface preparation for cycle track and adjacent area",
                    "Excavation for E1 edging to required formation levels",
                    "Grade 20/20 concrete foundation where structural loads expected",
                    "1:3 cement mortar bedding (minimum 75mm thick)",
                    "E1 edging unit installation with precise level control",
                    "10mm joint spacing maintenance between units",
                    "Type 1 granular backfill and compaction behind edging",
                    "Joint pointing for weather resistance and cyclist safety",
                    "Surface integration with cycle track and footway finishes"
                ],
                materials: [
                    "Grade 30/20 precast concrete E1 edging units (1000mm nominal)",
                    "1:3 cement mortar for bedding (minimum 75mm thickness)",
                    "Grade 20/20 concrete foundation where required",
                    "Type 1 granular material for backfill and support",
                    "Joint pointing mortar for weather sealing"
                ]
            },
            installation: {
                steps: [
                    "Mark out cycle track boundary and edging alignment",
                    "Excavate to formation levels for edging and bedding",
                    "Install Grade 20/20 concrete foundation where required",
                    "Place 1:3 cement mortar bedding to precise levels",
                    "Position E1 edging units ensuring cyclist-friendly profile",
                    "Maintain 10mm joints and level consistency",
                    "Backfill with Type 1 granular material and compact",
                    "Point all joints for weather protection and safety",
                    "Integrate with cycle track surface and markings",
                    "Verify cyclist comfort and safety requirements"
                ],
                drawings: ["H1118", "H1101E", "Cycle Infrastructure Details"],
                tools: ["Cycle track construction equipment", "Precise level instruments", "Compaction equipment"],
                materials: ["E1 cycle track edging", "Cement mortar bedding", "Granular backfill", "Joint pointing materials"]
            }
        },
        {
            id: "e2",
            name: "E2 - Planter Kerb",
            category: "kerbs",
            description: "Type E2 edging for footway to planter separation",
            drawings: ["h1118"],
            manuals: ["Landscape Design Standards"],
            overview: {
                description: "Type E2 precast concrete edging designed for separating footways from planted areas. Provides defined boundary for landscaping while allowing surface water drainage into planted areas.",
                specifications: [
                    "Profile: E2 edging section per H1118",
                    "Length: 750mm nominal edging unit",
                    "Material: Grade 30/20 concrete",
                    "Height: Low profile for planter boundary",
                    "Application: Footway to planted area separation",
                    "Compliance: BS 7263 Part 1 (except water absorption testing)"
                ]
            },
            usage: {
                applications: [
                    "Footway to planter separation",
                    "Landscaped area boundary definition",
                    "Tree pit and garden bed edging",
                    "Decorative landscape integration",
                    "Surface water direction to planted areas"
                ],
                conditions: [
                    "Landscaped areas adjacent to footways",
                    "Areas requiring defined planting boundaries",
                    "Decorative and amenity applications",
                    "Where drainage into planted areas is beneficial"
                ]
            },
            composition: {
                layers: [
                    "Footway and planter level coordination",
                    "Edge line marking between footway and planter",
                    "Shallow foundation bedding with drainage consideration",
                    "E2 edging unit installation with 750mm lengths",
                    "Level setting for surface water flow to planters",
                    "Joint pointing and weatherproofing",
                    "Integration with footway paving and planting"
                ],
                materials: [
                    "Grade 30/20 precast concrete E2 edging units",
                    "Free-draining foundation bedding material",
                    "Weather-resistant joint pointing compound",
                    "Landscape integration materials"
                ]
            },
            installation: {
                steps: [
                    "Coordinate footway and landscape design",
                    "Mark boundaries between paved and planted areas",
                    "Excavate foundation allowing for drainage",
                    "Install E2 edging with appropriate levels for drainage",
                    "Ensure smooth integration with footway paving",
                    "Complete joint pointing and sealing",
                    "Coordinate with planting and irrigation installation"
                ],
                manuals: ["H1118", "Landscape Design Standards"],
                tools: ["Landscape construction equipment", "Drainage level tools", "Edging installation tools"],
                materials: ["E2 planter edging units", "Drainage-compatible bedding", "Landscape coordination materials"]
            }
        },
        {
            id: "e3",
            name: "E3 - Boundary Kerb",
            category: "kerbs",
            description: "Type E3 edging for footway to property boundary separation",
            drawings: ["h1118"],
            manuals: ["Property Boundary Standards"],
            usage: {
                applications: [
                    "Public footway to private property boundaries",
                    "Legal boundary demarcation",
                    "Property line definition",
                    "Maintenance responsibility boundaries",
                    "Clear separation of public and private areas"
                ],
                conditions: [
                    "Property boundary requirements",
                    "Legal demarcation needs",
                    "Areas requiring clear public/private separation",
                    "Maintenance boundary definition"
                ]
            },
            composition: {
                layers: [
                    "Boundary survey and legal verification",
                    "Property line marking and setting out",
                    "Foundation excavation along property boundary",
                    "E3 edging unit installation with 750mm lengths",
                    "Precise alignment to legal property boundaries",
                    "Joint pointing and boundary marking",
                    "Integration with footway and property surfaces"
                ],
                materials: [
                    "Grade 30/20 precast concrete E3 boundary edging",
                    "Precise foundation bedding materials",
                    "Permanent joint pointing compounds",
                    "Boundary marker integration materials"
                ]
            },
            installation: {
                steps: [
                    "Verify legal property boundaries with survey",
                    "Mark precise boundary line positions",
                    "Excavate foundation along exact property line",
                    "Install E3 edging units to legal boundary alignment",
                    "Ensure precise positioning and levels",
                    "Complete joint pointing and boundary verification",
                    "Coordinate with property owners and legal requirements"
                ],
                manuals: ["H1118", "Property Boundary Standards", "Legal Survey Requirements"],
                tools: ["Survey equipment", "Boundary marking tools", "Precision installation equipment"],
                materials: ["E3 boundary edging units", "Survey-grade bedding materials", "Legal boundary markers"]
            }
        },
        {
            id: "gk1",
            name: "Granite Kerb",
            category: "kerbs",
            description: "Natural granite kerb for premium and heritage applications",
            drawings: ["h4101"],
            manuals: ["Heritage and Premium Development Standards"],
            usage: {
                applications: [
                    "Premium urban developments",
                    "Heritage area conservation projects",
                    "High-end commercial districts",
                    "Ceremonial routes and public spaces",
                    "Areas requiring long-term durability and aesthetics"
                ],
                conditions: [
                    "Premium finish specifications",
                    "Heritage conservation requirements",
                    "Long-term durability priorities",
                    "Aesthetic enhancement objectives",
                    "Low maintenance requirements"
                ]
            },
            composition: {
                layers: [
                    "Enhanced foundation excavation for granite weight",
                    "Reinforced concrete foundation bedding",
                    "Granite kerb unit positioning with minimum 600mm lengths",
                    "Precise alignment and level control",
                    "Enhanced backfill and support systems",
                    "Natural stone joint pointing with compatible materials",
                    "Surface protection and sealing treatment"
                ],
                materials: [
                    "Natural granite kerb units with chisel-dressed finish",
                    "High-strength concrete foundation materials",
                    "Natural stone compatible joint pointing compound",
                    "Enhanced backfill materials for granite support",
                    "Stone sealing and protection treatments"
                ]
            },
            installation: {
                steps: [
                    "Plan granite kerb layout with aesthetic considerations",
                    "Excavate reinforced foundation for granite weight",
                    "Install high-strength foundation bedding",
                    "Position granite units with minimum 600mm lengths",
                    "Achieve precise alignment and consistent levels",
                    "Complete natural stone joint pointing",
                    "Apply protective sealing and finishing treatments"
                ],
                manuals: ["H4101", "Natural Stone Construction Standards"],
                tools: ["Heavy lifting equipment for granite", "Stone cutting and finishing tools", "Precision alignment equipment"],
                materials: ["Natural granite kerb units", "Stone-grade foundation materials", "Natural stone sealants"]
            },
            variants: [
                {
                    name: "Standard Granite Kerb",
                    use: "Height 150-300mm, straight sections with chisel-dressed finish",
                    manuals: ["H4101"]
                },
                {
                    name: "Granite Quadrant Kerb",
                    use: "Curved sections with radius 200-300mm as required",
                    manuals: ["H4101"]
                },
                {
                    name: "Heritage Conservation Granite",
                    use: "Matching existing heritage stonework with specialized finish",
                    manuals: ["Heritage Conservation Guidelines"]
                }
            ]
        }
    ],
    barriers: [
        {
            id: "cpb1",
            name: "CPB1 - Concrete Profile Barrier",
            category: "barriers",
            description: "Single-sided concrete profile barrier using New Jersey profile for roadside and central reservation protection",
            drawings: ["H2101D", "H2104"],
            manuals: ["TPDM Volume 2 Chapter 3.9"],
            usage: {
                description: "Cast-in-place concrete profile barrier designed to redirect errant vehicles through the New Jersey profile shape. The 55° lower slope allows vehicle wheels to climb while the upper slope redirects the vehicle parallel to the barrier. Provides L2 containment level for speeds up to 113 km/h with minimal maintenance requirements.",
                specifications: [
                    "Height: 800mm above ground level",
                    "Base width: 500mm minimum, expandable to 800mm for taller barriers", 
                    "Top width: 200mm minimum (may be increased for lighting columns)",
                    "Material: Grade 30/20 concrete",
                    "Profile: New Jersey with 55° lower slope",
                    "Containment level: L2 (113 km/h passenger car, 20° impact angle)",
                    "Concrete finish: Class F3 on transverse joints, F5 on exposed surfaces, U5 on unformed surfaces",
                    "Steel fabric: Welded steel fabric to B.S. 4483 type A 393 with 60mm concrete cover"
                ],
                applications: [
                    "Central reservation barriers on dual carriageways ≥70 km/h",
                    "Roadside protection where maintenance access is difficult",
                    "Bridge approach protection requiring minimal deflection",
                    "Areas requiring vehicle containment with low maintenance"
                ],
                conditions: [
                    "Roads with design speed ≥70 km/h per TPDM criteria",
                    "Locations requiring L2 containment level",
                    "Areas where barrier maintenance would cause traffic disruption",
                    "Must be accompanied by marginal strip ≥300mm with continuous edge line marking"
                ]
            },
            composition: {
                layers: [
                    "Site survey and barrier alignment marking per design drawings",
                    "Excavation and foundation preparation to design levels",
                    "Steel fabric reinforcement installation (A 393 type) with 60mm cover",
                    "Formwork erection for New Jersey profile (800mm height, 55° lower slope)",
                    "Grade 30/20 concrete placement with Class F3/F5 finish requirements",
                    "Joint groove cutting for transverse joints as specified",
                    "Concrete curing and surface finishing to specification"
                ],
                materials: [
                    "Grade 30/20 concrete meeting durability requirements",
                    "Welded steel fabric reinforcement B.S. 4483 type A 393",
                    "Formwork systems for accurate New Jersey profile",
                    "Joint sealant for transverse joints",
                    "Concrete finishing materials for Class F3/F5 surfaces"
                ]
            },
            installation: {
                steps: [
                    "Survey barrier alignment and mark centerline per H2101D",
                    "Excavate foundation area to design depths and levels",
                    "Install steel fabric reinforcement with 60±10mm concrete cover",
                    "Erect formwork to achieve accurate New Jersey profile dimensions",
                    "Place Grade 30/20 concrete ensuring proper consolidation",
                    "Strike formwork after adequate curing period",
                    "Cut transverse joint grooves and apply sealant",
                    "Install marginal strip markings per TPDM Volume 3"
                ],
                drawings: ["H2101D", "H2104"],
                tools: ["Surveying equipment", "Excavation machinery", "Concrete mixer/pump", "Formwork systems", "Joint cutting equipment"],
                materials: ["Grade 30/20 concrete", "A 393 steel fabric", "Formwork materials", "Joint sealant", "Marking materials"]
            },
            variants: [
                {
                    name: "CPB1 Standard",
                    use: "Standard 800mm height for general roadside protection",
                    drawings: ["H2101D"]
                },
                {
                    name: "CPB1 Taller",
                    use: "Increased height up to 800mm base width for special applications",
                    drawings: ["H2101D"]
                },
                {
                    name: "CPB1 Terminal",
                    use: "Ramped terminal section for barrier ends ≤50 km/h",
                    drawings: ["H2103"]
                }
            ]
        },
        {
            id: "cpb2",
            name: "CPB2 - Removable Concrete Profile Barrier",
            category: "barriers",
            description: "Removable concrete profile barrier for temporary traffic management and work zones",
            drawings: ["H2254", "H2255", "H2256"],
            manuals: ["TPDM Volume 2 Chapter 3.4.8", "hyd-gn34a", "TPDM Volume 2 Chapter 3.9"],
            usage: {
                description: "Removable concrete profile barriers designed for temporary traffic management and work zone protection. These precast barriers can be repositioned using specialized lifting equipment while maintaining L2 containment performance equivalent to permanent concrete barriers. Features integrated lifting points for quick deployment and removal.",
                specifications: [
                    "Height: 800mm",
                    "Length: 4000mm standard segments",
                    "Material: Reinforced concrete (Grade 30/20)",
                    "Profile: New Jersey profile matching permanent barriers",
                    "Type: Removable/portable with integrated lifting points",
                    "Containment level: L2 equivalent to permanent barriers",
                    "Weight: Approximately 1.5 tonnes per 4m segment",
                    "Connection: Removable hardware for segment joining"
                ],
                applications: [
                    "Temporary traffic diversion during construction",
                    "Work zone protection with frequent reconfiguration needs",
                    "Emergency lane closure for incident management",
                    "Movable median barriers for traffic flow optimization",
                    "Event-based traffic control requiring temporary protection"
                ],
                conditions: [
                    "Temporary installations requiring repositioning capability",
                    "Areas requiring frequent barrier reconfiguration",
                    "Construction zones with changing traffic patterns",
                    "Emergency access provisions requiring rapid removal"
                ]
            },
            composition: {
                layers: [
                    "Site survey and barrier alignment marking",
                    "Ground preparation and leveling for stable placement",
                    "Removable barrier unit positioning using lifting equipment",
                    "Unit connection with removable hardware systems",
                    "End anchor block installation for terminal points",
                    "Reflective marking application for visibility",
                    "Lifting point securing and protection for future removal"
                ],
                materials: [
                    "Precast Grade 30/20 concrete barrier segments",
                    "Integrated lifting points and hardware",
                    "Removable connection systems between units",
                    "End anchor blocks for terminal installations",
                    "Reflective markings and visibility enhancements"
                ]
            },
            installation: {
                steps: [
                    "Survey and mark barrier alignment for temporary installation",
                    "Prepare ground surface ensuring level placement areas",
                    "Position barrier units using crane or specialized lifting equipment",
                    "Connect adjacent units with removable hardware",
                    "Install end anchor blocks at terminal points",
                    "Apply reflective markings for day/night visibility",
                    "Secure lifting points and document for future removal"
                ],
                drawings: ["H2254", "H2255", "H2256"],
                tools: ["Mobile crane", "Level", "Survey equipment", "Hand tools for connections"],
                materials: ["Precast barrier units", "Connection hardware", "End anchor blocks", "Reflective materials"]
            },
            variants: [
                {
                    name: "CPB2 Standard",
                    use: "General removable barrier for temporary installations",
                    drawings: ["H2256"]
                },
                {
                    name: "CPB2 End Anchor",
                    use: "End anchor block system for terminal points",
                    drawings: ["H2255"]
                }
            ]
        },
        {
            id: "cb1",
            name: "CB1 - Corrugated Beam Barrier (W-Beam)",
            category: "barriers",
            description: "Untensioned corrugated beam safety fence with W-beam profile for roadside protection",
            drawings: ["H2112C", "H2117D", "H2115A", "H2116B"],
            manuals: ["TPDM Volume 2 Chapter 3.9"],
            usage: {
                description: "Untensioned corrugated beam barrier system providing L1 containment level through controlled deflection. The W-beam profile with spacer blocks allows smooth vehicle redirection while absorbing impact energy. Available with either concrete footings for rigid installation or compacted earth footings for greater deflection.",
                specifications: [
                    "Beam profile: W-beam corrugated steel, 310-314mm wide",
                    "Beam dimensions: 4000mm length, 2-wave corrugated profile",
                    "Beam height: 600mm centerline from adjacent surface",
                    "Post spacing: 4000mm standard, 2000mm for structure protection",
                    "Material: Hot-dip galvanized steel to BS EN ISO 1461:2022",
                    "Beam thickness: 3-3.5mm base metal thickness",
                    "Containment level: L1 (80 km/h passenger car, 20° impact angle)",
                    "Blockout: 200mm minimum from support post for smooth redirection"
                ],
                applications: [
                    "Rural road protection where deflection space available",
                    "Protection of lighting columns and structures (2m post spacing)",
                    "Roadside barriers on roads with speed limit <70 km/h",
                    "Cost-effective vehicle restraint where space permits deflection",
                    "Central reservations with adequate width for deflection"
                ],
                conditions: [
                    "Speed limits typically <70 km/h for standard application",
                    "Adequate deflection space available (minimum 1000mm from hazard)",
                    "Areas where maintenance access is available",
                    "Locations where beam deflection will not create secondary hazards"
                ]
            },
            composition: {
                layers: [
                    "Post installation at 4000mm centers (2000mm for structure protection)",
                    "Concrete footing installation for rigid mounting or earth compaction",
                    "Spacer block installation maintaining 200mm beam offset from posts",
                    "W-beam section installation with proper lap direction (traffic flow)",
                    "Splice bolt connection between beam sections",
                    "End treatment installation with appropriate ramp-down or anchoring"
                ],
                materials: [
                    "Hot-dip galvanized W-beam sections (310-314mm width)",
                    "Galvanized steel posts with concrete footings or earth anchorage",
                    "Spacer blocks for 200mm post offset",
                    "M16 splice bolts for beam connections",
                    "Concrete for post footings where specified",
                    "End anchor assemblies and hardware"
                ]
            },
            installation: {
                steps: [
                    "Survey and mark post locations at 4000mm centers (2000mm for structures)",
                    "Install posts with concrete footings or compact earth as specified",
                    "Mount spacer blocks ensuring 200mm offset from post face",
                    "Install W-beam sections lapped in direction of traffic flow",
                    "Connect beam sections with M16 splice bolts per H2112C details",
                    "Install end treatments with proper anchoring or ramp-down",
                    "Apply reflective elements as specified for visibility"
                ],
                drawings: ["H2112C", "H2117D", "H2115A", "H2116B"],
                tools: ["Post driver", "Impact wrench", "Level", "Drilling equipment", "Concrete mixer"],
                materials: ["W-beam sections", "Support posts", "Spacer blocks", "Splice bolts", "Concrete (if specified)", "End anchors"]
            },
            variants: [
                {
                    name: "CB1 Concrete Footing",
                    use: "Rigid installation for structure protection with 2m post spacing",
                    drawings: ["H2117D"]
                },
                {
                    name: "CB1 Earth Footing", 
                    use: "Deflecting installation for wide central reservations",
                    drawings: ["H2115A"]
                },
                {
                    name: "CB1 End Treatment",
                    use: "Proper end anchoring to prevent vehicle snagging",
                    drawings: ["H2116B"]
                }
            ]
        },
        {
            id: "cb2",
            name: "CB2 - Movable Steel Barrier",
            category: "barriers",
            description: "Movable steel beam barrier system for emergency access and temporary installations",
            drawings: ["H2273"],
            manuals: ["TPDM Volume 2 Chapter 3.4.8", "hyd-gn34a", "TPDM Volume 2 Chapter 3.9"],
            usage: {
                description: "Movable steel beam barriers designed for temporary installations and emergency access provisions. These barriers can be relocated or removed to allow emergency vehicle passage through median openings while maintaining protection during normal operations. Features quick-release mechanisms for rapid deployment in work zones.",
                specifications: [
                    "Height: 750mm beam centerline",
                    "Length: 4320mm beam sections",
                    "Material: Hot-dip galvanized steel",
                    "Profile: W-beam corrugated profile",
                    "Type: Movable/removable with quick-release connections",
                    "Containment level: L1 (80 km/h passenger car)",
                    "Post spacing: Typically 4000mm centers",
                    "Access: Designed for emergency vehicle passage capability"
                ],
                applications: [
                    "Emergency access gaps in median barriers",
                    "Temporary work zone protection with relocation needs",
                    "Rural road protection requiring periodic access",
                    "Cost-effective temporary vehicle restraint",
                    "Construction zones with changing access requirements"
                ],
                conditions: [
                    "Areas requiring periodic emergency vehicle access",
                    "Temporary installations on roads with moderate speeds",
                    "Locations where barrier relocation may be necessary",
                    "Work zones requiring flexible protection arrangements"
                ]
            },
            composition: {
                layers: [
                    "Movable post installation with quick-release foundations",
                    "W-beam section mounting with removable spacer blocks",
                    "Beam connection using removable splice bolts",
                    "Quick-release mechanism installation for emergency access",
                    "End treatment with appropriate terminal hardware",
                    "Reflective marking application for enhanced visibility"
                ],
                materials: [
                    "Hot-dip galvanized W-beam sections",
                    "Movable support posts with quick-release systems",
                    "Removable spacer blocks and hardware", 
                    "Quick-release splice connections",
                    "Emergency access mechanism components",
                    "Reflective delineation materials"
                ]
            },
            installation: {
                steps: [
                    "Install movable support posts at 4m centers with quick-release foundations",
                    "Mount beam sections with removable spacer blocks",
                    "Connect beams with removable splice bolts per specifications",
                    "Install quick-release mechanisms for emergency access",
                    "Install appropriate end treatments and terminals",
                    "Apply reflective markings for visibility enhancement",
                    "Test emergency access operation and train personnel"
                ],
                drawings: ["H2273"],
                tools: ["Post driver", "Impact wrench", "Level", "Quick-release tools"],
                materials: ["Galvanized steel beams", "Movable posts", "Quick-release hardware", "Splice bolts", "Reflective materials"]
            },
            variants: [
                {
                    name: "CB2 Standard",
                    use: "General movable barrier for emergency access",
                    drawings: ["H2273"]
                },
                {
                    name: "CB2 Emergency Gate",
                    use: "Emergency access configuration with quick opening",
                    drawings: ["H2273"]
                }
            ]
        },
        {
            id: "cb3",
            name: "CB3 - Thrie Beam Barrier",
            category: "barriers",
            description: "Thrie beam crash barrier system providing L2 containment level",
            drawings: ["H2191A"],
            manuals: ["TPDM Volume 2 Chapter 3.9"],
            usage: {
                description: "Thrie beam barrier providing L2 containment level through enhanced beam profile with three corrugations instead of two. Mounted at 875mm height with stronger posts and closer spacing, this system reduces rollover incidents for vehicles with high center of gravity more effectively than W-beam barriers. Available in standard and modified blockout configurations.",
                specifications: [
                    "Beam profile: Thrie beam with three corrugations (troughs/crests)",
                    "Beam height: 875mm centerline from adjacent surface",
                    "Post spacing: Closer than W-beam for increased stiffness",
                    "Material: Hot-dip galvanized steel to BS EN ISO 1461:2022",
                    "Containment level: L2 (113 km/h passenger car, 20° impact angle)",
                    "Blockout: Standard or 350mm deep modified blockout with notch",
                    "Post type: Stronger posts than W-beam system",
                    "Beam mounting: Higher mounting for improved performance with tall vehicles"
                ],
                applications: [
                    "Rural road protection requiring L2 containment",
                    "Areas with frequent high center-of-gravity vehicles",
                    "Locations where concrete profile barrier cost is not warranted",
                    "Roads requiring higher rigidity than W-beam but lower than concrete",
                    "Protection where rollover prevention is priority"
                ],
                conditions: [
                    "Roads with speed limits ≥70 km/h requiring L2 containment",
                    "Areas with high frequency of tall vehicle traffic",
                    "Locations where concrete barrier is not justified by cost/risk",
                    "Sites requiring more rigid barrier than W-beam system"
                ]
            },
            composition: {
                layers: [
                    "Stronger post installation at closer spacing than W-beam",
                    "Standard or modified blockout installation (350mm deep with notch)",
                    "Thrie beam rail mounting at 875mm height",
                    "Beam connection with enhanced splice details",
                    "End treatment installation appropriate for L2 containment",
                    "Reflective delineation for enhanced visibility"
                ],
                materials: [
                    "Hot-dip galvanized thrie beam sections with three corrugations",
                    "Stronger steel posts designed for L2 containment loads",
                    "Standard blockout or 350mm modified blockout with bottom notch",
                    "Enhanced splice bolts and connection hardware",
                    "Appropriate end treatment hardware for L2 system"
                ]
            },
            installation: {
                steps: [
                    "Install stronger support posts at specified spacing for L2 system",
                    "Mount standard or modified blockout sections as specified",
                    "Install thrie beam sections at 875mm height with proper lap",
                    "Connect beam sections with enhanced splice connections",
                    "Install end treatments appropriate for L2 containment level",
                    "Apply reflective markings for enhanced visibility",
                    "Verify system meets L2 containment requirements"
                ],
                drawings: ["H2191A"],
                tools: ["Heavy-duty post driver", "Impact wrench", "Level", "Lifting equipment"],
                materials: ["Thrie beam sections", "Stronger posts", "Standard/modified blockouts", "Enhanced splice bolts", "End treatments"]
            },
            variants: [
                {
                    name: "CB3 Standard Blockout",
                    use: "General L2 containment with standard blockout system",
                    drawings: ["H2191A"]
                },
                {
                    name: "CB3 Modified Blockout",
                    use: "Enhanced performance for frequent heavy vehicle impacts with 350mm notched blockout",
                    drawings: ["H2191A"]
                }
            ]
        },
        {
            id: "cb4",
            name: "CB4 - Thrie Beam Barrier with Additional Rail",
            category: "barriers",
            description: "L3 containment thrie beam system with additional rail for enhanced protection",
            drawings: ["H2238"],
            manuals: ["TPDM Volume 2 Chapter 3.9"],
            usage: {
                description: "Thrie beam barrier enhanced with additional rail to achieve L3 containment level. Capable of containing both passenger cars (113 km/h) and double-decked buses (22 tonne, 50 km/h) at 20° impact angle. Available in standard and modified configurations where frequent heavy vehicle impacts are expected.",
                specifications: [
                    "Containment level: L3 (passenger car 113 km/h + double-decked bus 22 tonne 50 km/h)",
                    "Primary beam: Thrie beam profile at 875mm height",
                    "Additional rail: Secondary rail enhancing containment capacity",
                    "Post type: Enhanced posts capable of L3 loading",
                    "Impact capability: 1.5 tonne passenger car and 22 tonne bus",
                    "Material: Hot-dip galvanized steel system",
                    "Configuration: Standard or modified for heavy vehicle frequency",
                    "Performance: Exceeds single rail thrie beam and concrete profile barrier"
                ],
                applications: [
                    "High-risk locations requiring containment exceeding L2 systems",
                    "Areas with mixed traffic including heavy buses",
                    "Locations where L4 high containment barrier not warranted",
                    "Protection where consequences of vehicle departure are serious",
                    "Roads with significant bus traffic requiring enhanced protection"
                ],
                conditions: [
                    "Warranted by TPDM scoring system ≥0.70 points (Table 3.9.3.5)",
                    "Roads with speed limit ≥70 km/h and ≥10 bus routes",
                    "Height ≥20m above ground or steep downhill slopes",
                    "Traffic volume ≥30,000 AADT with ≥20% commercial vehicles",
                    "Special designer considerations for very high accident risk"
                ]
            },
            composition: {
                layers: [
                    "Enhanced post installation capable of L3 containment loads",
                    "Primary thrie beam installation at correct height",
                    "Additional rail installation for enhanced containment",
                    "Standard or modified system based on heavy vehicle frequency",
                    "Reinforced connections between beam elements",
                    "Appropriate end treatments for L3 containment level"
                ],
                materials: [
                    "Primary thrie beam rail sections",
                    "Additional rail components for L3 enhancement",
                    "Enhanced posts designed for L3 impact loads",
                    "Reinforced connection hardware and brackets",
                    "Modified components where frequent heavy impacts expected"
                ]
            },
            installation: {
                steps: [
                    "Install enhanced support posts designed for L3 loading",
                    "Mount primary thrie beam at specified height and alignment",
                    "Install additional rail components per L3 configuration",
                    "Use modified components if frequent heavy vehicle impacts expected",
                    "Connect all components with reinforced hardware systems",
                    "Install end treatments appropriate for L3 containment",
                    "Verify system meets L3 performance requirements"
                ],
                drawings: ["H2238"],
                tools: ["Heavy-duty installation equipment", "Impact wrench", "Level", "Crane for heavy components"],
                materials: ["Thrie beam sections", "Additional rail components", "Enhanced posts", "L3-rated hardware", "End treatments"]
            },
            variants: [
                {
                    name: "CB4 Standard Additional Rail",
                    use: "Standard L3 containment for mixed traffic conditions",
                    drawings: ["H2238"]
                },
                {
                    name: "CB4 Modified Additional Rail",
                    use: "Modified system where frequent heavy vehicle impacts expected",
                    drawings: ["H2238"]
                }
            ]
        },
        {
            id: "sp1",
            name: "Steel Parapet",
            category: "barriers",
            description: "Steel parapet barrier system for bridges and elevated sections",
            drawings: ["SSD164-165"],
            manuals: ["TPDM Volume 2 Chapter 3.9"],
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
                    use: "General bridge parapet"
                },
                {
                    name: "SP1 Extended",
                    use: "Extended height version"
                }
            ]
        },
        {
            id: "crcp1",
            name: "Combined Rail Concrete Parapet",
            category: "barriers",
            description: "Combined rail and concrete parapet barrier system",
            drawings: ["SSD161-163"],
            manuals: ["TPDM Volume 2 Chapter 3.9"],
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
                    use: "Standard combined barrier"
                },
                {
                    name: "CRCP1 Enhanced",
                    use: "Enhanced aesthetic version"
                },
                {
                    name: "CRCP1 Terminal",
                    use: "Terminal end treatment"
                }
            ]
        },
        {
            id: "l4cp",
            name: "L4 Concrete Parapet",
            category: "barriers",
            description: "L4 containment level concrete parapet barrier",
            drawings: ["Figure 11.3 HyD SDM"],
            manuals: ["Highways Department Structures Design Manual Figure 11.3"],
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
                    use: "Standard L4 concrete parapet"
                },
                {
                    name: "L4CP Modified",
                    use: "Site-specific modifications"
                }
            ]
        },
    ],
    "railing & gate": [
        {
            id: "r1",
            name: "Type 2 Railings",
            category: "railings",
            description: "Type 2 railings for pedestrian control purpose per H2130H",
            drawings: ["H2130H", "H2131D", "H2132H", "H2134I"],
            manuals: ["TPDM Volume 2 Chapter 3.9", "HYD Standard Drawing H2130H"],
            usage: {
                description: "Type 2 steel railings designed for pedestrian control and guidance in urban environments. Provides effective crowd control at junctions, pedestrian crossings, and high-traffic areas while maintaining visual permeability. Essential for managing pedestrian flow and protecting pedestrians from vehicular traffic.",
                specifications: [
                    "Profile: Type 2 steel railing design per H2130H",
                    "Height: 1100mm above footway surface (standard pedestrian control height)",
                    "Panel length: Variable to suit site requirements and post spacing",
                    "Material: Hot-dip galvanized steel construction for durability",
                    "Post type: Steel posts with concrete foundation installation",
                    "Finish: Hot-dip galvanized coating for corrosion resistance",
                    "Expansion joints: H2134I expansion joint details where required",
                    "Installation: Concrete foundation posts with panel mounting system"
                ],
                applications: [
                    "Pedestrian control at junctions and traffic signal locations",
                    "Footway edge protection adjacent to carriageways",
                    "Traffic island protection and pedestrian refuge areas",
                    "School zone safety and child pedestrian protection",
                    "Urban commercial areas requiring pedestrian guidance",
                    "Bus stop and public transport interchange crowd control"
                ],
                conditions: [
                    "Areas requiring effective pedestrian guidance and control",
                    "Junction and crossing locations with high pedestrian volumes",
                    "High pedestrian activity zones requiring safety barriers",
                    "Urban environments where visual permeability is important"
                ]
            },
            composition: {
                layers: [
                    "Site survey and railing alignment marking",
                    "Post position marking at required centers per H2130H",
                    "Excavation for concrete post foundations",
                    "Concrete foundation installation for steel posts",
                    "Steel post installation and vertical alignment",
                    "Type 2 railing panel mounting and connection",
                    "Expansion joint installation per H2134I where required",
                    "Final alignment check and protective finish application"
                ],
                materials: [
                    "Hot-dip galvanized steel Type 2 railing panels per H2130H",
                    "Hot-dip galvanized steel posts with foundation brackets",
                    "Concrete for post foundations (Grade 20/20 minimum)",
                    "Galvanized bolts and connection hardware",
                    "Expansion joint materials per H2134I",
                    "Protective caps and end treatments"
                ]
            },
            installation: {
                steps: [
                    "Survey site and mark railing alignment per H2130H requirements",
                    "Mark post positions at required centers for site conditions",
                    "Excavate holes for concrete post foundations",
                    "Install posts with concrete ensuring vertical alignment",
                    "Allow concrete curing period before panel installation",
                    "Mount Type 2 railing panels ensuring proper connection",
                    "Install expansion joints per H2134I where thermal movement expected",
                    "Apply final protective treatments and inspect installation quality"
                ],
                drawings: ["H2130H", "H2131D", "H2132H", "H2134I"],
                tools: ["Core drill", "Level", "Torque wrench", "Concrete mixer", "Alignment equipment"],
                materials: ["Type 2 steel railing components", "Steel posts", "Concrete", "Expansion joint materials", "Galvanized fixings"]
            }
        },
        {
            id: "r2",
            name: "Type 2 Railings at Junction and Crossing",
            category: "railings",
            description: "Type 2 railings near Junction and Crossing with high visibility per H2132H",
            drawings: ["H2132H", "H2130H", "H2131D", "H2134I"],
            manuals: ["TPDM Volume 2 Chapter 3.9", "TPDM Volume 2 Chapter 3.7"],
            usage: {
                description: "Specialized Type 2 steel railings designed for junction and crossing locations where enhanced visibility and pedestrian control are critical. Features high-visibility elements and specific geometric arrangements to guide pedestrians safely through complex traffic environments while ensuring driver visibility.",
                specifications: [
                    "Profile: Type 2 railing with junction-specific high visibility modifications per H2132H",
                    "Height: 1100mm above footway surface with enhanced visibility features",
                    "Visibility: High-visibility panels or reflective elements for junction safety",
                    "Material: Hot-dip galvanized steel with visibility enhancements",
                    "Configuration: Specific geometric arrangements for junction/crossing locations",
                    "Sight lines: Designed to maintain required visibility triangles at junctions",
                    "Expansion joints: H2134I expansion joint details for longer installations",
                    "End treatments: Specialized end details for junction approaches"
                ],
                applications: [
                    "Pedestrian control at signalized junctions and crossings",
                    "High-visibility guidance at zebra crossings and pelican crossings",
                    "Junction approaches requiring enhanced pedestrian safety",
                    "Crossing points with complex geometric arrangements",
                    "Traffic signal controlled intersections with pedestrian phases",
                    "School crossing locations requiring maximum visibility"
                ],
                conditions: [
                    "Junction and crossing locations requiring enhanced visibility",
                    "Areas with complex traffic movements and pedestrian conflict points",
                    "High pedestrian activity zones at intersection approaches",
                    "Locations where standard Type 2 railings require visibility enhancement"
                ]
            },
            composition: {
                layers: [
                    "Junction geometry survey and sight line analysis",
                    "High-visibility railing alignment marking per H2132H",
                    "Post position optimization for junction visibility requirements",
                    "Concrete post foundation installation with junction considerations",
                    "Enhanced steel post installation ensuring sight line compliance",
                    "High-visibility Type 2 railing panel installation and alignment",
                    "Visibility enhancement application (reflective elements/high-vis panels)",
                    "Expansion joint installation per H2134I for thermal movement",
                    "Junction-specific end treatment installation and finishing"
                ],
                materials: [
                    "Hot-dip galvanized Type 2 railing panels with visibility enhancements per H2132H",
                    "Enhanced steel posts suitable for junction loading conditions",
                    "High-visibility panels or reflective tape/elements",
                    "Concrete for foundations (Grade 20/20 minimum)",
                    "Junction-specific connection hardware and brackets",
                    "Expansion joint materials per H2134I for longer runs"
                ]
            },
            installation: {
                steps: [
                    "Survey junction geometry and establish required sight lines per H2132H",
                    "Mark railing alignment ensuring visibility triangle compliance",
                    "Position posts optimizing pedestrian guidance and traffic visibility",
                    "Install concrete foundations considering junction loading conditions",
                    "Mount enhanced Type 2 railing panels with visibility features",
                    "Apply high-visibility elements or reflective treatments",
                    "Install expansion joints per H2134I where required",
                    "Verify sight line compliance and junction safety requirements",
                    "Complete installation with junction-appropriate end treatments"
                ],
                drawings: ["H2132H", "H2130H", "H2131D", "H2134I", "Junction Visibility Details"],
                tools: ["Junction survey equipment", "Sight line checking tools", "Core drill", "Level", "Torque wrench"],
                materials: ["High-visibility Type 2 railing components", "Enhanced steel posts", "Visibility enhancement materials", "Junction-grade concrete", "Specialized junction fixings"]
            }
        },
        {
            id: "r3",
            name: "Decorative Type Railings",
            category: "railings",
            description: "Type 4 railings for pedestrian control purpose",
            drawings: ["H2282A"],
            manuals: ["HYD Standard Drawing H2282A"],
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
            description: "Tubular amenity railings for aesthetic and functional applications per H2135C",
            drawings: ["H2135C", "H2131D"],
            manuals: ["HYD Standard Drawing H2135C", "Urban Design Guidelines"],
            usage: {
                description: "Tubular steel amenity railings designed for aesthetic enhancement and pedestrian guidance in urban environments. Provides elegant pedestrian control with improved visual appearance compared to standard Type 2 railings. Suitable for premium urban areas, landscaped environments, and public spaces requiring enhanced aesthetic appeal.",
                specifications: [
                    "Profile: Tubular steel amenity railing design per H2135C",
                    "Height: 1100mm above surface (standard pedestrian control height)",
                    "Tube diameter: Circular hollow steel sections for aesthetic appeal",
                    "Material: Hot-dip galvanized steel tubular construction",
                    "Finish: Hot-dip galvanized with optional powder coating for color",
                    "Post type: Tubular steel posts with aesthetic base details",
                    "Panel design: Tubular rail configuration with aesthetic spacing",
                    "Connection: Welded or mechanical connections maintaining smooth appearance"
                ],
                applications: [
                    "Urban amenity areas requiring enhanced aesthetic appeal",
                    "Premium public spaces and civic environments",
                    "Pedestrian comfort zones and plaza areas",
                    "Landscape integration projects with architectural coordination",
                    "Waterfront and tourist areas requiring attractive barriers",
                    "Shopping districts and commercial pedestrian areas"
                ],
                conditions: [
                    "Areas where aesthetic considerations are priority",
                    "Urban amenity requirements with architectural coordination",
                    "Premium locations requiring enhanced visual appeal",
                    "Landscape integration needs with design sensitivity"
                ]
            },
            composition: {
                layers: [
                    "Site aesthetic assessment and design coordination",
                    "Tubular railing alignment marking per H2135C requirements",
                    "Post position marking with aesthetic spacing considerations",
                    "Concrete foundation installation with aesthetic base details",
                    "Tubular steel post installation ensuring vertical alignment",
                    "Tubular amenity railing panel installation and connection",
                    "Aesthetic finish application (galvanizing + optional powder coating)",
                    "Final aesthetic alignment and quality inspection"
                ],
                materials: [
                    "Hot-dip galvanized tubular steel railing sections per H2135C",
                    "Tubular steel posts with aesthetic base connections",
                    "Concrete foundations (Grade 20/20 minimum) with aesthetic finishing",
                    "Galvanized or stainless steel connection hardware",
                    "Optional powder coating finish for color coordination",
                    "Aesthetic end caps and finishing details"
                ]
            },
            installation: {
                steps: [
                    "Coordinate with urban design requirements and aesthetic planning per H2135C",
                    "Mark tubular railing alignment ensuring aesthetic spacing",
                    "Install foundations with consideration for aesthetic base details",
                    "Mount tubular steel posts ensuring perfect vertical alignment",
                    "Install tubular amenity railing panels with smooth connections",
                    "Apply aesthetic finish (galvanizing + optional powder coating)",
                    "Verify aesthetic alignment and coordinate with landscape features",
                    "Complete installation with premium finishing and quality control"
                ],
                drawings: ["H2135C", "H2131D", "Aesthetic Details", "Urban Design Coordination"],
                tools: ["Aesthetic installation tools", "Precision alignment equipment", "Tubular welding equipment", "Finish application tools"],
                materials: ["Tubular steel railing components", "Aesthetic foundation materials", "Premium finish materials", "Landscape coordination elements"]
            }
        },
        {
            id: "r13",
            name: "Stainless Steel Railing SS01",
            category: "railings",
            description: "Stainless steel railings for public transport interchange",
            drawings: ["H2271"],
            manuals: ["HYD Standard Drawing H2271"],
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
            description: "Removable bollards and railings system per H2259 for flexible access control and temporary installations",
            drawings: ["H2259", "H2260", "H2261", "H2262"],
            manuals: ["HYD Standard Drawing H2259", "Traffic Management Guidelines"],
            usage: {
                description: "Removable bollards and railings system providing flexible access control for temporary traffic management, event crowd control, and emergency access provision. Features removable components that can be deployed and removed as required while maintaining structural integrity and pedestrian/vehicle guidance when installed.",
                specifications: [
                    "Standard: H2259 Removable Bollards and Railings design",
                    "Material: Hot-dip galvanized steel to BS EN ISO 1461:2022",
                    "Base system: Permanent foundation sockets for removable components",
                    "Removable elements: Bollards and railing sections with secure locking mechanisms",
                    "Height: Variable based on application (pedestrian or vehicle control)",
                    "Deployment: Quick installation and removal capability",
                    "Security: Locking mechanisms to prevent unauthorized removal",
                    "Storage: Provision for component storage when not deployed"
                ],
                applications: [
                    "Temporary access control for events and construction activities",
                    "Flexible traffic management and lane closure applications",
                    "Event crowd control and pedestrian management",
                    "Emergency access provision through normally restricted areas",
                    "Seasonal access control (e.g., winter closure/summer opening)",
                    "Maintenance access control with removable barriers"
                ],
                conditions: [
                    "Temporary installation needs requiring flexibility",
                    "Variable access requirements throughout different periods",
                    "Event management applications requiring crowd control",
                    "Emergency access needs through permanent barriers"
                ]
            },
            composition: {
                layers: [
                    "Permanent foundation socket installation per H2259",
                    "Base preparation for removable component deployment",
                    "Removable bollard and railing component installation",
                    "Locking mechanism engagement and security verification",
                    "Access control configuration and operational testing",
                    "Component storage and deployment procedure establishment"
                ],
                materials: [
                    "Hot-dip galvanized removable bollards and railing components",
                    "Permanent foundation sockets and base systems",
                    "Locking mechanisms and security hardware",
                    "Component storage systems and transportation equipment",
                    "Installation tools and deployment accessories",
                    "Quality concrete for permanent socket foundations"
                ]
            },
            installation: {
                steps: [
                    "Install permanent foundation sockets per H2259 specifications",
                    "Prepare base systems for removable component deployment",
                    "Deploy removable bollards and railing sections as required",
                    "Engage locking mechanisms and verify security",
                    "Test access control functionality and emergency procedures",
                    "Establish component storage and operational procedures"
                ],
                drawings: ["H2259", "H2260", "H2261", "H2262"],
                tools: ["Socket installation equipment", "Removable component deployment tools", "Locking mechanism tools", "Component transport equipment"],
                materials: ["Removable bollard and railing systems", "Permanent foundation socket materials", "Locking and security hardware", "Component storage systems"]
            }
        },
        {
            id: "r15",
            name: "Emergency Crash Gate",
            category: "railings",
            description: "Emergency crash gate for emergency vehicle access through barriers per H2108C specifications",
            drawings: ["H2108C", "H2108D"],
            manuals: ["HYD Standard Drawing H2108C", "Emergency Access Design Guidelines"],
            usage: {
                description: "Emergency crash gate systems providing controlled emergency vehicle access through permanent barrier installations. Designed to allow emergency vehicles to breach barriers safely while maintaining normal barrier functionality for routine traffic control and protection.",
                specifications: [
                    "Standard: H2108C Emergency Crash Gate design",
                    "Material: Hot-dip galvanized steel construction",
                    "Activation: Emergency vehicle impact or manual activation",
                    "Integration: Compatible with existing barrier systems",
                    "Mechanism: Crash-activated release system with fail-safe operation",
                    "Recovery: Post-activation repair and reset procedures",
                    "Visibility: Emergency access marking and identification",
                    "Access width: Suitable for emergency vehicle requirements"
                ],
                applications: [
                    "Emergency vehicle access points through permanent barriers",
                    "Fire service access routes in barrier-protected areas",
                    "Emergency response corridors through traffic management systems",
                    "Critical infrastructure emergency access provision",
                    "Controlled access points for emergency services",
                    "Barrier system integration with emergency response requirements"
                ],
                conditions: [
                    "Emergency access requirements through permanent barriers",
                    "Fire safety compliance and emergency response needs",
                    "Critical infrastructure protection with emergency access",
                    "Barrier system installations requiring emergency breach capability"
                ]
            },
            composition: {
                layers: [
                    "Barrier system integration assessment and emergency access planning",
                    "Emergency crash gate mechanism installation per H2108C",
                    "Crash-activated release system configuration and testing",
                    "Emergency access marking and identification installation",
                    "Emergency service coordination and training provision",
                    "Maintenance and reset procedure establishment"
                ],
                materials: [
                    "Hot-dip galvanized emergency crash gate components",
                    "Crash-activated release mechanisms and hardware",
                    "Barrier system integration components",
                    "Emergency access marking and signage systems",
                    "Reset and repair hardware for post-activation recovery",
                    "Quality fasteners and mounting systems"
                ]
            },
            installation: {
                steps: [
                    "Assess emergency access requirements and barrier integration",
                    "Install emergency crash gate per H2108C specifications",
                    "Configure crash-activated release mechanism and test operation",
                    "Install emergency access marking and identification systems",
                    "Coordinate with emergency services and provide operation training",
                    "Establish maintenance protocols and post-activation procedures"
                ],
                drawings: ["H2108C", "H2108D", "H2130H"],
                tools: ["Gate installation equipment", "Crash mechanism testing tools", "Emergency activation testing equipment", "Barrier integration tools"],
                materials: ["Emergency crash gate system components", "Crash-activated mechanisms", "Barrier integration hardware", "Emergency marking systems"]
            }
        },
        {
            id: "r16",
            name: "Emergency Access Gate (EAG)",
            category: "railings",
            description: "Emergency Access Gate for controlled emergency vehicle access per H2276B specifications",
            drawings: ["H2276B", "H2276C"],
            manuals: ["HYD Standard Drawing H2276B", "TPDM Volume 2 Chapter 3.4.8", "Emergency Access Guidelines"],
            usage: {
                description: "Emergency Access Gate (EAG) system providing controlled access for emergency vehicles through restricted areas while maintaining security and access control under normal conditions. Features automated or manual operation with emergency service compatibility and secure access control capabilities.",
                specifications: [
                    "Standard: H2276B Emergency Access Gate design",
                    "Material: Hot-dip galvanized steel construction",
                    "Operation: Manual or automated gate operation",
                    "Access control: Emergency service key/card access systems",
                    "Security: Maintained security when closed",
                    "Width: Emergency vehicle compatible opening",
                    "Height: Consistent with perimeter security requirements",
                    "Integration: Compatible with existing security systems"
                ],
                applications: [
                    "Emergency vehicle access control through secure perimeters",
                    "Fire department access routes to restricted facilities",
                    "Ambulance service corridors through controlled areas",
                    "Police emergency access to secured installations",
                    "Emergency response access to critical infrastructure",
                    "Controlled emergency access through security barriers"
                ],
                conditions: [
                    "Emergency access control requirements with security maintenance",
                    "Secure perimeter installations requiring emergency breach capability",
                    "Emergency service coordination needs with access control",
                    "Critical infrastructure requiring controlled emergency access"
                ]
            },
            composition: {
                layers: [
                    "Emergency access strategy planning and security integration",
                    "EAG foundation and structural frame installation per H2276B",
                    "Gate mechanism and control system installation",
                    "Emergency activation and access control system integration",
                    "Security system coordination and emergency service training",
                    "Access control functionality testing and verification"
                ],
                materials: [
                    "Hot-dip galvanized Emergency Access Gate frame and panels",
                    "Automated or manual gate operating mechanisms",
                    "Emergency service access control systems (key/card readers)",
                    "Security integration hardware and control systems",
                    "Foundation materials and structural support systems",
                    "Emergency activation and override systems"
                ]
            },
            installation: {
                steps: [
                    "Plan emergency access strategy and security integration requirements",
                    "Install EAG foundation and structural frame per H2276B",
                    "Mount gate mechanism and automated/manual control systems",
                    "Install emergency activation and access control systems",
                    "Test complete access control functionality and emergency operation",
                    "Train emergency service personnel and establish protocols"
                ],
                drawings: ["H2276B", "H2276C", "H2130H"],
                tools: ["EAG installation equipment", "Automated control system tools", "Access control testing equipment", "Security integration tools"],
                materials: ["Emergency Access Gate system components", "Automated control mechanisms", "Access control hardware", "Security integration systems"]
            }
        },
        {
            id: "r17",
            name: "Chain Link Fence - Standard Installation",
            category: "railings",
            description: "Standard chain link fence installation for perimeter security and area control per Standard Drawing 6121D",
            drawings: ["6121D", "6122C", "6123A"],
            manuals: ["Standard Drawing 6121D", "Perimeter Security Guidelines"],
            usage: {
                description: "Standard chain link fence installation providing perimeter security, property boundary definition, and area access control. Features galvanized chain link fabric with steel post framework suitable for long-term perimeter security applications and facility protection requirements.",
                specifications: [
                    "Standard: Standard Drawing 6121D Chain Link Fence design",
                    "Fabric: Galvanized chain link mesh to relevant standards",
                    "Posts: Steel fence posts with concrete foundations",
                    "Height: Variable based on security requirements (typically 1.8m to 2.4m)",
                    "Spacing: Standard post spacing per drawing specifications",
                    "Gates: Compatible gate systems for access control",
                    "Hardware: Galvanized tension bands, bolts, and fasteners",
                    "Foundation: Concrete post foundations for stability"
                ],
                applications: [
                    "Perimeter security fencing for facilities and compounds",
                    "Property boundary definition and demarcation",
                    "Construction site security and temporary installations",
                    "Industrial facility protection and access control",
                    "Public facility perimeter security systems",
                    "Restricted area enclosure and access management"
                ],
                conditions: [
                    "Perimeter security requirements for facilities",
                    "Property boundary definition and legal demarcation needs",
                    "Long-term installation requirements with low maintenance",
                    "Access control applications with security considerations"
                ]
            },
            composition: {
                layers: [
                    "Perimeter survey and fence line marking per security requirements",
                    "Steel fence post installation with concrete foundations",
                    "Chain link fabric mounting and tensioning system installation",
                    "Gate and access point integration with security hardware",
                    "Protective coating application and finish verification",
                    "Security system integration and access control setup"
                ],
                materials: [
                    "Galvanized chain link fabric to relevant mesh standards",
                    "Steel fence posts with galvanized protective coating",
                    "Quality concrete for post foundations and stability",
                    "Galvanized tension bands, bolts, and mounting hardware",
                    "Gate systems and access control hardware",
                    "Protective coatings and long-term corrosion protection"
                ]
            },
            installation: {
                steps: [
                    "Survey perimeter and mark fence line per security requirements",
                    "Install steel fence posts with concrete foundations per 6121D",
                    "Mount chain link fabric and install tensioning systems",
                    "Integrate gates and access points with security hardware",
                    "Apply protective coatings and verify finish quality",
                    "Test security systems and establish access protocols"
                ],
                drawings: ["6121D", "6122C", "6123A"],
                tools: ["Fence installation equipment", "Post setting and concrete tools", "Fabric tensioning equipment", "Gate installation tools"],
                materials: ["Galvanized chain link fabric", "Steel fence posts", "Concrete foundation materials", "Security hardware and fastener systems"]
            }
        }
    ],
    signs: [
        {
            id: "s1",
            name: "Single Post Sign Support",
            category: "signs",
            description: "Single post traffic sign support systems per H2147F",
            drawings: ["H2147F", "H2148C"],
            manuals: ["HYD Standard Drawing H2147F", "TPDM Volume 3 Traffic Signs"],
            usage: {
                description: "Single post traffic sign support system designed for standard traffic sign installations. Provides reliable mounting for regulatory, warning, and information signs with appropriate wind load resistance and foundation stability. Essential for all standard roadside signage requirements.",
                specifications: [
                    "Post type: Galvanized steel post per H2147F specifications",
                    "Foundation: Concrete foundation with adequate depth for wind loads",
                    "Post diameter: Variable based on sign size and wind load requirements",
                    "Height: Variable to achieve required sign mounting height",
                    "Material: Hot-dip galvanized steel to BS EN ISO 1461:2022",
                    "Mounting: Bolt-on sign brackets per H2148C details",
                    "Wind loading: Designed for local wind load conditions",
                    "Foundation depth: Minimum 600mm or per structural calculations"
                ],
                applications: [
                    "Standard traffic sign installations for regulatory signs",
                    "Warning sign support on roads and highways",
                    "Information sign display at junctions and decision points",
                    "Speed limit and traffic control sign mounting",
                    "Temporary and permanent signage installations",
                    "Single sign requirements where space permits"
                ],
                conditions: [
                    "Standard sign installation requirements with normal wind loads",
                    "Single sign mounting needs without multi-sign complexity",
                    "Locations with adequate clearance for single post installation",
                    "Normal ground conditions suitable for standard foundations"
                ]
            },
            composition: {
                layers: [
                    "Site survey and sign position marking per H2147F requirements",
                    "Foundation excavation to required depth for post size",
                    "Concrete foundation installation with post positioning",
                    "Galvanized steel post installation ensuring vertical alignment",
                    "Sign mounting bracket installation per H2148C specifications",
                    "Traffic sign mounting and alignment verification",
                    "Final inspection and safety compliance checking"
                ],
                materials: [
                    "Hot-dip galvanized steel sign post per H2147F specifications",
                    "Concrete foundation (Grade 20/20 minimum) sized for wind loads",
                    "Sign mounting brackets and hardware per H2148C",
                    "Galvanized bolts and connection hardware",
                    "Post cap and protective treatments",
                    "Traffic sign panel as required"
                ]
            },
            installation: {
                steps: [
                    "Survey site and determine sign position per H2147F requirements",
                    "Calculate wind loads and foundation requirements",
                    "Excavate foundation to required depth and dimensions",
                    "Install concrete foundation with post positioning",
                    "Mount galvanized steel post ensuring perfect vertical alignment",
                    "Install sign mounting brackets per H2148C specifications",
                    "Mount traffic sign panel and verify alignment and visibility",
                    "Complete installation with final inspection and documentation"
                ],
                drawings: ["H2147F", "H2148C", "Foundation Details", "Wind Load Calculations"],
                tools: ["Foundation excavation equipment", "Post installation tools", "Level and alignment equipment", "Concrete mixing equipment"],
                materials: ["Galvanized sign post", "Concrete foundation materials", "Sign mounting hardware", "Traffic sign panels"]
            }
        },
        {
            id: "s2",
            name: "Single Post Off-Centered Sign Support",
            category: "signs",
            description: "Single post traffic sign support using off-centered method per H2198C specifications",
            drawings: ["H2198C", "H2199C", "H2200B", "H2201B"],
            manuals: ["HYD Standard Drawing H2198C", "Sign Support Design Guidelines"],
            usage: {
                description: "Single post traffic sign support system using off-centered mounting method for specialized positioning requirements. Designed for locations where standard centered mounting is not feasible due to clearance constraints or specific positioning needs while maintaining structural stability and wind load resistance.",
                specifications: [
                    "Standard: H2198C Off-Centered Sign Support design",
                    "Post: Galvanized steel post with offset mounting capability",
                    "Foundation: Enhanced concrete foundation for asymmetric loading",
                    "Mounting: Off-centered bracket system per H2198C",
                    "Load capacity: Designed for off-center wind loads and sign weights",
                    "Clearance: Maintains required clearances with offset positioning",
                    "Stability: Enhanced foundation design for asymmetric loading conditions",
                    "Materials: Hot-dip galvanized steel components"
                ],
                applications: [
                    "Space-constrained locations requiring off-center sign positioning",
                    "Clearance-constrained installations with specific positioning needs",
                    "Asymmetric sign arrangements for complex intersections",
                    "Specialized mounting conditions near structures or obstacles",
                    "Sign positioning optimization for visibility and clearance",
                    "Multi-directional sign installations with offset requirements"
                ],
                conditions: [
                    "Space-constrained locations preventing standard centered mounting",
                    "Specific clearance requirements requiring offset positioning",
                    "Specialized mounting conditions with asymmetric loading",
                    "Complex intersection geometries requiring customized positioning"
                ]
            },
            composition: {
                layers: [
                    "Site survey for off-center requirements and clearance analysis",
                    "Enhanced foundation design for asymmetric loading conditions",
                    "Off-centered post system installation per H2198C specifications",
                    "Specialized mounting bracket installation with offset capability",
                    "Sign mounting with offset positioning and stability verification",
                    "Clearance verification and wind load performance testing"
                ],
                materials: [
                    "Galvanized steel post with off-center mounting capability",
                    "Enhanced concrete foundation system for asymmetric loads",
                    "Specialized off-center mounting brackets per H2198C",
                    "Heavy-duty fasteners for offset loading conditions",
                    "Sign mounting hardware suitable for asymmetric installation",
                    "Quality materials for enhanced structural performance"
                ]
            },
            installation: {
                steps: [
                    "Conduct site survey for off-center requirements and clearance constraints",
                    "Prepare enhanced foundation system for asymmetric loading per H2198C",
                    "Install off-centered post system with specialized mounting capability",
                    "Mount specialized brackets and sign with offset positioning",
                    "Verify clearances, stability, and wind load performance",
                    "Complete installation testing and documentation"
                ],
                drawings: ["H2198C", "H2199C", "H2200B", "H2201B"],
                tools: ["Specialized off-center installation equipment", "Offset measurement and alignment tools", "Enhanced foundation construction tools", "Stability testing equipment"],
                materials: ["Off-centered post system components", "Enhanced foundation materials", "Specialized offset mounting hardware", "Heavy-duty fastening systems"]
            }
        },
        {
            id: "s3",
            name: "Multi-Sign Support - Cantilever",
            category: "signs",
            description: "Single post multi-sign support for cantilever-mounted traffic signs",
            drawings: ["H2227B"],
            manuals: ["HYD Standard Drawing H2227B"],
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
            drawings: ["H2228E", "H2229C"],
            manuals: ["HYD Standard Drawing H2228E"],
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
            drawings: ["H2230C"],
            manuals: ["HYD Standard Drawing H2230C"],
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
            drawings: ["H2268B"],
            manuals: ["HYD Standard Drawing H2268B"],
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
            drawings: ["H2205"],
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
            drawings: ["H2212A"],
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
            drawings: ["SSD153(1)"],
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
            drawings: ["SSD151(1)-A"],
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
            drawings: ["H2301"],
            manuals: ["HYD Standard Drawing H2301"],
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
            drawings: ["H2232C"],
            manuals: ["HYD Standard Drawing H2232C"],
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
            drawings: ["H2231"],
            manuals: ["HYD Standard Drawing H2231"],
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
            description: "Foundation and mini-drawpit for traffic signal pole installation per H2146C",
            drawings: ["H2146C", "H2147F"],
            manuals: ["HYD Standard Drawing H2146C", "TPDM Volume 4 Road Traffic Signals"],
            usage: {
                description: "Integrated foundation and mini-drawpit system for traffic signal pole installation. Combines structural foundation for signal pole support with electrical infrastructure housing in a single construction unit. Essential for traffic signal installations requiring both mechanical stability and electrical service access.",
                specifications: [
                    "Foundation type: Integrated concrete foundation with mini-drawpit per H2146C",
                    "Signal pole: Galvanized steel pole designed for traffic signal loads",
                    "Mini-drawpit: Integrated electrical service chamber",
                    "Foundation depth: Variable based on signal pole height and wind loads",
                    "Electrical access: Integral cable entry and junction facilities",
                    "Material: Reinforced concrete foundation with steel reinforcement",
                    "Cover: Cast iron access cover for electrical services",
                    "Drainage: Adequate provision for water management"
                ],
                applications: [
                    "Traffic signal installations at junctions and crossings",
                    "Pedestrian crossing signal installations (pelican, puffin, toucan)",
                    "Vehicle traffic control signal systems",
                    "Speed camera and enforcement equipment mounting",
                    "Traffic management and monitoring equipment installations",
                    "Variable message sign mounting with electrical requirements"
                ],
                conditions: [
                    "Traffic signal installations requiring electrical infrastructure",
                    "Locations needing integrated foundation and electrical access",
                    "Sites requiring stable signal pole foundation with service access",
                    "Electrical infrastructure requiring protection and accessibility"
                ]
            },
            composition: {
                layers: [
                    "Site survey and signal position determination per H2146C",
                    "Excavation to required depth for integrated foundation/drawpit",
                    "Steel reinforcement installation for foundation and drawpit walls",
                    "Formwork construction for integrated foundation and chamber",
                    "Concrete foundation and mini-drawpit construction",
                    "Signal pole installation with electrical connections",
                    "Electrical service installation and cable management",
                    "Cast iron cover installation and final finishing"
                ],
                materials: [
                    "Reinforced concrete for foundation and mini-drawpit per H2146C",
                    "Galvanized steel traffic signal pole",
                    "Steel reinforcement for foundation and chamber construction",
                    "Cast iron access cover and frame for electrical services",
                    "Electrical conduits and cable management systems",
                    "Waterproofing materials for electrical protection",
                    "Backfill materials for final installation"
                ]
            },
            installation: {
                steps: [
                    "Survey site and determine signal pole position per H2146C requirements",
                    "Calculate foundation loads and electrical service requirements",
                    "Excavate integrated foundation and mini-drawpit to specified depth",
                    "Install steel reinforcement for foundation and chamber walls",
                    "Construct formwork for integrated foundation and electrical chamber",
                    "Pour concrete ensuring proper consolidation around reinforcement",
                    "Install traffic signal pole ensuring perfect vertical alignment",
                    "Complete electrical installations and cable management systems",
                    "Install cast iron access cover and complete surface finishing"
                ],
                drawings: ["H2146C", "H2147F", "Electrical Details", "Signal Installation Standards"],
                tools: ["Foundation excavation equipment", "Concrete placement tools", "Electrical installation equipment", "Signal pole mounting equipment"],
                materials: ["Traffic signal pole", "Reinforced foundation concrete", "Steel reinforcement", "Electrical conduits", "Cast iron covers"]
            }
        },
        {
            id: "sg2",
            name: "ATC Drawpit",
            category: "signals",
            description: "Area Traffic Control drawpit systems - single and twin concrete draw/jointing chambers per H2159B",
            drawings: ["H2159B", "H2160A", "H2161A", "H2180A"],
            manuals: ["HYD Standard Drawing H2159B", "ATC Design Standards"],
            usage: {
                description: "Area Traffic Control (ATC) drawpit systems providing underground cable management and electrical equipment housing for traffic control networks. Available in single chamber (≤850mm depth) and twin chamber configurations (>850mm depth) to accommodate varying installation requirements and cable management needs.",
                specifications: [
                    "Single chamber: H2159B for drawpit depth ≤850mm",
                    "Twin chamber Type A: H2160A for drawpit depth >850mm",
                    "Twin chamber Type B: H2161A for drawpit depth >850mm (alternative configuration)",
                    "Material: Reinforced concrete construction",
                    "Cover type: Cast iron covers per H2180A (light duty applications)",
                    "Access: Adequate cable draw-in and jointing facilities",
                    "Drainage: Provision for water management and electrical protection",
                    "Depth: Variable based on cable routing and equipment requirements"
                ],
                applications: [
                    "Area traffic control system cable management",
                    "Traffic signal cable routing and jointing facilities",
                    "Control equipment housing and protection",
                    "Electrical infrastructure for traffic management systems",
                    "Underground cable network distribution points",
                    "Traffic monitoring and enforcement equipment connections"
                ],
                conditions: [
                    "Traffic control system installations requiring cable management",
                    "Underground electrical infrastructure protection needs",
                    "Variable depth requirements (shallow ≤850mm or deep >850mm)",
                    "Multiple cable routing and jointing requirements"
                ]
            },
            composition: {
                layers: [
                    "Site survey and ATC system cable routing determination",
                    "Excavation to required depth based on chamber type selection",
                    "Single or twin chamber construction per depth requirements",
                    "Reinforced concrete chamber construction with cable provisions",
                    "Cable draw-in facility installation and routing preparation",
                    "Cast iron cover and frame installation per H2180A specifications",
                    "Cable installation and ATC system connections",
                    "Final testing and system commissioning"
                ],
                materials: [
                    "Reinforced concrete for chamber construction (single or twin configuration)",
                    "Steel reinforcement for structural integrity",
                    "Cast iron covers and frames per H2180A (light duty)",
                    "Cable draw-in and management systems",
                    "Waterproofing materials for electrical protection",
                    "ATC cable and electrical connection systems",
                    "Bedding and backfill materials for installation"
                ]
            },
            installation: {
                steps: [
                    "Determine required ATC drawpit depth and select chamber type per H2159B",
                    "Excavate drawpit to specified dimensions (single ≤850mm or twin >850mm)",
                    "Install appropriate chamber type (single H2159B or twin H2160A/H2161A)",
                    "Construct reinforced concrete chamber with cable routing provisions",
                    "Install cable draw-in facilities and jointing preparation",
                    "Mount cast iron covers and frames per H2180A specifications",
                    "Complete ATC cable installation and system connections",
                    "Test electrical systems and commission traffic control infrastructure"
                ],
                drawings: ["H2159B", "H2160A", "H2161A", "H2162A", "H2168A", "H2169B", "H2180A"],
                tools: ["Drawpit construction equipment", "Heavy lifting equipment for covers", "Cable installation tools", "ATC system testing equipment"],
                materials: ["Concrete chamber construction materials", "Cast iron covers and frames", "ATC cable management systems", "Electrical protection systems"]
            }
        },
        {
            id: "sg3",
            name: "E&M Earth Pit",
            category: "signals",
            description: "Electrical and Mechanical earthing pit system per H2165B specifications for safety grounding",
            drawings: ["H2165B", "H2166B", "H2170A", "H2171"],
            manuals: ["HYD Standard Drawing H2165B", "Electrical Safety Standards"],
            usage: {
                description: "Electrical and Mechanical (E&M) earthing pit system providing essential safety grounding for electrical equipment and infrastructure installations. Features specialized earthing electrode systems within concrete pit construction designed to ensure electrical safety compliance and equipment protection from electrical faults.",
                specifications: [
                    "Standard: H2165B E&M Earth Pit design",
                    "Construction: Reinforced concrete pit with earthing provisions",
                    "Electrodes: Specialized earthing electrode systems per specifications",
                    "Cover: Cast iron cover and frame for pit access",
                    "Connections: Electrical connection systems for equipment grounding",
                    "Safety: Compliance with electrical safety and grounding standards",
                    "Testing: Earth resistance testing provisions",
                    "Maintenance: Access for inspection and testing requirements"
                ],
                applications: [
                    "Electrical system earthing for traffic control infrastructure",
                    "Equipment grounding systems for signal installations",
                    "Safety earthing installations for E&M equipment",
                    "Electrical fault protection for traffic management systems",
                    "Lightning protection earthing for signal equipment",
                    "Main earthing systems for electrical distribution networks"
                ],
                conditions: [
                    "Electrical safety requirements for traffic signal installations",
                    "Equipment protection and grounding system needs",
                    "E&M infrastructure installations requiring earth connections",
                    "Electrical compliance and safety standard requirements"
                ]
            },
            composition: {
                layers: [
                    "Site preparation and earth pit excavation per H2165B",
                    "Reinforced concrete pit construction with earthing provisions",
                    "Earthing electrode system installation and configuration",
                    "Electrical connection preparation and grounding systems",
                    "Cast iron cover and frame installation for pit access",
                    "Earth resistance testing and electrical safety verification"
                ],
                materials: [
                    "Reinforced concrete for pit construction and structural integrity",
                    "Specialized earthing electrodes and grounding systems",
                    "Cast iron cover and frame for secure pit access",
                    "Electrical connection hardware and grounding materials",
                    "Earth resistance testing equipment and verification systems",
                    "Protective materials for long-term earthing performance"
                ]
            },
            installation: {
                steps: [
                    "Excavate earth pit to H2165B specifications and requirements",
                    "Install reinforced concrete pit construction with earthing provisions",
                    "Install specialized earthing electrode systems per design",
                    "Mount cast iron cover and frame for secure pit access",
                    "Connect electrical grounding systems and test earth resistance",
                    "Verify electrical safety compliance and documentation"
                ],
                drawings: ["H2165B", "H2166B", "H2170A", "H2171"],
                tools: ["Earth pit construction equipment", "Earthing installation and connection tools", "Earth resistance testing equipment", "Electrical safety testing tools"],
                materials: ["Concrete pit construction materials", "Earthing electrodes and grounding systems", "Cast iron cover and frame systems", "Electrical connection and safety hardware"]
            }
        },
        {
            id: "sg4",
            name: "Loop Detector",
            category: "signals",
            description: "Vehicle loop detector systems for traffic control",
            drawings: ["H2181A"],
            manuals: ["HYD Standard Drawing H2181A"],
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
            drawings: ["H2164C"],
            manuals: ["HYD Standard Drawing H2164C"],
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
            drawings: ["HLDSDGE06-CL0047A"],
            manuals: ["HLD Standard Drawing HLDSDGE06-CL0047A"],
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
            drawings: ["HLDSDGE06-CL0058"],
            manuals: ["HLD Standard Drawing HLDSDGE06-CL0058"],
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
            drawings: ["H2140A"],
            manuals: ["HYD Standard Drawing H2140A"],
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
            drawings: ["H2179C"],
            manuals: ["HYD Standard Drawing H2179C"],
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
            drawings: ["H2189-1"],
            manuals: ["HYD Standard Drawing H2189"],
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
            drawings: ["H2189-2a"],
            manuals: ["HYD Standard Drawing H2189"],
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
            drawings: ["h2308"],
            manuals: ["TD DC 2/2022"],
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
    ],
    lighting: [
        {
            id: "l1",
            name: "L1 - Street Lighting Columns",
            category: "lighting",
            description: "Standard street lighting installations",
            drawings: ["L1"],
            manuals: ["Street Lighting Design Guide"]
        }
    ],
    drainage: [
        {
            id: "d1",
            name: "D1 - Gully Grating",
            category: "drainage",
            description: "Standard road drainage gullies",
            drawings: ["D1"],
            manuals: ["Drainage Design Manual"]
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
        const cleanCode = drawingCode.toUpperCase().replace(/[^A-Z0-9()/-]/g, '');
        const extension = uppercasePdfCodes.includes(drawingCode.toUpperCase()) ? '.PDF' : '.pdf';
        return `https://www.hyd.gov.hk/en/technical_references/standard_drawings/structures_standard_drawings/doc/${cleanCode}${extension}`;
    }

    // Convert to lowercase and remove special characters except brackets for URL
    const cleanCode = drawingCode.toLowerCase().replace(/[^a-z0-9()/-]/g, '');

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
    } else if (manualCode.toLowerCase().startsWith('tpdm')) {
        let cleanCode = manualCode.match(/(?<=Volume )(.*?)(?= Chapter)/g);
        if (!cleanCode) {
            cleanCode = manualCode.match(/(?<=V)(.*?)(?=C)/g);
        }
        return `https://www.td.gov.hk/filemanager/en/content_5055/V${cleanCode[0]}_12_2024.pdf`;
    }

    // Default fallback for other manual types
    return null;
}
