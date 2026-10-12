import type { Faq } from "@/lib/site";

export type Service = {
  slug: string;
  name: string; // short name used in nav, cards and the lead form
  title: string; // <title>, without the brand suffix
  description: string; // meta description
  h1: string;
  lede: string;
  card: string; // one or two sentences for service cards
  hero: string; // photo key
  intro: string[];
  included: { t: string; d: string }[];
  notHere: { slug: string; why: string }[];
  table?: { caption: string; head: string[]; rows: string[][] };
  steps: { t: string; d: string }[];
  gallery: string[]; // photo keys
  projects: string[]; // project slugs
  faqs: Faq[];
  related: string[]; // service slugs
};

export const services: Service[] = [
  {
    slug: "siding",
    name: "Siding",
    title: "Siding Contractor: Fiber Cement, Lap & Shake Siding",
    description:
      "Siding installation and replacement by a carpentry crew from Ephrata, PA: fiber cement, vinyl, LP SmartSide and cedar shake, with sheathing and trim done right.",
    h1: "Siding installation and replacement",
    lede: "New siding is only as good as the wall under it. We strip it, fix what we find, wrap it properly and then hang fiber cement, vinyl, engineered wood or cedar shake that lines up at every corner and window.",
    card: "Fiber cement, vinyl, LP SmartSide and cedar shake, installed over a wall we have checked and repaired first.",
    hero: "img-7287",
    intro: [
      "Most siding jobs we get called to are not about looks. Something is loose, a wall is soft behind a downspout, paint will not stay on the old wood, or the house has outlived its aluminum. People search for a siding contractor when the wall has a problem, and the honest answer usually starts with taking the old siding off.",
      "We are a carpentry crew first, which matters on siding. A siding installer who only hangs panels works around rotten sheathing and crooked corners. We cut out the bad sheathing, straighten what can be straightened, flash the windows and doors properly and only then put the new siding up. On the stone gambrel house in Lower Merion shown on this page, that meant new ZIP System sheathing on the addition, taped seams, then lap siding on the walls and cedar shakes on the gambrel ends.",
      "We install siding on old farmhouses, stone houses with frame additions, 1950s and 1960s ranches and brand-new houses. Most of our siding work is fiber cement lap siding, often James Hardie, because it holds paint, does not rot and handles Pennsylvania freeze and thaw. We also install vinyl when the budget calls for it, LP SmartSide engineered wood, board and batten, and real cedar shakes.",
    ],
    included: [
      { t: "Full siding replacement", d: "Old siding off, sheathing checked board by board, housewrap or ZIP System, flashing, new siding and trim." },
      { t: "Fiber cement and James Hardie siding", d: "Lap, panel, board and batten and shingle profiles, cut and fastened to the manufacturer's spec so the warranty holds." },
      { t: "Vinyl and LP SmartSide", d: "Lower-cost options installed with proper starter strips, J-channel and room for expansion, so the panels do not buckle in summer." },
      { t: "Cedar shake gables and accents", d: "Real cedar or fiber cement shakes on gables, dormers and bays, the way older houses around here were built." },
      { t: "Siding repair", d: "Matching and replacing damaged boards, fixing water damage behind the siding, and resetting loose or cracked pieces." },
      { t: "Trim that goes with it", d: "Window and door casings, corner boards, frieze, fascia and soffit in PVC or fiber cement trim, all done by the same crew." },
    ],
    notHere: [
      { slug: "exterior-trim", why: "Only the fascia, soffit or rotten trim needs work, not the whole wall." },
      { slug: "windows", why: "You are replacing windows and want to keep the siding you have." },
      { slug: "dormers-additions", why: "You are adding a dormer or an addition and need the framing and roof as well." },
    ],
    table: {
      caption: "Siding materials we install, and where each one makes sense",
      head: ["Material", "Good for", "Watch out for"],
      rows: [
        ["Fiber cement (James Hardie, Allura)", "Older houses, painted looks, long life, fire resistance", "Heavy, needs proper blades and dust control, joints must be flashed"],
        ["Vinyl", "Tight budgets, rentals, low upkeep", "Can look thin up close, needs room to move or it buckles"],
        ["LP SmartSide engineered wood", "Wood look at a lower price, sheds and garages", "Cut ends must be sealed, keep it off the ground"],
        ["Cedar shake", "Gables, dormers, historic houses", "Needs a rainscreen gap and finish care"],
        ["Board and batten", "Farmhouse look, accent walls, additions", "Vertical joints and batten spacing must be laid out first"],
      ],
    },
    steps: [
      { t: "Look at the wall, not just the siding", d: "We pull a piece or two where water usually gets in, around windows, under roof lines and at downspouts, and tell you what is behind it." },
      { t: "Written estimate by area", d: "Siding, trim, sheathing repair allowance and disposal are separate lines, so you can see where the money goes." },
      { t: "Strip, repair and wrap", d: "One wall at a time so the house is never open overnight. Bad sheathing comes out, wrap or ZIP System goes on, every window and door is flashed." },
      { t: "Hang and trim", d: "Siding goes up with straight courses that line up with window heads and sills. Corners, casings and frieze are fitted, not caulked to hide gaps." },
      { t: "Walk-around and cleanup", d: "We walk every wall with you, magnet the yard for nails and haul away the old siding." },
    ],
    gallery: ["img-7287", "img-7285", "img-5548", "img-7281", "img-4884", "img-3862", "img-5004", "img-5379"],
    projects: ["lap-siding-cedar-shake-gambrel-lower-merion", "stone-gambrel-house-dormers-lower-merion", "blue-gray-lap-siding-manheim", "siding-windows-doors-broomall", "new-home-lap-siding-hunterdon-nj"],
    faqs: [
      { q: "Should old siding be removed before new siding goes on?", a: "Almost always, yes. Covering old siding hides rot and water damage, makes the window trim look sunken and can void the new siding's warranty. Taking it off is the only way to see and fix the sheathing." },
      { q: "Is fiber cement worth the extra cost over vinyl?", a: "On a house you plan to keep, usually yes. Fiber cement does not rot, does not melt next to a grill, holds paint for many years and looks like painted wood. Vinyl costs less up front and needs less upkeep, so it makes sense on rentals or tight budgets." },
      { q: "How long does it take to re-side a house?", a: "A typical two-story house takes our crew two to four weeks depending on how much sheathing needs repair and how much trim is involved. We work one wall at a time, so the house is closed up every night." },
      { q: "Can you match the siding I already have for a repair?", a: "Often, yes. Most fiber cement and vinyl profiles are still made. When an exact match is gone, we take boards from a hidden wall for the repair and put new siding on the hidden wall." },
      { q: "Do you install James Hardie siding?", a: "Yes. Most of our fiber cement work is James Hardie lap siding and trim. We follow Hardie's clearances, fastening and joint flashing details, which is what keeps the warranty valid." },
      { q: "Do you work in winter?", a: "Yes, with care. Fiber cement and cedar can go up in cold weather. Some caulks and paints have temperature limits, so finishing work may wait for a warmer day." },
    ],
    related: ["exterior-trim", "windows", "dormers-additions"],
  },
  {
    slug: "windows",
    name: "Windows",
    title: "Window Replacement & Installation: Marvin, Andersen",
    description:
      "Window replacement and new-construction installs by a carpentry crew from Ephrata, PA. Marvin and Andersen windows, flashed right and trimmed inside and out.",
    h1: "Window replacement and installation",
    lede: "A good window installed badly leaks. We set replacement and new-construction windows level and square, flash them into the wall, and finish the casing, stool and exterior trim ourselves.",
    card: "Replacement and new-construction windows, Marvin and Andersen included, flashed into the wall and trimmed inside and out.",
    hero: "img-6729",
    intro: [
      "Window replacement is mostly carpentry. The window itself comes from the factory square and sealed. Whether it stays that way depends on the opening it goes into, the flashing around it and the trim that covers the gap. That part is our trade.",
      "We install windows two ways. An insert replacement goes into the old frame and saves the interior trim, which works when the frame is solid and you are happy with the trim. A full-frame replacement takes the window out down to the rough opening, so we can fix rot, flash it properly and put on new casing. On older houses around here we usually recommend full frame, because the sill and the bottom of the jamb are where the rot hides.",
      "We have installed Andersen windows in stone walls on the Main Line, Marvin double-hungs in a renovated house in Lower Merion, black-frame units across a commercial building in Newtown Square and simple sliders in brick houses in Berks County. We are not tied to one brand. You pick the window with us, we install it and trim it out.",
    ],
    included: [
      { t: "Full-frame window replacement", d: "Old window and frame out, opening checked for rot, sill pan and flashing tape, new window, insulation and new trim." },
      { t: "Insert replacement windows", d: "For solid frames: new unit fitted into the existing frame with new stops and exterior capping where needed." },
      { t: "New-construction windows", d: "Nail-fin windows in additions, dormers and new walls, lapped with the housewrap or ZIP System in the right order." },
      { t: "Marvin and Andersen installs", d: "We install the brands people around here ask for, including Marvin and Andersen 400 and E-Series, following each one's instructions." },
      { t: "Bay, picture and multi-unit windows", d: "Mulled units and bays with proper support, including copper or metal roofs over bay windows." },
      { t: "Interior and exterior trim", d: "Casing, stool and apron inside, PVC or wood trim or aluminum capping outside, so the job is finished when we leave." },
    ],
    notHere: [
      { slug: "doors", why: "You need an entry, patio, French or storm door rather than windows." },
      { slug: "exterior-trim", why: "The windows are fine but the sills or trim around them are rotten." },
      { slug: "commercial", why: "The windows are in an office, store or other commercial building." },
    ],
    table: {
      caption: "Insert or full-frame replacement",
      head: ["", "Insert replacement", "Full-frame replacement"],
      rows: [
        ["What comes out", "Sashes and stops only", "Whole window down to the rough opening"],
        ["Interior trim", "Stays", "New casing, stool and apron"],
        ["Glass area", "A little smaller", "Same as original or larger"],
        ["Rot in the sill or jamb", "Stays hidden", "Found and fixed"],
        ["Best for", "Solid frames, newer houses, budget", "Older houses, rot, stone and brick walls"],
      ],
    },
    steps: [
      { t: "Measure and check each opening", d: "We measure every window and push a pick into the sills and lower jambs. Rot changes the plan, so we find it before ordering." },
      { t: "Choose the window together", d: "Brand, series, color, grilles and glass. We tell you plainly where a cheaper series is fine and where it is not." },
      { t: "Install in the right order", d: "Sill pan first, window set level and square, flashing lapped so water runs out, low-expansion foam, then trim." },
      { t: "Trim inside and out", d: "Interior casing and stool, exterior trim or capping, caulk where caulk belongs and nowhere else." },
      { t: "Clean up and check", d: "Every sash opened and locked, labels off when you want them off, debris hauled away." },
    ],
    gallery: ["img-6729", "img-7994", "img-6723", "img-7223", "img-4826", "img-6658", "img-5006", "img-7289"],
    projects: ["andersen-windows-french-doors-lower-merion", "interior-trim-built-ins-lower-merion", "office-building-window-replacement-newtown-square", "brick-home-windows-door-douglassville", "sunroom-windows-door-chadds-ford"],
    faqs: [
      { q: "Is insert or full-frame replacement better?", a: "Full-frame is better when the frame is soft, when you want new interior trim or when the house is old enough that the sill has seen decades of water. Insert replacement costs less and works well when the frame is sound." },
      { q: "Do you install Marvin and Andersen windows?", a: "Yes. Both are common on our jobs. You can order through a dealer you like or we can order through ours. Either way we install to the maker's instructions so the warranty holds." },
      { q: "How long does window replacement take?", a: "A crew of two usually replaces six to ten windows a day with exterior trim, depending on the wall. Stone and brick walls take longer because the openings are rarely square." },
      { q: "Can you replace windows in a stone house?", a: "Yes, and we do it often. Stone openings are out of square, so the new window is set to the opening with shims and the gaps are closed with trim and sealant that can move with the stone." },
      { q: "Do you paint or stain the new interior trim?", a: "We install the trim primed or ready to finish. We can caulk and fill it so your painter has nothing to fix, or point you to painters we have worked alongside." },
    ],
    related: ["doors", "exterior-trim", "finish-carpentry"],
  },
  {
    slug: "doors",
    name: "Doors",
    title: "Front Door Replacement, Entry & Patio Door Installation",
    description:
      "Front door, entry door, French door and patio door replacement by a carpentry crew from Ephrata, PA. Doors set plumb, flashed at the sill and trimmed out.",
    h1: "Front door and entry door replacement",
    lede: "A front door has to swing, seal and lock every day for decades. That comes down to a level sill, a plumb frame and flashing under the threshold, which is the part we take the most care with.",
    card: "Entry doors with sidelights, French doors, patio and storm doors, set plumb with a flashed sill and new trim.",
    hero: "img-6966",
    intro: [
      "Most door calls start with a draft, a door that drags, a rotten threshold or a front door that simply looks tired. Front door replacement is one of the jobs where the difference between a good install and a bad one shows up within a year: the door starts rubbing, the weatherstrip stops touching, or water gets under the sill and softens the floor.",
      "We replace entry doors with or without sidelights and transoms, swap sliding patio doors for French doors, install storm doors and hang interior doors as part of trim work. On the stone house in Lower Merion we set a fir entry door with sidelights into the fieldstone wall and a pair of French doors with transoms into the rear wall. In Broomall we put in new French doors and an exterior door as part of a siding job. In Newtown Square we installed a full run of black storefront doors in a commercial unit.",
      "Every exterior door gets a sloped sill pan or flashing under the threshold, a frame shimmed plumb at the hinges, insulation in the gap and new casing. We adjust the strike and weatherstrip until the door closes with one hand and seals all the way around.",
    ],
    included: [
      { t: "Front and entry door replacement", d: "Fiberglass, steel and wood entry doors, with or without sidelights and transoms, including the frame." },
      { t: "French and patio doors", d: "Swing French doors and sliding patio doors, including converting one to the other and widening openings." },
      { t: "Storm doors", d: "Full-view and ventilating storm doors fitted to the existing entry so they close and latch cleanly." },
      { t: "Threshold and sill repair", d: "Rotten sills, door jambs and subfloor under the threshold replaced before the new door goes in." },
      { t: "Interior doors", d: "Pre-hung and slab doors, closet doors and pocket doors, hung and cased as part of finish carpentry." },
      { t: "Hardware and adjustment", d: "Locksets, deadbolts and closers installed, strikes and hinges adjusted so the door seals." },
    ],
    notHere: [
      { slug: "windows", why: "You are replacing windows rather than doors." },
      { slug: "commercial", why: "The doors are for a storefront or office." },
      { slug: "porches-decks", why: "You also want a covered entry, portico or new steps outside the door." },
    ],
    table: {
      caption: "Entry door materials",
      head: ["Material", "Strengths", "Trade-offs"],
      rows: [
        ["Fiberglass", "Does not rot or dent, can look like wood, good insulation", "Costs more than steel"],
        ["Steel", "Secure, affordable, insulated core", "Dents, can rust at the bottom if the finish is damaged"],
        ["Wood (fir, mahogany)", "Real wood look for older and stone houses", "Needs a porch or overhang and regular finish care"],
      ],
    },
    steps: [
      { t: "Check the opening", d: "We look at the sill, jambs, floor under the threshold and the wall around it before quoting." },
      { t: "Pick the door", d: "Size, swing, glass, sidelights and finish. We measure the rough opening so the door is ordered right the first time." },
      { t: "Remove and repair", d: "Old door and frame out, rotten sill or subfloor replaced, sill pan installed." },
      { t: "Set, seal and trim", d: "Frame shimmed plumb at the hinges, insulated, flashed and cased inside and out." },
      { t: "Adjust", d: "Strike, hinges and weatherstrip adjusted until the door closes easily and seals all around." },
    ],
    gallery: ["img-6966", "img-7228", "img-7996", "img-5007", "img-4611", "img-7208", "img-7276", "img-4666"],
    projects: ["andersen-windows-french-doors-lower-merion", "storefront-glass-doors-newtown-square", "siding-windows-doors-broomall", "brick-home-windows-door-douglassville", "front-porch-columns-entry-roof-lower-merion"],
    faqs: [
      { q: "Can you replace a front door and keep the sidelights?", a: "Sometimes. If the sidelights are a separate unit and in good shape, a new slab or a door-only unit can fit. Most of the time the door and sidelights share a frame, and replacing the whole unit is cleaner and seals better." },
      { q: "How long does a front door replacement take?", a: "Most entry doors are a one-day job. A door with sidelights, a rotten sill or a change in size can take two days. The house is never left open overnight." },
      { q: "Why does my exterior door stick in summer?", a: "Humidity swells wood doors and jambs, and a frame that was not set plumb makes it worse. Often the hinges just need longer screws into the framing. If the frame has moved, it needs to be reset or replaced." },
      { q: "Fiberglass or steel for a front door?", a: "Fiberglass if you want a wood look without the upkeep or the door gets direct sun. Steel if the budget is tight and security matters most. Both perform well when installed with a proper sill." },
      { q: "Do you install storm doors?", a: "Yes. We fit storm doors to existing entries, including older openings that are not square, so they close and latch without rubbing." },
    ],
    related: ["windows", "finish-carpentry", "porches-decks"],
  },
  {
    slug: "exterior-trim",
    name: "Exterior trim, fascia & soffit",
    title: "AZEK Trim, Fascia & Soffit Repair, Aluminum Capping",
    description:
      "Rotted fascia, soffit and window trim replaced with AZEK and PVC trim or wrapped in aluminum. Exterior trim carpentry from Ephrata, PA, for old and new homes.",
    h1: "AZEK trim, fascia and soffit repair",
    lede: "Rot starts at the trim. We cut out soft fascia, sills, rakes and casings, fix the wood behind them and replace them with AZEK or PVC trim that will not rot, or wrap them in aluminum.",
    card: "Rotted fascia, soffit, rakes and sills replaced in AZEK and PVC trim, or wrapped in custom-bent aluminum.",
    hero: "img-3419",
    intro: [
      "Exterior trim is where water lingers: the bottom of window casings, the top of a rake board, the corner where the fascia meets the gutter. Painted pine there lasts a few years before it goes soft. When we replace it, we use cellular PVC trim such as AZEK, which does not rot, takes paint well and can be routed and bent like wood.",
      "Soffit and fascia repair is the most common trim call we get. A gutter that overflows soaks the fascia, the fascia rots, and the soffit behind it follows. We take it apart, replace the rafter tails or sub-fascia if they are soft, put up new PVC fascia and vented soffit, and make sure the gutter is pitched so the problem does not come back.",
      "We also do the finer work: built-up rake boards with a return, like on the stucco farmhouse in Newtown Square, window sills rebuilt on stucco walls in Lower Merion, crown and frieze details on gables, and aluminum window capping bent on site for houses that want a no-paint finish.",
    ],
    included: [
      { t: "Fascia and soffit replacement", d: "Rotted fascia and soffit out, sub-fascia and rafter tails repaired, new PVC or aluminum fascia and vented soffit." },
      { t: "AZEK and PVC trim", d: "Corner boards, casings, rakes, frieze and water tables in cellular PVC, glued and fastened so the joints stay tight." },
      { t: "Rotted wood repair", d: "Soft sills, brick molds, casings and posts cut out and replaced, with the cause of the water fixed." },
      { t: "Aluminum trim capping", d: "Window and door trim wrapped in custom-bent aluminum coil for a finish that never needs paint." },
      { t: "Rake and gable details", d: "Built-up rakes, returns, crown and gable trim on older houses, matched to what was there." },
      { t: "Window sill rebuilds", d: "Rotted sills on stucco, brick and stone walls rebuilt in PVC with flashing behind." },
    ],
    notHere: [
      { slug: "siding", why: "The siding itself is failing, not just the trim around it." },
      { slug: "copper-work", why: "You want copper gutters, flashing or a copper roof over a bay." },
      { slug: "windows", why: "The window is failing, not only the trim around it." },
    ],
    table: {
      caption: "Trim materials compared",
      head: ["Material", "Rot", "Paint", "Notes"],
      rows: [
        ["Painted pine", "Rots where water sits", "Needs repainting every few years", "Cheapest, fine where it stays dry"],
        ["AZEK or other cellular PVC", "Does not rot", "Optional, holds paint well", "Moves with heat, joints must be glued and fastened right"],
        ["Fiber cement trim", "Does not rot", "Must be painted", "Pairs with fiber cement siding"],
        ["Aluminum capping", "Covers wood, does not fix rot", "Never", "Only over solid wood, rot must be fixed first"],
      ],
    },
    steps: [
      { t: "Find the water", d: "Before quoting we look for why the trim rotted: gutters, missing flashing, roof edge, caulk failure." },
      { t: "Cut out every soft piece", d: "We probe until we hit solid wood. Partial patches on rot come back." },
      { t: "Repair what is behind", d: "Sub-fascia, rafter tails, sheathing or sill framing replaced as needed." },
      { t: "Install PVC trim", d: "Joints glued, fasteners set for expansion, back-primed where it meets wood, flashing where trim meets roof or wall." },
      { t: "Seal and finish", d: "Caulk only where it belongs, nail holes filled, ready for paint or left white." },
    ],
    gallery: ["img-3419", "img-6655", "img-8006", "img-7277", "img-6652", "img-5215", "img-4883", "img-3421"],
    projects: ["pvc-rake-trim-stucco-farmhouse-newtown-square", "rotted-window-sill-repair-lower-merion", "lap-siding-cedar-shake-gambrel-lower-merion", "front-porch-columns-entry-roof-lower-merion"],
    faqs: [
      { q: "Does AZEK trim turn yellow?", a: "Bright white AZEK can pick up a slight yellow or gray tone over years in strong sun, and dirt shows on it. A light wash brings most of it back, and painted PVC trim does not show it at all." },
      { q: "Can you just wrap rotted trim in aluminum?", a: "We do not wrap rot. Aluminum over soft wood traps moisture and hides the problem until it reaches the framing. We cut out the rot first, then wrap or replace." },
      { q: "What is the difference between fascia, soffit and frieze?", a: "Fascia is the board at the edge of the roof that the gutter hangs on. Soffit is the underside of the overhang. The frieze board runs along the top of the wall under the soffit." },
      { q: "Why does my fascia keep rotting?", a: "Usually an overflowing or backward-pitched gutter, missing drip edge, or ice dams. We fix the cause along with the board." },
      { q: "Can PVC trim be painted?", a: "Yes. Use a paint rated for PVC, especially in dark colors, which heat up in the sun. White PVC can also be left unpainted." },
    ],
    related: ["siding", "copper-work", "windows"],
  },
  {
    slug: "finish-carpentry",
    name: "Finish carpentry",
    title: "Finish & Trim Carpentry: Crown, Wainscoting, Stairs",
    description:
      "Trim and finish carpentry from Ephrata, PA: crown molding, baseboard, wainscoting, door and window casing, stair trim and interior doors, fitted tight.",
    h1: "Trim and finish carpentry",
    lede: "Baseboard, casing, crown, wainscoting, stair skirts and doors. The trim you see every day, scribed to walls that are never straight and fitted so nothing needs caulk to hide a gap.",
    card: "Crown, baseboard, casing, wainscoting, stair trim and interior doors, fitted to real walls in old and new houses.",
    hero: "img-7971",
    intro: [
      "Finish carpentry is the last ten percent of a house and the part people notice. A finish carpenter who rushes uses caulk to hide gaps. One who takes care copes inside corners, scribes baseboard to wavy floors, and plans the wainscot panels so they land evenly on both ends of the wall.",
      "We do trim carpentry in renovations and in single rooms. On the job in Lower Merion shown at the top of this page we cased every door and window, ran baseboard over new white oak, built paneled nooks and closet shelving and hung six-panel doors on a marble tile floor. In Thornbury Township we added picture-frame wainscoting up a stairwell, which means every frame follows the stair angle. In an attic in Radnor Township we trimmed out dormer windows and knee walls.",
      "We work with paint-grade poplar and MDF, stain-grade oak and maple, and PVC in wet rooms. If your house has old trim profiles, we match them from stock moldings or build them up from several pieces.",
    ],
    included: [
      { t: "Crown molding", d: "Single and built-up crown, coped and fitted to ceilings that are not level." },
      { t: "Baseboard and casing", d: "New or matched to existing profiles, scribed to floors, with mitered returns and proper reveals." },
      { t: "Wainscoting and paneling", d: "Picture-frame, raised panel, flat panel and board and batten, laid out so panels come out even." },
      { t: "Stair trim and railings", d: "Skirt boards, treads and risers, balusters, newel posts and handrails." },
      { t: "Interior doors", d: "Pre-hung and slab doors, closet and French doors, hung and cased." },
      { t: "Coffered and beamed ceilings", d: "Box beams and coffers laid out to the room and the light fixtures." },
    ],
    notHere: [
      { slug: "built-ins", why: "You want bookcases, closet systems, window seats or a desk built in." },
      { slug: "exterior-trim", why: "The trim is outside: fascia, soffit, rakes or window sills." },
      { slug: "doors", why: "You only need an exterior or patio door replaced." },
    ],
    table: {
      caption: "Common trim jobs and what they involve",
      head: ["Job", "What we do", "Typical time"],
      rows: [
        ["Crown in one room", "Layout, coped corners, scarf joints on long walls", "1 day"],
        ["Baseboard and casing, whole floor", "Remove old, scribe new, cope corners, fill and caulk", "3 to 6 days"],
        ["Stairwell wainscoting", "Layout to the stair angle, frames, chair rail", "2 to 3 days"],
        ["Interior doors, whole house", "Hang, case, hardware, adjust", "1 to 2 days per 6 to 8 doors"],
      ],
    },
    steps: [
      { t: "Walk the rooms", d: "We look at the walls, floors and existing trim and talk about the look you want." },
      { t: "Pick profiles", d: "We bring samples or match what you have. You see the profile before we order." },
      { t: "Install", d: "Coped inside corners, glued miters, scarfed long runs, scribed to floors and walls." },
      { t: "Fill and prep", d: "Nail holes filled and sanded, joints caulked where paint needs it, ready for paint." },
    ],
    gallery: ["img-7971", "img-4582", "img-7962", "img-7989", "img-4137", "img-7727", "img-5009", "img-7718"],
    projects: ["interior-trim-built-ins-lower-merion", "stairwell-wainscoting-thornbury", "attic-bedroom-trim-radnor", "stairs-bath-trim-lower-merion"],
    faqs: [
      { q: "What is the difference between trim carpentry and finish carpentry?", a: "People use the words for the same work. Trim carpentry usually means moldings: baseboard, casing and crown. Finish carpentry is broader and includes doors, stairs, paneling and built-ins." },
      { q: "Do you paint the trim?", a: "We leave trim filled, caulked and ready for paint. Painting is a separate trade, and we can work alongside your painter." },
      { q: "Can you match old trim in my house?", a: "Usually. Many old profiles can be matched with stock moldings or built up from two or three pieces. For unusual profiles a millwork shop can run a custom knife." },
      { q: "How much does crown molding installation cost?", a: "It depends on the room size, the crown size and whether it is a single piece or built up. We quote per room after seeing the ceilings, because uneven ceilings take more time." },
      { q: "Do you install stair railings?", a: "Yes. We replace balusters, handrails and newel posts and trim out stair skirts, treads and risers." },
    ],
    related: ["built-ins", "doors", "windows"],
  },
  {
    slug: "built-ins",
    name: "Built-ins",
    title: "Custom Built-Ins: Bookshelves, Closets, Window Seats",
    description:
      "Custom built-in bookshelves, bookcases, closet shelving, desks and window seats built on site by a finish carpentry crew from Ephrata, PA.",
    h1: "Custom built-in bookshelves, closets and nooks",
    lede: "Built-ins are made for one wall in one house. We build bookshelves, closet shelving, desks, window seats and storage under the roof slope on site, so they fit tight to the walls and match the trim.",
    card: "Bookshelves, closet shelving, desks, window seats and knee-wall storage built on site to fit one wall exactly.",
    hero: "img-7992",
    intro: [
      "A built-in looks like part of the house because it is fitted to the house. Store-bought shelving stands in front of a wall. A built-in is scribed to the wall, the floor and the ceiling, finished with the same casing and baseboard as the room and painted with it.",
      "Most of what we build is paint-grade: bookshelves beside a fireplace, closet shelving, built-in desks in a nook, window seats with storage and shelves set into knee walls under a sloped ceiling. In the Lower Merion job on this page we built square and angled shelves into the knee walls, a desk in a paneled alcove and L-shaped closet shelving with solid wood tops under the roof slope.",
      "Search for built-in bookshelves and you will find plenty of pictures. What you will not find is how much it matters that the shelves do not sag, that adjustable shelf holes line up, and that the face frame lines up with the window casing next to it. That is the carpentry part.",
    ],
    included: [
      { t: "Built-in bookshelves and bookcases", d: "Beside fireplaces, around windows and doors, floor to ceiling or with cabinets below." },
      { t: "Closet shelving", d: "Solid shelving, hanging rods and drawers built to the closet instead of a wire kit." },
      { t: "Built-in desks and nooks", d: "Desks, homework stations and paneled alcoves with shelves above." },
      { t: "Window seats and benches", d: "Seats with lift-up or drawer storage, sized for a cushion." },
      { t: "Knee-wall and under-stair storage", d: "Shelves and cabinets set into knee walls in attics and under staircases." },
      { t: "Mudroom lockers and pantry shelving", d: "Cubbies, hooks, benches and pantry shelves built to the space." },
    ],
    notHere: [
      { slug: "finish-carpentry", why: "You need trim, doors or wainscoting rather than shelving or storage." },
      { slug: "commercial", why: "You need shelving or counters in a store or office." },
    ],
    table: {
      caption: "Built-in options",
      head: ["Choice", "Options", "Our take"],
      rows: [
        ["Material", "Paint-grade plywood and poplar, MDF, stain-grade hardwood", "Plywood boxes with poplar face frames hold up best for painted work"],
        ["Shelves", "Fixed or adjustable", "Fixed shelves stiffen the case, adjustable ones are handy for books"],
        ["Base", "Open shelves or cabinets with doors", "Cabinets below hide clutter and give a counter surface"],
        ["Finish", "Painted on site or primed for your painter", "Painted to match the room trim reads as part of the house"],
      ],
    },
    steps: [
      { t: "Measure and sketch", d: "We measure the wall and draw the built-in with shelf spacing, cabinet doors and trim." },
      { t: "Build", d: "Boxes and face frames are built, then brought in and fitted to the room." },
      { t: "Scribe and trim", d: "Scribed to the walls and floor, tied into the room's baseboard and crown." },
      { t: "Finish", d: "Filled, caulked and ready for paint, or painted to match the trim." },
    ],
    gallery: ["img-7992", "img-7961", "img-7964", "img-7991", "img-7993", "img-7978", "img-7772"],
    projects: ["interior-trim-built-ins-lower-merion", "attic-bedroom-trim-radnor"],
    faqs: [
      { q: "How much do built-in bookshelves cost?", a: "Price depends on width, height, whether there are cabinets below and the finish. A simple painted bookcase on one wall costs far less than a fireplace surround with cabinets and lighting. We price from a sketch after measuring." },
      { q: "How long does a built-in take?", a: "Most single-wall built-ins take two to five days on site, plus painting. Larger closets and multi-wall projects take longer." },
      { q: "Can you build around a fireplace or window?", a: "Yes. Fireplace surrounds and window seats between bookcases are some of the most common built-ins we do." },
      { q: "Do built-ins add value to a house?", a: "Well-made built-ins that match the trim tend to read as quality to buyers. Cheap ones that sag or peel do the opposite." },
    ],
    related: ["finish-carpentry", "doors", "dormers-additions"],
  },
  {
    slug: "porches-decks",
    name: "Porches & decks",
    title: "Porch Builder: Covered Porches, Porticos, Composite Decks",
    description:
      "Covered porches, porticos, timber truss entries, composite decks and steps built by a carpentry crew from Ephrata, PA. Framing, columns, ceilings and railings.",
    h1: "Covered porches, porticos and composite decks",
    lede: "Porches and decks live outside all year. We frame them to last, set footings below frost, and finish them with columns, ceilings, composite decking and railings that will not need constant care.",
    card: "Covered porches, porticos, timber truss entries, composite decks and steps, framed to last and trimmed clean.",
    hero: "img-6459",
    intro: [
      "A porch is a small building. It needs footings below the frost line, a ledger flashed into the house, beams sized for the span and a roof that ties into the main roof without leaking. Most problems we see on old porches come from skipping one of those steps.",
      "We build covered front porches, porticos over entry doors, timber truss porches like the one with the cedar ceiling in Ewing, New Jersey, composite decks on stone piers like the one in Wayne, and composite steps and landings like the ones in Media. On the stone house in Lower Merion we set new square columns on the front porch and built a small entry roof with a beadboard ceiling over the side door.",
      "For decking we mostly use composite boards with hidden fasteners and aluminum or composite railings. Composite costs more than pressure-treated pine but does not splinter, crack or need staining every couple of years. For porch floors, ceilings and columns we use materials that hold paint outside, such as PVC beadboard and fiberglass or PVC column wraps.",
    ],
    included: [
      { t: "Covered front porches", d: "New porches and porch rebuilds with footings, framing, roof, columns, ceiling and railings." },
      { t: "Porticos and entry roofs", d: "Small roofs over doors with brackets or columns, tied into the house and flashed." },
      { t: "Timber truss porches", d: "Exposed timber trusses and tongue and groove ceilings for a craftsman look." },
      { t: "Composite decks", d: "New decks and deck replacements with composite decking, hidden fasteners and new railings." },
      { t: "Steps and landings", d: "Composite or stone-faced steps with proper rise and run and graspable handrails." },
      { t: "Porch repair", d: "Rotted posts, beams, floors and ceilings replaced, sagging roofs supported and leveled." },
    ],
    notHere: [
      { slug: "dormers-additions", why: "You want an enclosed addition, sunroom or dormer rather than an open porch." },
      { slug: "doors", why: "You only need the door replaced, not the porch around it." },
    ],
    table: {
      caption: "Decking materials",
      head: ["Material", "Upkeep", "Feel and look"],
      rows: [
        ["Pressure-treated pine", "Stain or seal every 2 to 3 years, checks and splinters", "Cheapest, rustic"],
        ["Composite (capped)", "Wash once or twice a year", "Wood-grain colors, no splinters"],
        ["PVC decking", "Wash only", "Lightest, coolest underfoot, highest price"],
      ],
    },
    steps: [
      { t: "Site visit", d: "We measure, check where the porch or deck meets the house and look at the ground for footings." },
      { t: "Drawing and permit", d: "Most porches and raised decks need a permit. We draw the framing and handle the paperwork with the township." },
      { t: "Footings and framing", d: "Footings below frost, ledger flashed and bolted, beams and joists sized for the span." },
      { t: "Roof, decking and trim", d: "Roof tied in and flashed, decking, columns, ceiling and railings installed." },
      { t: "Inspection and walkthrough", d: "Final inspection, then we walk it with you." },
    ],
    gallery: ["img-6459", "img-6460", "img-7762", "img-7764", "img-6997", "img-6936", "img-6999", "img-4667"],
    projects: ["timber-truss-front-porch-ewing-nj", "composite-deck-stairs-wayne", "composite-steps-landing-media", "front-porch-columns-entry-roof-lower-merion", "rooftop-stair-enclosure-roof-deck-philadelphia"],
    faqs: [
      { q: "Do I need a permit for a porch or deck?", a: "In most Pennsylvania townships, yes: attached decks, decks more than 30 inches off the ground and roofed porches need a permit. We check with your township and pull it." },
      { q: "Composite or wood decking?", a: "Composite costs more up front but needs only washing. Pressure-treated wood is cheaper but needs staining every few years and splinters. Over ten years composite usually comes out even or ahead." },
      { q: "Can you build a roof over my existing front steps?", a: "Usually, yes. A portico or entry roof can be built over existing steps if there is room for posts or brackets and the roof can be tied into the house." },
      { q: "How long does a covered porch take to build?", a: "A typical covered front porch takes two to four weeks of work after the permit, depending on size, roof and finish details." },
      { q: "Do you repair old porches?", a: "Yes. We replace rotted posts, beams and floor boards, rebuild ceilings and level sagging porch roofs." },
    ],
    related: ["dormers-additions", "exterior-trim", "doors"],
  },
  {
    slug: "copper-work",
    name: "Copper work",
    title: "Copper Gutters, Downspouts & Copper Flashing",
    description:
      "Copper gutters, half-round downspouts, copper flashing and copper bay window roofs installed by a carpentry crew from Ephrata, PA, for stone and historic homes.",
    h1: "Copper gutters, flashing and bay roofs",
    lede: "Copper lasts longer than the house around it when it is installed right. We install copper gutters and downspouts, copper apron and base flashing, and small copper roofs over bays and entries.",
    card: "Copper gutters, half-round downspouts, apron and base flashing and small copper roofs over bays and entries.",
    hero: "img-4098",
    intro: [
      "Copper is common on stone houses on the Main Line and in Chester County, and on older farmhouses in Lancaster County. It is chosen because it lasts sixty years or more, does not need paint and turns a deep brown and then green that suits stone and slate.",
      "Our copper work is usually part of a larger exterior job: copper apron flashing where a bay window meets a slate roof, like the one in Haverford on this page, copper base flashing under a bank of windows, a copper gutter on a gable return, or a small standing seam roof over a bay or a portico. We also install half-round copper gutters and round downspouts on their own.",
      "Copper has rules. It must be fastened with copper or stainless, never steel or aluminum, or the metals corrode where they touch. Seams are soldered, not caulked. Long runs need expansion joints. Get those wrong and copper fails early, which is the most expensive way to waste it.",
    ],
    included: [
      { t: "Copper gutters", d: "Half-round and K-style copper gutters with soldered seams, end caps and outlets." },
      { t: "Copper downspouts", d: "Round and rectangular copper downspouts with copper straps and elbows." },
      { t: "Copper flashing", d: "Apron, step, base and counter flashing where roofs meet walls, bays and chimneys." },
      { t: "Copper bay window roofs", d: "Small standing seam or flat seam copper roofs over bays, porticos and dormers." },
      { t: "Repairs", d: "Leaking seams resoldered, loose hangers reset and damaged sections replaced." },
    ],
    notHere: [
      { slug: "exterior-trim", why: "You need the fascia or soffit behind the gutter replaced." },
      { slug: "windows", why: "You need a bay window replaced, not only its roof." },
    ],
    table: {
      caption: "What to expect from copper over time",
      head: ["Age", "Color", "What you do"],
      rows: [
        ["New", "Bright penny", "Nothing"],
        ["First months to 2 years", "Brown and dark bronze", "Nothing"],
        ["10 to 20 years", "Patches of green patina start", "Nothing; patina protects the metal"],
        ["Decades", "Even green or dark brown, depending on exposure", "Check seams and hangers occasionally"],
      ],
    },
    steps: [
      { t: "Look at the roof edge", d: "We check the fascia, the roof and how water leaves it before quoting copper." },
      { t: "Plan the runs", d: "Gutter sizes, outlet locations and expansion joints laid out to the roof." },
      { t: "Install with compatible metals", d: "Copper or stainless fasteners and hangers only, seams soldered." },
      { t: "Test with water", d: "We run water through the system and check every seam and outlet." },
    ],
    gallery: ["img-4098", "img-4099", "img-8006"],
    projects: ["copper-bay-window-flashing-haverford", "interior-trim-built-ins-lower-merion"],
    faqs: [
      { q: "Do copper gutters turn green?", a: "Yes, eventually. Copper turns brown within months and develops green patina over many years, faster near the ocean or in polluted air. The patina protects the metal. If you want to keep the bright color, it has to be cleaned and sealed regularly." },
      { q: "How long do copper gutters last?", a: "Properly installed copper gutters commonly last 60 years or longer. The hangers and seams are what need attention over time." },
      { q: "Can copper touch aluminum gutters or steel nails?", a: "No. Copper corrodes other metals where they touch in the wet. We use copper or stainless fasteners and keep copper separate from aluminum." },
      { q: "Is copper worth it on a regular house?", a: "On a stone or historic house, often yes, because it matches the house and outlasts aluminum several times over. On a vinyl-sided house, aluminum gutters are usually the better buy." },
    ],
    related: ["exterior-trim", "windows", "siding"],
  },
  {
    slug: "dormers-additions",
    name: "Dormers & additions",
    title: "Home Addition & Dormer Contractor: Framing to Finish",
    description:
      "Dormers, additions and gambrel roof rebuilds on older homes, framed, sheathed in ZIP System and finished by one carpentry crew from Ephrata, PA.",
    h1: "Dormers, additions and exterior rebuilds",
    lede: "Adding a dormer or an addition to an older house is carpentry from the frame out. We frame it, sheath it, flash it into the old house and finish it with windows, siding and trim that look like they were always there.",
    card: "Shed and gable dormers, additions and exterior rebuilds on older homes, framed, sheathed and finished by one crew.",
    hero: "img-5557",
    intro: [
      "The biggest job in our photos is a stone house with a gambrel roof in Lower Merion Township. Over most of 2025 the roof was opened up, new dormers were framed in, a gambrel addition went on the back and the whole thing was sheathed, flashed, sided and trimmed. The original stone walls stayed, and the new work had to line up with them.",
      "That is the kind of work this page is about: shed and gable dormers that turn an attic into rooms, additions that tie into an older house, roof framing changes and full exterior rebuilds. We handle the framing, sheathing, windows, siding, trim and the interior finish carpentry. Roofing, electrical, plumbing and HVAC are done by licensed trades we coordinate with, and we tell you who they are.",
      "On new walls we use ZIP System sheathing where it makes sense. The taped panel seams act as the air and water barrier, which is tighter than housewrap stapled over plain sheathing and keeps the house dry during construction. Where new meets old, we step and lap the flashing by hand, because that joint is where additions leak.",
    ],
    included: [
      { t: "Shed and gable dormers", d: "Roof opened, dormer framed, sheathed, flashed and finished with windows, siding and trim." },
      { t: "Home additions", d: "Single-room and two-story additions framed and tied into the existing house." },
      { t: "Gambrel and roof framing changes", d: "Raising, rebuilding or reframing roofs to gain headroom." },
      { t: "ZIP System sheathing", d: "Taped panel sheathing as an air and water barrier on new and re-sheathed walls." },
      { t: "Exterior rebuilds of old houses", d: "Stripping, re-sheathing and re-siding older frame sections next to stone or brick." },
      { t: "Sunrooms and enclosed porches", d: "Converting porches to sunrooms with new walls, windows and doors." },
    ],
    notHere: [
      { slug: "porches-decks", why: "You want an open porch or deck rather than enclosed space." },
      { slug: "siding", why: "The walls only need new siding, not new framing." },
      { slug: "finish-carpentry", why: "The shell is done and you need interior trim, stairs and doors." },
    ],
    table: {
      caption: "Dormer types",
      head: ["Type", "What it adds", "Looks right on"],
      rows: [
        ["Shed dormer", "The most headroom and floor space", "Rear roofs, gambrels, Cape Cods"],
        ["Gable dormer", "Light and some headroom, traditional look", "Front roofs of Capes and colonials"],
        ["Hip dormer", "Softer roofline", "Hip-roofed and older houses"],
        ["Eyebrow or small gable", "Light and ventilation", "Detail on larger roofs"],
      ],
    },
    steps: [
      { t: "Feasibility visit", d: "We look at the framing, roof and foundation and tell you what is realistic before anyone draws anything." },
      { t: "Drawings and permit", d: "We work with a designer or engineer as needed and pull the building permit." },
      { t: "Frame and dry in", d: "Roof opened only as far as we can close the same day, framing, sheathing, windows and roof underlayment." },
      { t: "Exterior finish", d: "Siding, trim, gutters and flashing matched to the house." },
      { t: "Interior finish", d: "Insulation and drywall by our partners, then trim, doors, stairs and built-ins by us." },
    ],
    gallery: ["img-5557", "img-5277", "img-5380", "img-5546", "img-5550", "img-4807", "img-4674", "img-4664"],
    projects: ["stone-gambrel-house-dormers-lower-merion", "lap-siding-cedar-shake-gambrel-lower-merion", "sunroom-windows-door-chadds-ford", "rooftop-stair-enclosure-roof-deck-philadelphia", "attic-bedroom-trim-radnor"],
    faqs: [
      { q: "How much headroom does a dormer add?", a: "A shed dormer can turn most of a sloped attic into full-height floor space. A gable dormer adds headroom mainly where it sits. We measure the roof and show you what each option gives." },
      { q: "Do I need an architect for a dormer or addition?", a: "Most townships require stamped or detailed drawings for additions and many dormers. We work with designers and engineers and can recommend one." },
      { q: "What is ZIP System sheathing?", a: "ZIP System is OSB sheathing with a built-in water-resistant layer. The seams are taped, so the sheathing itself becomes the air and water barrier instead of a separate housewrap." },
      { q: "Can you add onto a stone house?", a: "Yes. The new framing is tied to the stone carefully, flashed where it meets the masonry and finished so the transition looks intentional." },
      { q: "Do you do the whole addition?", a: "We do the carpentry from framing to trim and coordinate the rest. Foundations, roofing, electrical, plumbing, HVAC and drywall are done by licensed trades we work with." },
    ],
    related: ["siding", "windows", "porches-decks"],
  },
  {
    slug: "commercial",
    name: "Commercial",
    title: "Commercial Renovation Contractor, Lancaster County & SE PA",
    description:
      "Commercial window replacement, storefront doors, retail build-outs and exterior repairs for offices and stores in Lancaster, Chester and Delaware County, PA.",
    h1: "Commercial windows, storefronts and build-outs",
    lede: "Offices, stores and small commercial buildings need the same carpentry as houses, done on a schedule that keeps the business open. We replace windows and storefront doors, build retail counters and shelving and repair exteriors.",
    card: "Window replacement, storefront doors, retail counters and shelving and exterior repairs for small commercial buildings.",
    hero: "img-7207",
    intro: [
      "Our commercial work is small and mid-size: an office building that needs every window replaced, a storefront that needs new glass doors, a shop that needs a counter and wall shelving, or a commercial exterior with rotted trim and siding. These are jobs where a general contractor is too big and a handyman is too small.",
      "In Newtown Square we replaced the windows across a two-story office building with black-frame units and new trim, working around the tenants. In another Newtown Square unit we installed a wall of black multi-lite storefront doors and sidelights. In West Chester we built the long wood counter and wall shelving for a retail store.",
      "We schedule commercial work around business hours, keep the work area closed off and clean, and finish one section before opening the next so the building is never left open.",
    ],
    included: [
      { t: "Commercial window replacement", d: "Whole-building window replacement with new trim, done floor by floor around tenants." },
      { t: "Storefront and entry doors", d: "Glass storefront doors, sidelights and commercial entry doors with closers and hardware." },
      { t: "Retail build-outs", d: "Counters, wall shelving, display fixtures and trim for shops and showrooms." },
      { t: "Commercial siding and trim", d: "Siding repair and replacement, fascia, soffit and trim on commercial buildings." },
      { t: "Office interior carpentry", d: "Doors, frames, trim and partitions for office fit-outs." },
    ],
    notHere: [
      { slug: "windows", why: "The windows are in a house." },
      { slug: "built-ins", why: "You want shelving or storage at home." },
    ],
    steps: [
      { t: "Site walk", d: "We look at the building and talk about when the work can happen without disrupting the business." },
      { t: "Written proposal", d: "Scope, schedule and price broken out by area or phase." },
      { t: "Phased work", d: "One section at a time, closed in at the end of each day." },
      { t: "Punch list and handover", d: "We walk the work with the owner or manager and close out every item." },
    ],
    gallery: ["img-7207", "img-7208", "img-4825", "img-4830", "img-4826", "img-7772"],
    projects: ["office-building-window-replacement-newtown-square", "storefront-glass-doors-newtown-square"],
    faqs: [
      { q: "Can you work while the business is open?", a: "Yes. We phase the work by area and schedule noisy work outside busy hours when that helps." },
      { q: "Do you do full commercial renovations?", a: "We focus on the carpentry: windows, doors, storefronts, counters, shelving, trim and exterior repair. For larger renovations we can work as the carpentry contractor under your general contractor." },
      { q: "Do you provide a certificate of insurance?", a: "Yes, on request before work starts." },
    ],
    related: ["windows", "doors", "siding"],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const serviceSlugs = services.map((s) => s.slug);
