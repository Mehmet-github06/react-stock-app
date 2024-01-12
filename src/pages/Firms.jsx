import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useEffect } from "react"
import useStockCalls from "../service/useStockCalls"
import { useSelector } from "react-redux"
import { Grid } from "@mui/material"
import FirmCard from "../components/FirmCard"
import NewFirmModal from "../components/NewFirmModal"
import * as React from 'react';


const Firms = () => {
  // const { getFirms, getSales } = useStockCalls()
  const { getStocks } = useStockCalls()
  const { firms } = useSelector((state) => state
  .stock)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    // getFirms()
    getStocks("firms")
  }, [])

  console.log(firms)

 

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen}>New Firm</Button>

      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {firms?.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
      <NewFirmModal open={open}  handleClose={handleClose}/>
    </div>
  )
}

export default Firms
