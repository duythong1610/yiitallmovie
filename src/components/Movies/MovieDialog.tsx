import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import { Cast } from "../../shared/types";

export const MovieDialog = (props: any) => {
  const { handleClose, open, listMovieDetail } = props;
  console.log(listMovieDetail);

  const { credits } = listMovieDetail;

  return (
    <>
      <Dialog
        sx={{ p: 5 }}
        onClose={handleClose}
        open={open}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle sx={{ paddingBottom: 0 }} variant="h3"></DialogTitle>;
        {credits && {}}
        <DialogContent>{/* <h3> {creditsList.name}</h3> */}</DialogContent>;
      </Dialog>
      ;
    </>
  );
};
