export const SkeletonCard = () => {
  return (
    <li className="p-5 pt-10 h-60 w-52 flex flex-col gap-5 items-center rounded-3xl shadow bg-slate-100">
      <div className="w-full flex justify-between animate-pulse">
        <div className="h-14 w-14 rounded-full bg-slate-200" />
        <div className="space-y-2">
          <div className="h-6 w-[5.5rem] rounded-lg bg-slate-200" />
          <div className="h-6 w-[5.5rem] rounded-lg bg-slate-200" />
        </div>
      </div>
      <div className="w-full h-full rounded-lg bg-slate-200 animate-pulse" />
    </li>
  );
};
