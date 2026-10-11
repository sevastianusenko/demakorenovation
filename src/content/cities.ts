import type { Faq } from "@/lib/site";

// City pages, chosen from search data (research/03-town-pages.md): the six cities in our area where
// "contractor {city} pa", windows, decks and siding get real searches and the top 10 is mostly directories.
// Each one lives under its county page and targets the city name only, so it does not compete with the county page.
export type City = {
  slug: string;
  name: string; // "York"
  county: string; // area slug
  title: string;
  description: string;
  h1: string;
  lede: string;
  hero: string;
  photos: string[];
  drive: string;
  around: string[]; // boroughs and townships around the city
  intro: string[];
  focus: { service: string; t: string; d: string }[];
  houses: { t: string; d: string }[];
  projects: string[]; // nearest real jobs
  faqs: Faq[];
};

export const cities: City[] = [
  {
    slug: "lancaster",
    name: "Lancaster",
    county: "lancaster-county",
    title: "Contractor in Lancaster, PA: Windows, Siding, Decks",
    description:
      "Carpentry contractor for Lancaster, PA: window replacement, siding, decks, porches and trim on city rowhouses and township homes. Free written estimates.",
    h1: "Contractor in Lancaster, PA",
    lede: "Windows, siding, decks, porches and trim for houses in the city of Lancaster and the townships around it, from a carpentry crew based twenty minutes away in Ephrata.",
    hero: "img-4883",
    photos: ["img-4883", "img-4884", "img-6657"],
    drive: "About 25 minutes",
    around: ["Manheim Township", "Lancaster Township", "East Lampeter", "West Lampeter", "Millersville", "Landisville", "Rohrerstown", "Neffsville", "Willow Street", "Leola"],
    intro: [
      "The city of Lancaster and the townships that ring it are the busiest part of our home county. From our shop in Ephrata it is about twenty-five minutes down Route 222, close enough that a site visit, a second look or a small repair later on is never a problem.",
      "Lancaster has every kind of house we work on in one place: brick rowhouses with wood cornices downtown, big brick and frame houses along the older streets, 1950s and 1960s neighborhoods in Manheim and Lancaster Townships, and newer houses in developments around Landisville, Neffsville and East Lampeter.",
      "Most calls from Lancaster are about windows and doors that no longer seal, siding and trim that have let water into the wall, and decks and porches that are going soft. We do that work ourselves, and we check the wall behind it before we cover anything up.",
    ],
    focus: [
      { service: "windows", t: "Window replacement", d: "Replacement and full-frame windows in brick, frame and stucco walls, flashed into the opening and trimmed inside and out. Rowhouse windows are fitted to openings that are rarely the same size twice." },
      { service: "porches-decks", t: "Decks and porches", d: "Composite and pressure-treated decks, covered porches and steps. Old porch framing is opened up and checked, not just covered with new boards." },
      { service: "siding", t: "Siding and siding repair", d: "Fiber cement, vinyl and engineered wood siding on township houses, and repairs that match what is already there." },
      { service: "exterior-trim", t: "Cornice and trim repair", d: "Rotted cornices, fascia, sills and porch trim on older city houses, rebuilt in PVC with flashing behind." },
    ],
    houses: [
      { t: "Brick rowhouses in the city", d: "Wood cornices, window sills, porch roofs and rear additions take the weather. If the house is in a historic district, exterior work may need review first, and we check before ordering materials." },
      { t: "Older brick and frame houses", d: "Big windows, deep trim and porches. Window replacement here is about fitting new units to old openings without losing the look of the house." },
      { t: "Post-war township houses", d: "Ranches, split-levels and colonials in Manheim and Lancaster Townships with original windows, aluminum siding and soft fascia. Often the best job does siding, trim and windows together." },
    ],
    projects: ["blue-gray-lap-siding-manheim", "brick-home-windows-door-douglassville", "siding-windows-doors-broomall", "composite-deck-stairs-wayne", "rotted-window-sill-repair-lower-merion"],
    faqs: [
      { q: "Do you work in the city of Lancaster itself?", a: "Yes, in the city and in the townships around it. Our shop in Ephrata is about twenty-five minutes away." },
      { q: "Can you replace windows in a Lancaster rowhouse?", a: "Yes. Rowhouse openings vary from window to window, so each one is measured on its own. We flash the opening and seal the new window to the brick." },
      { q: "Do you need a permit for windows or a deck in Lancaster?", a: "Decks almost always need one, and some window and exterior work does too, especially in historic districts. We tell you at the estimate and handle the paperwork." },
      { q: "Is the estimate free?", a: "Yes. We come out, look at the job with you and send a written estimate at no cost." },
    ],
  },
  {
    slug: "york",
    name: "York",
    county: "york-county",
    title: "Contractor in York, PA: Windows, Decks, Siding",
    description:
      "Carpentry contractor for York, PA: window replacement, decks, siding and siding repair, porches and trim on city and township houses. Free written estimates.",
    h1: "Contractor in York, PA",
    lede: "Window replacement, decks, siding and porch work in York and the townships around it. We plan York jobs as full days on site, so the crew is there working, not driving.",
    hero: "img-4885",
    photos: ["img-4885", "img-7762", "img-6658"],
    drive: "About an hour",
    around: ["Spring Garden", "Springettsbury", "West York", "North York", "York Township", "Manchester", "Dover", "Red Lion", "Dallastown", "Hallam"],
    intro: [
      "York is about an hour from our shop in Ephrata, across the Susquehanna. We take on York jobs that are worth a full day of work: window and door packages, decks, siding and trim, porches and larger interior trim jobs. For a single small repair, a closer contractor may serve you better, and we will tell you so.",
      "The city has a lot of brick rowhouses and big Victorian-era houses with wood cornices, porches and trim, and the townships around it, from Spring Garden and Springettsbury to Dover and Red Lion, are full of post-war and newer houses with builder windows and vinyl siding that is starting to go.",
      "The work York homeowners ask for most is window replacement, new decks and siding repair. We do all three, and on older houses we look at the trim and framing around the work, because that is usually where the water has been getting in.",
    ],
    focus: [
      { service: "windows", t: "Window replacement", d: "New windows in brick and frame walls, flashed into the opening and finished with new casing and exterior trim. We do a whole house or the worst few first." },
      { service: "porches-decks", t: "Deck building", d: "Composite and pressure-treated decks with stairs and railings, on footings sized for the deck. Old decks are checked at the ledger, where most of them fail." },
      { service: "siding", t: "Siding and siding repair", d: "Fiber cement and vinyl siding, and repairs where a wall has taken water behind a downspout or around a window." },
      { service: "exterior-trim", t: "Porch and cornice trim", d: "Rotted porch columns, beadboard ceilings, cornices and sills on older York houses, rebuilt so they hold paint." },
    ],
    houses: [
      { t: "Rowhouses and Victorians in the city", d: "Wood cornices, porch roofs, window sills and back additions. If the house is in a historic district, exterior changes may need review, and we check first." },
      { t: "Post-war and newer township houses", d: "Builder windows, vinyl siding and decks from the 1990s and 2000s that are reaching the end of their life." },
      { t: "Brick houses in the boroughs", d: "Red Lion, Dallastown and the older boroughs have brick and frame houses with wood porches. Porches, windows and doors are the common calls." },
    ],
    projects: ["blue-gray-lap-siding-manheim", "composite-deck-stairs-wayne", "brick-home-windows-door-douglassville", "siding-windows-doors-broomall", "front-porch-columns-entry-roof-lower-merion"],
    faqs: [
      { q: "Do you really come to York from Ephrata?", a: "Yes, for jobs that are a full day of work or more: windows, decks, siding, porches and trim packages. For a single small repair we may point you to someone closer." },
      { q: "Can you build a deck in York?", a: "Yes. We build composite and pressure-treated decks with stairs and railings. Decks need a permit from your municipality, and we handle it." },
      { q: "Can you fix siding without re-siding the whole house?", a: "Usually, yes. We find where the water got in, repair the sheathing behind it and replace the damaged boards with a matching profile where one is still made." },
      { q: "Is the estimate free in York?", a: "Yes. The visit and the written estimate cost nothing." },
    ],
  },
  {
    slug: "reading",
    name: "Reading",
    county: "berks-county",
    title: "Contractor in Reading, PA: Windows, Doors, Trim",
    description:
      "Carpentry contractor for Reading, PA and nearby: window replacement, doors, cornice and trim repair, siding and porches. Free written estimates.",
    h1: "Contractor in Reading, PA",
    lede: "Window replacement, doors, cornice and trim repair, siding and porches for Reading rowhouses and the brick houses of West Reading, Wyomissing and Shillington.",
    hero: "img-6658",
    photos: ["img-6658", "img-4611", "img-6657"],
    drive: "About 35 minutes",
    around: ["West Reading", "Wyomissing", "Shillington", "Mount Penn", "Exeter", "Muhlenberg", "Cumru", "Spring Township", "Sinking Spring", "Laureldale"],
    intro: [
      "Reading is about thirty-five minutes from our shop in Ephrata. The city and the boroughs around it are some of the best brick housing stock in the region: long blocks of rowhouses in the city, larger brick houses in West Reading and Wyomissing, and solid mid-century houses in Shillington and Cumru.",
      "Brick lasts. What gives out on these houses is the wood: window sashes and sills, doors, cornices, porch roofs and the trim on rear additions. Our closest job to Reading is in the Douglassville area, where we replaced the windows on a brick house, set new stone sills and fitted a new exterior door into the masonry.",
      "That is the kind of work we expect most in Reading: new windows and doors set properly into brick, and rotted wood trim rebuilt in PVC so it stops needing paint every few years.",
    ],
    focus: [
      { service: "windows", t: "Window replacement in brick walls", d: "Old units removed without damaging the masonry, the opening flashed, the new window set and sealed to the brick with a joint that can move. New sills where the old ones have cracked." },
      { service: "doors", t: "Entry and rear doors", d: "Front doors, back doors and storm doors set plumb with a flashed sill and new trim." },
      { service: "exterior-trim", t: "Cornices and trim", d: "Rotted cornices, fascia and porch trim on rowhouses, rebuilt in PVC with flashing behind." },
      { service: "siding", t: "Siding on rear additions", d: "Frame additions behind brick rowhouses re-sided and trimmed so they shed water." },
    ],
    houses: [
      { t: "City rowhouses", d: "Brick fronts with wood cornices and porch roofs, frame additions at the back. Cornice and window work is done from staging or a lift, safely and without damage to neighbours." },
      { t: "Brick houses in West Reading and Wyomissing", d: "Larger houses with good bones and tired windows and doors. Window replacement here keeps the proportions of the original sashes." },
      { t: "Mid-century houses in Shillington and Cumru", d: "Original windows, aluminum siding and soft fascia. Siding, trim and windows done together usually make the most sense." },
    ],
    projects: ["brick-home-windows-door-douglassville", "blue-gray-lap-siding-manheim", "siding-windows-doors-broomall", "pvc-rake-trim-stucco-farmhouse-newtown-square", "rotted-window-sill-repair-lower-merion"],
    faqs: [
      { q: "Do you work in the city of Reading?", a: "Yes, and in the boroughs and townships around it. Our shop in Ephrata is about thirty-five minutes away." },
      { q: "Can you replace windows in a brick rowhouse?", a: "Yes. It is one of the most common jobs on brick houses. We remove the old window without damaging the brick, flash the opening and seal the new unit to the masonry." },
      { q: "Can you fix a rotted cornice?", a: "Yes. We open it up, replace rotted framing and rebuild the cornice in PVC or wood, with flashing so it does not rot again." },
      { q: "Is the estimate free?", a: "Yes. We come out, look at the job with you and send a written estimate at no cost." },
    ],
  },
  {
    slug: "pottstown",
    name: "Pottstown",
    county: "montgomery-county",
    title: "Contractor in Pottstown, PA: Windows, Siding, Doors",
    description:
      "Carpentry contractor for Pottstown, PA and the Pottsgroves: window replacement, siding, doors, trim and porches. Our Douglassville job is just up the road.",
    h1: "Contractor in Pottstown, PA",
    lede: "Window replacement, siding, doors, trim and porches in Pottstown, the Pottsgroves and North Coventry. One of our jobs is a few minutes up Route 422 in Douglassville.",
    hero: "img-4611",
    photos: ["img-4611", "img-6658", "img-4808"],
    drive: "About 50 minutes",
    around: ["Lower Pottsgrove", "Upper Pottsgrove", "West Pottsgrove", "Sanatoga", "Stowe", "North Coventry", "Gilbertsville", "Douglassville", "Boyertown", "Royersford"],
    intro: [
      "Pottstown sits where Montgomery, Berks and Chester Counties meet, about fifty minutes from our shop in Ephrata. Our job in the Douglassville area, where we replaced the windows on a brick house, set stone sills, fitted a new exterior door and framed a small roof cricket, is a few minutes up the same road.",
      "The borough has a lot of brick and frame houses from the early 1900s, with wood porches and trim, and the Pottsgroves, Sanatoga and North Coventry have newer houses with vinyl siding and builder windows that are now twenty or thirty years old.",
      "The calls we expect most here are window and door replacement, siding and trim repair, and porches. We do the carpentry ourselves and check the wall around the work before we close anything up.",
    ],
    focus: [
      { service: "windows", t: "Window replacement", d: "New windows in brick and frame walls, flashed in and trimmed inside and out, like the brick house we did in Douglassville." },
      { service: "doors", t: "Exterior doors", d: "Front, back and storm doors, set plumb with a flashed sill and new trim, in masonry or frame walls." },
      { service: "siding", t: "Siding and trim", d: "Vinyl and fiber cement siding, with rotted fascia, rakes and sills rebuilt in PVC." },
      { service: "porches-decks", t: "Porches and steps", d: "Porch framing, columns, ceilings and steps on older borough houses, and composite steps and landings." },
    ],
    houses: [
      { t: "Early 1900s borough houses", d: "Brick and frame houses with deep wood porches and trim. Porches, cornices, windows and doors are where the wear shows." },
      { t: "1990s and 2000s township houses", d: "Builder windows, vinyl siding and decks reaching the end of their life in the Pottsgroves, Sanatoga and North Coventry." },
      { t: "Brick ranches and colonials", d: "Solid walls with tired windows and doors. New units are set and sealed to the brick with new sills where needed." },
    ],
    projects: ["brick-home-windows-door-douglassville", "blue-gray-lap-siding-manheim", "siding-windows-doors-broomall", "composite-steps-landing-media", "stairwell-wainscoting-thornbury"],
    faqs: [
      { q: "Do you work in Pottstown?", a: "Yes, in the borough and the townships around it. Our nearest job is in the Douglassville area, a few minutes away." },
      { q: "Can you replace windows and a door in a brick house?", a: "Yes. That is exactly what we did in Douglassville: new windows, new stone sills and a new exterior door set into the brick." },
      { q: "Do you build porches?", a: "Yes. We rebuild porch framing, columns, ceilings and steps, and build new covered porches and composite steps." },
      { q: "Is the estimate free?", a: "Yes. The visit and the written estimate cost nothing." },
    ],
  },
  {
    slug: "lebanon",
    name: "Lebanon",
    county: "lebanon-county",
    title: "Contractor in Lebanon, PA: Windows, Siding, Trim",
    description:
      "Carpentry contractor for Lebanon, PA: window replacement, siding, doors, cornice and trim repair, porches. About 30 minutes from our shop in Ephrata.",
    h1: "Contractor in Lebanon, PA",
    lede: "Window replacement, siding, doors, trim and porches in the city of Lebanon and the townships around it, about thirty minutes from our shop in Ephrata.",
    hero: "img-6657",
    photos: ["img-6657", "img-4883", "img-4611"],
    drive: "About 30 minutes",
    around: ["Cleona", "North Lebanon", "South Lebanon", "North Cornwall", "West Lebanon", "Annville", "Myerstown", "Avon", "Prescott", "Fredericksburg"],
    intro: [
      "The city of Lebanon is about thirty minutes from our shop in Ephrata, up Route 322 or across on 422 through Myerstown. It is close enough that we can treat it like home ground: a visit to look at the job, a crew on site for the days it takes, and a quick trip back if anything needs attention later.",
      "Lebanon has a lot of brick rowhouses and twins in the city, larger brick houses on the older streets, and post-war ranches and split-levels in North Lebanon, South Lebanon and North Cornwall. We do not have Lebanon project pages yet, so the jobs on this page are our nearest ones, each labelled with where it was.",
      "The work we expect most here is window replacement in brick walls, siding and trim repair, and porches. They are the same jobs we do on the brick houses in Berks County and the township houses in Lancaster County.",
    ],
    focus: [
      { service: "windows", t: "Window replacement", d: "New windows set into brick and frame walls, flashed and sealed, with new sills where the old ones have cracked or rotted." },
      { service: "siding", t: "Siding and siding repair", d: "Vinyl and fiber cement siding on township houses and rear additions, and repairs that find where the water got in." },
      { service: "exterior-trim", t: "Cornice, fascia and sill repair", d: "Rotted wood on older city houses rebuilt in PVC with flashing behind, so it holds paint and stays dry." },
      { service: "doors", t: "Entry doors", d: "Front and back doors set plumb with a flashed sill and new trim inside and out." },
    ],
    houses: [
      { t: "Brick rowhouses and twins", d: "Wood cornices, porch roofs, sills and rear additions are what wear out. The brick usually outlasts everything we install." },
      { t: "Older brick houses", d: "Large windows and deep trim. Replacement windows are fitted to keep the look of the original openings." },
      { t: "Post-war township houses", d: "Original windows, aluminum siding and soft fascia in North and South Lebanon and North Cornwall." },
    ],
    projects: ["blue-gray-lap-siding-manheim", "brick-home-windows-door-douglassville", "siding-windows-doors-broomall", "rotted-window-sill-repair-lower-merion", "pvc-rake-trim-stucco-farmhouse-newtown-square"],
    faqs: [
      { q: "Do you work in the city of Lebanon?", a: "Yes, and in the townships and boroughs around it. It is about thirty minutes from our shop." },
      { q: "Why are there no Lebanon projects on this site?", a: "We only show our own photos, stamped with where they were taken, and we have not photographed a Lebanon job yet. This page shows our nearest comparable work instead." },
      { q: "Can you replace windows in a brick house?", a: "Yes. We remove the old units without damaging the brick, flash the openings and seal the new windows to the masonry." },
      { q: "Is the estimate free?", a: "Yes. We come out, look at the job with you and send a written estimate at no cost." },
    ],
  },
  {
    slug: "west-chester",
    name: "West Chester",
    county: "chester-county",
    title: "Contractor in West Chester, PA: Windows, Decks, Trim",
    description:
      "Carpentry contractor for West Chester, PA: window replacement, decks, trim and wainscoting, porches and small commercial work. Real jobs nearby in Thornbury and Chadds Ford.",
    h1: "Contractor in West Chester, PA",
    lede: "Window replacement, decks, trim and wainscoting, porches and small commercial fit-outs in West Chester and the Goshens. We have built a store fit-out in town and jobs in Thornbury and Chadds Ford.",
    hero: "img-4582",
    photos: ["img-4582", "img-4696", "img-7772"],
    drive: "About an hour",
    around: ["West Goshen", "East Goshen", "Westtown", "East Bradford", "West Bradford", "Thornbury", "Birmingham", "Pocopson", "Downingtown", "Exton"],
    intro: [
      "West Chester is one of the places we work most in Chester County. In town we built the counter and wall shelving for a retail store. A few miles south we built picture-frame wainscoting up a stairwell in Thornbury Township, and in Chadds Ford we framed a sunroom wall with new windows and a door onto the deck.",
      "The borough has brick and stone houses from the 1800s, many in the historic district, and the Goshens, Westtown and the Bradfords are full of 1970s to 1990s colonials whose original windows and doors are failing and whose trim is rotting behind the gutters.",
      "The work West Chester homeowners search for most is window replacement and decks. We do both, along with trim, wainscoting and built-ins inside, and porches and steps outside.",
    ],
    focus: [
      { service: "windows", t: "Window replacement", d: "Replacement and full-frame windows in colonials and older borough houses, flashed in and trimmed inside and out, like the sunroom wall in Chadds Ford." },
      { service: "porches-decks", t: "Decks and porches", d: "Composite and pressure-treated decks with stairs and railings, covered porches and composite steps and landings." },
      { service: "finish-carpentry", t: "Trim and wainscoting", d: "Crown, wainscoting, stair trim and casing, like the stairwell wainscoting in Thornbury." },
      { service: "commercial", t: "Store and office fit-outs", d: "Counters, shelving, doors and windows for small commercial spaces, like the retail store we built out in town." },
    ],
    houses: [
      { t: "Historic borough houses", d: "Brick and stone houses with wood windows and trim. Exterior changes in the historic district need review first, and we check before we order anything." },
      { t: "1970s to 1990s colonials", d: "Original builder windows and doors at the end of their seals, and fascia and window trim rotting behind the gutters." },
      { t: "Formal rooms and stairwells", d: "Crown, wainscoting and stair trim fitted to walls that are rarely flat, the most common interior request here." },
    ],
    projects: ["stairwell-wainscoting-thornbury", "sunroom-windows-door-chadds-ford", "composite-deck-stairs-wayne", "composite-steps-landing-media", "pvc-rake-trim-stucco-farmhouse-newtown-square"],
    faqs: [
      { q: "Do you work in West Chester borough?", a: "Yes, including commercial work in town. Borough properties in the historic district need review for exterior changes, which we check before starting." },
      { q: "Can you replace windows in a 1990s colonial?", a: "Yes. Many can take insert or full-frame replacements with new exterior trim without touching the siding around them." },
      { q: "Do you build decks in West Chester?", a: "Yes, in composite and pressure-treated wood, with stairs and railings. Decks need a permit from the township or borough, and we handle it." },
      { q: "Is the estimate free?", a: "Yes. The visit and the written estimate cost nothing." },
    ],
  },
];

export const cityBySlug = (county: string, slug: string) => cities.find((c) => c.county === county && c.slug === slug);
export const citiesIn = (county: string) => cities.filter((c) => c.county === county);
