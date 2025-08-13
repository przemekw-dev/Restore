import { decrement, increment, incrementByAmount } from "./counterSlice";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store";

const ContactPage = () => {
  const { data } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <Typography variant="h2">Contact Page</Typography>
      <Typography variant="body1">The data is: {data}</Typography>

      <ButtonGroup>
        <Button color="error" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
        <Button color="success" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Button color="success" onClick={() => dispatch(incrementByAmount(5))}>
          Incr by 5
        </Button>
      </ButtonGroup>
    </>
  );
};
export default ContactPage;
