import Transition from "./component/Transition"
import FormComponent from "./component/FormComponent"
import "./App.css"
// import { useState, useEffect, useReducer } from "react";
import { useState, useEffect } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./component/ReportComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  const design = { color: "red", textAlign: "center", fontSize: "1.5rem", }

  // const initData = [
  //   { id: 1, title: "ค่าเช่าห้อง", amount: -3500 },
  //   { id: 2, title: "ค่างวดรถ", amount: -4650 },
  //   { id: 2, title: "เงินเดือน", amount: 6000 },

  // ]

  const [items, setItems] = useState([])

  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }

  useEffect(() => {
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(e => e > 0).reduce((total, e) => total += e, 0)
    const expense = (amounts.filter(e => e < 0).reduce((total, e) => total += e, 0)) * -1
    setReportIncome(income.toFixed(2))
    setReportExpense(expense.toFixed(2))
  }, [items, reportIncome, reportExpense])

  // // reducer state
  // const [showReport, setShowReport] = useState(false)
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       return setShowReport(true)
  //     case "HIDE":
  //       return setShowReport(false)
  //   }
  // }
  // const [result, dispatch] = useReducer(reducer, showReport)

  return (
    <DataContext.Provider value={{ income: reportIncome, expense: reportExpense }}>
      <div className="container">
        <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Switch>

              <Route path="/" exact>
                <ReportComponent />
              </Route>

              <Route path="/insert">
                <FormComponent onAddItem={onAddNewItem} />
                <Transition items={items} />
              </Route>

            </Switch>
          </div>
        </Router>
      </div>
    </DataContext.Provider >

  );
}

export default App;
