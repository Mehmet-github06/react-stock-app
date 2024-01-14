import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/BrandModal";
import Skeleton from "@mui/material/Skeleton";
const Brands = () => {
  // const { getBrands, getSales } = useStockCalls()
  const { getStocks } = useStockCalls();
  const { brands, loading } = useSelector((state) => state.stock);

  const [info, setInfo] = useState({
    name: "",
    image: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({ name: "", image: "" });
  };

  useEffect(() => {
    // getBrands()
    getStocks("brands");
  }, []);

  console.log(brands);
  if (loading) {
    return (
      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {[...new Array(8)].map((_, index) => ( 
          <Grid item key={index}>
            <Skeleton  animation="wave" width={300} height={700} />
          </Grid>
        ))}
      </Grid>
    );
  }
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Brands
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Brand
      </Button>

      <BrandModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {brands?.map((brand) => (
          <Grid item key={brand._id}>
            <BrandCard brand={brand} handleOpen={handleOpen} setInfo={setInfo} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Brands;
