import { ReactElement } from "react";

export default function Index() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex flex-col gap-4">
        <div className="bg-slate-800 p-4 rounded-xl">
          Take a look at my projects {"->"}
        </div>
      </div>
      <div className="bg-slate-800 p-4 rounded-xl max-w-80">
        <h2 className="text-2xl text-amber-200 font-semibold">Profile</h2>
        <p>
          Joshua Kellogg is a full-stack web developer from Denver, Colorado.
        </p>
      </div>
    </div>
  );
}
