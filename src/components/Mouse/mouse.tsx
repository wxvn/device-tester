import useMouse from "./useMouse";

function Mouse({ size = 1}: {size?: number}) {

  const { pressed } = useMouse();

  return (
    <div className="w-fit rounded-2xl bg-white p-10 shadow-lg" style={{zoom: size}}>
      <div className="relative mx-auto h-80 w-48">
        <div className="h-full z-10 w-full overflow-hidden rounded-t-[3rem] rounded-b-[6rem] border-4">
          <div className="flex h-[42%] border-b-4">
            <div className={`flex-1 ${pressed[0] ? "bg-blue-500" : "bg-gray-300"}`}></div>
            <div className="flex w-8 items-end justify-center border-x-2">
              <div className={`mb-0.5 h-[50%] w-[80%] rounded-lg border-2 overflow-hidden flex flex-col ${pressed[1] ? "bg-blue-400" : "bg-gray-500"}`}>
                  <div className={`flex-1 ${pressed[5] ? "bg-blue-400" : ""}`}></div>
                  <div className={`flex-1 ${pressed[6] ? "bg-blue-400" : ""}`}></div>
              </div>
            </div>
            <div className={`flex-1 ${pressed[2] ? "bg-blue-500" : "bg-gray-300"}`}></div>
          </div>
        </div>

        <div className={`absolute -left-2.5 top-24 h-10 w-3 rounded-l-lg border-2 ${pressed[4] ? "bg-blue-500" : "bg-gray-300"}`}></div>
        <div className={`absolute -left-2.5 top-34 h-10 w-3 rounded-l-lg border-2 ${pressed[3] ? "bg-blue-500" : "bg-gray-300"}`}></div>
      </div>
    </div>
  );
}

export default Mouse;
