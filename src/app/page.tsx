"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  // const formrunApiUrl = process.env.NEXT_PUBLIC_FORMRUN_API_URL;
  // const formrunFormId = process.env.NEXT_PUBLIC_FORMRUN_FORM_ID;
  // const redirectUrl = process.env.NEXT_PUBLIC_REDIRECT_URL;
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

        <form className="formrun" action="https://form.run/api/v1/r/cqm93erpznitjczx4wb6usiw" method="post">
          <div>
            <label>お名前</label>
            <input name="お名前" type="text" />
          </div>

          <div>
            <label>メールアドレス [必須]</label>
            <input name="メールアドレス" type="text" data-formrun-type="email" data-formrun-required />
            <div data-formrun-show-if-error="メールアドレス">メールアドレスを正しく入力してください</div>
          </div>

          <div>
            <label>お問い合わせ [必須]</label>
            <textarea name="お問い合わせ" data-formrun-required></textarea>
            <div data-formrun-show-if-error="お問い合わせ">お問い合わせ内容を入力してください</div>
          </div>

          <div>
            <label>個人情報利用同意 [必須]</label>
            <input type="checkbox" name="個人情報利用同意" data-formrun-required />
            <div data-formrun-show-if-error="個人情報利用同意">同意してください</div>
          </div>

          <div className="_formrun_gotcha">
            <style media="screen" jsx>{`
              ._formrun_gotcha {
                position: absolute !important;
                height: 1px;
                width: 1px;
                overflow: hidden;
              }
            `}</style>
            <label htmlFor="_formrun_gotcha">If you are a human, ignore this field</label>
            <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex={-1} />
          </div>

          <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信</button>
        </form>

      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
