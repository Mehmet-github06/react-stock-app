import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import NewBrandModal from "../components/NewBrandModal";
import * as React from "react";
import BrandCard from "../components/BrandCard";

const Brands = () => {
  // const { getFirms, getSales } = useStockCalls()
  const { getStocks } = useStockCalls();
  const { brands } = useSelector((state) => state.stock);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // getFirms()
    getStocks("brands");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Brands
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Brands
      </Button>

      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {brands?.map((brand) => (
          <Grid item key={brand._id}>
            <BrandCard brand={brand} />
          </Grid>
        ))}
      </Grid>
      <NewBrandModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Brands;
