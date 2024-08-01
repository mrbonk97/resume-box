import { ResumeList } from "./_components/resume-list";

const DashBoardPage = () => {
  return (
    <>
      <section>
        <h2 className="text-3xl font-medium">대시보드</h2>
      </section>
      <section className="mt-5 h-full p-2">
        <h3 className="pt-1 pb-4 pl-4 font-medium">이력서 목록</h3>
        <ResumeList />
      </section>
    </>
  );
};

export default DashBoardPage;
