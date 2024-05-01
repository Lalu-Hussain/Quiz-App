import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
);

function Header() {
  return <h1>Java Mcq Questions</h1>;
}

function Content() {
  function getResults(event) {
    event.preventDefault();
    let a = event.target.que1.value;
    let b = event.target.que2.value;
    let c = event.target.que3.value;
    let d = event.target.que4.value;
    let e = event.target.que5.value;
    let f = event.target.que6.value;
    let g = event.target.que7.value;
    let h = event.target.que8.value;
    let i = event.target.que9.value;
    let j = event.target.que10.value;
    let marks = 0;
    if (a === "Model View Control") {
      marks++;
    }
    if (b === "JavaScript") {
      marks++;
    }
    if (c === "Relational Database") {
      marks++;
    }
    if (d === "Document Object Model") {
      marks++;
    }
    if (e === "Angular") {
      marks++;
    }
    if (f === "Track changes in source code") {
      marks++;
    }
    if (g === "GET") {
      marks++;
    }
    if (h === "Manage software dependencies") {
      marks++;
    }
    if (i === "Express") {
      marks++;
    }
    if (j === "Representational State Transfer") {
      marks++;
    }
    alert("Your Marks Are : " + marks);
  }

  return (
    <form onSubmit={getResults}>
      <div>
        <Question
          q="1 . What does 'MVC' stand for in the context of full stack development ? "
          op1="Model View Control"
          op2="Model View Component"
          op3="Model View Configuration"
          op4="Model Visual Code"
          name="que1"
        />
        <Question
          q="2 . Which of the following languages is commonly used for server-side scripting in full stack development ?"
          op1="JavaScript"
          op2=" HTML"
          op3="CSS"
          op4="Python"
          name="que2"
        />
        <Question
          q="3 . Which database type is often associated with full stack development ?"
          op1="Relational Database"
          op2="NoSQL Database"
          op3="Flat-file Database"
          op4="Hierarchical Database"
          name="que3"
        />
        <Question
          q="4 . In the context of front-end development, what does the acronym 'DOM' stand for ?"
          op1="Document Object Model"
          op2="Data Object Model"
          op3="Design Object Model"
          op4="Dynamic Object Model"
          name="que4"
        />
        <Question
          q="5. Which framework is commonly used for building user interfaces in JavaScript ?"
          op1="Angular"
          op2="Django"
          op3=" Flask"
          op4=" Laravel"
          name="que5"
        />
        <Question
          q="6 . What is the purpose of version control systems in full stack development ?"
          op1="Manage server configurations"
          op2="Track changes in source code"
          op3=" Design user interfaces"
          op4="Optimize database queries"
          name="que6"
        />
        <Question
          q="7 . Which HTTP method is typically used for retrieving data from a server in a full stack application ?"
          op1="POST"
          op2=" GET"
          op3="PUT"
          op4="DELETE"
          name="que7"
        />
        <Question
          q="8 . What is the role of a package manager in full stack development ?"
          op1="Manage software dependencies"
          op2="Design user interfaces"
          op3=" Optimize database performance"
          op4=" Control server configurations"
          name="que8"
        />
        <Question
          q="9 . Which of the following is not a commonly used front-end framework/library ?"
          op1="React"
          op2="Vue.js"
          op3=" Express"
          op4="Angular"
          name="que9"
        />
        <Question
          q="10 . What does REST stand for in the context of full stack development ?"
          op1="Representational State Transfer"
          op2="Remote Execution Service Technology"
          op3=" Responsive Style Template"
          op4="Resource Estimation and Scheduling Technique"
          name="que10"
        />
        <br />
        <input type="submit" value={"Register Submit"} />
      </div>
    </form>
  );
}

function Footer() {
  return <h1>Footer</h1>;
}

function Question(props) {
  return (
    <div>
      <h4>{props.q}</h4>
      <label>
        <input type="radio" name={props.name} value={props.op1} />
        {props.op1}
      </label>
      <label>
        <input type="radio" name={props.name} value={props.op2} />
        {props.op2}
      </label>
      <label>
        <input type="radio" name={props.name} value={props.op3} />
        {props.op3}
      </label>
      <label>
        <input type="radio" name={props.name} value={props.op4} />
        {props.op4}
      </label>
    </div>
  );
}
