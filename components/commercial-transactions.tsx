import React from "react";

export function CommercialTransactionsComponent() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">特定商取引法に基づく表記</h1>

        <div className="space-y-8">
          <section className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">販売業者</h2>
            <p className="text-gray-300">株式会社Teliha</p>
          </section>

          <section className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">運営責任者</h2>
            <p className="text-gray-300">部谷 修平</p>
          </section>

          <section className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">所在地</h2>
            <p className="text-gray-300">
              〒810-0041 福岡県福岡市中央区大名2-6-11
            </p>
          </section>

          <section className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">お問い合わせ先</h2>
            <p className="text-gray-300">
              メールアドレス:{" "}
              <a
                href="mailto:support@prex0.com"
                className="text-blue-400 hover:underline"
              >
                support@prex0.com
              </a>
            </p>
            <p className="text-gray-300 mt-2">
              お問い合わせはメールのみで承っております。電話でのお問い合わせは対応しておりません。
            </p>
          </section>

          <section className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">販売価格</h2>
            <p className="text-gray-300">
              各サービスページに記載されている価格をご確認ください。料金は税込価格で表示されています。
            </p>
          </section>

          <section className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              商品代金以外の必要料金
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>消費税（料金に含まれている場合を除く）</li>
              <li>銀行振込手数料（振込支払いの場合）</li>
              <li>
                インターネット接続料金および通信費（お客様の負担となります）
              </li>
            </ul>
          </section>

          <section className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              支払方法および支払時期
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                <strong>支払方法:</strong>{" "}
                クレジットカード、銀行振込、その他の方法（詳細は各サービスページをご確認ください）
              </p>
              <p>
                <strong>支払時期:</strong>{" "}
                クレジットカードの場合は、各カード会社の規定に基づきます。行振込の場合は、ご注文後7日以内にお支払いください。
              </p>
            </div>
          </section>

          <section className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">サービス提供時期</h2>
            <p className="text-gray-300">
              お支払い手続き完了後、速やかにサービスの提供を開始します。ただし、各サービスにおいて具体的な提供時期が異なる場合は、サービスページに記載の内容に準じます。
            </p>
          </section>

          <section className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              キャンセル・解約について
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                サービスの性質上、提供開始後のキャンセルおよび返金はお受けできません。ただし、サービスに瑕疵が認められる場合は、別途対応いたします。
              </p>
              <p>
                解約についての詳細は、利用規約またはサービスページをご参照ください。
              </p>
            </div>
          </section>

          <section className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">動作環境</h2>
            <p className="text-gray-300">
              サービス利用に必要な推奨環境は、各サービスページに記載しております。推奨環境以外での動作保証は致しかねます。
            </p>
          </section>

          <section className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">特別条件</h2>
            <p className="text-gray-300">
              定期契約のサービスについては、契約期間および更新条件を利用規約またはサービスページにて別途定めます。
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
