export type Description = {
  text: string;
  name?: string;
  type: string;
  operator?: string;
  rowSpan?: number;
};
export const list: Description[][] = [
  [
    {
      text: "c",
      name: "clear",
      type: "operator"
    },
    {
      text: "÷",
      name: "div",
      type: "operator",
      operator: "/"
    },
    {
      text: "x",
      name: "mul",
      type: "operator",
      operator: "*"
    },
    {
      text: "del",
      name: "del",
      type: "operator"
    }
  ],
  [
    {
      text: "7",
      type: "number"
    },
    {
      text: "8",
      type: "number"
    },
    {
      text: "9",
      type: "number"
    },
    {
      text: "-",
      name: "minus",
      type: "operator",
      operator: "-"
    }
  ],
  [
    {
      text: "4",
      type: "number"
    },
    {
      text: "5",
      type: "number"
    },
    {
      text: "6",
      type: "number"
    },
    {
      text: "+",
      name: "plus",
      type: "operator",
      operator: "+"
    }
  ],
  [
    {
      text: "1",
      type: "number"
    },
    {
      text: "2",
      type: "number"
    },
    {
      text: "3",
      type: "number"
    },
    {
      text: "=",
      name: "equals",
      type: "operator",
      rowSpan: 2
    }
  ],
  [
    {
      text: "%",
      type: "number",
      name: "percent"
    },
    {
      text: "0",
      type: "number"
    },
    {
      text: ".",
      type: "operator"
    }
  ]
];
