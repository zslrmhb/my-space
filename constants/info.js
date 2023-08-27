const myInfo = {
  github: "https://github.com/zslrmhb",
  nameCN: ["繆", "鴻彬"],
  nameEN: ["Miao", "Hongbin"],
  email: "zslrmhb@gmail.com",
  linkedin: "https://www.linkedin.com/in/hongbinmiao/",
  colorPalette: {
    blue: "#1685a9",
    green: "#16a951",
    red: "#9d2933",
    yellow: "#ffc64b",
    white: "#fffbf0",
  },
  skillNodes: [
    {
      name: "Languages",
      value: 1 / 4,
      children: [
        {
          name: "Programming",
          value: 1 / 2,
          children: [
            { name: "C++", value: 1 / 3 },
            { name: "Python", value: 1 / 3 },
            { name: "Java", value: 1 / 3 },
          ],
        },
        {
          name: "Non-Programming",
          value: 1 / 2,
          children: [
            {
              name: "Chinese",
              value: 1 / 2,
              children: [
                { name: "Zhongshan Min", value: 1 / 3 },
                { name: "Cantonese", value: 1 / 3 },
                { name: "Mandarin", value: 1 / 3 },
              ],
            },
            { name: "English", value: 1 / 2 },
          ],
        },
      ],
    },

    {
      name: "Machine Learning",
      value: 1 / 4,
      children: [
        {
          name: "Deep Learning",
          value: 1 / 3,
          children: [
            { name: "Keras/Tensorflow", value: 1 / 2 },
            { name: "Pytorch", value: 1 / 2 },
          ],
        },
        {
          name: "Reinforcement Learning",
          value: 1 / 3,
          children: [
            { name: "Gymnasium", value: 1 / 2 },
            { name: "StableBaseline3", value: 1 / 2 },
          ],
        },
        {
          name: "Others",
          value: 1 / 3,
          children: [{ name: "Sklearn", value: 1 }],
        },
      ],
    },

    {
      name: "Data Science",
      value: 1 / 4,
      children: [
        { name: "Numpy", value: 1 / 4 },
        { name: "Pandas", value: 1 / 4 },
        { name: "Matplotlib", value: 1 / 4 },
        { name: "Plotly", value: 1 / 4 },
      ],
    },

    {
      name: "Operating Systems",
      value: 1 / 4,
      children: [
        { name: "Windows", value: 1 / 3 },
        { name: "MacOS", value: 1 / 3 },
        { name: "Linux", value: 1 / 3 },
      ],
    },
  ],
};

export default myInfo;
