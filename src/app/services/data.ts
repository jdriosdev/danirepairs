
export type ServiceType = {
    id: number;
    name: string;
    urlKey: string;
    description: string;
    image: string;
    seoText: string;
    title: string;
    price: string;
    show:Boolean

}

export const services: ServiceType[] = [
  {
    id: 1,
    name: "Skirting Board Installation",
    urlKey: "skirting-board-installation",
    description: "Professional installation and replacement of skirting boards to give your rooms a clean and finished look.",
    image: "/serviceMedia/skirting.jpg",
    seoText: "Skirting board installation services in Sydney. We install and replace skirting boards for homes, renovations, and repairs.",
    title: "Skirting Board Installation Sydney",
    price: "From $120",
    show: true
  },
  {
    id: 2,
    name: "Door Adjustments",
    urlKey: "door-adjustments",
    description: "Fix sticking or misaligned doors. We adjust hinges, frames, and ensure smooth opening and closing.",
    image: "/serviceMedia/door.jpg",
    seoText: "Door adjustment and repair services in Sydney. Fix doors that don't close properly or rub against the frame.",
    title: "Door Adjustment & Repair Sydney",
    price: "From $90",
    show: true
  },
  {
    id: 3,
    name: "Locks & Handles Installation",
    urlKey: "locks-&-handles-installation",
    description: "Installation and replacement of door locks, handles, and hardware for improved security and functionality.",
   image: "/serviceMedia/skirting.jpg",
    seoText: "Lock and door handle installation in Sydney. Improve your home's safety with professional hardware installation.",
    title: "Lock & Handle Installation Sydney",
    price: "From $80",
    show: true
  },
  {
    id: 4,
    name: "Frames & Architraves",
    urlKey: "frames-&-architraves",
    description: "Installation and repair of door frames and architraves to enhance the finish of your interior spaces.",
image: "/serviceMedia/door.jpg",
    seoText: "Architrave and door frame installation services in Sydney for homes, renovations, and repairs.",
    title: "Frames & Architraves Installation Sydney",
    price: "From $150",
    show: true
  },
  {
    id: 5,
    name: "Wall Patching & Painting",
    urlKey: "wall-patching-&-painting",
    description: "Repair holes, cracks, and damaged walls with professional patching and painting services.",
    image: "/serviceMedia/skirting.jpg",
    seoText: "Wall patching and painting handyman services in Sydney to restore damaged walls and surfaces.",
    title: "Wall Patching & Painting Sydney",
    price: "From $100",
    show: true
  },
  {
    id: 6,
    name: "Gyprock Repairs",
    urlKey: "gyprock-repairs",
    description: "Fix damaged plasterboard or drywall including cracks, dents, and holes for a smooth finish.",
image: "/serviceMedia/door.jpg",
    seoText: "Gyprock repair services in Sydney for damaged walls, ceilings, and plasterboard.",
    title: "Gyprock Repair Services Sydney",
    price: "From $120",
    show: true
  },
  {
    id: 7,
    name: "Polycarbonate Roof Sheets Installation",
    urlKey: "polycarbonate-roof-sheets-installation",
    description: "Installation or replacement of polycarbonate roofing sheets for patios, pergolas, and outdoor areas.",
    image: "/serviceMedia/skirting.jpg",
    seoText: "Polycarbonate roof sheet installation in Sydney for pergolas, patios, and outdoor spaces.",
    title: "Polycarbonate Roofing Installation Sydney",
    price: "From $200",
    show: true
  },
  {
    id: 8,
    name: "Silicone Sealing",
    urlKey: "silicone-sealing",
    description: "Professional silicone sealing for kitchens, bathrooms, sinks, and countertops to prevent water leaks.",
    image: "/serviceMedia/door.jpg",
    seoText: "Kitchen and bathroom silicone sealing services in Sydney to prevent leaks and improve hygiene.",
    title: "Kitchen & Bathroom Silicone Sealing Sydney",
    price: "From $70",
    show: true
  },
  {
    id: 9,
    name: "Furniture Assembly",
    urlKey: "furniture-assembly",
    description: "Fast and professional assembly of flat-pack furniture including IKEA wardrobes, beds, desks, and cabinets.",
    image: "/serviceMedia/skirting.jpg",
    seoText: "Furniture assembly services in Sydney including IKEA furniture, wardrobes, beds, and office desks.",
    title: "Furniture Assembly Services Sydney",
    price: "From $60",
    show: true
  }
];