import { IconNode } from "lucide-react";
import "./CardsAdm.css";

export type CardsAdmProps = {
  numberMoney: number;
  iconCard: IconNode;
  textBodyCard: string;
  colorPrinc: string;
  arrowIndication?: IconNode;
  porcentMonth: string;
  colorInfosMonth: string;
};

export function CardsAdm({ numberMoney, iconCard, textBodyCard, colorPrinc = "#fff", arrowIndication, porcentMonth, colorInfosMonth }: CardsAdmProps) {
  return (
    <div className={`w-[26%] h-3/4 max-h-52 flex flex-col items-start gap-5 p-4 rounded-lg shadow-lg`} style={{ background: colorPrinc }}>
      <header className="flex items-center justify-between">
        {iconCard}

        <div className={`flex items-center flex-row gap-1 ${Number(porcentMonth) > 0 ? "positive" : Number(porcentMonth) < 0 ? "negative" : "null"}`}>
          {arrowIndication && (
            <>
              {arrowIndication}

              <p>
                <span className={`text-[${colorInfosMonth}]`}>{differencyPorcent()}</span>
                nos ultimos 30 dias
              </p>
            </>
          )}
        </div>
      </header>

      <section className={`flex flex-col gap-1 text-white`}>
        <h3 className="text-3xl">R$ {numberMoney.toFixed(2)}</h3>

        <span className="opacity-60">{textBodyCard}</span>
      </section>
    </div>
  );

  function differencyPorcent() {
    if (porcentMonth !== null) return `${parseFloat(porcentMonth).toFixed(2)}% `;
    else return "0.00%";
  }
}
