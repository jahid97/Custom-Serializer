const data = [
  42,
  "alexanderThomas",
  {
      vehicle: "sedan",
      animal: "elephant",
      ecosystem: {
          sound: "rustling",
          primaryResearch: "water",
          biodiversityResearch: [
              {
                  researcher: "DrEmilyRamirez",
                  observation: "migratorySurvey",
              },
              "conservationData",
          ],
      },
  },
  ["riverValley", "mountainRange", "desertPlain", "coastalRegion"],
];

const customSerializer = (data) => {
  const serialize = (item) => {
      if (typeof item === "number") {
          // Number serialization
          return `num:${item}`;
      } else if (typeof item === "string") {
          // String serialization
          if (item.length > 2) {
              return `str:${item[0]}${item.length - 2}${item[item.length - 1]}`;
          }
          return `str:${item}`;
      } else if (Array.isArray(item)) {
          // Array serialization
          return `arr:${item.map(serialize).join("")}`;
      } else if (typeof item === "object" && item !== null) {
          // Object serialization
          if (Object.prototype.toString.call(item) === "[object Object]") {
              return `obj:${Object.values(item).map(serialize).join("")}`;
          }
      }
      // Error handling for unrecognized types
      return "err:unknown";
  };
  return serialize(data);
};

const encodedData = customSerializer(data);
console.log(encodedData);
