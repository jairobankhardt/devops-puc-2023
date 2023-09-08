import { Avatar, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function SortNumber() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 10) + 1
  );
  const [msg, setMsg] = useState("");

  const checkNumber = (number) => {
    if (number === randomNumber) {
      setMsg(
        `Acertou! Era ${randomNumber}. Ela já mentalizou outro número. Quer tentar de novo?`
      );
    } else {
      setMsg(
        `Errou! Ela tinha pensado no ${randomNumber} e já mentalizou outro número. Tente novamente.`
      );
    }
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
  };

  return (
    <>
      <Typography variant="h4">
        Tente adivinhar o número, <br /> que a pitonisa mentalizou
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 3,
        }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <Avatar
            key={i + 1}
            sx={{
              bgcolor: "#134074",
              mx: 1,
              ":hover": {
                bgcolor: "#13315c",
              },
            }}
            onClick={() => checkNumber(i + 1)}
          >
            {i + 1}
          </Avatar>
        ))}
      </Stack>
      <Typography>{msg}</Typography>
    </>
  );
}
