import React from "react";
import log from "../Compones/image/63053b59-1bdf-436a-ae0c-7b0f6a4e48bd.png";
import "./Login.css";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <>
      <div className="main-log">
        <div className="right-log">
          < motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="main-from">
            <div className="log-1st">
              {/* <h1>Be a part of Jatiya Bidyalaya and shape a brighter tomorrow!</h1> */}
              <h1>Log in to your account...!</h1>
            </div>

            <div className="log-from">
              <form>
                <div className="email-pass">
                  <label>
                    Email Address <span><sup className="span">*</sup></span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    required
                  ></input>
                </div>
                <div className="email-pass">
                  <label>
                    Password <span > <sup className="span">*</sup></span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    required
                  ></input>
                  <div className="pass">
                    <label className="forgot">Forgot Password</label>
                  </div>
                </div>
                <div>
                  <input type="submit" className="submit"></input>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="left-log"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img className="login-logo" src={log} alt="Log in" />
        </motion.div>
      </div>
    </>
  );
};

export default Login;
