import dynamic from "next/dynamic";
import myInfo from "../constants/info";

const topLevelCategoryColors = {
  "Languages": myInfo.colorPalette.blue,
  "Machine Learning": myInfo.colorPalette.green,
  "Data Science": myInfo.colorPalette.red,
  "Operating Systems": myInfo.colorPalette.yellow,
};

function getLevelOption() {
  return [
    {
      itemStyle: {
        borderWidth: 0,
        gapWidth: 0,
      },
      upperLabel: {
        show: false,
      },
      itemStyle: {
        borderWidth: 0,
        gapWidth: 0,
      },
      itemStyle: {
        borderWidth: 0,
        gapWidth: 30,
      },
    },
  ];
}
const ReactECharts = dynamic(() => import("echarts-for-react"), {
  ssr: false, // Disable server-side rendering for this component
});

export default function SkillGraphECharts({ childDimensions }) {
  const nodesData = myInfo.skillNodes;

  const applyColorsToNodes = node => {
    if (node.children) {
      if (topLevelCategoryColors[node.name]) {
        console.log(node.name);
        node.itemStyle = {
          color: topLevelCategoryColors[node.name],
        };
      }
      node.children.forEach(child => {
        applyColorsToNodes(child);
      });
    }
  };

  nodesData.forEach(node => applyColorsToNodes(node));

  const option = {
    series: [
      {
        name: "Skills",
        type: "treemap",
        data: nodesData,
        itemStyle: {
          borderColor: "#fff",
        },
        upperLabel: {
          show: true,
          height: 15,
        },
        levels: getLevelOption(),
      },
    ],
  };
  return (
    <ReactECharts
      option={option}
      style={{ width: "100%", height: "100%", position: "top" }}
    />
  );
}
