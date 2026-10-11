import type { Faq } from "@/lib/site";

export type Area = {
  slug: string;
  name: string; // "Lancaster County"
  title: string;
  description: string;
  h1: string;
  lede: string;
  hero: string;
  /** Three photos for the hero. Local jobs first; where we have none yet, our nearest work, labelled honestly by its stamp. */
  photos: string[];
  /** How far it is from the shop, in plain words. */
  drive: string;
  towns: string[];
  intro: string[];
  houses: { t: string; d: string }[];
  /** Neighbouring counties, used for "nearest projects" and the links at the bottom. */
  nearby: string[];
  faqs: Faq[];
};

export const areas: Area[] = [
  {
    slug: "lancaster-county",
    name: "Lancaster County",
    title: "Contractor in Ephrata & Lancaster County, PA",
    description:
      "D&E Mako Renovation is based in Ephrata. Siding, windows, doors, AZEK trim, porches and finish carpentry across Lancaster County, PA. Free written estimates.",
    h1: "Renovation contractor in Ephrata and Lancaster County",
    lede: "Ephrata is home base. Siding, windows, doors, exterior trim, porches, dormers and finish carpentry across Lancaster County, from a crew that lives down the road.",
    hero: "img-4884",
    photos: ["img-4884", "img-4883", "img-4885"],
    drive: "Home base",
    towns: ["Ephrata", "Akron", "Lititz", "Denver", "Reamstown", "Adamstown", "Stevens", "Reinholds", "New Holland", "Leola", "Brownstown", "Terre Hill", "East Earl", "Manheim", "Mount Joy", "Elizabethtown", "Lancaster", "Millersville", "Strasburg", "Columbia"],
    intro: [
      "D&E Mako Renovation is based in Ephrata, in the northern part of Lancaster County. When you call, you talk to the people who do the work. And when a job is ten or twenty minutes from the shop, it is easy for us to come back for a second look, a small adjustment or a repair a year later.",
      "Houses in Lancaster County run from 1800s stone and brick farmhouses to post-war ranches in Ephrata and Lititz, brick rowhouses in the city of Lancaster and new developments around Akron, Denver and Manheim. The work we get called for is the same mix everywhere: siding and trim that has let water in, windows and doors that have outlived their seals, porches that need rebuilding and rooms that need finish carpentry.",
      "Our Lancaster County photos so far include blue-gray lap siding with new black gutters near Manheim. A lot of our recent work has been further east on the Main Line and in Delaware and Chester Counties, and those jobs are a good picture of how we work on older houses here too.",
    ],
    houses: [
      { t: "Stone and brick farmhouses", d: "Thick walls, out-of-square openings and wood trim painted many times over. Windows and doors are fitted to the masonry, and rotten trim is replaced in PVC with flashing behind it." },
      { t: "1950s to 1970s ranches and split-levels", d: "Aluminum or tired vinyl siding, original windows and soft fascia behind the gutters. Often the right job is new siding, trim and windows done together, one wall at a time." },
      { t: "Brick rowhouses in Lancaster city", d: "Wood cornices, window sills and porch roofs are what rot first. If the house is in a historic district, exterior changes may need approval, and we check before ordering anything." },
      { t: "Newer houses in developments", d: "Builder-grade trim and doors. The usual calls are crown, wainscoting, built-ins, a better front door or a deck that is starting to go." },
    ],
    nearby: ["lebanon-county", "berks-county", "chester-county", "york-county"],
    faqs: [
      { q: "Where are you based?", a: "In Ephrata, Lancaster County. From here we work across Lancaster, Berks, Lebanon and York Counties to the west and north, and Chester, Delaware and Montgomery Counties to the east." },
      { q: "Do you charge for estimates in Lancaster County?", a: "No. The visit and the written estimate are free, with no obligation to hire us." },
      { q: "Do you take small jobs close to Ephrata?", a: "Yes. A rotted sill, one door, a section of fascia or a few windows are all worth a call. Being close to the shop makes small jobs practical for us." },
      { q: "Who handles permits?", a: "Pennsylvania uses the Uniform Construction Code, and permits go through your township or borough, often through the code agency it uses. When a job needs a permit, we tell you at the estimate and handle the paperwork." },
      { q: "Can you work alongside my builder or other trades?", a: "Yes. If you already have a builder, framer or roofer, we can do the windows, doors, siding or trim as a separate contract and work around their schedule." },
    ],
  },
  {
    slug: "berks-county",
    name: "Berks County",
    title: "Contractor in Berks County: Wyomissing, Morgantown, Douglassville",
    description:
      "Windows, doors, siding, trim, porches and finish carpentry across Berks County, PA: Wyomissing, Sinking Spring, Morgantown, Birdsboro and Douglassville.",
    h1: "Carpentry and renovation in Berks County",
    lede: "Berks County starts just over the hill from our shop in Ephrata. Windows, doors, siding, exterior trim, porches and finish carpentry, from Morgantown and Sinking Spring to Reading and Douglassville.",
    hero: "img-6658",
    photos: ["img-6658", "img-4611", "img-6657"],
    drive: "About 30 minutes",
    towns: ["Reading", "Wyomissing", "West Lawn", "Shillington", "Mohnton", "Sinking Spring", "Wernersville", "Robesonia", "Womelsdorf", "Morgantown", "Birdsboro", "Douglassville", "Exeter", "Leesport", "Fleetwood", "Kutztown", "Boyertown", "Bernville"],
    intro: [
      "The Berks County line is a short drive from our shop in Ephrata, so the southern and western parts of the county, from Morgantown and Wernersville to Sinking Spring and Wyomissing, are as close to us as much of Lancaster County. We also go further east to Reading, Birdsboro and Douglassville.",
      "In the Douglassville area we replaced the windows on a brick house, set new stone sills and fitted a new exterior door into the masonry, and framed a small cricket on the roof behind it. It is a good example of the most common Berks County job we see: a solid brick or stone house whose wood windows, doors and trim have given out while the walls are still fine.",
      "Berks has a lot of that kind of house: brick rowhouses and twins in Reading and West Reading, stone farmhouses in the townships and well-built mid-century houses in Wyomissing and Shillington. They reward careful carpentry, because the masonry will outlast anything we install, as long as the joints between old and new are flashed right.",
    ],
    houses: [
      { t: "Brick and stone houses", d: "Windows and doors set into masonry need the opening cleaned up, flashed and sealed to the brick or stone with a joint that can move. We set new sills where the old ones have cracked or rotted." },
      { t: "Rowhouses and twins in Reading", d: "Wood cornices, porch roofs and back additions take the weather. Trim is rebuilt in PVC, and frame additions often need new siding to match." },
      { t: "Mid-century houses in Wyomissing and Shillington", d: "Original windows, tired siding and interiors that want better trim. Good candidates for replacement windows and new casing inside and out." },
    ],
    nearby: ["lancaster-county", "lebanon-county", "chester-county", "montgomery-county"],
    faqs: [
      { q: "How far into Berks County do you go?", a: "Most of the county. The southern and western townships are closest to Ephrata. Reading, Birdsboro and Douglassville are also regular for us, and we will tell you honestly if a small job is too far to be worth your money." },
      { q: "Can you replace windows in a brick or stone house?", a: "Yes, it is one of the most common Berks County jobs. We remove the old unit without damaging the masonry, flash the opening, set the new window and seal it to the brick or stone." },
      { q: "Do you do rowhouse work in Reading?", a: "Yes. Cornices, porch roofs, rear additions, windows and doors on rowhouses and twins are all work we do." },
      { q: "Is the estimate free in Berks County?", a: "Yes. We come out, look at the job with you and send a written estimate at no cost." },
      { q: "Who pulls the permit?", a: "When a job needs one, we do. Permits go through your township or borough under the Pennsylvania Uniform Construction Code, and we tell you at the estimate whether one is needed." },
    ],
  },
  {
    slug: "lebanon-county",
    name: "Lebanon County",
    title: "Contractor in Lebanon County: Myerstown, Annville, Palmyra",
    description:
      "Siding, windows, doors, trim, porches and finish carpentry across Lebanon County, PA: Myerstown, Schaefferstown, Annville, Palmyra and Cornwall. Free estimates.",
    h1: "Carpentry and renovation in Lebanon County",
    lede: "Lebanon County is next door to our shop in Ephrata. Siding, windows, doors, exterior trim, porches and finish carpentry from Schaefferstown and Myerstown to Lebanon, Annville and Palmyra.",
    hero: "img-4883",
    photos: ["img-4883", "img-6657", "img-4611"],
    drive: "About 30 minutes",
    towns: ["Lebanon", "Myerstown", "Schaefferstown", "Newmanstown", "Richland", "Fredericksburg", "Jonestown", "Cornwall", "Mount Gretna", "Annville", "Cleona", "Palmyra", "Campbelltown", "Avon"],
    intro: [
      "Lebanon County borders Lancaster County just north and west of Ephrata. Schaefferstown, Newmanstown and Myerstown are closer to our shop than the city of Lancaster, and Lebanon, Annville and Palmyra are an easy drive along Route 422.",
      "We do not have Lebanon County project photos on this site yet. The houses here are close cousins of the ones we work on in northern Lancaster and western Berks County: limestone and brick farmhouses, brick rowhouses and twins in the city of Lebanon, and post-war ranches and split-levels in the boroughs. The photos on this page are from those nearby jobs, and each one is stamped with where it was taken.",
      "The calls we expect from Lebanon County are the same ones we get everywhere: rotted fascia and window sills, old siding that is letting water in, windows and doors that no longer seal, porches and steps that need rebuilding, and interiors that need trim and built-ins.",
    ],
    houses: [
      { t: "Limestone and brick farmhouses", d: "Thick walls and openings that are never square. New windows and doors are fitted to the masonry, and old wood trim is replaced in PVC so it does not rot again." },
      { t: "Rowhouses and twins in Lebanon", d: "Wood cornices, porch roofs and rear additions. Trim is rebuilt with flashing behind it, and frame additions get siding to match." },
      { t: "Post-war ranches and split-levels", d: "Original windows, aluminum siding and soft fascia. Siding, trim and windows done together usually make the most sense." },
    ],
    nearby: ["lancaster-county", "berks-county", "york-county", "chester-county"],
    faqs: [
      { q: "Do you really work in Lebanon County?", a: "Yes. Myerstown and Schaefferstown are closer to our shop in Ephrata than many Lancaster County towns. We do not have Lebanon County project pages yet, so this page shows our nearest jobs, each labelled with where it was." },
      { q: "Is there a trip charge for Lebanon?", a: "No. The estimate visit is free across Lebanon County." },
      { q: "Can you work on a stone or brick farmhouse?", a: "Yes. Old masonry houses are a large part of our work. We fit windows, doors and trim to the walls as they are rather than forcing them square." },
      { q: "Do you take smaller jobs here?", a: "Yes. A few windows, a door, a section of rotted trim or a set of porch steps are all worth a call." },
      { q: "Who handles permits in Lebanon County?", a: "When a job needs a permit, we handle it through your township or borough under the Pennsylvania Uniform Construction Code, and we tell you at the estimate." },
    ],
  },
  {
    slug: "york-county",
    name: "York County",
    title: "Contractor in York County, PA: Red Lion, Dover, Hanover",
    description:
      "Siding, windows, doors, AZEK trim, porches and finish carpentry across York County, PA: Red Lion, Dallastown, Dover, Shrewsbury and Hanover. Free estimates.",
    h1: "Carpentry and renovation in York County",
    lede: "Across the Susquehanna from Lancaster County. Siding, windows, doors, exterior trim, porches and finish carpentry in York, Red Lion, Dallastown, Shrewsbury, Hanover and the townships around them.",
    hero: "img-4885",
    photos: ["img-4885", "img-6658", "img-7287"],
    drive: "About an hour",
    towns: ["York", "Spring Garden", "Springettsbury", "Red Lion", "Dallastown", "Windsor", "Hellam", "Wrightsville", "Dover", "Manchester", "Shrewsbury", "Stewartstown", "Glen Rock", "Hanover"],
    intro: [
      "York County is across the Susquehanna River from Lancaster County, about an hour from our shop in Ephrata. We take on York County jobs where a day's drive makes sense: siding, windows and doors, trim packages, porches and larger interior trim jobs, planned so the crew is on site for full days.",
      "We do not have York County project photos on this site yet. The housing here is close to what we work on in Lancaster County: brick rowhouses and Victorians in the city of York, brick and frame houses in boroughs like Red Lion and Dallastown, and post-war and newer houses in the townships. The photos on this page are from our other jobs, and each is stamped with where it was taken.",
      "Older York County houses have a lot of wood trim, cornices and porches that take the weather. Where that wood has rotted, we rebuild it in PVC with flashing behind it so it holds paint and does not rot again.",
    ],
    houses: [
      { t: "Brick rowhouses and Victorians in York", d: "Cornices, porch roofs, window sills and back additions. If the house is in a historic district, exterior changes may need approval, and we check before ordering materials." },
      { t: "Borough houses in Red Lion and Dallastown", d: "Brick and frame houses with wood porches and trim. Porches, steps, windows and doors are the common calls." },
      { t: "Post-war and newer houses", d: "Vinyl or aluminum siding, builder windows and soft fascia. New siding and trim, or a window and door package, done together." },
    ],
    nearby: ["lancaster-county", "lebanon-county", "chester-county", "berks-county"],
    faqs: [
      { q: "Do you work in York County?", a: "Yes, on jobs where a day's drive makes sense: siding, windows and doors, trim packages, porches and larger interior jobs. For a single small repair, a closer contractor may serve you better, and we will say so." },
      { q: "Why are there no York County projects on this site?", a: "Because we only show our own photos, stamped with where they were taken. Most of our photographed work so far is east of Ephrata. The York County page shows our nearest comparable jobs instead." },
      { q: "Is the estimate free in York County?", a: "Yes. We come out, look at the work and send a written estimate at no charge." },
      { q: "Can you rebuild a porch or cornice on an old brick house?", a: "Yes. We rebuild rotted porch framing, columns, beadboard ceilings and cornice trim, using PVC where wood would rot again." },
      { q: "Who pulls permits?", a: "When a job needs one, we do, through your township or borough under the Pennsylvania Uniform Construction Code." },
    ],
  },
  {
    slug: "chester-county",
    name: "Chester County",
    title: "Contractor in Chester County: Malvern, Chadds Ford, Exton",
    description:
      "Windows, doors, siding, trim and finish carpentry across Chester County, PA: Chadds Ford, Thornbury, Malvern, Downingtown, Exton and Kennett Square.",
    h1: "Carpentry and renovation in Chester County",
    lede: "In Chester County we have built stairwell wainscoting in Thornbury Township, framed a sunroom wall with new windows and a door in Chadds Ford and built out a retail store in West Chester.",
    hero: "img-4582",
    photos: ["img-4582", "img-4696", "img-7772"],
    drive: "About an hour",
    towns: ["West Chester", "Chadds Ford", "Thornbury", "Malvern", "Paoli", "Berwyn", "Devon", "Exton", "Downingtown", "Chester Springs", "Kennett Square", "Unionville", "Coatesville", "Honey Brook", "Elverson", "Phoenixville"],
    intro: [
      "Chester County sits between our shop in Ephrata and the Main Line, so it is on the way to a lot of our jobs. Honey Brook and Elverson are close to home, and West Chester, Malvern and Chadds Ford are a regular drive for us.",
      "Our Chester County work on this site includes picture-frame wainscoting up a stairwell in Thornbury Township, a sunroom wall with new windows and a door onto a deck in Chadds Ford, and the counter and wall shelving for a retail store in West Chester.",
      "Houses here run from stone farmhouses and converted bank barns to 1980s and 1990s colonials and new construction. The common requests are window and door replacement in houses whose original builder units are failing, crown and wainscoting in formal rooms, siding and trim repair, and porches.",
    ],
    houses: [
      { t: "1980s and 1990s colonials", d: "Original builder windows and doors are reaching the end of their seals. Fascia and window trim often rot behind the gutters." },
      { t: "Stone farmhouses and barns", d: "Thick walls and old trim, often with later frame additions that need siding and trim to match the old part of the house." },
      { t: "Formal rooms", d: "Crown, wainscoting and built-ins are the most common interior requests, fitted to walls that are rarely flat." },
    ],
    nearby: ["delaware-county", "montgomery-county", "lancaster-county", "berks-county"],
    faqs: [
      { q: "Do you work in West Chester borough?", a: "Yes, including commercial work in town. Borough properties sometimes need extra approvals for exterior changes, which we check before starting." },
      { q: "How soon can you start?", a: "It depends on the season and the size of the job. Small repairs often fit in within a few weeks. Larger jobs are scheduled once the estimate is approved." },
      { q: "Can you replace windows in a 1990s colonial without redoing the siding?", a: "Usually, yes. Many of these houses can take insert or full-frame replacements with new exterior trim, without touching the siding around them." },
      { q: "Is the estimate free?", a: "Yes. We visit, look at the work with you and send a written estimate at no cost." },
      { q: "Do you work under architects or general contractors?", a: "Yes. On larger projects we often work as the carpentry crew under a GC or to an architect's drawings." },
    ],
  },
  {
    slug: "delaware-county",
    name: "Delaware County",
    title: "Contractor in Delaware County: Media, Radnor, Newtown Square",
    description:
      "Windows, storefronts, siding, trim, decks and finish carpentry in Delaware County, PA: Newtown Square, Media, Broomall, Radnor and Wayne.",
    h1: "Carpentry and renovation in Delaware County",
    lede: "Office windows and storefront doors in Newtown Square, siding and windows in Broomall, a composite deck in Wayne, an attic bedroom in Radnor and steps in Media. Delaware County is one of the places we work most.",
    hero: "img-7762",
    photos: ["img-7762", "img-7207", "img-5004"],
    drive: "About an hour and a quarter",
    towns: ["Newtown Square", "Media", "Broomall", "Glen Mills", "Springfield", "Havertown", "Drexel Hill", "Wallingford", "Swarthmore", "Edgmont", "Marple", "Radnor", "Wayne", "Villanova", "Rosemont", "Haverford"],
    intro: [
      "Delaware County gives us a mix of houses and small commercial buildings. In Newtown Square we replaced the windows across a two-story office building with black-frame units, installed a wall of black glass storefront doors and windows in another unit, and rebuilt the rake trim on a stucco farmhouse in PVC.",
      "On the Main Line side of the county, we built a composite deck with stairs on stone piers in Wayne and trimmed out an attic bedroom in Radnor Township. Further south we re-sided the frame side of a brick house in Broomall and replaced its windows and doors, and built composite steps and a landing in Media.",
      "Many Delaware County houses are brick or stucco with wood trim, and that trim is usually where the trouble starts. We cut out the rot, flash behind it and rebuild it in PVC, sealed to the masonry with a joint that can move.",
    ],
    houses: [
      { t: "Brick and stucco houses", d: "Wood sills, rakes and trim on masonry walls rot first. We rebuild them in PVC with flashing, so the problem does not come back." },
      { t: "Main Line houses in Radnor and Wayne", d: "Stone and frame houses with big porches, attics and decks. Dormers, attic rooms, decks and trim are the usual work." },
      { t: "Small commercial buildings", d: "Window replacement and storefront doors, phased so the business stays open while we work." },
      { t: "Post-war twins and singles", d: "Siding, windows and doors, often all in one job." },
    ],
    nearby: ["montgomery-county", "chester-county", "lancaster-county", "berks-county"],
    faqs: [
      { q: "Do you do commercial work in Delaware County?", a: "Yes. Office window replacement and storefront doors in Newtown Square are among our recent jobs." },
      { q: "Can you fix rotted trim on a stucco house?", a: "Yes. We cut out the rot, add flashing and rebuild the trim in PVC, sealing it to the stucco with a joint that can move." },
      { q: "Do you really travel from Ephrata to Delaware County?", a: "Yes. A large share of our work is here, as the project photos show. We plan our weeks so the crew stays in one area for days at a time." },
      { q: "Do you build decks?", a: "Yes. Our Wayne deck is composite decking on stone piers, with stairs and railings. We build in composite and pressure-treated wood." },
      { q: "Is the estimate free?", a: "Yes. The visit and the written estimate cost nothing." },
    ],
  },
  {
    slug: "montgomery-county",
    name: "Montgomery County",
    title: "Contractor in Montgomery County: Lower Merion, Bryn Mawr",
    description:
      "Dormers, additions, siding, windows, porches, copper and finish carpentry in Montgomery County, PA: Lower Merion, Gladwyne, Bryn Mawr, Ardmore and Haverford.",
    h1: "Carpentry and renovation in Montgomery County",
    lede: "Most of our photographed work is here, on the Montgomery County side of the Main Line: a stone gambrel house rebuilt over a year in Lower Merion, interior trim and built-ins, window sills and copper in Haverford.",
    hero: "img-5557",
    photos: ["img-5557", "img-7288", "img-7971"],
    drive: "About an hour and a quarter",
    towns: ["Lower Merion", "Gladwyne", "Bryn Mawr", "Ardmore", "Haverford", "Narberth", "Bala Cynwyd", "Merion Station", "Wynnewood", "Penn Valley", "Conshohocken", "King of Prussia", "Plymouth Meeting", "Blue Bell", "Ambler"],
    intro: [
      "Lower Merion and the Montgomery County side of the Main Line have some of the oldest and best-built houses in the region: fieldstone colonials, gambrel and Dutch colonial houses, Tudors and large shingle-style houses. They were built with real carpentry, and repairing or adding to them takes the same.",
      "Our biggest job so far was in Lower Merion Township. Over 2025 and into 2026 a fieldstone house with a gambrel roof got new dormers, a gambrel addition sheathed in ZIP System, lap siding with cedar shake gables, Andersen windows set into the stone, French doors, porch columns, stairs and the interior trim. Each part has its own project page below.",
      "Nearby we trimmed out a floor of a house with Marvin windows, built-in desks, knee-wall shelves and closet shelving, rebuilt rotted window sills on a stucco house, and fitted copper flashing where a bay window meets a slate roof in Haverford.",
    ],
    houses: [
      { t: "Fieldstone houses", d: "Openings are never square and walls are a foot or more thick. Windows and doors are shimmed to the opening and trimmed to hide the irregularity, never forced square." },
      { t: "Gambrel and Dutch colonial roofs", d: "Dormers are the usual way to gain upstairs space. The joint between dormer and roof is where most leaks start, so it is flashed by hand." },
      { t: "Slate roofs and copper", d: "Copper flashing and gutters suit slate and outlast it. They must be fastened with copper or stainless only." },
      { t: "Stucco and frame houses", d: "Wood window sills and trim set into stucco rot from behind. We rebuild them with flashing and a proper joint to the stucco." },
    ],
    nearby: ["delaware-county", "chester-county", "berks-county", "lancaster-county"],
    faqs: [
      { q: "Do you really travel from Ephrata to Lower Merion?", a: "Yes. Most of our photographed work is in Lower Merion and nearby, as the project pages show. We plan our weeks so the crew is in one area for days at a time." },
      { q: "Do you work on historic houses?", a: "Yes. Most of our Montgomery County work is on older stone and frame houses. We match trim profiles, fit new work to old masonry and use materials that suit the house." },
      { q: "Can you add a dormer to a gambrel roof?", a: "Yes. We framed new dormers into a gambrel roof on a stone house in Lower Merion, closing the roof every night while it was open." },
      { q: "Can you work under my architect or general contractor?", a: "Yes. On larger projects we often work as the carpentry crew under a general contractor or to an architect's drawings." },
      { q: "Is the estimate free?", a: "Yes. We come out, look at the house with you and send a written estimate at no cost." },
    ],
  },
];

export const areaBySlug = (slug: string) => areas.find((a) => a.slug === slug);
