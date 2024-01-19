import { useEffect } from "react"
import Charts from "../components/Charts"
import KPI from "../components/KPI"
import useStockCalls from "../service/useStockCalls"
import Typography from "@mui/material/Typography";


const Home = () => {
  const { getStocks } = useStockCalls()

  useEffect(() => {
    getStocks("sales")
    getStocks("purchases")
  }, [])

  return (
    <>
       <Typography variant="h4" color="error" mb={4}>
        Dashboard
      </Typography>
      <KPI />
      <Charts />
    </>
  )
}

export default Home
