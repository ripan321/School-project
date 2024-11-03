import React, { useState } from "react";
import "./Hero.css";
import logo2 from "../image/education (1).png";
import logo3 from "../image/student.png";
import clss from "../image/clss.jpg";
import clss2 from "../image/clss2.jpg";
import clss3 from "../image/clss3.jpg";
import card from "../cards.json";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";

export default function Hero() {
  const [counter, setcounter] = useState(false);

  const Cards = ({ icon, title, content, index }) => (
    <div className="Schemes">
      <div className="s-img">
        <img src={icon} alt="star Img" />
      </div>

      <div className="s-card">
        <div className="s-card-ti">{title}</div>
        <div className="s-card-con">{content}</div>
      </div>
    </div>
  );

  return (
    <>
      <div className="hero" id="Home">
        <div className="hero-left">
          <div className="left-main">
            <div className="left-1st">
              <img src={logo2} className="App-logo1" alt="logo1" />
              <div> Your Kids Deserve the best Education.</div>
            </div>
            <div className="left-2nd">
              <div>
                Jatiya <br /> <span className="text-bg">Bidyalaya</span>,Boko
              </div>
            </div>
            <div className="left-3rd">
              <p>
                Our School boasts exceptional teachers who impart knowledge with
                passion and dedication. Their engaging and interactive teaching
                style fosters a deep understanding of the subject.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={logo3} className="App-logo3" alt="logo1" />
          {/* 
          <div className="absolute z-[0] w-[60%] h-[65%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

          <div className="fst-bg" />
          <div className="snd-bg" />
          <div className="trd-bg" /> */}
        </div>
      </div>

      <div id="About" className="s-count">
        <div className="s-con">
          {" "}
          <ScrollTrigger
            onEnter={() => setcounter(true)}
            onExit={() => setcounter(false)}
          >
            <span className="s-num">
              {" "}
              {counter && (
                <CountUp start={60} end={120} duration={10} delay={0} />
              )}
              +
            </span>{" "}
          </ScrollTrigger>
          <span className="text-bg">PRESENT STUDENTS</span>
        </div>
        <div className="s-con">
          <ScrollTrigger
            onEnter={() => setcounter(true)}
            onExit={() => setcounter(false)}
          >
            <span className="s-num">
              {" "}
              {counter && (
                <CountUp start={50} end={75} duration={10} delay={0} />
              )}
              %
            </span>{" "}
          </ScrollTrigger>
          {/* <span className="s-num">75%</span>{" "} */}
          <span className="text-bg">AVERAGE PERCENTAGE</span>
        </div>
        <div className="s-con">
          <ScrollTrigger
            onEnter={() => setcounter(true)}
            onExit={() => setcounter(false)}
          >
            <span className="s-num">
              {" "}
              {counter && (
                <CountUp start={599} end={999} duration={10} delay={0} />
              )}
              +
            </span>{" "}
          </ScrollTrigger>
          {/* <span className="s-num">999+</span>{" "} */}
          <span className="text-bg">TOTAL PASSOUT PTUDENTS</span>
        </div>
      </div>

      <div className="w-join">
        <div className="w-join-left">
          <div className="w-join-left-1st">
            Are you seeking the best Knowledge available? <br /> Would you like
            to join us?
          </div>
          <div className="w-join-left-2nd">
            <p>
              One right decision can be a life-changing moment. Education stands
              as the cornerstone of our lives, and selecting the optimal
              environment and college to acquire the finest knowledge is of
              paramount importance. Choose wisely to embark on a path of
              excellence.
            </p>
          </div>
          <div className="w-join-left-3rd">
            <button className="main-butt">Get Joined</button>
          </div>
        </div>

        <div className="w-join-right">
          {card.map((card, index) => (
            <Cards key={card.id} {...card} index={index} />
          ))}
        </div>
      </div>

      <div id="Course" className="subject">
        <div className="cs-name text-bg">Our Course</div>

        <div className="sub">
          <Link to="/class" className="link">
            <div className="sub-card">
              <div>
                <img src={clss} className="sub-img" alt="class" />
              </div>
              <div className="sub-card-name text-bg">
                {" "}
                <strong>Class</strong>{" "}
              </div>
              <div className="sub-card-de">
                {" "}
                <p>
                  Our school offers high-quality teaching in all subjects from
                  classes 1 to 10.
                </p>{" "}
              </div>
            </div>
          </Link>

          <Link to="/computer" className="link">
            <div className="sub-card">
              <div>
                <img src={clss2} className="sub-img" alt="class" />
              </div>
              <div className="sub-card-name text-bg">
                <strong>Computer Course</strong>{" "}
              </div>
              <div className="sub-card-de">
                {" "}
                <p>
                  Our school provides comprehensive computer courses, covering
                  basic to advanced levels.
                </p>{" "}
              </div>
            </div>
          </Link>
          <div className="sub-card">
            <div>
              <img src={clss3} className="sub-img" alt="class" />
            </div>
            <div className="sub-card-name text-bg">
              {" "}
              <strong>Practical</strong>{" "}
            </div>
            <div className="sub-card-de">
              {" "}
              <p>
                At our school, we emphasize practical teaching methods to ensure
                students have a better understanding of the subjects.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="vision-misson">
        <div className="vision">
          <div className="vm-name text-bg">Our Vision</div>
          <div className="vm-p">
            <p>
              Our vision is to pioneer excellence in education, becoming
              synonymous with innovation, preservation, and dissemination of
              knowledge. Through a dynamic blend of teaching, learning, and
              groundbreaking experimentation, we aspire to cultivate responsible
              individuals. These individuals will not only lead, but inspire,
              fostering a society driven by an insatiable thirst for progress
              and the prosperity of the human race.
            </p>
          </div>
        </div>

        <div className="misson">
          <div className="vm-name text-bg">Our Misson</div>
          <div className="vm-p">
            <p>
              Our mission is to ignite a passion for lifelong learning and
              empower our students with the knowledge, skills, and character to
              thrive in an ever-evolving world. Through innovative teaching
              methodologies, rigorous academic standards, and a nurturing
              environment, we foster critical thinking, creativity, and
              leadership. We are dedicated to cultivating compassionate and
              responsible individuals who are committed to making positive
              contributions to their communities and to the advancement of
              society as a whole.
            </p>
          </div>
        </div>
      </div>

      <div className="fotter"></div>
    </>
  );
}
