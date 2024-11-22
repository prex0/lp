import React from "react";

export function PrivacyPolicyComponent() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>

        <div className="space-y-8 text-gray-300">
          <p className="leading-relaxed">
            株式会社Teliha（以下「当社」といいます）は、当社が提供するサービス（以下「本サービス」といいます）をご利用いただくお客様（以下「お客様」といいます）のプライバシーを尊重し、個人情報を適切に保護するため、以下のポリシーを定めています。
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              1. 個人情報の定義
            </h2>
            <p className="leading-relaxed">
              本プライバシーポリシーにおいて「個人情報」とは、生存する個人に関する情報であり、氏名、住所、メールアドレス、電話番号など、特定の個人を識別できる情報を指します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              2. 個人情報の収集方法
            </h2>
            <p className="leading-relaxed mb-4">
              当社は、以下の方法で個人情報を収集します。
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                サービスのご利用に際してお客様が提供する情報（例:
                アカウント登録時の情報）
              </li>
              <li>
                お問い合わせやカスタマーサポートへの連絡時に提供される情報
              </li>
              <li>クッキーやログデータを通じた自動収集情報</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              3. 個人情報の利用目的
            </h2>
            <p className="leading-relaxed mb-4">
              当社は、以下の目的で個人情報を利用します。
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>本サービスの提供および運営</li>
              <li>お客様からのお問い合わせへの対応</li>
              <li>サービス改善や新機能開発のための分析</li>
              <li>法令に基づく義務を履行するため</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              4. 個人情報の第三者提供
            </h2>
            <p className="leading-relaxed">
              当社は、法令に基づく場合を除き、事前にお客様の同意を得ることなく個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              5. 個人情報の安全管理
            </h2>
            <p className="leading-relaxed">
              当社は、個人情報の漏洩、紛失、改ざん、または不正アクセスを防止するため、適切な技術的および組織的な安全管理措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              6. 個人情報の保存期間
            </h2>
            <p className="leading-relaxed">
              当社は、個人情報を収集した目的を達成するために必要な期間、または法令で定められた期間を超えて保存することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              7. お客様の権利
            </h2>
            <p className="leading-relaxed mb-4">
              お客様は、以下の権利を有します。
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>自身の個人情報へのアクセス、修正、削除を要求する権利</li>
              <li>個人情報の処理に関する異議を申し立てる権利</li>
              <li>データポータビリティの権利（適用がある場合）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              8. クッキーの使用
            </h2>
            <p className="leading-relaxed">
              当社は、本サービスの利便性向上や利用状況の分析のためにクッキーを使用することがあります。クッキーの使用に同意いただけない場合は、ブラウザの設定で無効にすることができます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              9. プライバシーポリシーの変更
            </h2>
            <p className="leading-relaxed">
              当社は、法令の改正やサービス内容の変更に応じて、本ポリシーを随時改定することがあります。改定後の内容は、本ウェブサイト上で通知します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              10. お問い合わせ窓口
            </h2>
            <p className="leading-relaxed">
              本ポリシーに関するお問い合わせは、以下の窓口までご連絡ください。
            </p>
            <div className="mt-4 bg-white/5 p-6 rounded-lg">
              <p>株式会社Teliha</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:support@prex0.com"
                  className="text-blue-400 hover:underline"
                >
                  support@prex0.com
                </a>
              </p>
              <p>住所: 〒810-0041 福岡県福岡市中央区大名2-6-11</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
