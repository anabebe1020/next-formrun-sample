"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const formrunApiUrl = process.env.NEXT_PUBLIC_FORMRUN_API_URL;
  const redirectUrl = process.env.NEXT_PUBLIC_REDIRECT_URL;
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
          action={formrunApiUrl}
          method="POST"
        >
          <input type="text" name="_field_3" placeholder="テキストA" required />
          <input type="text" name="_field_4" placeholder="テキストB" required />

          <input type="hidden" name="_redirect" value={redirectUrl} />

          <button type="submit">送信</button>
        </form>

      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
