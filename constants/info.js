import githubPic from "public/assets/images/icons8-github.svg";
import linkedinPic from "public/assets/images/icons8-linkedin.svg";
import profilePic from "public/assets/images/profile.png";

const myInfo = {
  profilePic: profilePic,
  githubUsername: "zslrmhb",
  github: "https://github.com/zslrmhb",
  githubPic: githubPic,
  nameCN: ["繆", "鴻彬"],
  nameEN: ["Miao Hongbin"],
  email: "zslrmhb@gmail.com",
  linkedin: "https://www.linkedin.com/in/hongbinmiao/",
  linkedinPic: linkedinPic,
  about: {title: "I'm a 4th year undergraduate student at UC San Diego", description: "I love learning new tools/skills!!!"},
  colorPalette: {
    blue: "#1685a9",
    green: "#16a951",
    red: "#9d2933",
    yellow: "#ffc64b",
    white: "#fffbf0",
  },
  projects: [
    {
      name: "i-Note-It",
      thumbnail: "/../public/assets/images/i-note-it.png",
      description: "d",
    },
    {
      name: "Kun Analyzer",
      thumbnail: "/../public/assets/images/i-note-it.png",
      description: "d",
    },
    {
      name: "TRCV_2023",
      thumbnail: "/../public/assets/images/i-note-it.png",
      description: "d",
    },
    {
      name: "Omniverse Virtual Assistant",
      thumbnail: "/../public/assets/images/i-note-it.png",
      description: "d",
    },
    {
      name: "Kun Classfier",
      thumbnail: "/../public/assets/images/i-note-it.png",
      description: "d",
    },
    {
      name: "Fake News Detection",
      thumbnail: "/../public/assets/images/i-note-it.png",
      description: "d",
    },
    {
      name: "Beer Rating Prediction",
      thumbnail: "/../public/assets/images/i-note-it.png",
      description: "d",
    },
  ],
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
