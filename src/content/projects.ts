import { projectPhotos } from "./photos";

export type Project = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  place: string; // town or township, from EXIF
  county: string;
  area: string; // service-area slug or "" for out of state
  when: string; // from EXIF dates
  services: string[];
  cover: string;
  group: string; // photo project key in photos.ts
  scope: string[];
  summary: string;
  body: string; // markdown
};

export const projects: Project[] = [
  {
    slug: "stone-gambrel-house-dormers-lower-merion",
    title: "New dormers and a gambrel addition on a stone house",
    seoTitle: "Dormers & Gambrel Addition on a Stone House, Lower Merion",
    description: "Shed dormers framed into a gambrel roof and a new gambrel addition sheathed in ZIP System on a fieldstone house in Lower Merion Township, PA.",
    place: "Lower Merion Township",
    county: "Montgomery County",
    area: "montgomery-county",
    when: "May to July 2025",
    services: ["dormers-additions", "siding", "windows"],
    cover: "img-5546",
    group: "lm-dormers",
    scope: ["Gambrel roof opened and reframed", "Shed and single dormers", "Gambrel addition framing", "ZIP System sheathing, taped", "Window installation", "Dormer trim and siding"],
    summary: "A fieldstone house with a gambrel roof got new dormers along the front and back and a gambrel addition, all tied into the old stone walls.",
    body: `This is the first stage of the largest job in our photos: a fieldstone house with a gambrel roof in Lower Merion Township. The owners wanted real rooms upstairs, which a gambrel roof with a few small windows does not give you. The answer was dormers on the roof and a new gambrel addition at the back, built so the house still reads as one building.

## Opening the roof

The photos from late May 2025 show the gambrel ends stripped back to the old boards and the upper roof wrapped in housewrap and underlayment. On a job like this the roof is never opened further than can be closed again the same day. Each section was cut open, the new dormer framing went in, and the roof was dried in with underlayment before the crew left.

By early June the dormers were framed. The cheek walls (the triangular side walls of a dormer) were sheathed and wrapped, the windows were set, and the fronts were trimmed in white. The pictures from June 2 show the order clearly: underlayment on the roof, flashing up the cheek walls, window set into the front, then trim over the top. That order matters, because the joint where a dormer meets the roof is where dormers leak.

{{photo:img-5277}}

## The gambrel addition

At the back, a new gambrel addition went on. Its walls were sheathed in ZIP System, the green panels in the June 18 photos, with every seam taped. ZIP System puts the water and air barrier on the sheathing itself, which keeps the framing dry during a long build and makes the wall tighter than plain sheathing with housewrap stapled over it.

Windows went into the addition before the siding, lapped with the ZIP tape and flashing so water that gets behind the siding runs out at the sill.

{{photo:img-5380}}

## Siding the dormers

By July 10 the long shed dormer on the back had its row of new windows and gray lap siding on the cheek walls. The new shingle roof was on. The front of the house had three dormers with white trim above the original stone, and the porch roof was framed.

{{photo:img-5546}}

## What made it work

- **The roof was closed every night.** Nothing on an old house goes wrong faster than an open roof in a summer storm.
- **Flashing was lapped by hand** where new framing met the old roof and the stone.
- **The dormer windows line up** with the windows in the stone walls below, so the new work looks planned rather than added.

The siding, cedar shake gables, porch and interior work that followed are on their own pages, linked below.`,
  },
  {
    slug: "lap-siding-cedar-shake-gambrel-lower-merion",
    title: "Lap siding and cedar shake gables on a stone house",
    seoTitle: "Lap Siding & Cedar Shake Gables on a Stone House, Lower Merion",
    description: "Tan lap siding on a new addition and cedar shake gambrel gables above fieldstone walls, with white rakes and trim, in Lower Merion Township, PA.",
    place: "Lower Merion Township",
    county: "Montgomery County",
    area: "montgomery-county",
    when: "July to December 2025",
    services: ["siding", "exterior-trim"],
    cover: "img-7287",
    group: "lm-siding",
    scope: ["Housewrap and window flashing", "Tan lap siding on the addition", "Cedar shake gambrel gables", "White rake, frieze and corner trim", "Dormer trim"],
    summary: "The frame parts of the house were sided in tan lap siding with cedar shakes on the gambrel ends, finished in white trim against the original stone.",
    body: `Once the dormers and the gambrel addition on this Lower Merion stone house were framed and dried in, the frame walls needed siding that would sit well next to old fieldstone. The choice was a warm tan lap siding on the walls and cedar shakes on the gambrel gables, with white trim tying it together.

## Wrapping before siding

The July 2025 photos show the gambrel ends and the addition wrapped in Tyvek with every window already set and trimmed. Siding is only a rain screen. The real water barrier is the wrap and the flashing behind it, so that layer was finished and checked before a single board went up.

{{photo:img-5552}}

## Lap siding on the addition

The addition and the frame wings were sided in tan lap siding. Courses were laid out so a full board lines up with the window heads and sills, which is what makes a wall look tidy from the street. Corner boards and window casings were set first and the siding was fitted between them.

{{photo:img-7285}}

## Cedar shake gables

The gambrel ends got cedar shakes, a traditional finish on gambrel houses in this part of Pennsylvania. Shakes are laid in straight courses with staggered joints so no two joints line up above each other. Where the shakes meet the white rake board and the lap siding below, the transition is trimmed rather than caulked.

{{photo:img-7287}}

## Finished in winter

The December 16, 2025 photos were taken in the snow: tan siding, shake gables, white rakes, frieze and corner boards, and the dormers above the stone. From the front, the gambrel dormers, the porch and the stone read as one house.

{{photo:img-7288}}

## Details worth copying

- **Siding courses line up with windows.** It takes layout time at the start and saves the house from looking patched.
- **Shakes only on the gambrel ends.** Using a second material on the gables breaks up the large wall and matches older houses nearby.
- **White trim everywhere the materials meet.** Stone, shake and lap siding each meet a trim board, not each other.`,
  },
  {
    slug: "andersen-windows-french-doors-lower-merion",
    title: "Andersen windows and French doors in a stone house",
    seoTitle: "Andersen Windows & French Doors in a Stone House, Lower Merion",
    description: "New Andersen windows trimmed out, a fir entry door with sidelights and French doors with transoms set into fieldstone walls, Lower Merion Township, PA.",
    place: "Lower Merion Township",
    county: "Montgomery County",
    area: "montgomery-county",
    when: "October to December 2025",
    services: ["windows", "doors", "finish-carpentry"],
    cover: "img-6723",
    group: "lm-windows",
    scope: ["Andersen windows in new and stone walls", "Interior casing, stool and jamb extensions", "Fir entry door with sidelights", "French doors with sidelights and transoms", "Two-story window wall"],
    summary: "Windows in the new addition and in the old stone walls were set and trimmed, along with a fir entry door and French doors in the stone.",
    body: `The windows on this Lower Merion stone house went in during the framing stage. This page covers the part people see from inside: the interior trim around every window, and the doors set into the old fieldstone walls.

## Trimming out the addition windows

The October 2025 photos show the gambrel addition with its drywall finished and the windows trimmed. The units are Andersen, which you can see on the labels still on the glass in the wide picture window. Each window got jamb extensions to bring the frame flush with the drywall, a stool and apron at the bottom, and flat casing to match the rest of the house.

{{photo:img-6729}}

Multi-unit windows, like the long row of double-hungs in the main room, need the casing laid out so the mullion trim between units is the same width all the way across. That is easy to get wrong and obvious when it is.

{{photo:img-6720}}

## Windows in thick stone walls

Old fieldstone walls are well over a foot thick and nothing about the openings is square. The December photos show windows set into the stone with new wood sills and trim inside. Each opening was shimmed to the window, not the other way around, and the gaps were closed with trim and a sealant that can move with the stone.

{{photo:img-7223}}

## Doors in the stone

Under the front porch, a fir entry door with sidelights was set into the fieldstone wall in October. At the back, a pair of French doors with sidelights and transoms went into the stone in December, cased in white inside. A door in a stone wall needs a level sill above all else, because the stone will not let you shim the frame out of a crooked opening later.

{{photo:img-6966}}

{{photo:img-7228}}

## A two-story window wall

The tallest room in the addition has a two-story wall of black-frame windows. Mulled stacks like this need solid blocking between the units and careful flashing at every joint, since a leak at the top shows up two floors lower.

{{photo:img-7289}}`,
  },
  {
    slug: "front-porch-columns-entry-roof-lower-merion",
    title: "Front porch columns and a small entry roof",
    seoTitle: "Porch Columns & Entry Roof on a Stone House, Lower Merion",
    description: "New square porch columns, a beadboard porch ceiling and a small entry roof with brackets over a side door on a stone house in Lower Merion Township, PA.",
    place: "Lower Merion Township",
    county: "Montgomery County",
    area: "montgomery-county",
    when: "October to December 2025",
    services: ["porches-decks", "exterior-trim", "doors"],
    cover: "img-6936",
    group: "lm-porch",
    scope: ["Square porch columns", "Beadboard porch ceiling and trim", "Entry roof over a side door", "Beadboard soffit and brackets"],
    summary: "The long front porch on the stone house got new square columns and a beadboard ceiling, and a small roof went over the side entry.",
    body: `The front porch on this Lower Merion stone house runs most of the width of the house. As part of the larger renovation it got new columns, a new ceiling and trim, and a small entry roof was built over a side door.

## The porch columns

In the October 20, 2025 photos the porch structure is in and the first square columns are going up. By October 22 the columns were wrapped and trimmed: square, tapered columns with a base and capital, standing on the stone porch floor in front of the fieldstone wall.

{{photo:img-6936}}

Columns like these are a wrap around a structural post. The post carries the porch roof. The wrap is PVC or fiberglass so it does not rot where it meets the floor, which is exactly where wood columns on old porches always fail.

{{photo:img-6937}}

## The porch ceiling

The ceiling is white beadboard with trim at the beam lines. The October 24 photo shows the ceiling finished next to a new window beside the stone, before paint.

{{photo:img-6967}}

## A small roof over the side door

On the gambrel end of the house, a side door in the stone wall got a small roof of its own. The December photos show it finished: a short shed roof with white trim, a beadboard soffit underneath and brackets against the stone. A roof that small still has to be flashed into the wall above it. Here that means flashing let into the stone joint so water running down the wall is turned out over the roof.

{{photo:img-7276}}

{{photo:img-7277}}`,
  },
  {
    slug: "stairs-bath-trim-lower-merion",
    title: "Stairs, doors and bathroom trim in the gambrel addition",
    seoTitle: "Stairs & Bathroom Trim in a Gambrel Addition, Lower Merion",
    description: "Interior framing, a new staircase with skirt boards, door casing through a stone wall and bathroom panel trim in a Lower Merion Township renovation.",
    place: "Lower Merion Township",
    county: "Montgomery County",
    area: "montgomery-county",
    when: "July 2025 to February 2026",
    services: ["finish-carpentry"],
    cover: "img-7727",
    group: "lm-interior",
    scope: ["Interior wall framing", "Staircase treads, risers and skirt boards", "Door casing through the stone wall", "Bathroom panel trim and baseboard", "Wainscot beside a stone column"],
    summary: "Inside the addition we framed interior walls, built the stairs, cased a doorway through the old stone and trimmed out the bathrooms.",
    body: `Inside the gambrel addition on this Lower Merion house, the carpentry ran from rough framing in July 2025 to finish trim in February 2026.

## Framing the rooms

The July 11, 2025 photos show interior walls framed under the gambrel roof, with openings for doors and blocking for shelving already in. Blocking is the cheap step that saves trouble later: every place that will hold a shelf, a towel bar or a handrail gets solid wood behind the drywall.

{{photo:img-5568}}

## Through the stone

Where the addition meets the old house, a doorway passes through the fieldstone wall. The February 2026 photo shows new drywall returns and casing being fitted to an opening that is anything but square. The trim was scribed to the stone side so the casing looks straight even though the opening is not.

{{photo:img-7608}}

## The staircase

The new stairs were built in late February: treads and risers under protective paper, a skirt board along the wall and baseboard that meets the skirt cleanly at the bottom.

{{photo:img-7732}}

## Bathroom trim

The upstairs bathroom has a freestanding tub, white panel trim and baseboard. An access panel to the plumbing is framed in matching trim so it reads as part of the wall rather than a hatch.

{{photo:img-7727}}

{{photo:img-7733}}`,
  },
  {
    slug: "interior-trim-built-ins-lower-merion",
    title: "Interior trim, built-ins and Marvin windows",
    seoTitle: "Interior Trim, Built-Ins & Marvin Windows, Lower Merion",
    description: "Six-panel doors, casing, wainscot, built-in desks, knee-wall shelves, closet shelving and Marvin windows trimmed out in a Lower Merion Township house, PA.",
    place: "Lower Merion Township",
    county: "Montgomery County",
    area: "montgomery-county",
    when: "April 2026",
    services: ["finish-carpentry", "built-ins", "windows"],
    cover: "img-7971",
    group: "hav-trim",
    scope: ["Six-panel and four-panel doors hung and cased", "Wainscot and paneled nooks", "Built-in desks", "Knee-wall shelves", "Closet shelving with solid tops", "Marvin window casing and stools", "French doors with transoms"],
    summary: "A full floor of trim: doors, casing, wainscot, paneled desk nooks, knee-wall shelves, closet shelving and Marvin windows trimmed out.",
    body: `These photos were all taken on April 7, 2026, in Lower Merion Township. They show the finish carpentry on an upper floor and the outside of the building, after the floors went down and before paint.

## Doors and casing

Every door on the floor was hung and cased: six-panel doors in the bedrooms and baths, four-panel doors elsewhere, and French doors with a transom above. Where a door meets marble basketweave tile in the bathroom, the casing and baseboard sit on the tile with a clean joint.

{{photo:img-7963}}

## Hallways with wainscot

The hallways run long and narrow under the roof, with new white oak flooring, wainscot panels below and cased windows at the ends. Wainscot in a hallway has to be laid out from both ends so the panels at each door come out the same width.

{{photo:img-7971}}

## Built-in desks and nooks

Two paneled alcoves became built-in desks: a solid top set into the nook with wainscot below and room for shelves above. A third nook holds a shelf.

{{photo:img-7964}}

## Shelves in the knee walls

Under a sloped ceiling the low knee walls are usually wasted. Here they got built-in shelves, one square and one cut to the angle of the roof, framed in the same trim as the rest of the room.

{{photo:img-7961}}

## Closet shelving

The closets have built-in shelving instead of wire kits: painted shelving with solid wood tops, including an L-shaped unit that follows the roof slope.

{{photo:img-7992}}

## Marvin windows trimmed out

The windows are Marvin double-hungs, label still on the glass in the photo below. Each one got a casing, a stool and an apron to match the doors.

{{photo:img-7994}}

## Outside

The same day's photos show the outside: cream lap siding, white trim, a stone chimney and a gable return with crown molding and a copper gutter against the stone.

{{photo:img-8006}}`,
  },
  {
    slug: "copper-bay-window-flashing-haverford",
    title: "Copper flashing where a bay meets a slate roof",
    seoTitle: "Copper Flashing on a Bay Window and Slate Roof, Haverford PA",
    description: "Copper apron and base flashing installed where a bank of windows meets a slate roof on a house in Haverford, PA.",
    place: "Haverford",
    county: "Delaware and Montgomery Counties",
    area: "montgomery-county",
    when: "November 2024",
    services: ["copper-work", "windows"],
    cover: "img-4098",
    group: "hav-copper",
    scope: ["Copper apron flashing", "Copper base flashing below windows", "Tie-in to a slate roof"],
    summary: "Copper apron and base flashing was fitted where a bank of windows sits on a slate roof, the kind of detail that keeps water out of the wall below.",
    body: `This small job in Haverford was one detail: copper flashing where a bank of windows sits on a slate roof.

## Why copper here

When a wall with windows rises out of a lower roof, water running down the roof hits the bottom of the wall. Without flashing it goes straight into the framing under the windows. The fix is apron flashing: a piece of metal that runs up the wall behind the siding or trim and lies down over the roof.

On a slate roof the flashing should last as long as the slate, which can be a century. Aluminum and galvanized steel do not. Copper does, and it suits the gray of the slate and the stone of the house.

{{photo:img-4098}}

## How it is installed

The November 6, 2024 photos show the copper apron running along the base of the windows and turned down over the slate. Copper is fastened with copper nails or cleats only, because steel or aluminum fasteners corrode where they touch copper in the wet. Corners are folded and soldered rather than caulked.

{{photo:img-4099}}

The copper is bright in these photos. Within a year it turns brown, and over many years it may go green. Either way it keeps working.`,
  },
  {
    slug: "rotted-window-sill-repair-lower-merion",
    title: "Rotted window sills rebuilt on a stucco house",
    seoTitle: "Rotted Window Sill Repair on a Stucco House, Lower Merion",
    description: "Rotted wood window sills and trim on a stucco house cut out and rebuilt in PVC with flashing behind, Lower Merion Township, PA.",
    place: "Lower Merion Township",
    county: "Montgomery County",
    area: "montgomery-county",
    when: "September 2025",
    services: ["exterior-trim", "windows"],
    cover: "img-6655",
    group: "lm-rot",
    scope: ["Rotted sills and trim removed", "Framing checked under the sill", "New PVC sill and trim", "Flashing and sealant"],
    summary: "The wood sills on a stucco house had rotted where water sat against them. We cut them out and rebuilt them in PVC.",
    body: `Rotten window sills are one of the most common calls we get, and this job in Lower Merion Township in September 2025 is a textbook example.

## What we found

The house is stucco with painted wood window trim. The September 22 photos show the bottom of the trim soft and split at the corners, where water runs off the sill and soaks into the end grain. A downspout runs right below, so the wall stays wet after every rain.

{{photo:img-6652}}

{{photo:img-6653}}

## Cutting it out

The sill and the bottom of the trim were cut out until we reached solid wood. With the old wood out, you can see how far the rot went under the window.

{{photo:img-6654}}

## Rebuilding in PVC

The new sill and trim are cellular PVC. It does not rot, holds paint and can be shaped like wood. Behind it goes a layer of flashing so any water that gets past the sill is turned out over the stucco, not into the wall.

{{photo:img-6655}}

## Why sills rot first

- Water sits on a flat or back-pitched sill instead of running off.
- End grain at the corners soaks up water like a straw.
- Caulk at the joint between sill and casing cracks within a few seasons and holds water in.

If you push a screwdriver into the corner of a sill and it sinks in, the rot is already there. The earlier it is fixed, the less of the window has to come out.`,
  },
  {
    slug: "composite-deck-stairs-wayne",
    title: "Composite deck and stairs on stone piers",
    seoTitle: "Composite Deck & Stairs on Stone Piers, Wayne PA",
    description: "A raised composite deck on stone piers with new beams, stairs and black aluminum railing at a cedar shake house in Wayne, PA.",
    place: "Wayne",
    county: "Delaware County",
    area: "delaware-county",
    when: "March 2026",
    services: ["porches-decks"],
    cover: "img-7762",
    group: "wayne-deck",
    scope: ["New beams on existing stone piers", "Composite decking", "New stairs to the patio", "Black aluminum railing"],
    summary: "A raised deck on stone piers off a cedar shake house got new beams, composite decking, new stairs and black railing.",
    body: `This deck in Wayne sits on stone piers off the back of a cedar shake house, a story above the patio. In March 2026 it got new framing where it needed it, composite decking, new stairs and new black railing.

## Under the deck

The March 4 photos show the work underneath: stone piers carrying new beams, with work lights on in the late afternoon. Raised decks put a lot of load on a few points, so the beams and their connections to the piers matter more than anything on top.

{{photo:img-7753}}

## The stairs

New stairs were framed down the side of the house to the patio. Stair stringers on a tall deck are long, and they need a solid landing at the bottom and consistent risers so nobody trips on the one step that is different.

{{photo:img-7751}}

## Decking and railing

By March 7 the composite decking was down and the black aluminum railing was up along the deck and the stairs. Black railing is a good match for cedar shake and stone, and aluminum does not need painting.

{{photo:img-7762}}

{{photo:img-7764}}`,
  },
  {
    slug: "composite-steps-landing-media",
    title: "Composite steps and a landing beside a stone wall",
    seoTitle: "Composite Steps & Landing Beside a Stone Wall, Media PA",
    description: "New composite steps and a wide landing up to a sunroom, built between a stone knee wall and the porch, in Media, PA.",
    place: "Media",
    county: "Delaware County",
    area: "delaware-county",
    when: "October 2025",
    services: ["porches-decks"],
    cover: "img-6997",
    group: "media-steps",
    scope: ["Stair stringers and framing", "Composite treads and risers", "Wide composite landing", "Fit against a stone knee wall"],
    summary: "Composite steps and a wide landing were built up to a sunroom, fitted between a stone knee wall and the porch.",
    body: `This job in Media in late October 2025 was a set of steps and a landing leading up to a sunroom, squeezed between a stone knee wall and the porch.

## Framing

The October 28 photos show the stringers and the first treads going in next to the stone wall. Steps that sit against masonry need a small gap and a way for water to drain, or the framing stays wet against the stone.

{{photo:img-6991}}

## Composite treads and landing

The treads, risers and landing are composite, in a color that sits well with the stone. Composite does not splinter, does not need stain and can be washed. Every step has the same rise, which is the first thing building codes and knees both care about.

{{photo:img-6992}}

{{photo:img-6997}}

{{photo:img-6998}}`,
  },
  {
    slug: "stairwell-wainscoting-thornbury",
    title: "Picture-frame wainscoting up a stairwell",
    seoTitle: "Stairwell Wainscoting & Chair Rail, Thornbury Township PA",
    description: "Picture-frame wainscoting following the angle of a staircase, with chair rail and hallway panels, in Thornbury Township, Chester County, PA.",
    place: "Thornbury Township",
    county: "Chester County",
    area: "chester-county",
    when: "January 2025",
    services: ["finish-carpentry"],
    cover: "img-4582",
    group: "thornbury-stair",
    scope: ["Panel layout to the stair angle", "Picture-frame molding", "Chair rail", "Hallway wainscot"],
    summary: "Picture-frame wainscoting was laid out up a stairwell and along the upper hall, with every frame following the stair angle.",
    body: `Wainscoting on a flat wall is a layout puzzle. Wainscoting up a stairwell is a harder one, because every frame on the stair has to follow the angle of the stair. This job in Thornbury Township, between West Chester and Glen Mills, was done in January 2025.

## Layout first

The frames on the stair are parallelograms, not rectangles. The top and bottom rails run parallel to the stair, the sides stay plumb, and the spacing between frames has to match the frames on the flat walls at the top and bottom of the stairs so the pattern reads as one.

{{photo:img-4582}}

## Going around corners

Where the stair turns and meets the landing, the frames change from angled to level. The photos show how the panels step from one to the other at the corner without an awkward leftover frame.

{{photo:img-4584}}

## Hallway panels and chair rail

On the upper hall the wainscot continues with a chair rail on top. A heating vent that falls inside a panel was cut in neatly rather than moving the layout.

{{photo:img-4586}}

{{photo:img-4581}}`,
  },
  {
    slug: "attic-bedroom-trim-radnor",
    title: "Attic bedroom trim around dormers and a skylight",
    seoTitle: "Attic Bedroom Trim: Dormer Windows & Knee Walls, Radnor PA",
    description: "Dormer window trim, knee walls, baseboard and a closet door in an attic bedroom with a skylight, Radnor Township, PA.",
    place: "Radnor Township",
    county: "Delaware County",
    area: "delaware-county",
    when: "November 2024",
    services: ["finish-carpentry", "dormers-additions"],
    cover: "img-4140",
    group: "radnor-attic",
    scope: ["Dormer window casing and sills", "Knee wall baseboard", "Closet door", "Trim around a skylight wall"],
    summary: "An attic bedroom with dormer windows, a skylight and knee walls was trimmed out: window casing and deep sills, baseboard and a closet door.",
    body: `Attic rooms are all angles: dormer walls, sloped ceilings, knee walls and skylights. This attic bedroom in Radnor Township was trimmed out in November 2024.

## Dormer windows

Each dormer window sits at the back of a small alcove. The window got casing and a deep sill that runs the full depth of the dormer, which gives a useful ledge and makes the window look intended rather than lost at the end of a tunnel.

{{photo:img-4137}}

{{photo:img-4138}}

## Knee walls and baseboard

Baseboard runs along the low knee walls and meets the sloped ceiling corners cleanly. Where the knee wall turns into a dormer, the base turns with it.

{{photo:img-4140}}

## Closet door

A closet door was hung and cased in the gable wall. In the photo the old floor is still exposed, before the new flooring went down.

{{photo:img-4142}}`,
  },
  {
    slug: "siding-windows-doors-broomall",
    title: "New siding, windows and French doors on a brick house",
    seoTitle: "Siding, Windows & French Doors on a Brick House, Broomall PA",
    description: "Frame walls stripped to the sheathing and re-sided in white lap siding, plus new windows, French doors, closet doors and crown molding, in Broomall, PA.",
    place: "Broomall",
    county: "Delaware County",
    area: "delaware-county",
    when: "May 2025",
    services: ["siding", "windows", "doors", "finish-carpentry"],
    cover: "img-5005",
    group: "broomall",
    scope: ["Siding removal to sheathing", "White lap siding", "Exterior door", "Row of double-hung windows", "French doors", "Closet doors and crown molding"],
    summary: "The frame side of a brick house in Broomall was stripped and re-sided, and inside we installed windows, French doors, closet doors and crown.",
    body: `This house in Broomall is brick on part of the house with frame walls on the rest. In early May 2025 the frame walls were re-sided, and inside we replaced windows and doors and added trim.

## Stripping the wall

The May 1 photos show the old siding off and the wall down to the sheathing, around the back door and behind the air conditioning units. This is when you find out what the old siding was hiding. Soft spots get cut out before anything new goes on.

{{photo:img-4995}}

## New siding

By May 2 the wall was in white lap siding, with a new door and new window trim, finished against the brick chimney.

{{photo:img-5004}}

{{photo:img-5005}}

## Inside: windows, doors and trim

Inside, a row of four double-hung windows was installed and trimmed in white. French doors with divided lites went in, along with new double closet doors. New crown molding went up at the ceiling.

{{photo:img-5006}}

{{photo:img-5007}}

{{photo:img-5009}}`,
  },
  {
    slug: "office-building-window-replacement-newtown-square",
    title: "Window replacement across an office building",
    seoTitle: "Commercial Window Replacement, Office Building, Newtown Square",
    description: "Old windows replaced with black-frame units and new trim across a two-story office building in Newtown Square, PA, working around tenants.",
    place: "Newtown Square",
    county: "Delaware County",
    area: "delaware-county",
    when: "February to March 2025",
    services: ["commercial", "windows"],
    cover: "img-4826",
    group: "ns-commercial",
    scope: ["Window removal", "Black-frame replacement windows", "Exterior trim", "Sealing to the painted masonry wall"],
    summary: "The windows across a two-story office building were replaced with black-frame units and new trim while the building stayed in use.",
    body: `This office building in Newtown Square got new windows across its front in late February and March 2025. The building stayed open while we worked.

## The building

It is a two-story office building with white painted walls, gray shutters and an accessible ramp to the entrance. The old windows were replaced with black-frame units, which give the building a sharper look against the white walls.

{{photo:img-4825}}

## Working around tenants

Commercial window replacement is about sequence. Each opening was taken out, fitted and closed the same day, and the work moved along the building so only a few rooms were affected at a time.

{{photo:img-4826}}

## Trim and sealing

Every window was trimmed and sealed to the wall. On painted masonry the sealant joint has to be sized so it can move with the wall without cracking, which is the most common way commercial windows start to leak.

{{photo:img-4829}}

{{photo:img-4830}}`,
  },
  {
    slug: "storefront-glass-doors-newtown-square",
    title: "Black storefront doors across a commercial unit",
    seoTitle: "Storefront Glass Doors in a Commercial Unit, Newtown Square PA",
    description: "A run of black multi-lite glass doors, sidelights and windows installed across the front of a commercial space in Newtown Square, PA.",
    place: "Newtown Square",
    county: "Delaware County",
    area: "delaware-county",
    when: "November 2025",
    services: ["commercial", "doors"],
    cover: "img-7207",
    group: "ns-storefront",
    scope: ["Storefront door and sidelight installation", "Multi-lite window units", "Framing and trim"],
    summary: "A commercial unit got a full run of black multi-lite glass doors, sidelights and windows across its front.",
    body: `In late November 2025 we installed a run of black glass doors, sidelights and windows across the front of an empty commercial space in Newtown Square.

## The opening

The whole front wall of the unit is glass: a pair of doors in the middle, sidelights and windows to either side, all in black frames with divided lites. With that much glass, the wall framing around it carries the load, so the header and the jambs were checked before the units were set.

{{photo:img-7207}}

## Setting a run of units

Units in a run have to be set dead level and in one plane, or the joints between them open and the doors rub. Each unit was shimmed, fastened and sealed before the next went in.

{{photo:img-7208}}`,
  },
  {
    slug: "pvc-rake-trim-stucco-farmhouse-newtown-square",
    title: "New PVC rake trim on a stucco farmhouse",
    seoTitle: "PVC Rake Trim on a Stucco Farmhouse, Newtown Square PA",
    description: "Weathered wood rake trim replaced with built-up white PVC trim and returns on the gables of a stucco farmhouse near Newtown Square, PA.",
    place: "Newtown Square",
    county: "Delaware County",
    area: "delaware-county",
    when: "July 2024",
    services: ["exterior-trim"],
    cover: "img-3419",
    group: "ns-trim",
    scope: ["Old rake trim removed", "Built-up PVC rake boards", "Gable returns", "Sealing to stucco"],
    summary: "The weathered wood rakes on a stucco farmhouse were replaced with built-up white PVC trim and new returns.",
    body: `This stucco farmhouse near Newtown Square has tall gables with arched windows. In July 2024 its weathered wood rake trim was replaced with white PVC.

## Before

The July 9 photo shows the gable from the scaffold: stucco walls, arched windows and old rake trim that had lost its paint.

{{photo:img-3415}}

## Built-up rakes and returns

The new rakes are built up from several PVC pieces to get a profile with some depth, like the original. At the bottom corners each rake ends in a return, the small boxed piece that turns the trim back toward the wall. Returns are where old rake trim rots first because they hold water on top.

{{photo:img-3419}}

## Sealing to the stucco

Where PVC meets stucco, the joint is sealed with a sealant that tolerates the PVC moving in summer heat. The finished gable has crisp white trim against the stucco and the gothic arched window in the middle.

{{photo:img-3421}}`,
  },
  {
    slug: "brick-home-windows-door-douglassville",
    title: "Replacement windows and a door in a brick house",
    seoTitle: "Replacement Windows & Exterior Door, Brick House, Douglassville",
    description: "Replacement windows with stone sills and a new exterior door set into the brick walls of a house in the Douglassville area of Berks County, PA.",
    place: "Douglassville area",
    county: "Berks County",
    area: "berks-county",
    when: "January and September 2025",
    services: ["windows", "doors"],
    cover: "img-6658",
    group: "douglassville",
    scope: ["Exterior door replacement", "Replacement windows", "Sealing to brick and stone sills"],
    summary: "A brick house near Douglassville got a new exterior door in January and replacement windows set over the stone sills in September.",
    body: `This brick house in the Douglassville area of Berks County was done in two visits in 2025.

## A new exterior door

In January 2025 we replaced an exterior door set into the brick wall. Doors in brick openings are fitted to the masonry, and the trim and sealant have to close the gap between the frame and the brick without blocking the drainage at the sill.

{{photo:img-4611}}

## Replacement windows

In September 2025 we came back for the windows: sliding and double-hung units set into the brick openings over the existing stone sills.

{{photo:img-6658}}

{{photo:img-6657}}

## Sealing to brick

Brick and stone sills are porous and uneven. The new windows were sealed with a joint wide enough to stay flexible, and the weep path at the sill was left open so any water that gets behind can drain out.

{{photo:img-6659}}`,
  },
  {
    slug: "rooftop-stair-enclosure-roof-deck-philadelphia",
    title: "Rooftop stair enclosure and roof deck",
    seoTitle: "Rooftop Stair Enclosure & Roof Deck, Philadelphia",
    description: "A sided rooftop stair enclosure with a new door and a wood roof deck on a Philadelphia rowhome, with the Center City skyline behind.",
    place: "Philadelphia",
    county: "Philadelphia County",
    area: "",
    when: "February 2025",
    services: ["dormers-additions", "porches-decks", "doors"],
    cover: "img-4664",
    group: "philly-roof",
    scope: ["Stair enclosure framing and sheathing", "Lap siding and trim", "Exterior door", "Roof deck boards"],
    summary: "On a Philadelphia roof we built out a stair enclosure with siding, trim and a door, and laid new roof deck boards beside it.",
    body: `Roof decks are how Philadelphia rowhomes get outdoor space. The way up is a small stair enclosure on the roof, sometimes called a headhouse or a pilot house. In February 2025 we finished one with siding, trim and a door, and laid deck boards beside it.

## The enclosure

The enclosure has a sloped roof so water runs off toward the back, lap siding on the walls and white trim at the corners and around the door. Up here everything is exposed to wind and sun, so the door is set with a raised sill and flashed into the roof.

{{photo:img-4664}}

{{photo:img-4665}}

{{photo:img-4666}}

## The deck

Deck boards run alongside the enclosure on sleepers that sit on the roof without fastening through it, so the roofing below stays watertight.

{{photo:img-4667}}`,
  },
  {
    slug: "sunroom-windows-door-chadds-ford",
    title: "Sunroom walls with new windows and a door",
    seoTitle: "Sunroom Windows & Door Installation, Chadds Ford PA",
    description: "A sunroom wall framed with new windows and an exterior door, wrapped and trimmed, opening onto a deck in Chadds Ford, PA.",
    place: "Chadds Ford",
    county: "Delaware and Chester Counties",
    area: "chester-county",
    when: "February 2025",
    services: ["windows", "doors", "dormers-additions"],
    cover: "img-4696",
    group: "chadds-sunroom",
    scope: ["Wall framing", "Window installation", "Exterior door", "Housewrap and flashing", "Trim"],
    summary: "A sunroom wall onto a deck was framed with new windows and a door, wrapped, flashed and trimmed.",
    body: `This sunroom in Chadds Ford opens onto a deck. In February 2025 its wall was framed with new windows and an exterior door.

## Wrapped and flashed

The February 7 photo shows the windows and door set in the new wall, wrapped in housewrap with flashing around every opening. On a room with this much glass the flashing order is everything: sill first, then sides, then head, so each layer laps over the one below.

{{photo:img-4674}}

{{photo:img-4698}}

## Trimmed out

By February 10 the trim was on and the sunroom looked finished from the deck, matching the siding and trim on the rest of the house.

{{photo:img-4696}}`,
  },
  {
    slug: "timber-truss-front-porch-ewing-nj",
    title: "Timber truss front porch with a cedar ceiling",
    seoTitle: "Timber Truss Front Porch with Cedar Ceiling, Ewing NJ",
    description: "A covered front porch with an exposed timber king post truss, tongue and groove cedar ceiling and stone columns, built in Ewing Township, NJ.",
    place: "Ewing Township, NJ",
    county: "Mercer County, NJ",
    area: "",
    when: "September 2025",
    services: ["porches-decks"],
    cover: "img-6459",
    group: "ewing-porch",
    scope: ["Timber king post truss", "Tongue and groove cedar ceiling", "Porch roof framing", "Trim"],
    summary: "A covered front porch with an exposed timber truss and a tongue and groove cedar ceiling, standing on stone columns.",
    body: `This porch is one of our favorites. It was built in September 2025 in Ewing Township, New Jersey, just across the river from Bucks County.

## The truss

The front gable is an exposed timber king post truss: a tie beam across the bottom, a center post and angled braces up to the rafters. It is structural as well as decorative. It carries the porch roof between the two stone columns.

{{photo:img-6459}}

## The cedar ceiling

Inside the gable, the ceiling is tongue and groove cedar following the roof pitch, with the timbers of the truss below it. Cedar holds up outdoors under a roof and smells great for the first year.

{{photo:img-6460}}

## Why exposed timber works on a porch

- A porch is open, so the structure is on display. Making the structure the decoration costs less than covering plain framing with trim.
- Timber that stays dry under the roof lasts as long as the house.
- It gives a simple house a front entry with character.`,
  },
  {
    slug: "new-home-lap-siding-hunterdon-nj",
    title: "Gray lap siding and a gable truss on a new house",
    seoTitle: "Gray Lap Siding & Gable Truss on a New House, Hunterdon NJ",
    description: "Gray lap siding, white trim and a decorative gable truss installed on a new single-story house in Hunterdon County, NJ.",
    place: "Hunterdon County, NJ",
    county: "Hunterdon County, NJ",
    area: "",
    when: "September 2024",
    services: ["siding", "exterior-trim"],
    cover: "img-3868",
    group: "nj-siding",
    scope: ["Lap siding", "Corner boards, frieze and casings", "Decorative gable truss"],
    summary: "A new single-story house got gray lap siding, white trim and a decorative gable truss over the entry.",
    body: `This is new construction: a long single-story house in Hunterdon County, New Jersey, sided in September 2024.

## Lap siding on a long house

The house is long and low, so straight siding courses matter. Any wave in a course is obvious along a fifty-foot wall. The courses were snapped and checked as the siding went up.

{{photo:img-3865}}

## White trim

White corner boards, frieze and casings outline the gray siding. On new construction the trim goes on first and the siding is fitted between it, which gives clean joints everywhere.

{{photo:img-3864}}

## The gable truss

Over the entry gable is a decorative white truss, a simple detail that gives the front of a plain house a focal point.

{{photo:img-3868}}

{{photo:img-3862}}`,
  },
  {
    slug: "blue-gray-lap-siding-manheim",
    title: "Blue-gray lap siding with black gutters",
    seoTitle: "Blue-Gray Lap Siding with Black Gutters, Manheim PA",
    description: "Blue-gray lap siding with white corner trim, black fascia, gutters and downspouts on a house near Manheim, Lancaster County, PA.",
    place: "Manheim area",
    county: "Lancaster County",
    area: "lancaster-county",
    when: "April 2025",
    services: ["siding", "exterior-trim"],
    cover: "img-4884",
    group: "manheim",
    scope: ["Lap siding", "White corner boards", "Black fascia, gutters and downspouts"],
    summary: "A house near Manheim in blue-gray lap siding, white corner trim and black fascia, gutters and downspouts.",
    body: `This house near Manheim in Lancaster County was finished in April 2025 in blue-gray lap siding with white corners and a black roof edge.

## The color scheme

Blue-gray siding, white corner boards and black fascia, gutters and downspouts is a combination that works on almost any house. The white defines the corners, and the black roof edge and downspouts read as a crisp line rather than something to hide.

{{photo:img-4884}}

## Details at the roof line

The photos show the siding running up to a black fascia and soffit, with the gutter pitched to the downspout at the corner. Where the siding meets the soffit, a trim piece closes the gap so there is no ragged top edge.

{{photo:img-4883}}

{{photo:img-4885}}`,
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const projectsFor = (service: string) => projects.filter((p) => p.services.includes(service));
export const galleryOf = (p: Project) => projectPhotos(p.group);
