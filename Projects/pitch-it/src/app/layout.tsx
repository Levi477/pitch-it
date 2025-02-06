import { ReactNode } from "react";

export const metadata = {
  title: "Pitch It",
  description: "Pitch and Grow",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
