import React, { useState } from "react";

const App = () => {
  const [Title, setTitle] = useState("");
  const [Notes, setNotes] = useState("");
  const [Tasks, setTasks] = useState([]);

  function SubmitForm() {
    console.log("Task Added", { Heading: Title, List: Notes });

    let newTask = [...Tasks];
    newTask.push({ Heading: Title, List: Notes });
    setTasks(newTask);

    console.log(Tasks);

    setTitle("");
    setNotes("");
  }

  return (
    <>
      <section className="lg:flex items-center justify-items-center h-screen">
        {/* Submit Form UI */}
        <div className="lg:w-1/2 h-screen flex items-center justify-center p-4">
          <div className="bg-black/70 max-w-sm w-full p-2 rounded-3xl shadow-2xl">
            <form
              className="bg-black text-white rounded-2xl p-6 w-full"
              onSubmit={(e) => {
                e.preventDefault();
                SubmitForm();
              }}
            >
              <h1 className="text-center text-4xl font-bold my-1">
                Add Your Task
              </h1>

              <input
                type="text"
                className="w-full px-4 py-2 bg-[#222] rounded-md my-2 text-white font-semibold outline-none focus:ring-2 focus:ring-white"
                placeholder="Heading"
                value={Title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />

              <textarea
                rows={8}
                className="w-full px-4 py-2 bg-[#222] rounded-md my-2 text-white outline-none focus:ring-2 focus:ring-white"
                placeholder="Notes"
                value={Notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
              ></textarea>

              <input
                type="submit"
                value="Add Task"
                className="w-full bg-white text-black rounded-md font-semibold px-4 py-2 my-2 active:scale-95 active:bg-white/50 active:text-white"
              />
            </form>
          </div>
        </div>

        {/* UI for Notes */}
        <div className="lg:w-1/2 h-screen lg:border-l-4 border-dashed border-black max-lg:border-t-4 bg-gray-300 flex flex-wrap items-center p-4 gap-6 overflow-auto">
          {Tasks.map((task, id) => {
            return (
              <div
                className="w-full max-w-72 h-72 bg-white rounded-4xl shadow-2xl flex items-end justify-center p-2 relative m-3"
                key={id}
              >
                <img
                  src="./R.png"
                  alt="pin image"
                  class="w-20 h-15 absolute z-10 top-1"
                />
                <div className="w-full h-56 bg-orange-200 rounded-4xl">
                  <h1 className="text-5xl font-bold">{id + 1}</h1>
                  <h1 className="text-5xl font-semibold text-center  my-1">
                    {task.Heading}
                  </h1>
                  <p className="text-gray-400 font-medium text-xl m-2">
                    {task.List}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default App;
