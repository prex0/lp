import React from "react";

export function TermsOfServiceComponent() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">利用規約</h1>

        <div className="space-y-8 text-gray-300">
          <p className="leading-relaxed">
            株式会社Teliha（以下「当社」といいます）は、企業向けに提供するソフトウェア・サービス（以下「本サービス」といいます）の利用に関して、以下の利用規約（以下「本規約」といいます）を定めます。本サービスをご利用になることで、本規約に同意したものとみなします。
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              第1条：適用範囲
            </h2>
            <p className="leading-relaxed">
              本規約は、本サービスを利用するすべての法人または団体（以下「ユーザー」といいます）に適用されます。本サービスの利用を開始した時点で、本規約に同意したものとみなします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              第2条：サービスの内容
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                本サービスは、ユーザーの業務を支援するために設計されたクラウドベースのソフトウェア（SaaS）を提供します。
              </li>
              <li>
                当社は、提供する機能およびサービスの利用がユーザーの事業活動を補完することを目的としており、ユーザーの事業運営そのものには関与しません。
              </li>
              <li>
                特定の分野（例:
                ブロックチェーン技術や仮想通貨）に関連する利用が含まれる場合、当該分野における法的適合性の確保はユーザー自身の責任となります。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              第3条：利用条件
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                ユーザーは、本サービスを自己の業務目的の範囲内でのみ利用することができます。
              </li>
              <li>
                ユーザーは、サービス利用において適用される法令を遵守するものとします。
              </li>
              <li>
                当社が提供するサービスや技術を用いた違法行為、または違法とみなされる可能性のある行為は禁止されます。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              第4条：禁止事項
            </h2>
            <p className="mb-4">
              ユーザーは、本サービスを以下の目的または方法で利用してはなりません：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>法令または本規約に違反する行為</li>
              <li>不正アクセスやシステムの妨害</li>
              <li>当社または第三者の知的財産権を侵害する行為</li>
              <li>公序良俗に反する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              第5条：サービス提供の停止・終了
            </h2>
            <p className="mb-4">
              当社は、以下の場合にユーザーへの事前通知なしに本サービスの提供を一時停止または終了することがあります：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>ユーザーが本規約に違反した場合</li>
              <li>ユーザーの事業活動が違法と判断される可能性がある場合</li>
              <li>
                技術的または運営上の理由によりサービス提供が困難となった場合
              </li>
            </ul>
            <p className="mt-4">
              サービス提供停止または終了によって生じた損害について、当社は一切の責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              第6条：知的財産権
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                本サービスに関するすべての知的財産権は、当社または当社にライセンスを許諾する第三者に帰属します。
              </li>
              <li>
                ユーザーは、本サービスを本規約に定める目的の範囲内でのみ利用することができます。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              第7条：免責事項
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                本サービスは現状有姿で提供されるものであり、当社はその正確性、完全性、有用性、または特定の目的への適合性について何ら保証しません。
              </li>
              <li>
                本サービスの利用に関連してユーザーに生じた損害について、当社の故意または重大な過失がある場合を除き、一切の責任を負いません。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              第8条：本規約の変更
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>当社は、必要に応じて本規約を変更することができます。</li>
              <li>
                本規約を変更した場合、変更後の内容を本サービスのウェブサイトに掲示し、通知します。変更後に本サービスを利用した場合、ユーザーは変更後の規約に同意したものとみなします。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              第9条：準拠法および管轄裁判所
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>本規約は、日本法に準拠します。</li>
              <li>
                本規約に関する紛争は、東京地方裁判所を第一審の専属管轄裁判所とします。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              第10条：仮想通貨やブロックチェーンに関する特記事項
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                当社の提供するサービスには、ブロックチェーン技術を利用したコンポーネントが含まれる場合があります。ただし、当社は直接的に仮想通貨の取引、交換、または保管を行うものではありません。
              </li>
              <li>
                ユーザーは、仮想通貨およびブロックチェーン関連技術の利用が適用される法令に準拠していることを確認する責任を負います。
              </li>
              <li>
                当社は、ユーザーが本サービスを利用することにより第三者との間で生じた紛争または損害について、一切の責任を負いません。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">
              第11条：お問い合わせ
            </h2>
            <p className="mb-4">
              本規約に関するご質問がある場合は、以下の連絡先までお問い合わせください。
            </p>
            <div className="bg-white/5 p-6 rounded-lg">
              <p>株式会社Teliha</p>
              <p>
                📧 Email:{" "}
                <a
                  href="mailto:support@prex0.com"
                  className="text-blue-400 hover:underline"
                >
                  support@prex0.com
                </a>
              </p>
              <p>📍 住所: 〒810-0041 福岡県福岡市中央区大名2-6-11</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
