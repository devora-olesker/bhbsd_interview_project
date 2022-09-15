import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from "@mui/material";

export default function PersonDialog(props) {
  const { onClose, open, name, company, pic, bio } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} >
      <DialogTitle textAlign='center' fontSize={{ xs: 14, sm: 16, md: 18, lg: 20 }}>{name}<br></br>{company}</DialogTitle>
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
        <DialogContentText fontSize={{ xs: 12, sm: 14, md: 16, lg: 18 }}>
          {bio}
        </DialogContentText>
      </DialogContent>
      <DialogActions >
        <Button autoFocus onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog >
  );
}
