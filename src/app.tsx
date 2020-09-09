import React, { useState, useEffect, useRef, useReducer } from "react";
import "./style.scss";
import { list, Description } from "./data";
export default function() {
  const textareaEle = useRef(null);
  const [formula, setFormula] = useState("");

  const fn = (data: Description) => {
    // 清除
    if (data.name === "clear") {
      textareaEle.current.value = "";
      setFormula("");
      return;
    }
    // 回退删除
    if (data.name === "del") {
      const len = textareaEle.current.value.length;
      const value = textareaEle.current.value.substr(0, len - 1);

      textareaEle.current.value = value;
      setFormula(value);
      return;
    }
    // 百分符
    if (data.name === "percent") {
      const value = formula;
      const operReg = /[-+*/]/g;
      const numReg = /[-+*/](\d+\.\d+|\d+)/g;
      const arr = value.split("").reduce((t, cur, idx) => {
        if (operReg.test(cur)) {
          t.push(idx);
        }
        return t;
      }, []);
      const nums = value.match(numReg);
      const res = nums[nums.length - 1].replace(/\d+/, w => {
        return Number(w) * 0.01 + "";
      });
      const result = value.substr(0, arr[arr.length - 1]) + res;
      textareaEle.current.value += data.text;
      setFormula(result);
      return;
    }
    textareaEle.current.value += data.text;
    let temp = formula + data.text;
    if (data.operator) {
      temp = temp.replace(data.text, data.operator);
    }
    setFormula(temp);
    // 等于
    if (data.name === "equals") {
      const value = temp.replace(/=/, "");
      const calc = (str: string): any => eval(str);
      const result = calc(value);
      textareaEle.current.value += result;
    }
  };
  return (
    <div className="container">
      <textarea ref={textareaEle} rows={5} />
      <table cellPadding={0} cellSpacing={0}>
        <tbody>
          {list.map((list_item, index) => {
            return (
              <tr key={index}>
                {list_item.map((item, idx) => {
                  return (
                    <td
                      onClick={() => fn(item)}
                      key={idx}
                      rowSpan={item.rowSpan || 1}
                      style={
                        item.rowSpan
                          ? {
                              borderBottom: "1px solid #999"
                            }
                          : {}
                      }>
                      {item.text}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
