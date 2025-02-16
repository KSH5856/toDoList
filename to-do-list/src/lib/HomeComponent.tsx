"use client";
import Title from "@/components/Title";
import { useEffect, useState } from "react";
import Button from "@/components/button";
import "./home.css";

export default function HomeComponent() {
  const [response, setResponse] = useState<any>();
  const [newTask, setNewTask] = useState("");
  const [dateChange, setDateChange] = useState<Date>();
  const [trigger, setTrigger] = useState(false);

  const getTaskList = async () => {
    await fetch("http://localhost:8080/getList")
      .then((res: any) => {
        return res.json();
      })
      .then((res: any) => {
        setResponse(res);
      })
      .catch((res: any) => {
        console.error(res);
      });
  };

  const addTaskList = async () => {
    await fetch("http://localhost:8080/addTask", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: newTask,
        isCompleted: false,
        date: `${dateChange?.getFullYear()}-${dateChange?.getMonth()}-${dateChange?.getDate()}`,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((res) => {
        console.error(res);
      });
  };

  const captureChange = (e: any) => {
    setNewTask(e.target.value);
  };

  const addTask = async () => {
    setNewTask("");
    await addTaskList();
    setTrigger(!trigger);
  };

  const captureDateChange = (dte: any) => {
    const newDate = new Date(dte.year, dte.month, dte.date);
    setDateChange(newDate);
  };

  const weekObj: any = {
    0: "SUN",
    1: "MON",
    2: "TUE",
    3: "WED",
    4: "THUR",
    5: "FRI",
    6: "SAT",
  };

  const datearray = [];
  for (let index = -3; index <= 3; index++) {
    const dte = new Date();
    dte.setDate(dte.getDate() + index);
    const dteObj = {
      fullDate: dte.toDateString(),
      date: dte.getDate(),
      week: weekObj[dte.getDay()],
      month: dte.getMonth(),
      year: dte.getFullYear(),
    };
    datearray.push(dteObj);
  };

  useEffect(() => {
    getTaskList();
  }, [trigger]);

  return (
    <div className="w-[40vw] h-[90vh] rounded-lg border-2 m-auto mt-12 flex flex-col items-center">
      {/* TITLE */}
      <Title
        title="Today"
        className="text-[40px] font-semibold my-10 w-full ml-20 "
      />

      {/* DATE */}
      <div className="flex mb-7">
        {datearray.map((dte: any, index) => {
          const classNames =
            dateChange?.toDateString() === dte.fullDate
              ? "bg-[#E6D9CB] cursor-pointer flex flex-col h-[70px] w-[60px]  rounded-md border-2 mx-2 gap-2 text-center place-content-center"
              : "cursor-pointer flex flex-col h-[70px] w-[60px]  rounded-md border-2 mx-2 gap-2 text-center place-content-center";
          return (
            <div
              key={index}
              onClick={() => captureDateChange(dte)}
              className={`${classNames} hover:bg-[#f5efe9]`}
            >
              <span>{dte.week}</span>
              <span>{dte.date}</span>
            </div>
          );
        })}
      </div>

      {/* TASKS */}
      <div className=" border-black w-full h-96 overflow-y-auto">
        {response &&
          response.map((task: any, index: any) => {
            return (
              <div
                key={index}
                className="flex justify-between text-black bg-[#F3EFEE] w-[30vw] mx-auto my-6 px-2 h-[56px] rounded-lg"
              >
                <div className="checkBoxs w-1/4">
                  <input type="checkbox" />
                </div>
                <div className="w-3/4 place-content-center">{task.task}</div>
              </div>
            );
          })}
      </div>

      {/* ADD BUTTON */}
      <div className="add-task flex mt-10 h-[56px]">
        <input
          type="text"
          value={newTask}
          onChange={(e) => {
            captureChange(e);
          }}
          placeholder="Write a task.."
        />
        <Button
          title="Add"
          className="text-white bg-black p-3 
        rounded-md"
          onClick={() => {
            addTask();
          }}
        />
      </div>
    </div>
  );
}
