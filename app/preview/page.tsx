import Image from "next/image";

const Page = () => {
  return (
    <main className="bg-neutral-400 flex justify-center font-medium">
      <div className="page bg-white px-10 pt-10">
        <section className="flex justify-between">
          <div>
            <h1 className="text-4xl font-bold">김현석</h1>
            <div>
              <hgroup className="mt-5">
                <h3 className="text-sm">이메일: hyunsuk1997@naver.com</h3>
                <h3 className="text-sm">연락처: 010-8433-3792</h3>
                <p className="mt-5 text-sm">
                  안녕하세요 신입 프론트엔드 개발자입니다.
                  <br />
                  Nextjs와 Spring Boot를 주력으로 개발하고 있습니다.
                </p>
              </hgroup>
            </div>
          </div>
          <Image
            src={"/profile2.jpg"}
            width={160}
            height={100}
            alt="porfile"
            className="h-full mr-5"
          />
        </section>

        <div className="w-full h-0.5 bg-neutral-700 rounded-full my-10" />

        <section className="flex gap-5">
          <h2 className="text-lg text-neutral-800 w-32">경력</h2>
          <div className="w-full">
            <article className="w-full">
              <div className="w-full flex justify-between">
                <h3 className="text-3xl">한전KDN</h3>
                <span className="text-md flex items-center ">
                  2022.12 - 2024.02
                </span>
              </div>
              <span className="text-sm text-neutral-600">
                원전ERP고도화TF/사원
              </span>

              <ul className="ml-10 mt-10">
                <li>
                  <div className="w-full flex">
                    <h4>한수원 경영ERP고도화 프로젝트</h4>
                    <span className="ml-5 text-sm flex font-normal items-center">
                      2023.01 - 2024.02
                    </span>
                  </div>
                  <p className="text-sm text-neutral-700 mt-2">
                    프로젝트 사업관리 및 단위업무시스템 고도화
                  </p>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <div className="w-full h-0.5 bg-neutral-700 rounded-full my-10" />

        <section className="flex gap-5">
          <h2 className="text-lg text-neutral-800 w-32">학력</h2>
          <div className="w-full space-y-10">
            <article className="w-full">
              <div className="w-full flex justify-between">
                <h3 className="text-2xl">한국폴리텍 광명융합교육원</h3>
                <span className="text-md flex items-center ">
                  2024.03 - 진행중
                </span>
              </div>
              <span className="text-sm text-neutral-600">데이터분석과</span>
            </article>
            <article className="w-full">
              <div className="w-full flex justify-between">
                <h3 className="text-2xl">전남대학교</h3>
                <span className="text-md flex items-center ">
                  2016.03 - 2023.02
                </span>
              </div>
              <span className="text-sm text-neutral-600">
                컴퓨터정보통신공학과
              </span>
            </article>
          </div>
        </section>

        <div className="w-full h-0.5 bg-neutral-700 rounded-full my-10" />

        <section className="flex gap-5">
          <h2 className="text-lg text-neutral-800 w-32">수상 및 기타</h2>
          <div className="w-full space-y-10">
            <article className="w-full">
              <div className="w-full flex justify-between">
                <h3 className="text-2xl">공학 심포지움 학술 경진대회</h3>
                <span className="text-md flex items-center ">2022.06</span>
              </div>
              <span className="text-sm text-neutral-600">
                AI/Iot 부문 장려상
              </span>
            </article>
            <article className="w-full">
              <div className="w-full flex justify-between">
                <h3 className="text-2xl">프로그래밍 기초역량 경진대회</h3>
                <span className="text-md flex items-center ">2021.01</span>
              </div>
              <span className="text-sm text-neutral-600">
                웹 포트폴리오 부문 은상
              </span>
            </article>
          </div>
        </section>

        <div className="w-full h-0.5 bg-neutral-700 rounded-full my-10" />

        <section className="flex gap-5">
          <h2 className="text-lg text-neutral-800 w-32">외국어</h2>
          <div className="w-full space-y-10">
            <article className="w-full">
              <h3 className="text-2xl">영어</h3>
              <ul className="ml-10 mt-5">
                <li>
                  <span className="inline-block">TOEIC</span>
                  <span className="ml-1 font-semibold">: 935</span>
                </li>
                <li>
                  <span className="inline-block">TOEIC SPEAKING</span>
                  <span className="ml-1 font-semibold">: IH</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <div className="w-full h-0.5 bg-neutral-700 rounded-full my-10" />

        <section className="flex gap-5">
          <h2 className="text-lg text-neutral-800 w-32">자격증</h2>
          <div className="w-full space-y-10">
            <article className="w-full">
              <ul className="space-y-5">
                <li className="text-2xl">정보처리기사</li>
                <li className="text-2xl">SQLD</li>
              </ul>
            </article>
          </div>
        </section>

        <div className="w-full h-0.5 bg-neutral-700 rounded-full my-10" />

        <section className="flex gap-5">
          <h2 className="text-lg text-neutral-800 w-32">링크</h2>
          <div className="w-full">
            <ul className="list-none2 space-y-5">
              <li className="list-none2">
                <a
                  className="mb-1 cursor-pointer"
                  href="https://mrbonk97.github.io"
                >
                  https://mrbonk97.github.io
                </a>
                <h4 className="text-neutral-600">홈페이지</h4>
              </li>
              <li className="list-none2">
                <a
                  className="mb-1 cursor-pointer"
                  href="https://github.com/mrbonk97"
                >
                  https://github.com/mrbonk97
                </a>
                <h4 className="text-neutral-600">깃허브</h4>
              </li>
            </ul>
          </div>
        </section>

        <div className="w-full h-0.5 bg-neutral-700 rounded-full my-10" />

        <section className="">
          <div className="flex gap-5">
            <h2 className="text-lg text-neutral-800 w-32">자기소개서</h2>
            <h3 className="mt-10 font-medium text-xl">
              다른 곳이 아닌, 힐링페이퍼의 개발자이고자 합니다.
            </h3>
          </div>

          <p className="mt-7 font-normal text-md px-10 leading-7">
            &nbsp;&nbsp;저는 경제적 보상만을 좇는 삶이 아닌, '전문가로서의
            성장'이라는 가치관을 진정 으로 추구하는 삶을 살고자 개발자라는
            진로를 택했습니다. 매일의 업무가 단순한 '급여의 대가'일 뿐이라면
            이는 너무 허무하다고 생각합니다. 제가 하는 일을 통해 매일 새로운
            지식을 쌓아나가고, 업무를 성장의 자양분으로 삼는 삶을 사는 것이 저의
            이상향입니다.
          </p>

          <p className="mt-7 font-normal text-md px-10 leading-7">
            일하며 성장하는 삶을 소명으로 삼아 전문성을 키워나가기 위해서는 그에
            걸맞은 성장의 기회가 주어져야 한다고 생각합니다. 저는 힐링페이퍼에서
            제가 속한 전문분야의 다양하고 복잡한 사건들을 지속적으로 접하며
            이러한 '성장의 기회'를 누리고 싶습니다.
          </p>

          <p className="mt-7 font-normal text-md px-10 leading-7">
            그렇기에 저는 힐링페이퍼 프론트엔드 개발자 채용 공고에 지원했습니다.
            강남언니가 국내 최고의 의료 서비스를 제공 앱이라는 사실을 넘어,
            힐링페이퍼의 구성원이 된다면 그 성과의 배후에 있는 수많은 프로젝트를
            맡아 일할 기회를 누릴 수 있음을 알게 되었기 때문입니다.
          </p>

          <p className="mt-7 font-normal text-md px-10 leading-7">
            나아가, 저의 업무를 통해 세상을 변화시킬 수 있다는 점 또한 제가
            힐링페이퍼의 개발자가 되기를 소망하는 이유입니다. 국내 의료 서비스를
            개선하고 세상을 바꾸어 나간다는 자부심을 느낄 수 있는 기업,
            힐링페이퍼의 개발자가 되고 싶습니다.
          </p>

          <h4 className="mt-10 font-medium text-md px-10">
            저는 실질적 개발 능력을 갖춘 사람입니다.
          </h4>

          <p className="mt-7 font-normal text-md px-10 leading-7">
            &nbsp;&nbsp;저는 한국수력원자력 ERP고도화 프로젝트에 참여하며 실무
            경험을 쌓았습니다. 2023년 1월부터 2024년 2월까지 약 1년이 넘는
            기간동안 개발 및 사업관리 업무를 수행했고, 이 과정에서 실제
            프로젝트의 방식에 대해 배울 수 있었습니다.
          </p>

          <p className="mt-7 font-normal text-md px-10 leading-7">
            단위업무시스템 중 BSC 성과지표이라는 레거시 시스템 고도화를 맡았고,
            ㅁㄴㅇㅁㄴㅇ 했습니다. 특히 개발 과정에서
          </p>

          <p className="mt-7 font-normal text-md px-10 leading-7">
            사업관리 업무 역시 저에게 큰 강점이 되어주었습니다. 아시다시피
            서비스 구현에 있어서 프로그래밍은 하나의 단계에 불과합니다. 하지만
            많은 주니어 개발자는 프로그래밍에 매몰되어 나머지 단계의 중요성을
            잊기 마련입니다. 그에 반면 저는 대규모 프로젝트의 WBS를 작성을
            보조하고, CPM 기법으로 일정을 점검하는 업무를 수행하였습니다. 또한,
            공정회의의 회의록 작성을 맡으며 프로젝트가 직면하는 다양한 문제들에
            대해서 배울 기회가 되어주었습니다. 저의 이런 경험은 앞으로의 개발
            생활에 큰 도움이 되어 줄 것으로 생각합니다. 프로젝트 수행에 있어서
            앞으로 어떤 단계가 남았는지 알기에 더욱 능동적으로 업무를 수행할 수
            있고, 일손이 부족한 영역에 적극적으로 지원할 수 있기 때문입니다.
          </p>

          <h4 className="mt-10 font-medium text-md px-10">
            저는 누구나 함께 일하고 싶은 긍정적인 태도를 지닌 사람입니다.
          </h4>
          <p className="mt-7 font-normal text-md px-10 leading-7">
            &nbsp;&nbsp;제가 타고난 낙천적인 성격은 역경을 마주해서도 "그래 뭐,
            다시 하면 되지"라며 일어나 노력을 지속할 수 있는 원동력입니다. 그로
            인해 일상의 업무에서 스트레스를 거의 받지 않고, 예외적으로 큰 역경을
            만나 스트레스를 받더라도 금방 원상태로 회복 하는 탄력성을 가진 것이
            제 장점입니다. 그리고 타고난 낙천성과 무던함이라는 성격은 제가
            개발자로서 성공하는데 좋은 무기가 될 수 있다고 생각합니다. 지속적인
            스트레스는 강한 사람도 닳고 마모되게 만들지만, 유연하고 무던한
            성격을 가진 사람은 고된 일상에 쉽게 소진되지 않기 때문입니다. 이처럼
            제 성격적 특성은 한결같은 회복 탄력성을 유지하며 매사에 긍정적으로
            임할 수 있는 원천입니다.
          </p>

          <p className="mt-7 font-normal text-md px-10 leading-7">
            나아가 각종 조직의 운영진으로서 일할 때도 무던한 성격이 큰 힘이
            되었습니다. 제가 생각하는 팀워크란 '조직의 안녕을 위해 봉사하는
            것'이고, 이를 위해서는 전체 조 직을 위해 약간의 희생을 감내하는
            태도가 필요하다고 생각합니다. 타고난 무던한 성격은 '내가 조금
            희생해도 괜찮다'는 긍정적인 태도로 이어졌습니다. 이를 통해 팀원들을
            감화시키며 조직의 업무를 성공적으로 이끌어 왔습니다.
          </p>

          <p className="mt-7 font-normal text-md px-10 leading-7">
            대학생 때 교내 밴드부에서 부장 역할을 맡아 일했습니다. 특히 2021년
            겨울, 다른 5인의 운영진과 함께 대학교 연합 공연을 주최하며 팀원들을
            지원하는 경험을 했습니다. 당시 행사 준비를 위해 11월 중순부터 바쁜
            계획이 마련되었으나 동료 중 일부는 교내 실습, 계절학기 등이 겹쳐
            어려움을 겪었습니다. 그래서 저는 일손이 부족한 영역에 자발적으로
            기여하며 동료들을 지원했습니다. 운영진으로서 담당한 고유 업무 외에도
            팀원의 일을 제 일처럼 여겨 맡았습니다. 도움을 받은 동료들은 고맙다고
            인사하며 공연 준비에 더욱 열정적으로 참여했고, 결국 제 작은 희생을
            바탕으로 조직의 업무가 매끄럽게 진행되는 것을 목격할 수 있었습니다.
          </p>

          <p className="mt-7 font-normal text-md px-10 leading-7">
            저는 매일의 스트레스를 성장의 발판으로 승화시키는 태도를 가진
            사람입니다. 나아가 조직의 이익을 위해 자신을 희생하며 동료들을
            지원하는 보람을 마음에 새긴 사람이기도 합니다. 긍정적인 태도와
            팀워크 정신을 바탕으로 누구나 함께 일하고 싶은 힐링페이퍼의 구성원이
            되겠습니다. 이러한 성격적 특성 역시 제가 개발자로서 힐링페이퍼에
            고유하게 기여할 수 있는 부분이라고 생각합니다.
          </p>

          <h4 className="mt-10 font-medium text-md px-10">마치며</h4>
          <p className="mt-7 font-normal text-md px-10 leading-7">
            &nbsp;&nbsp;지금까지 제가 개발자, 그중에서도 힐링페이퍼에서 일하는
            것을 희망하는 이유와 제가 발휘할 수 있는 강점에 대해 말씀드렸습니다.
            나아가 자기소개서에서 채 드러나지 못한 저의 역량들은 이번 채용을
            통해 직접 보여드리고 싶습니다. 저는 힐링페이퍼에 어울리는 인재가
            되기 위해 매일 철저하고 성실히 준비하여 학업에 임할 것입니다. 제
            잠재력과 진심을 높게 평가해 제게 기회를 주신다면 그에 부응하는
            성과를 보이기 위해 최선을 다하겠습니다. 감사합니다.
          </p>
        </section>
      </div>
    </main>
  );
};
export default Page;
