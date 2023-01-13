// // // PropTypes \\ \\ \\
import PropTypes from "prop-types";
import "./item.css"
const Item = (props) => {
  const { title, amount } = props
  const status = amount < 0 ? "expense" : "income"
  const symbol = amount < 0 ? "-" : "+"
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return (
    <li className={status}>{title}<span>{symbol}{formatNumber(Math.abs(amount))}</span></li >
  )
}

Item.propTypes = {
  // isRequired คือคำสั่งบังคับให้ใส่ข้อมูล 
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
}

export default Item;
// // // PropTypes \\ \\ \\


// // // props \\ \\ \\
// const Item = (props) => {
//   const { title, amout } = props

//   return (
//     <li>{title}<span>{amout}</span></li>
//   )
// }

// export default Item;
// // // props \\ \\ \\