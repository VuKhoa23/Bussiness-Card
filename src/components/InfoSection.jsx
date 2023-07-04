import profilePicture from "../assets/portfolio.jpg";

export default function Info() {
  return (
    <div id="info-section">
      <div id="img-container">
        <img id="profile-img" src={profilePicture} />
      </div>
      <div id="info-text">
        <h2>Vu Anh Khoa</h2>
        <h3>Software Engineer Student</h3>
      </div>
      <a
        id="website-direct"
        href="https://vukhoa23.github.io/My-Portfolio/"
        target="_blank"
      >
        Visit my website
      </a>
    </div>
  );
}
