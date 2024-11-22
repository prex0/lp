import React from "react";
import { Mail, Clock, AlertCircle } from "lucide-react";

export function SupportPageComponent() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">カスタマーサポート</h1>

        <div className="space-y-8">
          <section className="bg-white/5 p-6 rounded-lg">
            <p className="text-gray-300">
              株式会社Telihaでは、Prexに関するお客様のご質問やお困りごとに迅速かつ丁寧に対応するため、
              メールサポートを提供しております。以下のメールアドレスまでお気軽にお問い合わせください。
            </p>
          </section>

          <section className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Mail className="mr-2" /> お問い合わせ先
            </h2>
            <p className="text-gray-300">
              📧 メールアドレス:{" "}
              <a
                href="mailto:support@prex0.com"
                className="text-blue-400 hover:underline"
              >
                support@prex0.com
              </a>
            </p>
          </section>

          <section className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Clock className="mr-2" /> 対応時間
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li>平日: 午前10時～午後6時（日本時間）</li>
              <li>土日祝: 休業日</li>
              <li className="text-sm italic">
                ※お問い合わせいただいた内容には、通常1～2営業日以内に返信いたします。
              </li>
            </ul>
          </section>

          <section className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              お問い合わせ時のお願い
            </h2>
            <p className="text-gray-300 mb-4">
              スムーズな対応のため、以下の情報をメールにご記載いただけますと幸いです：
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>お名前（または法人名）</li>
              <li>ご利用中のサービス内容</li>
              <li>お問い合わせ内容の詳細</li>
              <li>
                緊急の場合、その旨をメールタイトルに記載してください（例：「【緊急】トランザクションに関するご質問」）
              </li>
            </ul>
          </section>

          <section className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <AlertCircle className="mr-2" /> 注意事項
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                お問い合わせ内容によっては、調査にお時間をいただく場合がございます。
              </li>
              <li>
                サービス仕様やシステムの詳細に関する質問については、追加情報をお願いする場合がございます。
              </li>
              <li>
                個人情報保護のため、メール本文にクレジットカード番号やパスワードなどの機密情報を記載しないようご注意ください。
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
