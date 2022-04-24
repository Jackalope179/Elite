import React, { useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import NumberFormat from "react-number-format";
import $ from 'jquery';

function LinearProgressWithLabel(props) {
    let ratio = props.value * 100 / props.targ;
    return <>
        <Box style={{paddingBottom: "0px"}} display="flex" alignItems="center" p={3}>
            <Box minWidth={35} style={{fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>
                <NumberFormat value={props.value} displayType={"text"} thousandSeparator={true} suffix={" VND"} />
                &nbsp; / &nbsp;
                <NumberFormat value={props.targ} displayType={"text"} thousandSeparator={true} suffix={" VND"} />
            </Box>
        </Box>
        <Box style={{paddingTop: "0px"}} display="flex" alignItems="center" p={3}>
            <Box width="100%" mr={3}>
                <LinearProgress style={{height: "10px"}} variant="determinate" value={ratio > 100 ? 100 : ratio} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    ratio
                )}%`}</Typography>
            </Box>
        </Box>
    </>;
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired
};

/*const useStyles = makeStyles({
    root: {
        width: "100%"
    }
});*/

const submitDonate = (e) => {
    let donate_amount = $("#donate_amount").val();
    console.log("Donate Amount:", donate_amount);
    let amount = {amount: donate_amount};
    fetch('/payment_momo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(amount)
    }).then(res => {
        res.json().then(result => {
            console.log(result);
            if (result.succ) {
                window.location.href = result.link;
            } else {
                alert("Not successful");
            }
        })
    }).catch(err => {
        console.log("Error:", err);
    })
};

const DonateInputField = () => {
    return <>
        <Box style={{paddingBottom: "0px", paddingTop: "0px"}} display="flex" alignItems="center" p={3}>
            <Box minWidth={35}>
                <FormControl style={{marginLeft: "0px"}} fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Donate</InputLabel>
                    <OutlinedInput
                        id="donate_amount"
                        startAdornment={<InputAdornment position="start">VND</InputAdornment>}
                        label="Donate"
                    />
                </FormControl>
            </Box>
            <Box minWidth={35} style={{marginLeft: "20px"}}>
                <Button onClick={submitDonate}>Donate</Button>
            </Box>
        </Box>
    </>;
};

const Donate = () => {
    const [current, setCurrent] = useState(50000000);
    const [target, setTarget] = useState(100000000);
    // const classes = useStyles();
    return <div style={{width: "100%"}}>
        <LinearProgressWithLabel value={current} targ={target} />
        <DonateInputField />
    </div>;
    // <Button onClick={() => setBar(bar + 5)}>Increase +5</Button>
};

export default Donate;