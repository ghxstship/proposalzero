"use client";

import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════════════
   CORNBREAD HEMP x G H X S T S H I P INDUSTRIES x AGORA GRAPHICS
   Custom Brand Activation — Asset Management Proposal
   G H X S T S H I P Industries x Agora Graphics & Visuals
   ═══════════════════════════════════════════════════════════ */

const PHASES = [
  {
    id: "discovery", num: "01", name: "Discovery & Creative Brief",
    tag: "Consultation + Brand Immersion + Vision Alignment",
    color: "#3B7D44",
    narrative: "This activation begins with Cornbread Hemp's core identity: USDA organic, Flower-Only, Kentucky-rooted wellness. Before a single panel is cut or graphic printed, we immerse in your brand DNA — your product line architecture (CBD gummies, oils, topicals, THC gummies, THC seltzers), your audience (health-conscious adults 21+ seeking alcohol alternatives), and your activation goals across festivals, trade shows, and retail environments.",
    core: [
      { name: "Discovery Session & Brand Immersion", desc: "Collaborative kick-off to align on brand objectives, creative direction, target audience, spatial requirements, and success metrics.", price: "Complimentary" },
      { name: "Creative Brief Document", desc: "Formalized brief capturing all discovery findings: Cornbread Hemp brand guidelines, aesthetic direction, spatial parameters, technical requirements, and project KPIs.", price: "Complimentary" },
      { name: "Preliminary Budget Architecture", desc: "Tiered investment framework with good/better/best options mapped to creative ambition levels for the 20'x20' footprint.", price: "Complimentary" },
    ],
    addons: [
      { id: "d1", name: "Brand Immersion Workshop", desc: "Half-day facilitated workshop with key stakeholders to deep-dive into Cornbread Hemp's brand DNA, competitive positioning, and experiential strategy.", price: null },
      { id: "d2", name: "Multi-Venue Site Survey Package", desc: "Physical site visits to each activation venue with dimensional survey, photo documentation, access assessment, power/rigging inventory, and venue restriction report.", price: null, unit: "per venue" },
      { id: "d3", name: "Competitive Landscape Audit", desc: "Research and visual analysis of competitor CBD/hemp brand activations in the same market, category, or event cycle. Identifies opportunities for differentiation.", price: null },
      { id: "d4", name: "Audience Journey Mapping", desc: "Guest flow analysis mapping the complete attendee experience from arrival through activation touchpoints to departure.", price: null },
    ],
    coreInvestment: "Complimentary",
    contractRefs: ["Scope (S2)", "Client Responsibilities (S4)", "Confidentiality (S8)"],
    gate: {
      title: "Creative Brief Sign-Off",
      items: [
        "Signed Creative Brief with brand guidelines and project parameters",
        "Mutual NDA executed",
        "Confirmed venue list and preliminary activation dates",
        "Designated Cornbread Hemp representative identified",
      ],
      unlocks: "Phase 02: Concept Design & Visualization",
    },
  },
  {
    id: "concept", num: "02", name: "Concept Design & Visualization",
    tag: "Creative Directions + 3D Renderings + Spatial Layout",
    color: "#C49629", isUpgrade: true,
    narrative: "For brands building from scratch or reimagining an existing footprint, this phase transforms brand identity into spatial reality. Our design team translates your aesthetic into a three-dimensional guest experience — from mood boards and spatial concepts to photorealistic 3D renderings and scaled floor plans. Every element is designed for visual impact and modularity, engineered from the start for efficient reuse across multiple deployments.",
    core: [
      { name: "Concept Design Package", desc: "Two distinct creative directions presented as mood boards with spatial concepts, material palettes, and guest flow narratives for the 20'x20' footprint.", price: null },
      { name: "3D Renderings — Key Views", desc: "Photorealistic 3D renderings of the approved concept from 3-5 strategic viewpoints showing the complete activation environment.", price: null },
      { name: "Floor Plan & Spatial Layout", desc: "Scaled floor plan with element placement, guest circulation paths, sightlines, ADA compliance zones, and operational areas.", price: null },
    ],
    addons: [
      { id: "c1", name: "Additional Concept Direction", desc: "Third (or additional) distinct creative direction with full mood board and spatial concept.", price: null },
      { id: "c2", name: "Animated 3D Walkthrough", desc: "60-90 second animated fly-through of the activation space showing the guest journey from entry to exit. Ideal for internal stakeholder buy-in.", price: null },
      { id: "c3", name: "VR / AR Experience Preview", desc: "Immersive virtual reality preview allowing stakeholders to walk through the activation at true scale before fabrication begins.", price: null },
      { id: "c4", name: "Physical Material Sample Board", desc: "Curated board with actual material swatches, fabric samples, finish samples, and color chips representing the proposed palette.", price: null },
      { id: "c5", name: "Revision Round Package", desc: "Additional revision cycle beyond the included round. Each package includes one full revision pass across all deliverables.", price: null, unit: "per round" },
    ],
    coreInvestment: null,
    contractRefs: ["Creative Design (S2.1)", "Artwork Approval (S9.3)", "Design IP (S14.2)", "Change Orders (S18)"],
    gate: {
      title: "Concept Approval",
      items: [
        "Written approval of selected concept direction",
        "Sign-off on 3D renderings and spatial layout",
        "Confirmation of material palette and finish selections",
        "Approval to advance to engineering (3 business day review window)",
      ],
      unlocks: "Phase 03: Engineering & Technical Development",
    },
  },
  {
    id: "engineering", num: "03", name: "Engineering & Technical Development",
    tag: "Shop Drawings + Structural Engineering + Technical Specifications",
    color: "#D4782A", isUpgrade: true,
    narrative: "Where concept becomes construction-ready. Our engineering team converts approved designs into precision build documents — shop drawings with exact dimensions, material call-outs, assembly sequences, and structural verification for both indoor and outdoor conditions. Available as a standalone service for existing assets requiring PE-stamped documentation or venue-specific adaptation.",
    core: [
      { name: "Shop Drawings & Technical Package", desc: "Complete set of build-ready shop drawings with dimensions, material specifications, hardware schedules, and assembly/disassembly instructions for all fabricated elements.", price: null },
      { name: "Bill of Materials (BOM)", desc: "Itemized materials list with quantities, specifications, and sourcing details for procurement.", price: "Included" },
    ],
    addons: [
      { id: "e1", name: "PE-Stamped Structural Engineering", desc: "Licensed Professional Engineer review, structural calculations, and stamped drawings for builds requiring jurisdiction or venue approval. State-specific stamps available.", price: null },
      { id: "e2", name: "Wind & Weather Load Analysis", desc: "Engineering analysis for outdoor installations calculating wind uplift, rain load, and thermal expansion factors. Includes anchoring specifications.", price: null },
      { id: "e3", name: "Electrical Engineering & Power Plan", desc: "Technical power distribution plan including circuit mapping, load calculations, and connection specifications for lighting and interactive elements.", price: null },
      { id: "e4", name: "ADA Compliance Review", desc: "Formal accessibility review ensuring all guest-facing elements meet ADA requirements for clearances, ramp grades, tactile indicators, and accessible heights.", price: null },
      { id: "e5", name: "Fire Safety Engineering Package", desc: "Fire load analysis, egress planning, and flame retardant specifications. Includes FR certification documentation for all textile and scenic elements.", price: null },
      { id: "e6", name: "Physical Prototype — Hero Element", desc: "Scaled or sectional physical prototype of the primary fabricated element for client review before committing to full production.", price: null },
      { id: "e7", name: "Venue-Specific Adaptation Drawings", desc: "Per-venue customized drawings accounting for unique site dimensions, access points, power locations, and structural constraints.", price: null, unit: "per venue" },
    ],
    coreInvestment: null,
    contractRefs: ["Engineering (S2.1)", "Health, Safety & Compliance (S10)", "Engineering Compliance (S10.3)"],
    gate: {
      title: "Engineering Approval + Deposit",
      items: [
        "Written approval of shop drawings and technical specifications",
        "Sign-off on Bill of Materials and finish selections",
        "PE stamp obtained (if required by venue or jurisdiction)",
        "60% deposit received to initiate procurement and fabrication",
        "Final artwork files received in print-ready format",
      ],
      unlocks: "Phase 04: Fabrication & Print Production",
    },
  },
  {
    id: "fabrication", num: "04", name: "Fabrication & Print Production",
    tag: "Custom Builds + Print Production + Quality Control",
    color: "#3B7D44", isUpgrade: true,
    narrative: "Where design meets material. Production takes place at our fabrication partner's facility — modular wall panels, product display fixtures, branded graphics, and flooring systems are built simultaneously. Every piece undergoes multi-point quality inspection before crating. Also available for graphic refresh packages, seasonal re-skins, and component replacement on existing assets.",
    core: [
      { name: "Hero Fabrication — Modular Wall System", desc: "Custom panel-based wall system forming the 20'x20' activation perimeter with integrated graphic channels, lighting raceways, and tool-free connection hardware.", price: null },
      { name: "Product Display Architecture", desc: "Custom-built product display fixtures for Cornbread Hemp CBD gummies, oils, topicals, THC gummies, and THC seltzers with integrated lighting and branded finishes.", price: null },
      { name: "Branded Environmental Graphics", desc: "Full graphic wrap package including wall panels, header signage, product information displays, and wayfinding elements. Print-ready per approved artwork.", price: null },
      { name: "Flooring System", desc: "Interlocking modular flooring system with branded finish, designed for rapid deployment on varied venue surfaces.", price: null },
    ],
    addons: [
      { id: "f1", name: "Premium Material Upgrade — Metals", desc: "Upgrade from painted steel to powder-coated aluminum or stainless steel for enhanced durability, weight reduction, and premium finish quality.", price: null },
      { id: "f2", name: "Sustainable Material Package", desc: "FSC-certified wood, recycled substrates, low-VOC paints, water-based inks, and recyclable build components. Includes material sourcing documentation.", price: null },
      { id: "f3", name: "Integrated LED / Lighting Package", desc: "Built-in LED strip lighting, backlit panels, or illuminated signage elements fabricated directly into scenic structures during production.", price: null },
      { id: "f4", name: "Custom Color Matching (Pantone)", desc: "Precision Pantone color matching across all fabricated and printed elements for exact Cornbread Hemp brand color consistency.", price: null },
      { id: "f5", name: "Modular Touring Reinforcement", desc: "Heavy-duty hardware, flight case integration points, and reinforced joints engineered for 50+ install/strike cycles without degradation.", price: null },
      { id: "f6", name: "In-Process Client Review Visit", desc: "Scheduled visit to Agora's production facility for Cornbread Hemp team to inspect fabrication in progress.", price: null },
      { id: "f7", name: "Flame Retardant Treatment & Certification", desc: "FR treatment for all fabric, foam, and scenic elements with individual certificates of compliance for venue submission.", price: null },
      { id: "f8", name: "Protective Crating & Flight Cases", desc: "Custom-built protective crating or reusable ATA flight cases for all scenic elements. Essential for touring programs.", price: null },
    ],
    coreInvestment: null,
    contractRefs: ["Fabrication/Print (S2.1)", "Warranty (S9.1)", "Sustainability (S11)", "Subcontractors (S12)"],
    gate: {
      title: "Production Complete + QC Sign-Off",
      items: [
        "All fabricated elements pass multi-point quality inspection",
        "Print proofs approved and production run complete",
        "Client notified of completion with photo documentation",
        "Crating and packing complete for all elements",
        "Logistics plan confirmed for Phase 05",
      ],
      unlocks: "Phase 05: Logistics & Pre-Deployment",
    },
  },
  {
    id: "logistics", num: "05", name: "Logistics & Pre-Deployment",
    tag: "Crating + Shipping + Delivery Coordination",
    color: "#C49629",
    narrative: "With production complete, assets are inventoried, photographed, and prepared for transit. G H X S T S H I P's logistics team coordinates the routing plan, managing load sequencing to ensure each venue receives exactly what it needs in the correct install order. Cargo insurance covers all assets in transit, and our internal tracking system provides real-time shipment visibility from dock to door.",
    core: [
      { name: "Logistics Coordination & Routing", desc: "Complete logistics plan including routing, scheduling, carrier coordination, and delivery confirmation for all activation locations.", price: null },
      { name: "Transportation & Delivery", desc: "Standard trucking from production facility to venue(s) including loading, transit, and dock delivery. In-state: 1-2 days. Out-of-state: 2-5 days. International: 5-15 days.", price: null },
    ],
    addons: [
      { id: "l1", name: "Logistics Crew — Truck Loaders", desc: "Professional loading/unloading crew with certified forklift operators. Component identification, load manifest verification, blanket wrap and load securing.", price: null, unit: "per call (2 crew / 4 hour minimum)" },
      { id: "l2", name: "Climate-Controlled Transport", desc: "Temperature and humidity-controlled vehicle for sensitive materials, specialized prints, electronics, or temperature-sensitive finishes.", price: null },
      { id: "l3", name: "Enhanced Cargo Insurance", desc: "Upgraded cargo insurance above standard coverage limits for high-value custom fabrication. Coverage at full replacement cost.", price: null },
      { id: "l4", name: "Asset Condition Photography — Pre-Ship", desc: "Detailed photographic documentation of every element before crating and shipment, establishing baseline condition for tracking.", price: null },
      { id: "l5", name: "Multi-Location Routing Optimization", desc: "Engineered routing plan for touring/multi-venue deployments minimizing transit time and sequencing deliveries around venue load-in windows.", price: null },
      { id: "l6", name: "Advance Shipment to Staging Warehouse", desc: "Early delivery to a staging warehouse near the venue for inventory check and pre-positioning before install day.", price: null },
      { id: "l7", name: "Real-Time Shipment Tracking Portal", desc: "Client-facing tracking dashboard with GPS location, ETA updates, and delivery confirmation for all shipments via ATLVS platform.", price: null },
    ],
    coreInvestment: null,
    contractRefs: ["Shipping & Delivery (S6.1)", "Multi-Location (S6.3)", "Insurance (S7.1)"],
    gate: {
      title: "Delivery Confirmed + Venue Access",
      items: [
        "All assets delivered to venue or staging warehouse — delivery receipt signed",
        "Asset condition documented upon arrival (photographs)",
        "Venue access schedule confirmed with load-in times and dock assignments",
        "40% balance payment received",
        "Installation crew briefed with site-specific safety protocols",
      ],
      unlocks: "Phase 06: Installation & Environment Build",
    },
  },
  {
    id: "installation", num: "06", name: "Installation & Environment Build",
    tag: "On-Site Setup + Supervision + Venue Coordination",
    color: "#D4782A",
    narrative: "The Build & Strike crew arrives with a detailed deployment sequence that brings the Cornbread Hemp activation to life. The modular wall system goes up first, establishing the spatial anchor. Environmental elements radiate outward — flooring, product displays, graphic panels, lighting — placed according to the approved floor plan. The branded environment is complete and ready for walk-through inspection within the scheduled load-in window.",
    core: [
      { name: "Professional Installation — Load-in", desc: "Experienced install crew with all tools, hardware, and on-site supervision to build the complete 20'x20' activation environment per approved drawings.", price: null },
      { name: "On-Site Project Supervision", desc: "Dedicated project manager on-site during full installation to coordinate crew, interface with venue, and manage quality.", price: "Included" },
    ],
    addons: [
      { id: "i1", name: "After-Hours Installation (Evenings)", desc: "Installation between 5:01 PM and 11:59 PM at 1.5x standard labor rate. Often required by venues with daytime public access.", price: null },
      { id: "i2", name: "Overnight Installation", desc: "Installation between 12:00 AM and 6:59 AM at 2.0x standard labor rate. For venues with zero daytime downtime.", price: null },
      { id: "i3", name: "Weekend Installation", desc: "Saturday or Sunday installation at 1.5x standard labor rate.", price: null },
      { id: "i4", name: "Union Labor Coordination", desc: "Management and coordination of venue-mandated union stagehands, electricians, or riggers.", price: null },
      { id: "i5", name: "Power & Electrical Setup", desc: "On-site electrical distribution including cable runs, power drops, circuit protection, and connection of all lighting elements.", price: null },
      { id: "i6", name: "Time-Lapse Documentation", desc: "Fixed-camera time-lapse recording of the full installation from empty space to completed environment. Deliverable: 30-60 second edited video.", price: null },
      { id: "i7", name: "Multi-Location Install Crew", desc: "Dedicated crew that travels with assets across all venues for consistent quality and familiarity with the build system.", price: null, unit: "per additional venue" },
    ],
    coreInvestment: null,
    contractRefs: ["Installation (S6.2)", "Overtime (S5.6)", "Workplace Safety (S10.1)", "Venue Compliance (S10.2)"],
    gate: {
      title: "Acceptance Walk-Through + Punch List",
      items: [
        "Installation complete — all elements placed per approved floor plan",
        "Client walk-through inspection conducted",
        "Punch list documented within 4 hours of walk-through",
        "Punch list items remediated prior to event opening",
        "Written acceptance sign-off from Cornbread Hemp representative",
      ],
      unlocks: "Phase 07: Activation & Live Operations",
    },
  },
  {
    id: "activation", num: "07", name: "Activation & Live Operations",
    tag: "Event Day + Tech Support + Guest Experience",
    color: "#3B7D44",
    narrative: "Doors open and the activation comes alive. Guests enter the Cornbread Hemp environment and are drawn to the product display architecture where they can experience the full portfolio — from CBD gummies and oils to THC seltzers. Every touchpoint reinforces the brand's USDA organic, Flower-Only positioning. Behind the scenes, G H X S T S H I P provides on-call operational support to ensure seamless execution throughout the activation period.",
    core: [
      { name: "Activation Environment — Live Operations", desc: "Complete branded environment operational and guest-ready throughout the activation period. All scenic, graphic, and structural elements monitored and maintained to presentation-grade standards. Client is responsible for activation staffing, brand ambassadors, and product sampling personnel.", price: "Included in build" },
    ],
    addons: [
      { id: "a1", name: "On-Site Maintenance Technician", desc: "Dedicated technician on standby during live hours for real-time repairs, adjustments, and touch-ups to scenic and print elements.", price: null, unit: "per day" },
      { id: "a2", name: "Social Media Content Capture", desc: "Dedicated content creator documenting the activation with photos and short-form video optimized for Instagram, TikTok, and brand social channels.", price: null, unit: "per day" },
      { id: "a3", name: "Backup Equipment & Spare Parts Kit", desc: "On-site cache of critical replacement parts, backup hardware, extra print graphics, and emergency repair supplies.", price: null },
      { id: "a4", name: "Guest Data Capture System", desc: "Digital registration, NFC/RFID interaction tracking, or QR code engagement system with real-time analytics dashboard.", price: null },
      { id: "a5", name: "Daily Activation Report", desc: "End-of-day report covering equipment status, guest throughput observations, maintenance log, and next-day prep notes.", price: null, unit: "per day" },
      { id: "a6", name: "Activation Staffing & Brand Ambassadors", desc: "Trained activation staff, brand ambassadors, and product sampling personnel provided and managed by G H X S T S H I P for the duration of the activation period. Includes briefing, scheduling, and on-site supervision.", price: null, unit: "per day" },
    ],
    coreInvestment: "Included in build",
    contractRefs: ["Data Protection (S8.3)", "Equipment Rental (S13)", "Damage & Wear (S15.5)"],
    gate: {
      title: "Activation Complete + Asset Directive",
      items: [
        "Activation period concluded at all venues",
        "Cornbread Hemp provides written Asset Disposition Directive: retain, store, or transfer for each element",
        "Final guest data transfer completed (if applicable)",
        "Rental items inventoried for return",
      ],
      unlocks: "Phase 08: Strike, Storage & Legacy",
    },
  },
  {
    id: "legacy", num: "08", name: "Strike, Storage & Legacy",
    tag: "Breakdown + Asset Lifecycle + Sustainable Solutions",
    color: "#C49629",
    narrative: "After the final guest departs, the strike team executes a clean, efficient breakdown. Every element is catalogued against the Asset Disposition Directive — retained pieces are carefully packed for storage, and the modular activation assets enter G H X S T S H I P's climate-monitored warehouse with full inventory tracking via the ATLVS platform. The hero structures and environmental assets are designed to live well beyond a single activation — an investment that compounds with every future deployment.",
    core: [
      { name: "Strike & Removal — Load-out", desc: "Professional breakdown, removal, and cleanup at each venue. Systematic disassembly preserving asset integrity, road case packing, and damage/loss reporting.", price: null },
      { name: "Post-Strike Inventory Reconciliation", desc: "Complete component-level inventory check against original BOM with condition assessment and photo documentation.", price: "Included" },
    ],
    addons: [
      { id: "s1", name: "Secure Asset Storage Program", desc: "Climate-controlled warehousing with digital inventory catalog via ATLVS, organized access, and 48-hour mobilization guarantee. 3 month minimum. 12 month contract receives 2 months free.", price: null, unit: "per month" },
      { id: "s2", name: "Asset Maintenance & Restoration", desc: "Post-event damage assessment, surface refinishing, graphic replacement, electrical testing, hardware replacement, and deep cleaning.", price: null },
      { id: "s3", name: "Asset Modification — Campaign Refresh", desc: "Layout reconfiguration, new product display integration, technology upgrades, and seasonal branding refresh for the next deployment cycle.", price: null },
      { id: "s4", name: "Asset Re-fabrication", desc: "End-of-life component replacement, full panel or wall section rebuild, structural member replacement, or material upgrades.", price: null },
      { id: "s5", name: "Touring Redeployment Preparation", desc: "Full asset reconditioning, re-crating, and logistics preparation for the next activation cycle. Includes updated condition report.", price: null },
      { id: "s6", name: "Sustainability Report", desc: "Materials recycled vs. landfilled, percentage of reusable/repurposed components, waste diversion metrics, and carbon footprint estimates.", price: null },
      { id: "s7", name: "Professional Portfolio Photography", desc: "Commissioned professional photography of the completed installation for shared use in both Cornbread Hemp and Agora/G H X S T S H I P marketing materials.", price: null },
      { id: "s8", name: "Post-Event Asset Inventory Catalog", desc: "Complete digital catalog of all retained/stored assets with photographs, dimensions, condition ratings, and ATLVS storage location references.", price: null },
    ],
    coreInvestment: null,
    contractRefs: ["Storage (S6.4)", "Strike & Disposal (S6.5)", "Sustainability (S11)", "Portfolio Usage (S14.4)"],
    gate: {
      title: "Project Close",
      items: [
        "Strike complete at all venues — site restoration confirmed",
        "Final invoice settled including all change orders",
        "Storage agreement executed (if applicable)",
        "Full ownership confirmed and documented upon final payment reconciliation",
      ],
      unlocks: "Project Complete — Warranty Period begins (14 days)",
    },
  },
];

