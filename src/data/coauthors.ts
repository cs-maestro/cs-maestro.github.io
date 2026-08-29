export interface Coauthor {
  name: string;
  url: string;
}

export const coauthors: Coauthor[] = [
  { name: "Muhammad Danish", url: "/" },
  { name: "Afsah Anwar", url: "https://afsah.org" },
  { name: "Bhupendra Acharya", url: "https://www.bhupendraacharya.com" },
  { name: "David Pape", url: "https://cispa.de/en/people/c01dapa" },
  { name: "Muhammad Saad", url: "https://www.linkedin.com/in/muhmdsaad" },
  { name: "Lea Schönherr", url: "https://leaschoenherr.me" },
  { name: "Thorsten Holz", url: "https://www.mpi-sp.org/holz" },
  { name: "Enrique Sobrados", url: "https://esobrados.com" },
  { name: "Priya Kaushik", url: "https://www.cs.arizona.edu/person/priya-kaushik" },
  { name: "Sazzadur Rahaman", url: "https://www.sazzadur.com" },
  { name: "Abdullah Mueen", url: "https://www.cs.unm.edu/~mueen" },
  { name: "Jack Vanlyssel", url: "https://jackvanlyssel.com/" },
  { name: "Roya Ensafi", url: "https://ensa.fi/" },
];

export function coauthorUrl(name: string): string | undefined {
  return coauthors.find((c) => c.name === name)?.url;
}
