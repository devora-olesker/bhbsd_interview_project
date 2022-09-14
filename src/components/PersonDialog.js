import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function PersonDialog(props) {
  const { onClose, open, name, company, pic, bio } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} >
      <DialogTitle textAlign='center'>{name}<br></br>{company}</DialogTitle>
      <DialogContent dividers >
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          marginBottom={2}
        >
         <img src={pic} alt={name} ></img>
        </Grid>
        <DialogContentText >
        <Typography>
          {bio}
        </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions >
        <Button autoFocus  onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog >
  );
}