function PhaseSection({ phase, selected, onToggle, isOpen, setOpen }) {
  const addonCount = phase.addons.filter(a => selected.has(a.id)).length;
  return (
    <section id={phase.id} style={{ marginBottom: 8 }}>
      {/* Phase Header */}
      <div onClick={() => setOpen(isOpen ? null : phase.id)}
        style={{ background: "#fff", borderRadius: 8, padding: "24px 28px", cursor: "pointer", border: "1px solid #E8E0D4", borderLeft: `5px solid ${phase.color}`, transition: "all 0.3s", boxShadow: isOpen ? "0 8px 32px rgba(44,26,14,0.1)" : "0 1px 4px rgba(44,26,14,0.04)" }}
        onMouseEnter={e => { if (!isOpen) e.currentTarget.style.boxShadow = "0 4px 16px rgba(44,26,14,0.08)"; }}
        onMouseLeave={e => { if (!isOpen) e.currentTarget.style.boxShadow = "0 1px 4px rgba(44,26,14,0.04)"; }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 32, fontWeight: 700, color: phase.color, minWidth: 48 }}>{phase.num}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 700, color: "#2C1A0E" }}>{phase.name}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 2 }}>
              <div style={{ fontSize: 12, color: "#9C8E7E", fontStyle: "italic" }}>{phase.tag}</div>
              {phase.isUpgrade && <span style={{ fontSize: 8, fontWeight: 700, background: "#C49629", color: "#fff", padding: "2px 6px", borderRadius: 3, letterSpacing: 1.5 }}>UPGRADE OPTION</span>}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {addonCount > 0 && (
              <span style={{ fontSize: 10, fontWeight: 700, background: phase.color, color: "#fff", padding: "3px 8px", borderRadius: 10 }}>
                {addonCount} add-on{addonCount > 1 ? "s" : ""} selected
              </span>
            )}
            <div style={{ width: 28, height: 28, borderRadius: "50%", border: `2px solid ${phase.color}`, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", transform: isOpen ? "rotate(45deg)" : "none", background: isOpen ? phase.color : "transparent", color: isOpen ? "#fff" : phase.color, fontSize: 16, fontWeight: 300 }}>+</div>
          </div>
        </div>
      </div>

      {/* Phase Content */}
      <div style={{ maxHeight: isOpen ? 5000 : 0, overflow: "hidden", transition: "max-height 0.6s cubic-bezier(0.4,0,0.2,1)" }}>
        <div style={{ padding: "24px 28px 28px", background: "#FDFAF4", borderRadius: "0 0 8px 8px", borderLeft: `5px solid ${phase.color}`, borderBottom: `1px solid #E8E0D4`, borderRight: "1px solid #E8E0D4" }}>

          {/* Narrative */}
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#4A3728", marginBottom: 28 }}>{phase.narrative}</p>

          {/* Core Deliverables */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: phase.color, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Core Deliverables</div>
            {phase.core.map((c, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 6, padding: "14px 18px", marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, borderLeft: `3px solid ${phase.color}` }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 15, fontWeight: 700, color: "#2C1A0E", marginBottom: 4 }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: "#6B5D4F", lineHeight: 1.6 }}>{c.desc}</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: c.price === "Complimentary" || c.price === "Included" || c.price === "Included in build" ? "#3B7D44" : "#D4782A", whiteSpace: "nowrap", minWidth: 80, textAlign: "right" }}>
                  {c.price || "Quoted Upon Request"}
                </div>
              </div>
            ))}
          </div>

          {/* Add-Ons */}
          {phase.addons.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#C49629", letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>Options & Add-Ons</div>
              <div style={{ fontSize: 11, color: "#9C8E7E", fontStyle: "italic", marginBottom: 12 }}>Select enhancements for this phase. Checked items will appear in your investment summary.</div>
              {phase.addons.map(a => {
                const checked = selected.has(a.id);
                return (
                  <div key={a.id} onClick={() => onToggle(a.id)}
                    style={{ background: checked ? "#FFF8EE" : "#fff", borderRadius: 6, padding: "12px 16px", marginBottom: 6, display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer", border: checked ? `1px solid ${phase.color}` : "1px solid #E8E0D4", transition: "all 0.2s" }}
                    onMouseEnter={e => { if (!checked) e.currentTarget.style.borderColor = "#C49629"; }}
                    onMouseLeave={e => { if (!checked) e.currentTarget.style.borderColor = "#E8E0D4"; }}>
                    <div style={{ width: 18, height: 18, borderRadius: 3, border: checked ? `2px solid ${phase.color}` : "2px solid #C4BAA8", display: "flex", alignItems: "center", justifyContent: "center", background: checked ? phase.color : "transparent", color: "#fff", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2, transition: "all 0.2s" }}>
                      {checked ? "+" : ""}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#2C1A0E" }}>{a.name}</div>
                      <div style={{ fontSize: 11, color: "#6B5D4F", lineHeight: 1.5, marginTop: 2 }}>{a.desc}</div>
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#D4782A", whiteSpace: "nowrap", minWidth: 70, textAlign: "right" }}>
                      {a.price || "Quoted Upon Request"}{a.unit ? ` ${a.unit}` : ""}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Contract Refs */}
          <div style={{ fontSize: 10, color: "#9C8E7E", padding: "10px 14px", background: "#F5F0E8", borderRadius: 4, marginBottom: 20 }}>
            <span style={{ fontWeight: 700 }}>Contractual Framework: </span>
            {phase.contractRefs.join(" / ")}
          </div>

          {/* Milestone Gate */}
          <div style={{ background: "#fff", borderRadius: 6, padding: "18px 20px", border: `2px solid ${phase.color}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 8, height: 8, background: phase.color, borderRadius: 1, transform: "rotate(45deg)" }} />
              <div style={{ fontSize: 11, fontWeight: 700, color: phase.color, letterSpacing: 2, textTransform: "uppercase" }}>Milestone Gate: {phase.gate.title}</div>
            </div>
            {phase.gate.items.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "#4A3728", lineHeight: 1.6, marginBottom: 4 }}>
                <span style={{ color: "#C4BAA8", flexShrink: 0 }}>&#9744;</span> {item}
              </div>
            ))}
            <div style={{ marginTop: 12, fontSize: 11, fontWeight: 700, color: phase.color }}>
              &#8594; Unlocks: {phase.gate.unlocks}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Proposal() {
  const [openPhase, setOpenPhase] = useState(null);
  const [selected, setSelected] = useState(new Set());
  const [vis, setVis] = useState(new Set());

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) setVis(p => new Set([...p, e.target.id]));
    }), { threshold: 0.05 });
    document.querySelectorAll("[data-a]").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const toggle = id => {
    setSelected(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  const allAddons = PHASES.flatMap(p => p.addons.map(a => ({ ...a, phase: p.name, phaseNum: p.num, color: p.color })));
  const selectedAddons = allAddons.filter(a => selected.has(a.id));

  const a = id => ({ opacity: vis.has(id) ? 1 : 0, transform: vis.has(id) ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" });

  return (
    <div style={{ "--serif": "'Cormorant Garamond', Georgia, serif", background: "#FDF6EC", minHeight: "100vh", fontFamily: "Calibri, 'Gill Sans', sans-serif", color: "#2C1A0E" }}>
      {/* NAV */}
      <nav className="nb" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(253,246,236,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(232,224,212,0.6)", padding: "0 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", height: 48 }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 13, fontWeight: 700, color: "#E91E63", marginRight: "auto" }}>G H X S T S H I P x AGORA</div>
          <div style={{ display: "flex", gap: 2 }}>
            {PHASES.map(p => (
              <a key={p.id} href={`#${p.id}`} style={{ fontSize: 10, fontWeight: 600, color: "#4A3728", padding: "6px 10px", borderRadius: 4, transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,120,42,0.08)"; e.currentTarget.style.color = "#D4782A"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#4A3728"; }}>{p.num}</a>
            ))}
            <a href="#summary" style={{ fontSize: 10, fontWeight: 700, color: "#D4782A", padding: "6px 10px", borderRadius: 4, background: "rgba(212,120,42,0.08)" }}>Summary</a>
          </div>
          {selected.size > 0 && (
            <div style={{ marginLeft: 12, fontSize: 10, fontWeight: 700, background: "#D4782A", color: "#fff", padding: "4px 10px", borderRadius: 10 }}>
              {selected.size} add-on{selected.size > 1 ? "s" : ""}
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 40px", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: 5, height: "100%", background: "linear-gradient(180deg, #3B7D44, #C49629, #D4782A, #3B7D44, #C49629, #D4782A, #3B7D44, #C49629)" }} />
        <div style={{ maxWidth: 800, marginLeft: 40 }}>
          <div style={{ fontSize: 10, letterSpacing: 2, color: "#D4782A", textTransform: "uppercase", marginBottom: 8, animation: "slideIn 0.6s ease 0.25s both" }}>
            Custom Fabrication & Experiential Production
          </div>
          <h1 className="ht" style={{ fontFamily: "var(--serif)", fontSize: 52, fontWeight: 700, color: "#2C1A0E", lineHeight: 1.08, marginBottom: 10, animation: "fadeUp 0.8s ease 0.3s both" }}>
            Custom Brand Activation
          </h1>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, color: "#D4782A", marginBottom: 32, animation: "fadeUp 0.8s ease 0.5s both" }}>
            Asset Management Proposal
          </h2>
          <div style={{ width: 60, height: 3, background: "#C49629", marginBottom: 32, animation: "slideIn 0.6s ease 0.6s both" }} />
          <div style={{ animation: "fadeUp 0.8s ease 0.7s both", marginBottom: 32 }}>
            <div style={{ fontFamily: "var(--serif)", fontSize: 20, fontWeight: 700, color: "#C49629" }}>Cornbread Hemp</div>
          </div>
          <div style={{ animation: "fadeUp 0.8s ease 0.9s both" }}>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: "#4A3728", maxWidth: 600, marginBottom: 16 }}>
              It starts at the table — your story, your product, your people. From there, the concept grows into something real: designed with care, engineered for durability, built to represent your brand at every touchpoint. Then it travels — from shop floor to venue floor, assembled by the crew that built it, and activated in front of the audience that matters. When the lights come down, the work is not over. Every component returns, gets inspected, restored, and sharpened — so the next deployment is stronger than the last. Your activation is not disposable. It is a living extension of your brand. Let's build it together.
            </p>
            <div style={{ fontSize: 10, color: "#9C8E7E", letterSpacing: 1.5 }}>Confidential | CBH-001 | V1.0 | Updated 04.08.2026</div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", animation: "fadeUp 0.8s ease 1.2s both", cursor: "pointer" }}
          onClick={() => document.getElementById("discovery")?.scrollIntoView({ behavior: "smooth" })}>
          <div style={{ fontSize: 11, color: "#9C8E7E", textAlign: "center", letterSpacing: 2, textTransform: "uppercase" }}>Create Your Activation<div style={{ marginTop: 6 }}>&#8595;</div></div>
        </div>
      </section>

      {/* 8 PHASES */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 40px 40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <div style={{ width: 32, height: 2, background: "#D4782A" }} />
          <span style={{ fontSize: 10, letterSpacing: 3, color: "#D4782A", textTransform: "uppercase", fontWeight: 700 }}>The Experience Build</span>
        </div>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: 30, fontWeight: 700, marginBottom: 8 }}>Your Activation Journey</h2>
        <p style={{ fontSize: 14, color: "#4A3728", lineHeight: 1.7, marginBottom: 32, maxWidth: 700 }}>
          Within each phase, core deliverables form the foundation. Options and add-ons let you customize the experience to match your brand's ambition, budget, and operational requirements. As you explore each phase, select the enhancements that match your program's requirements. Your investment summary reflects all selections in real time.
        </p>

        {PHASES.map(p => (
          <PhaseSection key={p.id} phase={p} selected={selected} onToggle={toggle} isOpen={openPhase === p.id} setOpen={setOpenPhase} />
        ))}
      </div>

      {/* INVESTMENT SUMMARY — 3-PART ENGAGEMENT */}
      <section id="summary" data-a style={{ padding: "60px 40px 40px", maxWidth: 1000, margin: "0 auto", ...a("summary") }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <div style={{ width: 32, height: 2, background: "#C49629" }} />
          <span style={{ fontSize: 10, letterSpacing: 3, color: "#C49629", textTransform: "uppercase", fontWeight: 700 }}>Your Experience Build</span>
        </div>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: 30, fontWeight: 700, marginBottom: 12 }}>Investment Summary</h2>
        <p style={{ fontSize: 14, lineHeight: 1.8, color: "#4A3728", marginBottom: 32, maxWidth: 750 }}>
          The eight phases above define the scope and methodology. The investment below packages those phases into three engagement parts — Return (immediate asset recovery), Restore (ongoing storage subscription), and Release (per-event deployment). Each part can be engaged independently or combined for maximum operational efficiency.
        </p>

        {/* Phase-to-Part Mapping Table */}
        <div style={{ overflowX: "auto", marginBottom: 32 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "#2C1A0E" }}>
                {["Phase", "", "Package", "Investment"].map((h, i) => (
                  <th key={i} style={{ padding: "10px 14px", color: "#fff", fontWeight: 700, textAlign: i === 3 ? "right" : "left", fontSize: 10, letterSpacing: 0.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { num: "01", name: "Discovery & Creative Brief", part: "Pre-Engagement", partColor: "#9C8E7E", inv: "Complimentary", invColor: "#3B7D44" },
                { num: "02", name: "Concept Design & Visualization", part: "Upgrade Options Available", partColor: "#C49629", inv: "Quoted Upon Request", invColor: "#C49629" },
                { num: "03", name: "Engineering & Technical Development", part: "Upgrade Options Available", partColor: "#C49629", inv: "Quoted Upon Request", invColor: "#C49629" },
                { num: "04", name: "Fabrication & Print Production", part: "Upgrade Options Available", partColor: "#C49629", inv: "Quoted Upon Request", invColor: "#C49629" },
                { num: "05", name: "Logistics & Pre-Deployment", part: "Return + Release", partColor: "#D4782A", inv: "See below", invColor: "#D4782A" },
                { num: "06", name: "Installation & Environment Build", part: "Release", partColor: "#C49629", inv: "Included in Release", invColor: "#C49629" },
                { num: "07", name: "Activation & Live Operations", part: "Release", partColor: "#C49629", inv: "Included in Release", invColor: "#3B7D44" },
                { num: "08", name: "Strike, Storage & Legacy", part: "Return + Restore", partColor: "#3B7D44", inv: "See below", invColor: "#3B7D44" },
              ].map((r, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#FDFAF4", borderBottom: "1px solid #E8E0D4" }}>
                  <td style={{ padding: "10px 14px", fontWeight: 700, color: PHASES[i]?.color || "#9C8E7E", width: 36 }}>{r.num}</td>
                  <td style={{ padding: "10px 14px", fontWeight: 600 }}>{r.name}</td>
                  <td style={{ padding: "10px 14px", color: r.partColor, fontWeight: 600, fontSize: 11 }}>{r.part}</td>
                  <td style={{ padding: "10px 14px", textAlign: "right", fontWeight: 600, color: r.invColor, fontSize: 12 }}>{r.inv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── PART A ── */}
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #E8E0D4", marginBottom: 16, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderLeft: "5px solid #D4782A" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <span style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 700, color: "#D4782A" }}>Return</span>
                <span style={{ fontSize: 9, fontWeight: 700, background: "#D4782A", color: "#fff", padding: "2px 8px", borderRadius: 3, letterSpacing: 1 }}>RETURN</span>
                <span style={{ fontSize: 9, fontWeight: 700, background: "#2C1A0E", color: "#fff", padding: "2px 8px", borderRadius: 3, letterSpacing: 1 }}>RETURN | PHASES 05 + 08</span>
              </div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 18, fontWeight: 700, color: "#2C1A0E" }}>Asset Recovery & Transport</div>
              <div style={{ fontSize: 12, color: "#9C8E7E", marginTop: 2 }}>Target Date: April 13, 2026</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 32, fontWeight: 700, color: "#D4782A" }}>$7,500</div>
              <div style={{ fontSize: 10, color: "#9C8E7E", textTransform: "uppercase", letterSpacing: 1 }}>One-Time</div>
            </div>
          </div>
          <div style={{ padding: "0 24px 20px 29px", borderLeft: "5px solid #D4782A" }}>
            {[
              { name: "Strike Crew (Phase 08)", desc: "Professional disassembly, component cleaning, road case packing, damage/loss documentation, and site cleanup. Includes crew lead and all labor." },
              { name: "Outbound Transport (Phase 05)", desc: "Asset transfer from current location to climate-controlled storage in South Florida. Vehicle procurement, blanket wrap securing, GPS tracking, and photo-confirmed delivery. Final routing and carrier selection confirmed upon execution." },
              { name: "Temporary Storage (Phase 08)", desc: "Secure warehousing for up to 30 days while long-term storage agreement is finalized. Includes intake inventory with photo documentation." },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0", borderBottom: i < 2 ? "1px solid #F0EBE2" : "none" }}>
                <span style={{ color: "#D4782A", fontWeight: 700, marginTop: 1 }}>+</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#2C1A0E" }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: "#6B5D4F", lineHeight: 1.6, marginTop: 2 }}>{s.desc}</div>
                </div>
              </div>
            ))}
            {/* Part A Gate */}
            <div style={{ marginTop: 16, background: "#FDF6EC", borderRadius: 6, padding: "14px 16px", border: "2px solid #D4782A" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, background: "#D4782A", borderRadius: 1, transform: "rotate(45deg)" }} />
                <div style={{ fontSize: 10, fontWeight: 700, color: "#D4782A", letterSpacing: 2, textTransform: "uppercase" }}>Execution Gate: Return</div>
              </div>
              {["Signed engagement agreement and Return payment ($7,500) received", "Strike date confirmed (target: April 13, 2026)", "Asset location access and dock/loading details confirmed — [current venue / facility address to be confirmed]", "Transport routing and carrier secured", "Climate-controlled storage facility in South Florida prepared for asset intake"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 11, color: "#4A3728", lineHeight: 1.6, marginBottom: 3 }}>
                  <span style={{ color: "#C4BAA8", flexShrink: 0 }}>&#9744;</span> {item}
                </div>
              ))}
              <div style={{ marginTop: 10, fontSize: 11, fontWeight: 700, color: "#D4782A" }}>&#8594; Initiates: Return — Strike Crew Deployment on 4/13 + Asset Transport to Climate-Controlled Storage</div>
            </div>
          </div>
        </div>

        {/* ── PART B ── */}
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #E8E0D4", marginBottom: 16, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderLeft: "5px solid #3B7D44" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <span style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 700, color: "#3B7D44" }}>Restore</span>
                <span style={{ fontSize: 9, fontWeight: 700, background: "#3B7D44", color: "#fff", padding: "2px 8px", borderRadius: 3, letterSpacing: 1 }}>RESTORE</span>
                <span style={{ fontSize: 9, fontWeight: 700, background: "#2C1A0E", color: "#fff", padding: "2px 8px", borderRadius: 3, letterSpacing: 1 }}>RESTORE | PHASE 08</span>
              </div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 18, fontWeight: 700, color: "#2C1A0E" }}>Storage & Asset Management</div>
              <div style={{ fontSize: 12, color: "#9C8E7E", marginTop: 2 }}>Effective: May 1, 2026</div>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "stretch" }}>
              <div style={{ background: "#F5F0E8", borderRadius: 6, padding: "12px 16px", textAlign: "center", minWidth: 120 }}>
                <div style={{ fontSize: 8, fontWeight: 700, color: "#9C8E7E", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>Monthly</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 700, color: "#4A3728" }}>$6,000</div>
                <div style={{ fontSize: 9, color: "#9C8E7E", marginTop: 2 }}>per month</div>
                <div style={{ fontSize: 8, color: "#9C8E7E", marginTop: 4 }}>3 month minimum</div>
              </div>
              <div style={{ background: "#3B7D44", borderRadius: 6, padding: "12px 16px", textAlign: "center", minWidth: 140, position: "relative" }}>
                <div style={{ position: "absolute", top: -8, left: "50%", transform: "translateX(-50%)", background: "#C49629", color: "#fff", fontSize: 7, fontWeight: 700, padding: "2px 8px", borderRadius: 10, letterSpacing: 1, whiteSpace: "nowrap" }}>SAVE $12,000 PER YEAR</div>
                <div style={{ fontSize: 8, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>Annual</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 700, color: "#fff" }}>$5,000</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>per month</div>
                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>12 month contract</div>
                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.5)" }}>2 months free, prorated</div>
              </div>
            </div>
          </div>
          <div style={{ padding: "0 24px 20px 29px", borderLeft: "5px solid #3B7D44" }}>
            {[
              { name: "Climate-Controlled Storage", desc: "Climate-controlled, secure indoor warehousing in South Florida with 24/7 surveillance. 48-hour mobilization guarantee. Certificate of Insurance provided.", core: true },
              { name: "Asset Maintenance & Refresh", desc: "A proactive quality assurance program for your activation assets. Periodic condition assessments, preventive maintenance, surface touch-ups, and hardware checks to keep assets deployment-ready at all times.", core: true },
              { name: "Asset Inventory Management", desc: "Component-level digital inventory tracked via the ATLVS platform. Photo documentation, condition ratings, and real-time asset visibility. Monthly condition reporting included.", core: true },
              { name: "Asset Modification / Re-fabrication", desc: "Layout reconfiguration, campaign refresh, component rebuild, or material upgrades. Scoped and quoted per project as needed.", core: false },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0", borderBottom: i < 3 ? "1px solid #F0EBE2" : "none" }}>
                <span style={{ color: s.core ? "#3B7D44" : "#C49629", fontWeight: 700, marginTop: 1 }}>{s.core ? "+" : "~"}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#2C1A0E" }}>{s.name}</span>
                    {!s.core && <span style={{ fontSize: 9, fontWeight: 700, background: "#C49629", color: "#fff", padding: "1px 6px", borderRadius: 3, letterSpacing: 1 }}>ADD-ON</span>}
                  </div>
                  <div style={{ fontSize: 12, color: "#6B5D4F", lineHeight: 1.6, marginTop: 2 }}>{s.desc}</div>
                </div>
                {!s.core && <div style={{ fontSize: 11, color: "#C49629", fontWeight: 600, whiteSpace: "nowrap" }}>Starting at $3,000</div>}
              </div>
            ))}
            {/* Part B Gate */}
            <div style={{ marginTop: 16, background: "#EDF5EE", borderRadius: 6, padding: "14px 16px", border: "2px solid #3B7D44" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, background: "#3B7D44", borderRadius: 1, transform: "rotate(45deg)" }} />
                <div style={{ fontSize: 10, fontWeight: 700, color: "#3B7D44", letterSpacing: 2, textTransform: "uppercase" }}>Execution Gate: Restore</div>
              </div>
              {["Return complete — assets received and intake inventory documented", "Storage subscription agreement signed (3 month minimum or 12 month discounted term)", "First monthly payment received — effective May 1, 2026", "ATLVS platform access provisioned for Cornbread Hemp team", "Baseline asset condition report delivered with photo documentation"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 11, color: "#4A3728", lineHeight: 1.6, marginBottom: 3 }}>
                  <span style={{ color: "#C4BAA8", flexShrink: 0 }}>&#9744;</span> {item}
                </div>
              ))}
              <div style={{ marginTop: 10, fontSize: 11, fontWeight: 700, color: "#3B7D44" }}>&#8594; Initiates: Restore — Monthly Storage Billing Cycle + ATLVS Inventory Tracking + Maintenance Schedule</div>
            </div>
            <div style={{ marginTop: 12, padding: "10px 14px", background: "#EDF5EE", borderRadius: 4, fontSize: 11, color: "#4A3728", lineHeight: 1.6 }}>
              Upon contract completion, subscription continues month-to-month at a rate of $6,500 per month unless terminated with 30 days written notice or assets are retrieved by the client.
            </div>
          </div>
        </div>

        {/* ── PART C ── */}
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #E8E0D4", marginBottom: 32, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderLeft: "5px solid #C49629" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <span style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 700, color: "#C49629" }}>Release</span>
                <span style={{ fontSize: 9, fontWeight: 700, background: "#C49629", color: "#fff", padding: "2px 8px", borderRadius: 3, letterSpacing: 1 }}>RELEASE</span>
                <span style={{ fontSize: 9, fontWeight: 700, background: "#2C1A0E", color: "#fff", padding: "2px 8px", borderRadius: 3, letterSpacing: 1 }}>RELEASE | PHASES 05 + 06 + 07</span>
              </div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 18, fontWeight: 700, color: "#2C1A0E" }}>Full Asset Lifecycle Deployment</div>
              <div style={{ fontSize: 12, color: "#9C8E7E", marginTop: 2 }}>Per activation event — scheduled as needed</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 28, fontWeight: 700, color: "#C49629" }}>$10,000</div>
              <div style={{ fontSize: 10, color: "#3B7D44", fontWeight: 700, letterSpacing: 0.5, marginTop: 2 }}>w/ Restore Subscription</div>
              <div style={{ width: "100%", height: 1, background: "#E8E0D4", margin: "8px 0" }} />
              <div style={{ fontFamily: "var(--serif)", fontSize: 20, fontWeight: 700, color: "#9C8E7E" }}>Starting at $15,000</div>
              <div style={{ fontSize: 10, color: "#9C8E7E", letterSpacing: 0.5 }}>A La Carte (no subscription)</div>
            </div>
          </div>
          <div style={{ padding: "0 24px 12px 29px", borderLeft: "5px solid #C49629" }}>
            {[
              { name: "Transport Inbound & Outbound (Phase 05)", desc: "Round-trip asset transfer from storage to venue and back. Included within 500 miles of storage facility. Beyond 500 miles incurs a long-range surcharge based on distance and routing complexity." },
              { name: "Build & Strike Crew — Load-in + Load-out (Phase 06 + 08)", desc: "On-site assembly of the complete 20'x20' activation and post-event teardown. Floor system, wall panels, graphics, electrical, product displays, QC walkthrough, damage inspection, and inventory reconciliation." },
              { name: "Activation Install (Phase 06 + 07)", desc: "Complete branded environment delivery — from truck to fully operational, guest-ready activation. Includes on-site project supervision and venue coordination through the activation period." },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0", borderBottom: i < 2 ? "1px solid #F0EBE2" : "none" }}>
                <span style={{ color: "#C49629", fontWeight: 700, marginTop: 1 }}>+</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#2C1A0E" }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: "#6B5D4F", lineHeight: 1.6, marginTop: 2 }}>{s.desc}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 12, padding: "10px 14px", background: "#FDF6EC", borderRadius: 4, fontSize: 11, color: "#6B5D4F", lineHeight: 1.6 }}>
              <span style={{ fontWeight: 700, color: "#C49629" }}>Subscription Rate:</span> $10,000 per deployment for active Restore subscribers. Includes transport, crew labor, logistics coordination, on-site supervision, and activation delivery.
              <br /><br />
              <span style={{ fontWeight: 700, color: "#9C8E7E" }}>A La Carte Rate:</span> Starting at $15,000 per deployment without an active Restore subscription. A la carte pricing determined by asset condition at time of mobilization, distance from storage, venue complexity, and scheduling lead time.
              <br /><br />
              <span style={{ fontWeight: 700, color: "#6B5D4F" }}>Transport:</span> Round-trip transport included within 500 miles of the South Florida storage facility. Long-range surcharge applies beyond 500 miles based on distance and routing complexity. Standard cargo coverage of $100,000 per occurrence included on all shipments. Enhanced coverage at full replacement value available as an add-on.
            </div>
            {/* Part C Gate */}
            <div style={{ marginTop: 16, background: "#FFF8EE", borderRadius: 6, padding: "14px 16px", border: "2px solid #C49629" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, background: "#C49629", borderRadius: 1, transform: "rotate(45deg)" }} />
                <div style={{ fontSize: 10, fontWeight: 700, color: "#C49629", letterSpacing: 2, textTransform: "uppercase" }}>Execution Gate: Release</div>
              </div>
              {["Event date and venue confirmed with load-in/load-out windows", "Deployment payment received ($10,000 subscriber / starting at $15,000 a la carte) — 14 days prior", "Venue access schedule, dock assignments, and power confirmed", "Asset condition verified — mobilization pull from storage (48hr guarantee)", "Crew manifest finalized and site-specific safety protocols briefed", "Transport carrier and routing confirmed (long-range surcharge quoted if applicable)"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 11, color: "#4A3728", lineHeight: 1.6, marginBottom: 3 }}>
                  <span style={{ color: "#C4BAA8", flexShrink: 0 }}>&#9744;</span> {item}
                </div>
              ))}
              <div style={{ marginTop: 10, fontSize: 11, fontWeight: 700, color: "#C49629" }}>&#8594; Initiates: Release — Storage Pull + Asset Transport + Crew Deployment + On-Site Activation Build</div>
            </div>
          </div>
        </div>

        {/* Engagement Overview */}
        <div style={{ background: "#2C1A0E", borderRadius: 8, padding: "28px 28px 24px", marginBottom: 32 }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 20 }}>Engagement Overview</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }} className="g2">
            {[
              { label: "Return", price: "$7,500", freq: "One-time", date: "April 13, 2026", phases: "05 + 08", c: "#D4782A" },
              { label: "Restore", price: "$6,000 / $5,000", freq: "Monthly / Annual ($12,000 saved)", date: "Effective May 1", phases: "08", c: "#3B7D44" },
              { label: "Release", price: "$10,000 / $15,000", freq: "Per event (subscriber / a la carte)", date: "As scheduled", phases: "05 + 06 + 07", c: "#C49629" },
            ].map((t, i) => (
              <div key={i} style={{ borderTop: `3px solid ${t.c}`, paddingTop: 14 }}>
                <div style={{ fontSize: 10, color: t.c, fontWeight: 700, letterSpacing: 2, marginBottom: 6 }}>{t.label}</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{t.price}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>{t.freq} — {t.date}</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", letterSpacing: 1 }}>PHASES {t.phases}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Add-Ons from Phase Builder */}
        {selectedAddons.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#C49629", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Additional Selected Add-Ons ({selectedAddons.length})</div>
            {selectedAddons.map((a, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 14px", background: i % 2 === 0 ? "#FFF8EE" : "#fff", borderRadius: 4, marginBottom: 4, fontSize: 12 }}>
                <div>
                  <span style={{ fontWeight: 700, color: "#2C1A0E" }}>{a.name}</span>
                  <span style={{ color: "#9C8E7E", marginLeft: 8 }}>Phase {a.phaseNum}</span>
                </div>
                <div style={{ color: "#D4782A", fontWeight: 600 }}>{a.price || "Quoted Upon Request"}{a.unit ? ` ${a.unit}` : ""}</div>
              </div>
            ))}
          </div>
        )}

        <div style={{ fontSize: 12, color: "#9C8E7E", fontStyle: "italic", marginBottom: 40 }}>
          Pre-tax. Transport quotes for Return pending final routing. Restore subscription billed monthly on the 1st. Release pricing reflects subscriber vs. a la carte rate — standard working hours and ground-level venue access assumed. Phases 01-04 (Discovery through Fabrication) available as upgrade options and scoped separately. Add-ons selected in the phase builder above are quoted separately.
        </div>

        {/* Payment Terms */}
        <div style={{ background: "#fff", borderRadius: 8, padding: 24, border: "1px solid #E8E0D4", marginBottom: 40 }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Payment Terms</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }} className="g2">
            {[
              { m: "Return — Due on Execution", d: "$7,500 due upon contract signing to initiate strike and transport on April 13, 2026.", c: "#D4782A" },
              { m: "Restore — Monthly", d: "$6,000 per month billed on the 1st (3 month minimum). 12 month contract receives 2 months free, prorated to $5,000 per month. First payment May 1, 2026.", c: "#3B7D44" },
              { m: "Release — Per Event", d: "$10,000 (subscriber) or starting at $15,000 (a la carte) due 14 days prior to deployment. Long-range surcharge invoiced separately.", c: "#C49629" },
            ].map((t, i) => (
              <div key={i} style={{ borderTop: `3px solid ${t.c}`, padding: "12px 0" }}>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{t.m}</div>
                <div style={{ fontSize: 12, color: "#6B5D4F", lineHeight: 1.5 }}>{t.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRACT TERMS */}
      <section id="terms" style={{ padding: "60px 40px 40px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <div style={{ width: 32, height: 2, background: "#2C1A0E" }} />
          <span style={{ fontSize: 10, letterSpacing: 3, color: "#2C1A0E", textTransform: "uppercase", fontWeight: 700 }}>Contractual Framework</span>
        </div>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Terms & Conditions</h2>
        <p style={{ fontSize: 14, lineHeight: 1.8, color: "#4A3728", marginBottom: 28, maxWidth: 750 }}>
          The following terms govern the complete engagement across all three parts. Execution of Return constitutes agreement to these terms for all subsequent phases and services. Each phase references specific contractual sections as noted in the phase detail above.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }} className="g2">
          {[
            { title: "Scope & Change Orders", items: ["Scope of work defined per engagement package (Return, Restore, Release) as outlined in this proposal", "Changes to scope require written change order with cost/timeline impact", "Out-of-scope requests quoted within 2 business days", "Client responsible for providing venue access, power, and brand artwork per schedule"] },
            { title: "Payment & Cancellation", items: ["Return: due on execution, non-refundable once strike crew is deployed", "Restore: monthly on the 1st, 30-day written notice to cancel after minimum term. Month-to-month continuation at $6,500 per month after initial term", "Release: deployment fee due 14 days prior, cancellation within 7 days forfeits 50%", "Late payments subject to 1.5% monthly service charge"] },
            { title: "Insurance & Liability", items: ["G H X S T S H I P maintains commercial general liability and workers compensation", "Standard cargo coverage of $100,000 per occurrence included on all asset shipments", "Certificate of Insurance provided upon request for all venue submissions", "Client responsible for asset-specific property insurance (G H X S T S H I P can broker)", "Client responsible for event-specific liability insurance as required by each activation venue", "Damage during normal activation wear assessed per post-event condition report"] },
            { title: "Asset Ownership & IP", items: ["All fabricated assets are property of Cornbread Hemp upon full payment", "Design IP and engineering drawings licensed for Cornbread Hemp use", "G H X S T S H I P retains right to portfolio photography for marketing purposes", "Storage does not constitute ownership transfer — assets remain client property"] },
            { title: "Warranty & Quality", items: ["14-day warranty on all installation work from date of acceptance walk-through", "Restore maintenance subscription provides ongoing baseline quality assurance", "Fabrication defects covered under separate warranty per fabrication SOW", "Force majeure provisions apply per industry standard terms"] },
            { title: "Confidentiality & Data", items: ["All proposal contents, pricing, and strategy are confidential", "Guest data captured during activations handled per applicable privacy regulations", "ATLVS platform access governed by separate data processing agreement", "Neither party discloses terms without written consent of the other"] },
          ].map((section, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 6, padding: "16px 18px", border: "1px solid #E8E0D4" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#2C1A0E", marginBottom: 10 }}>{section.title}</div>
              {section.items.map((item, j) => (
                <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 6, fontSize: 11, color: "#6B5D4F", lineHeight: 1.6, marginBottom: 3 }}>
                  <span style={{ color: "#C4BAA8", flexShrink: 0 }}>&#8212;</span> {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Acceptance Block */}
        <div style={{ background: "#2C1A0E", borderRadius: 8, padding: "28px", marginBottom: 32 }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 12 }}>Authorization to Proceed</div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 20 }}>
            By executing this agreement, Client acknowledges review and acceptance of this Proposal, including the complete Scope of Work, selected services, investment framework, execution gates, payment terms, and all incorporated conditions as outlined herein.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }} className="g2">
            {[
              { role: "CLIENT", company: "Cornbread Hemp" },
              { role: "PRODUCER", company: "G H X S T S H I P Industries LLC" },
              { role: "FABRICATION PARTNER", company: "Agora Graphics & Visuals" },
            ].map((s, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 16 }}>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: 2, marginBottom: 10 }}>{s.role}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", fontWeight: 600, marginBottom: 16 }}>{s.company}</div>
                {["Signature", "Printed Name", "Title", "Date"].map((field, j) => (
                  <div key={j} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "8px 0", fontSize: 10, color: "rgba(255,255,255,0.3)" }}>{field}: _______________________</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + NEXT STEPS */}
      <section style={{ padding: "0 40px 40px", maxWidth: 1000, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: 34, fontWeight: 700, marginBottom: 24 }}>Let's Build</h2>
        <div className="fr" style={{ display: "flex", gap: 14, marginBottom: 60 }}>
          <a href="https://calendly.com/ghxstship/sync"
            target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#D4782A", color: "#fff", padding: "14px 28px", borderRadius: 6, fontSize: 13, fontWeight: 700, letterSpacing: 0.5, transition: "all 0.3s", boxShadow: "0 4px 16px rgba(212,120,42,0.25)" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#B86320"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#D4782A"; e.currentTarget.style.transform = "none"; }}>Schedule Discovery Call &#8594;</a>
          <a href="https://ghxstship.tours" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#2C1A0E", padding: "14px 28px", borderRadius: 6, fontSize: 13, fontWeight: 700, letterSpacing: 0.5, border: "2px solid #2C1A0E", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#2C1A0E"; e.currentTarget.style.color = "#FDF6EC"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#2C1A0E"; }}>Explore Our Portfolio</a>
          <a href="mailto:sos@ghxstship.pro"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#3B7D44", padding: "14px 28px", borderRadius: 6, fontSize: 13, fontWeight: 700, letterSpacing: 0.5, border: "2px solid #3B7D44", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#3B7D44"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#3B7D44"; }}>Contact Global Support</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#2C1A0E", padding: "48px 40px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="g2" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 32 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: 2, marginBottom: 4 }}><span style={{ fontFamily: "'Anton', sans-serif", color: "#FFFFFF" }}>G H X S T S H I P</span> <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>x</span> <span style={{ fontFamily: "var(--serif)", color: "#FFFFFF" }}>AGORA GRAPHICS & VISUALS</span></div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>Experiential Production Solutions & Technologies</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: 1.5 }}>Miami | Orlando | New York | Chicago | Las Vegas | Los Angeles</div>
            </div>
            <div>
              <div style={{ fontSize: 9, color: "#D4782A", letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Contact</div>
              {[{ l: "sos@ghxstship.pro", h: "mailto:sos@ghxstship.pro" }, { l: "info@agoravisuals.com", h: "mailto:info@agoravisuals.com" }].map((c, i) => (
                <a key={i} href={c.h}
                  style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,0.55)", marginBottom: 6, transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#D4782A"} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}>
                  {c.l}
                </a>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 9, color: "#C49629", letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Connect</div>
              {[
                { l: "ghxstship.tours", h: "https://ghxstship.tours" },
                { l: "experienceagora.com", h: "https://www.experienceagora.com" },
                { l: "Instagram", h: "https://instagram.com/ghxstship" },
                { l: "LinkedIn", h: "https://linkedin.com/company/ghxstship-industries" },
                { l: "YouTube", h: "https://youtube.com/@ghxstship" },
                { l: "TikTok", h: "https://tiktok.com/@ghxstship" },
              ].map((s, i) => (
                <a key={i} href={s.h} target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: 11, color: i < 2 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.55)", fontWeight: i < 2 ? 600 : 400, marginBottom: 6, transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#C49629"} onMouseLeave={e => e.currentTarget.style.color = i < 2 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.55)"}>{s.l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 9, color: "#3B7D44", letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Platforms</div>
              {[{ l: "ATLVS", d: "Production", c: "#E91E63" }, { l: "COMPVSS", d: "Operations", c: "#C49629" }, { l: "GVTEWAY", d: "Experiences", c: "#00BCD4" }].map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: p.c }} />
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>{p.l}</span>
                  <span style={{ fontSize: 9, color: "rgba(255,255,255,0.25)" }}>{p.d}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 32, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>2026 G H X S T S H I P INDUSTRIES LLC x Agora Graphics & Visuals LLC</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>Confidential — prepared solely for Cornbread Hemp.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
