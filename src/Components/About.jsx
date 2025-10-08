import "./AboutStyle.css";


const About = () => {
  return (
    <div className="about-page">
      <div className="about-card">
        <h1>About</h1>
        <p className="about-text">
          Welcome to our <strong>Online Food Delivery System</strong> — where taste meets technology!
          We make ordering your favorite meals simple, fast, and enjoyable.
        </p>

        <h2>Developer Contact</h2>
        <a
          href="https://www.linkedin.com/in/sadman-al-sakib-417b8227a/"
          target="_blank"
          rel="noopener noreferrer"
          className="dev-link"
        >
          MD Sadman Al Sakib
        </a>

        <div className="contact-info">
          <p>Email: <span>saadman102002@gmail.com</span></p>
          <p>Call: <span>01615828990</span></p>
        </div>
      </div>
    </div>
  )
}

export default About
