import { Alert, Skeleton, Stack } from "@mui/material";

export const ErrorMsg = () => {
  return (
    <Alert variant="filled" severity="error" sx={{ my: 3 }}>
      Veriler çekilemedi.
    </Alert>
  );
};

export const NoDataMsg = () => {
  return (
    <Alert variant="filled" severity="warning" sx={{ my: 3 }}>
      Gösterilecek bir veri bulunamadı.
    </Alert>
  );
};


export const CardSkeleton = ({ children }) => {
  return (
    <Stack
      spacing={2}
      display={"flex"}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      flexWrap="wrap" // Wrap özelliği ekleniyor
      margin={3}
      
    >
      {[...Array(4)].map((_, index) => (
        <Skeleton key={index} variant="rectangular" flex="1">
          {children}
        </Skeleton>
      ))}
    </Stack>
  );
};


const TableSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width="100%" height={80} />
      <Skeleton variant="rectangular" width="100%" height={40} />
      <Skeleton variant="rectangular" width="100%" height={40} />
      <Skeleton variant="rectangular" width="100%" height={40} />
    </Stack>
  );
};

export default TableSkeleton;
