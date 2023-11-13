import githubPic from "public/icons8-github.svg";
import linkedinPic from "public/icons8-linkedin.svg";
import profilePic from "public/profile.png";

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
  about: {
    title: "I'm a 4th year undergraduate student at UC San Diego",
    description: "I love learning new tools/skills!!!",
  },
  colorPalette: {
    blue: "#1685a9",
    green: "#16a951",
    red: "#9d2933",
    yellow: "#ffc64b",
    white: "#fffbf0",
  },
  projects: [
    {
      title: "3D Virtual Assistant",
      thumbnail:
        "https://camo.githubusercontent.com/42f540f894c80b45b7d359ea5dacc8119cfe994c4024b551e5ff0a3598dea3af/687474703a2f2f696d672e796f75747562652e636f6d2f76692f6b7639514d2d534f44494d2f6d617872657364656661756c742e6a7067",
      link: "https://github.com/zslrmhb/Omniverse-Virtual-Assisstant",
    },

    {
      title: "i-Note-It",
      thumbnail:
        "https://github.com/zslrmhb/i-Note-It/raw/main/assets/logo.png",
      link: "https://github.com/zslrmhb/i-Note-It",
    },
    {
      title: "TR_CV_2023",
      thumbnail:
        "https://tritonrobotics.ucsd.edu/wp-content/uploads/2023/10/inf-min-1-2048x1365.jpeg",
      link: "https://github.com/zslrmhb/TRCV_2023",
    },
    {
      title: "Kun Classfier",
      thumbnail:
        "https://github.com/zslrmhb/Kun_Classifier/raw/main/Assets/kun.jpg",
      link: "https://github.com/zslrmhb/Kun_Classifier",
    },
    {
      title: "Kun Scraper",
      thumbnail:
        "https://github.com/zslrmhb/Kun_Classifier/raw/main/Assets/zhiyin.jpg",
      link: "https://github.com/zslrmhb/Kun_Scraper",
    },
    {
      title: "ROS Tutorial",
      thumbnail:
        "https://tritonrobotics.ucsd.edu/wp-content/uploads/2023/10/Screenshot-2023-10-07-at-11.19.50-AM-2048x1351.png",
      link: "https://github.com/zslrmhb/ROS_Tutorial",
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
