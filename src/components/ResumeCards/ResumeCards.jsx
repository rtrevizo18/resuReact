import "./ResumeCards.css";

function PlusSvg({ svgSize }) {
  return (
    <svg
      className="bi bi-plus"
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize}
      height={svgSize}
    >
      <path d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4" />
    </svg>
  );
}

function ThreeDotSvg({ svgSize }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize}
      height={svgSize}
      fill="currentColor"
      className="bi bi-three-dots-vertical"
      viewBox="0 0 16 16"
    >
      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </svg>
  );
}

function EmptyCard() {
  return (
    <div className="resume-card empty">
      <div>Add new</div>
      <PlusSvg svgSize={64} />
    </div>
  );
}

function modifyDateString(dateString) {
  const month = dateString.slice(4, 7);
  const day = dateString.slice(8, 10);
  const year = dateString.slice(11);

  const formatDay = day[0] === "0" ? day.slice(1) : day; // Remove leading zero if present

  return `${month} ${formatDay}, ${year}`;
}

function FilledCard({ title = "Resume Name", date = new Date() }) {
  const dateString = modifyDateString(date.toDateString());
  return (
    <div className="resume-card">
      <div className="resume-image"></div>
      <div className="resume-content">
        <div className="resume-title">
          <div className="resume-title-text">{title}</div>
          <button className="resume-settings-button">
            <ThreeDotSvg svgSize={20} />
          </button>
        </div>
        <div className="resume-desc">
          <div className="resume-desc-sub">Modified {dateString}</div>
        </div>
      </div>
    </div>
  );
}

export default function ResumeCards() {
  return (
    <div className="resumes">
      <EmptyCard />
      <FilledCard />
      <FilledCard />
      <FilledCard />
      <FilledCard />
      <FilledCard />
      <FilledCard />
      <FilledCard />
      <FilledCard />
      <FilledCard />
      <FilledCard />
    </div>
  );
}
