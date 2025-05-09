"use client";

import Image from "next/image";
import styles from "./page.module.css";

// const FORMRUN_API_URL = "https://form.run/api/v1/forms/abe-r-5kuuN4VL0zPjjgCV04K2";
const FORMRUN_API_URL = "https://form.run/embed/@abe-r-5kuuN4VL0zPjjgCV04K2?embed=direct";

export default function Home() {
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   try {
  //     event.preventDefault();
  //     const form = document.getElementById("custom-form") as HTMLFormElement;
  //     const formData = new FormData(form);
  //     const data: { [key: string]: string } = {};
  //     formData.forEach((value, key) => {
  //       if (key === "_field_3" || key === "_field_4") {
  //         data[key] = value as string;
  //       }
  //     });
  //     console.log(data);
  //     await fetch(FORMRUN_API_URL, {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //     });
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <form
          id="custom-form"
          action={FORMRUN_API_URL}
          method="POST"
          // onSubmit={handleSubmit}
        >
          <input type="text" name="_field_3" placeholder="テキストA" required />
          <input type="text" name="_field_4" placeholder="テキストB" required />

          {/* <input type="hidden" name="_redirect" value="https://form.run/@abe-r-5kuuN4VL0zPjjgCV04K2/thanks" /> */}
          <input type="hidden" name="_redirect" value="./sent" />

          <button type="submit">送信</button>
        </form>

      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
