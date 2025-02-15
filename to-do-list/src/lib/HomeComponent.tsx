"use client";
import Title from "@/components/Title";
import { useEffect, useState } from "react";
import Button from "@/components/button";
import "./home.css";

export default function HomeComponent() {
  const [response, setResponse] = useState<any>();
  const [newTask, setNewTask] = useState("");
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
        date: "2025-11-12",
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

  const addTask = () => {
    setNewTask("");
    addTaskList();
    setTrigger(!trigger);
  };
  
  useEffect(() => {
    getTaskList();
  }, [trigger]);

  return (
    <div className="w-[45vw] h-[90vh] border-2 m-auto mt-12 flex flex-col items-center justify-between">
      {/* TITLE */}
      <Title
        title="Today"
        className="text-[40px] font-semibold mt-10 w-full ml-20 h-1/3"
      />

      {/* TASKS */}
      <div className=" border-black w-full  overflow-y-auto">
        {response &&
          response.map((task: any, index: any) => {
            return (
              <div
                key={index}
                className="flex justify-between  text-black bg-[#F3EFEE] w-[38vw] mx-auto my-6 px-2 h-[56px] rounded-lg"
              >
                <div className="checkBoxs w-1/4">
                  <input type="checkbox" />
                </div>
                <div className="w-3/4  place-content-center">{task.task}</div>
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
