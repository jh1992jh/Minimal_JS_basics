// Return an array where non-Metallica band members are filtered out.
const filterOutBandMembers = () => {
  const bandMembers = [
    {
      name: "James Hetfield",
      band: "Metallica",
    },
    {
      name: "Lars Ulrich",
      band: "Metallica",
    },
    {
      name: "Chad Kroeger",
      band: "Nickelback",
    },
    {
      name: "Kirk Hammet",
      band: "Metallica",
    },
    {
      name: "Gene Simmons",
      band: "Kiss",
    },
    {
      name: "Paul Stanley",
      band: "Kiss",
    },
    {
      name: "Robert Trujilo",
      band: "Metallica",
    },
  ];
};

console.log(filterOutBandMembers());
