import { Cormorant_Garamond as FontStyle } from "next/font/google";
import { Container } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

const font = FontStyle({
  weight: ["400"],
  subsets: ["latin"],
});

export default async function Footer() {
  return (
    <main className="footer">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className={`${font.className}`}>since 2016</span>
        <CopyrightIcon />
      </Container>
    </main>
  );
}
