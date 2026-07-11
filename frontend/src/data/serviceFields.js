const serviceFields = {
  "tv-repair": [
    {
      label: "TV Brand",
      name: "brand",
      type: "text",
      placeholder: "Samsung, LG, Sony",
    },
    {
      label: "TV Model",
      name: "model",
      type: "text",
      placeholder: "UA43...",
    },
    {
      label: "Problem",
      name: "problem",
      type: "textarea",
      placeholder: "Describe the issue",
    },
  ],

  "ac-repair": [
    {
      label: "AC Brand",
      name: "brand",
      type: "text",
      placeholder: "Daikin, LG, Voltas",
    },
    {
      label: "Capacity",
      name: "capacity",
      type: "select",
      options: ["1 Ton", "1.5 Ton", "2 Ton"],
    },
    {
      label: "Problem",
      name: "problem",
      type: "textarea",
      placeholder: "Cooling issue, Gas leak...",
    },
  ],

  plumber: [
    {
      label: "Problem Type",
      name: "problemType",
      type: "select",
      options: [
        "Leakage",
        "Tap Repair",
        "Bathroom",
        "Kitchen",
        "Pipeline",
      ],
    },
    {
      label: "Description",
      name: "problem",
      type: "textarea",
      placeholder: "Explain your plumbing issue",
    },
  ],

  "car-mechanic": [
    {
      label: "Car Company",
      name: "company",
      type: "text",
      placeholder: "Hyundai, Tata, Honda",
    },
    {
      label: "Car Model",
      name: "model",
      type: "text",
      placeholder: "Creta, Nexon...",
    },
    {
      label: "Problem",
      name: "problem",
      type: "textarea",
      placeholder: "Describe the issue",
    },
  ],

  "bike-mechanic": [
    {
      label: "Bike Company",
      name: "company",
      type: "text",
      placeholder: "Honda, Yamaha, KTM",
    },
    {
      label: "Bike Model",
      name: "model",
      type: "text",
      placeholder: "Activa, Duke...",
    },
    {
      label: "Problem",
      name: "problem",
      type: "textarea",
      placeholder: "Describe the issue",
    },
  ],

  default: [
    {
      label: "Description",
      name: "problem",
      type: "textarea",
      placeholder: "Describe your requirement",
    },
  ],
};

export default serviceFields;