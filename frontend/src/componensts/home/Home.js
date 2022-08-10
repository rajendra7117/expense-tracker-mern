import React from "react";
import "./Home.scss";
import expenseImg from "../../images/expenses.png";
import barchartImg from "../../images/bar-chart.png";
import doughnutImg from "../../images/doughnut-chart.png";
import Wrapper from "../shared/Layout/Wrapper";
import Card from "./Card";
const Home = () => {
  return (
    <Wrapper>
      <div className="home">
        <div className="part-1">
          <h1>
            Manage Your <br /> Expense Easily <br /> With <text>ET.</text>
          </h1>
          <button>Register Now</button>
        </div>
        <div className="part-2">
          <Card img={expenseImg} className="card-1"/>
          <Card img={barchartImg} className="card-2"/>
          <Card img={doughnutImg} className="card-3"/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
