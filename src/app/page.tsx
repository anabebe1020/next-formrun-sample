"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

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

  useEffect(() => {
    const form = document.getElementById("my-form") as HTMLFormElement;
    if (!form) {
      console.error("Form not found");
      return;
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // 送信を一旦止める
      // 値を取り出す
      const sitePass = (document.getElementById("site-pass") as HTMLInputElement).value;
      // 加工
      const encryptedSitePass = 'encrypted' + sitePass;
      // 値を hidden にセット
      (document.getElementById("encrypted-site-pass") as HTMLInputElement).value = encryptedSitePass;
      // 再送信
      form.submit();
    });
    return () => form.removeEventListener("submit", function () {});
  }
  , []);

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
          id="my-form"
          className="formrun"
          action="https://form.run/api/v1/r/cqm93erpznitjczx4wb6usiw"
          method="post"
        >
          <div>
            <label>サイトID</label>
            <input name="サイトID" type="text" data-formrun-required />
            <div data-formrun-show-if-error="サイトID">入力してください</div>
          </div>

          <div>
            <label>サイトパスワード</label>
            <input id="site-pass" name="サイトパスワード（生）" type="text" data-formrun-required />
            <input id="encrypted-site-pass" type="hidden" name="サイトパスワード" />
            <div data-formrun-show-if-error="サイトパスワード">入力してください</div>
          </div>

          <div>
            <label>ショップID</label>
            <input name="ショップID" type="text" data-formrun-required />
            <div data-formrun-show-if-error="ショップID">入力してください</div>
          </div>

          <div>
            <label>ショップパスワード</label>
            <input id="shop-pass" name="ショップパスワード（生）" type="text" data-formrun-required />
            <input id="encrypted-shop-pass" type="hidden" name="ショップパスワード" />
            <div data-formrun-show-if-error="ショップパスワード">入力してください</div>
          </div>

          <div>
            <label>公開鍵(.pub ファイル)</label>
            <textarea name="公開鍵(.pub ファイル)" data-formrun-required></textarea>
            <div data-formrun-show-if-error="公開鍵(.pub ファイル)">入力してください</div>
          </div>

          <div>
            <label>公開鍵Hash</label>
            <input name="公開鍵Hash" type="text" data-formrun-required />
            <div data-formrun-show-if-error="公開鍵Hash">入力してください</div>
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
